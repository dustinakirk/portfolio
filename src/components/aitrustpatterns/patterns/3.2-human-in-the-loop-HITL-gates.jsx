import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// ============================================================================
// HITL GATES DEMO COMPONENT
// Self-contained demo with BEM-namespaced styles to prevent conflicts
// ============================================================================

const hitlDemoStyles = `
  .hitl-demo {
    --hitl-color-bg: #f8fafc;
    --hitl-color-surface: #ffffff;
    --hitl-color-border: #e2e8f0;
    --hitl-color-text-primary: #0f172a;
    --hitl-color-text-secondary: #64748b;
    --hitl-color-primary: #3b82f6;
    --hitl-color-primary-dark: #2563eb;
    --hitl-color-success: #22c55e;
    --hitl-color-success-bg: #f0fdf4;
    --hitl-color-danger: #ef4444;
    --hitl-color-danger-bg: #fef2f2;
    --hitl-color-warning: #f59e0b;
    --hitl-color-warning-bg: #fffbeb;
    --hitl-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --hitl-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --hitl-radius-md: 8px;
    --hitl-radius-lg: 12px;
    --hitl-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .hitl-demo__showcase {
    font-family: var(--hitl-font-family);
    background: var(--hitl-color-surface);
    border: 1px solid var(--hitl-color-border);
    border-radius: var(--hitl-radius-lg);
    width: 100%;
    max-width: 920px;
    box-shadow: var(--hitl-shadow-md);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .hitl-demo__header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--hitl-color-border);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #fff;
  }

  .hitl-demo__title {
    margin: 0 0 0.5rem 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--hitl-color-text-primary);
  }

  .hitl-demo__description {
    margin: 0;
    font-size: 0.875rem;
    color: var(--hitl-color-text-secondary);
    line-height: 1.5;
    max-width: 85%;
  }

  .hitl-demo__reset-btn {
    background: transparent;
    border: 1px solid var(--hitl-color-border);
    padding: 0.5rem 0.75rem;
    border-radius: var(--hitl-radius-md);
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--hitl-color-text-secondary);
    transition: all 0.2s;
    font-family: var(--hitl-font-family);
  }

  .hitl-demo__reset-btn:hover {
    background-color: var(--hitl-color-bg);
    color: var(--hitl-color-text-primary);
  }

  .hitl-demo__chat {
    background-color: var(--hitl-color-bg);
    min-height: 400px;
    max-height: 600px;
    overflow-y: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hitl-demo__message {
    display: flex;
    gap: 0.75rem;
    max-width: 90%;
    animation: hitlFadeIn 0.3s ease-out;
  }

  .hitl-demo__message--user {
    align-self: flex-end;
    flex-direction: row-reverse;
  }

  .hitl-demo__message--ai {
    align-self: flex-start;
  }

  .hitl-demo__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    flex-shrink: 0;
  }

  .hitl-demo__avatar--user {
    background-color: var(--hitl-color-primary);
    color: white;
  }

  .hitl-demo__avatar--ai {
    background-color: #e0e7ff;
    color: #4338ca;
  }

  .hitl-demo__bubble {
    background-color: var(--hitl-color-surface);
    padding: 0.75rem 1rem;
    border-radius: var(--hitl-radius-md);
    border: 1px solid var(--hitl-color-border);
    font-size: 0.925rem;
    line-height: 1.5;
    box-shadow: var(--hitl-shadow-sm);
    color: var(--hitl-color-text-primary);
  }

  .hitl-demo__message--user .hitl-demo__bubble {
    background-color: var(--hitl-color-primary);
    color: white;
    border: none;
  }

  .hitl-demo__gate {
    background-color: var(--hitl-color-surface);
    border: 1px solid var(--hitl-color-border);
    border-radius: var(--hitl-radius-md);
    overflow: hidden;
    margin-top: 0.5rem;
    width: 100%;
    max-width: 420px;
    box-shadow: var(--hitl-shadow-sm);
    transition: all 0.3s ease;
  }

  .hitl-demo__gate--pending {
    border-left: 4px solid var(--hitl-color-warning);
  }

  .hitl-demo__gate--approved {
    border-left: 4px solid var(--hitl-color-success);
  }

  .hitl-demo__gate--rejected {
    border-left: 4px solid var(--hitl-color-danger);
    opacity: 0.8;
  }

  .hitl-demo__gate-header {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--hitl-color-border);
    background-color: #fafafa;
  }

  .hitl-demo__gate-title {
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--hitl-color-text-primary);
  }

  .hitl-demo__gate-badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border-radius: 99px;
    font-weight: 700;
    letter-spacing: 0.025em;
  }

  .hitl-demo__gate-badge--pending {
    background-color: var(--hitl-color-warning-bg);
    color: #b45309;
  }

  .hitl-demo__gate-badge--approved {
    background-color: var(--hitl-color-success-bg);
    color: #15803d;
  }

  .hitl-demo__gate-badge--rejected {
    background-color: var(--hitl-color-danger-bg);
    color: #b91c1c;
  }

  .hitl-demo__gate-body {
    padding: 1rem;
  }

  .hitl-demo__gate-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }

  .hitl-demo__gate-label {
    color: var(--hitl-color-text-secondary);
  }

  .hitl-demo__gate-value {
    font-weight: 500;
    text-align: right;
    color: var(--hitl-color-text-primary);
  }

  .hitl-demo__gate-value--warning {
    color: var(--hitl-color-warning);
  }

  .hitl-demo__gate-preview {
    background-color: var(--hitl-color-bg);
    padding: 0.75rem;
    border-radius: var(--hitl-radius-md);
    margin-top: 0.75rem;
    font-size: 0.8rem;
    color: var(--hitl-color-text-secondary);
    border: 1px dashed var(--hitl-color-border);
  }

  .hitl-demo__gate-footer {
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--hitl-color-border);
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    background-color: var(--hitl-color-surface);
  }

  .hitl-demo__btn {
    padding: 0.5rem 1rem;
    border-radius: var(--hitl-radius-md);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid transparent;
    font-family: var(--hitl-font-family);
  }

  .hitl-demo__btn--secondary {
    background-color: white;
    border-color: var(--hitl-color-border);
    color: var(--hitl-color-text-secondary);
  }

  .hitl-demo__btn--secondary:hover {
    background-color: var(--hitl-color-bg);
  }

  .hitl-demo__btn--danger {
    background-color: white;
    border-color: #fecaca;
    color: var(--hitl-color-danger);
  }

  .hitl-demo__btn--danger:hover {
    background-color: var(--hitl-color-danger-bg);
  }

  .hitl-demo__btn--primary {
    background-color: var(--hitl-color-primary);
    color: white;
    border-color: var(--hitl-color-primary);
  }

  .hitl-demo__btn--primary:hover {
    background-color: var(--hitl-color-primary-dark);
  }

  .hitl-demo__icon {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: text-bottom;
  }

  .hitl-demo__success-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #15803d;
  }

  .hitl-demo__success-icon {
    color: var(--hitl-color-success);
  }

  @keyframes hitlFadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .hitl-demo__header {
      flex-direction: column;
      gap: 1rem;
    }

    .hitl-demo__description {
      max-width: 100%;
    }

    .hitl-demo__chat {
      padding: 1rem;
      min-height: 350px;
    }

    .hitl-demo__message {
      max-width: 95%;
    }

    .hitl-demo__gate {
      max-width: 100%;
    }

    .hitl-demo__gate-footer {
      flex-wrap: wrap;
    }

    .hitl-demo__btn {
      flex: 1 1 auto;
      min-width: 80px;
    }
  }
`;

