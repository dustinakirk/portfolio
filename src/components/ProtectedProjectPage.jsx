import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowLeft } from "lucide-react";
import ProjectLayout from "./ProjectLayout";
import PasswordGate from "./PasswordGate";
import { PROTECTED_PROJECTS_CONFIG } from "../constants";
import { useProtectedAccess } from "../lib/protectedAccess";

/**
 * Route for /projects/:id when the id is not a public project. Fetches the
 * protected case study from the API. Locked visitors get the password form
 * inside the normal project layout, so shared direct links still work.
 */
export default function ProtectedProjectPage() {
  const { id } = useParams();
  const { status, days, fetchProject } = useProtectedAccess();
  const [state, setState] = useState({ phase: "loading", project: null });

  // Keep protected pages out of search indexes.
  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]');
    const created = !tag;
    if (created) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    tag.content = "noindex, nofollow";
    return () => {
      if (created) tag.remove();
    };
  }, []);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "locked") {
      setState({ phase: "locked", project: null });
      return;
    }
    let cancelled = false;
    setState({ phase: "loading", project: null });
    fetchProject(id).then(({ status: result, project }) => {
      if (cancelled) return;
      if (result === "ok") setState({ phase: "ready", project });
      else if (result === "locked") setState({ phase: "locked", project: null });
      else setState({ phase: "missing", project: null });
    });
    return () => {
      cancelled = true;
    };
  }, [id, status, fetchProject]);

  if (state.phase === "missing") return <Navigate to="/" replace />;

  if (state.phase === "ready" && state.project) {
    const { title, subtitle, html } = state.project;
    return (
      <ProjectLayout title={title} subtitle={subtitle} projectId={id}>
        <article
          className="protected-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ProjectLayout>
    );
  }

  if (state.phase === "locked") {
    return (
      <ProjectLayout
        title={PROTECTED_PROJECTS_CONFIG.tile.title}
        subtitle="This case study is password protected."
        projectId={id}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 md:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/10">
              <Lock className="h-5 w-5" />
            </span>
            <div>
              <div className="font-semibold">Enter password</div>
              <div className="text-sm opacity-70">
                Access is remembered on this device for {days} days.
              </div>
            </div>
          </div>
          <div className="mt-5">
            <PasswordGate idPrefix="protected-project" />
          </div>
          <Link
            to="/#work"
            className="mt-6 inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </motion.div>
      </ProjectLayout>
    );
  }

  // Loading: keep the layout stable while the session and content resolve.
  return (
    <ProjectLayout title=" " subtitle="" projectId={id}>
      <div className="h-40 animate-pulse rounded-3xl bg-black/5 dark:bg-white/5" />
    </ProjectLayout>
  );
}
