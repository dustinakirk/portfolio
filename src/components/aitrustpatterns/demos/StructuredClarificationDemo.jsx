import React, { useState } from 'react';
import './StructuredClarificationDemo.css';

export default function StructuredClarificationDemo() {
  const [demoState, setDemoState] = useState('initial'); // 'initial' | 'submitted' | 'cancelled'
  const [formValues, setFormValues] = useState({
    env: 'Staging',
    traffic: '10%',
    customTraffic: '',
    notifySlack: true,
    notifyEmail: false
  });

  const handleSubmit = () => {
    setDemoState('submitted');
  };

  const handleCancel = () => {
    setDemoState('cancelled');
  };

  const resetDemo = () => {
    setDemoState('initial');
    setFormValues({
      env: 'Staging',
      traffic: '10%',
      customTraffic: '',
      notifySlack: true,
      notifyEmail: false
    });
  };

  const handleEnvChange = (e) => {
    setFormValues(prev => ({ ...prev, env: e.target.value }));
  };

  const handleTrafficChange = (e) => {
    setFormValues(prev => ({ ...prev, traffic: e.target.value }));
  };

  const handleCustomTrafficChange = (e) => {
    setFormValues(prev => ({ ...prev, customTraffic: e.target.value }));
  };

  const handleNotifyChange = (field) => {
    setFormValues(prev => ({ ...prev, [field]: !prev[field] }));
  };

  // Get effective traffic value for display
  const getTrafficDisplay = () => {
    if (formValues.traffic === 'custom') {
      return formValues.customTraffic || 'Custom';
    }
    return formValues.traffic;
  };

  return (
    <div className="scd-demo">
      <div className="scd-demo__header">
        <div>
          <h2 className="scd-demo__title">Structured Clarification Prompts</h2>
          <p className="scd-demo__description">
            The agent pauses a high-risk workflow to gather specific inputs via a structured form inside the chat.
          </p>
        </div>
        <button className="scd-demo__reset-btn" onClick={resetDemo}>
          Reset Demo
        </button>
      </div>

      <div className="scd-chat">
        <div className="scd-chat__messages">
          {/* Message 1: User Request */}
          <div className="scd-message scd-message--user">
            <div className="scd-message__avatar">JD</div>
            <div className="scd-message__bubble">
              Promote the latest build of the <strong>payments-service</strong>.
            </div>
          </div>

          {/* Message 2: Agent Response with Pattern */}
          <div className="scd-message scd-message--agent">
            <div className="scd-message__avatar">
              <svg className="scd-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div className="scd-message__bubble">
              I can help with that. Before I execute the promotion pipeline, I need to confirm the safety parameters.

              {/* THE PATTERN: Structured Clarification Panel */}
              {demoState === 'initial' && (
                <div className="scd-panel">
                  <div className="scd-panel__header">
                    <h3 className="scd-panel__title">
                      <svg className="scd-icon--small" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Deployment Configuration
                    </h3>
                  </div>

                  <div className="scd-panel__body">
                    {/* Question 1: Target Environment */}
                    <div className="scd-item">
                      <label className="scd-item__label">Target Environment</label>
                      <span className="scd-item__desc">Production writes directly to the live database.</span>
                      <div className="scd-control-group">
                        <label className="scd-option">
                          <input
                            type="radio"
                            name="env"
                            value="Staging"
                            checked={formValues.env === 'Staging'}
                            onChange={handleEnvChange}
                          />
                          Staging (Safe)
                        </label>
                        <label className="scd-option">
                          <input
                            type="radio"
                            name="env"
                            value="Production"
                            checked={formValues.env === 'Production'}
                            onChange={handleEnvChange}
                          />
                          Production (High Risk)
                        </label>
                      </div>
                    </div>

                    {/* Question 2: Traffic Shift */}
                    <div className="scd-item">
                      <label className="scd-item__label">Traffic Shift</label>
                      <span className="scd-item__desc">Percentage of traffic to route to new version immediately.</span>
                      <div className="scd-control-group">
                        <label className="scd-option">
                          <input
                            type="radio"
                            name="traffic"
                            value="10%"
                            checked={formValues.traffic === '10%'}
                            onChange={handleTrafficChange}
                          />
                          10% (Canary)
                        </label>
                        <label className="scd-option">
                          <input
                            type="radio"
                            name="traffic"
                            value="100%"
                            checked={formValues.traffic === '100%'}
                            onChange={handleTrafficChange}
                          />
                          100% (Full Rollout)
                        </label>
                        <label className="scd-option">
                          <input
                            type="radio"
                            name="traffic"
                            value="custom"
                            checked={formValues.traffic === 'custom'}
                            onChange={handleTrafficChange}
                          />
                          Other / Custom...
                          {formValues.traffic === 'custom' && (
                            <input
                              type="text"
                              className="scd-option__custom-input"
                              placeholder="e.g. 50%"
                              value={formValues.customTraffic}
                              onChange={handleCustomTrafficChange}
                            />
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Question 3: Notify */}
                    <div className="scd-item">
                      <label className="scd-item__label">Notify</label>
                      <span className="scd-item__desc">Where should I post the deployment logs?</span>
                      <div className="scd-control-group">
                        <label className="scd-option">
                          <input
                            type="checkbox"
                            checked={formValues.notifySlack}
                            onChange={() => handleNotifyChange('notifySlack')}
                          />
                          Slack #dev-ops
                        </label>
                        <label className="scd-option">
                          <input
                            type="checkbox"
                            checked={formValues.notifyEmail}
                            onChange={() => handleNotifyChange('notifyEmail')}
                          />
                          Email Leadership
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="scd-panel__actions">
                    <button className="scd-btn scd-btn--secondary" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button className="scd-btn scd-btn--primary" onClick={handleSubmit}>
                      Confirm &amp; Deploy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submitted State: User confirmation + Agent success */}
          {demoState === 'submitted' && (
            <>
              <div className="scd-message scd-message--user">
                <div className="scd-message__avatar">JD</div>
                <div className="scd-message__bubble">
                  Confirmed. Target: {formValues.env}, Traffic: {getTrafficDisplay()}.
                </div>
              </div>
              <div className="scd-message scd-message--agent">
                <div className="scd-message__avatar">
                  <svg className="scd-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="scd-message__bubble">
                  <strong>Deployment Initiated</strong><br />
                  I&apos;ve queued the promotion pipeline for <em>payments-service</em> to <strong>{formValues.env}</strong> with a <strong>{getTrafficDisplay()}</strong> traffic shift. I will notify the selected channels upon completion.
                </div>
              </div>
            </>
          )}

          {/* Cancelled State: Agent cancel message */}
          {demoState === 'cancelled' && (
            <div className="scd-message scd-message--agent">
              <div className="scd-message__avatar">
                <svg className="scd-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div className="scd-message__bubble">
                Action cancelled. No changes were made to the infrastructure.
              </div>
            </div>
          )}
        </div>

        {/* Input Area Footer */}
        <div className="scd-input">
          <div className="scd-input__wrapper">
            <input
              type="text"
              className="scd-input__field"
              placeholder="Reply to DevOps Agent..."
              disabled
            />
            <button className="scd-input__btn" disabled aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
