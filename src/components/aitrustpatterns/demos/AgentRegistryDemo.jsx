import React, { useState, useCallback, useMemo } from 'react';
import './AgentRegistryDemo.css';

// Agent data model
const agentsData = [
  {
    id: 'agt_001',
    name: 'Expense Audit Agent',
    description: 'Analyzes expense reports for policy violations and flags suspicious patterns.',
    environment: 'Production',
    risk: 'Medium',
    status: 'Active',
    owner: 'Finance Ops',
    tools: [
      { name: 'read_ledger', desc: 'Read-only access to transaction history.', access: 'READ' },
      { name: 'flag_transaction', desc: 'Mark a transaction ID for human review.', access: 'WRITE' },
      { name: 'get_policy_doc', desc: 'Retrieve corporate expense policy text.', access: 'READ' }
    ],
    stats: { requests: '12.4k', accuracy: '96%' }
  },
  {
    id: 'agt_002',
    name: 'GDPR Deletion Bot',
    description: 'Automates user data deletion requests across 14 subsystems.',
    environment: 'Production',
    risk: 'High',
    status: 'Active',
    owner: 'Security Team',
    tools: [
      { name: 'delete_user_row', desc: 'Hard delete user record from database.', access: 'ADMIN' }
    ],
    stats: { requests: '150', accuracy: '100%' }
  },
  {
    id: 'agt_003',
    name: 'SQL Query Gen',
    description: 'Assists analysts in writing SQL queries for BI dashboard.',
    environment: 'Staging',
    risk: 'Low',
    status: 'Testing',
    owner: 'Data Eng',
    tools: [],
    stats: { requests: '400', accuracy: '85%' }
  },
  {
    id: 'agt_004',
    name: 'Support Triage L1',
    description: 'Categorizes incoming tickets and suggests help articles.',
    environment: 'Dev',
    risk: 'Low',
    status: 'Draft',
    owner: 'Support',
    tools: [],
    stats: { requests: '0', accuracy: 'N/A' }
  }
];

// Badge component
function Badge({ type, value }) {
  let className = 'ard-badge ';

  if (type === 'risk') {
    if (value === 'High') className += 'ard-badge--high';
    else if (value === 'Medium') className += 'ard-badge--medium';
    else className += 'ard-badge--low';
  } else if (type === 'env') {
    if (value === 'Production') className += 'ard-badge--prod';
    else if (value === 'Staging') className += 'ard-badge--staging';
    else className += 'ard-badge--dev';
  }

  return <span className={className}>{value}</span>;
}

