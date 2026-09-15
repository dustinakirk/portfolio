import { isUnlocked, noStore } from "../_lib/session.js";
import { listProjects } from "../_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  if (!isUnlocked(req)) return res.status(401).json({ error: "Locked" });
  return res.status(200).json({ projects: await listProjects() });
}
