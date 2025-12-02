import React, { useState } from 'react';
import Annotated from '../Annotated';
import { AGENT_PROFILE, DELEGATION_MODES } from '../../data/mockData';

export default function Slide1Onboarding({ showAnnotations = true }) {
  const [delegationMode, setDelegationMode] = useState('copilot');
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="td-slide td-slide--onboarding">
      {/* Welcome Modal */}
      <div className="td-welcome-modal">
        <div className="td-welcome-header">
          <div className="td-agent-avatar td-agent-avatar--large">
            {AGENT_PROFILE.avatar}
          </div>
          <div className="td-welcome-intro">
            <Annotated
              show={showAnnotations}
              patternId="1.1"
              patternName="Agent Identity & Role Contract"
              description="Clear display of who this agent is, what it can do, and what it cannot do."
              placement="top-right"
              top={-10}
              left={-10}
            >
              <h2 className="td-welcome-title">Meet {AGENT_PROFILE.name}</h2>
            </Annotated>
            <p className="td-welcome-subtitle">{AGENT_PROFILE.role}</p>
          </div>
        </div>

        {/* Agent Card */}
        <div className="td-agent-card">
          <div className="td-agent-card-section">
            <h3 className="td-agent-card-heading">Trusted for</h3>
            <ul className="td-agent-list td-agent-list--positive">
              {AGENT_PROFILE.trustedFor.map((item, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="var(--td-success)" strokeWidth="1.5"/>
                    <path d="M4 7l2 2 4-4" stroke="var(--td-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="td-agent-card-section">
            <h3 className="td-agent-card-heading">Will not do</h3>
            <ul className="td-agent-list td-agent-list--negative">
              {AGENT_PROFILE.willNotDo.map((item, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="var(--td-error)" strokeWidth="1.5"/>
                    <path d="M5 5l4 4M9 5l-4 4" stroke="var(--td-error)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delegation Mode Selector */}
        <div className="td-delegation-selector">
          <Annotated
            show={showAnnotations}
            patternId="1.2"
            patternName="Delegation Modes"
            description="Toggle between Advisor, Co-Pilot, and Autopilot modes to control agent autonomy."
            top={-10}
            left={-10}
          >
            <label className="td-delegation-label">Choose how I work with you:</label>
          </Annotated>
          <div className="td-delegation-options">
            {DELEGATION_MODES.map((mode) => (
              <button
                key={mode.id}
                className={`td-delegation-option ${delegationMode === mode.id ? 'td-delegation-option--active' : ''}`}
                onClick={() => setDelegationMode(mode.id)}
              >
                <span className="td-delegation-option-label">{mode.label}</span>
                <span className="td-delegation-option-desc">{mode.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Capability Chips */}
        <div className="td-capabilities">
          <Annotated
            show={showAnnotations}
            patternId="2.2"
            patternName="Wayfinders"
            description="Capability chips help users understand what the agent can do."
            placement="top-left"
            top={-10}
            left={-10}
          >
            <label className="td-capabilities-label">I can help you:</label>
          </Annotated>
          <div className="td-chip-group">
            {AGENT_PROFILE.capabilities.slice(0, showMore ? undefined : 3).map((cap, i) => (
              <span key={i} className="td-chip">{cap}</span>
            ))}
            {!showMore && AGENT_PROFILE.capabilities.length > 3 && (
                <button
                  className="td-chip td-chip--more"
                  onClick={() => setShowMore(true)}
                >
                  +{AGENT_PROFILE.capabilities.length - 3} more
                </button>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="td-welcome-actions">
          <button className="td-button td-button--primary">
            Start Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
