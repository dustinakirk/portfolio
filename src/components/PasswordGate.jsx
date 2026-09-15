import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useProtectedAccess } from "../lib/protectedAccess";

/**
 * Password input + Unlock button shared by the homepage tile and the
 * protected project page. Calls the server; on success the provider
 * flips to "unlocked" and parents re-render.
 */
export default function PasswordGate({ idPrefix = "password-gate", onUnlocked }) {
  const { unlock } = useProtectedAccess();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);
  const errorId = `${idPrefix}-error`;

  const submit = async (e) => {
    e.preventDefault();
    if (!password || busy) return;
    setBusy(true);
    let ok = false;
    try {
      ok = await unlock(password);
    } catch {
      ok = false;
    }
    setBusy(false);
    if (!ok) {
      setError(true);
      setPassword("");
      inputRef.current?.focus();
      return;
    }
    onUnlocked?.();
  };

  return (
    <form onSubmit={submit}>
      <motion.div
        animate={error ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.35 }}
        className="flex gap-2"
      >
        <input
          ref={inputRef}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Password"
          autoComplete="off"
          autoFocus
          aria-label="Password"
          aria-invalid={error || undefined}
          aria-describedby={error ? errorId : undefined}
          className={`min-w-0 flex-1 rounded-xl border px-3 py-2 text-sm bg-white dark:bg-black/30 outline-none focus:ring-2 focus:ring-[#207F9E] ${
            error ? "border-red-500/70" : "border-black/10 dark:border-white/15"
          }`}
        />
        <button
          type="submit"
          disabled={!password || busy}
          className="inline-flex items-center gap-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {busy ? "Checking…" : "Unlock"} <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
      <p
        id={errorId}
        role="alert"
        className={`mt-2 text-xs text-red-600 dark:text-red-400 transition-opacity ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        That password is not correct. Please try again.
      </p>
    </form>
  );
}
