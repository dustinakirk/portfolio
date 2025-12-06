import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlertTriangle, CheckCircle, Bot } from 'lucide-react';
import './ApologyRemedyBundleDemo.css';

// Scenario data
const SCENARIO = {
  userCommand: "Run the weekly cleanup. Move all 'Stalled' opportunities > 30 days to 'Closed Lost'.",
  aiMistake: "Done. I've scanned the pipeline and moved 5 opportunities to 'Closed Lost'.",
  correction: {
    title: "Correction: Opportunity status update was inaccurate",
    explanation: "I detected a sync delay with the email server. These 5 opportunities actually have recent activity from today.",
    context: "Impact: 5 records marked 'Closed Lost' (Acme Corp, TechStar, +3 others).",
    remedyAction: "Restore to 'Stalled'",
    successMessage: "Fix applied. 5 opportunities restored to 'Stalled' and re-queued for review."
  }
};

// Message component
function Message({ message, bundleState, onApplyFix, onDismiss }) {
  const { type, text, showBundle } = message;

  return (
    <div className={`arb-message arb-message--${type}`}>
      <div className="arb-message__avatar">
        {type === 'user' ? 'JD' : <Bot size={18} />}
      </div>
      <div className="arb-message__content">
        <div>{text}</div>
        {showBundle && (
          <RemedyBundle
            bundleState={bundleState}
            onApplyFix={onApplyFix}
            onDismiss={onDismiss}
          />
        )}
      </div>
    </div>
  );
}

// Remedy Bundle component
function RemedyBundle({ bundleState, onApplyFix, onDismiss }) {
  const isSuccess = bundleState === 'success';
  const isDismissed = bundleState === 'dismissed';
  const isApplying = bundleState === 'applying';

  let bundleClass = 'arb-remedy-bundle';
  if (isSuccess) bundleClass += ' arb-remedy-bundle--success';
  if (isDismissed) bundleClass += ' arb-remedy-bundle--dismissed';

  return (
    <div className={bundleClass}>
      <div className="arb-remedy-bundle__header">
        <span className={`arb-remedy-bundle__header-icon ${isSuccess ? 'arb-remedy-bundle__header-icon--success' : 'arb-remedy-bundle__header-icon--warning'}`}>
          {isSuccess ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
        </span>
        <span className="arb-remedy-bundle__title">
          {isSuccess ? 'Fixed' : SCENARIO.correction.title}
        </span>
      </div>
      <div className="arb-remedy-bundle__body">
        {isSuccess ? (
          <p className="arb-remedy-bundle__success-message">
            {SCENARIO.correction.successMessage}
          </p>
        ) : isApplying ? (
          <span className="arb-remedy-bundle__loading">Applying fix...</span>
        ) : (
          <>
            <p className="arb-remedy-bundle__explanation">
              {SCENARIO.correction.explanation}
            </p>
            <div className="arb-remedy-bundle__context">
              {SCENARIO.correction.context}
            </div>
            <div className="arb-remedy-bundle__actions">
              <button className="arb-btn arb-btn--primary" onClick={onApplyFix}>
                <CheckCircle size={14} />
                {SCENARIO.correction.remedyAction}
              </button>
              <button className="arb-btn arb-btn--secondary" onClick={onDismiss}>
                Review Details
              </button>
              <button className="arb-btn arb-btn--ghost" onClick={onDismiss}>
                Dismiss
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ApologyRemedyBundleDemo() {
  const [messages, setMessages] = useState([]);
  const [bundleState, setBundleState] = useState('hidden'); // hidden, warning, applying, success, dismissed
  const messagesEndRef = useRef(null);
  const timeoutsRef = useRef([]);
  const isInitialLoadRef = useRef(true);

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(id => clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  // Add timeout and track it
  const addTimeout = useCallback((callback, delay) => {
    const id = setTimeout(callback, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, bundleState]);

  // Initialize demo
  const initDemo = useCallback(() => {
    clearAllTimeouts();
    isInitialLoadRef.current = true;
    setMessages([]);
    setBundleState('hidden');

    // Step 1: User message
    addTimeout(() => {
      setMessages([
        { id: 1, type: 'user', text: SCENARIO.userCommand }
      ]);
    }, 500);

    // Step 2: AI mistake response
    addTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: 2, type: 'ai', text: SCENARIO.aiMistake, showBundle: false }
      ]);
    }, 1500);

    // Step 3: Show the correction bundle
    addTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.id === 2 ? { ...msg, showBundle: true } : msg
      ));
      setBundleState('warning');
    }, 3000);
  }, [addTimeout, clearAllTimeouts]);

  // Initialize on mount
  useEffect(() => {
    initDemo();
    return () => clearAllTimeouts();
  }, [initDemo, clearAllTimeouts]);

  // Handle apply fix
  const handleApplyFix = useCallback(() => {
    setBundleState('applying');

    addTimeout(() => {
      setBundleState('success');
    }, 800);
  }, [addTimeout]);

  // Handle dismiss
  const handleDismiss = useCallback(() => {
    setBundleState('dismissed');
  }, []);

  // Handle reset
  const handleReset = useCallback(() => {
    initDemo();
  }, [initDemo]);

  return (
    <div className="arb-showcase">
      <header className="arb-showcase__header">
        <div className="arb-showcase__header-content">
          <h2 className="arb-showcase__title">Apology + Remedy Bundle</h2>
          <p className="arb-showcase__description">
            Demonstrating how an AI agent handles a mistake (incorrect status update)
            by acknowledging it and offering a direct, actionable fix.
          </p>
        </div>
        <button className="arb-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="arb-chat">
        <div className="arb-chat__messages">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              bundleState={bundleState}
              onApplyFix={handleApplyFix}
              onDismiss={handleDismiss}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}
