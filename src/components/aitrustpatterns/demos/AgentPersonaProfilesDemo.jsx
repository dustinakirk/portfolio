import React, { useState, useCallback } from 'react';
import './AgentPersonaProfilesDemo.css';

// Agent data
const initialAgents = [
  {
    id: 'agent_1',
    name: 'Legal Briefing Agent',
    role: 'Summarizer',
    mission: 'You are a strict summarizer. You review legal documents and extract key dates, liabilities, and parties. You never offer legal advice. If a clause is ambiguous, flag it.',
    icon: 'file-text',
    risk: 'low',
    tone: 'Neutral & Objective',
    version: 'v2.1',
    status: 'Live',
    capabilities: { web: false, kb: true, write: false }
  },
  {
    id: 'agent_2',
    name: 'Contract Drafter',
    role: 'Editor',
    mission: 'You assist lawyers in drafting clauses. You rely on the standard company playbook. You prefer standard boilerplate over custom language.',
    icon: 'pen',
    risk: 'medium',
    tone: 'Concise & Technical',
    version: 'v4.0',
    status: 'Live',
    capabilities: { web: false, kb: true, write: true }
  },
  {
    id: 'agent_3',
    name: 'Negotiation Strategist',
    role: 'Creative Partner',
    mission: 'You are a creative brainstorming partner. You suggest aggressive and novel negotiation tactics. You may speculate on the counter-party motives.',
    icon: 'brain',
    risk: 'high',
    tone: 'Creative & Exploratory',
    version: 'v0.9',
    status: 'Draft',
    capabilities: { web: true, kb: true, write: false }
  }
];

const riskOptions = [
  {
    id: 'low',
    label: 'Conservative',
    desc: 'Strict adherence to facts. No speculation. Best for compliance.'
  },
  {
    id: 'medium',
    label: 'Balanced',
    desc: 'Can infer context but flags assumptions. Standard for drafting.'
  },
  {
    id: 'high',
    label: 'Experimental',
    desc: 'Prioritizes creativity over accuracy. May hallucinate.'
  }
];

const toneOptions = [
  'Neutral & Objective',
  'Empathetic & Supportive',
  'Concise & Technical',
  'Creative & Exploratory'
];

// Icon component for simplicity (using basic SVG paths)
function Icon({ name, size = 20 }) {
  const icons = {
    'file-text': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    'pen': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    'brain': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
      </svg>
    ),
    'plus': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    'git-commit': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="1.05" y1="12" x2="7" y2="12"></line>
        <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
      </svg>
    ),
    'users': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    'robot': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
      </svg>
    )
  };

  return icons[name] || null;
}

// Toggle Switch component
function ToggleSwitch({ checked, onChange, id }) {
  return (
    <label className="appd-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <span className="appd-switch__slider"></span>
    </label>
  );
}

