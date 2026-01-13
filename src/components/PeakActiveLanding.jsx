import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import './PeakActiveLanding.css';

const META_INFO = {
  title: 'Peak Active - Passive Walk Tracker for iPhone',
  description: 'Track your walks automatically without hitting start or stop. Peak Active uses Apple HealthKit to detect your walks, showing steps, distance, calories, and duration. Private, battery-friendly, and perfect for casual walkers.',
  keywords: 'walk tracker, passive activity tracking, iPhone walking app, step counter, HealthKit app, fitness tracker, walking exercise, health tracking',
  ogImage: '/projects/peakactive/og_image.png',
  url: 'https://dustinkirk.com/peakactive',
  faviconPath: '/projects/peakactive/favicons',
};

const FEATURES = [
  { title: 'Activity Log', description: 'View your walks in detail' },
  { title: 'Daily Step Counter', description: 'Large text & accurate data' },
  { title: 'View All Past Data', description: 'View all past walks and hikes' },
  { title: 'Hassle Free', description: "No need to hit 'start' or 'stop'" },
  { title: 'Private', description: 'No data leaves your device' },
  { title: 'Battery Friendly', description: 'insanely battery efficient' },
  { title: 'Ad Free', description: 'Relax, and enjoy' },
];

const CAROUSEL_IMAGES = [
  { id: 1, src: '/projects/peakactive/pano1.png', alt: 'Peak Active screenshot 1' },
  { id: 2, src: '/projects/peakactive/pano2.png', alt: 'Peak Active screenshot 2' },
  { id: 3, src: '/projects/peakactive/pano3.png', alt: 'Peak Active screenshot 3' },
  { id: 4, src: '/projects/peakactive/pano4.png', alt: 'Peak Active screenshot 4' },
];

export default function PeakActiveLanding() {
  const [email, setEmail] = useState('');
  const [wantsBeta, setWantsBeta] = useState(false);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const topRef = useRef(null);

  // Set meta tags for SEO and social sharing
  useEffect(() => {
    // Store original values to restore on unmount
    const originalTitle = document.title;
    const originalMeta = {};

    // Set document title
    document.title = META_INFO.title;

    // Helper to set or create meta tag
    const setMetaTag = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (meta) {
        originalMeta[name] = { attr, content: meta.getAttribute('content') };
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
        originalMeta[name] = { attr, content: null };
      }
    };

    // Standard meta tags
    setMetaTag('description', META_INFO.description);
    setMetaTag('keywords', META_INFO.keywords);

    // Open Graph tags
    setMetaTag('og:title', META_INFO.title, true);
    setMetaTag('og:description', META_INFO.description, true);
    setMetaTag('og:image', META_INFO.ogImage, true);
    setMetaTag('og:url', META_INFO.url, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'Peak Active', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', META_INFO.title);
    setMetaTag('twitter:description', META_INFO.description);
    setMetaTag('twitter:image', META_INFO.ogImage);

    // Favicon management
    const originalFavicons = [];
    const newFavicons = [];

    // Store and remove existing favicons
    document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((link) => {
      originalFavicons.push(link.cloneNode(true));
      link.remove();
    });

    // Helper to create and add favicon link
    const addFavicon = (rel, href, type = null, sizes = null) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (type) link.type = type;
      if (sizes) link.sizes = sizes;
      document.head.appendChild(link);
      newFavicons.push(link);
    };

    // Add Peak Active favicons
    const fp = META_INFO.faviconPath;
    addFavicon('icon', `${fp}/favicon.ico`, 'image/x-icon');
    addFavicon('icon', `${fp}/favicon-16x16.png`, 'image/png', '16x16');
    addFavicon('icon', `${fp}/favicon-32x32.png`, 'image/png', '32x32');
    addFavicon('apple-touch-icon', `${fp}/apple-touch-icon.png`);

    // Cleanup: restore original values on unmount
    return () => {
      document.title = originalTitle;
      Object.entries(originalMeta).forEach(([name, { attr, content }]) => {
        const meta = document.querySelector(`meta[${attr}="${name}"]`);
        if (meta) {
          if (content === null) {
            meta.remove();
          } else {
            meta.setAttribute('content', content);
          }
        }
      });

      // Remove Peak Active favicons and restore originals
      newFavicons.forEach((link) => link.remove());
      originalFavicons.forEach((link) => document.head.appendChild(link));
    };
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch('/api/waitlist');
        const data = await response.json();
        if (data.success) {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Failed to fetch count:', error);
      }
    }
    fetchCount();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, wantsBeta }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setCount(data.count);
        setEmail('');
        setWantsBeta(false);
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const rootClass = `peak-active${isDark ? ' peak-active--dark' : ''}`;

  return (
    <div className={rootClass}>
      <div ref={topRef} className="peak-active__body">
        {/* Carousel Section */}
        <section className="carousel">
          <div className="carousel__container">
            <div
              className="carousel__track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((image) => (
                <div key={image.id} className="carousel__slide">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel__image"
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel__arrow carousel__arrow--prev"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
            <button
              className="carousel__arrow carousel__arrow--next"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="carousel__dots">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`carousel__dot ${index === currentSlide ? 'carousel__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Two-column Content */}
        <section className="content">
          <div className="content__left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="content__title"
            >
              Peak Active
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="content__subtitle"
            >
              Passive walk tracking for iPhone
            </motion.p>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="features-list"
            >
              {FEATURES.map((feature, index) => (
                <li key={index} className="features-list__item">
                  <Check className="features-list__check" />
                  <div className="features-list__text">
                    <span className="features-list__title">{feature.title}</span>
                    <span className="features-list__description">{feature.description}</span>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="waitlist-form"
            >
              <div className="waitlist-form__inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                  className="waitlist-form__input"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="waitlist-form__button"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="waitlist-form__button-icon" />
                      Joining...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
              <label className="waitlist-form__toggle">
                <input
                  type="checkbox"
                  checked={wantsBeta}
                  onChange={(e) => setWantsBeta(e.target.checked)}
                  disabled={status === 'loading'}
                  className="waitlist-form__toggle-input"
                />
                <span className="waitlist-form__toggle-switch"></span>
                <span className="waitlist-form__toggle-label">
                  Participate in beta testing
                </span>
              </label>
            </motion.form>

            {/* Status Message */}
            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`status-message ${
                  status === 'success' ? 'status-message--success' : 'status-message--error'
                }`}
              >
                {message}
              </motion.p>
            )}

            {/* Waitlist Count */}
            {count !== null && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="waitlist-count"
              >
                {count === 0
                  ? 'Be the first to join!'
                  : `${count} ${count === 1 ? 'person' : 'people'} on the waitlist`}
              </motion.p>
            )}
          </div>

          <div className="content__right">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="phone-mockup"
            >
              <img
                src="/projects/peakactive/app_demo.gif"
                alt="Peak Active app demonstration showing automatic walk detection and activity stats"
                className="phone-mockup__image"
              />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} Peak Active. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
