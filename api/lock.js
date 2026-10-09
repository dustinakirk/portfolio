import { clearCookie, httpOnlyCookie, noStore } from "./_lib/session.js";
import { VISIT_COOKIE } from "./_lib/activity.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  res.setHeader("Set-Cookie", [clearCookie(), httpOnlyCookie(VISIT_COOKIE, "", 0)]);
  return res.status(200).json({ unlocked: false });
}
