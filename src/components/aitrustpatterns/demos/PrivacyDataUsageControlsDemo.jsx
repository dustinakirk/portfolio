import React, { useState, useCallback } from 'react';
import './PrivacyDataUsageControlsDemo.css';

export default function PrivacyDataUsageControlsDemo() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isIncognito, setIsIncognito] = useState(false);
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [trainingEnabled, setTrainingEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  const handleReset = useCallback(() => {
    setIsSettingsOpen(false);
    setIsIncognito(false);
    setMemoryEnabled(true);
    setTrainingEnabled(false);
    setAnalyticsEnabled(true);
  }, []);

  const toggleSettings = useCallback(() => {
    setIsSettingsOpen((prev) => !prev);
  }, []);

  const toggleIncognito = useCallback(() => {
    setIsIncognito((prev) => !prev);
  }, []);

  // Derive display values based on incognito state
  const memoryText = isIncognito ? 'Memory Disabled' : (memoryEnabled ? 'Memory On' : 'Memory Off');
  const trainingText = isIncognito ? 'Training Disabled' : (trainingEnabled ? 'Training On' : 'Training Off');
  const retentionText = isIncognito ? 'Session Only' : '30 Day Retention';
  const memoryActive = !isIncognito && memoryEnabled;
  const trainingActive = !isIncognito && trainingEnabled;

  return (
    <div className="pdc-showcase">
      <header className="pdc-showcase__header">
        <div className="pdc-showcase__header-content">
          <h2 className="pdc-showcase__title">Privacy & Data Usage Controls</h2>
          <p className="pdc-showcase__description">
            This example demonstrates contextual indicators in the chat header linked to a granular
            privacy control panel. Try toggling memory, training, or enabling &quot;Incognito Mode&quot;.
          </p>
        </div>
        <button className="pdc-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className={`pdc-agent ${isIncognito ? 'pdc-agent--incognito' : ''}`}>
        {/* Agent Header with Privacy Bar */}
        <div className="pdc-agent__header">
          <div className="pdc-agent__title">
            <svg className="pdc-agent__title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
            </svg>
            Enterprise Assistant
          </div>

          <div className="pdc-agent__privacy-bar">
            {/* Memory Status */}
            <div className="pdc-agent__status-item">
              <div className={`pdc-agent__status-dot ${memoryActive ? 'pdc-agent__status-dot--active' : ''}`} />
              <span className="pdc-agent__status-text">{memoryText}</span>
            </div>

            <span className="pdc-agent__separator">|</span>

            {/* Training Status */}
            <div className="pdc-agent__status-item">
              <div className={`pdc-agent__status-dot ${trainingActive ? 'pdc-agent__status-dot--active' : ''}`} />
              <span className="pdc-agent__status-text">{trainingText}</span>
            </div>

            <span className="pdc-agent__separator">|</span>

            {/* Retention Status */}
            <div className="pdc-agent__status-item">
              <span className="pdc-agent__status-text">{retentionText}</span>
            </div>

            {/* Settings Trigger */}
            <button
              className="pdc-agent__control-link"
              onClick={toggleSettings}
              aria-expanded={isSettingsOpen}
              aria-controls="pdc-settings-panel"
            >
              Manage data & memory
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="pdc-agent__body">
          <div className="pdc-chat-msg pdc-chat-msg--ai">
            Hello! I&apos;m ready to help with your Q4 sales analysis. I have access to your connected CRM data and previous conversations.
          </div>
          <div className="pdc-chat-msg pdc-chat-msg--user">
            Great. Please summarize the opportunities from last week based on the &quot;Enterprise&quot; tag.
          </div>
          <div className="pdc-chat-msg pdc-chat-msg--ai">
            Searching Salesforce for opportunities tagged &quot;Enterprise&quot; modified in the last 7 days...
            <div className="pdc-chat-msg__meta">
              <svg className="pdc-chat-msg__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Using workspace data connection
            </div>
          </div>
        </div>

        {/* Settings Slide-over Panel */}
        <div
          id="pdc-settings-panel"
          className={`pdc-settings ${isSettingsOpen ? 'pdc-settings--open' : ''}`}
          aria-hidden={!isSettingsOpen}
        >
          <div className="pdc-settings__header">
            <h3 className="pdc-settings__title">Data & Privacy</h3>
            <button
              className="pdc-settings__close"
              onClick={toggleSettings}
              aria-label="Close settings panel"
            >
              &times;
            </button>
          </div>

          <div className="pdc-settings__content">
            {/* Data Lifecycle Visualization */}
            <div className="pdc-lifecycle">
              <div className="pdc-lifecycle__step">
                <div className="pdc-lifecycle__icon">📥</div>
                <span>Input</span>
              </div>
              <div className="pdc-lifecycle__arrow">→</div>
              <div className="pdc-lifecycle__step">
                <div className="pdc-lifecycle__icon">🔒</div>
                <span>Process</span>
              </div>
              <div className="pdc-lifecycle__arrow">→</div>
              <div className="pdc-lifecycle__step">
                <div className="pdc-lifecycle__icon">{isIncognito ? '🗑️' : '💾'}</div>
                <span>{isIncognito ? 'Purge' : 'Store'}</span>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="pdc-control-group">
              <h4 className="pdc-control-group__title">Preferences</h4>

              {/* Memory Toggle */}
              <div className="pdc-setting-item">
                <div className="pdc-setting-item__info">
                  <label className="pdc-setting-item__label" htmlFor="pdc-toggle-memory">
                    Chat Memory
                  </label>
                  <div className="pdc-setting-item__desc">
                    Allow the assistant to remember details across sessions to personalize responses.
                  </div>
                </div>
                <label className="pdc-toggle">
                  <input
                    id="pdc-toggle-memory"
                    type="checkbox"
                    className="pdc-toggle__input"
                    checked={memoryEnabled}
                    disabled={isIncognito}
                    onChange={(e) => setMemoryEnabled(e.target.checked)}
                  />
                  <span className="pdc-toggle__slider" />
                </label>
              </div>

              {/* Training Toggle */}
              <div className="pdc-setting-item">
                <div className="pdc-setting-item__info">
                  <label className="pdc-setting-item__label" htmlFor="pdc-toggle-training">
                    Model Training
                  </label>
                  <div className="pdc-setting-item__desc">
                    Contribute anonymized conversation data to improve model accuracy.
                  </div>
                </div>
                <label className="pdc-toggle">
                  <input
                    id="pdc-toggle-training"
                    type="checkbox"
                    className="pdc-toggle__input"
                    checked={trainingEnabled}
                    disabled={isIncognito}
                    onChange={(e) => setTrainingEnabled(e.target.checked)}
                  />
                  <span className="pdc-toggle__slider" />
                </label>
              </div>

              {/* Analytics Toggle */}
              <div className="pdc-setting-item">
                <div className="pdc-setting-item__info">
                  <label className="pdc-setting-item__label" htmlFor="pdc-toggle-analytics">
                    Usage Analytics
                  </label>
                  <div className="pdc-setting-item__desc">
                    Share error logs and performance metrics with developers.
                  </div>
                </div>
                <label className="pdc-toggle">
                  <input
                    id="pdc-toggle-analytics"
                    type="checkbox"
                    className="pdc-toggle__input"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  />
                  <span className="pdc-toggle__slider" />
                </label>
              </div>
            </div>

            {/* Session Control Section */}
            <div className="pdc-control-group">
              <h4 className="pdc-control-group__title">Session Control</h4>
              <button
                className={`pdc-btn-incognito ${isIncognito ? 'pdc-btn-incognito--active' : ''}`}
                onClick={toggleIncognito}
              >
                <svg className="pdc-btn-incognito__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
                {isIncognito ? 'Exit Incognito Session' : 'Start Incognito Session'}
              </button>
              <div className="pdc-incognito-hint">
                No history saved. Integrations read-only.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
