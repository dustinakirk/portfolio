import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";
import PatternSidebar from "./aitrustpatterns/PatternSidebar";
import {
  AI_TRUST_PATTERNS,
  AI_TRUST_PATTERN_CATEGORIES,
} from "../data/aiTrustPatterns";
import "./agentic/AgenticPatterns.css";

export default function AgenticPatternsLayout({
  children,
  title,
  subtitle,
  showSidebar = false,
  selectedPatternId = null,
  onSelectPattern = null,
  fullBleed = false,
}) {
  const location = useLocation();
  const isDemo = location.pathname === '/agentic_ai_patterns';
  const isPatternLibrary = location.pathname.startsWith('/agentic_ai_patterns/') && location.pathname !== '/agentic_ai_patterns';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Set custom favicon for agentic pages
  useEffect(() => {
    // Store reference to original favicon
    const originalFavicon = document.querySelector('link[rel="icon"]');
    const originalHref = originalFavicon?.href;

    // Create and append agentic favicon links
    const faviconLinks = [
      { rel: 'icon', type: 'image/svg+xml', href: '/agentic/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/agentic/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/agentic/favicon-96x96.png' },
      { rel: 'apple-touch-icon', href: '/agentic/apple-touch-icon.png' },
      { rel: 'manifest', href: '/agentic/site.webmanifest' },
    ];

    const addedLinks = faviconLinks.map(({ rel, type, sizes, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      if (type) link.type = type;
      if (sizes) link.sizes = sizes;
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Update original favicon to agentic version
    if (originalFavicon) {
      originalFavicon.href = '/agentic/favicon.ico';
    }

    // Cleanup: remove added links and restore original favicon
    return () => {
      addedLinks.forEach(link => link.remove());
      if (originalFavicon && originalHref) {
        originalFavicon.href = originalHref;
      }
    };
  }, []);

  return (
    <div className="agentic-page">
      {/* Header */}
      <header className="agentic-header">
        <div className="agentic-header__container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Hamburger menu button (mobile only, only when sidebar is shown) */}
            {showSidebar && (
              <button
                className="agentic-menu-btn"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="agentic-menu-btn__icon" />
              </button>
            )}
            <Link
              to="/agentic_ai_patterns"
              className="agentic-header__logo"
            >
              <img
                src="/agentic/favicon.svg"
                alt=""
                className="agentic-header__logo-icon"
              />
              Agentic AI UX Patterns
            </Link>
            <nav className="agentic-nav">
              <Link
                to="/agentic_ai_patterns"
                className={`agentic-nav__link agentic-nav__link--demo-only ${isDemo ? 'agentic-nav__link--active' : ''}`}
              >
                Demo
              </Link>
              <Link
                to="/agentic_ai_patterns/overview"
                className={`agentic-nav__link ${isPatternLibrary ? 'agentic-nav__link--active' : ''}`}
              >
                Pattern Library
              </Link>
            </nav>
          </div>
          <Link
            to="/"
            className="agentic-header__author"
          >
            by Dustin Kirk
            <ExternalLink className="agentic-header__author-icon" />
          </Link>
        </div>
      </header>

      {/* Main content area */}
      {showSidebar ? (
        <div className="agentic-app-layout">
          {/* Mobile drawer overlay */}
          <div
            className={`agentic-drawer-overlay ${sidebarOpen ? 'agentic-drawer-overlay--visible' : ''}`}
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <aside className={`agentic-app-sidebar ${sidebarOpen ? 'agentic-app-sidebar--open' : ''}`}>
            <div className="agentic-sidebar-full">
              {/* Sidebar header with close button */}
              <div className="agentic-sidebar-header">
                <span className="agentic-sidebar-header__title">Trust Patterns</span>
                <button
                  className="agentic-sidebar-close"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="agentic-sidebar-close__icon" />
                </button>
              </div>

              {/* Pattern list */}
              <PatternSidebar
                patterns={AI_TRUST_PATTERNS}
                categories={AI_TRUST_PATTERN_CATEGORIES}
                selectedId={selectedPatternId}
                onSelect={onSelectPattern}
                linkMode={true}
                fullHeight={true}
              />
            </div>
          </aside>

          {/* Content */}
          <main className={`agentic-app-content${fullBleed ? ' agentic-app-content--full-bleed' : ''}`}>
            {/* Page header */}
            {title && (
              <motion.div
                className="agentic-content-header"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h1 className="agentic-content-header__title">{title}</h1>
                {subtitle && (
                  <p className="agentic-content-header__subtitle">{subtitle}</p>
                )}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </main>
        </div>
      ) : (
        <>
          {/* Hero (only for non-sidebar pages) */}
          <section className="agentic-hero">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="agentic-hero__title">
                {title}
              </h1>
              {subtitle && (
                <p className="agentic-hero__subtitle">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </section>

          {/* Content */}
          <div className="agentic-content">
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
        </>
      )}
    </div>
  );
}