export default function AgentPersonaProfilesDemo() {
  const [agents, setAgents] = useState(initialAgents);
  const [currentAgentId, setCurrentAgentId] = useState('agent_1');
  const [saveStatus, setSaveStatus] = useState(null);

  const currentAgent = agents.find(a => a.id === currentAgentId);

  const updateAgent = useCallback((field, value) => {
    setAgents(prev => prev.map(agent =>
      agent.id === currentAgentId
        ? { ...agent, [field]: value }
        : agent
    ));
  }, [currentAgentId]);

  const updateCapability = useCallback((capKey, value) => {
    setAgents(prev => prev.map(agent =>
      agent.id === currentAgentId
        ? { ...agent, capabilities: { ...agent.capabilities, [capKey]: value } }
        : agent
    ));
  }, [currentAgentId]);

  const handleSave = useCallback(() => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(null), 1500);
    }, 500);
  }, []);

  const handleReset = useCallback(() => {
    setAgents(initialAgents);
    setCurrentAgentId('agent_1');
    setSaveStatus(null);
  }, []);

  const getRiskBadgeClass = (riskId) => {
    switch(riskId) {
      case 'low': return 'appd-risk-option__badge--low';
      case 'medium': return 'appd-risk-option__badge--medium';
      case 'high': return 'appd-risk-option__badge--high';
      default: return '';
    }
  };

  return (
    <div className="appd-showcase">
      <header className="appd-showcase__header">
        <div className="appd-showcase__header-content">
          <h2 className="appd-showcase__title">Agent Persona Configuration</h2>
          <p className="appd-showcase__description">
            The administrative view for the Agent Persona Pattern. This is where the governed object is defined, including its capabilities, risk posture, and specific tone instructions.
          </p>
        </div>
        <button className="appd-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="appd-layout">
        {/* Sidebar: Agent List */}
        <aside className="appd-sidebar">
          <div className="appd-sidebar__header">
            <span>Personas</span>
            <button className="appd-sidebar__add-btn" title="Add New Persona">
              <Icon name="plus" size={18} />
            </button>
          </div>
          <ul className="appd-agent-list">
            {agents.map(agent => (
              <li
                key={agent.id}
                className={`appd-agent-list__item ${agent.id === currentAgentId ? 'appd-agent-list__item--active' : ''}`}
                onClick={() => setCurrentAgentId(agent.id)}
              >
                <div className="appd-agent-list__icon">
                  <Icon name={agent.icon} size={16} />
                </div>
                <div className="appd-agent-list__details">
                  <span className="appd-agent-list__name">{agent.name}</span>
                  <span className="appd-agent-list__role">{agent.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Form Area */}
        <main className="appd-main">
          {/* Toolbar */}
          <div className="appd-toolbar">
            <div className="appd-toolbar__status">
              <span className="appd-governance-pill">
                <Icon name="git-commit" size={14} />
                {currentAgent.version}
              </span>
              <span className="appd-governance-pill">
                <Icon name="users" size={14} />
                Team: Legal Ops
              </span>
              <span className={`appd-status-badge appd-status-badge--${currentAgent.status.toLowerCase()}`}>
                {currentAgent.status}
              </span>
            </div>
            <button
              className={`appd-btn-primary ${saveStatus ? 'appd-btn-primary--' + saveStatus : ''}`}
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
            >
              {saveStatus === 'saved' ? 'Saved!' : saveStatus === 'saving' ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>

          {/* Form */}
          <div className="appd-form">
            {/* Section 1: Identity */}
            <section className="appd-form-section">
              <div className="appd-form-section__header">
                <h3 className="appd-form-section__title">Identity & Role</h3>
                <p className="appd-form-section__desc">Define how the agent appears to users and its core purpose.</p>
              </div>

              <div className="appd-form-row">
                <div className="appd-form-col appd-form-col--avatar">
                  <label className="appd-form-label">Avatar</label>
                  <div className="appd-avatar-picker">
                    <Icon name={currentAgent.icon} size={24} />
                  </div>
                </div>
                <div className="appd-form-col appd-form-col--flex">
                  <div className="appd-form-group">
                    <label className="appd-form-label">Persona Name</label>
                    <input
                      type="text"
                      className="appd-form-input"
                      value={currentAgent.name}
                      onChange={(e) => updateAgent('name', e.target.value)}
                      placeholder="e.g. Compliance Reviewer"
                    />
                  </div>
                </div>
              </div>

              <div className="appd-form-group">
                <label className="appd-form-label">Role Definition</label>
                <input
                  type="text"
                  className="appd-form-input"
                  value={currentAgent.role}
                  onChange={(e) => updateAgent('role', e.target.value)}
                  placeholder="Short description shown in gallery (e.g. Summarizes contracts)"
                />
              </div>

              <div className="appd-form-group">
                <label className="appd-form-label">Mission Statement (System Prompt)</label>
                <textarea
                  className="appd-form-textarea"
                  value={currentAgent.mission}
                  onChange={(e) => updateAgent('mission', e.target.value)}
                  placeholder="You are a helpful assistant who..."
                />
              </div>
            </section>

            {/* Section 2: Risk & Behavior */}
            <section className="appd-form-section">
              <div className="appd-form-section__header">
                <h3 className="appd-form-section__title">Risk Posture & Tone</h3>
                <p className="appd-form-section__desc">Controls the agent&apos;s creativity, hallucination threshold, and safeguards.</p>
              </div>

              <label className="appd-form-label">Risk Tolerance</label>
              <div className="appd-risk-selector">
                {riskOptions.map(risk => (
                  <label
                    key={risk.id}
                    className={`appd-risk-option ${currentAgent.risk === risk.id ? 'appd-risk-option--selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="risk"
                      value={risk.id}
                      checked={currentAgent.risk === risk.id}
                      onChange={() => updateAgent('risk', risk.id)}
                    />
                    <span className={`appd-risk-option__badge ${getRiskBadgeClass(risk.id)}`}>
                      {risk.id} Risk
                    </span>
                    <span className="appd-risk-option__title">{risk.label}</span>
                    <span className="appd-risk-option__desc">{risk.desc}</span>
                  </label>
                ))}
              </div>

              <div className="appd-form-group appd-form-group--mt">
                <label className="appd-form-label">Tone Style</label>
                <select
                  className="appd-form-select"
                  value={currentAgent.tone}
                  onChange={(e) => updateAgent('tone', e.target.value)}
                >
                  {toneOptions.map(tone => (
                    <option key={tone} value={tone}>{tone}</option>
                  ))}
                </select>
              </div>
            </section>

            {/* Section 3: Capabilities */}
            <section className="appd-form-section appd-form-section--last">
              <div className="appd-form-section__header">
                <h3 className="appd-form-section__title">Capabilities & Tools</h3>
                <p className="appd-form-section__desc">Explicitly grant access to tools and data sources.</p>
              </div>

              <div className="appd-capability-list">
                <div className="appd-capability-item">
                  <div className="appd-capability-info">
                    <span className="appd-capability-name">Internet Access</span>
                    <span className="appd-capability-desc">Allow agent to search the live web for information.</span>
                  </div>
                  <ToggleSwitch
                    checked={currentAgent.capabilities.web}
                    onChange={(e) => updateCapability('web', e.target.checked)}
                    id="cap-web"
                  />
                </div>

                <div className="appd-capability-item">
                  <div className="appd-capability-info">
                    <span className="appd-capability-name">Internal Knowledge Base</span>
                    <span className="appd-capability-desc">Read-only access to company wiki and docs.</span>
                  </div>
                  <ToggleSwitch
                    checked={currentAgent.capabilities.kb}
                    onChange={(e) => updateCapability('kb', e.target.checked)}
                    id="cap-kb"
                  />
                </div>

                <div className="appd-capability-item">
                  <div className="appd-capability-info">
                    <span className="appd-capability-name">Execute Actions (Write)</span>
                    <span className="appd-capability-desc">Can modify records or send emails (Requires user approval).</span>
                  </div>
                  <ToggleSwitch
                    checked={currentAgent.capabilities.write}
                    onChange={(e) => updateCapability('write', e.target.checked)}
                    id="cap-write"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
