import React, { useState, useRef, useEffect } from 'react';
import Annotated from '../Annotated';
import { CHAT_MESSAGES, ASK_QUESTION_DATA } from '../../data/mockData';

export default function Slide2PlanExecute({ showAnnotations = true, selectedOptions = {} }) {
  const chatEndRef = useRef(null);
  const data = CHAT_MESSAGES.slide2;
  const estimates = data.estimates;

  // State for guardrails dropdown and sliders
  const [guardrailsOpen, setGuardrailsOpen] = useState(false);
  const [maxTime, setMaxTime] = useState(estimates.time.max);
  const [maxCost, setMaxCost] = useState(estimates.cost.max);

  // Check if user has selected any answers
  const hasAnswers = Object.keys(selectedOptions).length > 0;

  // Scroll chat to bottom on mount with smooth animation
  useEffect(() => {
    requestAnimationFrame(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }, []);

  // Calculate slider max values (2x the estimate max)
  const timeSliderMax = estimates.time.max * 2;
  const costSliderMax = estimates.cost.max * 2;

  return (
    <div className="td-slide td-slide--plan">
      {/* Chat Area */}
      <div className="td-chat td-chat--padded">
        {/* Agent Welcome Message */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Earlier</span>
            </div>
            <p className="td-chat__text">{ASK_QUESTION_DATA.welcomeMessage}</p>
          </div>
        </div>

        {/* User Message */}
        <div className="td-chat__message td-chat__message--user">
          <div className="td-chat__avatar td-chat__avatar--user">JD</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">You</span>
              <span className="td-chat__time">Just now</span>
              <div className="td-chat__actions">
                <button className="td-chat__action-btn" title="Copy">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M10 4V2.5A1.5 1.5 0 008.5 1H2.5A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                </button>
                <button className="td-chat__action-btn" title="Edit">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 1.5l2.5 2.5M1.5 12.5l.5-2.5L10 2l2.5 2.5L4.5 12.5l-3 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="td-chat__text">{data.user}</p>
          </div>
        </div>

        {/* Display user's selected answers if any */}
        {hasAnswers && (
          <div className="td-chat__message td-chat__message--user">
            <div className="td-chat__avatar td-chat__avatar--user">JD</div>
            <div className="td-chat__content">
              <div className="td-chat__header">
                <span className="td-chat__author">You</span>
                <span className="td-chat__time">Just now</span>
              </div>
              <div className="td-user-answers">
                {data.clarifications.map((q, i) => (
                  selectedOptions[i] && (
                    <p key={i} className="td-user-answer">
                      <span className="td-user-answer-label">{q.question}</span> {selectedOptions[i]}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Agent Response */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Just now</span>
            </div>

            <p className="td-chat__text">Here's the plan I propose. I haven't started working yet — once you're happy with the steps and limits, you can approve and I'll begin.</p>

            {/* Plan Card */}
              <div className="td-plan-card">
                {/* Plan Header */}
                <div className="td-plan-card-header">
                  <div className="td-plan-card-header-left">
                    <Annotated
                      show={showAnnotations}
                      patternId="3.3"
                      patternName="Plan-then-Execute Workflow"
                      description="Agent proposes a plan before executing, giving users visibility and control."
                      placement="top-left"
                    >
                      <span className="td-plan-label">PLAN</span>
                    </Annotated>
                  </div>
                  <div className="td-plan-badge-wrapper">
                    <button
                      className={`td-plan-badge ${guardrailsOpen ? 'td-plan-badge--open' : ''}`}
                      onClick={() => setGuardrailsOpen(!guardrailsOpen)}
                    >
                      <Annotated
                        show={showAnnotations}
                        patternId="3.3b"
                        patternName="Resource Estimates"
                        description="For complex tasks, attach estimated time, cost tokens, risk level."
                        placement="top-right"
                        offset={{ x: 10, y: 0 }}
                      >
                        <span>{estimates.time.min}–{estimates.time.max} min</span>
                      </Annotated>
                      <span className="td-plan-badge-dot">•</span>
                      <span>${estimates.cost.min.toFixed(2)}–${estimates.cost.max.toFixed(2)}</span>
                      <svg
                        className="td-plan-badge-chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* Guardrails Dropdown Overlay */}
                    {guardrailsOpen && (
                      <div className="td-plan-guardrails">
                        <div className="td-plan-guardrails-header">
                          <span className="td-plan-guardrails-title">Time & cost guardrails</span>
                        </div>

                        {/* Max Time Slider */}
                        <div className="td-plan-guardrails-row">
                          <span className="td-plan-guardrails-label">Max time</span>
                          <span className="td-plan-guardrails-value">{maxTime} min</span>
                        </div>
                        <input
                          type="range"
                          className="td-plan-guardrails-slider"
                          min={estimates.time.min}
                          max={timeSliderMax}
                          step={1}
                          value={maxTime}
                          onChange={(e) => setMaxTime(Number(e.target.value))}
                        />
                        <div className="td-plan-guardrails-range">
                          <span>{estimates.time.min} min</span>
                          <span>Unrestricted</span>
                        </div>

                        {/* Max Cost Slider */}
                        <div className="td-plan-guardrails-row">
                          <span className="td-plan-guardrails-label">Max cost</span>
                          <span className="td-plan-guardrails-value">${maxCost.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          className="td-plan-guardrails-slider"
                          min={estimates.cost.min}
                          max={costSliderMax}
                          step={0.01}
                          value={maxCost}
                          onChange={(e) => setMaxCost(Number(e.target.value))}
                        />
                        <div className="td-plan-guardrails-range">
                          <span>${estimates.cost.min.toFixed(2)}</span>
                          <span>Unrestricted</span>
                        </div>

                        <p className="td-plan-guardrails-note">
                          I'll execute the steps above and stop when I reach <strong>{maxTime} minutes</strong> or <strong>${maxCost.toFixed(2)}</strong> in estimated usage, whichever comes first.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Steps */}
                <div className="td-plan-steps">
                  {data.plan.map((step, index) => (
                    <div key={step.step} className="td-plan-step-card">
                      <div className="td-plan-step-header">
                        <span className="td-plan-step-number">{step.step}</span>
                        <span className="td-plan-step-title">{step.title}</span>
                        <span className={`td-plan-mode-badge td-plan-mode-badge--${step.mode}`}>
                          {step.mode === 'autopilot' ? 'Autopilot' :
                           step.mode === 'copilot' ? 'Co-Pilot' : 'Advisor'}
                        </span>
                      </div>
                      <div className="td-plan-step-body">
                        <span className="td-plan-step-agent">{step.agent}</span>
                        {step.tools?.length > 0 && (
                          <div className="td-plan-step-tools">
                            {step.tools.map(tool => (
                              <span key={tool} className="td-plan-tool-badge">{tool}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      {index < data.plan.length - 1 && (
                        <div className="td-plan-step-connector" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Plan Footer */}
                <div className="td-plan-footer">
                  <div className="td-plan-footer-actions">
                    <button className="td-button td-button--secondary">Edit plan</button>
                    <button className="td-button td-button--primary">
                      <Annotated
                        show={showAnnotations}
                        patternId="4.2"
                        patternName="Recap & Commit"
                        description="Explicit approval checkpoint before agent begins execution."
                        placement="top-right"
                      >
                        <span>Approve & continue</span>
                      </Annotated>
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
