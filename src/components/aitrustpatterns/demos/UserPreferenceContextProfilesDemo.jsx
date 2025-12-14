import React, { useState, useCallback } from 'react';
import './UserPreferenceContextProfilesDemo.css';

// Content variations for the AI response
const content = {
  concise: `
    <p class="upcp-response__intro">Top 3 dashboard friction points:</p>
    <ul class="upcp-response__list">
      <li><strong>Navigation Hierarchy:</strong> Users struggle to find global settings.</li>
      <li><strong>Load Latency:</strong> Charts take >2s to render on mobile.</li>
      <li><strong>Filter Logic:</strong> "Any" vs "All" distinction is unclear.</li>
    </ul>
  `,
  verbose: `
    <p class="upcp-response__paragraph">I have analyzed the transcripts from the Q3 user research sessions. Based on the qualitative feedback, there are three primary areas causing friction for users in the new dashboard environment:</p>
    <p class="upcp-response__paragraph">First, <strong>Navigation Hierarchy</strong> is a significant blocker. 40% of participants failed to locate the global settings menu within the first minute of the task.</p>
    <p class="upcp-response__paragraph">Second, <strong>Load Latency</strong> is affecting perceived performance. Specifically, data visualization components are taking over 2 seconds to render on mobile devices.</p>
    <p class="upcp-response__paragraph">Finally, the <strong>Filter Logic</strong> remains ambiguous. Users expressed confusion regarding the distinction between "Match Any" and "Match All" criteria.</p>
  `,
  visual: `
    <div class="upcp-chart-placeholder">
      <svg class="upcp-chart-placeholder__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
      <div class="upcp-chart-placeholder__title">Friction Severity Impact</div>
      <div class="upcp-chart-placeholder__bar-container">
        <div class="upcp-chart-placeholder__bar" style="width: 75%"></div>
      </div>
      <div class="upcp-chart-placeholder__labels">
        <span>Nav</span>
        <span>Load</span>
        <span>Filters</span>
      </div>
    </div>
  `
};

function getAIResponse(isConcise, showVisuals, noJargon) {
  let text = isConcise ? content.concise : content.verbose;

  // Simple string replacement for "Jargon" toggle simulation
  if (noJargon) {
    text = text.replace(/Latency/g, "Speed Issues").replace(/render/g, "load").replace(/Hierarchy/g, "Structure");
  }

  const visuals = showVisuals ? content.visual : '';

  return text + visuals;
}

function getContextLabel(isConcise, showVisuals, noJargon) {
  const parts = ["Using: Work Profile"];
  if (isConcise) parts.push("Concise");
  else parts.push("Detailed");

  if (showVisuals) parts.push("Visuals");
  if (noJargon) parts.push("Plain Language");

  return parts.join(" · ");
}

// Toggle Switch Component
function ToggleSwitch({ id, checked, onChange }) {
  return (
    <div className="upcp-toggle-switch">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <span className="upcp-toggle-switch__slider" />
    </div>
  );
}

// Typing Indicator Component
function TypingIndicator() {
  return (
    <div className="upcp-typing-indicator">
      <div className="upcp-typing-indicator__dot" />
      <div className="upcp-typing-indicator__dot" />
      <div className="upcp-typing-indicator__dot" />
    </div>
  );
}

