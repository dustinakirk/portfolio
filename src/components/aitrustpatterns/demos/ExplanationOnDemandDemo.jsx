import React, { useState, useCallback } from 'react';
import { User, Bot } from 'lucide-react';
import './ExplanationOnDemandDemo.css';

export default function ExplanationOnDemandDemo() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className="eod-showcase" role="region" aria-label="Explanation-on-Demand demo">
      <header className="eod-showcase__header">
        <div className="eod-showcase__header-content">
          <h2 className="eod-showcase__title">Use Case: Task Delegation Agent</h2>
          <p className="eod-showcase__description">
            The user asks the AI to assign a ticket. The AI makes a decision, but provides an optional &quot;Why?&quot; affordance to reveal the reasoning signals (Skills, Load, Context).
          </p>
        </div>
        <button className="eod-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="eod-app-view">
        {/* Chat Interface */}
        <div className="eod-chat-interface">
          <div className="eod-chat-interface__messages">
            {/* User Message */}
            <div className="eod-message eod-message--user">
              <div className="eod-message__avatar eod-message__avatar--user">
                <User size={16} />
              </div>
              <div className="eod-message__content">
                <span className="eod-message__name">Alex Chen</span>
                <div className="eod-message__bubble eod-message__bubble--user">
                  Who should take ticket P-402 (Database Migration)?
                </div>
              </div>
            </div>

            {/* Agent Response with Embedded Pattern */}
            <div className="eod-message eod-message--agent">
              <div className="eod-message__avatar eod-message__avatar--agent">
                <Bot size={16} />
              </div>
              <div className="eod-message__content">
                <span className="eod-message__name">PM Copilot</span>

              {/* The Recommendation Card */}
              <div className="eod-suggestion-card">
                <div className="eod-suggestion-card__header">
                  <span className="eod-suggestion-card__header-icon">✦</span>
                  Recommendation
                </div>

                <div className="eod-suggestion-card__body">
                  <p className="eod-suggestion-card__text">
                    I recommend assigning <span className="eod-suggestion-card__highlight">Sarah Jenkins</span> to this ticket.
                  </p>

                  <div className="eod-suggestion-card__footer">
                    <button className="eod-suggestion-card__btn-primary">
                      Assign Sarah
                    </button>

                    {/* THE UX PATTERN: Explanation-on-Demand Trigger */}
                    <button
                      className="eod-explanation-trigger"
                      onClick={openDrawer}
                      aria-expanded={isDrawerOpen}
                      aria-controls="eod-why-drawer"
                    >
                      <span className="eod-explanation-trigger__icon">?</span>
                      Why her?
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE UX PATTERN: Reasoning Drawer (The "Demand" content) */}
        <aside
          id="eod-why-drawer"
          className={`eod-reasoning-drawer ${isDrawerOpen ? 'eod-reasoning-drawer--open' : ''}`}
        >
          <div className="eod-reasoning-drawer__header">
            <div className="eod-reasoning-drawer__title">
              <span className="eod-reasoning-drawer__title-icon">✦</span>
              Reasoning
            </div>
            <button
              className="eod-reasoning-drawer__close"
              onClick={closeDrawer}
              aria-label="Close explanation"
            >
              ×
            </button>
          </div>

          <div className="eod-reasoning-drawer__content">
            {/* Layer 1: Natural Language Summary */}
            <div className="eod-explanation__summary">
              Sarah is the best fit because she has extensive PostgreSQL experience and successfully delivered the related API migration (Task P-309) last sprint.
            </div>

            {/* Layer 2: Detailed Signals (Visualized) */}
            <div className="eod-explanation__section-title">Key Signals</div>
            <ul className="eod-signal-list">
              <li className="eod-signal-item">
                <div className="eod-signal-item__label">
                  <span>Technical Context Match</span>
                  <span className="eod-signal-item__value">High (92%)</span>
                </div>
                <div className="eod-signal-item__bar-bg">
                  <div className="eod-signal-item__bar-fill eod-signal-item__bar-fill--high"></div>
                </div>
              </li>

              <li className="eod-signal-item">
                <div className="eod-signal-item__label">
                  <span>Current Sprint Capacity</span>
                  <span className="eod-signal-item__value">Available</span>
                </div>
                <div className="eod-signal-item__bar-bg">
                  <div className="eod-signal-item__bar-fill eod-signal-item__bar-fill--med"></div>
                </div>
              </li>

              <li className="eod-signal-item">
                <div className="eod-signal-item__label">
                  <span>Recent Code Familiarity</span>
                  <span className="eod-signal-item__value">Very High</span>
                </div>
                <div className="eod-signal-item__bar-bg">
                  <div className="eod-signal-item__bar-fill eod-signal-item__bar-fill--high"></div>
                </div>
              </li>
            </ul>

            {/* Layer 3: Meta/Alternatives */}
            <div className="eod-explanation__meta">
              Based on commit history and Jira velocity from last 90 days.
            </div>

            <div className="eod-explanation__footer">
              <button className="eod-btn-link">Compare with other developers</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
