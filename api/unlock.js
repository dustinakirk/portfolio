import { createToken, sessionCookie, noStore, readJsonBody, SESSION_DAYS } from "./_lib/session.js";
import { verifyPassword } from "./_lib/access.js";
import { listProjects } from "./_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { password } = await readJsonBody(req);
  const credential = await verifyPassword(password);
  if (!credential) {
    // Small delay to blunt brute-force attempts.
    await new Promise((r) => setTimeout(r, 500));
    return res.status(401).json({ unlocked: false });
  }
  const { token, expiry } = createToken(credential);
  const maxAge = Math.max(1, Math.floor((expiry - Date.now()) / 1000));
  res.setHeader("Set-Cookie", sessionCookie(token, maxAge));
  return res.status(200).json({
    unlocked: true,
    days: SESSION_DAYS,
    expiresAt: new Date(expiry).toISOString(),
    projects: await listProjects(),
  });
}
