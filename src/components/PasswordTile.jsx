import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, X } from "lucide-react";
import { PROTECTED_PROJECTS_CONFIG } from "../constants";
import { useProtectedAccess } from "../lib/protectedAccess";
import PasswordGate from "./PasswordGate";

/**
 * Tile shown in the Featured Projects grid for visitors who have not unlocked
 * the protected projects. Click reveals an inline password form; on success
 * the parent grid re-renders with the protected projects in its place.
 */
export default function PasswordTile() {
  const { days } = useProtectedAccess();
  const [open, setOpen] = useState(false);
  const { title, subtitle } = PROTECTED_PROJECTS_CONFIG.tile;

  return (
    <motion.div
      id="work-card-password"
      className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-all"
      whileHover={{ y: -2 }}
    >
      <div
        role={open ? undefined : "button"}
        tabIndex={open ? -1 : 0}
        onClick={() => !open && setOpen(true)}
        onKeyDown={(e) => {
          if (!open && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`block ${open ? "" : "cursor-pointer"}`}
        aria-label={open ? undefined : `${title}. Enter password to view.`}
      >
        {/* Cover area */}
        <div className="aspect-[16/10] relative bg-gradient-to-br from-[#044960] via-[#0E6B89] to-[#46A9C8] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
          <motion.div
            key={open ? "unlock" : "lock"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-20 w-20 rounded-2xl bg-white/15 border border-white/30 backdrop-blur flex items-center justify-center text-white shadow-lg"
          >
            {open ? <Unlock className="h-9 w-9" /> : <Lock className="h-9 w-9" />}
          </motion.div>
        </div>

        <div className="p-5">
          {!open ? (
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{subtitle}</p>
              </div>
              <div className="shrink-0">
                <Lock className="h-5 w-5 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Enter password</h3>
                  <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                    Access is remembered on this device for {days} days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-full p-1 opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10"
                  aria-label="Cancel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">
                <PasswordGate idPrefix="password-tile" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
