import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, WORK } from "../constants";
import ProjectNav from "./ProjectNav";
import {
  Mail,
  Download,
  Linkedin,
} from "lucide-react";

// Avatar component reused from main portfolio
const AVATAR_URL = "/images/dustin_kirk_avatar.png";
function AvatarBlock() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
        <img
          src={AVATAR_URL}
          alt="Dustin Kirk"
          className="h-full w-full object-cover"
          style={{ transform: "scale(1.42)" }}
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-sm opacity-70">Portfolio of</div>
        <div className="font-semibold">Dustin Kirk</div>
      </div>
    </div>
  );
}

// Link button component
const LinkButton = ({ href, children, onClick }) => {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-2 font-medium hover:shadow-lg transition-shadow">
      {children}
    </span>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block">
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block"
    >
      {content}
    </a>
  );
};

// Diagonal stripe configuration for header
const diagonalConfig = {
  angle: 30,
  bands: [
    { width: 20, color: '#044960' },
    { width: 20, color: '#0E6B89' },
    { width: 20, color: '#207F9E' },
    { width: 20, color: '#46A9C8' }
  ]
};

export default function ProjectLayout({ children, title, subtitle, projectId }) {
  // Scroll to top on mount and set meta tags
  useEffect(() => {
    window.scrollTo(0, 0);

    // Get project data for image
    const project = WORK.find(p => p.id === projectId);
    const baseUrl = 'https://dustinkirk.com';
    const pageTitle = `${title} | Dustin Kirk`;
    const pageDescription = subtitle || `Product design case study: ${title}`;
    const pageUrl = `${baseUrl}/projects/${projectId}`;
    const pageImage = project?.image
      ? `${baseUrl}${project.image}`
      : `${baseUrl}/images/dustin_kirk_avatar.png`;

    // Set document title
    document.title = pageTitle;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = pageDescription;
      document.head.appendChild(metaDesc);
    }

    // Helper to set or create meta tags
    const setMetaTag = (attribute, value, content) => {
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Open Graph tags
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:url', pageUrl);
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Dustin Kirk - Principal Product Designer');

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDescription);
    setMetaTag('name', 'twitter:image', pageImage);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', pageUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = pageUrl;
      document.head.appendChild(canonical);
    }
  }, [projectId, title, subtitle]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f7f9_0%,#eef0f4_100%)] dark:bg-[linear-gradient(180deg,#0a0a0a_0%,#0f1115_100%)] text-black dark:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10 relative overflow-hidden">
        {/* Diagonal blue lines */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div 
            className="absolute -top-20 -right-32"
            style={{ 
              transform: `rotate(${diagonalConfig.angle}deg)`,
              width: '600px'
            }}
          >
            {diagonalConfig.bands.map((band, index) => (
              <div 
                key={index}
                style={{ 
                  height: `${band.width}px`,
                  background: band.color.includes('gradient') 
                    ? band.color 
                    : `linear-gradient(90deg, transparent 0%, ${band.color} 15%, ${band.color} 85%, transparent 100%)`,
                  width: '100%'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Header content */}
        <div className="mx-auto max-w-7xl px-4 pr-[140px] py-3 flex items-center justify-between relative z-10">
          <Link to="/" className="font-semibold tracking-tight flex items-center gap-3">
            <AvatarBlock />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-lg">
            <Link to="/#about" className="opacity-80 hover:opacity-100">About</Link>
            <Link to="/#work" className="opacity-80 hover:opacity-100">Work</Link>
            <Link to="/#experience" className="opacity-80 hover:opacity-100">Experience</Link>
            <Link to="/#contact" className="opacity-80 hover:opacity-100">Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <LinkButton href="https://www.linkedin.com/in/dustinkirk/">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </LinkButton>
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              <Download className="h-4 w-4" /> Resume
            </LinkButton>
          </div>
        </div>
      </header>

      {/* Project Navigation */}
      <ProjectNav currentProjectId={projectId} />

      {/* Project Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-black/70 dark:text-white/70">
              {subtitle}
            </p>
          )}
        </motion.div>
      </section>

      {/* Project Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build the future</h2>
          <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            If you are shipping AI-first solutions that rethink how software is built from the ground up, then I'm your guy. Let's work together to shape the future of software and user experiences.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium">
              <Mail className="h-4 w-4" /> Email Dustin
            </a>
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              <Download className="h-4 w-4" /> Download Resume
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-12 text-sm opacity-70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Dustin Kirk</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-100 opacity-80" href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            <a className="hover:opacity-100 opacity-80" href="https://www.linkedin.com/in/dustinkirk/" target="_blank" rel="noreferrer">LinkedIn</a>
            <Link to="/" className="hover:opacity-100 opacity-80">Portfolio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}