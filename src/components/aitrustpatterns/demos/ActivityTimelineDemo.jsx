import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ActivityTimelineDemo.css';

// SVG Icons for different actor types
const icons = {
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  agent: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  tool: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
};

// Replay icon for reset button
const ReplayIcon = () => (
  <svg className="atl-showcase__reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/>
    <path d="M3 3v9h9"/>
  </svg>
);

// Chevron icon for expand/collapse
const ChevronIcon = () => (
  <svg className="atl-audit-log__toggle-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// Event data for the demo
const eventSequence = [
  {
    id: 1,
    timestamp: "10:42:01",
    actorType: "user",
    actorName: "Sarah Chen (Admin)",
    action: "triggered investigation for IP",
    object: "192.168.1.55",
    description: "Manual request via Incident Response dashboard.",
    status: null,
    details: null,
    delay: 0
  },
  {
    id: 2,
    timestamp: "10:42:03",
    actorType: "agent",
    actorName: "SecOps Agent",
    action: "started plan",
    object: "Incident #442",
    description: "Analyzing request intent and formulating investigation steps: 1. Query Logs, 2. Check Reputation, 3. Recommend Action.",
    status: "success",
    details: null,
    delay: 800
  },
  {
    id: 3,
    timestamp: "10:42:05",
    actorType: "tool",
    actorName: "Log Explorer Tool",
    action: "queried",
    object: "auth_logs",
    description: "Searched for failed login attempts from target IP in the last 24 hours.",
    status: "success",
    details: {
      type: "Query",
      content: `SELECT count(*) as failures, user_id
FROM auth_events
WHERE src_ip = '192.168.1.55'
AND status = 'failed'
AND time > now() - 24h
GROUP BY user_id`
    },
    delay: 2000
  },
  {
    id: 4,
    timestamp: "10:42:08",
    actorType: "tool",
    actorName: "Reputation API",
    action: "checked",
    object: "ThreatIntel DB",
    description: "Cross-referenced IP against global blocklists. Found high confidence match for brute-force botnet.",
    status: "success",
    details: {
      type: "JSON Response",
      content: `{
  "ip": "192.168.1.55",
  "risk_score": 95,
  "category": "botnet_c2",
  "last_seen": "2023-10-27T10:41:00Z"
}`
    },
    delay: 3500
  },
  {
    id: 5,
    timestamp: "10:42:10",
    actorType: "agent",
    actorName: "SecOps Agent",
    action: "recommended action",
    object: "Block IP",
    description: "Based on 50+ failed logins and risk score of 95, an immediate block is recommended.",
    status: "running",
    details: null,
    delay: 5000
  }
];

// Individual Event Item component
function EventItem({ event, expandedDetails, onToggleDetails }) {
  const statusClass = event.status === 'running'
    ? 'atl-audit-log__badge--running'
    : event.status === 'failure'
      ? 'atl-audit-log__badge--failure'
      : 'atl-audit-log__badge--success';

  const statusText = event.status === 'running' ? 'Active' : event.status;
  const isExpanded = expandedDetails[event.id];

  return (
    <li className="atl-audit-log__item">
      <div className="atl-audit-log__meta">
        <span className="atl-audit-log__timestamp">{event.timestamp}</span>
      </div>
      <div className="atl-audit-log__visual">
        <div className={`atl-audit-log__icon atl-audit-log__icon--${event.actorType}`}>
          {icons[event.actorType]}
        </div>
      </div>
      <div className="atl-audit-log__content">
        <div className="atl-audit-log__header-row">
          <span className="atl-audit-log__actor-name">{event.actorName}</span>
          <span className="atl-audit-log__action">{event.action}</span>
          {event.object && (
            <span className="atl-audit-log__object">{event.object}</span>
          )}
          {event.status && (
            <span className={`atl-audit-log__badge ${statusClass}`}>
              {statusText}
            </span>
          )}
        </div>
        <p className="atl-audit-log__description">{event.description}</p>
        {event.details && (
          <>
            <button
              className="atl-audit-log__toggle-btn"
              onClick={() => onToggleDetails(event.id)}
              aria-expanded={isExpanded}
              aria-controls={`details-${event.id}`}
            >
              <ChevronIcon />
              View Data
            </button>
            <div
              id={`details-${event.id}`}
              className={`atl-audit-log__details ${isExpanded ? 'atl-audit-log__details--expanded' : ''}`}
            >
              <div className="atl-audit-log__details-header">
                <span>Input/Output Log</span>
                <span>{event.details.type}</span>
              </div>
              <pre className="atl-audit-log__code">{event.details.content}</pre>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default function ActivityTimelineDemo() {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [expandedDetails, setExpandedDetails] = useState({});
  const timeoutsRef = useRef([]);
  const isInitialLoadRef = useRef(true);

  // Clear all pending timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  // Start the animation sequence
  const startSimulation = useCallback(() => {
    clearAllTimeouts();
    setVisibleEvents([]);
    setExpandedDetails({});
    isInitialLoadRef.current = true;

    eventSequence.forEach((evt) => {
      const timeout = setTimeout(() => {
        setVisibleEvents(prev => [...prev, evt]);
      }, evt.delay);
      timeoutsRef.current.push(timeout);
    });
  }, [clearAllTimeouts]);

  // Initialize on mount
  useEffect(() => {
    startSimulation();
    return () => clearAllTimeouts();
  }, [startSimulation, clearAllTimeouts]);

  // Handle toggle of details panel
  const handleToggleDetails = useCallback((eventId) => {
    setExpandedDetails(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  }, []);

  // Handle reset/replay
  const handleReset = useCallback(() => {
    startSimulation();
  }, [startSimulation]);

  return (
    <div className="atl-showcase" role="region" aria-label="Activity Timeline demo">
      <header className="atl-showcase__header">
        <div className="atl-showcase__header-content">
          <h2 className="atl-showcase__title">Activity Timeline: Incident Investigation</h2>
          <p className="atl-showcase__description">
            This timeline demonstrates the &quot;Activity Timeline &amp; Audit Log&quot; pattern.
            It provides transparency into an AI agent&apos;s tool usage, decision-making steps,
            and outcomes during a security workflow.
          </p>
        </div>
        <button className="atl-showcase__reset-btn" onClick={handleReset}>
          <ReplayIcon />
          Replay
        </button>
      </header>

      <div className="atl-audit-log">
        <div className="atl-audit-log__timeline" aria-hidden="true" />
        <ul className="atl-audit-log__list" aria-label="Timeline events">
          {visibleEvents.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              expandedDetails={expandedDetails}
              onToggleDetails={handleToggleDetails}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
