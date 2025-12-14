import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck, PenLine } from 'lucide-react';
import './SupervisorAgentDemo.css';

export default function SupervisorAgentDemo() {
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [showSupervisorNotice, setShowSupervisorNotice] = useState(false);
  const [showAgentResponse, setShowAgentResponse] = useState(false);

  const timeoutsRef = useRef([]);
  const isInitialLoadRef = useRef(true);

  // Helper to add timeouts and track them for cleanup
  const addTimeout = useCallback((callback, delay) => {
    const id = setTimeout(callback, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Clear all pending timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Initialize/reset demo state
  const initDemoState = useCallback(() => {
    clearAllTimeouts();
    setShowTypingIndicator(false);
    setShowSupervisorNotice(false);
    setShowAgentResponse(false);
    isInitialLoadRef.current = true;
  }, [clearAllTimeouts]);

  // Start the demo sequence
  const startDemo = useCallback(() => {
    // Phase 1: Show typing indicator after a brief delay
    addTimeout(() => {
      setShowTypingIndicator(true);

      // Phase 2: Perform the intervention after "thinking"
      addTimeout(() => {
        // Hide typing indicator
        setShowTypingIndicator(false);

        // Show supervisor notice
        setShowSupervisorNotice(true);

        // Phase 3: Show the "safe" agent message after a short delay
        addTimeout(() => {
          setShowAgentResponse(true);
        }, 600);
      }, 2000);
    }, 800);
  }, [addTimeout]);

  // Handle reset button
  const handleReset = useCallback(() => {
    initDemoState();
    // Start demo again after a brief moment
    setTimeout(() => {
      startDemo();
    }, 100);
  }, [initDemoState, startDemo]);

  // Initialize on mount
  useEffect(() => {
    initDemoState();
    startDemo();

    return () => {
      clearAllTimeouts();
    };
  }, [initDemoState, startDemo, clearAllTimeouts]);

  return (
    <div className="sad-showcase">
      {/* Header */}
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      {/* Chat Area */}
      <div className="sad-chat-area">
        {/* User Message */}
        <div className="sad-message sad-message--user">
          <span className="sad-message__avatar">Customer</span>
          Hi, I need to verify which credit card is currently on file for my subscription renewal.
        </div>

        {/* Typing Indicator */}
        <div className={`sad-typing-indicator ${showTypingIndicator ? 'sad-typing-indicator--active' : ''}`}>
          <div className="sad-typing-dot" />
          <div className="sad-typing-dot" />
          <div className="sad-typing-dot" />
        </div>

        {/* Supervisor Notice */}
        {showSupervisorNotice && (
          <div className="sad-supervisor-notice">
            <ShieldCheck size={18} className="sad-supervisor-notice__icon" />
            <div className="sad-supervisor-notice__content">
              <span className="sad-supervisor-notice__title">Supervisor Intervention</span>
              <div className="sad-supervisor-notice__text">
                <strong>Policy Violation Blocked:</strong> An outbound message containing a Credit Card Number was intercepted.
                The sensitive data has been automatically redacted.
              </div>
            </div>
          </div>
        )}

        {/* Agent Response */}
        {showAgentResponse && (
          <div className="sad-message sad-message--agent">
            <span className="sad-message__avatar">
              AI Agent
              <span className="sad-status-badge">
                <PenLine size={10} className="sad-status-badge__icon" />
                Auto-Redacted
              </span>
            </span>
            The card on file is the Visa ending in **** **** **** 4242. Would you like me to update it?
          </div>
        )}
      </div>
    </div>
  );
}
