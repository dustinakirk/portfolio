import { isUnlocked, noStore, SESSION_DAYS } from "./_lib/session.js";
import { listProjects } from "./_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  if (!isUnlocked(req)) return res.status(200).json({ unlocked: false, days: SESSION_DAYS });
  return res.status(200).json({ unlocked: true, days: SESSION_DAYS, projects: await listProjects() });
}
