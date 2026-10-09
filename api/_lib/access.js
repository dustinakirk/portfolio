// Named, expiring passwords for the protected-projects gate.
//
// Credentials live in protected/access.json (gitignored; bundled into the
// functions at deploy time). Manage them with `npm run access -- <command>`.
// Each entry: { id, label, hash, createdAt, expiresAt|null, revokedAt|null }.
// PROTECTED_PASSWORD (env) is an optional never-expiring master password.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { createHash, scryptSync, timingSafeEqual } from "node:crypto";

export const ACCESS_FILE = path.join(process.cwd(), "protected", "access.json");
export const MASTER_ID = "master";

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 32 };

/** Hashes a password with a random salt: "scrypt$<saltHex>$<hashHex>". */
export function hashPassword(password, saltHex) {
  const salt = Buffer.from(saltHex, "hex");
  const hash = scryptSync(password.normalize("NFKC"), salt, SCRYPT.keylen, SCRYPT);
  return `scrypt$${saltHex}$${hash.toString("hex")}`;
}

function matchesHash(password, stored) {
  const [algo, saltHex, hashHex] = String(stored || "").split("$");
  if (algo !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(password.normalize("NFKC"), Buffer.from(saltHex, "hex"), expected.length, SCRYPT);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function loadCredentials() {
  let list = [];
  try {
    const raw = JSON.parse(await readFile(ACCESS_FILE, "utf8"));
    list = Array.isArray(raw?.credentials) ? raw.credentials : [];
  } catch {
    list = [];
  }
  return list;
}

export function credentialStatus(cred, now = Date.now()) {
  if (!cred) return "missing";
  if (cred.revokedAt) return "revoked";
  if (cred.expiresAt && Date.parse(cred.expiresAt) <= now) return "expired";
  return "active";
}

/** Returns the credential a password unlocks, or null. */
export async function verifyPassword(candidate) {
  if (typeof candidate !== "string" || !candidate.trim()) return null;
  const password = candidate.trim();

  const master = process.env.PROTECTED_PASSWORD;
  if (master) {
    const a = createHash("sha256").update(password).digest();
    const b = createHash("sha256").update(master.trim()).digest();
    if (timingSafeEqual(a, b)) {
      return { id: MASTER_ID, label: "Master password", expiresAt: null };
    }
  }

  const credentials = await loadCredentials();
  let matched = null;
  for (const cred of credentials) {
    // Check every entry so timing does not reveal which one matched.
    const ok = matchesHash(password, cred.hash);
    if (ok && !matched && credentialStatus(cred) === "active") matched = cred;
  }
  return matched;
}

/** Looks up a credential by id and reports whether it still grants access. */
export async function getCredential(id) {
  if (id === MASTER_ID) {
    return process.env.PROTECTED_PASSWORD
      ? { id: MASTER_ID, label: "Master password", expiresAt: null, status: "active" }
      : null;
  }
  const cred = (await loadCredentials()).find((c) => c.id === id);
  return cred ? { ...cred, status: credentialStatus(cred) } : null;
}
