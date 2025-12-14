import React, { useState, useRef, useEffect, useCallback } from 'react';
import './AgentContextRepositoryDemo.css';

// Context Item Component
function ContextItem({ id, label, meta, tag, checked, onChange }) {
  return (
    <label className="acr-context-item">
      <input
        type="checkbox"
        className="acr-context-item__checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <div className="acr-context-item__content">
        <span className="acr-context-item__label">{label}</span>
        <span className="acr-context-item__meta">{meta}</span>
        <span className="acr-context-item__tag">{tag}</span>
      </div>
    </label>
  );
}

// Context Chip Component
function ContextChip({ icon, label, tooltip }) {
  return (
    <span className="acr-context-chip">
      <span className="acr-context-chip__icon">{icon}</span>
      {label}
      <span className="acr-context-chip__tooltip">{tooltip}</span>
    </span>
  );
}

// Message Components
function UserMessage({ text }) {
  return <div className="acr-message acr-message--user">{text}</div>;
}

function AgentMessage({ text, contextChips, noContext }) {
  return (
    <div className="acr-message acr-message--agent-wrapper">
      {noContext ? (
        <div className="acr-context-attribution acr-context-attribution--warning">
          <span className="acr-context-attribution__label acr-context-attribution__label--warning">
            No workspace context applied. Using generic model knowledge.
          </span>
        </div>
      ) : contextChips && contextChips.length > 0 ? (
        <div className="acr-context-attribution">
          <span className="acr-context-attribution__label">Context used:</span>
          <div className="acr-context-attribution__chips">
            {contextChips.map((chip, index) => (
              <ContextChip key={index} icon={chip.icon} label={chip.label} tooltip={chip.tooltip} />
            ))}
          </div>
        </div>
      ) : null}
      <div className="acr-message--agent">{text}</div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="acr-message acr-message--agent-wrapper">
      <div className="acr-typing-indicator">
        <div className="acr-typing-dot" />
        <div className="acr-typing-dot" />
        <div className="acr-typing-dot" />
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <div className="acr-chat__empty-state">
      <div className="acr-chat__empty-icon">💬</div>
      <p className="acr-chat__empty-text">
        Ask the agent to draft a status update for a customer.
      </p>
      <p className="acr-chat__empty-hint">
        Try toggling context items on the left to see how the output changes.
      </p>
    </div>
  );
}

export default function AgentContextRepositoryDemo() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState(
    'Draft a reply regarding the mobile launch for user john@acme.com'
  );
  const [isTyping, setIsTyping] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  // Context state
  const [contextBrand, setContextBrand] = useState(true);
  const [contextPolicy, setContextPolicy] = useState(true);
  const [contextProject, setContextProject] = useState(true);

  const messagesEndRef = useRef(null);
  const isInitialLoadRef = useRef(true);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isTyping]);

  // Generate response based on active context
  const generateResponse = useCallback(() => {
    const useBrand = contextBrand;
    const usePolicy = contextPolicy;
    const useProject = contextProject;

    // Build context chips
    const chips = [];
    if (useBrand) {
      chips.push({
        icon: '✨',
        label: 'Brand: Optimistic',
        tooltip: 'Source: Brand Kit v4 (Global)',
      });
    }
    if (usePolicy) {
      chips.push({
        icon: '🛡️',
        label: 'Policy: Privacy',
        tooltip: 'Source: Legal Compliance Doc B',
      });
    }
    if (useProject) {
      chips.push({
        icon: '🚀',
        label: 'Project: Q2 Launch',
        tooltip: 'Source: Project Brief #402',
      });
    }

    // Build response text based on context
    let email = 'john@acme.com';
    let launchDate = 'in the near future';
    let feature = 'our new capabilities';

    // Apply Policy Logic (Redaction)
    if (usePolicy) {
      email = '[email redacted]';
    }

    // Apply Project Logic (Specific facts)
    if (useProject) {
      launchDate = 'on July 15th';
      feature = 'Offline Mode';
    }

    let responseText = '';

    // Apply Brand Logic (Tone)
    if (useBrand) {
      responseText = `Hi there! Thanks for reaching out about the Q2 Mobile Launch. We are super excited to share that ${feature} will be available starting ${launchDate}. We've noted your interest for account ${email}. Let us know if you need anything else!`;
    } else {
      // Generic / Dry tone
      responseText = `Regarding the inquiry for ${email}: The Q2 Mobile Launch is scheduled to occur ${launchDate}. It will include ${feature}. The request has been logged.`;
    }

    const noContext = chips.length === 0;

    return { text: responseText, chips, noContext };
  }, [contextBrand, contextPolicy, contextProject]);

  // Handle send message
  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), type: 'user', text }]);
    setInputValue('');
    setInputDisabled(true);
    setIsTyping(true);

    // Simulate agent response delay
    setTimeout(() => {
      setIsTyping(false);
      const response = generateResponse();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: 'agent',
          text: response.text,
          chips: response.chips,
          noContext: response.noContext,
        },
      ]);
      setInputDisabled(false);
    }, 1200);
  }, [inputValue, isTyping, generateResponse]);

  // Handle key press
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    },
    [handleSend]
  );

  // Handle reset
  const handleReset = useCallback(() => {
    setMessages([]);
    setInputValue('Draft a reply regarding the mobile launch for user john@acme.com');
    setIsTyping(false);
    setInputDisabled(false);
    setContextBrand(true);
    setContextPolicy(true);
    setContextProject(true);
    isInitialLoadRef.current = true;
  }, []);

  return (
    <div className="acr-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="acr-showcase__body">
        {/* Context Repository Panel */}
        <aside className="acr-context-panel">
          <div className="acr-context-panel__header">Active Workspace Context</div>
          <div className="acr-context-panel__list">
            <ContextItem
              id="ctx-brand"
              label="Brand: Acme Optimistic"
              meta="Keep tone helpful, concise, and professional."
              tag="Global"
              checked={contextBrand}
              onChange={(e) => setContextBrand(e.target.checked)}
            />
            <ContextItem
              id="ctx-policy"
              label="Policy: Privacy Guard"
              meta="Redact email addresses and mask internal Ticket IDs."
              tag="Compliance"
              checked={contextPolicy}
              onChange={(e) => setContextPolicy(e.target.checked)}
            />
            <ContextItem
              id="ctx-project"
              label="Project: Q2 Mobile Launch"
              meta="Launch date: July 15th. Key feature: Offline Mode."
              tag="Project"
              checked={contextProject}
              onChange={(e) => setContextProject(e.target.checked)}
            />
          </div>
        </aside>

        {/* Chat Interface */}
        <main className="acr-chat">
          <div className="acr-chat__history">
            {messages.length === 0 && !isTyping ? (
              <EmptyState />
            ) : (
              <>
                {messages.map((message) =>
                  message.type === 'user' ? (
                    <UserMessage key={message.id} text={message.text} />
                  ) : (
                    <AgentMessage
                      key={message.id}
                      text={message.text}
                      contextChips={message.chips}
                      noContext={message.noContext}
                    />
                  )
                )}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="acr-chat__input-area">
            <input
              type="text"
              className="acr-chat__input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ex: Draft a reply regarding the Q2 launch for user john@acme.com..."
              disabled={inputDisabled}
            />
            <button
              className="acr-chat__btn"
              onClick={handleSend}
              disabled={inputDisabled || !inputValue.trim()}
            >
              Send
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
