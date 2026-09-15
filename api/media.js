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

export default async function handler(req, res) {
  noStore(res);
  if (!isUnlocked(req)) return res.status(401).send("Locked");

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

  // Range support so <video> can seek.
  const range = req.headers.range;
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (m) {
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Math.min(Number(m[2]), info.size - 1) : info.size - 1;
      if (start <= end && start < info.size) {
        res.statusCode = 206;
        res.setHeader("Content-Range", `bytes ${start}-${end}/${info.size}`);
        res.setHeader("Accept-Ranges", "bytes");
        res.setHeader("Content-Length", end - start + 1);
        return createReadStream(file, { start, end }).pipe(res);
      }
    }
  }
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Content-Length", info.size);
  createReadStream(file).pipe(res);
}
