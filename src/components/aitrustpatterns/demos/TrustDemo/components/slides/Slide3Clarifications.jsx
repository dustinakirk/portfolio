import React, { useState, useRef, useEffect } from 'react';
import Annotated from '../Annotated';
import { CHAT_MESSAGES, ASK_QUESTION_DATA } from '../../data/mockData';

export default function Slide3Clarifications({ showAnnotations = true, selectedOptions = {}, onOptionSelect }) {
  const data = CHAT_MESSAGES.slide2;
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [otherActive, setOtherActive] = useState({});
  const [otherText, setOtherText] = useState({});
  const [toolStates, setToolStates] = useState(() => {
    return data.tools?.reduce((acc, tool) => {
      acc[tool.id] = tool.enabled;
      return acc;
    }, {}) || {};
  });
  const userMessageRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatAreaRef = useRef(null);

  // Scroll to user message on mount so first annotation is visible
  // Use scrollTo on the chat area container to avoid scrolling parent containers
  useEffect(() => {
    requestAnimationFrame(() => {
      if (userMessageRef.current && chatAreaRef.current) {
        const chatArea = chatAreaRef.current;
        const message = userMessageRef.current;
        const messageTop = message.offsetTop;
        chatArea.scrollTo({ top: messageTop, behavior: 'smooth' });
      }
    });
  }, []);

  const handleOptionSelect = (questionIndex, option) => {
    // Clear "Other" state when a predefined option is selected
    if (otherActive[questionIndex]) {
      setOtherActive({ ...otherActive, [questionIndex]: false });
      setOtherText({ ...otherText, [questionIndex]: '' });
    }
    if (onOptionSelect) {
      onOptionSelect(questionIndex, option);
    }
  };

  const handleOtherClick = (questionIndex) => {
    setOtherActive({ ...otherActive, [questionIndex]: true });
    // Clear any previously selected predefined option
    if (onOptionSelect) {
      onOptionSelect(questionIndex, null);
    }
  };

  const handleOtherTextChange = (questionIndex, text) => {
    setOtherText({ ...otherText, [questionIndex]: text });
    if (onOptionSelect && text.trim()) {
      onOptionSelect(questionIndex, `Other: ${text}`);
    }
  };

  return (
    <div className="td-slide td-slide--clarifications">
      {/* Chat Area */}
      <div className="td-chat td-chat--padded td-chat--scrollable" ref={chatAreaRef}>
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
        <div className="td-chat__message td-chat__message--user" ref={userMessageRef}>
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
                  <Annotated
                    show={showAnnotations}
                    patternId="4.4"
                    patternName="Request Reformulation"
                    description="Allow users to edit their original request after seeing the agent's interpretation."
                    placement="top-right"
                    offset={{ x: 0, y: 15 }}
                  >
                    <span />
                  </Annotated>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 1.5l2.5 2.5M1.5 12.5l.5-2.5L10 2l2.5 2.5L4.5 12.5l-3 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="td-chat__text">{data.user}</p>
          </div>
        </div>

        {/* Agent Response with Clarifications */}
        <div className="td-chat__message td-chat__message--agent">
          <div className="td-chat__avatar td-chat__avatar--agent">A</div>
          <div className="td-chat__content">
            <div className="td-chat__header">
              <span className="td-chat__author">Atlas</span>
              <span className="td-chat__time">Just now</span>
            </div>

            <p className="td-chat__text">Before I build your execution plan, let me confirm a few things:</p>

            {/* Assumptions Panel */}
            <div className="td-assumptions">
              <button
                className="td-assumptions-toggle"
                onClick={() => setShowAssumptions(!showAssumptions)}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: showAssumptions ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Annotated
                  show={showAnnotations}
                  patternId="4.3"
                  patternName="Confirmed Assumptions Panel"
                  description="Explicit display of assumptions the agent is making for transparency."
                  top={-10}
                  left={-10}
                >
                  <span>Assumptions I'm making ({data.assumptions.length})</span>
                </Annotated>
              </button>
              {showAssumptions && (
                <ul className="td-assumptions-list">
                  {data.assumptions.map((assumption, i) => (
                    <li key={i}>{assumption}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tools Panel */}
            <div className="td-tools-panel">
              <div className="td-tools-header">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10.5 6.5v3a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M8 1.5l2.5 2.5M5.5 7l4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Annotated
                  show={showAnnotations}
                  patternId="3.5"
                  patternName="Scoped Permissions & Tool Consent"
                  description="Make tool access explicit and revocable. Users can toggle which tools the agent is allowed to use for this task."
                  top={-10}
                  left={-10}
                >
                  <span>Tools</span>
                </Annotated>
              </div>
              <div className="td-tools-chips">
                {data.tools?.map((tool) => (
                  <button
                    key={tool.id}
                    className={`td-tool-chip ${toolStates[tool.id] ? 'td-tool-chip--enabled' : 'td-tool-chip--disabled'}`}
                    onClick={() => setToolStates(prev => ({ ...prev, [tool.id]: !prev[tool.id] }))}
                    title={toolStates[tool.id] ? 'Click to disable' : 'Click to enable'}
                  >
                    <span className="td-tool-chip-indicator" />
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Clarification Questions */}
            <div className="td-clarifications">
              <div className="td-clarifications-header">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5.5 5.5a1.5 1.5 0 112.12.88c-.35.2-.62.52-.62.87V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="7" cy="10" r="0.5" fill="currentColor"/>
                </svg>
                <Annotated
                  show={showAnnotations}
                  patternId="4.1"
                  patternName="Structured Clarification Prompts"
                  description="Multiple-choice questions help gather requirements without open-ended friction."
                  placement="top-right"
                >
                  <span>Quick questions to tailor the analysis:</span>
                </Annotated>
              </div>
              {data.clarifications.map((q, i) => (
                <div key={i} className="td-clarification-item">
                  <p className="td-clarification-question">{q.question}</p>
                  <div className="td-clarification-options">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        className={`td-clarification-option ${selectedOptions[i] === opt ? 'td-clarification-option--selected' : ''}`}
                        onClick={() => handleOptionSelect(i, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                    {i === 0 ? (
                      <button
                        className={`td-clarification-option td-clarification-option--other ${otherActive[i] ? 'td-clarification-option--selected' : ''}`}
                        onClick={() => handleOtherClick(i)}
                      >
                        <Annotated
                          show={showAnnotations}
                          patternId="4.5"
                          patternName="Escape Hatch for Custom Input"
                          description="Always provide an 'Other' option so users aren't forced into predefined choices that don't fit."
                          placement="top-right"
                          offset={{ x: 10, y: 0 }}
                        >
                          <span>Other</span>
                        </Annotated>
                      </button>
                    ) : (
                      <button
                        className={`td-clarification-option td-clarification-option--other ${otherActive[i] ? 'td-clarification-option--selected' : ''}`}
                        onClick={() => handleOtherClick(i)}
                      >
                        Other
                      </button>
                    )}
                  </div>
                  {otherActive[i] && (
                    <div className="td-clarification-other-container">
                      <input
                        type="text"
                        className="td-clarification-other-input"
                        placeholder="Type your answer..."
                        value={otherText[i] || ''}
                        onChange={(e) => handleOtherTextChange(i, e.target.value)}
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <div className="td-clarifications-submit">
                <button className="td-button td-button--primary">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M12 2L2 6.5l3.5 1.75M12 2l-4.5 9.5-1.75-3.75M12 2L5.5 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Submit & Build Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={chatEndRef} />
      </div>

      {/* Input area - hidden on this slide as agent asks for input in chat */}
      <div className="td-chat__composer" style={{ display: 'none' }} />
    </div>
  );
}
