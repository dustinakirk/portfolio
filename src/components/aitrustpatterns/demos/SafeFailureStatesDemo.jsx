import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlertTriangle } from 'lucide-react';
import './SafeFailureStatesDemo.css';

// Typing indicator component
function TypingIndicator() {
  return (
    <div className="sfs-typing">
      <span className="sfs-typing__dot" />
      <span className="sfs-typing__dot" />
      <span className="sfs-typing__dot" />
    </div>
  );
}

// Safe Failure Block component - the core UX pattern
function SafeFailureBlock({ onAction, disabled }) {
  return (
    <div className="sfs-safe-failure">
      <div className="sfs-safe-failure__header">
        <span className="sfs-safe-failure__icon">
          <AlertTriangle size={20} />
        </span>
        <span className="sfs-safe-failure__title">Production deploy paused</span>
      </div>
      <div className="sfs-safe-failure__body">
        Elevated error rates detected in <strong>service-alpha</strong> (2.4% &gt; 0.5% threshold).
        <div className="sfs-safe-failure__impact">
          No changes have been made. Current version is still live.
        </div>
      </div>
      <div className="sfs-safe-failure__actions">
        <button
          className="sfs-action-btn sfs-action-btn--primary"
          onClick={() => onAction('metrics')}
          disabled={disabled}
        >
          View failing metrics
        </button>
        <button
          className="sfs-action-btn sfs-action-btn--secondary"
          onClick={() => onAction('cancel')}
          disabled={disabled}
        >
          Cancel deploy
        </button>
        <button
          className="sfs-action-btn sfs-action-btn--danger"
          onClick={() => onAction('override')}
          disabled={disabled}
        >
          Override
        </button>
      </div>
    </div>
  );
}

// Message component
function Message({ message, onAction, actionsDisabled }) {
  const { type, text, showFailureBlock, showBubble } = message;

  if (type === 'user') {
    return (
      <div className="sfs-message sfs-message--user">
        {text}
      </div>
    );
  }

  if (type === 'typing') {
    return (
      <div className="sfs-message sfs-message--agent">
        <div className="sfs-message__avatar">AI</div>
        <div className="sfs-message__content">
          <TypingIndicator />
        </div>
      </div>
    );
  }

  // Agent message
  return (
    <div className="sfs-message sfs-message--agent">
      <div className="sfs-message__avatar">AI</div>
      <div className="sfs-message__content">
        {text && !showBubble && <div className="sfs-message__text">{text}</div>}
        {text && showBubble && <div className="sfs-message__bubble">{text}</div>}
        {showFailureBlock && (
          <SafeFailureBlock onAction={onAction} disabled={actionsDisabled} />
        )}
      </div>
    </div>
  );
}

export default function SafeFailureStatesDemo() {
  const [messages, setMessages] = useState([]);
  const [isInteracting, setIsInteracting] = useState(false);
  const [phase, setPhase] = useState('init');

  const viewportRef = useRef(null);
  const timeoutRefs = useRef([]);
  const isInitialLoadRef = useRef(true);

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  }, []);

  // Add a timeout and track it
  const addTimeout = useCallback((callback, delay) => {
    const id = setTimeout(callback, delay);
    timeoutRefs.current.push(id);
    return id;
  }, []);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, []);

  // Scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Start the demo scenario
  const startScenario = useCallback(() => {
    clearAllTimeouts();
    isInitialLoadRef.current = true;
    setIsInteracting(false);
    setPhase('user-request');

    // 1. Initial user message
    setMessages([
      { id: 1, type: 'user', text: 'Deploy service-alpha to production, please.' }
    ]);

    // 2. Show typing indicator
    addTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: 2, type: 'typing' }
      ]);
      setPhase('typing');
    }, 500);

    // 3. Replace typing with agent response + failure block
    addTimeout(() => {
      setMessages(prev => prev.filter(m => m.type !== 'typing').concat([
        {
          id: 3,
          type: 'agent',
          text: "I've started the pre-deployment checks, but I cannot proceed safely.",
          showFailureBlock: true
        }
      ]));
      setPhase('failure-shown');
    }, 1700);
  }, [clearAllTimeouts, addTimeout]);

  // Initialize on mount
  useEffect(() => {
    startScenario();
    return () => clearAllTimeouts();
  }, [startScenario, clearAllTimeouts]);

  // Handle action button clicks
  const handleAction = useCallback((actionType) => {
    if (isInteracting) return;
    setIsInteracting(true);

    let userText = '';
    let agentResponse = '';

    switch (actionType) {
      case 'metrics':
        userText = 'Show me the failing metrics.';
        agentResponse = 'Opening Grafana dashboard for service-alpha...';
        break;
      case 'cancel':
        userText = 'Cancel the deployment.';
        agentResponse = 'Deployment cancelled. The queue is now clear.';
        break;
      case 'override':
        userText = 'Override safety checks and deploy anyway.';
        agentResponse = 'Admin authorization required. Sending approval request to #devops-leads.';
        break;
      default:
        return;
    }

    // Add user message
    addTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), type: 'user', text: userText }
      ]);
    }, 300);

    // Add agent response
    addTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), type: 'agent', text: agentResponse, showBubble: true }
      ]);
      setPhase('completed');
    }, 900);
  }, [isInteracting, addTimeout]);

  // Handle reset
  const handleReset = useCallback(() => {
    startScenario();
  }, [startScenario]);

  return (
    <div className="sfs-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <main className="sfs-chat">
        <div className="sfs-chat__viewport" ref={viewportRef}>
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onAction={handleAction}
              actionsDisabled={isInteracting}
            />
          ))}
        </div>

        <div className="sfs-chat__input-area">
          <div className="sfs-chat__fake-input" />
          <div className="sfs-chat__fake-btn" />
        </div>
      </main>
    </div>
  );
}
