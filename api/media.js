// Streams files from protected/media/<id>/<file> to unlocked visitors only.
// Reached via the vercel.json rewrite /api/media/<path> -> /api/media?path=<path>.
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { isUnlocked, noStore } from "./_lib/session.js";
import { MEDIA_DIR } from "./_lib/content.js";

const TYPES = {
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".avif": "image/avif",
  ".mp4": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime",
  ".pdf": "application/pdf", ".json": "application/json", ".txt": "text/plain; charset=utf-8",
};

// Vercel caps function responses at 4.5 MB, so a range is answered with at most
// this many bytes. Video players request the next range as playback continues.
const MAX_RANGE_BYTES = 4 * 1024 * 1024;

/** Parses a single `bytes=` range. Returns { start, end }, "unsatisfiable", or null to ignore it. */
function parseRange(header, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header || "");
  if (!m || (!m[1] && !m[2])) return null;
  let start, end;
  if (m[1]) {
    start = Number(m[1]);
    if (m[2] && Number(m[2]) < start) return null;
    end = m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
  } else {
    // Suffix range: the last N bytes.
    start = Math.max(size - Number(m[2]), 0);
    end = size - 1;
  }
  if (start > end || start >= size) return "unsatisfiable";
  return { start, end: Math.min(end, start + MAX_RANGE_BYTES - 1) };
}

export default async function handler(req, res) {
  noStore(res);
  if (!(await isUnlocked(req))) return res.status(401).send("Locked");

  const url = new URL(req.url, "http://localhost");
  const rel = decodeURIComponent(
    url.searchParams.get("path") || url.pathname.replace(/^\/api\/media\/?/, "")
  );
  if (!rel || rel.split("/").some((seg) => !seg || seg === "." || seg === ".." || seg.startsWith("."))) {
    return res.status(400).send("Bad path");
  }
  const file = path.resolve(MEDIA_DIR, rel);
  if (!file.startsWith(MEDIA_DIR + path.sep)) return res.status(400).send("Bad path");

  let info;
  try {
    info = await stat(file);
  } catch {
    return res.status(404).send("Not found");
  }
  if (!info.isFile()) return res.status(404).send("Not found");

  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  res.setHeader("Content-Type", type);
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Range support so <video> can stream and seek.
  res.setHeader("Accept-Ranges", "bytes");
  const range = parseRange(req.headers.range, info.size);
  if (range === "unsatisfiable") {
    res.setHeader("Content-Range", `bytes */${info.size}`);
    return res.status(416).end();
  }
  if (range) {
    const { start, end } = range;
    res.statusCode = 206;
    res.setHeader("Content-Range", `bytes ${start}-${end}/${info.size}`);
    res.setHeader("Content-Length", end - start + 1);
    return createReadStream(file, { start, end }).pipe(res);
  }
  res.setHeader("Content-Length", info.size);
  createReadStream(file).pipe(res);
}
