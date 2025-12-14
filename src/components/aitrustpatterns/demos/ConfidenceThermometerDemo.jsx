import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Check, AlertCircle, AlertTriangle } from 'lucide-react';
import './ConfidenceThermometerDemo.css';

// Typing Indicator sub-component
function TypingIndicator() {
  return (
    <div className="ctd-message ctd-message--ai">
      <div className="ctd-message__avatar ctd-message__avatar--ai">AI</div>
      <div className="ctd-message__content">
        <div className="ctd-typing-indicator">
          <div className="ctd-typing-dot" />
          <div className="ctd-typing-dot" />
          <div className="ctd-typing-dot" />
        </div>
      </div>
    </div>
  );
}

// Confidence Meter sub-component
function ConfidenceMeter({ isExpanded, onToggle }) {
  return (
    <div className={`ctd-confidence-meter ${isExpanded ? 'ctd-confidence-meter--expanded' : ''}`}>
      <button
        className="ctd-confidence-meter__header"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label="Toggle confidence details"
      >
        <div className="ctd-confidence-meter__label-group">
          <div className="ctd-confidence-meter__visual">
            <div className="ctd-confidence-meter__bar ctd-confidence-meter__bar--active-medium" />
            <div className="ctd-confidence-meter__bar ctd-confidence-meter__bar--active-medium" />
            <div className="ctd-confidence-meter__bar ctd-confidence-meter__bar--active-medium" />
            <div className="ctd-confidence-meter__bar" />
            <div className="ctd-confidence-meter__bar" />
          </div>
          <span className="ctd-confidence-meter__badge ctd-confidence-meter__badge--medium">
            Medium Confidence
          </span>
        </div>
        <div className="ctd-confidence-meter__toggle-icon">
          <ChevronDown size={16} />
        </div>
      </button>

      <div className="ctd-confidence-meter__details">
        <p className="ctd-confidence-meter__reasoning">
          <strong>Why:</strong> Projection relies on Q3 historicals, but current pipeline data has irregularities.
        </p>
        <ul className="ctd-confidence-meter__factors">
          <li className="ctd-confidence-meter__factor">
            <Check size={14} className="ctd-confidence-meter__icon-pos" />
            <span>Strong YoY growth consistency</span>
          </li>
          <li className="ctd-confidence-meter__factor">
            <AlertCircle size={14} className="ctd-confidence-meter__icon-warn" />
            <span>3 major deals (&gt; $50k) stalled in Negotiation</span>
          </li>
          <li className="ctd-confidence-meter__factor">
            <AlertTriangle size={14} className="ctd-confidence-meter__icon-neg" />
            <span>Market volatility index missing for October</span>
          </li>
        </ul>
        <div className="ctd-confidence-meter__actions">
          <button className="ctd-confidence-meter__action-btn">View Stalled Deals</button>
          <button className="ctd-confidence-meter__action-btn">Recalculate w/o Volatility</button>
        </div>
      </div>
    </div>
  );
}

// User Message sub-component
function UserMessage({ text }) {
  return (
    <div className="ctd-message ctd-message--user">
      <div className="ctd-message__avatar ctd-message__avatar--user">JD</div>
      <div className="ctd-message__content">
        <div className="ctd-message__bubble ctd-message__bubble--user">{text}</div>
      </div>
    </div>
  );
}

// AI Message sub-component
function AiMessage({ children, showConfidenceMeter, isConfidenceExpanded, onToggleConfidence }) {
  return (
    <div className="ctd-message ctd-message--ai">
      <div className="ctd-message__avatar ctd-message__avatar--ai">AI</div>
      <div className="ctd-message__content">
        <div className="ctd-message__bubble ctd-message__bubble--ai">
          <div>{children}</div>
          {showConfidenceMeter && (
            <ConfidenceMeter
              isExpanded={isConfidenceExpanded}
              onToggle={onToggleConfidence}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfidenceThermometerDemo() {
  const [phase, setPhase] = useState('init'); // 'init', 'user', 'typing', 'ai'
  const [isConfidenceExpanded, setIsConfidenceExpanded] = useState(false);
  const timeoutsRef = useRef([]);

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Add timeout with tracking
  const addTimeout = useCallback((callback, delay) => {
    const id = setTimeout(callback, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Start the demo sequence
  const startDemo = useCallback(() => {
    clearAllTimeouts();
    setPhase('init');
    setIsConfidenceExpanded(false);

    // 1. User message appears
    addTimeout(() => {
      setPhase('user');
    }, 500);

    // 2. Typing indicator
    addTimeout(() => {
      setPhase('typing');
    }, 1200);

    // 3. AI response with confidence thermometer
    addTimeout(() => {
      setPhase('ai');
    }, 2800);
  }, [clearAllTimeouts, addTimeout]);

  // Handle reset
  const handleReset = useCallback(() => {
    startDemo();
  }, [startDemo]);

  // Handle confidence toggle
  const handleToggleConfidence = useCallback(() => {
    setIsConfidenceExpanded((prev) => !prev);
  }, []);

  // Initialize on mount
  useEffect(() => {
    startDemo();
    return () => {
      clearAllTimeouts();
    };
  }, [startDemo, clearAllTimeouts]);

  return (
    <div className="ctd-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="ctd-chat">
        {/* User Message */}
        {(phase === 'user' || phase === 'typing' || phase === 'ai') && (
          <UserMessage text="Based on the current pipeline, what is the Q4 revenue forecast for the Northeast region?" />
        )}

        {/* Typing Indicator */}
        {phase === 'typing' && <TypingIndicator />}

        {/* AI Response with Confidence Thermometer */}
        {phase === 'ai' && (
          <AiMessage
            showConfidenceMeter
            isConfidenceExpanded={isConfidenceExpanded}
            onToggleConfidence={handleToggleConfidence}
          >
            I forecast Q4 revenue for Northeast at roughly <strong>$1.2M</strong>. However, this is
            slightly below your target of $1.4M.
          </AiMessage>
        )}
      </div>
    </div>
  );
}
