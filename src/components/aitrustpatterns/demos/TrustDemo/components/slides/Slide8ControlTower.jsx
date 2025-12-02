import React from 'react';
import Annotated from '../Annotated';
import { HISTORY_DATA } from '../../data/mockData';

export default function Slide8History({ showAnnotations = true }) {
  const data = HISTORY_DATA;

  return (
    <div className="td-slide td-slide--history">
      {/* Header */}
      <div className="td-history-header">
        <div className="td-history-title">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5.5 9l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Tasks</span>
        </div>
        <button className="td-pause-all-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="3" y="2" width="3" height="10" rx="0.5" fill="currentColor"/>
            <rect x="8" y="2" width="3" height="10" rx="0.5" fill="currentColor"/>
          </svg>
          <Annotated
            show={showAnnotations}
            patternId="3.1"
            patternName="Kill Switch, Pause & Resume"
            description="Pause all running tasks while preserving their state for later resumption."
            placement="top-right"
          >
            <span>Pause All Tasks</span>
          </Annotated>
        </button>
      </div>

      <div className="td-history-content">
        {/* Blocked Tasks Section */}
        {data.blockedTasks.length > 0 && (
          <div className="td-history-section td-history-section--blocked">
            <div className="td-history-section-header">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3v5M7 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <Annotated
                show={showAnnotations}
                patternId="7.6"
                patternName="Escalation & Fallback Routing"
                description="Tasks requiring human input are surfaced prominently for quick resolution."
                placement="top-left"
              >
                <span>Blocked Tasks</span>
              </Annotated>
              <span className="td-history-section-count">{data.blockedTasks.length}</span>
            </div>

            <div className="td-history-list">
              {data.blockedTasks.map((task) => (
                <div key={task.id} className="td-history-task td-history-task--blocked">
                  <div className="td-history-task-main">
                    <div className="td-history-task-left">
                      <div className="td-history-task-avatar td-history-task-avatar--blocked">
                        {task.avatar}
                      </div>
                      <div className="td-history-task-info">
                        <div className="td-history-task-title">{task.title}</div>
                        <div className="td-history-task-meta">
                          <span className="td-history-task-agent">{task.agent}</span>
                          <span className="td-history-task-separator">·</span>
                          <span className="td-history-task-step">{task.planStep}</span>
                        </div>
                      </div>
                    </div>
                    <div className="td-history-task-right">
                      <div className="td-history-task-stats">
                        <span className="td-history-task-time">{task.runningTime}</span>
                        <span className="td-history-task-cost">${task.cost.toFixed(2)}</span>
                      </div>
                      <button className="td-history-task-chat-btn" title="Go to chat">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 3.5C2 2.67 2.67 2 3.5 2h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H5l-2.5 2V10H3.5C2.67 10 2 9.33 2 8.5v-5z" stroke="currentColor" strokeWidth="1.3"/>
                        </svg>
                        Go to Chat
                      </button>
                    </div>
                  </div>
                  <div className="td-history-task-blocker">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3v4M6 9v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{task.blockerReason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Tasks Section */}
        {data.activeTasks.length > 0 && (
          <div className="td-history-section td-history-section--active">
            <div className="td-history-section-header">
              <span className="td-history-section-spinner"></span>
              <Annotated
                show={showAnnotations}
                patternId="5.5"
                patternName="Execution Progress View"
                description="Live progress indicators show where agents are in their execution plans."
                placement="top-left"
              >
                <span>Active Tasks</span>
              </Annotated>
              <span className="td-history-section-count">{data.activeTasks.length}</span>
            </div>

            <div className="td-history-list">
              {data.activeTasks.map((task, index) => (
                <div key={task.id} className="td-history-task td-history-task--active">
                  {index === 0 && (
                    <Annotated
                      show={showAnnotations}
                      patternId="5.4"
                      patternName="Activity Timeline & Audit Log"
                      description="Click to view the detailed execution timeline and audit trail for this task."
                      placement="top-right"
                    >
                      <span />
                    </Annotated>
                  )}
                  <div className="td-history-task-main">
                    <div className="td-history-task-left">
                      <div className="td-history-task-avatar td-history-task-avatar--active">
                        {task.avatar}
                      </div>
                      <div className="td-history-task-info">
                        <div className="td-history-task-title">{task.title}</div>
                        <div className="td-history-task-meta">
                          <span className="td-history-task-agent">{task.agent}</span>
                          <span className="td-history-task-separator">·</span>
                          <span className="td-history-task-step">{task.currentStep}</span>
                        </div>
                      </div>
                    </div>
                    <div className="td-history-task-right">
                      <div className="td-history-task-stats">
                        <span className="td-history-task-time">{task.runningTime}</span>
                        <span className="td-history-task-cost">${task.cost.toFixed(2)}</span>
                      </div>
                      <div className="td-history-task-actions">
                        <button className="td-history-task-pause-btn" title="Pause task">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect x="2" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                            <rect x="7" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
                          </svg>
                        </button>
                        <button className="td-history-task-chat-link" title="Open chat">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 3C2 2.45 2.45 2 3 2h6c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H4.5L2.5 10V8H3c-.55 0-1-.45-1-1V3z" stroke="currentColor" strokeWidth="1.2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="td-history-task-progress">
                    <div className="td-history-task-progress-bar">
                      <div
                        className="td-history-task-progress-fill"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <span className="td-history-task-progress-text">{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Tasks Section */}
        {data.recentTasks.length > 0 && (
          <div className="td-history-section td-history-section--recent">
            <div className="td-history-section-header">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7l2.5 2.5L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Recent Tasks</span>
              <span className="td-history-section-count">{data.recentTasks.length}</span>
            </div>

            <div className="td-history-list">
              {data.recentTasks.map((task) => (
                <div key={task.id} className="td-history-task td-history-task--completed">
                  <div className="td-history-task-main">
                    <div className="td-history-task-left">
                      <div className="td-history-task-avatar td-history-task-avatar--completed">
                        {task.avatar}
                      </div>
                      <div className="td-history-task-info">
                        <div className="td-history-task-title">{task.title}</div>
                        <div className="td-history-task-meta">
                          <span className="td-history-task-agent">{task.agent}</span>
                          <span className="td-history-task-separator">·</span>
                          <span className="td-history-task-completed-time">{task.completedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="td-history-task-right">
                      <div className="td-history-task-stats">
                        <span className="td-history-task-time">{task.totalTime}</span>
                        <span className="td-history-task-cost">${task.cost.toFixed(2)}</span>
                      </div>
                      <button className="td-history-task-chat-link" title="Open chat">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 3C2 2.45 2.45 2 3 2h6c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H4.5L2.5 10V8H3c-.55 0-1-.45-1-1V3z" stroke="currentColor" strokeWidth="1.2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="td-history-view-all">
              View All History
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
