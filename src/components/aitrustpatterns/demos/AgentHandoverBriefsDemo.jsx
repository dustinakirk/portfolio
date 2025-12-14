import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Plane, User, Bot, Globe, Check } from 'lucide-react';
import './AgentHandoverBriefsDemo.css';

export default function AgentHandoverBriefsDemo() {
  const [isApproved, setIsApproved] = useState(false);
  const [showExternalResponse, setShowExternalResponse] = useState(false);
  const [goalText, setGoalText] = useState('Book 2 seats, SFO to DEN, Nov 10-12.');
  const [questionsText, setQuestionsText] = useState('Charge to Card ending in 8892?');

  const isInitialLoadRef = useRef(true);
  const chatRef = useRef(null);

  // Scroll to bottom when external response appears
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    if (showExternalResponse && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [showExternalResponse]);

  const handleApprove = useCallback(() => {
    setIsApproved(true);

    // Show external agent response after delay
    setTimeout(() => {
      setShowExternalResponse(true);
    }, 600);
  }, []);

  const handleReset = useCallback(() => {
    isInitialLoadRef.current = true;
    setIsApproved(false);
    setShowExternalResponse(false);
    setGoalText('Book 2 seats, SFO to DEN, Nov 10-12.');
    setQuestionsText('Charge to Card ending in 8892?');
  }, []);

  return (
    <div className="ahb-showcase" role="region" aria-label="Agent Handover Briefs demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="ahb-chat" ref={chatRef}>
        {/* User Message */}
        <div className="ahb-message ahb-message--user">
          <div className="ahb-message__avatar ahb-message__avatar--user">
            <User size={16} />
          </div>
          <div className="ahb-message__content">
            Book the flights for the partner summit in Denver next month.
          </div>
        </div>

        {/* Agent Message with Handover Brief */}
        <div className="ahb-message ahb-message--agent">
          <div className="ahb-message__avatar ahb-message__avatar--agent">
            <Bot size={16} />
          </div>
          <div className="ahb-message__content">
            I&apos;ve selected the best flights based on policy. To complete the booking, I need to hand off to the <strong>TravelLink Agent</strong>.

            {/* Handover Brief Card */}
            <div className={`ahb-handover-brief ${isApproved ? 'ahb-handover-brief--approved' : ''}`}>
              <div className="ahb-handover-brief__header">
                <h3 className="ahb-handover-brief__title">
                  <Plane size={14} />
                  Handover: TravelLink (External)
                </h3>
                <span className="ahb-handover-brief__status">
                  {isApproved ? 'Approved' : 'Draft'}
                </span>
              </div>

              <div className="ahb-handover-brief__body">
                {/* Goal Section */}
                <div className="ahb-handover-brief__section">
                  <label className="ahb-handover-brief__label" htmlFor="brief-goal">
                    Goal
                  </label>
                  <textarea
                    id="brief-goal"
                    className="ahb-handover-brief__input"
                    rows={1}
                    value={goalText}
                    onChange={(e) => setGoalText(e.target.value)}
                    disabled={isApproved}
                  />
                </div>

                {/* Details Section */}
                <div className="ahb-handover-brief__section">
                  <span className="ahb-handover-brief__label">Details</span>
                  <ul className="ahb-handover-brief__list">
                    <li>Airline: United (Direct).</li>
                    <li>Class: Economy Plus.</li>
                    <li>Passengers: J. Doe, S. Smith.</li>
                  </ul>
                </div>

                {/* Open Questions Section */}
                <div className="ahb-handover-brief__section">
                  <label className="ahb-handover-brief__label" htmlFor="brief-questions">
                    Open Questions
                  </label>
                  <textarea
                    id="brief-questions"
                    className="ahb-handover-brief__input"
                    rows={1}
                    value={questionsText}
                    onChange={(e) => setQuestionsText(e.target.value)}
                    disabled={isApproved}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="ahb-handover-brief__actions">
                <button className="ahb-button ahb-button--secondary" type="button">
                  Edit
                </button>
                <button
                  className="ahb-button ahb-button--primary"
                  type="button"
                  onClick={handleApprove}
                >
                  Approve
                  <Check size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* External Agent Response (shown after approval) */}
        {showExternalResponse && (
          <div className="ahb-message ahb-message--agent">
            <div className="ahb-message__avatar ahb-message__avatar--external">
              <Globe size={16} />
            </div>
            <div className="ahb-message__content">
              <strong>TravelLink Agent connected.</strong>
              <br />
              Received. Confirming seats on UA442 (SFO-DEN). Processing payment via Card ...8892.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
