import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// BEM-scoped styles for the FeedbackDemo component
const feedbackDemoStyles = `
  .feedback-demo {
    --fd-color-bg: #F4F6F8;
    --fd-color-surface: #FFFFFF;
    --fd-color-border: #E1E4E8;
    --fd-color-text-primary: #1A202C;
    --fd-color-text-secondary: #5F6B7C;
    --fd-color-primary: #3B82F6;
    --fd-color-primary-dark: #2563EB;
    --fd-color-success: #10B981;
    --fd-color-danger: #EF4444;
    --fd-radius-md: 8px;
    --fd-radius-lg: 12px;
    --fd-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --fd-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: var(--fd-color-surface);
    border: 1px solid var(--fd-color-border);
    border-radius: var(--fd-radius-lg);
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: var(--fd-shadow-md);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .feedback-demo__header {
    padding: 20px;
    border-bottom: 1px solid var(--fd-color-border);
    background: #FAFAFA;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .feedback-demo__title {
    font-size: 16px;
    font-weight: 600;
    color: var(--fd-color-text-primary);
    margin: 0 0 4px 0;
  }

  .feedback-demo__description {
    font-size: 13px;
    color: var(--fd-color-text-secondary);
    line-height: 1.4;
    max-width: 450px;
    margin: 0;
  }

  .feedback-demo__reset-btn {
    background: transparent;
    border: 1px solid var(--fd-color-border);
    padding: 6px 12px;
    border-radius: var(--fd-radius-md);
    font-size: 12px;
    font-weight: 500;
    color: var(--fd-color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .feedback-demo__reset-btn:hover {
    background: #F0F0F0;
    color: var(--fd-color-text-primary);
  }

  .feedback-demo__chat {
    padding: 24px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 300px;
  }

  .feedback-demo__message {
    display: flex;
    gap: 12px;
    max-width: 100%;
    animation: feedback-demo-fadeIn 0.3s ease-out;
  }

  .feedback-demo__message--user {
    flex-direction: row-reverse;
  }

  .feedback-demo__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    flex-shrink: 0;
  }

  .feedback-demo__avatar--ai {
    background-color: #EEF2FF;
    color: var(--fd-color-primary);
  }

  .feedback-demo__avatar--user {
    background-color: #F3F4F6;
    color: var(--fd-color-text-secondary);
  }

  .feedback-demo__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 85%;
  }

  .feedback-demo__bubble {
    padding: 12px 16px;
    border-radius: var(--fd-radius-md);
    font-size: 14px;
    line-height: 1.5;
    position: relative;
  }

  .feedback-demo__bubble--ai {
    background-color: #F8FAFC;
    border: 1px solid var(--fd-color-border);
    color: var(--fd-color-text-primary);
    border-top-left-radius: 0;
  }

  .feedback-demo__bubble--user {
    background-color: var(--fd-color-primary);
    color: white;
    border-top-right-radius: 0;
  }

  .feedback-demo__control {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 4px;
    padding-left: 2px;
    transition: opacity 0.3s;
  }

  .feedback-demo__control--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .feedback-demo__control-label {
    font-size: 12px;
    color: #94A3B8;
  }

  .feedback-demo__control-actions {
    display: flex;
    gap: 6px;
  }

  .feedback-demo__btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #94A3B8;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .feedback-demo__btn:hover {
    background-color: #F1F5F9;
    color: var(--fd-color-text-secondary);
  }

  .feedback-demo__btn--active-up {
    color: var(--fd-color-success);
    background-color: #ECFDF5;
  }

  .feedback-demo__btn--active-down {
    color: var(--fd-color-danger);
    background-color: #FEF2F2;
  }

  .feedback-demo__icon {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .feedback-demo__form {
    margin-top: 12px;
    background: white;
    border: 1px solid var(--fd-color-border);
    border-radius: var(--fd-radius-md);
    padding: 16px;
    width: 100%;
    max-width: 320px;
    box-shadow: var(--fd-shadow-sm);
    display: none;
    animation: feedback-demo-slideDown 0.2s ease-out;
  }

  .feedback-demo__form--visible {
    display: block;
  }

  .feedback-demo__form-title {
    font-size: 13px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: var(--fd-color-text-primary);
  }

  .feedback-demo__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }

  .feedback-demo__tag {
    font-size: 12px;
    padding: 6px 10px;
    border: 1px solid var(--fd-color-border);
    border-radius: 20px;
    background: white;
    color: var(--fd-color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
  }

  .feedback-demo__tag:hover {
    border-color: #CBD5E1;
    background: #F8FAFC;
  }

  .feedback-demo__tag--selected {
    background-color: #EFF6FF;
    border-color: var(--fd-color-primary);
    color: var(--fd-color-primary-dark);
  }

  .feedback-demo__textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--fd-color-border);
    border-radius: 6px;
    font-family: inherit;
    font-size: 12px;
    resize: none;
    margin-bottom: 12px;
    outline: none;
    box-sizing: border-box;
  }

  .feedback-demo__textarea:focus {
    border-color: var(--fd-color-primary);
  }

  .feedback-demo__footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .feedback-demo__action-btn {
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }

  .feedback-demo__action-btn--secondary {
    background: transparent;
    color: var(--fd-color-text-secondary);
  }

  .feedback-demo__action-btn--secondary:hover {
    background: #F1F5F9;
  }

  .feedback-demo__action-btn--primary {
    background: var(--fd-color-primary);
    color: white;
  }

  .feedback-demo__action-btn--primary:hover {
    background: var(--fd-color-primary-dark);
  }

  .feedback-demo__action-btn--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .feedback-demo__repair-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    background: #F0FDF4;
    color: #15803D;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 8px;
    border: 1px solid #BBF7D0;
    animation: feedback-demo-fadeIn 0.4s;
  }

  .feedback-demo__loading {
    color: var(--fd-color-text-secondary);
    font-style: italic;
  }

  .feedback-demo__loading::after {
    content: '.';
    animation: feedback-demo-dots 1.5s steps(5, end) infinite;
  }

  @keyframes feedback-demo-dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60% { content: '...'; }
    80%, 100% { content: ''; }
  }

  @keyframes feedback-demo-fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes feedback-demo-slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Self-contained FeedbackDemo component
function FeedbackDemo() {
  const [thumbsState, setThumbsState] = useState('none'); // 'none' | 'up' | 'down'
  const [showForm, setShowForm] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const [isRepairing, setIsRepairing] = useState(false);
  const [contentState, setContentState] = useState('original'); // 'original' | 'repairing' | 'repaired'

  const tags = [
    { value: 'too_long', label: 'Too long' },
    { value: 'too_formal', label: 'Too formal' },
    { value: 'inaccurate', label: 'Inaccurate' },
    { value: 'other', label: 'Other' },
  ];

  const handleThumbsUp = () => {
    if (thumbsState === 'down') return; // Lock if already down
    setThumbsState(thumbsState === 'up' ? 'none' : 'up');
    setShowForm(false);
  };

  const handleThumbsDown = () => {
    if (thumbsState === 'up') {
      setThumbsState('none');
    }
    const newState = thumbsState === 'down' ? 'none' : 'down';
    setThumbsState(newState);
    setShowForm(newState === 'down');
    if (newState === 'none') {
      resetForm();
    }
  };

  const handleTagClick = (tagValue) => {
    setSelectedTags(prev =>
      prev.includes(tagValue)
        ? prev.filter(t => t !== tagValue)
        : [...prev, tagValue]
    );
  };

  const handleSubmit = () => {
    setShowForm(false);
    setContentState('repairing');

    setTimeout(() => {
      setContentState('repaired');
    }, 1200);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const resetForm = () => {
    setSelectedTags([]);
    setTextareaValue('');
  };

  const handleReset = () => {
    setThumbsState('none');
    setShowForm(false);
    setSelectedTags([]);
    setTextareaValue('');
    setContentState('original');
  };

  const renderAIContent = () => {
    if (contentState === 'repairing') {
      return <span className="feedback-demo__loading">Regenerating with brevity</span>;
    }

    if (contentState === 'repaired') {
      return (
        <>
          <div className="feedback-demo__repair-badge">
            <svg className="feedback-demo__icon" viewBox="0 0 24 24" style={{ width: 12, height: 12 }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Shortened based on feedback
          </div>
          Subject: Quick question about your sales data
          <br /><br />
          Hi [Name],
          <br /><br />
          Saw you&apos;re leading sales at [Company]. We&apos;ve built an analytics tool helping teams like yours uncover hidden revenue opportunities in under 2 minutes.
          <br /><br />
          Open to a 10-min demo next Tuesday?
        </>
      );
    }

    return (
      <>
        Subject: Transform Your Sales Strategy with Advanced Artificial Intelligence Analytics for Unparalleled Growth
        <br /><br />
        Dear [Name],
        <br /><br />
        I hope this email finds you well. I am writing to you today to introduce our revolutionary new platform that leverages the power of machine learning and deep neural networks to provide insights that were previously impossible to uncover. We believe that in the current competitive landscape, having robust data is key to survival...
        <br /><br />
        [... 3 more paragraphs of generic text ...]
      </>
    );
  };

  return (
    <div className="feedback-demo">
      <style>{feedbackDemoStyles}</style>

      <header className="feedback-demo__header">
        <div>
          <h3 className="feedback-demo__title">Feedback & Repair Loop</h3>
          <p className="feedback-demo__description">
            Example of handling negative feedback on AI output. Rate &quot;Thumbs Down&quot; to see contextual tags and inline repair logic.
          </p>
        </div>
        <button className="feedback-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="feedback-demo__chat">
        {/* User Message */}
        <div className="feedback-demo__message feedback-demo__message--user">
          <div className="feedback-demo__avatar feedback-demo__avatar--user">
            <span>JD</span>
          </div>
          <div className="feedback-demo__content">
            <div className="feedback-demo__bubble feedback-demo__bubble--user">
              Draft a short cold email to a VP of Sales about our new AI analytics tool.
            </div>
          </div>
        </div>

        {/* AI Message */}
        <div className="feedback-demo__message feedback-demo__message--ai">
          <div className="feedback-demo__avatar feedback-demo__avatar--ai">
            <svg className="feedback-demo__icon" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div className="feedback-demo__content">
            <div className="feedback-demo__bubble feedback-demo__bubble--ai">
              {renderAIContent()}
            </div>

            {/* Feedback Controls */}
            <div className={`feedback-demo__control ${contentState === 'repairing' ? 'feedback-demo__control--disabled' : ''}`}>
              <span className="feedback-demo__control-label">Was this helpful?</span>
              <div className="feedback-demo__control-actions">
                <button
                  className={`feedback-demo__btn ${thumbsState === 'up' ? 'feedback-demo__btn--active-up' : ''}`}
                  aria-label="Helpful"
                  onClick={handleThumbsUp}
                >
                  <svg className="feedback-demo__icon" viewBox="0 0 24 24">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </button>
                <button
                  className={`feedback-demo__btn ${thumbsState === 'down' ? 'feedback-demo__btn--active-down' : ''}`}
                  aria-label="Not helpful"
                  onClick={handleThumbsDown}
                >
                  <svg className="feedback-demo__icon" viewBox="0 0 24 24">
                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Feedback Form */}
            <div className={`feedback-demo__form ${showForm ? 'feedback-demo__form--visible' : ''}`}>
              <h4 className="feedback-demo__form-title">What was the issue?</h4>
              <div className="feedback-demo__tags">
                {tags.map(tag => (
                  <button
                    key={tag.value}
                    className={`feedback-demo__tag ${selectedTags.includes(tag.value) ? 'feedback-demo__tag--selected' : ''}`}
                    onClick={() => handleTagClick(tag.value)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
              <textarea
                className="feedback-demo__textarea"
                rows={2}
                placeholder="Optional details..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
              <div className="feedback-demo__footer">
                <button
                  className="feedback-demo__action-btn feedback-demo__action-btn--secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className={`feedback-demo__action-btn feedback-demo__action-btn--primary ${selectedTags.length === 0 ? 'feedback-demo__action-btn--disabled' : ''}`}
                  onClick={handleSubmit}
                  disabled={selectedTags.length === 0}
                >
                  Submit & Repair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO metadata for this pattern page
export const FEEDBACK_RATING_SEO = {
  title: "Feedback on Results & Rating Controls - AI Trust Pattern",
  description: "Lightweight, contextual mechanisms for reacting to AI outputs—so the system can continuously learn from real usage and recover quickly when it gets things wrong.",
  keywords: ["AI feedback", "rating controls", "AI learning", "user feedback", "AI trust", "thumbs up down", "AI improvement", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/feedback-on-results"
};

export default function FeedbackOnResultsPattern() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pattern-page"
    >
      <header className="pattern-header">
        <div className="pattern-header__inner">
          <div className="pattern-header__title-group">
            <span className="pattern-header__index">2.6</span>
            <div>
              <h1 className="pattern-header__title">Feedback on Results & Rating Controls</h1>
              <p className="pattern-header__subtitle">
                Lightweight, contextual mechanisms for reacting to AI outputs—so the system can continuously learn from real usage and recover quickly when it gets things wrong.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.6" patternTitle="Feedback on Results & Rating Controls" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Feedback and rating controls are small, always-available affordances attached to AI-generated outputs that allow users to quickly signal whether a result was helpful, harmful, or off-target.
            </p>
            <p className="pattern-body">
              In agentic systems, these controls are essential for closing the loop between output quality, user expectations, and system learning. This pattern appears wherever an AI agent produces a perceivable outcome: chat responses, generated documents, completed workflows, analysis summaries, or code changes.
            </p>
            <p className="pattern-body">
              The core idea is to capture feedback in the moment of evaluation, tie it to the exact context in which it occurred, and—where appropriate—respond with immediate corrective behavior.
            </p>
            <p className="pattern-body">
              A well-designed feedback pattern:
            </p>
            <ul className="pattern-list">
              <li>Makes it effortless to express positive or negative reactions</li>
              <li>Encourages richer feedback without requiring it</li>
              <li>Clarifies what the feedback will influence (personalization vs. global improvement)</li>
              <li>Offers inline repair for negative outcomes, not just passive collection</li>
              <li>Feels respectful of user effort and interrupts the workflow as little as possible</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/2.6 feedback on results.png"
              alt="Feedback on Results & Rating Controls pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Feedback rating example">
          <FeedbackDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit feedback mechanisms, AI-driven products often behave as opaque, static systems, even when they are technically capable of learning:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Users have no clear way to express that an answer was wrong</span> – incomplete, biased, or simply unhelpful.
              </li>
              <li>
                <span className="pattern-body--bold">The system repeatedly makes the same mistakes</span> – because it does not receive structured signals about what to change or prioritize.
              </li>
              <li>
                <span className="pattern-body--bold">Product teams cannot easily see patterns</span> – in where the agent underperforms, nor distinguish between &quot;minor annoyance&quot; and &quot;critical failure.&quot;
              </li>
              <li>
                <span className="pattern-body--bold">Recovery depends on the user</span> – knowing how to restate or re-prompt, which places the burden of correction on the person rather than the system.
              </li>
              <li>
                <span className="pattern-body--bold">Trust erodes when feedback disappears into a void</span> – without visible impact.
              </li>
            </ul>
            <p className="pattern-body">
              Feedback and rating controls address this by making evaluation an explicit, low-friction part of the interaction loop, while also providing hooks for learning, personalization, and operational improvement.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">The AI produces non-trivial outputs</span> – strategy recommendations, forecasts, summaries, generated content, code, or configuration changes.
                </li>
                <li>
                  <span className="pattern-body--bold">The experience involves subjective quality dimensions</span> – tone, level of detail, format, or domain-specific nuance.
                </li>
                <li>
                  <span className="pattern-body--bold">The system offers automation or actions with risk</span> – changing settings, sending communications, modifying data, or initiating workflows.
                </li>
                <li>
                  <span className="pattern-body--bold">The product team intends to use real-world feedback</span> – to improve models, prompts, safety filters, or user-level preferences over time.
                </li>
                <li>
                  <span className="pattern-body--bold">Support teams need visibility</span> – into where the AI struggles, to prioritize training data, guardrails, or product improvements.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI provides <span className="pattern-body--bold">very small, low-stakes outputs</span> that are easily ignored or corrected with a single click.</li>
                <li>The interaction is <span className="pattern-body--bold">purely informational and obviously correct</span> – static documentation search with clear sources and simple answers.</li>
                <li>The system already collects <span className="pattern-body--bold">robust, task-level success metrics</span> that reliably capture outcome quality without subjective rating.</li>
                <li>The AI functionality is <span className="pattern-body--bold">experimental, internal-only</span>, and feedback is being gathered via direct research sessions or structured surveys.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Pattern Anatomy */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Pattern anatomy</p>
              <p className="pattern-body pattern-body--narrow">
                Feedback on Results & Rating Controls is centered around a feedback unit: a consistent, compact UI attached to an AI output that captures reaction, optional detail, and scope, and may trigger immediate corrective behavior.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline on AI Messages
              </h3>
              <p className="pattern-card__intro">
                For chat-based agents, a small reaction bar at the bottom of each assistant message.
              </p>
              <ul className="pattern-card__list">
                <li>Thumbs up / thumbs down icons</li>
                <li>Appears on key &quot;milestone&quot; messages such as final answers or summaries</li>
                <li>Non-intrusive, always accessible</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">At the Output Artifact Level</h3>
              <p className="pattern-card__intro">
                For generated reports, documents, dashboards, or code changes.
              </p>
              <ul className="pattern-card__list">
                <li>Rating controls at the top-right or footer of the artifact pane</li>
                <li>&quot;Rate this draft&quot; with thumbs or stars</li>
                <li>Contextual to the specific generated content</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">After Task Completion</h3>
              <p className="pattern-card__intro">
                In run logs, job history, or completion toasts for long-running jobs.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;How was this result?&quot; with quick reactions</li>
                <li>Appears after workflow runs complete</li>
                <li>Captures feedback on overall job quality</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Within History or Audit Views</h3>
              <p className="pattern-card__intro">
                Allowing retroactive rating of previous outputs.
              </p>
              <ul className="pattern-card__list">
                <li>Conversation history with rating options</li>
                <li>Run timelines with feedback controls</li>
                <li>Especially valuable in B2B contexts where review may happen after the fact</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Feedback Event</h3>
            <p className="pattern-card__intro">
              The main repeated unit is the feedback event, tied to a specific AI output. Each feedback event typically consists of:
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label & Affordance</p>
                <ul className="pattern-card__list">
                  <li>Concise action or hover label: &quot;Rate response&quot; or &quot;Was this helpful?&quot;</li>
                  <li>Iconography for fast recognition: thumbs up/down as default</li>
                  <li>Tooltips for clarity: &quot;Helpful&quot; / &quot;Not helpful&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Primary Controls</p>
                <ul className="pattern-card__list">
                  <li><em>Minimum:</em> Binary controls (thumbs up / thumbs down)</li>
                  <li><em>Optional:</em> Richer scale (0–5 stars, emoji scale)</li>
                  <li>&quot;Very helpful → Very unhelpful&quot; for longer tasks</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Secondary Detail Controls</p>
                <ul className="pattern-card__list">
                  <li>Post-rating sheet, popover, or inline expander</li>
                  <li>Tag chips (multi-select): &quot;Too long,&quot; &quot;Incorrect data,&quot; &quot;Wrong tone&quot;</li>
                  <li>Optional free-text field with limited length</li>
                  <li>Clear dismiss/skip actions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                How feedback controls surface and respond at different moments in the user&apos;s journey.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>Feedback controls appear in a neutral, subtle state near AI outputs without demanding attention.</li>
                <li>For first-time users, a minimal hint or tooltip may briefly explain the purpose of the controls.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. User Reacts to Output</h3>
              <ul className="pattern-card__list">
                <li>A quick click on thumbs up/down captures a reaction snapshot with no extra friction.</li>
                <li>The rating is immediately reflected in the UI (e.g., filled icon) and stored with associated context.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Optional Enrichment</h3>
              <ul className="pattern-card__list">
                <li>After the primary reaction, a small, non-blocking popover appears.</li>
                <li>For positive feedback: &quot;Clear reasoning,&quot; &quot;Great examples,&quot; &quot;Helpful formatting.&quot;</li>
                <li>For negative: &quot;Incorrect,&quot; &quot;Missed constraints,&quot; &quot;Too long.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Inline Repair</h3>
              <ul className="pattern-card__list">
                <li>For thumbs down, the system offers quick repair options aligned with common tags.</li>
                <li>&quot;Regenerate with: [More concise] [More detailed] [Different tone]&quot;</li>
                <li>Selecting an option triggers visible acknowledgment and a new output.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Preference Learning</h3>
              <ul className="pattern-card__list">
                <li>Repeated patterns of feedback can be automatically promoted into persistent preferences.</li>
                <li>Example: &quot;Summaries are now defaulted to bullet points in this workspace.&quot;</li>
                <li>Clear copy communicates when a preference has been adopted.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Logging & Aggregation</h3>
              <ul className="pattern-card__list">
                <li>Every feedback event is logged with session ID, user role, output type, tags, and optional text.</li>
                <li>Product teams access aggregated views: low-rating hotspots, temporal trends, recurring complaints.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Follow-up & Escalation</h3>
            <ul className="pattern-card__list">
              <li>Some negative feedback (e.g., &quot;Unsafe,&quot; &quot;Compliance issue,&quot; &quot;Data leak risk&quot;) may trigger automatic routing into a moderation queue.</li>
              <li>Alerts for security, compliance, or product operations can be configured.</li>
              <li>Epic-level issues arising from patterns of feedback can guide roadmap decisions and model interventions.</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of feedback controls should be neutral, clear, and honest about impact.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Helpful / Not helpful&quot; – neutral, collaborative framing</li>
                  <li>&quot;Helps improve future responses in this workspace&quot; – clarifies impact</li>
                  <li>&quot;Feedback recorded&quot; – brief confirmation that acknowledges effort</li>
                  <li>&quot;Shorter,&quot; &quot;More formal,&quot; &quot;Cite sources&quot; – actionable options the system can interpret</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Good / Bad&quot; – sounds like blame, not collaboration</li>
                  <li>&quot;Rate this before continuing&quot; – coercive, blocks workflow</li>
                  <li>&quot;This will fix the model&quot; – unrealistic expectations</li>
                  <li>&quot;Improve all responses everywhere&quot; – overpromises scope</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Orient Toward Helpfulness</h3>
                <ul className="pattern-card__list">
                  <li>Use neutral labels such as &quot;Helpful / Not helpful&quot;</li>
                  <li>Frame feedback as collaborative improvement, not blame</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Clarify Impact</h3>
                <ul className="pattern-card__list">
                  <li>Short, contextual descriptions prevent unrealistic expectations</li>
                  <li>&quot;Helps improve future responses in this workspace&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Invite, Do Not Coerce
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Avoid gating actions or content behind mandatory ratings</li>
                  <li>Feedback prompts should be easy to ignore or dismiss without penalty</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personalization, Learning & Scope */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Personalization, learning & scope</p>
              <p className="pattern-body pattern-body--narrow">
                A strong rating pattern differentiates between different types of learning and their scope.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Correction</h3>
              <ul className="pattern-card__list">
                <li>The system uses feedback to immediately improve the current output or subsequent turns within the same task.</li>
                <li>Example: A &quot;Too long&quot; tag on a summary drives shorter re-generation in the same thread.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Preference Learning</h3>
              <ul className="pattern-card__list">
                <li>Frequent feedback signals are elevated into persistent preferences.</li>
                <li>Level of detail, preferred format, tone settings.</li>
                <li>These can be surfaced and edited via Teach Me Interfaces.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Global Product Learning</h3>
              <ul className="pattern-card__list">
                <li>Aggregated feedback across tenants helps improve prompts, retrieval strategies, integration defaults.</li>
                <li>Training on user text may require explicit consent and configuration.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Explicit vs. Inferred</h3>
              <p className="pattern-card__intro">
                When preferences are inferred from feedback, they should be confirmed before major behavioral changes occur.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Multi-Tenant Boundaries</h3>
              <p className="pattern-card__intro">
                In B2B software, tenant-specific learning should respect data boundaries, role-based access, and contractual terms.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Role-Aware Behavior</h3>
              <p className="pattern-card__intro">
                Feedback from different roles (engineers, legal reviewers, executives) may need different weights or routing paths.
              </p>
            </div>
          </div>
        </section>

        {/* Data & Instrumentation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To make this pattern operationally valuable, instrument it properly.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Track Core Metrics</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Feedback coverage:</span> Percentage of AI outputs that receive ratings</li>
                <li><span className="pattern-body--bold">Rating balance:</span> Distribution of positive vs. negative reactions</li>
                <li><span className="pattern-body--bold">Tag frequencies:</span> Most common failure modes and strengths</li>
                <li><span className="pattern-body--bold">Repair effectiveness:</span> Improvement in ratings after automatic re-generation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Link to Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Correlate feedback with task completion vs. abandonment</li>
                <li>Track manual corrections vs. acceptance of AI-generated changes</li>
                <li>Monitor support tickets or escalations originating from AI outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Detect Anomalies</h3>
              <ul className="pattern-card__list">
                <li>Sudden spikes in negative feedback for a feature, segment, or time window</li>
                <li>Flag regressions in model performance, prompts, or data pipelines</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Respect Privacy & Compliance</h3>
              <ul className="pattern-card__list">
                <li>Clearly document whether free-text feedback may be used for model training</li>
                <li>Provide options to restrict sensitive content from training pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusivity</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure feedback controls are usable by everyone.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard & Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Rating controls must be fully operable via keyboard with clear focus states</li>
                <li>Icons must have accessible names: e.g., &quot;Mark response as helpful&quot; instead of &quot;Thumbs up&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Touch-Friendly Targets</h3>
              <ul className="pattern-card__list">
                <li>Controls should meet minimum target size guidelines</li>
                <li>Avoid mis-taps, especially on smaller screens</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Color-Independent Signaling</h3>
              <ul className="pattern-card__list">
                <li>Use more than color to indicate state</li>
                <li>Filled icons, underlines, or labels ensure clarity for color-blind users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Language & Cultural Sensitivity</h3>
              <ul className="pattern-card__list">
                <li>Avoid idioms in labels and tags; prefer simple, literal language</li>
                <li>Emoji-based scales should be carefully tested for cultural interpretation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Error States & Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Error states & edge cases</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate and design for these potential issues.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Streaming Outputs</h3>
              <p className="pattern-card__intro">
                Rating controls become active once the message is complete, not during generation, to avoid rating incomplete content.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial or Failed Runs</h3>
              <p className="pattern-card__intro">
                When a task fails or times out, a focused feedback component can capture failure-specific data: &quot;Error occurred,&quot; &quot;Stuck,&quot; &quot;Took too long.&quot;
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Undo / Update Rating</h3>
              <p className="pattern-card__intro">
                Users may change their rating if they later reassess an output; the UI should support toggling or re-rating.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Archived or Deleted Content</h3>
              <p className="pattern-card__intro">
                Feedback should persist in logs even if the original content is archived, with appropriate redaction or truncation for privacy.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">No-Learning Environments</h3>
              <p className="pattern-card__intro">
                In environments where learning is disabled, feedback can still route to admins or product teams, but microcopy must not imply real-time personalization.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and participation.
              </p>
            </div>
          </div>

          <div className="antipattern-container">
            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mandatory Feedback Dialogs</h3>
                  <p className="antipattern-subtitle">Blocking the workflow with &quot;Rate this before continuing.&quot;</p>
                </div>
              </div>
              <p className="antipattern-description">
                Blocking the workflow with mandatory rating dialogs creates frustration and reduces trust. Users will click randomly just to proceed.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make feedback optional and non-blocking. Capture what you can without friction.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Complex Forms</h3>
                  <p className="antipattern-subtitle">Long surveys or multi-step forms after each interaction.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Long surveys or multi-step forms after each interaction discourage honest feedback and reduce participation rates dramatically.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Start with one click. Offer optional enrichment that can be skipped.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous Icons Without Labels</h3>
                  <p className="antipattern-subtitle">Using only icons without text or tooltips.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using only icons (e.g., faces, stars) without text or tooltips can lead to misinterpretation of meaning across cultures and contexts.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide accessible labels, tooltips, or text alongside icons.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Negative Feedback</h3>
                  <p className="antipattern-subtitle">No acknowledgment, no repair, no change over time.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If negative ratings have no visible effect—no acknowledgment, no repair, no change over time—the pattern becomes performative and erodes trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Acknowledge feedback, offer inline repair, and show improvement over time.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overfitting to Vocal Minorities</h3>
                  <p className="antipattern-subtitle">Overreacting to a small number of non-representative ratings.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Overreacting to a small number of ratings from a non-representative group can degrade the experience for others; aggregation and segmentation are essential.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use proper statistical methods, segmentation, and cohort analysis before making changes.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Blurring Scope Boundaries</h3>
                  <p className="antipattern-subtitle">Suggesting a single rating will &quot;fix the model&quot; everywhere.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Suggesting that a single rating will &quot;fix the model&quot; or &quot;improve all responses everywhere&quot; creates unrealistic expectations and potential legal risk.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Be precise about what feedback affects: this conversation, this workspace, or product-wide improvements.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How feedback controls apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Strategy Co-Pilot</h3>
              <p className="pattern-card__intro">B2B Analytics Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>The agent generates a quarterly business narrative</li>
                <li>The analyst gives a thumbs down, selects &quot;Missed constraints,&quot; and enters &quot;Ignored profitability targets&quot;</li>
              </ul>
              <p className="pattern-card__label">Response</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent acknowledges the constraint, regenerates with profitability clearly highlighted</li>
                <li>Offers to remember &quot;profitability targets as non-negotiable&quot; for planning tasks in this workspace</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Sales Assistant</h3>
              <p className="pattern-card__intro">CRM Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A sales rep receives an AI-generated email draft</li>
                <li>Marks it as &quot;Not helpful&quot; with the &quot;Too formal&quot; tag</li>
              </ul>
              <p className="pattern-card__label">Response</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The assistant regenerates with a more conversational tone</li>
                <li>Proposes setting &quot;Conversational tone&quot; as a default preference for that rep&apos;s outbound communications</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Code Assistant</h3>
              <p className="pattern-card__intro">Developer Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A developer rates a code suggestion with a thumbs down</li>
                <li>Tags &quot;Incorrect logic&quot; and &quot;Security concern&quot;</li>
              </ul>
              <p className="pattern-card__label">Response</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The feedback routes to a higher-priority review bucket</li>
                <li>The assistant immediately regenerates with safer patterns and explicit reasoning about the change</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Support Bot</h3>
              <p className="pattern-card__intro">B2C Web App</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A customer marks a bot answer as &quot;Not helpful&quot;</li>
                <li>Selects &quot;Did not resolve my issue&quot;</li>
              </ul>
              <p className="pattern-card__label">Response</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The system follows up with: &quot;Would a human agent be more helpful?&quot;</li>
                <li>Escalates the conversation with the transcript and rating attached</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Placement & Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Place feedback controls consistently near AI outputs (messages, documents, run results) without obstructing main actions.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide a minimal, always-available primary reaction control (e.g., thumbs up/down) for quick evaluation.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Feedback Flow</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>On reaction, open a small, non-blocking interface for tags and optional text; do not make it mandatory.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Offer inline repair options after negative feedback that map to specific, controllable changes (length, tone, scope, constraints).</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Communication & Scope</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Clearly communicate what feedback will influence (current response, future preferences, product improvement) and at what scope.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Log feedback with rich context (task type, role, tags, timestamps) and expose aggregate insights to product and operations teams.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement accessibility best practices for icons, labels, keyboard navigation, and screen readers.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide safe handling and routing for sensitive tags (e.g., &quot;Unsafe,&quot; &quot;Bias,&quot; &quot;Security risk&quot;) with escalation paths where required.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Iteration & Improvement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Support editing or undoing feedback to reflect changes in judgment.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Regularly review feedback data and close the loop by improving models, prompts, UX flows, and help content.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
