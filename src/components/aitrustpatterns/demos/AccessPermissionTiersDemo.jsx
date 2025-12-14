import React, { useState, useCallback, useEffect, useRef } from 'react';
import './AccessPermissionTiersDemo.css';

// Tier definitions
const TIERS = {
  viewer: {
    label: 'Viewer',
    desc: 'Can read data and suggest changes.',
    capabilities: [
      { text: 'Read Analytics Data', allowed: true },
      { text: 'Read User Profiles', allowed: true },
      { text: 'Modify Dashboards', allowed: false },
      { text: 'Execute Workflows', allowed: false },
      { text: 'Delete Records', allowed: false },
    ],
  },
  editor: {
    label: 'Editor',
    desc: 'Can modify specific resources.',
    capabilities: [
      { text: 'Read Analytics Data', allowed: true },
      { text: 'Read User Profiles', allowed: true },
      { text: 'Modify Dashboards', allowed: true },
      { text: 'Execute Workflows', allowed: false },
      { text: 'Delete Records', allowed: false },
    ],
  },
  supervised: {
    label: 'Supervised Executor',
    desc: 'Can propose high-impact actions.',
    capabilities: [
      { text: 'Read Analytics Data', allowed: true },
      { text: 'Read User Profiles', allowed: true },
      { text: 'Modify Dashboards', allowed: true },
      { text: 'Execute Workflows', allowed: true, condition: 'Requires Approval' },
      { text: 'Delete Records', allowed: false },
    ],
  },
  executor: {
    label: 'Executor',
    desc: 'Can execute actions autonomously.',
    capabilities: [
      { text: 'Read Analytics Data', allowed: true },
      { text: 'Read User Profiles', allowed: true },
      { text: 'Modify Dashboards', allowed: true },
      { text: 'Execute Workflows', allowed: true },
      { text: 'Delete Records', allowed: true, condition: 'Audit Logged' },
    ],
  },
};

// Initial agent data
const INITIAL_AGENTS = [
  { id: 1, name: 'Data Analyst Bot', role: 'Business Intelligence', env: 'Production', tier: 'viewer', status: 'Active' },
  { id: 2, name: 'QA Stress Tester', role: 'DevOps', env: 'Staging', tier: 'executor', status: 'Active' },
  { id: 3, name: 'Patient Intake Assistant', role: 'Healthcare Ops', env: 'Production', tier: 'supervised', status: 'Active' },
  { id: 4, name: 'Email Outreach', role: 'Marketing', env: 'Production', tier: 'editor', status: 'Paused' },
  { id: 5, name: 'Migration Script', role: 'System Admin', env: 'Sandbox', tier: 'executor', status: 'Active' },
];

