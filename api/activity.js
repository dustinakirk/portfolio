import { getSession, parseCookies, httpOnlyCookie, noStore, readJsonBody } from "./_lib/session.js";
import { VISIT_COOKIE, isVisitId, newVisitId, recordVisit, cleanView, recordView } from "./_lib/activity.js";

// Page-view reports from the browser (see src/lib/activityTracker.js). Only
// sessions unlocked with a tracked password are recorded; everything else is
// acknowledged and dropped.
export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const session = await getSession(req);
  if (!session?.credential?.track) return res.status(204).end();

  const view = cleanView(await readJsonBody(req));
  if (!view) return res.status(400).json({ error: "Invalid view" });

  try {
    let visitId = parseCookies(req)[VISIT_COOKIE];
    if (!isVisitId(visitId)) {
      // Session predates the visit cookie (or it was cleared): start a visit now.
      visitId = newVisitId();
      const maxAge = Math.max(1, Math.floor((session.expiry - Date.now()) / 1000));
      res.setHeader("Set-Cookie", httpOnlyCookie(VISIT_COOKIE, visitId, maxAge));
      await recordVisit(req, session.credential, visitId, view.path);
    }
    await recordView(session.credentialId, visitId, view);
  } catch (err) {
    console.error("activity: could not record view", err);
  }
  return res.status(204).end();
}
