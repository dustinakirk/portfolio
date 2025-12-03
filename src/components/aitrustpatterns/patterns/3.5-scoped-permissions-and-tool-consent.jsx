import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Shield, Lock, RefreshCcw, X, Check, Activity, AlertTriangle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const SCOPED_PERMISSIONS_SEO = {
  title: "Scoped Permissions & Tool Consent - AI Trust Pattern",
  description: "Explicit, granular permission flows that define what an AI agent can access or do, for how long, and with which tools, in a way that is understandable, reviewable, and revocable.",
  keywords: ["AI permissions", "tool consent", "scoped access", "AI trust", "agentic UX", "permission flows", "revocable access", "AI governance", "enterprise AI"],
  canonicalPath: "/agentic_ai_patterns/scoped-permissions-tool-consent"
};

// Interactive Demo Component
function ScopedPermissionsDemo() {
  const [step, setStep] = useState('initial'); // initial, modal, granted, revoked
  const [selectedScope, setSelectedScope] = useState('incident');
  const [capabilities, setCapabilities] = useState({
    read: true,
    write: false
  });

  const handleReset = () => {
    setStep('initial');
    setSelectedScope('incident');
    setCapabilities({ read: true, write: false });
  };

  const handleGrant = () => {
    setStep('granted');
  };

  const toggleCapability = (cap) => {
    setCapabilities(prev => ({ ...prev, [cap]: !prev[cap] }));
  };

  return (
    <div className="sp-demo">
      <style>{`
        /* Reset & Base */
        .sp-demo {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1e293b;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          height: 650px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* Header */
        .sp-demo__header {
          background-color: #ffffff;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .sp-demo__title {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sp-demo__description {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
          max-width: 600px;
        }

        .sp-demo__reset {
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #64748b;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .sp-demo__reset:hover {
          background-color: #f1f5f9;
          color: #334155;
        }

        /* Layout */
        .sp-demo__body {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        /* Chat Area */
        .sp-demo .sp-chat {
          flex: 2;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e2e8f0;
          transition: border-right 0.3s;
        }

        /* Remove border when sidebar is hidden */
        .sp-demo .sp-chat:last-child {
            border-right: none;
        }

        .sp-demo .sp-chat__feed {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sp-demo .sp-chat__message {
          display: flex;
          gap: 12px;
          max-width: 85%;
        }

        .sp-demo .sp-chat__message--ai {
          align-self: flex-start;
        }

        .sp-demo .sp-chat__message--user {
          align-self: flex-start;
          flex-direction: row;
        }

        .sp-demo .sp-chat__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sp-demo .sp-chat__avatar--ai {
          background-color: #eff6ff;
          color: #2563eb;
        }

        .sp-demo .sp-chat__avatar--user {
          background-color: #f1f5f9;
          color: #64748b;
        }

        .sp-demo .sp-chat__bubble {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
        }

        .sp-demo .sp-chat__bubble--ai {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          border-top-left-radius: 2px;
        }

        .sp-demo .sp-chat__bubble--user {
          background-color: #2563eb;
          color: #ffffff;
          border-top-left-radius: 2px;
        }

        /* Request Card (Embedded in Chat) */
        .sp-demo .sp-request-card {
          margin-top: 12px;
          border: 1px solid #bfdbfe;
          background-color: #eff6ff;
          border-radius: 8px;
          padding: 16px;
        }

        .sp-demo .sp-request-card__header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #1e40af;
          margin-bottom: 8px;
        }

        .sp-demo .sp-request-card__text {
          font-size: 13px;
          color: #1e3a8a;
          margin-bottom: 12px;
        }

        .sp-demo .sp-request-card__button {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .sp-demo .sp-request-card__button:hover {
          background-color: #1d4ed8;
        }

        /* Grant Confirmation Pill */
        .sp-demo .sp-grant-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 13px;
          color: #166534;
          margin-top: 8px;
        }

        /* Sidebar (Right Panel) */
        .sp-demo .sp-sidebar {
          flex: 1;
          background-color: #f8fafc;
          border-left: 1px solid #e2e8f0;
          max-width: 340px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: sp-slideInRight 0.3s ease-out;
        }

        @keyframes sp-slideInRight {
          from { transform: translateX(100%); width: 0; opacity: 0; }
          to { transform: translateX(0); width: 340px; opacity: 1; }
        }

        .sp-demo .sp-sidebar__empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #94a3b8;
          text-align: center;
          padding: 24px;
          font-size: 13px;
        }

        /* Panel Content (Formerly Modal) */
        .sp-demo .sp-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sp-demo .sp-panel__header {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sp-demo .sp-panel__title {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sp-demo .sp-panel__body {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }

        .sp-demo .sp-panel__footer {
          padding: 16px 24px;
          background-color: white;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          position: sticky;
          bottom: 0;
        }

        /* Form Components */
        .sp-demo .sp-form-section {
          margin-bottom: 24px;
        }

        .sp-demo .sp-form-section__label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        /* Radio Group */
        .sp-demo .sp-radio-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sp-demo .sp-radio-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sp-demo .sp-radio-item:hover {
          border-color: #94a3b8;
        }

        .sp-demo .sp-radio-item--selected {
          border-color: #2563eb;
          background-color: #f0f9ff;
        }

        .sp-demo .sp-radio-item__input {
          margin-top: 3px;
        }

        .sp-demo .sp-radio-item__content {
          display: flex;
          flex-direction: column;
        }

        .sp-demo .sp-radio-item__title {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
        }

        .sp-demo .sp-radio-item__desc {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
          line-height: 1.4;
        }

        /* Checkbox Group */
        .sp-demo .sp-check-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sp-demo .sp-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #334155;
          cursor: pointer;
        }

        /* Warning Box */
        .sp-demo .sp-warning-box {
          background-color: #fffbeb;
          border: 1px solid #fcd34d;
          border-radius: 6px;
          padding: 12px;
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: #92400e;
          align-items: flex-start;
          line-height: 1.4;
        }

        /* Buttons */
        .sp-demo .sp-btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          border: 1px solid transparent;
        }

        .sp-demo .sp-btn--secondary {
          background: white;
          border: 1px solid #cbd5e1;
          color: #475569;
        }

        .sp-demo .sp-btn--secondary:hover {
          background: #f1f5f9;
        }

        .sp-demo .sp-btn--primary {
          background: #2563eb;
          color: white;
        }

        .sp-demo .sp-btn--primary:hover {
          background: #1d4ed8;
        }

        .sp-demo .sp-btn-icon {
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }
        .sp-demo .sp-btn-icon:hover {
            background-color: #f1f5f9;
            color: #334155;
        }

        .sp-demo .sp-panel__intro {
          font-size: 13px;
          line-height: 1.5;
          color: #475569;
          margin-bottom: 24px;
        }

      `}</style>

      {/* Header */}
      <header className="sp-demo__header">
        <div>
          <h2 className="sp-demo__title">
            Scoped Permissions & Tool Consent
          </h2>
          <p className="sp-demo__description">
            Experience how an AI agent requests granular permissions for sensitive actions (e.g. Incident Manager). <strong>Click &quot;Review & Grant Access&quot; in the chat to see the pattern.</strong>
          </p>
        </div>
        <button className="sp-demo__reset" onClick={handleReset}>
          <RefreshCcw size={14} />
          Reset Demo
        </button>
      </header>

      {/* Body */}
      <div className="sp-demo__body">

        {/* Chat Section */}
        <section className="sp-chat">
          <div className="sp-chat__feed">
            {/* Context Message */}
            <div className="sp-chat__message sp-chat__message--user">
              <div className="sp-chat__avatar sp-chat__avatar--user">
                <span>JD</span>
              </div>
              <div className="sp-chat__bubble sp-chat__bubble--user">
                We&apos;re seeing high latency on the checkout service. Can you investigate?
              </div>
            </div>

            {/* AI Diagnosis */}
            <div className="sp-chat__message sp-chat__message--ai">
              <div className="sp-chat__avatar sp-chat__avatar--ai">
                <Activity size={18} />
              </div>
              <div className="sp-chat__bubble sp-chat__bubble--ai">
                <p>I&apos;ve analyzed the logs. The latency corresponds with a deployment of <code>payment-service:v2.4</code>. I recommend silencing the noisy &quot;High Latency&quot; alert in <strong>Incident Manager</strong> while we rollback, to reduce alert fatigue.</p>

                {/* Embedded Consent Request */}
                {step === 'initial' && (
                  <div className="sp-request-card">
                    <div className="sp-request-card__header">
                      <Lock size={14} />
                      Permission Required
                    </div>
                    <div className="sp-request-card__text">
                      To proceed, the AI needs temporary <strong>write access</strong> to the Incident Manager to update alert rules.
                    </div>
                    <button className="sp-request-card__button" onClick={() => setStep('modal')}>
                      Review & Grant Access
                    </button>
                  </div>
                )}

                {/* Granted State */}
                {step === 'granted' && (
                  <div className="sp-grant-pill">
                    <Check size={14} />
                    <span>Access granted: <strong>Incident Manager (Write)</strong> for <strong>Incident Scope</strong></span>
                  </div>
                )}

                 {/* Revoked State */}
                 {step === 'revoked' && (
                  <div className="sp-grant-pill" style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca', color: '#991b1b' }}>
                    <X size={14} />
                    <span>Access to Incident Manager was revoked.</span>
                  </div>
                )}
              </div>
            </div>

            {step === 'granted' && (
              <div className="sp-chat__message sp-chat__message--ai">
                <div className="sp-chat__avatar sp-chat__avatar--ai">
                  <Activity size={18} />
                </div>
                <div className="sp-chat__bubble sp-chat__bubble--ai">
                  Understood. I have muted the alert rule <code>checkout-latency-high</code> for the duration of this incident. Proceeding with rollback analysis.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sidebar / Panel Area */}
        {step === 'modal' && (
          <aside className="sp-sidebar">
            <div className="sp-panel">
                <div className="sp-panel__header">
                    <h3 className="sp-panel__title">
                        <Shield size={18} style={{ color: '#2563eb' }} />
                        Grant Access
                    </h3>
                    <button className="sp-btn-icon" onClick={() => setStep('initial')}>
                        <X size={18} />
                    </button>
                </div>

                <div className="sp-panel__body">
                    <p className="sp-panel__intro">
                        The AI Agent is requesting permission to access the <strong>Incident Manager</strong> to manage alerts for the current outage.
                    </p>

                    {/* Scope Selection */}
                    <div className="sp-form-section">
                        <label className="sp-form-section__label">Duration & Scope</label>
                        <div className="sp-radio-group">
                            <label className={`sp-radio-item ${selectedScope === 'action' ? 'sp-radio-item--selected' : ''}`}>
                            <input
                                type="radio"
                                name="scope"
                                className="sp-radio-item__input"
                                checked={selectedScope === 'action'}
                                onChange={() => setSelectedScope('action')}
                            />
                            <div className="sp-radio-item__content">
                                <span className="sp-radio-item__title">This action only</span>
                                <span className="sp-radio-item__desc">Expires immediately after the task is complete.</span>
                            </div>
                            </label>

                            <label className={`sp-radio-item ${selectedScope === 'incident' ? 'sp-radio-item--selected' : ''}`}>
                            <input
                                type="radio"
                                name="scope"
                                className="sp-radio-item__input"
                                checked={selectedScope === 'incident'}
                                onChange={() => setSelectedScope('incident')}
                            />
                            <div className="sp-radio-item__content">
                                <span className="sp-radio-item__title">This incident (#INC-492)</span>
                                <span className="sp-radio-item__desc">Expires when the incident is resolved.</span>
                            </div>
                            </label>

                            <label className={`sp-radio-item ${selectedScope === 'workspace' ? 'sp-radio-item--selected' : ''}`}>
                            <input
                                type="radio"
                                name="scope"
                                className="sp-radio-item__input"
                                checked={selectedScope === 'workspace'}
                                onChange={() => setSelectedScope('workspace')}
                            />
                            <div className="sp-radio-item__content">
                                <span className="sp-radio-item__title">This workspace</span>
                                <span className="sp-radio-item__desc">Valid until manually revoked in settings.</span>
                            </div>
                            </label>
                        </div>
                    </div>

                    {/* Capabilities */}
                    <div className="sp-form-section">
                        <label className="sp-form-section__label">Capabilities</label>
                        <div className="sp-check-group">
                            <label className="sp-check-item">
                            <input
                                type="checkbox"
                                checked={capabilities.read}
                                onChange={() => toggleCapability('read')}
                                disabled
                            />
                            Read Incidents
                            </label>
                            <label className="sp-check-item">
                            <input
                                type="checkbox"
                                checked={capabilities.write}
                                onChange={() => toggleCapability('write')}
                            />
                            Update Rules (Write)
                            </label>
                        </div>
                    </div>

                    {/* Risk Hint */}
                    {capabilities.write && (
                        <div className="sp-warning-box">
                            <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                            <span>
                            <strong>Risk Warning:</strong> &quot;Update Rules&quot; capability allows the agent to silence notifications or change routing logic.
                            </span>
                        </div>
                    )}
                </div>

                <div className="sp-panel__footer">
                    <button className="sp-btn sp-btn--secondary" onClick={() => setStep('initial')}>
                        Deny
                    </button>
                    <button className="sp-btn sp-btn--primary" onClick={handleGrant}>
                        Grant Access
                    </button>
                </div>
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}

export default function ScopedPermissionsToolConsentPattern() {
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
            <span className="pattern-header__index">3.5</span>
            <div>
              <h1 className="pattern-header__title">Scoped Permissions & Tool Consent</h1>
              <p className="pattern-header__subtitle">
                Explicit, granular permission flows that define what an AI agent can access or do, for how long, and with which tools, in a way that is understandable, reviewable, and revocable.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.5" patternTitle="Scoped Permissions & Tool Consent" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Scoped Permissions & Tool Consent defines how an AI agent requests, receives, and uses access to sensitive tools, systems, and data. The pattern makes the agent&apos;s operating envelope explicit: which tools it may use, what it may do with them, and how long those capabilities remain active.
            </p>
            <p className="pattern-body">
              In agentic AI workflows, the agent often needs to call APIs, write to third‑party systems, or access private data sources. Without clear consent flows, this can feel opaque and unsafe, especially in enterprise environments with strict compliance requirements.
            </p>
            <p className="pattern-body">
              This pattern introduces structured, scoped permissions that balance autonomy with control, and embeds revocability directly into the experience. Key elements include:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Which tools</span> the agent may use</li>
              <li><span className="pattern-body--bold">What it may do</span> with them (read, write, delete, deploy)</li>
              <li><span className="pattern-body--bold">How long</span> those capabilities remain active</li>
              <li><span className="pattern-body--bold">How to revoke</span> access at any time</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Scoped permissions example">
          <ScopedPermissionsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic systems that act on real infrastructure, customer data, or financial systems create a new category of risk: an AI agent can take actions faster and at greater scale than a human, often based on probabilistic reasoning. Without clear, scoped permissions:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Sensitive tools feel &quot;magically accessible&quot;</span> – creating anxiety and eroding trust, especially in regulated or multi‑tenant environments.
              </li>
              <li>
                <span className="pattern-body--bold">Users cannot see or remember what the agent is allowed to do</span> – for how long, or where to revoke access, making control feel abstract and brittle.
              </li>
              <li>
                <span className="pattern-body--bold">Admins lack enforceable guardrails and auditability</span> – putting compliance, data governance, and safety policies at risk.
              </li>
              <li>
                <span className="pattern-body--bold">Agents become over‑ or under‑privileged</span> – too powerful by default, or blocked from helpful actions, creating a poor balance between safety and utility.
              </li>
            </ul>
            <p className="pattern-body">
              Scoped Permissions & Tool Consent addresses these issues by making access explicit, narrow, time‑bounded, and reversible, while giving admins and end‑users clear levers of control.
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
                  <span className="pattern-body--bold">The agent can call tools that modify state</span> – CRMs, ticketing, CI/CD, financial systems, HRIS, marketing platforms.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent accesses sensitive or regulated data</span> – PII, PHI, production logs, customer databases, legal documents.
                </li>
                <li>
                  <span className="pattern-body--bold">Enterprise buyers need provable auditability</span> – and admin governance over what AI can do within the organization.
                </li>
                <li>
                  <span className="pattern-body--bold">Tasks can be completed in multiple ways</span> – read‑only analysis vs. write/execute, and the system should let users choose.
                </li>
                <li>
                  <span className="pattern-body--bold">External tools require OAuth or similar authorization</span> – and access needs to be framed in terms of what the AI will do with it.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent operates purely on data already visible in the current page, with no persistent side effects.</li>
                <li>The tool integration is <span className="pattern-body--bold">read‑only, low‑risk</span>, and already clearly represented in the UI.</li>
                <li>The system only uses internal APIs that mirror the user&apos;s existing capabilities.</li>
                <li>A simple inline notice (&quot;The AI can see the contents of this page&quot;) is sufficient.</li>
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
                This pattern typically has two main surfaces: inline consent prompts that appear in context, and a centralized permissions dashboard for review and revocation.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Inline Consent Prompts
              </h3>
              <p className="pattern-card__intro">
                Appear within agentic workflows when elevated capabilities are needed.
              </p>
              <ul className="pattern-card__list">
                <li>Within a chat message: &quot;To complete this task, the AI needs temporary write access to…&quot;</li>
                <li>Inline card or banner embedded in the agent&apos;s response</li>
                <li>Primary CTA summarizing the requested access</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System‑Level Modals or Panels</h3>
              <p className="pattern-card__intro">
                Focused UI for reviewing permission implications.
              </p>
              <ul className="pattern-card__list">
                <li>Modal triggered from the agent&apos;s request</li>
                <li>Slide‑over panel preserving task context</li>
                <li>Clear scope options and capability controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Settings & Admin Console</h3>
              <p className="pattern-card__intro">
                Centralized management for policies and grants.
              </p>
              <ul className="pattern-card__list">
                <li>Under &quot;AI & Automations&quot; or &quot;Security & Access&quot;</li>
                <li>Default policies: &quot;Agents can never deploy to production&quot;</li>
                <li>&quot;Permissions&quot; tab showing all agents and tools with current access</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Permissions Dashboard</h3>
              <p className="pattern-card__intro">
                Review and revoke prior grants.
              </p>
              <ul className="pattern-card__list">
                <li>Sortable list of current grants by agent, tool, or workspace</li>
                <li>Clear actions: Revoke, Downgrade scope, Inspect audit history</li>
                <li>Exportable views for compliance</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Permission Grant</h3>
            <p className="pattern-card__intro">
              A scoped authorization connecting an actor (agent + user identity) to a tool or data source with clearly defined capabilities and duration.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Incident responder AI → PagerDuty (write) for incident #1234&quot;</li>
                  <li>&quot;Sales copilot → Salesforce (read opportunities) this session&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>Explains what the agent will do with access, not just what it could theoretically do</li>
                  <li>&quot;The AI may create or update incidents related to this outage and mute relevant alerts.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Actions:</span> Grant, Deny, Edit scope, Revoke</li>
                  <li><span className="pattern-body--bold">Scope:</span> task‑only, workflow/incident, session, workspace</li>
                  <li><span className="pattern-body--bold">Capabilities:</span> read vs. write, specific operations</li>
                  <li><span className="pattern-body--bold">Metadata:</span> Created by, expires at, risk level, audit refs</li>
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
                How permission requests, grants, and revocations flow through the system.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial State (Least Privilege)</h3>
              <ul className="pattern-card__list">
                <li>Agents start with access only to safe, clearly implied tools (internal search, summarization).</li>
                <li>No default write access to external systems or critical infrastructure.</li>
                <li>Admin policies define which tools are blocked, allowed, or require consent.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Triggering a Permission Request</h3>
              <ul className="pattern-card__list">
                <li>Agent identifies minimum required capabilities for the task.</li>
                <li>System checks existing grants and admin policies.</li>
                <li>Three paths: Silent allow, Consent prompt, or Hard block.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Consent Request UI</h3>
              <ul className="pattern-card__list">
                <li>Clearly state which agent, tool, and purpose.</li>
                <li>Present scoped options: task‑only, workflow, session, persistent.</li>
                <li>Offer capability controls and explain risks.</li>
                <li>Primary: &quot;Grant with selected scope&quot; / Secondary: &quot;Deny&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Agent Execution Under Constraints</h3>
              <ul className="pattern-card__list">
                <li>System issues scoped token enforcing selected capabilities and expiration.</li>
                <li>UI surfaces active permission context (pill or banner).</li>
                <li>Agent receives only minimum capabilities; failures handled gracefully.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Expiration & Auto‑Reduction</h3>
              <ul className="pattern-card__list">
                <li>Task‑level grants expire when incident resolves or job completes.</li>
                <li>Session‑level grants expire at logout or timeout.</li>
                <li>Long‑lived grants may require periodic re‑confirmation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Review & Revocation</h3>
              <ul className="pattern-card__list">
                <li>Dashboard shows current grants grouped by agent, tool, workspace.</li>
                <li>Actions: Revoke immediately, Downgrade scope, Inspect audit history.</li>
                <li>Revoked grants fail closed; agent adapts its plan.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Logging & Audit Trail</h3>
            <ul className="pattern-card__list">
              <li>All permission events logged: grant, scope, capabilities, context, tool calls, revocations.</li>
              <li>Admin views allow filtering by risk level, time window, agent/tool.</li>
              <li>Supports investigations and governance reviews with full audit history.</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              Lead with purpose, use specific verbs, and make the &quot;Deny&quot; path feel legitimate and supported.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;To rewrite this contract using company templates, the AI needs read access to legal templates in Confluence.&quot;</li>
                  <li>&quot;This task only — access ends once this action is completed.&quot;</li>
                  <li>&quot;High impact: can change customer‑visible settings.&quot;</li>
                  <li>&quot;Org policy: AI cannot deploy to production directly.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Manage resources&quot; (vague, doesn&apos;t specify actions)</li>
                  <li>&quot;Access your tools&quot; (without naming them)</li>
                  <li>&quot;The AI needs permission to help you&quot; (coercive framing)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Specific Verbs</h3>
                <ul className="pattern-card__list">
                  <li>&quot;create,&quot; &quot;update,&quot; &quot;delete,&quot; &quot;deploy,&quot; &quot;send email&quot;</li>
                  <li>Avoid generic &quot;manage&quot; or &quot;access&quot;</li>
                  <li>Pair technical terms with short explanations</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain Scope & Risk</h3>
                <ul className="pattern-card__list">
                  <li>Concise descriptions for each scope option</li>
                  <li>Risk badges for high‑impact scopes</li>
                  <li>Stronger emphasis for destructive actions</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Handle Denial Gracefully
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>When denied, agent clarifies what cannot be done and offers alternatives</li>
                  <li>Show denied state explicitly</li>
                  <li>Avoid repeatedly re‑prompting after denial</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations</p>
              <p className="pattern-body pattern-body--narrow">
                Adaptations for different risk levels, organizational structures, and use cases.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">High‑Risk / Destructive Tools</h3>
              <ul className="pattern-card__list">
                <li>Require narrow scopes by default (task‑only or single‑resource)</li>
                <li>Multi‑step confirmations or human approval gates</li>
                <li>Consider dual control (two approvers) for finance or HR workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Org‑Level vs. Individual Consent</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Org‑level:</span> Admins grant/deny whole categories for all users or groups</li>
                <li><span className="pattern-body--bold">Individual:</span> End‑users grant additional scope within org policy limits</li>
                <li>Make it clear which type of consent governs each grant</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Async & Scheduled Agent Actions</h3>
              <ul className="pattern-card__list">
                <li>Permission scopes reference task pattern and time horizon</li>
                <li>Indicate that agent can act without an open session</li>
                <li>Provide clear controls to pause or disable scheduled behaviors</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">B2B vs. B2C Adaptations</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">B2B:</span> Stronger admin governance, audit logs, granular capability toggles</li>
                <li><span className="pattern-body--bold">B2C:</span> Simpler language, fewer scopes, default to task‑only</li>
                <li>Separate consent for &quot;data used for improving models&quot; where appropriate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusivity</p>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-sm">
            <ul className="pattern-card__list">
              <li>Communicate all critical states and risks via <span className="pattern-body--bold">text</span>, not only color or iconography</li>
              <li>Support screen readers with clear labels, descriptions on toggles, and proper modal announcements</li>
              <li>Avoid jargon‑heavy phrasing; pair technical terms with brief explanations</li>
              <li>Localize consent text carefully, especially for legal/regulatory nuances and risk descriptions</li>
            </ul>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building this pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Model & Enforcement</h3>
              <ul className="pattern-card__list">
                <li>Represent Permission Grants as structured objects: <code>agent_id</code>, <code>user_id</code>, <code>tool_id</code>, <code>capabilities</code>, <code>scope_type</code>, <code>expires_at</code></li>
                <li>Enforce scope <span className="pattern-body--bold">server‑side</span>, independent of client UI</li>
                <li>Store immutable history of changes for audit and debugging</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration with External Tools</h3>
              <ul className="pattern-card__list">
                <li>Map OAuth scopes to internal capabilities transparently</li>
                <li>Avoid requesting broader external scopes than necessary</li>
                <li>Compensate for coarse external scopes via internal controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin Policies & Configuration</h3>
              <ul className="pattern-card__list">
                <li>Allow admins to configure tool visibility, default scopes by role, and approval flows</li>
                <li>Provide policy simulation: &quot;As a Support Agent, the AI can: read tickets, propose replies, but not close tickets&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & UX</h3>
              <ul className="pattern-card__list">
                <li>Pre‑compute which tools may be needed per workflow to avoid latency</li>
                <li>Remember preferred scope choices within org policy limits</li>
                <li>Provide &quot;repeat last safe configuration&quot; option with clear indication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                Track these to evaluate and refine the pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Consent Prompts</h3>
              <ul className="pattern-card__list">
                <li>Number of prompts shown per session/workflow</li>
                <li>Grant vs. deny rates per tool, scope, and capability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Task completion rate with vs. without granted access</li>
                <li>Time to resolution for workflows requiring elevated access</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety & Governance</h3>
              <ul className="pattern-card__list">
                <li>Frequency of revocations (and reasons when collected)</li>
                <li>Incidents where agent actions were disputed or rolled back</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Sentiment & Trust</h3>
              <ul className="pattern-card__list">
                <li>Qualitative feedback on comfort level with AI actions</li>
                <li>Correlation between clear consent flows and adoption of higher‑impact automations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti‑patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and safety.
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
                  <h3 className="antipattern-title">Blanket &quot;Superuser&quot; Access</h3>
                  <p className="antipattern-subtitle">Wide, long‑lived access to many tools in a single step.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Granting broad access for convenience undermines the purpose of scoped consent and increases risk exposure.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Request specific, narrow scopes for each tool and task.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Vague or Misleading Language</h3>
                  <p className="antipattern-subtitle">Phrases like &quot;manage resources&quot; without specifying actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Generic language creates uncertainty and potential for misunderstanding about what access actually means.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use specific verbs: &quot;create,&quot; &quot;update,&quot; &quot;delete,&quot; &quot;deploy.&quot;</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Revocation Controls</h3>
                  <p className="antipattern-subtitle">Requiring deep navigation to revoke access.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When revocation is hard to find, it feels like a dark pattern and degrades trust in the entire system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make revocation accessible from permission chips, dashboards, and settings.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Permission Spam</h3>
                  <p className="antipattern-subtitle">Prompting repeatedly for small actions or re‑prompting after denial.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Excessive prompts lead to fatigue and disengagement; users start ignoring or blindly approving.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Adapt agent behavior after denial; escalate to admin flow if needed.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Scope Escalation</h3>
                  <p className="antipattern-subtitle">Increasing capabilities or scope without a new consent step.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Expanding access without explicit consent is a serious trust violation that can have legal implications.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always require explicit consent for any scope increase.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Fail‑Open Behavior</h3>
                  <p className="antipattern-subtitle">Allowing actions when policy or grant checks fail.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If a check fails, the system should default to blocking the action, not allowing it.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Fail closed on errors; surface the issue and require explicit resolution.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Defaults & Consent</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Agents start with least‑privilege defaults and require explicit consent for elevated access.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Permission prompts clearly explain who, what, why, for how long, and with what risk.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Scope & Capabilities</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Scope options (task, workflow, session, persistent) are presented as clear, mutually exclusive choices.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Capabilities (read, write, delete, deploy, send) are configurable at a granular level where relevant.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Management & Revocation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>A centralized permissions dashboard exists for review and revocation, with clear labels and audit history.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Revocation and expiration are enforced server‑side and reflected clearly in the UI.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Admin policies define tool‑level defaults and boundaries, especially for high‑risk actions.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Consent flows avoid coercive language and permission spam; &quot;deny&quot; is a first‑class path.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Observability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Logging and observability cover grants, tool calls, revocations, and policy interactions.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Metrics monitor both safety (incidents, revocations) and UX impact (completion rates, prompt frequency).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
