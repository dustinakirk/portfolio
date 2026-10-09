// Visit logging for passwords created with `--track`.
//
// Each unlock with a tracked password starts a visit (its own HttpOnly cookie),
// and the browser reports page views to /api/activity. Records are written to
// the private "portfolio-analytics" Blob store (ANALYTICS_READ_WRITE_TOKEN):
//
//   activity/<credentialId>/<visitId>/visit.json    who, where, when
//   activity/<credentialId>/<visitId>/<viewId>.json  one page view, overwritten
//                                                    as its totals grow
//
// Read them with `npm run access -- stats <id>`. No IP addresses are stored.
import { put } from "@vercel/blob";
import { randomBytes } from "node:crypto";

export const VISIT_COOKIE = "pp_visit";
export const ACTIVITY_PREFIX = "activity";

const VISIT_ID_RE = /^\d{8}T\d{6}Z-[a-f0-9]{8}$/;
const VIEW_ID_RE = /^[a-z0-9]{8,40}$/i;

export function analyticsToken() {
  return process.env.ANALYTICS_READ_WRITE_TOKEN;
}

/** Visit ids sort by start time: "20261009T211403Z-1a2b3c4d". */
export function newVisitId() {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z");
  return `${stamp}-${randomBytes(4).toString("hex")}`;
}

export function isVisitId(value) {
  return typeof value === "string" && VISIT_ID_RE.test(value);
}

async function write(pathname, data) {
  const token = analyticsToken();
  if (!token) return;
  await put(`${ACTIVITY_PREFIX}/${pathname}`, JSON.stringify(data), {
    access: "private",
    token,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function header(req, name) {
  const value = req.headers?.[name];
  if (!value) return null;
  try {
    return decodeURIComponent(String(value));
  } catch {
    return String(value);
  }
}

function describeAgent(ua = "") {
  const browser =
    /Edg\//.test(ua) ? "Edge" :
    /OPR\/|Opera/.test(ua) ? "Opera" :
    /Firefox\//.test(ua) ? "Firefox" :
    /Chrome\//.test(ua) ? "Chrome" :
    /Safari\//.test(ua) ? "Safari" : "Other browser";
  const os =
    /iPhone|iPad|iPod/.test(ua) ? "iOS" :
    /Android/.test(ua) ? "Android" :
    /Mac OS X/.test(ua) ? "macOS" :
    /Windows/.test(ua) ? "Windows" :
    /Linux/.test(ua) ? "Linux" : "Other OS";
  const device = /Mobi|iPhone|Android.*Mobile/.test(ua) ? "phone" : /iPad|Tablet/.test(ua) ? "tablet" : "desktop";
  return { browser, os, device };
}

/** Records the start of a visit. `landing` is the page the visitor unlocked on. */
export async function recordVisit(req, credential, visitId, landing) {
  const ua = String(req.headers?.["user-agent"] || "").slice(0, 400);
  await write(`${credential.id}/${visitId}/visit.json`, {
    visitId,
    credentialId: credential.id,
    label: credential.label,
    startedAt: new Date().toISOString(),
    landing: cleanPath(landing),
    city: header(req, "x-vercel-ip-city"),
    region: header(req, "x-vercel-ip-country-region"),
    country: header(req, "x-vercel-ip-country"),
    timezone: header(req, "x-vercel-ip-timezone"),
    userAgent: ua,
    ...describeAgent(ua),
  });
}

function cleanPath(value) {
  return typeof value === "string" && value.startsWith("/") ? value.slice(0, 300) : null;
}
function cleanText(value, max) {
  return typeof value === "string" ? value.slice(0, max) : null;
}
function cleanNumber(value, min, max) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : 0;
}

/** Validates a page view sent by the browser. Returns null when unusable. */
export function cleanView(body) {
  if (!body || typeof body !== "object") return null;
  const id = typeof body.id === "string" && VIEW_ID_RE.test(body.id) ? body.id : null;
  const path = cleanPath(body.path);
  if (!id || !path) return null;

  const now = Date.now();
  const startedAt = cleanNumber(body.startedAt, now - 31 * 86400000, now + 60000);

  const videos = {};
  if (body.videos && typeof body.videos === "object") {
    for (const [src, v] of Object.entries(body.videos).slice(0, 12)) {
      const key = cleanPath(src);
      if (!key || !v || typeof v !== "object") continue;
      videos[key] = {
        watched: Math.round(cleanNumber(v.watched, 0, 36000) * 10) / 10,
        furthest: cleanNumber(v.furthest, 0, 36000),
        duration: cleanNumber(v.duration, 0, 36000),
      };
    }
  }

  const clicks = Array.isArray(body.clicks)
    ? body.clicks.slice(0, 40).map((c) => ({
        href: cleanText(c?.href, 500),
        text: cleanText(c?.text, 120),
        at: cleanNumber(c?.at, 0, 86400000),
      })).filter((c) => c.href)
    : [];

  return {
    id,
    path,
    title: cleanText(body.title, 200),
    from: cleanPath(body.from),
    startedAt: new Date(startedAt).toISOString(),
    activeMs: Math.round(cleanNumber(body.activeMs, 0, 86400000)),
    scroll: Math.round(cleanNumber(body.scroll, 0, 100)),
    videos,
    clicks,
  };
}

export async function recordView(credentialId, visitId, view) {
  await write(`${credentialId}/${visitId}/${view.id}.json`, {
    ...view,
    updatedAt: new Date().toISOString(),
  });
}
