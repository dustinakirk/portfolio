// Reads protected case studies from protected/content/*.md.
// Files are bundled into the functions via `includeFiles` in vercel.json.
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

export const CONTENT_DIR = path.join(process.cwd(), "protected", "content");
export const MEDIA_DIR = path.join(process.cwd(), "protected", "media");

export const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

/** Minimal front matter parser: `key: value` lines between --- fences. */
function parseFrontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (/^\[.*\]$/.test(value)) {
      value = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    meta[key] = value;
  }
  return { meta, body: m[2] };
}

function mediaUrl(id, src) {
  if (!src || /^(https?:)?\/\//.test(src) || src.startsWith("/")) return src;
  return `/api/media/${id}/${src.replace(/^\.\//, "")}`;
}

export function summarize(id, meta, order) {
  return {
    id,
    title: meta.title || id,
    subtitle: meta.subtitle || "",
    category: meta.category || "Confidential",
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    image: mediaUrl(id, meta.image || ""),
    imagePosition: meta.imagePosition || undefined,
    href: `/projects/${id}`,
    order: Number(meta.order ?? order ?? 0),
    protected: true,
  };
}

export async function listProjects() {
  let files = [];
  try {
    files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  const items = await Promise.all(
    files.map(async (f, i) => {
      const id = f.replace(/\.md$/, "");
      if (!ID_RE.test(id)) return null;
      const raw = await readFile(path.join(CONTENT_DIR, f), "utf8");
      const { meta } = parseFrontMatter(raw);
      if (meta.draft === "true") return null;
      return summarize(id, meta, i);
    })
  );
  return items.filter(Boolean).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getProject(id) {
  if (!ID_RE.test(id)) return null;
  let raw;
  try {
    raw = await readFile(path.join(CONTENT_DIR, `${id}.md`), "utf8");
  } catch {
    return null;
  }
  const { meta, body } = parseFrontMatter(raw);
  if (meta.draft === "true") return null;

  const renderer = new marked.Renderer();
  const baseImage = renderer.image.bind(renderer);
  renderer.image = (token) => baseImage({ ...token, href: mediaUrl(id, token.href) });
  const html = await marked.parse(body, { renderer, gfm: true, breaks: false });

  return { ...summarize(id, meta), html };
}
