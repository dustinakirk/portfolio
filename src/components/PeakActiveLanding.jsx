import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Target, ArrowUp, Loader2 } from 'lucide-react';
import './PeakActiveLanding.css';

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Visualize Your Activity',
    description:
      'View your activity metrics in a beautiful and accessible way that keeps you informed, motivated, and driven to improve. Game-like animations and extra details provide for a delightful experience.',
  },
  {
    icon: Brain,
    title: 'Intelligent Algorithms',
    description:
      'Peak Active passively analyzes activity data stored on your device and intelligently detects to the minute when you started and stopped. Days later you can open the app and see exactly how far you walked, or even see what time you got into work.',
  },
  {
    icon: Target,
    title: 'Stay Motivated',
    description:
      'Set goals and keep motivated to go the extra steps. Daily achievements are rewarded with stars and streaks. Statistics let you see what days of the week are a struggle and rankings show how much more you need to do to beat your best day.',
  },
];

export default function PeakActiveLanding() {
  const [email, setEmail] = useState('');
  const [wantsBeta, setWantsBeta] = useState(false);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const topRef = useRef(null);

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

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Hero Section */}
      <section ref={topRef} className="hero">
        <div className="hero__container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__title"
          >
            Peak Active
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero__description"
          >
            Peak Active analyzes activity data on your phone and is able to
            recognize activities such as walking, hiking, jogging, or running.
            Activity data is presented so you may easily see stats like
            distance, speed, and the duration of your activity, all without
            needing to remember to hit start or stop during your activities.
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                I'd like to participate in beta testing
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
              transition={{ delay: 0.3 }}
              className="waitlist-count"
            >
              {count === 0
                ? 'Be the first to join!'
                : `${count} ${count === 1 ? 'person' : 'people'} on the waitlist`}
            </motion.p>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <div className="features__list">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature"
              >
                <div className="feature__icon-wrapper">
                  <feature.icon className="feature__icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="preview">
        <div className="preview__container">
          <motion.img
            src="/projects/peakactive/hero.png"
            alt="Peak Active app screenshots showing activity tracking, statistics, and calendar views"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="preview__image"
          />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta__title"
          >
            Ready to take your activity tracking to the next level?
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={scrollToTop}
            className="cta__button"
          >
            Join the Waitlist
            <ArrowUp className="cta__button-icon" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} Peak Active. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
