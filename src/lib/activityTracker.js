// Reports page views to /api/activity while the visitor is unlocked. The
// server keeps them only for passwords created with `--track` (see
// api/_lib/activity.js) and drops the rest.
//
// A view records the page, active time, how far down the visitor scrolled,
// how much of each video they watched, and outbound clicks (resume, email,
// LinkedIn). It is sent a few seconds in, again whenever the tab is hidden,
// and once more when the visitor moves to another page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProtectedAccess } from "./protectedAccess";

const ENDPOINT = "/api/activity";
// Time counts as active while the tab is visible and the visitor has done
// something in the last minute, or while a video is playing.
const IDLE_MS = 60 * 1000;
const TICK_MS = 1000;
const FIRST_SEND_MS = 3000;
const INPUT_EVENTS = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll"];

let previousPath = null;

function newId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID().replace(/-/g, "");
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
}

function mediaPath(video) {
  try {
    return new URL(video.currentSrc || video.src, window.location.href).pathname;
  } catch {
    return null;
  }
}

function scrollDepth() {
  const total = document.documentElement.scrollHeight;
  if (!total) return 0;
  return Math.min(100, Math.round(((window.scrollY + window.innerHeight) / total) * 100));
}

function send(view) {
  const body = JSON.stringify(view);
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }))) return;
  } catch {
    /* fall back to fetch */
  }
  fetch(ENDPOINT, {
    method: "POST",
    body,
    keepalive: true,
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});
}

export default function ActivityTracker() {
  const { unlocked } = useProtectedAccess();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!unlocked) return undefined;

    const startedAt = Date.now();
    const view = {
      id: newId(),
      path: pathname,
      title: document.title,
      from: previousPath,
      startedAt,
      activeMs: 0,
      scroll: 0,
      videos: {},
      clicks: [],
    };
    previousPath = pathname;

    let lastInput = startedAt;
    let lastTick = startedAt;
    let dirty = false;
    const playing = new Set();
    const positions = new Map();

    const flush = () => {
      if (!dirty) return;
      dirty = false;
      send(view);
    };

    const tick = () => {
      const now = Date.now();
      const elapsed = Math.min(now - lastTick, 2 * TICK_MS);
      lastTick = now;
      if (document.visibilityState !== "visible") return;
      if (now - lastInput < IDLE_MS || playing.size) {
        view.activeMs += elapsed;
        dirty = true;
      }
      if (document.title && document.title !== view.title) view.title = document.title;
      view.scroll = Math.max(view.scroll, scrollDepth());
    };

    const onInput = () => {
      lastInput = Date.now();
    };

    // Media events don't bubble, so these listen in the capture phase.
    const trackVideo = (video) => {
      const key = mediaPath(video);
      if (!key) return;
      const entry = (view.videos[key] ||= { watched: 0, furthest: 0, duration: 0 });
      const time = video.currentTime;
      const delta = time - (positions.get(video) ?? time);
      // Small forward steps are playback; anything bigger is a seek.
      if (!video.paused && delta > 0 && delta < 2) entry.watched += delta;
      positions.set(video, time);
      entry.furthest = Math.max(entry.furthest, Math.round(time));
      if (Number.isFinite(video.duration)) entry.duration = Math.round(video.duration);
      dirty = true;
    };
    const onMedia = (e) => {
      const video = e.target;
      if (!(video instanceof HTMLVideoElement)) return;
      if (e.type === "playing") {
        playing.add(video);
        positions.set(video, video.currentTime);
        lastInput = Date.now();
      } else if (e.type === "seeked") {
        positions.set(video, video.currentTime);
      } else {
        trackVideo(video);
        if (e.type === "pause" || e.type === "ended") playing.delete(video);
      }
    };

    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      let url;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      const outbound =
        url.origin !== window.location.origin || /\.pdf$/i.test(url.pathname) || link.hasAttribute("download");
      if (!outbound) return;
      view.clicks.push({ href: url.href, text: link.textContent.trim().slice(0, 120), at: Date.now() - startedAt });
      dirty = true;
      flush();
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") flush();
    };

    const interval = setInterval(tick, TICK_MS);
    const firstSend = setTimeout(flush, FIRST_SEND_MS);
    INPUT_EVENTS.forEach((type) => window.addEventListener(type, onInput, { passive: true }));
    ["playing", "timeupdate", "pause", "ended", "seeked"].forEach((type) =>
      document.addEventListener(type, onMedia, true)
    );
    document.addEventListener("click", onClick, true);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);

    return () => {
      clearInterval(interval);
      clearTimeout(firstSend);
      INPUT_EVENTS.forEach((type) => window.removeEventListener(type, onInput));
      ["playing", "timeupdate", "pause", "ended", "seeked"].forEach((type) =>
        document.removeEventListener(type, onMedia, true)
      );
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
      playing.forEach(trackVideo);
      flush();
    };
  }, [unlocked, pathname]);

  return null;
}
