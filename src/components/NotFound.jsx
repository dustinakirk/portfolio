import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Catch-all for unknown paths. The server returns index.html for everything,
 * so without this route React Router shows its developer error screen.
 */
export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Dustin Kirk";

    let tag = document.querySelector('meta[name="robots"]');
    const created = !tag;
    if (created) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    const previous = tag.content;
    tag.content = "noindex";
    return () => {
      if (created) tag.remove();
      else tag.content = previous;
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[linear-gradient(180deg,#f7f7f9_0%,#eef0f4_100%)] dark:bg-[linear-gradient(180deg,#0a0a0a_0%,#0f1115_100%)] text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 md:p-10 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-base md:text-lg text-black/70 dark:text-white/70">
          That page doesn't exist, but my work does.
        </p>
        <Link
          to="/#work"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium"
        >
          <Sparkles className="h-4 w-4" /> See featured projects
        </Link>
      </motion.div>
    </div>
  );
}
