import React, { useState, useCallback, useMemo } from 'react';
import { AlertTriangle, AlertCircle, RotateCcw, Pause } from 'lucide-react';
import './FleetHealthDashboardDemo.css';

// Initial agent data
const initialAgents = [
  {
    id: 1,
    name: "Triage-Bot-Alpha",
    type: "Support Routing",
    status: "Healthy",
    statusCode: "healthy",
    metrics: { latency: "145ms", errors: "0.02%", cost: "$0.001" }
  },
  {
    id: 2,
    name: "Contract-Analyzer-v2",
    type: "Legal Analysis",
    status: "Degraded",
    statusCode: "degraded",
    reason: "High latency in Vector DB (eu-west)",
    metrics: { latency: "2.4s", errors: "4.5%", cost: "$0.12" }
  },
  {
    id: 3,
    name: "Outbound-Sales-Gen",
    type: "Marketing",
    status: "Healthy",
    statusCode: "healthy",
    metrics: { latency: "450ms", errors: "0.1%", cost: "$0.03" }
  },
  {
    id: 4,
    name: "Fraud-Guard-Europe",
    type: "Security",
    status: "Healthy",
    statusCode: "healthy",
    metrics: { latency: "80ms", errors: "0.00%", cost: "$0.005" }
  },
  {
    id: 5,
    name: "Code-Review-Assistant",
    type: "Engineering",
    status: "Healthy",
    statusCode: "healthy",
    metrics: { latency: "800ms", errors: "0.4%", cost: "$0.08" }
  },
  {
    id: 6,
    name: "Data-Sanitizer",
    type: "Compliance",
    status: "Critical",
    statusCode: "critical",
    reason: "PII Detection Service Unreachable",
    metrics: { latency: "5.1s", errors: "12.8%", cost: "$0.01" }
  }
];

// Generate fake logs based on agent status
function generateFakeLogs(agent) {
  const timestamps = ['10:42:01', '10:42:05', '10:42:12', '10:42:18'];

  return timestamps.map((time, index) => {
    if (agent.statusCode === 'healthy') {
      return {
        id: index,
        type: 'info',
        text: `[INFO] ${time} - Processing request ID-${Math.floor(Math.random() * 1000)} - Success`
      };
    } else if (agent.statusCode === 'degraded') {
      return {
        id: index,
        type: 'warn',
        text: `[WARN] ${time} - Latency spike detected (2400ms) - Vector DB slow response`
      };
    } else {
      return {
        id: index,
        type: 'error',
        text: `[ERR] ${time} - Authentication Failure - Token expired`
      };
    }
  });
}