// Icon components
function CheckIcon() {
  return (
    <svg className="apt-matrix__icon apt-matrix__icon--check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="apt-matrix__icon apt-matrix__icon--cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="apt-matrix__icon apt-matrix__icon--lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ToastCheckIcon() {
  return (
    <svg className="apt-toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Permission Matrix Item
function MatrixItem({ capability }) {
  const { text, allowed, condition } = capability;

  let icon;
  let textClass = '';

  if (allowed) {
    if (condition) {
      icon = <LockIcon />;
    } else {
      icon = <CheckIcon />;
    }
  } else {
    icon = <CrossIcon />;
    textClass = 'apt-matrix__text--disabled';
  }

  return (
    <div className="apt-matrix__item">
      {icon}
      <span className={textClass}>
        {text}
        {condition && <span className="apt-matrix__condition"> ({condition})</span>}
      </span>
    </div>
  );
}

// Details Panel
function DetailsPanel({ agent, tierData }) {
  if (!agent) {
    return <div className="apt-panel__empty">Select an agent to view permissions</div>;
  }

  const tierClass = `apt-pill--${agent.tier}`;

  return (
    <>
      {/* Card 1: Agent Overview */}
      <div className="apt-card">
        <div className="apt-card__header">
          <h3 className="apt-card__title">Agent Overview</h3>
        </div>
        <ul className="apt-meta-list">
          <li className="apt-meta-list__item">
            <span className="apt-meta-list__key">ID</span>
            <span className="apt-meta-list__value">AGT-{agent.id}002</span>
          </li>
          <li className="apt-meta-list__item">
            <span className="apt-meta-list__key">Current Tier</span>
            <span className={`apt-pill ${tierClass}`}>{tierData.label}</span>
          </li>
          <li className="apt-meta-list__item">
            <span className="apt-meta-list__key">Environment</span>
            <span className="apt-meta-list__value">{agent.env}</span>
          </li>
        </ul>
      </div>

      {/* Card 2: Permissions Matrix */}
      <div className="apt-card">
        <div className="apt-card__header">
          <h3 className="apt-card__title">Effective Permissions</h3>
        </div>
        <p className="apt-tier-desc">{tierData.desc}</p>
        <div className="apt-matrix">
          {tierData.capabilities.map((cap, index) => (
            <MatrixItem key={index} capability={cap} />
          ))}
        </div>
      </div>

      {/* Contextual Info */}
      <div className="apt-footer-info">
        Audit log enabled for all write operations.
        <br />
        Last review: Dec 01, 2025 by System Admin.
      </div>
    </>
  );
}

export default function AccessPermissionTiersDemo() {
  const [agents, setAgents] = useState(JSON.parse(JSON.stringify(INITIAL_AGENTS)));
  const [selectedAgentId, setSelectedAgentId] = useState(INITIAL_AGENTS[0].id);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimeoutRef = useRef(null);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Show toast notification
  const showToast = useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }, []);

  // Handle agent selection
  const handleSelectAgent = useCallback((id) => {
    setSelectedAgentId(id);
  }, []);

  // Handle tier change
  const handleChangeTier = useCallback((id, newTier) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id ? { ...agent, tier: newTier } : agent
      )
    );

    const agent = agents.find((a) => a.id === id);
    if (agent) {
      showToast(`Updated ${agent.name} to ${TIERS[newTier].label}`);
    }
  }, [agents, showToast]);

  // Handle reset
  const handleReset = useCallback(() => {
    setAgents(JSON.parse(JSON.stringify(INITIAL_AGENTS)));
    setSelectedAgentId(INITIAL_AGENTS[0].id);
    showToast('Demo reset to initial state');
  }, [showToast]);

  // Get selected agent and tier data
  const selectedAgent = agents.find((a) => a.id === selectedAgentId);
  const selectedTierData = selectedAgent ? TIERS[selectedAgent.tier] : null;

  return (
    <div className="apt-showcase" role="region" aria-label="Access & Permission Tiers demo">
      {/* Header */}
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      {/* App Mockup */}
      <div className="apt-app">
        {/* Mock App Nav */}
        <nav className="apt-app__nav">
          <span className="apt-app__nav-breadcrumb">Settings / AI Governance /</span>
          <span className="apt-app__nav-title">Agent Fleet Management</span>
        </nav>

        <div className="apt-app__layout">
          {/* Left: Agent List */}
          <div className="apt-app__list-view">
            <table className="apt-table">
              <thead className="apt-table__head">
                <tr>
                  <th>Agent Name</th>
                  <th>Environment</th>
                  <th>Access Tier</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr
                    key={agent.id}
                    className={`apt-table__row ${selectedAgentId === agent.id ? 'apt-table__row--active' : ''}`}
                    onClick={() => handleSelectAgent(agent.id)}
                  >
                    <td className="apt-table__cell">
                      <div className="apt-agent-info">
                        <div className="apt-agent-info__icon">
                          <AgentIcon />
                        </div>
                        <div className="apt-agent-info__text">
                          <span className="apt-agent-info__name">{agent.name}</span>
                          <span className="apt-agent-info__role">{agent.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="apt-table__cell apt-table__cell--secondary">{agent.env}</td>
                    <td className="apt-table__cell">
                      <select
                        className="apt-select"
                        value={agent.tier}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleChangeTier(agent.id, e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {Object.keys(TIERS).map((key) => (
                          <option key={key} value={key}>
                            {TIERS[key].label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="apt-table__cell">
                      <span className={`apt-status ${agent.status === 'Active' ? 'apt-status--active' : 'apt-status--paused'}`}>
                        ● {agent.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Details Panel */}
          <div className="apt-app__panel">
            <DetailsPanel agent={selectedAgent} tierData={selectedTierData} />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`apt-toast ${toastVisible ? 'apt-toast--visible' : ''}`}>
        <ToastCheckIcon />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
