import React, { useState, useRef, useEffect } from 'react';
import Annotated from '../Annotated';
import { TASK_DETAIL_DATA, AGENT_ACTIVITY_TIMELINE } from '../../data/mockData';

export default function Slide9TaskDetail({ showAnnotations = true }) {
  const [selectedEventId, setSelectedEventId] = useState('evt-006');
  const timelineRef = useRef(null);
  const data = TASK_DETAIL_DATA;

  // Scroll timeline to show activity on mount
  // Use manual scroll calculation to prevent page scroll (scrollIntoView bubbles up
  // when parent containers have overflow: hidden)
  useEffect(() => {
    requestAnimationFrame(() => {
      if (timelineRef.current) {
        const selectedEl = timelineRef.current.querySelector('.td-taskdetail-event--selected');
        if (selectedEl) {
          const container = timelineRef.current;
          const containerHeight = container.clientHeight;
          const elementTop = selectedEl.offsetTop;
          const elementHeight = selectedEl.offsetHeight;

          // Calculate scroll position to center the element
          const scrollTo = elementTop - (containerHeight / 2) + (elementHeight / 2);

          container.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: 'smooth'
          });
        }
      }
    });
  }, []);

  const getModeClass = (mode) => {
    switch (mode) {
      case 'autopilot':
        return 'td-taskdetail-mode--autopilot';
      case 'copilot':
        return 'td-taskdetail-mode--copilot';
      default:
        return 'td-taskdetail-mode--advisor';
    }
  };

  const getModeLabel = (mode) => {
    switch (mode) {
      case 'autopilot':
        return 'Autopilot';
      case 'copilot':
        return 'Co-Pilot';
      default:
        return 'Advisor';
    }
  };

  const getStepStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" fill="var(--td-success)" fillOpacity="0.2"/>
            <path d="M4 7l2 2 4-4" stroke="var(--td-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'running':
        return <span className="td-taskdetail-step-spinner"></span>;
      default:
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5" stroke="var(--td-text-muted)" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        );
    }
  };

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
        return <span className="td-taskdetail-event-spinner"></span>;
      default:
        return <span className="td-taskdetail-event-pending"></span>;
    }
  };

  // Organize timeline events by parent/child relationship
  const organizeTimeline = () => {
    const organized = [];
    const childrenMap = {};

    // First pass: group children by parent
    AGENT_ACTIVITY_TIMELINE.forEach((event) => {
      if (event.parentId) {
        if (!childrenMap[event.parentId]) {
          childrenMap[event.parentId] = [];
        }
        childrenMap[event.parentId].push(event);
      }
    });

    // Second pass: build organized list with parent-children structure
    AGENT_ACTIVITY_TIMELINE.forEach((event) => {
      if (!event.parentId) {
        organized.push({
          ...event,
          children: childrenMap[event.id] || [],
        });
      }
    });

    return organized;
  };

  const organizedTimeline = organizeTimeline();

  return (
    <div className="td-slide td-slide--taskdetail">
      {/* Header */}
      <div className="td-taskdetail-header">
        <div className="td-taskdetail-header-left">
          <button className="td-taskdetail-back-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="td-taskdetail-title-group">
            <h2 className="td-taskdetail-title">{data.title}</h2>
            <div className="td-taskdetail-meta">
              <span className="td-taskdetail-run-id">Run {data.runId}</span>
              <span className="td-taskdetail-separator">·</span>
              <span className="td-taskdetail-status td-taskdetail-status--running">
                <span className="td-taskdetail-status-dot"></span>
                {data.progress}% complete
              </span>
            </div>
          </div>
        </div>
        <div className="td-taskdetail-header-right">
          <div className="td-taskdetail-stats-row">
            <div className="td-taskdetail-stat">
              <span className="td-taskdetail-stat-label">Time</span>
              <span className="td-taskdetail-stat-value">{data.runningTime}</span>
            </div>
            <div className="td-taskdetail-stat">
              <span className="td-taskdetail-stat-label">Cost</span>
              <span className="td-taskdetail-stat-value">${data.totalCost.toFixed(2)}</span>
            </div>
          </div>
          <button className="td-taskdetail-chat-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 3.5C2 2.67 2.67 2 3.5 2h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H5l-2.5 2V10H3.5C2.67 10 2 9.33 2 8.5v-5z" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            Open Chat
          </button>
        </div>
      </div>

      <div className="td-taskdetail-body">
        {/* Plan Section */}
        <div className="td-taskdetail-plan">
          <Annotated
            show={showAnnotations}
            patternId="3.3"
            patternName="Plan-then-Execute Workflow"
            description="The agent's execution plan with step-by-step progress tracking."
            placement="top-left"
          >
            <div className="td-taskdetail-plan-header">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 5h4M5 7h4M5 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Execution Plan</span>
            </div>
          </Annotated>

          <div className="td-taskdetail-plan-steps">
            {data.plan.map((step) => (
              <div
                key={step.step}
                className={`td-taskdetail-step td-taskdetail-step--${step.status}`}
              >
                <div className="td-taskdetail-step-status">
                  {getStepStatusIcon(step.status)}
                </div>
                <div className="td-taskdetail-step-content">
                  <div className="td-taskdetail-step-header">
                    <span className="td-taskdetail-step-num">Step {step.step}</span>
                    <span className={`td-taskdetail-mode ${getModeClass(step.mode)}`}>
                      {getModeLabel(step.mode)}
                    </span>
                  </div>
                  <div className="td-taskdetail-step-title">{step.title}</div>
                  <div className="td-taskdetail-step-meta">
                    <span className="td-taskdetail-step-agent">{step.agent}</span>
                    {step.tools.length > 0 && (
                      <div className="td-taskdetail-step-tools">
                        {step.tools.map((tool) => (
                          <span key={tool} className="td-taskdetail-tool-chip">{tool}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Timeline */}
        <div className="td-taskdetail-timeline">
          <Annotated
            show={showAnnotations}
            patternId="5.4"
            patternName="Activity Timeline & Audit Log"
            description="Detailed chronological log of all agent actions with drill-down capability."
            placement="top-left"
          >
            <div className="td-taskdetail-timeline-header">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Execution Timeline</span>
              <span className="td-taskdetail-timeline-badge">Live</span>
            </div>
          </Annotated>

          <div className="td-taskdetail-timeline-list" ref={timelineRef}>
            {organizedTimeline.map((event, parentIndex) => (
              <div key={event.id} className="td-taskdetail-event-group">
                {/* Parent Event */}
                <Annotated
                  show={showAnnotations && parentIndex === 2 && event.id === 'evt-005'}
                  patternId="5.3"
                  patternName="Tool Usage Indicators"
                  description="Click any activity to view detailed MCP call information."
                  placement="top-right"
                >
                  <div
                    className={`td-taskdetail-event td-taskdetail-event--${event.status} ${selectedEventId === event.id ? 'td-taskdetail-event--selected' : ''}`}
                    onClick={() => setSelectedEventId(event.id)}
                  >
                    <div className="td-taskdetail-event-marker">
                      {getStatusIcon(event.status)}
                      {event.children.length > 0 && (
                        <div className="td-taskdetail-event-line"></div>
                      )}
                    </div>
                    <div className="td-taskdetail-event-content">
                      <div className="td-taskdetail-event-header">
                        <span className={`td-taskdetail-event-avatar td-taskdetail-event-avatar--${event.avatar.toLowerCase()}`}>
                          {event.avatar}
                        </span>
                        <span className="td-taskdetail-event-agent">{event.agent}</span>
                        <span className="td-taskdetail-event-time">{event.time}</span>
                      </div>
                      <div className="td-taskdetail-event-body">
                        <span className={`td-taskdetail-event-type td-taskdetail-event-type--${event.type}`}>
                          {getTypeIcon(event.type)}
                          {event.type === 'thinking' ? 'Thinking' : event.type === 'tool' ? 'Tool' : 'Delegation'}
                        </span>
                        <span className="td-taskdetail-event-text">{event.text}</span>
                      </div>
                      {event.mcpTool && (
                        <div className="td-taskdetail-event-tool">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5h6M5 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          {event.mcpTool}
                        </div>
                      )}
                    </div>
                    <div className="td-taskdetail-event-arrow">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Annotated>

                {/* Child Events (indented) */}
                {event.children.length > 0 && (
                  <div className="td-taskdetail-children">
                    {event.children.map((child) => (
                      <div
                        key={child.id}
                        className={`td-taskdetail-event td-taskdetail-event--child td-taskdetail-event--${child.status} ${selectedEventId === child.id ? 'td-taskdetail-event--selected' : ''}`}
                        onClick={() => setSelectedEventId(child.id)}
                      >
                        <div className="td-taskdetail-event-marker">
                          {getStatusIcon(child.status)}
                        </div>
                        <div className="td-taskdetail-event-content">
                          <div className="td-taskdetail-event-header">
                            <span className={`td-taskdetail-event-avatar td-taskdetail-event-avatar--${child.avatar.toLowerCase()}`}>
                              {child.avatar}
                            </span>
                            <span className="td-taskdetail-event-agent">{child.agent}</span>
                            <span className="td-taskdetail-event-time">{child.time}</span>
                          </div>
                          <div className="td-taskdetail-event-body">
                            <span className={`td-taskdetail-event-type td-taskdetail-event-type--${child.type}`}>
                              {getTypeIcon(child.type)}
                              {child.type === 'thinking' ? 'Thinking' : child.type === 'tool' ? 'Tool' : 'Action'}
                            </span>
                            <span className="td-taskdetail-event-text">{child.text}</span>
                          </div>
                          {child.mcpTool && (
                            <div className="td-taskdetail-event-tool">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M2 5h6M5 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                              </svg>
                              {child.mcpTool}
                            </div>
                          )}
                        </div>
                        <div className="td-taskdetail-event-arrow">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
