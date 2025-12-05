import React, { useState, useCallback } from 'react';
import './MultiplePresentedOptionsDemo.css';

// Inline SVG icons to avoid external dependencies
const BotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const RotateCcwIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

// Option data
const OPTIONS = [
  {
    id: 1,
    title: 'Option 1',
    badge: 'Friendly',
    badgeClass: 'friendly',
    content: (
      <>
        &quot;Hi <span className="mpo-variable-text">[Name]</span>,<br /><br />
        Hope you&apos;re having a great week! Just wanted to float this to the top of your inbox in case it got buried.<br /><br />
        Let me know if you have questions!&quot;
      </>
    )
  },
  {
    id: 2,
    title: 'Option 2',
    badge: 'Value-Add',
    badgeClass: 'value',
    content: (
      <>
        &quot;Hi <span className="mpo-variable-text">[Name]</span>,<br /><br />
        I saw this article about <span className="mpo-variable-text">[Topic]</span> and thought of our conversation.<br /><br />
        I&apos;m re-attaching the proposal as it addresses that specific pain point. Best,&quot;
      </>
    )
  },
  {
    id: 3,
    title: 'Option 3',
    badge: 'Direct',
    badgeClass: 'direct',
    content: (
      <>
        &quot;Hi <span className="mpo-variable-text">[Name]</span>,<br /><br />
        Are you still interested in moving forward with <span className="mpo-variable-text">[Project]</span>?<br /><br />
        If not, please let me know so I can close the file on our end. Thanks,&quot;
      </>
    )
  }
];

// Option Card component
function OptionCard({ option, isSelected, onSelect }) {
  const handleClick = useCallback(() => {
    onSelect(option.badge);
  }, [option.badge, onSelect]);

  const cardClass = `mpo-option-card${isSelected ? ' mpo-option-card--selected' : ''}`;

  return (
    <div
      className={cardClass}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="mpo-option-card__header">
        <h3 className="mpo-option-card__title">{option.title}</h3>
        <span className={`mpo-option-card__badge mpo-option-card__badge--${option.badgeClass}`}>
          {option.badge}
        </span>
      </div>
      <div className="mpo-option-card__content">
        {option.content}
      </div>
      <div className="mpo-option-card__footer">
        <button className="mpo-option-card__action">
          {isSelected ? 'Selected' : 'Use this Draft'}
        </button>
      </div>
    </div>
  );
}

export default function MultiplePresentedOptionsDemo() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = useCallback((optionName) => {
    setSelectedOption(optionName);
  }, []);

  const resetDemo = useCallback(() => {
    setSelectedOption(null);
  }, []);

  return (
    <div className="mpo-showcase">
      <header className="mpo-showcase__header">
        <div className="mpo-showcase__header-content">
          <h2 className="mpo-showcase__title">Pattern Example: Plurality Options</h2>
          <p className="mpo-showcase__description">
            For simple tasks, Plurality allows users to choose based on the <strong>actual result</strong> rather than abstract settings. Here, the user sees three email variations immediately.
          </p>
        </div>
        <button className="mpo-showcase__reset-btn" onClick={resetDemo}>
          <RotateCcwIcon /> Reset Demo
        </button>
      </header>

      <div className="mpo-app-viewport">
        <div className="mpo-chat-stream">
          {/* User Message */}
          <div className="mpo-chat-message--user">
            Draft a follow-up email to Acme Corp regarding the proposal I sent last Tuesday. They haven&apos;t replied yet.
          </div>

          {/* AI Response */}
          <div className="mpo-chat-group">
            <div className="mpo-chat-group__avatar">
              <BotIcon />
            </div>
            <div className="mpo-chat-group__content">
              <div className="mpo-chat-group__text">
                Here are three ways you could phrase that, depending on how urgent it is:
              </div>

              {/* Option Cards */}
              <div className="mpo-option-set">
                {OPTIONS.map((option) => (
                  <OptionCard
                    key={option.id}
                    option={option}
                    isSelected={selectedOption === option.badge}
                    onSelect={handleSelectOption}
                  />
                ))}
              </div>

              {/* Feedback Area */}
              <div className={`mpo-interaction-feedback${selectedOption ? ' mpo-interaction-feedback--visible' : ''}`}>
                <div className="mpo-interaction-feedback__icon">
                  <CheckIcon />
                </div>
                <span className="mpo-interaction-feedback__text">
                  Great choice. The <strong>{selectedOption}</strong> draft has been copied to your editor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
