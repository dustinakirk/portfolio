import React, { useState, useRef } from 'react';
import Annotated from '../Annotated';
import { ASK_QUESTION_DATA, AGENT_PROFILE } from '../../data/mockData';

const AUTONOMY_MODES = [
  {
    id: 'advisor',
    label: 'Advisor',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 14c0-2.5 2.5-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'copilot',
    label: 'Co-Pilot',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 14c0-2 1.5-3 3-3s3 1 3 3M8 14c0-2 1.5-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'autopilot',
    label: 'Autopilot',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="4" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="10" cy="8" r="1.5" fill="currentColor"/>
        <path d="M6 12v2M10 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Slide2AskQuestion({ showAnnotations = true }) {
  const [inputValue, setInputValue] = useState('');
  const [sandboxMode, setSandboxMode] = useState(false);
  const [showSandboxTooltip, setShowSandboxTooltip] = useState(false);
  const [selectedMode, setSelectedMode] = useState('copilot');
  const [showModeMenu, setShowModeMenu] = useState(false);
  const toggleRef = useRef(null);
  const modeMenuRef = useRef(null);

  const handleChipClick = (prompt) => {
    setInputValue(prompt);
  };

  const currentMode = AUTONOMY_MODES.find(m => m.id === selectedMode);

  return (
    <div className="td-slide td-slide--ask-question">
      {/* Chat area with welcome message */}
      <div className="td-chat td-chat--padded td-chat--scrollable">
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">{AGENT_PROFILE.avatar}</div>
          <div className="td-chat__content">
            <p className="td-chat__text">{ASK_QUESTION_DATA.welcomeMessage}</p>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="td-chat__composer">
        {/* Suggested prompts inline */}
        <div className="td-chat__suggestions">
          <Annotated
            show={showAnnotations}
            patternId="2.2"
            patternName="Wayfinders"
            description="Suggested prompts help users understand what they can ask."
            placement="top-left"
          >
            <span className="td-chat__suggestions-label">Try:</span>
          </Annotated>
          {ASK_QUESTION_DATA.suggestedPrompts.map((prompt, i) => (
            i === 0 ? (
              <Annotated
                key={i}
                show={showAnnotations}
                patternId="2.5"
                patternName="Scenario Templates & Recipes"
                description="Pre-built prompts help users articulate complex requests."
                placement="top-right"
              >
                <button
                  className={`td-chat__chip td-chip td-chip--inline ${inputValue === prompt ? 'td-chip--selected' : ''}`}
                  onClick={() => handleChipClick(prompt)}
                >
                  {prompt}
                </button>
              </Annotated>
            ) : (
              <button
                key={i}
                className={`td-chat__chip td-chip td-chip--inline ${inputValue === prompt ? 'td-chip--selected' : ''}`}
                onClick={() => handleChipClick(prompt)}
              >
                {prompt}
              </button>
            )
          ))}
        </div>
        <div className="td-chat__input-row">
          <input
            type="text"
            className="td-chat__input"
            placeholder="Ask Atlas anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="td-chat__controls">
            <Annotated
              show={showAnnotations}
              patternId="2.1"
              patternName="Sandboxed Playgrounds"
              description="Safe space to experiment with the agent without real consequences."
              placement="top-left"
            >
              <div
                className="td-chat__sandbox-toggle"
                ref={toggleRef}
                onMouseEnter={() => setShowSandboxTooltip(true)}
                onMouseLeave={() => setShowSandboxTooltip(false)}
              >
                <label className="td-sandbox-toggle">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={sandboxMode}
                    className={`td-toggle-switch ${sandboxMode ? 'td-toggle-switch--active' : ''}`}
                    onClick={() => setSandboxMode(!sandboxMode)}
                  >
                    <span className="td-toggle-switch-track">
                      <span className="td-toggle-switch-thumb" />
                    </span>
                  </button>
                  <span className="td-sandbox-toggle-label">Sandbox</span>
                </label>
                {showSandboxTooltip && (
                  <div className="td-sandbox-tooltip">
                    <div className="td-sandbox-tooltip-arrow" />
                    <div className="td-sandbox-tooltip-title">Sandbox Mode</div>
                    <div className="td-sandbox-tooltip-text">
                      Run actions in a safe, isolated environment. Changes won't affect live data or systems—perfect for testing workflows before committing.
                    </div>
                  </div>
                )}
              </div>
            </Annotated>
            <Annotated
              show={showAnnotations}
              patternId="1.2"
              patternName="Autonomy Levels"
              description="Let users choose how much control to delegate to the agent."
              placement="top-right"
            >
              <div className="td-chat__mode-selector" ref={modeMenuRef}>
                <button
                  type="button"
                  className="td-mode-selector-trigger"
                  onClick={() => setShowModeMenu(!showModeMenu)}
                >
                  <span className="td-mode-selector-icon">{currentMode?.icon}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="td-mode-selector-chevron">
                    <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {showModeMenu && (
                  <div className="td-mode-menu">
                    <div className="td-mode-menu-header">Autonomy level</div>
                    {AUTONOMY_MODES.map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        className={`td-mode-menu-item ${selectedMode === mode.id ? 'td-mode-menu-item--selected' : ''}`}
                        onClick={() => {
                          setSelectedMode(mode.id);
                          setShowModeMenu(false);
                        }}
                      >
                        <span className="td-mode-menu-item-icon">{mode.icon}</span>
                        <span className="td-mode-menu-item-label">{mode.label}</span>
                        {selectedMode === mode.id && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="td-mode-menu-item-check">
                            <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Annotated>
            <button className="td-button td-button--primary td-button--send" disabled={!inputValue.trim()}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