// Profile Panel component
function ProfilePanel({ agent, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!agent) return null;

  return (
    <>
      <div className="ard-profile-header">
        <div className="ard-profile-header__top">
          <h3 className="ard-profile-header__title">{agent.name}</h3>
          <button
            className="ard-profile-close-btn"
            onClick={onClose}
            aria-label="Close profile panel"
          >
            &times;
          </button>
        </div>
        <div className="ard-profile-badges">
          <Badge type="env" value={agent.environment} />
          <Badge type="risk" value={agent.risk} />
        </div>
        <div className="ard-profile-meta-grid">
          <div>
            <div className="ard-meta-item__label">Owner</div>
            <div className="ard-meta-item__value">{agent.owner}</div>
          </div>
          <div>
            <div className="ard-meta-item__label">ID</div>
            <div className="ard-meta-item__value ard-meta-item__value--mono">{agent.id}</div>
          </div>
        </div>
      </div>

      <div className="ard-profile-tabs">
        <button
          className={`ard-tab-btn ${activeTab === 'overview' ? 'ard-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview & Tools
        </button>
        <button
          className={`ard-tab-btn ${activeTab === 'history' ? 'ard-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button
          className={`ard-tab-btn ${activeTab === 'governance' ? 'ard-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('governance')}
        >
          Governance
        </button>
      </div>

      <div className="ard-profile-content">
        {activeTab === 'overview' && (
          <>
            <h4 className="ard-section-title">Description</h4>
            <p className="ard-section-description">{agent.description}</p>

            <h4 className="ard-section-title">Tools & Permissions</h4>
            {agent.tools.length > 0 ? (
              agent.tools.map((tool, index) => (
                <div className="ard-tool-card" key={index}>
                  <div className="ard-tool-card__header">
                    <span>{tool.name}</span>
                    <span className="ard-tool-card__access">{tool.access}</span>
                  </div>
                  <div className="ard-tool-card__desc">{tool.desc}</div>
                </div>
              ))
            ) : (
              <div className="ard-no-tools">No external tools configured.</div>
            )}

            <div className="ard-sandbox-cta">
              <h4 className="ard-sandbox-cta__title">Test in Sandbox</h4>
              <p className="ard-sandbox-cta__desc">Verify behavior before promoting to Production.</p>
              <button className="ard-btn ard-btn--secondary">Launch Chat Sandbox</button>
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <>
            <h4 className="ard-section-title">Change History</h4>
            <p className="ard-section-description">
              View version history, configuration changes, and deployment logs for this agent.
            </p>
            <div className="ard-no-tools">History data would appear here in a production system.</div>
          </>
        )}

        {activeTab === 'governance' && (
          <>
            <h4 className="ard-section-title">Governance Controls</h4>
            <p className="ard-section-description">
              Manage approval workflows, access controls, and compliance settings.
            </p>
            <div className="ard-no-tools">Governance controls would appear here in a production system.</div>
          </>
        )}
      </div>
    </>
  );
}

export default function AgentRegistryDemo() {
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [envFilter, setEnvFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');

  // Reset demo to initial state
  const handleReset = useCallback(() => {
    setSelectedAgentId(null);
    setSearchTerm('');
    setEnvFilter('all');
    setRiskFilter('all');
  }, []);

  // Open agent profile
  const openProfile = useCallback((agentId) => {
    setSelectedAgentId(agentId);
  }, []);

  // Close profile panel
  const closeProfile = useCallback(() => {
    setSelectedAgentId(null);
  }, []);

  // Filter agents based on search and filters
  const filteredAgents = useMemo(() => {
    return agentsData.filter(agent => {
      const matchesSearch = searchTerm === '' ||
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesEnv = envFilter === 'all' || agent.environment === envFilter;
      const matchesRisk = riskFilter === 'all' || agent.risk === riskFilter;

      return matchesSearch && matchesEnv && matchesRisk;
    });
  }, [searchTerm, envFilter, riskFilter]);

  // Get selected agent
  const selectedAgent = useMemo(() => {
    return agentsData.find(a => a.id === selectedAgentId) || null;
  }, [selectedAgentId]);

  return (
    <div className="ard-showcase" role="region" aria-label="Agent Registry demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="ard-registry">
        {/* Registry Header */}
        <header className="ard-registry__header">
          <h3 className="ard-registry__title">AI Agents</h3>
          <div className="ard-registry__actions">
            <button className="ard-btn ard-btn--secondary">Manage Templates</button>
            <button className="ard-btn ard-btn--primary">+ New Agent</button>
          </div>
        </header>

        {/* Toolbar */}
        <div className="ard-registry__toolbar">
          <input
            type="text"
            className="ard-search-input"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="ard-filter-select"
            value={envFilter}
            onChange={(e) => setEnvFilter(e.target.value)}
          >
            <option value="all">All Environments</option>
            <option value="Production">Production</option>
            <option value="Staging">Staging</option>
            <option value="Dev">Development</option>
          </select>
          <select
            className="ard-filter-select"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
          >
            <option value="all">All Risks</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Agent Table */}
        <div className="ard-registry__list">
          <table className="ard-agent-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Agent Name</th>
                <th>Environment</th>
                <th>Risk Level</th>
                <th>Status</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map(agent => (
                <tr
                  key={agent.id}
                  className="ard-agent-row"
                  onClick={() => openProfile(agent.id)}
                >
                  <td>
                    <div className="ard-agent-info">
                      <span className="ard-agent-info__name">{agent.name}</span>
                      <span className="ard-agent-info__desc">{agent.description}</span>
                    </div>
                  </td>
                  <td><Badge type="env" value={agent.environment} /></td>
                  <td><Badge type="risk" value={agent.risk} /></td>
                  <td>{agent.status}</td>
                  <td>{agent.owner}</td>
                </tr>
              ))}
              {filteredAgents.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', color: '#64748b', padding: '40px' }}>
                    No agents match your filters. Try adjusting your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Profile Panel (Slide-over) */}
        <aside
          className={`ard-profile-panel ${selectedAgentId ? 'ard-profile-panel--open' : ''}`}
          aria-hidden={!selectedAgentId}
        >
          <ProfilePanel agent={selectedAgent} onClose={closeProfile} />
        </aside>
      </div>
    </div>
  );
}
