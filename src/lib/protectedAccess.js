// Client side of the protected-projects gate.
//
// The server (api/*.js) owns the password and the session: a successful
// unlock sets an HttpOnly cookie that lasts 7 days. The client only learns
// "locked" or "unlocked" (plus the list of protected projects when unlocked)
// by calling /api/session. Nothing about the protected projects ships in the
// public bundle.

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PROTECTED_PROJECTS_CONFIG } from "../constants";

const ProtectedAccessContext = createContext(null);

async function api(path, options = {}) {
  const res = await fetch(path, {
    credentials: "same-origin",
    headers: { Accept: "application/json", ...(options.headers || {}) },
    ...options,
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }
  return { ok: res.ok, status: res.status, data };
}

export function ProtectedAccessProvider({ children }) {
  // status: "loading" | "locked" | "unlocked"
  const [status, setStatus] = useState("loading");
  const [projects, setProjects] = useState([]);
  const [days, setDays] = useState(PROTECTED_PROJECTS_CONFIG.durationDays ?? 7);

  const applySession = useCallback((data) => {
    if (data?.days) setDays(data.days);
    if (data?.unlocked) {
      setProjects(Array.isArray(data.projects) ? data.projects : []);
      setStatus("unlocked");
    } else {
      setProjects([]);
      setStatus("locked");
    }
  }, []);

  const refresh = useCallback(async () => {
    const { data } = await api("/api/session");
    applySession(data);
  }, [applySession]);

  useEffect(() => {
    refresh().catch(() => setStatus("locked"));
  }, [refresh]);

  /** Attempts to unlock with the given password. Resolves true on success. */
  const unlock = useCallback(
    async (password) => {
      const { ok, data } = await api("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!ok) return false;
      applySession(data);
      return true;
    },
    [applySession]
  );

  const lock = useCallback(async () => {
    await api("/api/lock", { method: "POST" });
    applySession({ unlocked: false });
  }, [applySession]);

  /** Fetches a protected project's rendered content. Returns { status, project }. */
  const fetchProject = useCallback(
    async (id) => {
      const { ok, status: code, data } = await api(`/api/protected/${encodeURIComponent(id)}`);
      if (code === 401) {
        applySession({ unlocked: false });
        return { status: "locked", project: null };
      }
      if (!ok) return { status: "missing", project: null };
      return { status: "ok", project: data };
    },
    [applySession]
  );

  const value = useMemo(
    () => ({
      status,
      unlocked: status === "unlocked",
      loading: status === "loading",
      projects,
      days,
      unlock,
      lock,
      refresh,
      fetchProject,
    }),
    [status, projects, days, unlock, lock, refresh, fetchProject]
  );

  return React.createElement(ProtectedAccessContext.Provider, { value }, children);
}

export function useProtectedAccess() {
  const ctx = useContext(ProtectedAccessContext);
  if (!ctx) throw new Error("useProtectedAccess must be used inside <ProtectedAccessProvider>");
  return ctx;
}
