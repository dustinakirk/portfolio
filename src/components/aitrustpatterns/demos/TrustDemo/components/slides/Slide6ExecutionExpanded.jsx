import React, { useState, useEffect, useRef } from 'react';
import Annotated from '../Annotated';
import { CHAT_MESSAGES, REASONING_DATA, AGENT_ACTIVITY_TIMELINE, ASK_QUESTION_DATA } from '../../data/mockData';

export default function Slide5ExecutionExpanded({ showAnnotations = true }) {
  const [selectedEventIndex, setSelectedEventIndex] = useState(5); // Pre-select Data Scout SQL query
  const [expandedSections, setExpandedSections] = useState({ input: true, output: true, reasoning: true });
  const timelineRef = useRef(null);
  const chatEndRef = useRef(null);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Chevron icon for accordion headers
  const ChevronIcon = ({ isOpen }) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`td-details-chevron${isOpen ? ' td-details-chevron--open' : ''}`}
    >
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Scroll timeline and chat to bottom on mount with smooth animation
  useEffect(() => {
    requestAnimationFrame(() => {
      if (timelineRef.current) {
        timelineRef.current.scrollTop = timelineRef.current.scrollHeight;
      }
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }, []);

  const chatData = CHAT_MESSAGES.slide2;
  const progressData = REASONING_DATA;

  const progressPercent = (progressData.currentStep / progressData.totalSteps) * 100;
  const currentTool = progressData.tools.find(t => t.status === 'running');
  const statusText = currentTool
    ? `${currentTool.name} ${currentTool.name === 'Data Scout (SQL)' ? 'pulling adoption metrics' : 'processing'}...`
    : progressData.thinking[progressData.currentStep - 1];

  const selectedEvent = AGENT_ACTIVITY_TIMELINE[selectedEventIndex];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'thinking':
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        );
      case 'tool':
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'action':
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 2l5 3-5 3V2z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6l2 2 4-4" stroke="var(--td-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'running':
        return <span className="td-agent-timeline-spinner"></span>;
      default:
        return <span className="td-agent-timeline-pending"></span>;
    }
  };

  return (
    <div className="td-slide td-slide--execution-expanded">
      <div className="td-exec-split-layout td-exec-split-layout--three-col">
        {/* Left: Chat Messages */}
        <div className="td-exec-chat-pane">
          <div className="td-chat td-chat--padded">
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

            {/* Agent Response with Progress - Matching Slide 5 */}
            <div className="td-chat__message td-chat__message--agent">
              <div className="td-chat__avatar td-chat__avatar--agent">A</div>
              <div className="td-chat__content">
                <div className="td-chat__header">
                  <span className="td-chat__author">Atlas</span>
                  <span className="td-chat__time">Just now</span>
                </div>

                <div className="td-chat__text">
                  <p style={{ marginBottom: '10px' }}>Got it! Here's my plan:</p>
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

                {/* Compact Progress Component */}
                <div className="td-exec-progress">
                  {/* Progress Header */}
                  <div className="td-exec-progress-header">
                    <div className="td-exec-progress-status">
                      <span className="td-exec-progress-step">
                        <span className="td-exec-progress-dot"></span>
                        Step {progressData.currentStep} of {progressData.totalSteps}
                      </span>
                      <span className="td-exec-progress-label">{statusText}</span>
                    </div>
                    <div className="td-exec-progress-actions">
                      <button className="td-exec-pause-btn" title="Pause execution">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <rect x="2" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                          <rect x="7" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                        </svg>
                        Pause
                      </button>
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

                  {/* Hide details toggle (shown as active state) */}
                  <div className="td-exec-expand-wrapper">
                    <button className="td-exec-expand-toggle td-exec-expand-toggle--active">
                      <span>Hide details</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 7l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Middle: Agent Activity Timeline */}
        <div className="td-exec-details-panel">
          <Annotated
            show={showAnnotations}
            patternId="5.4"
            patternName="Activity Timeline & Audit Log"
            description="Transparent, reviewable history of what agents did for oversight and trust."
            placement="top-left"
          >
            <div className="td-exec-panel-header">
              <div className="td-exec-panel-header-left">
                <span className="td-exec-panel-title">Agent Activity</span>
                <span className="td-exec-panel-badge">Live</span>
              </div>
              <button className="td-exec-panel-close" title="Close panel">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </Annotated>

          <div className="td-agent-timeline" ref={timelineRef}>
            {AGENT_ACTIVITY_TIMELINE.map((event, i) => (
              <div
                key={i}
                className={`td-agent-timeline-item td-agent-timeline-item--${event.status}${i === selectedEventIndex ? ' td-agent-timeline-item--selected' : ''} td-agent-timeline-item--clickable`}
                onClick={() => setSelectedEventIndex(i)}
              >
                <div className="td-agent-timeline-left">
                  {getStatusIcon(event.status)}
                </div>
                <div className="td-agent-timeline-content">
                  <div className="td-agent-timeline-header">
                    <span className={`td-agent-timeline-avatar td-agent-timeline-avatar--${event.avatar.toLowerCase()}`}>
                      {event.avatar}
                    </span>
                    <span className="td-agent-timeline-agent">{event.agent}</span>
                    {event.time && (
                      <span className="td-agent-timeline-time">{event.time}</span>
                    )}
                  </div>
                  <div className="td-agent-timeline-body">
                    <span className={`td-agent-timeline-type td-agent-timeline-type--${event.type}`}>
                      {getTypeIcon(event.type)}
                      {event.type === 'thinking' ? 'Thinking' : event.type === 'tool' ? 'Tool' : 'Action'}
                    </span>
                    <span className="td-agent-timeline-text">{event.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Activity Details Panel */}
        <div className="td-tool-details-panel">
          <Annotated
            show={showAnnotations}
            patternId="5.3"
            patternName="Tool Usage Indicators"
            description="Show which tools/APIs the agent is using and their status."
            placement="top-left"
          >
            <div className="td-exec-panel-header">
              <span className="td-exec-panel-title">Activity Details</span>
              <button className="td-exec-panel-close" title="Close panel">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </Annotated>

          {selectedEvent?.details ? (
            <div className="td-tool-details-content">
              {/* Header with agent and activity type */}
              <div className="td-tool-details-header">
                <span className={`td-agent-timeline-avatar td-agent-timeline-avatar--${selectedEvent.avatar.toLowerCase()}`}>
                  {selectedEvent.avatar}
                </span>
                <div className="td-tool-details-title">
                  <span className="td-tool-details-agent">{selectedEvent.agent}</span>
                  <span className="td-tool-details-name">{selectedEvent.details.title}</span>
                </div>
              </div>

              {/* Type-specific content rendering */}
              {selectedEvent.type === 'thinking' && (
                <>
                  {/* Input Section */}
                  <div className="td-details-accordion">
                    <button
                      className={`td-details-section-header${expandedSections.input ? ' td-details-section-header--open' : ''}`}
                      onClick={() => toggleSection('input')}
                    >
                      <span>Input</span>
                      <ChevronIcon isOpen={expandedSections.input} />
                    </button>
                    {expandedSections.input && (
                      <div className="td-details-section-content">
                        <pre className="td-tool-details-code">{selectedEvent.details.input}</pre>
                      </div>
                    )}
                  </div>

                  {/* Reasoning Section */}
                  <div className="td-details-accordion">
                    <button
                      className={`td-details-section-header${expandedSections.reasoning ? ' td-details-section-header--open' : ''}`}
                      onClick={() => toggleSection('reasoning')}
                    >
                      <span>Reasoning</span>
                      <ChevronIcon isOpen={expandedSections.reasoning} />
                    </button>
                    {expandedSections.reasoning && (
                      <div className="td-details-section-content">
                        <pre className="td-tool-details-code">{selectedEvent.details.reasoning}</pre>
                      </div>
                    )}
                  </div>

                  {/* Output Section */}
                  <div className="td-details-accordion">
                    <button
                      className={`td-details-section-header${expandedSections.output ? ' td-details-section-header--open' : ''}`}
                      onClick={() => toggleSection('output')}
                    >
                      <span>Output</span>
                      <ChevronIcon isOpen={expandedSections.output} />
                    </button>
                    {expandedSections.output && (
                      <div className="td-details-section-content">
                        <pre className="td-tool-details-code">{selectedEvent.details.output}</pre>
                      </div>
                    )}
                  </div>
                </>
              )}

              {selectedEvent.type === 'action' && (
                <>
                  {/* Delegation Info */}
                  <div className="td-details-meta">
                    <div className="td-details-meta-row">
                      <span className="td-details-meta-label">Target Agent</span>
                      <span className="td-details-meta-value">{selectedEvent.details.targetAgent}</span>
                    </div>
                    <div className="td-details-meta-row">
                      <span className="td-details-meta-label">Mode</span>
                      <span className={`td-details-mode-badge td-details-mode-badge--${selectedEvent.details.mode?.toLowerCase()}`}>
                        {selectedEvent.details.mode}
                      </span>
                    </div>
                  </div>

                  {/* Instructions Section */}
                  <div className="td-details-accordion">
                    <button
                      className={`td-details-section-header${expandedSections.input ? ' td-details-section-header--open' : ''}`}
                      onClick={() => toggleSection('input')}
                    >
                      <span>Instructions</span>
                      <ChevronIcon isOpen={expandedSections.input} />
                    </button>
                    {expandedSections.input && (
                      <div className="td-details-section-content">
                        <pre className="td-tool-details-code">{selectedEvent.details.instructions}</pre>
                      </div>
                    )}
                  </div>
                </>
              )}

              {selectedEvent.type === 'tool' && (
                <>
                  {/* Tool Output Section */}
                  <div className="td-details-accordion">
                    <button
                      className={`td-details-section-header${expandedSections.output ? ' td-details-section-header--open' : ''}`}
                      onClick={() => toggleSection('output')}
                    >
                      <span>Output</span>
                      <ChevronIcon isOpen={expandedSections.output} />
                    </button>
                    {expandedSections.output && (
                      <div className="td-details-section-content">
                        <pre className="td-tool-details-code">{selectedEvent.details.content}</pre>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Stats grid - shown for all types */}
              <div className="td-tool-details-stats">
                <div className="td-tool-details-stat">
                  <span className="td-tool-details-stat-label">Tokens</span>
                  <span className="td-tool-details-stat-value">
                    {selectedEvent.details.tokens.input.toLocaleString()} in / {selectedEvent.details.tokens.output.toLocaleString()} out
                  </span>
                </div>
                <div className="td-tool-details-stat">
                  <span className="td-tool-details-stat-label">Duration</span>
                  <span className="td-tool-details-stat-value">{selectedEvent.details.duration}</span>
                </div>
                {selectedEvent.details.cost !== undefined && (
                  <div className="td-tool-details-stat">
                    <span className="td-tool-details-stat-label">Cost</span>
                    <span className="td-tool-details-stat-value">${selectedEvent.details.cost.toFixed(3)}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="td-tool-details-empty">
              <span>Select an activity to view details</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
