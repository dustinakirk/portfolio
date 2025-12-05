import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, Clock, User, FileText, Shield } from 'lucide-react';
import './EscalationDemo.css';

// Plan Card sub-component showing agent's execution plan
function PlanCard({ plan, statusText, statusClass }) {
  return (
    <div className="efd-plan-card">
      <div className="efd-plan-card__header">
        <span>Current Plan</span>
        <span className={`efd-plan-card__status efd-plan-card__status--${statusClass}`}>
          {statusText}
        </span>
      </div>
      <div className="efd-plan-card__list">
        {plan.map((step) => {
          let itemClass = 'efd-plan-card__item';
          if (step.status === 'completed') itemClass += ' efd-plan-card__item--completed';
          if (step.status === 'active') itemClass += ' efd-plan-card__item--active';
          if (step.status === 'blocked') itemClass += ' efd-plan-card__item--blocked';
          if (step.status === 'pending') itemClass += ' efd-plan-card__item--pending';

          return (
            <div key={step.id} className={itemClass}>
              <div className="efd-plan-card__icon" />
              <span>{step.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Escalation Card component showing the escalation notice
function EscalationCard({ details, isExpanded, onToggleExpand }) {
  return (
    <div className="efd-escalation-card">
      <div className="efd-escalation-card__header">
        <div className="efd-escalation-card__header-icon">
          <AlertTriangle size={18} />
        </div>
        <div className="efd-escalation-card__header-content">
          <h4 className="efd-escalation-card__title">Task Escalated</h4>
          <p className="efd-escalation-card__subtitle">Routed to {details.routedTo}</p>
        </div>
        <span className="efd-escalation-card__badge">Case #{details.caseId}</span>
      </div>

      <div className="efd-escalation-card__body">
        <div className="efd-escalation-card__reason">
          <Shield size={14} className="efd-escalation-card__reason-icon" />
          <span>{details.reason}</span>
        </div>

        <div className="efd-escalation-card__meta">
          <div className="efd-escalation-card__meta-item">
            <Clock size={12} />
            <span>SLA: {details.slaTarget}</span>
          </div>
          <div className="efd-escalation-card__meta-item">
            <span className={`efd-escalation-card__priority efd-escalation-card__priority--${details.priority.toLowerCase()}`}>
              {details.priority} Priority
            </span>
          </div>
        </div>
      </div>

      <button
        className="efd-escalation-card__toggle"
        onClick={onToggleExpand}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isExpanded && (
        <div className="efd-escalation-card__details">
          <div className="efd-escalation-card__section">
            <h5 className="efd-escalation-card__section-title">
              <FileText size={14} />
              Trigger Condition
            </h5>
            <p className="efd-escalation-card__section-content">{details.triggeredBy}</p>
          </div>

          <div className="efd-escalation-card__section">
            <h5 className="efd-escalation-card__section-title">
              <User size={14} />
              Actions Attempted
            </h5>
            <ul className="efd-escalation-card__action-list">
              {details.attemptedActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>

          <div className="efd-escalation-card__section">
            <h5 className="efd-escalation-card__section-title">Context Provided</h5>
            <ul className="efd-escalation-card__context-list">
              {details.contextProvided.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// Message component for chat bubbles
function Message({ message, onToggleEscalation, escalationExpanded }) {
  const { type, text, plan, planStatus, planStatusClass, escalation } = message;

  return (
    <div className={`efd-message efd-message--${type}`}>
      {text && <div className="efd-message__text">{text}</div>}
      {plan && (
        <PlanCard plan={plan} statusText={planStatus} statusClass={planStatusClass} />
      )}
      {escalation && (
        <EscalationCard
          details={escalation}
          isExpanded={escalationExpanded}
          onToggleExpand={onToggleEscalation}
        />
      )}
    </div>
  );
}

// Main Demo Component
export default function EscalationDemo() {
  const [messages, setMessages] = useState([]);
  const [demoPhase, setDemoPhase] = useState('initial'); // 'initial' | 'processing' | 'escalated' | 'complete'
  const [inputValue, setInputValue] = useState('Can you give me a breakdown of my tax filings for last year and project next year\'s expenses?');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [escalationExpanded, setEscalationExpanded] = useState(false);
  const [plan, setPlan] = useState([]);

  const messagesEndRef = useRef(null);
  const timeoutsRef = useRef([]);
  const isInitialLoadRef = useRef(true);

  // Escalation details data
  const escalationDetails = {
    reason: "Permission boundary: Requires Financial Specialist access level",
    triggeredBy: "Confidence threshold (0.42) below minimum (0.70) for financial projections",
    attemptedActions: [
      "Retrieved 2023 tax filing summary",
      "Attempted expense categorization analysis"
    ],
    routedTo: "Financial Specialist Queue",
    caseId: "ESC-2024-1847",
    priority: "Medium",
    slaTarget: "4 hours",
    contextProvided: [
      "User account tier: Standard",
      "Previous tax queries: 3",
      "Data completeness: 78%"
    ]
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  // Add timeout and track it
  const addTimeout = useCallback((callback, delay) => {
    const timeout = setTimeout(callback, delay);
    timeoutsRef.current.push(timeout);
    return timeout;
  }, []);

  // Add a new message
  const addMessage = useCallback((messageData) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), ...messageData }]);
  }, []);

  // Update plan in the most recent agent message that has a plan
  const updatePlanInMessages = useCallback((newPlan, newStatusText, newStatusClass) => {
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      for (let i = updatedMessages.length - 1; i >= 0; i--) {
        if (updatedMessages[i].plan) {
          updatedMessages[i] = {
            ...updatedMessages[i],
            plan: newPlan,
            planStatus: newStatusText,
            planStatusClass: newStatusClass,
          };
          break;
        }
      }
      return updatedMessages;
    });
  }, []);

  // Initialize/reset demo state
  const initDemoState = useCallback(() => {
    clearAllTimeouts();
    isInitialLoadRef.current = true;
    setMessages([]);
    setDemoPhase('initial');
    setSubmitDisabled(false);
    setEscalationExpanded(false);
    setInputValue('Can you give me a breakdown of my tax filings for last year and project next year\'s expenses?');
    setPlan([]);
  }, [clearAllTimeouts]);

  // Initialize on mount
  useEffect(() => {
    initDemoState();
    return () => clearAllTimeouts();
  }, [initDemoState, clearAllTimeouts]);

  // Handle user submitting the request
  const handleSubmit = useCallback(() => {
    if (demoPhase !== 'initial') return;

    setSubmitDisabled(true);
    setDemoPhase('processing');

    // Add user message
    addMessage({
      type: 'user',
      text: inputValue,
    });

    // Agent acknowledgment
    addTimeout(() => {
      const initialPlan = [
        { id: 1, text: 'Retrieve 2023 tax filing records', status: 'active' },
        { id: 2, text: 'Analyze expense categories', status: 'pending' },
        { id: 3, text: 'Generate financial projections', status: 'pending' },
      ];
      setPlan(initialPlan);

      addMessage({
        type: 'agent',
        text: "I'll help you with that. Let me access your tax records and prepare an analysis.",
        plan: initialPlan,
        planStatus: 'Executing...',
        planStatusClass: 'active',
      });
    }, 800);

    // Step 1 completes
    addTimeout(() => {
      setPlan(prevPlan => {
        const newPlan = prevPlan.map(step =>
          step.id === 1 ? { ...step, status: 'completed' } :
          step.id === 2 ? { ...step, status: 'active' } : step
        );
        updatePlanInMessages(newPlan, 'Executing...', 'active');
        return newPlan;
      });

      addMessage({
        type: 'agent',
        text: '✓ Retrieved 2023 tax filing summary. Now analyzing expense categories...',
      });
    }, 2200);

    // Permission issue detected
    addTimeout(() => {
      setPlan(prevPlan => {
        const newPlan = prevPlan.map(step =>
          step.id === 2 ? { ...step, status: 'blocked' } :
          step.id === 3 ? { ...step, status: 'blocked' } : step
        );
        updatePlanInMessages(newPlan, 'Paused', 'paused');
        return newPlan;
      });

      addMessage({
        type: 'system',
        text: '⚠ Permission boundary reached. Financial projections require specialist access.',
      });
    }, 3500);

    // Escalation notice
    addTimeout(() => {
      addMessage({
        type: 'system',
        text: 'Escalating to Financial Specialist...',
      });
    }, 4200);

    // Escalation card
    addTimeout(() => {
      setDemoPhase('escalated');
      setInputValue('');

      addMessage({
        type: 'agent',
        text: "I've escalated this request to a Financial Specialist who can provide the detailed projections you need. Here's the escalation summary:",
        escalation: escalationDetails,
      });
    }, 5000);

    // Final status
    addTimeout(() => {
      setDemoPhase('complete');
      addMessage({
        type: 'agent',
        text: "You'll receive a notification when the specialist reviews your request. In the meantime, I can help with other questions that don't require elevated access.",
      });
    }, 6200);

  }, [demoPhase, inputValue, addMessage, addTimeout, updatePlanInMessages, escalationDetails]);

  // Handle reset
  const handleReset = useCallback(() => {
    initDemoState();
  }, [initDemoState]);

  // Toggle escalation details
  const handleToggleEscalation = useCallback(() => {
    setEscalationExpanded(prev => !prev);
  }, []);

  return (
    <div className="efd-showcase">
      <header className="efd-showcase__header">
        <div className="efd-showcase__header-content">
          <h2 className="efd-showcase__title">Example: Escalation & Fallback Routing</h2>
          <p className="efd-showcase__description">
            Ask the AI agent about tax filings and projections. Watch how the agent encounters a permission boundary and escalates the task to a human specialist.
          </p>
        </div>
        <button className="efd-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="efd-chat">
        <div className="efd-chat__messages">
          {messages.map(message => (
            <Message
              key={message.id}
              message={message}
              escalationExpanded={escalationExpanded}
              onToggleEscalation={handleToggleEscalation}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="efd-chat__controls">
          <input
            type="text"
            className="efd-control-input"
            value={inputValue}
            readOnly
            placeholder={demoPhase === 'complete' ? 'Escalation complete.' : ''}
          />
          <button
            className={`efd-control-btn ${demoPhase !== 'initial' ? 'efd-hidden' : ''}`}
            onClick={handleSubmit}
            disabled={submitDisabled}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
