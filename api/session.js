import { getSession, noStore, SESSION_DAYS } from "./_lib/session.js";
import { listProjects } from "./_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  const session = await getSession(req);
  if (!session) return res.status(200).json({ unlocked: false, days: SESSION_DAYS });
  return res.status(200).json({
    unlocked: true,
    days: SESSION_DAYS,
    expiresAt: new Date(session.expiry).toISOString(),
    projects: await listProjects(),
  });
}
