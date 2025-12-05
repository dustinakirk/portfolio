import React, { useState, useCallback } from 'react';
import { Pencil, Trash2, Shield, Clock, User, Building2, Globe } from 'lucide-react';
import './MemoryInspectorDemo.css';

// Mock memory data
const MEMORIES = [
  {
    id: 1,
    category: 'Preferences',
    label: 'Preferred tone',
    value: 'Concise, professional',
    source: 'Inferred',
    lastUsed: '2 min ago',
    scope: 'This account',
    scopeIcon: 'user'
  },
  {
    id: 2,
    category: 'Personal Facts',
    label: 'Role',
    value: 'Senior Product Manager, Data Platform',
    source: 'Explicit',
    lastUsed: '5 min ago',
    scope: 'All agents',
    scopeIcon: 'globe'
  },
  {
    id: 3,
    category: 'Personal Facts',
    label: 'Team',
    value: 'EMEA Sales',
    source: 'Synced',
    lastUsed: '1 hour ago',
    scope: 'Workspace',
    scopeIcon: 'building'
  },
  {
    id: 4,
    category: 'Org Rules',
    label: 'Customer communications',
    value: 'Do not email customers directly without approval',
    source: 'Admin',
    lastUsed: 'Yesterday',
    scope: 'Organization',
    scopeIcon: 'building',
    isProtected: true
  }
];

// Conversation messages
const CONVERSATION = [
  {
    id: 1,
    type: 'user',
    text: 'Can you summarize the Q4 pipeline and send it to the key accounts?'
  },
  {
    id: 2,
    type: 'agent',
    text: "Here's a concise summary of the Q4 pipeline for the Data Platform team. I've drafted an internal summary you can review before sending—per org policy, customer emails require approval first."
  }
];

// Group memories by category
function groupByCategory(memories) {
  return memories.reduce((acc, memory) => {
    if (!acc[memory.category]) {
      acc[memory.category] = [];
    }
    acc[memory.category].push(memory);
    return acc;
  }, {});
}

// Scope icon component
function ScopeIcon({ type }) {
  const iconProps = { size: 12, className: 'mid-record__scope-icon' };
  switch (type) {
    case 'user':
      return <User {...iconProps} />;
    case 'building':
      return <Building2 {...iconProps} />;
    case 'globe':
      return <Globe {...iconProps} />;
    default:
      return <User {...iconProps} />;
  }
}

// Memory Record component
function MemoryRecord({ memory, isHighlighted, onMouseEnter, onMouseLeave }) {
  const recordClass = `mid-record${isHighlighted ? ' mid-record--highlighted' : ''}${memory.isProtected ? ' mid-record--protected' : ''}`;

  return (
    <div
      className={recordClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mid-record__main">
        <div className="mid-record__header">
          <span className="mid-record__label">{memory.label}</span>
          {memory.isProtected && (
            <Shield size={14} className="mid-record__shield" />
          )}
        </div>
        <p className="mid-record__value">{memory.value}</p>
        <div className="mid-record__badges">
          <span className={`mid-badge mid-badge--${memory.source.toLowerCase()}`}>
            {memory.source}
          </span>
          <span className="mid-record__scope">
            <ScopeIcon type={memory.scopeIcon} />
            {memory.scope}
          </span>
        </div>
      </div>
      <div className="mid-record__actions">
        <button className="mid-record__action-btn" aria-label="Edit memory">
          <Pencil size={14} />
        </button>
        {!memory.isProtected && (
          <button className="mid-record__action-btn mid-record__action-btn--delete" aria-label="Delete memory">
            <Trash2 size={14} />
          </button>
        )}
      </div>
      <div className="mid-record__meta">
        <Clock size={12} />
        <span>Last used {memory.lastUsed}</span>
      </div>
    </div>
  );
}

// Message component
function Message({ message }) {
  const isUser = message.type === 'user';
  return (
    <div className={`mid-message mid-message--${message.type}`}>
      <div className="mid-message__avatar">
        {isUser ? 'You' : 'AI'}
      </div>
      <div className="mid-message__body">
        <p className="mid-message__text">{message.text}</p>
      </div>
    </div>
  );
}

export default function MemoryInspectorDemo() {
  const [highlightedMemoryId, setHighlightedMemoryId] = useState(null);

  const handleReset = useCallback(() => {
    setHighlightedMemoryId(null);
  }, []);

  const groupedMemories = groupByCategory(MEMORIES);

  return (
    <div className="mid-showcase">
      <header className="mid-showcase__header">
        <div className="mid-showcase__header-content">
          <h2 className="mid-showcase__title">Memory Inspector & Editor</h2>
          <p className="mid-showcase__description">
            The agent uses stored memories to personalize its response. Hover over
            memory records to see metadata and controls.
          </p>
        </div>
        <button className="mid-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="mid-showcase__content">
        {/* Chat area with conversation */}
        <div className="mid-chat">
          <div className="mid-chat__messages">
            {CONVERSATION.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>

        {/* Memory panel */}
        <div className="mid-panel">
          <div className="mid-panel__header">
            <span className="mid-panel__title">Agent Memory</span>
            <span className="mid-panel__count">{MEMORIES.length} items</span>
          </div>
          <div className="mid-panel__body">
            {Object.entries(groupedMemories).map(([category, memories]) => (
              <div key={category} className="mid-category">
                <h3 className="mid-category__title">{category}</h3>
                <div className="mid-category__records">
                  {memories.map((memory) => (
                    <MemoryRecord
                      key={memory.id}
                      memory={memory}
                      isHighlighted={highlightedMemoryId === memory.id}
                      onMouseEnter={() => setHighlightedMemoryId(memory.id)}
                      onMouseLeave={() => setHighlightedMemoryId(null)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
