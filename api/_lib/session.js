// Signed, expiring session token for the protected-projects gate.
// Token format: <expiryMs>.<credentialId>.<base64url HMAC-SHA256(secret, "<expiryMs>.<credentialId>")>
//
// The token expires after SESSION_DAYS or when the credential that created it
// expires, whichever is first. Verification also re-checks the credential, so
// revoking a password ends its sessions immediately.
import { createHmac, timingSafeEqual } from "node:crypto";
import { getCredential } from "./access.js";

export const COOKIE_NAME = "pp_session";
export const SESSION_DAYS = 7;

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET is not set");
  return s;
}

function sign(payload) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

/** Creates a token for a credential. Returns { token, expiry } (expiry in ms). */
export function createToken(credential) {
  let expiry = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  if (credential?.expiresAt) expiry = Math.min(expiry, Date.parse(credential.expiresAt));
  const payload = `${expiry}.${credential.id}`;
  return { token: `${payload}.${sign(payload)}`, expiry };
}

/** Returns { credentialId, expiry } when the token is valid, else null. */
export async function verifyToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [expiryStr, credentialId, sig] = parts;
  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || !credentialId || !sig || expiry < Date.now()) return null;
  const expected = Buffer.from(sign(`${expiry}.${credentialId}`));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  const credential = await getCredential(credentialId);
  if (!credential || credential.status !== "active") return null;
  return { credentialId, expiry };
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

/** Resolves to the session ({ credentialId, expiry }) or null. */
export async function getSession(req) {
  return verifyToken(parseCookies(req)[COOKIE_NAME]);
}

export async function isUnlocked(req) {
  return Boolean(await getSession(req));
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
