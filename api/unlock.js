import { createToken, sessionCookie, passwordMatches, noStore, readJsonBody, SESSION_DAYS } from "./_lib/session.js";
import { listProjects } from "./_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { password } = await readJsonBody(req);
  if (!passwordMatches(password)) {
    // Small delay to blunt brute-force attempts.
    await new Promise((r) => setTimeout(r, 500));
    return res.status(401).json({ unlocked: false });
  }
  const { token } = createToken();
  res.setHeader("Set-Cookie", sessionCookie(token, SESSION_DAYS * 24 * 60 * 60));
  return res.status(200).json({ unlocked: true, days: SESSION_DAYS, projects: await listProjects() });
}