// Agent Row component
function AgentRow({ agent, isActive, onClick }) {
  const statusModifier = agent.statusCode === 'degraded'
    ? 'degraded'
    : agent.statusCode === 'critical'
      ? 'critical'
      : 'healthy';

  return (
    <div
      className={`fhd-agent-row ${isActive ? 'fhd-agent-row--active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={isActive}
    >
      <div className="fhd-agent-row__info">
        <span className="fhd-agent-row__name">{agent.name}</span>
        <span className="fhd-agent-row__type">{agent.type}</span>
      </div>

      <div className="fhd-agent-row__context">
        {agent.statusCode === 'degraded' && (
          <span className="fhd-alert-explanation fhd-alert-explanation--warning">
            <AlertTriangle className="fhd-alert-explanation__icon" />
            {agent.reason}
          </span>
        )}
        {agent.statusCode === 'critical' && (
          <span className="fhd-alert-explanation fhd-alert-explanation--critical">
            <AlertCircle className="fhd-alert-explanation__icon" />
            {agent.reason}
          </span>
        )}
      </div>

      <div className="fhd-agent-row__metrics">
        <div className="fhd-metric-item">
          <span className="fhd-metric-item__label">P95</span>
          <span className="fhd-metric-item__value">{agent.metrics.latency}</span>
        </div>
        <div className="fhd-metric-item">
          <span className="fhd-metric-item__label">Errors</span>
          <span className={`fhd-metric-item__value ${agent.statusCode !== 'healthy' ? 'fhd-metric-item__value--trend-down' : ''}`}>
            {agent.metrics.errors}
          </span>
        </div>
      </div>

      <div className="fhd-agent-row__status">
        <span className={`fhd-status-badge fhd-status-badge--${statusModifier}`}>
          {agent.status}
        </span>
      </div>
    </div>
  );
}

// Detail Panel component
function DetailPanel({ agent, onClose }) {
  const logs = useMemo(() => agent ? generateFakeLogs(agent) : [], [agent]);

  const handleEmergencyPause = useCallback(() => {
    alert('Demo: Pause signal sent to orchestration layer.');
  }, []);

  if (!agent) return null;

  return (
    <aside className="fhd-panel fhd-panel--open" aria-label="Agent details panel">
      <div className="fhd-panel__header">
        <h2 className="fhd-panel__title">{agent.name}</h2>
        <button
          className="fhd-panel__close-btn"
          onClick={onClose}
          aria-label="Close panel"
        >
          &times;
        </button>
      </div>
      <div className="fhd-panel__content">
        <div className="fhd-control-group">
          <h3 className="fhd-control-group__title">Live Telemetry</h3>
          <div className="fhd-log-stream" role="log" aria-live="polite">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`fhd-log-entry ${log.type === 'error' ? 'fhd-log-entry--error' : ''} ${log.type === 'warn' ? 'fhd-log-entry--warn' : ''}`}
              >
                {log.text}
              </div>
            ))}
          </div>
        </div>

        <div className="fhd-control-group">
          <h3 className="fhd-control-group__title">Governance Controls</h3>
          <button className="fhd-control-btn">
            <RotateCcw className="fhd-control-btn__icon" />
            Rollback Version
          </button>
          <button
            className="fhd-control-btn fhd-control-btn--danger"
            onClick={handleEmergencyPause}
          >
            <Pause className="fhd-control-btn__icon" />
            Emergency Pause
          </button>
        </div>
      </div>
    </aside>
  );
}

export default function FleetHealthDashboardDemo() {
  const [agents, setAgents] = useState(initialAgents);
  const [selectedAgentId, setSelectedAgentId] = useState(null);

  // Sort agents: Critical > Degraded > Healthy
  const sortedAgents = useMemo(() => {
    const priority = { 'critical': 0, 'degraded': 1, 'healthy': 2 };
    return [...agents].sort((a, b) => priority[a.statusCode] - priority[b.statusCode]);
  }, [agents]);

  const selectedAgent = useMemo(() => {
    return agents.find(a => a.id === selectedAgentId) || null;
  }, [agents, selectedAgentId]);

  // Calculate fleet health
  const fleetHealth = useMemo(() => {
    const criticalCount = agents.filter(a => a.statusCode === 'critical').length;
    const degradedCount = agents.filter(a => a.statusCode === 'degraded').length;
    const healthyCount = agents.filter(a => a.statusCode === 'healthy').length;

    // Simple health score calculation
    const total = agents.length;
    const healthScore = Math.round(((healthyCount * 1 + degradedCount * 0.5) / total) * 100);

    let indicatorStatus = 'good';
    if (criticalCount > 0) {
      indicatorStatus = 'bad';
    } else if (degradedCount > 0) {
      indicatorStatus = 'warning';
    }

    let statusText = `${degradedCount + criticalCount} Agent${degradedCount + criticalCount !== 1 ? 's' : ''} Degraded`;
    if (criticalCount > 0 && degradedCount > 0) {
      statusText = `${criticalCount} Critical, ${degradedCount} Degraded`;
    } else if (criticalCount > 0) {
      statusText = `${criticalCount} Critical`;
    } else if (degradedCount === 0) {
      statusText = 'All Systems Operational';
    }

    return {
      score: healthScore,
      indicatorStatus,
      statusText,
      activeCount: agents.length
    };
  }, [agents]);

  const handleAgentClick = useCallback((agent) => {
    setSelectedAgentId(agent.id);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedAgentId(null);
  }, []);

  const handleReset = useCallback(() => {
    setAgents(initialAgents);
    setSelectedAgentId(null);
  }, []);

  return (
    <div className="fhd-showcase" role="region" aria-label="Fleet Health Dashboard demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="fhd-dashboard">
        {/* Dashboard Global Header */}
        <header className="fhd-dashboard__global-status">
          <div className="fhd-dashboard__health-score">
            <span
              className={`fhd-health-indicator fhd-health-indicator--${fleetHealth.indicatorStatus}`}
              aria-hidden="true"
            />
            <div>
              <h3 className="fhd-dashboard__title">Fleet Health: {fleetHealth.score}%</h3>
              <span className="fhd-dashboard__meta">
                {fleetHealth.statusText} &bull; {fleetHealth.activeCount} Active
              </span>
            </div>
          </div>
          <div className="fhd-dashboard__meta">
            Last updated: Just now
          </div>
        </header>

        {/* Main Content */}
        <div className="fhd-dashboard__content">
          {/* List Area */}
          <div className="fhd-dashboard__list-area">
            <div className="fhd-fleet-list" role="list">
              {sortedAgents.map((agent) => (
                <AgentRow
                  key={agent.id}
                  agent={agent}
                  isActive={selectedAgentId === agent.id}
                  onClick={() => handleAgentClick(agent)}
                />
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          {selectedAgent && (
            <DetailPanel
              agent={selectedAgent}
              onClose={handleClosePanel}
            />
          )}
        </div>
      </div>
    </div>
  );
}
