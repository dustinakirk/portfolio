import React, { useState, useEffect, useRef, useCallback } from 'react';
import './SentimentAwareResponseStylesDemo.css';

// Message component
function Message({ message, onActionClick }) {
  const { type, content, actionButton } = message;

  return (
    <div className={`sars-message sars-message--${type}`}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {actionButton && (
        <button className="sars-message__action-btn" onClick={onActionClick}>
          {actionButton}
        </button>
      )}
    </div>
  );
}

// Scenario data
const scenario = [
  {
    // Step 0: Intro
    agent: 'Hello, Alex. I\'m ready to assist with the deployment of <strong>Service-Core-V2</strong> to production.',
    options: [
      { text: 'Start deployment', nextStep: 1, type: 'neutral' }
    ]
  },
  {
    // Step 1: Failure (Standard Response)
    agent: 'Initiating deployment sequence... <br><br>❌ <strong>Deployment Failed</strong>. <br>Error: Connection timed out in <code>us-east-1</code>. The load balancer did not receive a health check within the configured 3000ms window. Please check your security group configurations and VPC settings to ensure port 8080 is accessible.',
    options: [
      { text: 'Can we try that again?', nextStep: 2, type: 'neutral' },
      { text: 'This is failing again! Why is this so hard?', nextStep: 3, type: 'frustrated' }
    ]
  },
  {
    // Step 2: Neutral Path (Looping failure)
    agent: 'Retrying deployment sequence... <br><br>❌ <strong>Deployment Failed</strong>. <br>Error: Connection timed out in <code>us-east-1</code>. The load balancer did not receive a health check within the configured 3000ms window.',
    options: [
      { text: 'Ugh, this is ridiculous. Just fix it!', nextStep: 3, type: 'frustrated' }
    ]
  },
  {
    // Step 3: Sentiment Aware Response
    agent: 'I apologize for the recurring failure. I\'ve analyzed the logs and found a memory spike causing the timeout.<br><br><strong>Recommended Fix:</strong> Auto-scale memory to 4GB and retry immediately.',
    actionButton: 'Apply Fix & Retry',
    options: []
  }
];

export default function SentimentAwareResponseStylesDemo() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const messagesEndRef = useRef(null);
  const isInitialLoadRef = useRef(true);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

  // Initialize demo
  const initDemo = useCallback(() => {
    isInitialLoadRef.current = true;
    setMessages([]);
    setCurrentOptions([]);
    setIsComplete(false);
    setButtonsDisabled(false);

    // Start with step 0 after a short delay
    setTimeout(() => {
      renderStep(0);
    }, 100);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initDemo();
  }, [initDemo]);

  // Render a step
  const renderStep = useCallback((stepIndex) => {
    const stepData = scenario[stepIndex];

    // Add agent message with delay for typing feel
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        type: 'agent',
        content: stepData.agent,
        actionButton: stepData.actionButton || null
      };

      setMessages(prev => [...prev, newMessage]);
      setCurrentOptions(stepData.options);
      setButtonsDisabled(false);

      if (stepData.options.length === 0) {
        setIsComplete(true);
      }
    }, 600);
  }, []);

  // Handle option click
  const handleOptionClick = useCallback((option) => {
    // Disable all buttons
    setButtonsDisabled(true);

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: option.text
    };
    setMessages(prev => [...prev, userMessage]);

    // Clear current options while loading
    setCurrentOptions([]);

    // Proceed to next step
    renderStep(option.nextStep);
  }, [renderStep]);

  // Handle action button click
  const handleActionClick = useCallback(() => {
    alert('Demo Complete: Fix Applied');
  }, []);

  // Handle reset
  const handleReset = useCallback(() => {
    initDemo();
  }, [initDemo]);

  return (
    <div className="sars-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="sars-chat">
        <div className="sars-chat__messages">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onActionClick={handleActionClick}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="sars-chat__controls">
          <span className="sars-chat__helper-text">
            {isComplete ? 'Demo Sequence Complete' : 'Select a user response to advance demo:'}
          </span>
          <div className="sars-chat__button-group">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                className={`sars-option-btn ${option.type === 'frustrated' ? 'sars-option-btn--frustrated' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={buttonsDisabled}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