export default function UserPreferenceContextProfilesDemo() {
  const [isConcise, setIsConcise] = useState(true);
  const [showVisuals, setShowVisuals] = useState(true);
  const [noJargon, setNoJargon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseKey, setResponseKey] = useState(0);

  const regenerateResponse = useCallback((newConcise, newVisuals, newJargon) => {
    setIsLoading(true);

    // Simulate network delay for realism
    setTimeout(() => {
      setIsLoading(false);
      setResponseKey(prev => prev + 1);
    }, 600);
  }, []);

  const handleConciseChange = useCallback((e) => {
    const newValue = e.target.checked;
    setIsConcise(newValue);
    regenerateResponse(newValue, showVisuals, noJargon);
  }, [showVisuals, noJargon, regenerateResponse]);

  const handleVisualsChange = useCallback((e) => {
    const newValue = e.target.checked;
    setShowVisuals(newValue);
    regenerateResponse(isConcise, newValue, noJargon);
  }, [isConcise, noJargon, regenerateResponse]);

  const handleJargonChange = useCallback((e) => {
    const newValue = e.target.checked;
    setNoJargon(newValue);
    regenerateResponse(isConcise, showVisuals, newValue);
  }, [isConcise, showVisuals, regenerateResponse]);

  const handleReset = useCallback(() => {
    setIsConcise(true);
    setShowVisuals(true);
    setNoJargon(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResponseKey(prev => prev + 1);
    }, 600);
  }, []);

  const contextLabel = getContextLabel(isConcise, showVisuals, noJargon);

  return (
    <div className="upcp-showcase">
      {/* Header with Pattern Context */}
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="upcp-workspace">
        {/* Sidebar: Profile Configuration */}
        <aside className="upcp-profile-panel">
          <div className="upcp-profile-panel__header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upcp-profile-panel__icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>My AI Profile</span>
          </div>

          <div className="upcp-profile-panel__content">
            {/* Active Persona Card */}
            <div className="upcp-identity-card">
              <div className="upcp-identity-card__label">Active Profile</div>
              <div className="upcp-identity-card__role">Work: Principal Designer</div>
              <div className="upcp-identity-card__context">Focus: Strategy, UX, Visuals</div>
            </div>

            {/* Preferences */}
            <div className="upcp-preference-group">
              <div className="upcp-preference-group__title">Communication Style</div>

              <label className="upcp-setting-toggle" htmlFor="toggle-concise">
                <span className="upcp-setting-toggle__label">Concise / Bullet Points</span>
                <ToggleSwitch
                  id="toggle-concise"
                  checked={isConcise}
                  onChange={handleConciseChange}
                />
              </label>

              <label className="upcp-setting-toggle" htmlFor="toggle-visuals">
                <span className="upcp-setting-toggle__label">Include Visuals/Charts</span>
                <ToggleSwitch
                  id="toggle-visuals"
                  checked={showVisuals}
                  onChange={handleVisualsChange}
                />
              </label>
            </div>

            <div className="upcp-preference-group">
              <div className="upcp-preference-group__title">Constraints</div>

              <label className="upcp-setting-toggle" htmlFor="toggle-jargon">
                <span className="upcp-setting-toggle__label">Exclude Technical Jargon</span>
                <ToggleSwitch
                  id="toggle-jargon"
                  checked={noJargon}
                  onChange={handleJargonChange}
                />
              </label>
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="upcp-chat-area">
          <div className="upcp-chat-area__messages">
            {/* Static User Message */}
            <div className="upcp-message upcp-message--user">
              Based on the Q3 user research sessions, what are the top friction points for the new dashboard?
            </div>

            {/* AI Response */}
            <div className="upcp-message upcp-message--ai">
              <div className="upcp-message__avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <div className="upcp-message__content">
                {isLoading ? (
                  <TypingIndicator />
                ) : (
                  <div
                    key={responseKey}
                    className="upcp-response"
                    dangerouslySetInnerHTML={{ __html: getAIResponse(isConcise, showVisuals, noJargon) }}
                  />
                )}
              </div>
              {/* Context Chip (The Core Pattern Element) */}
              <div className={`upcp-context-chip ${isLoading ? 'upcp-context-chip--loading' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upcp-context-chip__icon">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
                <span className="upcp-context-chip__text">{contextLabel}</span>
              </div>
            </div>
          </div>

          {/* Fake Input Area */}
          <div className="upcp-chat-area__input">
            <div className="upcp-chat-area__input-field">
              Ask a follow-up...
            </div>
            <div className="upcp-chat-area__send-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
