import { isUnlocked, noStore } from "../_lib/session.js";
import { getProject } from "../_lib/content.js";

export default async function handler(req, res) {
  noStore(res);
  if (!isUnlocked(req)) return res.status(401).json({ error: "Locked" });
  const id = String(req.query?.id || "");
  const project = await getProject(id);
  if (!project) return res.status(404).json({ error: "Not found" });
  return res.status(200).json(project);
}