// Warning Icon SVG component
const WarningIcon = () => (
  <svg
    className="hitl-demo__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// Checkmark Icon SVG component
const CheckmarkIcon = () => (
  <svg
    className="hitl-demo__icon hitl-demo__success-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function HITLGatesDemo() {
  const [gateStatus, setGateStatus] = useState('pending'); // 'pending' | 'approved' | 'rejected'
  const [messages, setMessages] = useState([]);

  const handleApprove = useCallback(() => {
    setGateStatus('approved');
    setTimeout(() => {
      setMessages([{
        type: 'success',
        content: 'Campaign approved. Sending to 2,405 recipients...'
      }]);
    }, 600);
  }, []);

  const handleReject = useCallback(() => {
    setGateStatus('rejected');
    setTimeout(() => {
      setMessages([{
        type: 'info',
        content: "Action cancelled. I've saved the email as a draft if you wish to revisit it later."
      }]);
    }, 400);
  }, []);

  const handleReset = useCallback(() => {
    setGateStatus('pending');
    setMessages([]);
  }, []);

  const handleEdit = useCallback(() => {
    alert('Opens a modal to edit email content.');
  }, []);

  const getGateClass = () => {
    const baseClass = 'hitl-demo__gate';
    return `${baseClass} hitl-demo__gate--${gateStatus}`;
  };

  const getBadgeClass = () => {
    const baseClass = 'hitl-demo__gate-badge';
    return `${baseClass} hitl-demo__gate-badge--${gateStatus}`;
  };

  const getBadgeText = () => {
    switch (gateStatus) {
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      default: return 'Pending';
    }
  };

  return (
    <div className="hitl-demo">
      <style>{hitlDemoStyles}</style>

      <div className="hitl-demo__showcase">
        <header className="hitl-demo__header">
          <div>
            <h2 className="hitl-demo__title">UX Pattern: Human-in-the-Loop Gate</h2>
            <p className="hitl-demo__description">
              The AI pauses execution for high-risk actions (like bulk emails), requiring explicit user review and approval.
            </p>
          </div>
          <button className="hitl-demo__reset-btn" onClick={handleReset}>
            Reset Demo
          </button>
        </header>

        <div className="hitl-demo__chat">
          {/* User Message */}
          <div className="hitl-demo__message hitl-demo__message--user">
            <div className="hitl-demo__avatar hitl-demo__avatar--user">U</div>
            <div className="hitl-demo__bubble">
              Draft a launch email for the &quot;Enterprise Pro&quot; feature and prepare to send it to the qualified leads list.
            </div>
          </div>

          {/* AI Message with Gate */}
          <div className="hitl-demo__message hitl-demo__message--ai">
            <div className="hitl-demo__avatar hitl-demo__avatar--ai">AI</div>
            <div className="hitl-demo__bubble">
              I&apos;ve drafted the email based on the &quot;New Feature&quot; template.
              <br /><br />
              Since this involves sending to external recipients, <strong>approval is required</strong> before I can send it.

              {/* HITL Gate Component */}
              <div className={getGateClass()}>
                <div className="hitl-demo__gate-header">
                  <span className="hitl-demo__gate-title">
                    <WarningIcon />
                    Action Request
                  </span>
                  <span className={getBadgeClass()}>{getBadgeText()}</span>
                </div>

                <div className="hitl-demo__gate-body">
                  <div className="hitl-demo__gate-row">
                    <span className="hitl-demo__gate-label">Action</span>
                    <span className="hitl-demo__gate-value">Send Email Campaign</span>
                  </div>
                  <div className="hitl-demo__gate-row">
                    <span className="hitl-demo__gate-label">Recipients</span>
                    <span className="hitl-demo__gate-value">2,405 Leads</span>
                  </div>
                  <div className="hitl-demo__gate-row">
                    <span className="hitl-demo__gate-label">Risk Level</span>
                    <span className="hitl-demo__gate-value hitl-demo__gate-value--warning">Medium (External)</span>
                  </div>

                  <div className="hitl-demo__gate-preview">
                    <strong>Subject:</strong> Unlocking Enterprise Power<br /><br />
                    Hi {"{{first_name}}"}, we are thrilled to announce the availability of our new...
                  </div>
                </div>

                {gateStatus === 'pending' && (
                  <div className="hitl-demo__gate-footer">
                    <button className="hitl-demo__btn hitl-demo__btn--secondary" onClick={handleEdit}>
                      Edit
                    </button>
                    <button className="hitl-demo__btn hitl-demo__btn--danger" onClick={handleReject}>
                      Reject
                    </button>
                    <button className="hitl-demo__btn hitl-demo__btn--primary" onClick={handleApprove}>
                      Approve &amp; Send
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Follow-up messages */}
          {messages.map((msg, index) => (
            <div key={index} className="hitl-demo__message hitl-demo__message--ai">
              <div className="hitl-demo__avatar hitl-demo__avatar--ai">AI</div>
              <div className="hitl-demo__bubble">
                {msg.type === 'success' ? (
                  <div className="hitl-demo__success-message">
                    <CheckmarkIcon />
                    <span>{msg.content}</span>
                  </div>
                ) : (
                  <span style={{ color: 'var(--hitl-color-text-secondary)' }}>{msg.content}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// END HITL GATES DEMO COMPONENT
// ============================================================================

// SEO metadata for this pattern page
export const HITL_GATES_SEO = {
  title: "Human-in-the-Loop (HITL) Gates - AI Trust Pattern",
  description: "A pattern that pauses AI-driven actions at defined checkpoints so humans can review, edit, and approve high-impact steps before execution, maintaining safety, accountability, and trust.",
  keywords: [
    "human-in-the-loop",
    "HITL",
    "AI approval gates",
    "AI safety",
    "human oversight",
    "AI trust patterns",
    "agentic UX",
    "AI governance",
    "approval workflows",
    "AI control",
    "human review AI"
  ],
  canonicalPath: "/agentic_ai_patterns/human-in-the-loop-hitl-gates"
};

export default function HITLGatesPattern() {
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
            <span className="pattern-header__index">3.2</span>
            <div>
              <h1 className="pattern-header__title">Human-in-the-Loop (HITL) Gates</h1>
              <p className="pattern-header__subtitle">
                A pattern that pauses AI-driven actions at defined checkpoints so humans can review, edit, and approve high-impact steps before execution, maintaining safety, accountability, and trust.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.2" patternTitle="Human-in-the-Loop (HITL) Gates" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Human-in-the-Loop (HITL) Gates introduce explicit checkpoints where an AI agent must obtain human approval before performing a real-world action.
            </p>
            <p className="pattern-body">
              Instead of allowing an agent to autonomously send emails, push code, move money, or modify production data, this pattern interposes a structured review step. In agentic B2B and B2C web applications, HITL Gates typically appear as:
            </p>
            <ul className="pattern-list">
              <li>Inline request messages in a chat-style interface</li>
              <li>Approval cards or modals summarizing the pending action</li>
              <li>Dedicated &quot;Approvals&quot; views aggregating multiple pending gates</li>
              <li>Notifications (email, push, chat) for asynchronous approvals</li>
            </ul>
            <p className="pattern-body">
              The core value is <span className="pattern-body--bold">predictable, explainable control</span>. Stakeholders can rely on clear visibility into what the AI intends to do, the ability to edit or decline actions before any irreversible change, and organizational and regulatory alignment via auditable approval flows.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/3.2 human-in-the-loop.png"
              alt="Human-in-the-Loop Gates pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows an AI marketing agent that has prepared a bulk email campaign and is waiting at a human-in-the-loop gate before sending. The agent displays the campaign details for review and pauses for explicit human approval before proceeding with external communication.
            </p>
            <div className="pattern-demo-instructions">
              <p className="pattern-body--bold">How to interact with this demo:</p>
              <ol className="pattern-list pattern-list--numbered">
                <li>Review the pending email campaign details</li>
                <li>Click &quot;Approve &amp; Send&quot; to proceed or &quot;Reject&quot; to cancel</li>
                <li>Observe the confirmation message after your decision</li>
                <li>Use &quot;Reset Demo&quot; to start over</li>
              </ol>
            </div>
          </div>
          <div className="pattern-demo" aria-label="HITL Gates interactive demo">
            <HITLGatesDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit gates, agentic systems can feel opaque and risky:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unpredictable automation</span> – AI-driven tools may execute external actions (sending messages, making changes, calling APIs) in ways that feel sudden or surprising. Users are never entirely sure when &quot;suggest&quot; crosses the line into &quot;do.&quot;
              </li>
              <li>
                <span className="pattern-body--bold">High-stakes, irreversible consequences</span> – Mistakes in financial transactions, infrastructure changes, data deletion, or external communications can be costly, reputationally damaging, or non-recoverable.
              </li>
              <li>
                <span className="pattern-body--bold">Governance and compliance gaps</span> – Many organizations require approvals, maker–checker flows, or multi-party sign-off for particular actions. Purely autonomous AI conflicts with established risk controls and regulatory expectations.
              </li>
              <li>
                <span className="pattern-body--bold">Limited accountability and auditability</span> – When actions are taken automatically, it becomes hard to answer basic questions: Who approved this? Was anyone aware of the risk? Did the AI follow policy?
              </li>
              <li>
                <span className="pattern-body--bold">Cognitive overload from constant supervision</span> – Without structured gates, users may feel compelled to &quot;hover&quot; over the system, manually re-checking everything the AI touches, defeating the promise of automation.
              </li>
            </ul>
            <p className="pattern-body">
              HITL Gates address these issues by making AI autonomy conditional and observable, rather than absolute.
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
                  AI agents <span className="pattern-body--bold">perform actions affecting external systems</span> – CRMs, payment processors, infrastructure, HR tools, or customer communication channels.
                </li>
                <li>
                  Actions involve <span className="pattern-body--bold">high-impact domains</span> – finance, legal, security, healthcare, or regulated data processing.
                </li>
                <li>
                  <span className="pattern-body--bold">Irreversible or destructive actions</span> are possible – deleting data, canceling services, terminating access, rolling back production environments.
                </li>
                <li>
                  <span className="pattern-body--bold">Organizational policy or regulation</span> requires approvals or segregation of duties (SOX, GDPR, HIPAA, procurement rules).
                </li>
                <li>
                  During <span className="pattern-body--bold">early adoption of agentic workflows</span>, when building trust and establishing norms matters more than maximizing automation.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI operates <span className="pattern-body--bold">purely in read-only or advisory mode</span> – summarization, drafting internal notes, or suggesting fields not auto-applied.</li>
                <li>Actions are <span className="pattern-body--bold">low-stakes and easily reversible</span> – rearranging a personal dashboard or saving private drafts never auto-sent.</li>
                <li>The product already uses a <span className="pattern-body--bold">simple confirmation pattern</span> that is sufficient (&quot;Undo&quot; snackbars or lightweight dialogs) and no external systems are at risk.</li>
                <li>The action is <span className="pattern-body--bold">ephemeral and isolated</span> – temporarily filtering a view, running a non-expensive test query.</li>
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
                HITL Gates are built around a central object: the <span className="pattern-body--bold">Gate Request</span>. Each Gate Request represents a pending action the AI intends to perform and captures enough context for a human to make an informed decision.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                In-flow within chat
              </h3>
              <p className="pattern-card__intro">
                Inline gate message inside the conversation.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Approval required: Send this campaign to 142 recipients.&quot;</li>
                <li>Embedded card summarizing what will happen and why it is gated</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Dedicated Approvals Page</h3>
              <p className="pattern-card__intro">
                A section in navigation listing all open gate requests.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Approvals,&quot; &quot;Tasks,&quot; or &quot;Review queue&quot; navigation item</li>
                <li>Supports triage, filtering by risk, type, requester, or system</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System Notifications</h3>
              <p className="pattern-card__intro">
                Multi-channel alerts for asynchronous or time-sensitive approvals.
              </p>
              <ul className="pattern-card__list">
                <li>Email, push, or third-party integrations (Slack, Teams)</li>
                <li>Deep links back to the specific gate</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin & Policy Settings</h3>
              <p className="pattern-card__intro">
                Organization-level configuration for gate rules.
              </p>
              <ul className="pattern-card__list">
                <li>Security owners and admins define which actions must be gated</li>
                <li>Configure who can approve and what defaults apply</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Gate Request</h3>
            <p className="pattern-card__intro">
              Each Gate Request encapsulates the proposed action, risk context, and available decisions.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>&quot;Send Q4 performance survey to 3,214 customers.&quot;</li>
                  <li>&quot;Deploy version 2.4.1 to production cluster.&quot;</li>
                  <li>&quot;Export 5,012 customer records to external system.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>&quot;This action involves personal data and is gated by the Data Sharing policy.&quot;</li>
                  <li>&quot;Risk level: High. Updates a production configuration and may cause downtime.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Primary:</span> Approve, Reject, Edit, Save as draft, Escalate</li>
                  <li><span className="pattern-body--bold">Optional:</span> Approve all similar, Approve for session, Always approve this type, Snooze, View policy</li>
                </ul>
              </div>
            </div>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Actor:</span> Which agent or workflow initiated the action</li>
                  <li><span className="pattern-body--bold">Target:</span> Systems, objects, or users affected</li>
                  <li><span className="pattern-body--bold">Risk indicators:</span> Severity level, cost estimate, data sensitivity</li>
                  <li><span className="pattern-body--bold">Policy context:</span> Rule or policy that triggered the gate</li>
                  <li><span className="pattern-body--bold">Timing:</span> When the action will execute; expiration or timeout</li>
                  <li><span className="pattern-body--bold">Audit trail:</span> History of prior related approvals or rejections</li>
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
                From the system&apos;s perspective, each gated action passes through a defined lifecycle.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Action Identification</h3>
              <ul className="pattern-card__list">
                <li>The AI plans to perform an action (send emails, move funds, deploy code)</li>
                <li>A risk engine evaluates the action type, parameters, and context</li>
                <li>If the action meets gating criteria, a Gate Request is created</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Gate Creation & Pause</h3>
              <ul className="pattern-card__list">
                <li>The action transitions into a <span className="pattern-body--bold">pending</span> state</li>
                <li>System records intent, inputs, expected effects, and applicable policies</li>
                <li>The AI agent pauses, clearly communicating that progress is blocked</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Notification & Surfacing</h3>
              <ul className="pattern-card__list">
                <li>Gate Request appears in chat as an inline message with summary card</li>
                <li>Notifications sent to designated approver(s) via email, push, or integrated chat</li>
                <li>Time-sensitive actions clearly marked as urgent</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Review & Exploration</h3>
              <ul className="pattern-card__list">
                <li>Approver inspects summaries, previews, and metadata</li>
                <li>Content previews (email body, SQL, configuration diffs)</li>
                <li>Before/after comparisons and simulated effects</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Decision & Editing</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Approve once:</span> Action moves to execution</li>
                <li><span className="pattern-body--bold">Approve with edits:</span> Modify content or parameters first</li>
                <li><span className="pattern-body--bold">Reject:</span> Cancel the action with optional feedback</li>
                <li><span className="pattern-body--bold">Escalate:</span> Route to another role for review</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Execution or Cancellation</h3>
              <ul className="pattern-card__list">
                <li>Approved actions execute with progress indicators and final confirmation</li>
                <li>Rejected or expired actions are clearly labeled as canceled</li>
                <li>The AI agent adapts its next steps accordingly</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Logging, Audit, and Learning</h3>
            <ul className="pattern-card__list">
              <li>Decision details saved to audit log: timestamps, approver identity, edits, policy references</li>
              <li>System can propose refinements over time: suggest auto-approval for consistently approved low-risk actions</li>
              <li>Metrics and patterns inform governance, UX refinements, and ML models for risk estimation</li>
            </ul>
          </div>
        </section>

        {/* Risk Modeling & Gateable Action Types */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risk modeling & gateable actions</p>
              <p className="pattern-body pattern-body--narrow">
                A robust HITL design starts with a clear model of which actions can be gated and why.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Communication-related</h3>
              <ul className="pattern-card__list">
                <li>Sending emails, in-app messages, SMS, or social posts</li>
                <li>High risk when reaching external recipients or large lists</li>
                <li>Subject to regulatory constraints (anti-spam rules)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Financial</h3>
              <ul className="pattern-card__list">
                <li>Initiating payments, issuing refunds, moving funds</li>
                <li>Approving budgets over defined thresholds</li>
                <li>Cost estimates and impact projections</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Manipulation</h3>
              <ul className="pattern-card__list">
                <li>Deleting, redacting, or bulk-editing records</li>
                <li>Exporting or sharing datasets externally</li>
                <li>Modifying access rights or permissions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System & Configuration</h3>
              <ul className="pattern-card__list">
                <li>Deploying code or infrastructure changes</li>
                <li>Updating production configuration or feature flags</li>
                <li>Integrating with external APIs or third-party tools</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Legal & Compliance</h3>
              <ul className="pattern-card__list">
                <li>Signing or sending agreements and contracts</li>
                <li>Applying consent changes or compliance labels</li>
                <li>Retention rule modifications</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Resource-Intensive Operations</h3>
              <ul className="pattern-card__list">
                <li>Long-running or expensive computations</li>
                <li>Large data queries, model training jobs</li>
                <li>Bulk migrations that may incur cost or impact performance</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Configuration Levels</h3>
            <p className="pattern-card__intro">
              Gates can be configured at multiple levels to balance user autonomy with organizational policy.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Personal Preferences</p>
                <ul className="pattern-card__list">
                  <li>&quot;Always gate message sends to external recipients&quot;</li>
                  <li>&quot;Require approval for any transaction over $500&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Tool / Agent Defaults</p>
                <ul className="pattern-card__list">
                  <li>Pre-defined gating rules aligned with domain</li>
                  <li>DevOps agent must gate any production deployment</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Organizational Policies</p>
                <ul className="pattern-card__list">
                  <li>Centralized rules from security, compliance, or legal</li>
                  <li>Override individual preferences when necessary</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Configuration & governance</p>
              <p className="pattern-body pattern-body--narrow">
                To align with enterprise needs, HITL Gates benefit from a structured governance model.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Role-based Access Control</h3>
              <ul className="pattern-card__list">
                <li>Separate who can initiate actions from who can approve them</li>
                <li>Support multiple approver roles (Manager, Security Officer, Finance, Legal)</li>
                <li>Maker-checker workflows for sensitive operations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy Authoring & Management</h3>
              <ul className="pattern-card__list">
                <li>Visual or rule-based editors for defining gate conditions</li>
                <li>Thresholds (amount, volume, number of records)</li>
                <li>Data classifications (PII, confidential)</li>
                <li>Environments (production vs test)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy Scope & Inheritance</h3>
              <ul className="pattern-card__list">
                <li>Organization, business unit, team, or project level</li>
                <li>Agent or tool level</li>
                <li>User group or role level</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regional & Regulatory Constraints</h3>
              <ul className="pattern-card__list">
                <li>Region-specific rules (e.g., stricter gates for EU-based data)</li>
                <li>Mandatory gates that cannot be bypassed by end users</li>
                <li>Change management for policy modifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction Details */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction details</p>
              <p className="pattern-body pattern-body--narrow">
                Design considerations for triggering, reviewing, and handling gates across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Triggering & Notification</h3>
              <ul className="pattern-card__list">
                <li>Clearly indicate when workflow transitions from &quot;AI is thinking&quot; to &quot;Approval required&quot;</li>
                <li>Use unambiguous language: &quot;Approval required to deploy changes to production&quot;</li>
                <li>Support multiple notification channels (in-app, email, push, messaging)</li>
                <li>Indicate urgency and deadlines: &quot;Pending until 17:00 UTC; will cancel if not approved&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Review & Approval Interface</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Summaries & previews:</span> High-level cards with counts and key fields</li>
                <li><span className="pattern-body--bold">Diff views:</span> Before/after comparison for text, settings, or data</li>
                <li><span className="pattern-body--bold">Risk indicators:</span> Color-coded badges or labels for risk tiers</li>
                <li><span className="pattern-body--bold">Interactive elements:</span> Expand/collapse, inline editing, simulations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Bulk & Session-Based Handling</h3>
              <ul className="pattern-card__list">
                <li>Group similar actions into a single gate where possible</li>
                <li>Allow session-level approvals within defined safety limits</li>
                <li>&quot;Allow this agent to send internal-only status updates for the next 60 minutes&quot;</li>
                <li>Clearly indicate when session-based approval is in effect</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error Handling & Edge Cases</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">If denied:</span> AI acknowledges and suggests alternatives</li>
                <li><span className="pattern-body--bold">If timeout:</span> Cancel action, keep draft, notify expiration</li>
                <li><span className="pattern-body--bold">If service unavailable:</span> Fail-safe (block high-risk) not fail-open</li>
                <li><span className="pattern-body--bold">Sandbox mode:</span> Simulated gates for training without real execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & State Design */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Content & state design</p>
              <p className="pattern-body pattern-body--narrow">
                Key states and microcopy guidelines for communicating gate status clearly.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Pending</h3>
              <ul className="pattern-card__list">
                <li>Gate has been created and awaits decision</li>
                <li>Clear status chip: &quot;Pending approval&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Approved</h3>
              <ul className="pattern-card__list">
                <li>Decision made; action executed or scheduled</li>
                <li>Status chip: &quot;Approved – Executed at [time]&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Rejected</h3>
              <ul className="pattern-card__list">
                <li>Action canceled with optional rationale</li>
                <li>Status chip: &quot;Rejected – Reason: [short note]&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Draft</h3>
              <ul className="pattern-card__list">
                <li>Content saved but not yet submitted</li>
                <li>Often used for emails or documents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Expired / Timed Out</h3>
              <ul className="pattern-card__list">
                <li>Approval window passed without decision</li>
                <li>Status chip: &quot;Expired – Action canceled; draft retained&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Auto-approved / Auto-blocked</h3>
              <ul className="pattern-card__list">
                <li>Action passed or blocked by pre-defined rules</li>
                <li>Annotated: &quot;Auto-approved under policy [name]&quot;</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Microcopy Guidelines</h3>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Approval required to send 5 emails to 142 customers (external recipients).&quot;</li>
                  <li>&quot;High-risk action: Export of 5,012 customer records to an external storage system.&quot;</li>
                  <li>&quot;Blocked by policy &apos;PII export rules&apos;. Contact Data Governance for assistance.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Action requires approval&quot; (vague, no context)</li>
                  <li>&quot;Are you sure?&quot; (doesn&apos;t explain risk or impact)</li>
                  <li>&quot;Error: Blocked&quot; (no explanation or next steps)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusive design</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure the gate interface is usable by everyone.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard & Screen Reader</h3>
              <ul className="pattern-card__list">
                <li>Fully navigable via keyboard with visible focus states</li>
                <li>Semantic markup (headings, ARIA roles) for modals and cards</li>
                <li>Descriptive labels: &quot;Approve this deployment,&quot; &quot;Reject email campaign&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual & Cognitive</h3>
              <ul className="pattern-card__list">
                <li>Do not rely on color alone to indicate risk; pair with text labels and icons</li>
                <li>Short, clear sentences that are easy to parse</li>
                <li>Mobile-friendly: summaries first, expandable details on demand</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Analytics & Tuning */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Analytics & tuning</p>
              <p className="pattern-body pattern-body--narrow">
                Key metrics to track for improving gate effectiveness over time.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Volume & Rates</h3>
              <ul className="pattern-card__list">
                <li>Volume of actions reaching gates by type and risk level</li>
                <li>Approval vs rejection rates, and reasons for rejection</li>
                <li>Time-to-approval, broken down by role, team, or region</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Patterns & Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Actions most frequently auto-approved by policy or rejected after review</li>
                <li>Incidents avoided or mitigated (mis-sent campaigns caught at gate)</li>
                <li>Usage of &quot;always approve&quot; or session-based approvals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine the effectiveness of HITL Gates.
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
                  <h3 className="antipattern-title">Gating Everything</h3>
                  <p className="antipattern-subtitle">Every action requires approval, regardless of risk.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Over-gating leads to notification fatigue, rubber-stamping, and eventual disregard of real risks.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Gate based on actual risk assessment; auto-approve low-risk, routine actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Risk Context</h3>
                  <p className="antipattern-subtitle">Gate appears with just an &quot;Approve&quot; button and no explanation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Presenting a gate without context undermines its purpose. Approvers cannot make informed decisions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show what action is being taken, why it&apos;s gated, and what the impact will be.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Pressure to Approve</h3>
                  <p className="antipattern-subtitle">Copy or layout subtly pushes approvers toward accepting.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Dark patterns that shame or pressure approvers into accepting high-risk actions defeat the safety purpose of gates.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Present approve and reject options with equal visual weight; make rejection easy and judgment-free.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unpredictable Gating</h3>
                  <p className="antipattern-subtitle">The same action is sometimes gated and sometimes not.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Inconsistent gating erodes trust. Users cannot form reliable mental models of when oversight is applied.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Define clear, consistent rules. If conditions change, explain why the gate behavior differs.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Auto-Approving High-Risk</h3>
                  <p className="antipattern-subtitle">Convenience trumps safety for dangerous actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing &quot;always approve&quot; for high-risk actions without limits creates a bypass that can lead to serious incidents.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">High-risk actions must always be gated by policy. Auto-approve options only for low-risk, reversible actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Revocation Path</h3>
                  <p className="antipattern-subtitle">&quot;Always approve&quot; options without a way to review and revoke.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Persistent approvals without visibility or management controls create hidden risk that compounds over time.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide a clear surface for reviewing and revoking all persistent approval rules.</span>
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
                How HITL Gates apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Campaign Approval</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>AI marketing agent drafts a five-email sequence for a product launch</li>
                <li>System evaluates: external recipients, large audience, compliance implications</li>
                <li>Gate triggered with review card showing subject lines, previews, audience segments, risk badges</li>
              </ul>
              <p className="pattern-card__label">Resolution</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Marketing owner edits subject lines, corrects compliance disclaimer</li>
                <li>Approves all five emails in a single batch</li>
                <li>Enables session-level approval for follow-up messages</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Finance: Invoice Batch Approval</h3>
              <p className="pattern-card__intro">Finance Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Finance assistant agent identifies outstanding invoices and drafts payments</li>
                <li>Actions exceeding $5,000 threshold are gated by policy</li>
                <li>Finance manager receives notification, reviews card listing invoices, vendors, amounts</li>
              </ul>
              <p className="pattern-card__label">Resolution</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Manager approves most payments in bulk</li>
                <li>Rejects two invoices, noting &quot;Disputed amount – under review&quot;</li>
                <li>AI updates understanding of similar exceptions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps: Production Deployment</h3>
              <p className="pattern-card__intro">Engineering Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>DevOps agent proposes rolling out a new service version</li>
                <li>Generates deployment plan: environments, changes, expected impact</li>
                <li>High-risk gate triggered as action touches production</li>
              </ul>
              <p className="pattern-card__label">Resolution</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Engineering lead reviews config diff, impacted services, downtime risk</li>
                <li>Approves deployment but schedules for maintenance window</li>
                <li>System logs approval and executes at scheduled time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Access & Export</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Support assistant requests access to detailed customer logs for troubleshooting</li>
                <li>Logs contain personal identifiers, fall under stricter access rules</li>
                <li>Gate redirects request to data owner for review</li>
              </ul>
              <p className="pattern-card__label">Resolution</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Data owner reviews data classifications and purpose</li>
                <li>Approves limited access for defined duration, with sensitive fields redacted</li>
                <li>Access grant automatically revoked on expiration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Risk & Policy Model</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Enumerate all action types the AI can perform across integrated systems</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Define risk tiers and gating criteria per action type</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement a policy engine that can evaluate actions and trigger gates</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Gate Object & UI</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Design a consistent Gate Request object with labels, descriptions, metadata, and controls</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide inline gate cards in chat and a centralized Approvals view</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement diff and preview components for content, configuration, and data changes</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Decision Flows</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Support approve, reject, edit, escalate, draft, and schedule flows</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Enable batch and session-level approvals with clear scopes and limits</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide options to set and later revoke persistent approval/reject rules</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Notifications & Routing</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Integrate multi-channel notifications for time-sensitive gates</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement routing rules based on roles, teams, and policies</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Handle timeouts with safe defaults and visible status updates</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Logging, Audit, & Analytics</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Log every gate event with timestamps, decision, approver, edits, and relevant policy</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Expose audit trails to administrators and relevant stakeholders</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Track key metrics (rates, timings, patterns) to refine thresholds and UX</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility & Reliability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Ensure all gating surfaces are accessible, keyboard-navigable, and screen-reader friendly</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Design fail-safe behaviors when policy or approval services are degraded</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide sandbox/test modes to demonstrate gating in low-risk contexts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
