import React, { useState, useEffect, useRef, useCallback } from 'react';
import './SteerabilityDemo.css';

// Plan Card sub-component
function PlanCard({ plan, statusText, statusClass }) {
  return (
    <div className="spd-plan-card">
      <div className="spd-plan-card__header">
        <span>Current Plan</span>
        <span className={`spd-plan-card__status spd-plan-card__status--${statusClass}`}>
          {statusText}
        </span>
      </div>
      <div className="spd-plan-card__list">
        {plan.map((step) => {
          let itemClass = 'spd-plan-card__item';
          if (step.status === 'completed') itemClass += ' spd-plan-card__item--completed';
          if (step.status === 'active') itemClass += ' spd-plan-card__item--active';
          if (step.status === 'removed') itemClass += ' spd-plan-card__item--removed';
          if (step.status === 'new') itemClass += ' spd-plan-card__item--new';

          return (
            <div key={step.id} className={itemClass}>
              <div className="spd-plan-card__icon" />
              <span>{step.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Message component
function Message({ message }) {
  const { type, text, plan, planStatus, planStatusClass } = message;

  return (
    <div className={`spd-message spd-message--${type}`}>
      <div>{text}</div>
      {plan && (
        <PlanCard plan={plan} statusText={planStatus} statusClass={planStatusClass} />
      )}
    </div>
  );
}

export default function SteerabilityDemo() {
  const [messages, setMessages] = useState([]);
  const [plan, setPlan] = useState([]);
  const [planStatus, setPlanStatus] = useState({ text: 'Executing...', class: 'active' });
  const [isInterrupted, setIsInterrupted] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');
  const [inputValue, setInputValue] = useState('Wait, make this SMS-first and drop any discounts.');

  const messagesEndRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const currentStepRef = useRef(1);
  const isInterruptedRef = useRef(false);
  const isInitialLoadRef = useRef(true);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    // Skip scrolling on initial load to prevent page from jumping
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    // Scroll within the container only
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

  // Initialize demo state
  const initDemoState = useCallback(() => {
    // Clear any pending timeouts
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
    }

    // Reset refs
    currentStepRef.current = 1;
    isInterruptedRef.current = false;
    isInitialLoadRef.current = true;

    // Reset state
    setIsInterrupted(false);
    setIsRunning(true);
    setSubmitDisabled(false);
    setSubmitText('Submit');
    setInputValue('Wait, make this SMS-first and drop any discounts.');
    setPlanStatus({ text: 'Executing...', class: 'active' });

    // Initialize plan
    const initialPlan = [
      { id: 1, text: 'Draft Initial Outreach Email', status: 'completed' },
      { id: 2, text: 'Generate 10% Discount Code', status: 'active' },
      { id: 3, text: 'Draft Follow-up Email', status: 'pending' },
    ];
    setPlan(initialPlan);

    // Set initial messages
    const initialMessages = [
      { id: 1, type: 'user', text: 'Create a new email campaign for Q4.' },
      {
        id: 2,
        type: 'agent',
        text: "I've outlined a plan for the Q4 Email Campaign.",
        plan: initialPlan,
        planStatus: 'Executing...',
        planStatusClass: 'active',
      },
      { id: 3, type: 'agent', text: 'Generated: Initial Outreach Email...' },
    ];
    setMessages(initialMessages);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initDemoState();
    return () => {
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
      }
    };
  }, [initDemoState]);

  // Update the plan in the most recent agent message that has a plan
  const updatePlanInMessages = useCallback((newPlan, newStatusText, newStatusClass) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      // Find the last message with a plan and update it
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

  // Add a new message
  const addMessage = useCallback((text, type, planData = null, planStatusText = null, planStatusClass = null) => {
    const newMessage = {
      id: Date.now(),
      type,
      text,
      plan: planData,
      planStatus: planStatusText,
      planStatusClass,
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  // Finish the run
  const finishRun = useCallback(() => {
    setIsRunning(false);
    setSubmitDisabled(true);
    setSubmitText('Submit');
    setInputValue('');

    setPlan((prevPlan) => {
      const finalPlan = prevPlan.map((step) =>
        step.status === 'new' ? { ...step, status: 'completed' } : step
      );
      updatePlanInMessages(finalPlan, 'Completed', 'active');
      return finalPlan;
    });

    addMessage('Campaign generation complete!', 'agent');
  }, [addMessage, updatePlanInMessages]);

  // Execute the plan loop
  const executePlanLoop = useCallback(() => {
    if (isInterruptedRef.current) return;

    const currentPlan = plan;
    const stepIndex = currentStepRef.current;

    if (stepIndex >= currentPlan.length) {
      finishRun();
      return;
    }

    const step = currentPlan[stepIndex];

    // Skip removed items
    if (step.status === 'removed') {
      currentStepRef.current += 1;
      executePlanLoop();
      return;
    }

    // Set current step to active if not already
    if (step.status !== 'active' && step.status !== 'completed') {
      setPlan((prevPlan) => {
        const newPlan = prevPlan.map((s, i) =>
          i === stepIndex ? { ...s, status: 'active' } : s
        );
        updatePlanInMessages(newPlan, 'Executing...', 'active');
        return newPlan;
      });
    }

    // Simulate work being done
    loopTimeoutRef.current = setTimeout(() => {
      if (isInterruptedRef.current) return;

      // Complete the step
      setPlan((prevPlan) => {
        const newPlan = prevPlan.map((s, i) =>
          i === stepIndex ? { ...s, status: 'completed' } : s
        );
        updatePlanInMessages(newPlan, 'Executing...', 'active');
        return newPlan;
      });

      // Show artifact
      addMessage(`Generated: ${step.text.replace('Draft ', '')}...`, 'agent');

      currentStepRef.current += 1;

      // Continue to next step
      loopTimeoutRef.current = setTimeout(() => {
        executePlanLoop();
      }, 1000);
    }, 2000);
  }, [plan, addMessage, finishRun, updatePlanInMessages]);

  // Perform replanning
  const performReplanning = useCallback(() => {
    // Modify the plan
    setPlan((prevPlan) => {
      const newPlan = prevPlan.map((step) => {
        if (step.id === 2 || step.id === 3) {
          return { ...step, status: 'removed' };
        }
        return step;
      });

      // Add new SMS step
      newPlan.push({
        id: 4,
        text: 'Draft SMS Outreach',
        status: 'new',
      });

      return newPlan;
    });

    // Acknowledge the change
    addMessage(
      "Understood. I've updated the plan to focus on SMS and removed the discount step.",
      'agent'
    );

    // After a short delay, show the updated plan
    setTimeout(() => {
      setPlan((currentPlan) => {
        addMessage('Updated Plan:', 'agent', currentPlan, 'Resuming...', 'revised');
        return currentPlan;
      });

      // Reset interrupted flag and resume
      isInterruptedRef.current = false;
      setIsInterrupted(false);

      // Point to the new SMS step (index 3)
      currentStepRef.current = 3;

      // Resume execution
      setTimeout(() => {
        executePlanLoop();
      }, 1000);
    }, 500);
  }, [addMessage, executePlanLoop]);

  // Handle submit
  const handleSubmit = useCallback(() => {
    if (!isRunning) return;

    // Lock UI
    setSubmitDisabled(true);
    setSubmitText('Sent');
    isInterruptedRef.current = true;
    setIsInterrupted(true);

    // Clear any pending timeouts
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
    }

    // Post user message
    addMessage(inputValue, 'user');

    // Trigger polite interruption
    setTimeout(() => {
      // Update plan to show paused state
      updatePlanInMessages(plan, 'Paused', 'paused');

      addMessage('Revising plan based on new constraints...', 'system');

      setTimeout(() => {
        performReplanning();
      }, 1500);
    }, 600);
  }, [isRunning, inputValue, plan, addMessage, updatePlanInMessages, performReplanning]);

  // Handle reset
  const handleReset = useCallback(() => {
    initDemoState();
  }, [initDemoState]);

  return (
    <div className="spd-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="spd-chat">
        <div className="spd-chat__messages">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="spd-chat__controls">
          <input
            type="text"
            className="spd-control-input"
            value={inputValue}
            readOnly
            placeholder={isRunning ? '' : 'Run complete.'}
          />
          <button
            className={`spd-control-btn ${!isRunning ? 'spd-hidden' : ''}`}
            onClick={handleSubmit}
            disabled={submitDisabled}
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}
