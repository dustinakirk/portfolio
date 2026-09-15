// Signed, expiring session token for the protected-projects gate.
// Token format: <expiryMs>.<base64url HMAC-SHA256(secret, expiryMs)>
import { createHmac, createHash, timingSafeEqual } from "node:crypto";

export const COOKIE_NAME = "pp_session";
export const SESSION_DAYS = 7;

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET is not set");
  return s;
}

function sign(expiry) {
  return createHmac("sha256", secret()).update(String(expiry)).digest("base64url");
}

export function createToken() {
  const expiry = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  return { token: `${expiry}.${sign(expiry)}`, expiry };
}

export function verifyToken(token) {
  if (!token || typeof token !== "string") return false;
  const [expiryStr, sig] = token.split(".");
  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || !sig || expiry < Date.now()) return false;
  const expected = Buffer.from(sign(expiry));
  const given = Buffer.from(sig);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export function parseCookies(req) {
  const header = req.headers?.cookie || "";
  const out = {};
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

export function isUnlocked(req) {
  return verifyToken(parseCookies(req)[COOKIE_NAME]);
}

export function sessionCookie(token, maxAgeSeconds) {
  const attrs = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAgeSeconds}`,
  ];
  if (process.env.VERCEL_ENV || process.env.NODE_ENV === "production") attrs.push("Secure");
  return attrs.join("; ");
}

export function clearCookie() {
  return sessionCookie("", 0);
}

/** Constant-time password comparison against PROTECTED_PASSWORD. */
export function passwordMatches(candidate) {
  const expected = process.env.PROTECTED_PASSWORD;
  if (!expected || typeof candidate !== "string") return false;
  const a = createHash("sha256").update(candidate.trim()).digest();
  const b = createHash("sha256").update(expected.trim()).digest();
  return timingSafeEqual(a, b);
}

export function noStore(res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
}

export function readJsonBody(req) {
  return new Promise((resolve) => {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    if (typeof req.body === "string") {
      try { return resolve(JSON.parse(req.body)); } catch { return resolve({}); }
    }
    let data = "";
    req.on("data", (c) => { data += c; });
    req.on("end", () => {
      try { resolve(JSON.parse(data || "{}")); } catch { resolve({}); }
    });
  });
}
