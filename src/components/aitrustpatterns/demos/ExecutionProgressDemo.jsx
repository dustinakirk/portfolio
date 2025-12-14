import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ExecutionProgressDemo.css';

// SVG Icons as components
const Icons = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  loader: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const stepsData = [
  { id: 1, label: 'Scope investigation', details: 'Identifying affected services...' },
  { id: 2, label: 'Pull metrics & error rates', details: 'Querying Prometheus...' },
  { id: 3, label: 'Correlate patterns', details: 'Matching logs against recent deployments.' },
  { id: 4, label: 'Draft root cause findings', details: 'Synthesizing data...' },
  { id: 5, label: 'Validate confidence levels', details: 'Finalizing report...' },
];

export default function ExecutionProgressDemo() {
  const [stepsState, setStepsState] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasBlockedOnce, setHasBlockedOnce] = useState(false);

  const timeoutRef = useRef(null);
  const isInitialLoadRef = useRef(true);

  // Initialize demo state
  const initDemoState = useCallback(() => {
    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Reset state
    setCurrentStepIndex(0);
    setIsBlocked(false);
    setIsComplete(false);
    setHasBlockedOnce(false);
    isInitialLoadRef.current = true;

    // Initialize steps - first step active, rest pending
    const initialSteps = stepsData.map((step, index) => ({
      ...step,
      status: index === 0 ? 'active' : 'pending',
    }));
    setStepsState(initialSteps);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initDemoState();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [initDemoState]);

  // Simulation tick - advances the demo
  const nextTick = useCallback(() => {
    if (isComplete || isBlocked) return;

    const duration = Math.random() * 1500 + 1000; // 1-2.5 seconds

    timeoutRef.current = setTimeout(() => {
      setCurrentStepIndex((prevIndex) => {
        // Check if we should block on step 3 (index 2)
        if (prevIndex === 2 && !hasBlockedOnce) {
          setIsBlocked(true);
          setHasBlockedOnce(true);
          setStepsState((prev) =>
            prev.map((step, idx) =>
              idx === prevIndex ? { ...step, status: 'blocked' } : step
            )
          );
          return prevIndex; // Don't advance
        }

        // Normal progression - mark current as complete, next as active
        setStepsState((prev) => {
          const newSteps = prev.map((step, idx) => {
            if (idx === prevIndex) {
              return { ...step, status: 'completed' };
            }
            if (idx === prevIndex + 1) {
              return { ...step, status: 'active' };
            }
            return step;
          });
          return newSteps;
        });

        const nextIndex = prevIndex + 1;

        // Check if we've completed all steps
        if (nextIndex >= stepsData.length) {
          setIsComplete(true);
          return prevIndex;
        }

        return nextIndex;
      });
    }, duration);
  }, [isComplete, isBlocked, hasBlockedOnce]);

  // Run simulation when state changes
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      // Start the first tick
      nextTick();
      return;
    }

    if (!isComplete && !isBlocked) {
      nextTick();
    }
  }, [currentStepIndex, isComplete, isBlocked, nextTick]);

  // Handle resolving the block
  const handleResolveBlock = useCallback(() => {
    setIsBlocked(false);
    // Set current step back to active
    setStepsState((prev) =>
      prev.map((step, idx) =>
        idx === currentStepIndex ? { ...step, status: 'active' } : step
      )
    );
  }, [currentStepIndex]);

  // Handle reset
  const handleReset = useCallback(() => {
    initDemoState();
  }, [initDemoState]);

  // Calculate progress percentage
  const completedCount = stepsState.filter((s) => s.status === 'completed').length;
  const totalSteps = stepsData.length;
  let progressPct = (completedCount / totalSteps) * 100;
  if (!isComplete && !isBlocked) {
    progressPct += 10; // Add visual progress for active step
  }
  if (isComplete) {
    progressPct = 100;
  }

  // Determine global status
  let globalStatus = 'Running...';
  let statusClass = 'running';
  let progressBarClass = '';

  if (isBlocked) {
    globalStatus = 'Attention Needed';
    statusClass = 'blocked';
    progressBarClass = 'epd-execution-view__progress-bar--blocked';
  } else if (isComplete) {
    globalStatus = 'Completed';
    statusClass = 'completed';
    progressBarClass = 'epd-execution-view__progress-bar--completed';
  }

  // Get icon for step status
  const getStepIcon = (status) => {
    switch (status) {
      case 'completed':
        return Icons.check;
      case 'active':
        return Icons.loader;
      case 'blocked':
        return Icons.alert;
      default:
        return Icons.circle;
    }
  };

  // Get details text for step
  const getDetailsText = (step, index) => {
    if (step.status === 'blocked') {
      return "Blocked: Missing read access to 'PaymentLogs'.";
    }
    if (step.status === 'completed') {
      return `Completed at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    return step.details;
  };

  return (
    <div className="epd-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="epd-chat">
        {/* User Message */}
        <div className="epd-chat__message epd-chat__message--user">
          <div className="epd-chat__avatar epd-chat__avatar--user">U</div>
          <div className="epd-chat__content epd-chat__content--user">
            <div className="epd-chat__bubble epd-chat__bubble--user">
              Run an analysis on the checkout latency spike.
            </div>
          </div>
        </div>

        {/* Agent Response with Execution View */}
        <div className="epd-chat__message">
          <div className="epd-chat__avatar">AI</div>
          <div className="epd-chat__content">
            <div className="epd-chat__bubble">
              I&apos;ve started the incident investigation plan.
            </div>

            {/* The Execution Progress View Pattern */}
            <div className="epd-execution-view" role="region" aria-label="Execution progress">
              <div className="epd-execution-view__header">
                <div className="epd-execution-view__title-group">
                  <div className="epd-execution-view__title-icon">
                    {Icons.wrench}
                  </div>
                  <span className="epd-execution-view__title">Incident Analysis</span>
                </div>
                <span
                  className={`epd-execution-view__status epd-execution-view__status--${statusClass}`}
                  aria-live="polite"
                >
                  {globalStatus}
                </span>
              </div>

              <div className="epd-execution-view__progress-container">
                <div
                  className={`epd-execution-view__progress-bar ${progressBarClass}`}
                  style={{ width: `${progressPct}%` }}
                  role="progressbar"
                  aria-valuenow={Math.round(progressPct)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>

              <div className="epd-execution-view__steps">
                {stepsState.map((step, index) => {
                  let modClass = '';
                  if (step.status === 'active') modClass = 'epd-execution-view__step--active';
                  if (step.status === 'completed') modClass = 'epd-execution-view__step--completed';
                  if (step.status === 'blocked') modClass = 'epd-execution-view__step--blocked';

                  return (
                    <div key={step.id} className={`epd-execution-view__step ${modClass}`}>
                      <div className="epd-execution-view__icon-box">
                        <div className="epd-execution-view__icon">
                          {getStepIcon(step.status)}
                        </div>
                      </div>
                      <div className="epd-execution-view__content">
                        <span className="epd-execution-view__label">{step.label}</span>
                        <span className="epd-execution-view__details">
                          {getDetailsText(step, index)}
                        </span>
                        {step.status === 'blocked' && (
                          <button
                            className="epd-execution-view__action"
                            onClick={handleResolveBlock}
                          >
                            Connect Database
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
