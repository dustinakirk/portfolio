import React, { useState } from 'react';
import Annotated from '../Annotated';
import { ACTIVITY_DETAIL_DATA } from '../../data/mockData';

export default function Slide10ActivityDetail({ showAnnotations = true }) {
  const [expandedSections, setExpandedSections] = useState({
    input: true,
    output: true,
    reasoning: true,
  });
  const data = ACTIVITY_DETAIL_DATA;

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const ChevronIcon = ({ isOpen }) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`td-activity-chevron${isOpen ? ' td-activity-chevron--open' : ''}`}
    >
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'success':
        return 'td-activity-status--success';
      case 'failed':
        return 'td-activity-status--failed';
      case 'running':
        return 'td-activity-status--running';
      default:
        return '';
    }
  };

  return (
    <div className="td-slide td-slide--activity">
      {/* Header */}
      <div className="td-activity-header">
        <div className="td-activity-header-left">
          <button className="td-activity-back-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="td-activity-title-group">
            <h2 className="td-activity-title">{data.title}</h2>
            <div className="td-activity-meta">
              <span className={`td-activity-avatar td-activity-avatar--${data.avatar.toLowerCase()}`}>
                {data.avatar}
              </span>
              <span className="td-activity-agent">{data.agent}</span>
              <span className="td-activity-separator">·</span>
              <span className="td-activity-timestamp">{data.timestamp}</span>
            </div>
          </div>
        </div>
        <div className="td-activity-header-right">
          <span className={`td-activity-status-badge ${getStatusBadgeClass(data.status)}`}>
            {data.status === 'success' && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {data.status === 'failed' && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {data.status === 'running' && <span className="td-activity-status-spinner"></span>}
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Trace ID Bar */}
      <div className="td-activity-trace">
        <Annotated
          show={showAnnotations}
          patternId="5.4"
          patternName="Activity Timeline & Audit Log"
          description="Unique trace ID for correlating logs across systems and debugging."
          placement="top-left"
        >
          <div className="td-activity-trace-content">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6M6 3v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="td-activity-trace-label">Trace ID</span>
            <code className="td-activity-trace-id">{data.traceId}</code>
            <button className="td-activity-trace-copy" title="Copy trace ID">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8.5 3.5V2.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1h1" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>
          </div>
        </Annotated>
      </div>

      <div className="td-activity-body">
        {/* MCP Tool Section */}
        <div className="td-activity-tool-section">
          <Annotated
            show={showAnnotations}
            patternId="5.3"
            patternName="Tool Usage Indicators"
            description="Clear indication of which MCP tool/integration was called."
            placement="top-right"
          >
            <div className="td-activity-tool-card">
              <div className="td-activity-tool-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="td-activity-tool-info">
                <span className="td-activity-tool-name">{data.mcpTool.name}</span>
                <span className="td-activity-tool-meta">
                  <span className="td-activity-tool-type">{data.mcpTool.type}</span>
                  <span className="td-activity-separator">·</span>
                  <span className="td-activity-tool-version">v{data.mcpTool.version}</span>
                </span>
              </div>
              <span className="td-activity-plan-step">Step {data.planStep}</span>
            </div>
          </Annotated>
        </div>

        {/* Input Section */}
        <div className="td-activity-section">
          <button
            className={`td-activity-section-header${expandedSections.input ? ' td-activity-section-header--open' : ''}`}
            onClick={() => toggleSection('input')}
          >
            <span className="td-activity-section-title">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9 6H3M3 6l2.5-2.5M3 6l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Input
            </span>
            <ChevronIcon isOpen={expandedSections.input} />
          </button>
          {expandedSections.input && (
            <div className="td-activity-section-content">
              <pre className="td-activity-code">{data.input}</pre>
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="td-activity-section">
          <button
            className={`td-activity-section-header${expandedSections.output ? ' td-activity-section-header--open' : ''}`}
            onClick={() => toggleSection('output')}
          >
            <span className="td-activity-section-title">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6h6M9 6L6.5 3.5M9 6L6.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Output
            </span>
            <ChevronIcon isOpen={expandedSections.output} />
          </button>
          {expandedSections.output && (
            <div className="td-activity-section-content">
              <pre className="td-activity-code">{data.output}</pre>
            </div>
          )}
        </div>

        {/* Reasoning Section */}
        {data.reasoning && (
          <div className="td-activity-section">
            <button
              className={`td-activity-section-header${expandedSections.reasoning ? ' td-activity-section-header--open' : ''}`}
              onClick={() => toggleSection('reasoning')}
            >
              <span className="td-activity-section-title">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M6 4v2.5l1.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Reasoning
              </span>
              <ChevronIcon isOpen={expandedSections.reasoning} />
            </button>
            {expandedSections.reasoning && (
              <div className="td-activity-section-content">
                <pre className="td-activity-code td-activity-code--reasoning">{data.reasoning}</pre>
              </div>
            )}
          </div>
        )}

        {/* Metrics Footer */}
        <Annotated
          show={showAnnotations}
          patternId="5.3"
          patternName="Tool Usage Indicators"
          description="Detailed metrics for cost tracking and performance monitoring."
          placement="bottom-left"
        >
          <div className="td-activity-metrics">
            <div className="td-activity-metric">
              <span className="td-activity-metric-label">Tokens</span>
              <span className="td-activity-metric-value">
                {data.tokens.input.toLocaleString()} in / {data.tokens.output.toLocaleString()} out
              </span>
            </div>
            <div className="td-activity-metric">
              <span className="td-activity-metric-label">Duration</span>
              <span className="td-activity-metric-value">{data.duration}</span>
            </div>
            <div className="td-activity-metric">
              <span className="td-activity-metric-label">Cost</span>
              <span className="td-activity-metric-value">${data.cost.toFixed(3)}</span>
            </div>
            <div className="td-activity-metric">
              <span className="td-activity-metric-label">Status</span>
              <span className={`td-activity-metric-status td-activity-metric-status--${data.status}`}>
                {data.status === 'success' && (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Success
                  </>
                )}
                {data.status === 'failed' && (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    Failed
                  </>
                )}
                {data.status === 'running' && (
                  <>
                    <span className="td-activity-metric-spinner"></span>
                    Running
                  </>
                )}
              </span>
            </div>
          </div>
        </Annotated>
      </div>
    </div>
  );
}
