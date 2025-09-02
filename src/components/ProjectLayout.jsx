import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "../constants";
import ProjectSidebar from "./ProjectSidebar";
import {
  ArrowLeft,
  Mail,
  Download,
  Linkedin,
  Home,
  ChevronRight,
  Menu,
  X,
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
  const navigate = useNavigate();
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Close mobile sidebar on project change
  useEffect(() => {
    setShowMobileSidebar(false);
  }, [projectId]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerElement = document.querySelector('header');
      const offset = headerElement ? headerElement.offsetHeight + 20 : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="opacity-80 hover:opacity-100 flex items-center gap-1">
              <Home className="h-3 w-3" />
              Portfolio
            </Link>
            <Link to="/#about" className="opacity-80 hover:opacity-100">About</Link>
            <Link to="/#experience" className="opacity-80 hover:opacity-100">Experience</Link>
            <Link to="/#contact" className="opacity-80 hover:opacity-100">Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              <Download className="h-4 w-4" /> Resume
            </LinkButton>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
            Portfolio
          </Link>
          <ChevronRight className="h-4 w-4 opacity-40" />
          <span className="font-medium">{title}</span>
        </nav>
      </div>

      {/* Project Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </button>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-black/70 dark:text-white/70 max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </section>

      {/* Project Content with Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8 xl:col-span-9">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </main>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <ProjectSidebar currentProjectId={projectId} />
          </aside>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg"
        aria-label="Toggle project navigation"
      >
        {showMobileSidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobileSidebar(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Projects</h3>
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ProjectSidebar currentProjectId={projectId} />
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build the future</h2>
          <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            If you ae shipping AI-first solutions that rethink how software is built from the ground up, then I'm your guy.  Let's work together to shape the future of software and user experiences.
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