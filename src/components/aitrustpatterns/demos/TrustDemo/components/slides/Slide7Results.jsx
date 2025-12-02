import React, { useState, useRef, useEffect } from 'react';
import Annotated from '../Annotated';
import { CHAT_MESSAGES, OPTIONS_DATA, ASK_QUESTION_DATA } from '../../data/mockData';

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

export default function Slide6Results({ showAnnotations = true }) {
  const [activeTab, setActiveTab] = useState('A');
  const [inputValue, setInputValue] = useState('');
  const [sandboxMode, setSandboxMode] = useState(false);
  const [showSandboxTooltip, setShowSandboxTooltip] = useState(false);
  const [selectedMode, setSelectedMode] = useState('copilot');
  const [showModeMenu, setShowModeMenu] = useState(false);
  const chatEndRef = useRef(null);
  const toggleRef = useRef(null);
  const modeMenuRef = useRef(null);
  const chatData = CHAT_MESSAGES.slide2;
  const optionsData = OPTIONS_DATA;
  const currentMode = AUTONOMY_MODES.find(m => m.id === selectedMode);
  const activeOption = optionsData.options.find(o => o.id === activeTab);

  // Scroll chat to bottom on mount with smooth animation
  useEffect(() => {
    requestAnimationFrame(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }, []);

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'var(--td-success)';
    if (confidence >= 60) return 'var(--td-warning)';
    return 'var(--td-error)';
  };

  return (
    <div className="td-slide td-slide--results">
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
              <span className="td-chat__time">5 min ago</span>
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

        {/* Agent Response with Options */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Just now</span>
            </div>

            <Annotated
              show={showAnnotations}
              patternId="6.4"
              patternName="Plurality Pattern"
              description="Present multiple options instead of a single recommendation."
              placement="top-left"
            >
              <p className="td-chat__text">Analysis complete! Here are the 3 most probably causes found for the issue.</p>
            </Annotated>

            {/* Tabbed Options */}
            <div className="td-results-tabs">
              {/* Tab Bar */}
              <div className="td-results-tab-bar">
                {optionsData.options.map((option, index) => (
                  <button
                    key={option.id}
                    className={`td-results-tab ${activeTab === option.id ? 'td-results-tab--active' : ''}`}
                    onClick={() => setActiveTab(option.id)}
                  >
                    <div className="td-results-tab-header">
                      <span className="td-results-tab-badge">{option.id}</span>
                      <span className="td-results-tab-label">{option.label}</span>
                    </div>
                    {index === 0 ? (
                      <Annotated
                        show={showAnnotations}
                        patternId="6.2"
                        patternName="Confidence Thermometer"
                        description="Visual indicator of agent confidence in each option."
                        placement="top-right"
                        offset={{ x: 10, y: 0 }}
                      >
                        <div className="td-results-tab-confidence">
                          <div className="td-results-confidence-bar">
                            <div
                              className="td-results-confidence-fill"
                              style={{
                                width: `${option.confidence}%`,
                                backgroundColor: getConfidenceColor(option.confidence)
                              }}
                            />
                          </div>
                          <span
                            className="td-results-confidence"
                            style={{ color: getConfidenceColor(option.confidence) }}
                          >
                            {option.confidence}%
                          </span>
                        </div>
                      </Annotated>
                    ) : (
                      <div className="td-results-tab-confidence">
                        <div className="td-results-confidence-bar">
                          <div
                            className="td-results-confidence-fill"
                            style={{
                              width: `${option.confidence}%`,
                              backgroundColor: getConfidenceColor(option.confidence)
                            }}
                          />
                        </div>
                        <span
                          className="td-results-confidence"
                          style={{ color: getConfidenceColor(option.confidence) }}
                        >
                          {option.confidence}%
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeOption && (
                <div className="td-results-tab-content">
                  <div className="td-results-tab-content-header">
                    <div className="td-results-tab-content-header-left">
                      <div className="td-results-tab-title">{activeOption.title}</div>
                      <div className="td-results-tab-desc">{activeOption.description}</div>
                    </div>
                    <button className="td-results-generate-report">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                        <path d="M5 4h4M5 7h4M5 10h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                      Generate Full Report
                    </button>
                  </div>

                  {/* Two-column evidence layout */}
                  <div className="td-results-evidence-columns">
                    {/* Supporting Evidence Column */}
                    <div className="td-results-evidence-column">
                      <span className="td-results-evidence-label">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Supporting Evidence
                      </span>
                      <div className="td-results-evidence-list">
                        {activeOption.evidence.map((item, i) => (
                          <div key={i} className="td-results-evidence-item">
                            <div className="td-results-evidence-header">
                              <span className="td-results-evidence-tool">{item.tool}</span>
                              <span className="td-results-evidence-source">{item.source}</span>
                            </div>
                            <div className="td-results-evidence-metric">{item.metric}</div>
                            {item.time && <div className="td-results-evidence-time">{item.time}</div>}
                            <a href={item.link} className="td-results-evidence-link">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M8.5 5.5v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                                <path d="M6 1h3v3M9 1L4.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              View source
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Counter-Evidence Column - Always shown */}
                    {activeTab === 'A' ? (
                      <Annotated
                        show={showAnnotations}
                        patternId="6.6"
                        patternName="Counter-Evidence Display"
                        description="Show contradicting evidence to help users understand confidence levels."
                        placement="top-right"
                      >
                        <div className="td-results-evidence-column td-results-evidence-column--counter">
                          <span className="td-results-evidence-label td-results-evidence-label--counter">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            Counter-Evidence
                          </span>
                          <div className="td-results-evidence-list">
                            {activeOption.counterEvidence && activeOption.counterEvidence.length > 0 ? (
                              activeOption.counterEvidence.map((item, i) => (
                                <div key={i} className="td-results-evidence-item td-results-evidence-item--counter">
                                  <div className="td-results-evidence-header">
                                    <span className="td-results-evidence-tool">{item.tool}</span>
                                    <span className="td-results-evidence-source">{item.source}</span>
                                  </div>
                                  <div className="td-results-evidence-metric">{item.metric}</div>
                                  {item.note && <div className="td-results-counter-note">Note: {item.note}</div>}
                                  <a href={item.link} className="td-results-evidence-link">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                      <path d="M8.5 5.5v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                                      <path d="M6 1h3v3M9 1L4.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    View source
                                  </a>
                                </div>
                              ))
                            ) : (
                              <div className="td-results-evidence-empty">No counter-evidence found</div>
                            )}
                          </div>
                        </div>
                      </Annotated>
                    ) : (
                      <div className="td-results-evidence-column td-results-evidence-column--counter">
                        <span className="td-results-evidence-label td-results-evidence-label--counter">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          Counter-Evidence
                        </span>
                        <div className="td-results-evidence-list">
                          {activeOption.counterEvidence && activeOption.counterEvidence.length > 0 ? (
                            activeOption.counterEvidence.map((item, i) => (
                              <div key={i} className="td-results-evidence-item td-results-evidence-item--counter">
                                <div className="td-results-evidence-header">
                                  <span className="td-results-evidence-tool">{item.tool}</span>
                                  <span className="td-results-evidence-source">{item.source}</span>
                                </div>
                                <div className="td-results-evidence-metric">{item.metric}</div>
                                {item.note && <div className="td-results-counter-note">Note: {item.note}</div>}
                                <a href={item.link} className="td-results-evidence-link">
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M8.5 5.5v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                                    <path d="M6 1h3v3M9 1L4.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  View source
                                </a>
                              </div>
                            ))
                          ) : (
                            <div className="td-results-evidence-empty">No counter-evidence found</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar - Create Jira Ticket */}
            <div className="td-results-actions">
              {/* Suggested Action Card */}
              <div className="td-action-card">
                <div className="td-action-card-header">
                  <span className="td-action-card-label">Suggested Next Action</span>
                </div>

                {/* Title row with Jira badge inline */}
                <div className="td-action-card-title-row">
                  <Annotated
                    show={showAnnotations}
                    patternId="3.2"
                    patternName="Human-in-the-Loop Gates"
                    description="Ensure humans approve high-stakes actions before execution."
                    placement="top-left"
                  >
                    <div className="td-action-card-title">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                        <path d="M5 7h4M7 5v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                      Create Investigation Ticket
                    </div>
                  </Annotated>

                  <Annotated
                    show={showAnnotations}
                    patternId="3.5"
                    patternName="Scoped Permissions & Tool Consent"
                    description="Make data and tool access explicit, scoped, and revocable."
                    placement="top-right"
                  >
                    <div className="td-action-tool-badge">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7.5 1.5L12.5 4v6l-5 2.5L2.5 10V4l5-2.5z" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M2.5 4l5 2.5v6" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M12.5 4l-5 2.5" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                      Connected to Jira
                      <span>(create issues)</span>
                    </div>
                  </Annotated>
                </div>

                {/* Summary field */}
                <div className="td-action-field">
                  <label>Summary</label>
                  <input
                    type="text"
                    defaultValue={`Investigate: ${activeOption?.title || 'Root cause analysis'}`}
                    readOnly
                  />
                </div>

                {/* Assumptions Panel - Pattern 4.3 */}
                <div className="td-action-assumptions">
                  <Annotated
                    show={showAnnotations}
                    patternId="4.3"
                    patternName="Confirmed Assumptions Panel"
                    description="Make inferred assumptions visible so users can correct them early."
                    placement="top-left"
                  >
                    <div className="td-action-assumptions-header">
                      Assumptions (edit if needed)
                    </div>
                  </Annotated>
                  <div className="td-action-assumptions-grid">
                      <div className="td-action-assumption-row">
                        <span className="td-action-assumption-label">Assignee</span>
                        <span className="td-action-assumption-value">You (Jane Doe)</span>
                        <button className="td-action-assumption-edit" title="Edit">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M7.5 1.5l1 1M1 9l.5-2L7 1.5l1 1L2.5 8 1 9z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                      <div className="td-action-assumption-row">
                        <span className="td-action-assumption-label">Priority</span>
                        <select className="td-action-assumption-select" defaultValue="high">
                          <option value="highest">Highest</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>
                      <div className="td-action-assumption-row">
                        <span className="td-action-assumption-label">Labels</span>
                        <span className="td-action-assumption-value">incident, stripe, checkout</span>
                        <button className="td-action-assumption-edit" title="Edit">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M7.5 1.5l1 1M1 9l.5-2L7 1.5l1 1L2.5 8 1 9z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                      <div className="td-action-assumption-row">
                        <span className="td-action-assumption-label">Attachments</span>
                        <span className="td-action-assumption-value td-action-assumption-value--auto">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Full Report (auto)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Pattern 4.2 */}
              <Annotated
                show={showAnnotations}
                patternId="4.2"
                patternName="Recap & Commit"
                description="Confirm shared understanding with clear approval controls before committing."
                placement="bottom-right"
              >
                <div className="td-action-buttons">
                  <button className="td-button td-button--ghost">Skip</button>
                  <button className="td-button td-button--primary">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Create Ticket
                  </button>
                </div>
              </Annotated>
            </div>
          </div>
        </div>
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
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
    </div>
  );
}
