import React from "react";
import { motion } from "framer-motion";

// ------------------------------
// TestimonialsSection
// Fresh, modern, light-themed testimonial section
// - Responsive: grid on desktop, horizontal snap carousel on mobile
// - Accessible: semantic <section>, alt text, aria labels
// - Subtle micro-interactions powered by Framer Motion
// - Uses TailwindCSS utility classes
// ------------------------------

// Types
export type Testimonial = {
  name: string;
  role: string; // e.g., "Staff Product Designer"
  company?: string; // e.g., "ServiceNow"
  relationship?: string; // e.g., "Reported to Dustin at Tealium"
  date?: string; // e.g., "Oct 30, 2020"
  quote: string;
  initials?: string; // Fallback avatar initials
  avatarUrl?: string; // Optional image
};

// Curated quotes (from the user's provided LinkedIn recommendations)
// Note: Alex's quote was lightly copyedited for grammar while preserving meaning.
const defaultTestimonials: Testimonial[] = [
  {
    name: "Mark Dorn",
    role: "Staff Product Designer",
    company: "ServiceNow",
    relationship: "Reported to Dustin at Tealium",
    date: "Oct 30, 2020",
    quote:
      "I was impressed by his level of preparation and attention to detail. Leading the design efforts on a complex enterprise product is not an easy task and I commend Dustin for making the difficult look easy.",
    initials: "MD",
    avatarUrl: "/images/avatar_mark_dorn.jpeg",
  },
  {
    name: "Nina Dimov",
    role: "Lead Product Designer",
    company: "Tealium",
    relationship: "Reported to Dustin",
    date: "Oct 19, 2020",
    quote:
      "During my career, I have never had a better manager than Dustin. My day-to-day communication with him made me a better designer.",
    initials: "ND",
    avatarUrl: "/images/avatar_nina_dimov.jpeg",
  },
  {
    name: "Alex Skibinsky",
    role: "Software Engineer",
    company: "Truist",
    relationship: "Studied with Dustin",
    date: "Sep 24, 2008",
    quote:
      "Dustin is incredibly creative and a practical professional. His experience and artistic abilities were invaluable in our projects.",
    initials: "AS",
    avatarUrl: "/images/avatar_alex_skibinski.jpeg",
  },
];

// Helpers
function classNames(...xs: Array<string | undefined | false>) {
  return xs.filter(Boolean).join(" ");
}

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="inline-flex h-12 w-12 select-none items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 shadow-inner ring-1 ring-slate-200"
      aria-hidden="true"
    >
      <span className="font-semibold">{initials}</span>
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 opacity-60"
      fill="currentColor"
    >
      <path d="M7.17 6C5.42 6 4 7.42 4 9.17V14c0 2.21 1.79 4 4 4h1v-6H6.5c-.28 0-.5-.22-.5-.5v-1c0-1.1.9-2 2-2H13V6H7.17zM16.83 6C15.08 6 13.66 7.42 13.66 9.17V14c0 2.21 1.79 4 4 4h1v-6h-2.5c-.28 0-.5-.22-.5-.5v-1c0-1.1.9-2 2-2H22V6h-5.17z" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={classNames(
        "relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm",
        "backdrop-blur-sm"
      )}
    >
      <div className="mb-5 flex items-center gap-3 text-slate-700">
        {t.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.avatarUrl}
            alt={`${t.name} headshot`}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-slate-200"
            loading="lazy"
          />
        ) : (
          <InitialsAvatar initials={t.initials ?? t.name.split(" ").map(n => n[0]).slice(0,2).join("")} />
        )}
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-slate-900">{t.name}</h3>
          <p className="truncate text-sm text-slate-600">
            {t.role}
            {t.company ? ` · ${t.company}` : ""}
          </p>
          {(t.relationship || t.date) && (
            <p className="truncate text-xs text-slate-500">
              {t.relationship}
              {t.relationship && t.date ? " · " : ""}
              {t.date}
            </p>
          )}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-1 -top-1 text-slate-300">
          <QuoteIcon />
        </div>
        <blockquote className="relative pl-6 text-slate-800">
          <p className="text-balance text-[15px] leading-7">
            {`"${t.quote}"`}
          </p>
        </blockquote>
      </div>
    </motion.article>
  );
}

export default function TestimonialsSection({
  heading = "What colleagues say",
  subheading = "Kind words from people I've worked with",
  testimonials = defaultTestimonials,
}: {
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
}) {
  return (
    <section
      aria-label="Testimonials"
      className="relative isolate"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
        <div
          className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(1200px_120px_at_50%_-20px,rgba(15,23,42,0.06),transparent)]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">{subheading}</p>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden grid-cols-3 gap-5 md:grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>

        {/* Mobile horizontal snap */}
        <div className="mt-10 md:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
            {testimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className="snap-center shrink-0 basis-[85%]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Swipe to see more</p>
        </div>
      </div>
    </section>
  );
}

// ------------------------------
// Usage
// <TestimonialsSection />
// Or pass your own data:
// <TestimonialsSection testimonials={[{ name: "...", role: "...", company: "...", quote: "..." }]} />
// ------------------------------