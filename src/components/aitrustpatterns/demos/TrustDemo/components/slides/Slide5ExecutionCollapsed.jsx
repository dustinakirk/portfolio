import React, { useState, useRef, useEffect } from 'react';
import Annotated from '../Annotated';
import { CHAT_MESSAGES, REASONING_DATA, ASK_QUESTION_DATA } from '../../data/mockData';

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

export default function Slide5Execution({ showAnnotations = true }) {
  const [executionState, setExecutionState] = useState('active'); // 'active' | 'paused'
  const [inputValue, setInputValue] = useState('');
  const [sandboxMode, setSandboxMode] = useState(false);
  const [showSandboxTooltip, setShowSandboxTooltip] = useState(false);
  const [selectedMode, setSelectedMode] = useState('copilot');
  const [showModeMenu, setShowModeMenu] = useState(false);
  const chatEndRef = useRef(null);
  const toggleRef = useRef(null);
  const modeMenuRef = useRef(null);

  const chatData = CHAT_MESSAGES.slide2;
  const progressData = REASONING_DATA;
  const currentMode = AUTONOMY_MODES.find(m => m.id === selectedMode);

  const progressPercent = (progressData.currentStep / progressData.totalSteps) * 100;
  const currentTool = progressData.tools.find(t => t.status === 'running');
  const statusText = currentTool
    ? `${currentTool.name} ${currentTool.name === 'Data Scout (SQL)' ? 'pulling adoption metrics' : 'processing'}...`
    : progressData.thinking[progressData.currentStep - 1];

  // Scroll chat to bottom on mount with smooth animation
  useEffect(() => {
    requestAnimationFrame(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }, []);

  return (
    <div className="td-slide td-slide--execution">
      <div className="td-chat td-chat--padded td-chat--scrollable">
        {/* Agent Welcome Message */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Earlier</span>
            </div>
            <p className="td-chat__text">{ASK_QUESTION_DATA.welcomeMessage}</p>
          </div>
        </div>

        {/* User Message */}
        <div className="td-chat__message td-chat__message--user">
          <div className="td-chat__avatar td-chat__avatar--user">JD</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">You</span>
              <span className="td-chat__time">2 min ago</span>
              <div className="td-chat__actions">
                <button className="td-chat__action-btn" title="Copy">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M10 4V2.5A1.5 1.5 0 008.5 1H2.5A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                </button>
                <button className="td-chat__action-btn" title="Edit">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 1.5l2.5 2.5M1.5 12.5l.5-2.5L10 2l2.5 2.5L4.5 12.5l-3 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="td-chat__text">{chatData.user}</p>
          </div>
        </div>

        {/* Agent Response with Progress */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Just now</span>
            </div>

            <div className="td-chat__text">
              <p style={{ marginBottom: '10px' }}>Working...</p>
              <div className="td-exec-timeline">
                {chatData.plan.map((step) => {
                  const stepStatus = step.step < progressData.currentStep ? 'done'
                    : step.step === progressData.currentStep ? 'current'
                    : 'pending';
                  return (
                    <div key={step.step} className={`td-exec-timeline-step td-exec-timeline-step--${stepStatus}`}>
                      <div className="td-exec-timeline-marker">
                        {stepStatus === 'done' && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {stepStatus === 'current' && <span className="td-exec-timeline-pulse"></span>}
                      </div>
                      <div className="td-exec-timeline-content">
                        <span className="td-exec-timeline-title">{step.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compact Progress Component - Collapsed Only */}
            <div className="td-exec-progress">
              {/* Progress Header */}
              <div className="td-exec-progress-header">
                <Annotated
                  show={showAnnotations}
                  patternId="5.5"
                  patternName="Execution Progress View"
                  description="Glanceable progress indicator shows current step and status."
                  placement="top-left"
                >
                  <div className="td-exec-progress-status">
                    <span className="td-exec-progress-step">
                      <span className="td-exec-progress-dot"></span>
                      Step {progressData.currentStep} of {progressData.totalSteps}
                    </span>
                    <span className="td-exec-progress-label">{statusText}</span>
                  </div>
                </Annotated>
                <div className="td-exec-progress-actions">
                  <Annotated
                    show={showAnnotations}
                    patternId="3.1"
                    patternName="Kill Switch & Session Pause"
                    description="Pause, resume, or cancel execution to maintain control over agent actions."
                    placement="top-right"
                    offset={{ x: 10, y: 0 }}
                  >
                    {executionState === 'active' ? (
                      <button
                        className="td-exec-pause-btn"
                        title="Pause execution"
                        onClick={() => setExecutionState('paused')}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <rect x="2" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                          <rect x="7" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                        </svg>
                        Pause
                      </button>
                    ) : (
                      <div className="td-exec-paused-actions">
                        <button
                          className="td-exec-continue-btn"
                          title="Continue execution"
                          onClick={() => setExecutionState('active')}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 2l7 4-7 4V2z" fill="currentColor"/>
                          </svg>
                          Continue
                        </button>
                        <button className="td-exec-cancel-btn" title="Cancel execution">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect x="2" y="2" width="8" height="8" rx="1" fill="currentColor"/>
                          </svg>
                          Cancel
                        </button>
                      </div>
                    )}
                  </Annotated>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="td-exec-progress-bar-container">
                <div className="td-exec-progress-bar-track">
                  <div
                    className="td-exec-progress-bar"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="td-exec-progress-percent">{Math.round(progressPercent)}%</span>
              </div>

              {/* Progressive Disclosure Toggle */}
              <div className="td-exec-expand-wrapper">
                <Annotated
                  show={showAnnotations}
                  patternId="2.3"
                  patternName="Progressive Disclosure Modes"
                  description="Support both novices and experts by gradually revealing complexity."
                  placement="bottom-right"
                >
                  <button className="td-exec-expand-toggle">
                    <span>Show details</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Annotated>
              </div>
            </div>
          </div>
        </div>
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <Annotated
        show={showAnnotations}
        patternId="3.4"
        patternName="Steerability & Polite Interruption"
        description="Redirect or refine the agent mid-stream without canceling—just type your new direction."
        placement="bottom-left"
        fullWidth={true}
      >
        <div className="td-chat__composer">
          <div className="td-chat__input-row">
            <input
              type="text"
              className="td-chat__input"
              placeholder="Ask Atlas anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="td-chat__controls">
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
              <button className="td-button td-button--primary td-button--send" disabled={!inputValue.trim()}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Annotated>
    </div>
  );
}
