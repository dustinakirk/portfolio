import React, { useState } from 'react';
import Annotated from '../Annotated';
import { TASK_INBOX_DATA } from '../../data/mockData';

export default function Slide11TaskInbox({ showAnnotations = true }) {
  const data = TASK_INBOX_DATA;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTaskId, setSelectedTaskId] = useState(data.tasks[0]?.id || null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [otherActive, setOtherActive] = useState({});
  const [otherText, setOtherText] = useState({});
  const [showFullHistory, setShowFullHistory] = useState(false);

  // Filter tasks based on active filter
  const filteredTasks = data.tasks.filter((task) => {
    if (activeFilter === 'All') return true;
    return task.interventionType.toLowerCase() === activeFilter.toLowerCase();
  });

  // Sort by most recent (lowest waitingMinutes first)
  const sortedTasks = [...filteredTasks].sort((a, b) => a.waitingMinutes - b.waitingMinutes);

  const selectedTask = data.tasks.find((t) => t.id === selectedTaskId);

  const handleTaskSelect = (taskId) => {
    setSelectedTaskId(taskId);
    setSelectedOptions({});
    setOtherActive({});
    setOtherText({});
    setShowFullHistory(false);
  };

  const handleOptionSelect = (questionIndex, option) => {
    if (otherActive[questionIndex]) {
      setOtherActive({ ...otherActive, [questionIndex]: false });
      setOtherText({ ...otherText, [questionIndex]: '' });
    }
    setSelectedOptions({ ...selectedOptions, [questionIndex]: option });
  };

  const handleOtherClick = (questionIndex) => {
    setOtherActive({ ...otherActive, [questionIndex]: true });
    setSelectedOptions({ ...selectedOptions, [questionIndex]: null });
  };

  const handleOtherTextChange = (questionIndex, text) => {
    setOtherText({ ...otherText, [questionIndex]: text });
    if (text.trim()) {
      setSelectedOptions({ ...selectedOptions, [questionIndex]: `Other: ${text}` });
    }
  };

  const handleAdvanceToNext = () => {
    const currentIndex = sortedTasks.findIndex((t) => t.id === selectedTaskId);
    if (currentIndex < sortedTasks.length - 1) {
      handleTaskSelect(sortedTasks[currentIndex + 1].id);
    }
  };

  const getInterventionBadgeClass = (type) => {
    switch (type) {
      case 'clarification':
        return 'td-inbox-badge--clarification';
      case 'approval':
        return 'td-inbox-badge--approval';
      case 'action':
        return 'td-inbox-badge--action';
      default:
        return '';
    }
  };

  const getInterventionLabel = (type) => {
    switch (type) {
      case 'clarification':
        return 'Clarification';
      case 'approval':
        return 'Approval';
      case 'action':
        return 'Action';
      default:
        return type;
    }
  };

  return (
    <div className="td-slide td-slide--inbox">
      <div className="td-inbox-layout">
        {/* Left Panel - Task List */}
        <div className="td-inbox-list-panel">
          <div className="td-inbox-header">
            <div className="td-inbox-title">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M2 6h12" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <Annotated
                show={showAnnotations}
                patternId="7.5"
                patternName="Assignment Board & Work Queues"
                description="Queue view lets humans see and control pending tasks awaiting intervention."
                placement="top-left"
              >
                <span>Task Inbox</span>
              </Annotated>
              <span className="td-inbox-count">{sortedTasks.length}</span>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="td-inbox-filters">
            {data.filters.map((filter) => (
              <button
                key={filter}
                className={`td-inbox-filter ${activeFilter === filter ? 'td-inbox-filter--active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter !== 'All' && (
                  <span className="td-inbox-filter-count">
                    {data.tasks.filter((t) => t.interventionType.toLowerCase() === filter.toLowerCase()).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Task List */}
          <div className="td-inbox-list">
            {sortedTasks.map((task, index) => (
              <button
                key={task.id}
                className={`td-inbox-task ${selectedTaskId === task.id ? 'td-inbox-task--selected' : ''} ${task.unread ? 'td-inbox-task--unread' : ''}`}
                onClick={() => handleTaskSelect(task.id)}
              >
                {index === 0 && (
                  <Annotated
                    show={showAnnotations}
                    patternId="7.6"
                    patternName="Escalation & Fallback Routing"
                    description="Tasks escalated to humans show clear reasons and intervention types."
                    placement="top-right"
                  >
                    <span />
                  </Annotated>
                )}
                <div className="td-inbox-task-main">
                  <div className="td-inbox-task-avatar">{task.avatar}</div>
                  <div className="td-inbox-task-content">
                    <div className="td-inbox-task-title-row">
                      <span className="td-inbox-task-title">{task.title}</span>
                      {task.unread && <span className="td-inbox-task-unread-dot" />}
                    </div>
                    <div className="td-inbox-task-meta">
                      <span className="td-inbox-task-agent">{task.agent}</span>
                      <span className="td-inbox-task-separator">·</span>
                      <span className="td-inbox-task-time">{task.waitingTime}</span>
                    </div>
                  </div>
                </div>
                <div className="td-inbox-task-footer">
                  <span className={`td-inbox-badge ${getInterventionBadgeClass(task.interventionType)}`}>
                    {getInterventionLabel(task.interventionType)}
                  </span>
                  <span className="td-inbox-task-blocker">{task.blockerSummary}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Task Detail */}
        <div className="td-inbox-detail-panel">
          {selectedTask ? (
            <>
              {/* Detail Header */}
              <div className="td-inbox-detail-header">
                <div className="td-inbox-detail-title-row">
                  <div className="td-inbox-detail-avatar">{selectedTask.avatar}</div>
                  <div className="td-inbox-detail-title-content">
                    <h3 className="td-inbox-detail-title">{selectedTask.title}</h3>
                    <div className="td-inbox-detail-meta">
                      <span>{selectedTask.agent}</span>
                      <span className="td-inbox-task-separator">·</span>
                      <span>{selectedTask.waitingTime} waiting</span>
                      <span className="td-inbox-task-separator">·</span>
                      <span>${selectedTask.cost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <span className={`td-inbox-badge ${getInterventionBadgeClass(selectedTask.interventionType)}`}>
                  {getInterventionLabel(selectedTask.interventionType)}
                </span>
              </div>

              {/* Conversation with inline intervention content */}
              <div className="td-inbox-conversation">
                {!showFullHistory && selectedTask.conversation.messages.length > 2 && (
                  <button
                    className="td-inbox-show-more"
                    onClick={() => setShowFullHistory(true)}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Show earlier messages
                  </button>
                )}

                {(() => {
                  const visibleMessages = showFullHistory
                    ? selectedTask.conversation.messages
                    : selectedTask.conversation.messages.slice(-2);

                  return visibleMessages.map((msg, i) => {
                    const isLastAgentMessage =
                      i === visibleMessages.length - 1 && msg.role === 'agent';

                    return (
                      <div
                        key={i}
                        className={`td-chat__message ${msg.role === 'user' ? 'td-chat__message--user' : 'td-chat__message--agent'}`}
                      >
                        <div className={`td-chat__avatar ${msg.role === 'user' ? 'td-chat__avatar--user' : 'td-chat__avatar--agent'}`}>
                          {msg.role === 'user' ? 'JD' : selectedTask.avatar}
                        </div>
                        <div className="td-chat__content">
                          <div className="td-chat__header">
                            <span className="td-chat__author">{msg.author}</span>
                            <span className="td-chat__time">{msg.time}</span>
                          </div>
                          <p className="td-chat__text">{msg.text}</p>

                          {/* Intervention content - inline in last agent message */}
                          {isLastAgentMessage && selectedTask.interventionType === 'clarification' && (
                            <div className="td-clarifications">
                              <div className="td-clarifications-header">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M5.5 5.5a1.5 1.5 0 112.12.88c-.35.2-.62.52-.62.87V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  <circle cx="7" cy="10" r="0.5" fill="currentColor"/>
                                </svg>
                                <Annotated
                                  show={showAnnotations}
                                  patternId="4.1"
                                  patternName="Structured Clarification Prompts"
                                  description="Multiple-choice options reduce friction while preserving custom input."
                                  placement="top-left"
                                >
                                  <span>Quick questions to continue:</span>
                                </Annotated>
                              </div>
                                {selectedTask.conversation.clarifications.map((q, qIndex) => (
                                  <div key={qIndex} className="td-clarification-item">
                                    <p className="td-clarification-question">{q.question}</p>
                                    <div className="td-clarification-options">
                                      {q.options.map((opt) => (
                                        <button
                                          key={opt}
                                          className={`td-clarification-option ${selectedOptions[qIndex] === opt ? 'td-clarification-option--selected' : ''}`}
                                          onClick={() => handleOptionSelect(qIndex, opt)}
                                        >
                                          {opt}
                                        </button>
                                      ))}
                                      <button
                                        className={`td-clarification-option td-clarification-option--other ${otherActive[qIndex] ? 'td-clarification-option--selected' : ''}`}
                                        onClick={() => handleOtherClick(qIndex)}
                                      >
                                        Other
                                      </button>
                                    </div>
                                    {otherActive[qIndex] && (
                                      <div className="td-clarification-other-container">
                                        <input
                                          type="text"
                                          className="td-clarification-other-input"
                                          placeholder="Type your answer..."
                                          value={otherText[qIndex] || ''}
                                          onChange={(e) => handleOtherTextChange(qIndex, e.target.value)}
                                          autoFocus
                                        />
                                      </div>
                                    )}
                                  </div>
                                ))}
                            </div>
                          )}

                          {isLastAgentMessage && selectedTask.interventionType === 'approval' && (
                            <div className="td-plan-card">
                              <div className="td-plan-card-header">
                                <div className="td-plan-card-header-left">
                                  <Annotated
                                    show={showAnnotations}
                                    patternId="3.2"
                                    patternName="Human-in-the-Loop Gates"
                                    description="Explicit approval required before high-stakes actions execute."
                                    placement="top-left"
                                  >
                                    <span className="td-plan-label">PLAN</span>
                                  </Annotated>
                                </div>
                                  <div className="td-plan-badge">
                                    <span>{selectedTask.conversation.plan.estimates.time.min}–{selectedTask.conversation.plan.estimates.time.max} {selectedTask.conversation.plan.estimates.time.unit}</span>
                                    <span className="td-plan-badge-dot">•</span>
                                    <span>${selectedTask.conversation.plan.estimates.cost.min.toFixed(2)}–${selectedTask.conversation.plan.estimates.cost.max.toFixed(2)}</span>
                                  </div>
                                </div>
                                <div className="td-plan-steps">
                                  {selectedTask.conversation.plan.steps.map((step, stepIndex) => (
                                    <div key={step.step} className="td-plan-step-card">
                                      <div className="td-plan-step-header">
                                        <span className="td-plan-step-number">{step.step}</span>
                                        <span className="td-plan-step-title">{step.title}</span>
                                        <span className={`td-plan-mode-badge td-plan-mode-badge--${step.mode}`}>
                                          {step.mode === 'autopilot' ? 'Autopilot' : step.mode === 'copilot' ? 'Co-Pilot' : 'Advisor'}
                                        </span>
                                      </div>
                                      <div className="td-plan-step-body">
                                        <span className="td-plan-step-agent">{step.agent}</span>
                                        {step.tools?.length > 0 && (
                                          <div className="td-plan-step-tools">
                                            {step.tools.map((tool) => (
                                              <span key={tool} className="td-plan-tool-badge">{tool}</span>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                      {stepIndex < selectedTask.conversation.plan.steps.length - 1 && (
                                        <div className="td-plan-step-connector" />
                                      )}
                                    </div>
                                  ))}
                                </div>
                            </div>
                          )}

                          {isLastAgentMessage && selectedTask.interventionType === 'action' && (
                            <div className="td-action-card">
                              <div className="td-action-card-header">
                                <span className="td-action-card-label">Suggested Action</span>
                              </div>
                              <div className="td-action-card-title-row">
                                <div className="td-action-card-title">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M5 7h4M7 5v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                  </svg>
                                  {selectedTask.conversation.suggestedAction.title}
                                </div>
                                <div className="td-action-tool-badge">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7.5 1.5L12.5 4v6l-5 2.5L2.5 10V4l5-2.5z" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M2.5 4l5 2.5v6" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M12.5 4l-5 2.5" stroke="currentColor" strokeWidth="1.2" />
                                  </svg>
                                  Connected to {selectedTask.conversation.suggestedAction.tool}
                                </div>
                              </div>
                              <div className="td-action-assumptions-grid">
                                {selectedTask.conversation.suggestedAction.fields.map((field, fieldIndex) => (
                                  <div key={fieldIndex} className="td-action-assumption-row">
                                    <span className="td-action-assumption-label">{field.label}</span>
                                    {field.options ? (
                                      <select className="td-action-assumption-select" defaultValue={field.value}>
                                        {field.options.map((opt) => (
                                          <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                      </select>
                                    ) : (
                                      <>
                                        <span className="td-action-assumption-value">{field.value}</span>
                                        {field.editable && (
                                          <button className="td-action-assumption-edit" title="Edit">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                              <path d="M7.5 1.5l1 1M1 9l.5-2L7 1.5l1 1L2.5 8 1 9z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          </button>
                                        )}
                                      </>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  });
                })()}

                <button className="td-inbox-view-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8.5 5.5v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M6 1h5v5M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  View full conversation
                </button>
              </div>

              {/* Action Buttons - Separate for quick task processing */}
              <div className="td-inbox-action-area">
                <div className="td-inbox-actions">
                  <Annotated
                    show={showAnnotations}
                    patternId="4.2"
                    patternName="Recap & Commit"
                    description="Confirm understanding with clear approval or edit controls before proceeding."
                    placement="bottom-right"
                  >
                    <span />
                  </Annotated>
                  <button className="td-button td-button--ghost" onClick={handleAdvanceToNext}>
                    Skip for now
                  </button>
                    {selectedTask.interventionType === 'clarification' && (
                      <button className="td-button td-button--primary" onClick={handleAdvanceToNext}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 2L4 10l-2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Submit & Continue
                      </button>
                    )}
                    {selectedTask.interventionType === 'approval' && (
                      <>
                        <button className="td-button td-button--secondary">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M8.5 1.5l2 2M1.5 10.5l.5-2.5 6.5-6.5 2 2-6.5 6.5-2.5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Refine Plan
                        </button>
                        <button className="td-button td-button--primary" onClick={handleAdvanceToNext}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 2L4 10l-2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Approve & Run
                        </button>
                      </>
                    )}
                    {selectedTask.interventionType === 'action' && (
                      <button className="td-button td-button--primary" onClick={handleAdvanceToNext}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 2L4 10l-2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Execute Action
                      </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="td-inbox-empty-state">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M8 18h32" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p>Select a task to review</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
