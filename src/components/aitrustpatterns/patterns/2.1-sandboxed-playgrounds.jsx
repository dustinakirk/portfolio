import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const SANDBOXED_PLAYGROUNDS_SEO = {
  title: "Sandboxed Playgrounds - AI Trust Pattern",
  description: "Interactive, consequence-free environments where users can rehearse AI-driven workflows and see hypothetical impact before enabling them on real data or systems.",
  keywords: ["AI sandbox", "simulation mode", "dry run", "AI trust", "safe AI testing", "AI preview", "consequence-free AI", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/sandboxed-playgrounds"
};

// Interactive demo component - Sandboxed Playgrounds
function SandboxedPlaygroundsDemo() {
  const [step, setStep] = useState('initial'); // 'initial' | 'loading' | 'results' | 'applying' | 'success'
  const [resetBtnHovered, setResetBtnHovered] = useState(false);
  const [sandboxBtnHovered, setSandboxBtnHovered] = useState(false);
  const [discardBtnHovered, setDiscardBtnHovered] = useState(false);
  const [promoteBtnHovered, setPromoteBtnHovered] = useState(false);

  // Handle "Test in Sandbox" click
  const handleStartSandbox = () => {
    setStep('loading');
    setTimeout(() => {
      setStep('results');
    }, 1500);
  };

  // Handle "Run Merge" click
  const handlePromote = () => {
    setStep('applying');
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  // Handle "Discard & Exit" click
  const handleDiscard = () => {
    setStep('initial');
  };

  // Reset demo
  const handleReset = () => {
    setStep('initial');
  };

  // Styles object - fully self-contained
  const styles = {
    // Demo wrapper
    demoWrapper: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxWidth: '800px',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      margin: '0 auto',
    },
    demoHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#f9fafb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    demoTitle: {
      margin: '0 0 8px 0',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#111827',
    },
    demoDescription: {
      margin: 0,
      color: '#6b7280',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      maxWidth: '600px',
    },
    resetBtn: {
      backgroundColor: resetBtnHovered ? '#f3f4f6' : 'white',
      border: '1px solid',
      borderColor: resetBtnHovered ? '#9ca3af' : '#d1d5db',
      color: '#374151',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'all 0.2s',
      flexShrink: 0,
    },

    // Agent interface
    agentInterface: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '500px',
      backgroundColor: '#fff',
      position: 'relative',
    },
    agentHeader: {
      padding: '16px 24px',
      borderBottom: '1px solid #f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    agentTitle: {
      fontWeight: 600,
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: 0,
    },
    agentStatus: {
      fontSize: '0.75rem',
      padding: '4px 8px',
      borderRadius: '99px',
      backgroundColor: '#e5e7eb',
      color: '#4b5563',
      fontWeight: 500,
    },

    // Chat area
    chatArea: {
      flexGrow: 1,
      padding: '24px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },

    // Messages
    message: {
      display: 'flex',
      gap: '12px',
      maxWidth: '85%',
    },
    messageAi: {
      alignSelf: 'flex-start',
    },
    messageUser: {
      alignSelf: 'flex-end',
      flexDirection: 'row-reverse',
    },
    messageAvatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#e0e7ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      flexShrink: 0,
    },
    messageBubble: {
      padding: '12px 16px',
      borderRadius: '12px',
      fontSize: '0.9375rem',
      lineHeight: 1.5,
    },
    messageBubbleAi: {
      backgroundColor: '#f3f4f6',
      color: '#1f2937',
      borderTopLeftRadius: 0,
    },
    messageBubbleUser: {
      backgroundColor: '#2563eb',
      color: 'white',
      borderTopRightRadius: 0,
    },

    // Buttons
    btnSandbox: {
      backgroundColor: sandboxBtnHovered ? '#ffedd5' : '#fff7ed',
      color: '#c2410c',
      border: '1px solid #fdba74',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: step === 'initial' ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s',
      opacity: step === 'initial' ? 1 : 0.6,
    },
    btnSecondaryDisabled: {
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      color: '#9ca3af',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    btnDiscard: {
      backgroundColor: discardBtnHovered ? '#f9fafb' : 'white',
      border: '1px solid #d1d5db',
      color: '#374151',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    btnProduction: {
      backgroundColor: promoteBtnHovered ? '#047857' : '#059669',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: step === 'applying' ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s',
      opacity: step === 'applying' ? 0.6 : 1,
    },

    // Sandbox container
    sandboxContainer: {
      border: '2px dashed #f59e0b',
      backgroundColor: '#fffbeb',
      borderRadius: '8px',
      marginTop: '12px',
      overflow: 'hidden',
      opacity: step === 'applying' || step === 'success' ? 0.6 : 1,
    },
    sandboxBanner: {
      backgroundColor: '#f59e0b',
      color: 'white',
      padding: '8px 16px',
      fontSize: '0.875rem',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    sandboxContent: {
      padding: '16px',
    },

    // Loading state
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      color: '#92400e',
    },

    // Simulation results
    simulationSummary: {
      fontWeight: 500,
      color: '#92400e',
      marginBottom: '16px',
    },
    sampleLabel: {
      fontSize: '0.875rem',
      margin: '0 0 8px 0',
      color: '#4b5563',
    },

    // Diff table
    diffTable: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '0.875rem',
      backgroundColor: 'white',
      border: '1px solid #fcd34d',
      borderRadius: '6px',
      overflow: 'hidden',
    },
    diffTableTh: {
      textAlign: 'left',
      padding: '8px 12px',
      backgroundColor: '#fef3c7',
      color: '#92400e',
      fontWeight: 600,
    },
    diffTableTd: {
      padding: '8px 12px',
      borderTop: '1px solid #fcd34d',
      color: '#4b5563',
    },
    diffBadgeRemoved: {
      display: 'inline-block',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      textDecoration: 'line-through',
    },
    diffBadgeAdded: {
      display: 'inline-block',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: '#dcfce7',
      color: '#166534',
    },
    diffBadgeNeutral: {
      display: 'inline-block',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: '#f3f4f6',
      color: '#4b5563',
    },

    // Actions footer
    sandboxActions: {
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid #fcd34d',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
    },

    // Success message
    successText: {
      color: '#059669',
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Sandboxed Playgrounds demo">
      {/* Scoped keyframe animations */}
      <style>{`
        @keyframes sandbox-fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sandbox-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .sandbox-animate-fade { animation: sandbox-fadeIn 0.3s ease-out; }
        .sandbox-spinner {
          border: 2px solid #f3f3f3;
          border-top: 2px solid #f59e0b;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: sandbox-spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
          vertical-align: middle;
        }
      `}</style>

      {/* Demo Header */}
      <div style={styles.demoHeader}>
        <div>
          <h2 style={styles.demoTitle}>Example: Sandboxed Playground</h2>
          <p style={styles.demoDescription}>
            This example demonstrates a B2B SaaS agent offering a &quot;Sandbox Mode&quot; to safely test a bulk cleanup operation.
            Note the visual distinction (amber/yellow) indicating simulation mode.
          </p>
        </div>
        <button
          style={styles.resetBtn}
          onClick={handleReset}
          onMouseEnter={() => setResetBtnHovered(true)}
          onMouseLeave={() => setResetBtnHovered(false)}
        >
          Reset Demo
        </button>
      </div>

      {/* Agent Interface */}
      <div style={styles.agentInterface}>
        {/* App Header */}
        <div style={styles.agentHeader}>
          <div style={styles.agentTitle}>
            <span>Data Quality Agent</span>
          </div>
          <div style={styles.agentStatus}>Production Environment</div>
        </div>

        {/* Chat Area */}
        <div style={styles.chatArea}>
          {/* Initial AI Message */}
          <div style={{ ...styles.message, ...styles.messageAi }} className="sandbox-animate-fade">
            <div style={styles.messageAvatar}>AI</div>
            <div style={{ ...styles.messageBubble, ...styles.messageBubbleAi }}>
              I&apos;ve analyzed your &quot;Enterprise Leads&quot; database. I found <strong>142 records</strong> that appear to be duplicates based on email and fuzzy name matching.
              <br /><br />
              Would you like me to merge these duplicates automatically?
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <button
                  style={styles.btnSandbox}
                  onClick={step === 'initial' ? handleStartSandbox : undefined}
                  onMouseEnter={() => setSandboxBtnHovered(true)}
                  onMouseLeave={() => setSandboxBtnHovered(false)}
                  disabled={step !== 'initial'}
                >
                  Test in Sandbox
                </button>
                <button
                  style={styles.btnSecondaryDisabled}
                  disabled
                  title="Please test in sandbox first"
                >
                  Merge Now (Risky)
                </button>
              </div>
            </div>
          </div>

          {/* User Message - appears after clicking sandbox */}
          {step !== 'initial' && (
            <div style={{ ...styles.message, ...styles.messageUser }} className="sandbox-animate-fade">
              <div style={{ ...styles.messageBubble, ...styles.messageBubbleUser }}>
                Test in Sandbox
              </div>
            </div>
          )}

          {/* AI Response with Sandbox Container */}
          {step !== 'initial' && (
            <div style={{ ...styles.message, ...styles.messageAi }} className="sandbox-animate-fade">
              <div style={styles.messageAvatar}>AI</div>
              <div style={{ ...styles.messageBubble, ...styles.messageBubbleAi, width: '100%' }}>
                <p style={{ margin: '0 0 12px 0' }}>I am initializing a secure sandbox environment. No changes will be written to your live database.</p>

                <div style={styles.sandboxContainer} className="sandbox-animate-fade">
                  <div style={styles.sandboxBanner}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    SANDBOX MODE
                  </div>
                  <div style={styles.sandboxContent}>
                    {/* Loading State */}
                    {step === 'loading' && (
                      <div style={styles.loadingContainer}>
                        <span className="sandbox-spinner"></span>
                        Simulating merge operation on 142 records...
                      </div>
                    )}

                    {/* Results State */}
                    {(step === 'results' || step === 'applying' || step === 'success') && (
                      <div>
                        <div style={styles.simulationSummary}>
                          Simulation Complete: 142 records processed successfully.
                        </div>

                        <p style={styles.sampleLabel}>Sample of proposed changes:</p>

                        <table style={styles.diffTable}>
                          <thead>
                            <tr>
                              <th style={styles.diffTableTh}>Record ID</th>
                              <th style={styles.diffTableTh}>Field</th>
                              <th style={styles.diffTableTh}>Before (Live)</th>
                              <th style={styles.diffTableTh}>After (Simulated)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={styles.diffTableTd}>#L-9921</td>
                              <td style={styles.diffTableTd}>Company</td>
                              <td style={styles.diffTableTd}><span style={styles.diffBadgeRemoved}>Acme Corp.</span></td>
                              <td style={styles.diffTableTd}><span style={styles.diffBadgeAdded}>Acme Inc.</span></td>
                            </tr>
                            <tr>
                              <td style={styles.diffTableTd}>#L-9921</td>
                              <td style={styles.diffTableTd}>Status</td>
                              <td style={styles.diffTableTd}>New</td>
                              <td style={styles.diffTableTd}>Merged (Master)</td>
                            </tr>
                            <tr>
                              <td style={styles.diffTableTd}>#L-4402</td>
                              <td style={styles.diffTableTd}>Action</td>
                              <td style={styles.diffTableTd}><span style={styles.diffBadgeNeutral}>None</span></td>
                              <td style={styles.diffTableTd}><span style={styles.diffBadgeRemoved}>Deleted (Duplicate)</span></td>
                            </tr>
                          </tbody>
                        </table>

                        {step === 'results' && (
                          <div style={styles.sandboxActions}>
                            <button
                              style={styles.btnDiscard}
                              onClick={handleDiscard}
                              onMouseEnter={() => setDiscardBtnHovered(true)}
                              onMouseLeave={() => setDiscardBtnHovered(false)}
                            >
                              Discard &amp; Exit
                            </button>
                            <button
                              style={styles.btnProduction}
                              onClick={handlePromote}
                              onMouseEnter={() => setPromoteBtnHovered(true)}
                              onMouseLeave={() => setPromoteBtnHovered(false)}
                            >
                              Run Merge
                            </button>
                          </div>
                        )}

                        {step === 'applying' && (
                          <div style={styles.sandboxActions}>
                            <button style={{ ...styles.btnProduction, cursor: 'not-allowed', opacity: 0.6 }} disabled>
                              Applying...
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Message - Run Merge */}
          {step === 'success' && (
            <div style={{ ...styles.message, ...styles.messageUser }} className="sandbox-animate-fade">
              <div style={{ ...styles.messageBubble, ...styles.messageBubbleUser }}>
                Run Merge
              </div>
            </div>
          )}

          {/* Success Message */}
          {step === 'success' && (
            <div style={{ ...styles.message, ...styles.messageAi }} className="sandbox-animate-fade">
              <div style={styles.messageAvatar}>AI</div>
              <div style={{ ...styles.messageBubble, ...styles.messageBubbleAi }}>
                <span style={styles.successText}>Success!</span>{' '}
                I have applied the changes to the live environment. 142 duplicate records have been merged.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SandboxedPlaygroundsPattern() {
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
            <span className="pattern-header__index">2.1</span>
            <div>
              <h1 className="pattern-header__title">Sandboxed Playgrounds</h1>
              <p className="pattern-header__subtitle">
                Interactive, consequence-free environments where users can rehearse AI-driven workflows and see hypothetical impact before enabling them on real data or systems.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.1" patternTitle="Sandboxed Playgrounds" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Sandboxed Playgrounds provide a safe environment where an agentic AI system behaves as if it were operating on production data and systems, but all actions are simulated.
            </p>
            <p className="pattern-body">
              The pattern allows users to experiment, refine prompts or configurations, and observe projected outcomes without any real-world side effects. In B2B and B2C web applications, this pattern typically appears around high-impact or automated capabilities, such as bulk updates, workflow automation, infrastructure changes, or external communications (emails, notifications, API calls).
            </p>
            <p className="pattern-body">
              The core idea is to let users calibrate trust and build a robust mental model of the agent&apos;s behavior before handing over real control.
            </p>
            <p className="pattern-body">
              A design example embedded into a product page could show:
            </p>
            <ul className="pattern-list">
              <li>A prominent <span className="pattern-body--bold">&quot;Start in Sandbox&quot;</span> button on the AI agent&apos;s first-run screen</li>
              <li>A clear <span className="pattern-body--bold">environment banner</span> at the top of the workspace: &quot;Sandbox mode: all actions are simulated; no changes are written to production.&quot;</li>
              <li>A panel where the agent proposes a plan and a <span className="pattern-body--bold">simulation result</span> view that displays counts of hypothetical changes and before/after values</li>
              <li>A primary action near the end of the flow: <span className="pattern-body--bold">&quot;Promote this configuration and run on live data&quot;</span> gated by confirmation and role-based permissions</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/2.1 sandboxed playgrounds.png"
              alt="Sandboxed Playgrounds pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Sandboxed playgrounds example">
          <SandboxedPlaygroundsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic AI systems can perform complex, large-scale actions on behalf of users. Without any form of safe rehearsal environment, several trust and adoption problems emerge:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Anxiety and slow adoption</span> – Users are unsure what the AI will actually do, and whether actions are reversible, which creates anxiety and slows adoption.
              </li>
              <li>
                <span className="pattern-body--bold">Learning on live data</span> – First contact with the AI happens directly in production, forcing users to &quot;learn by doing&quot; on live data, increasing the perceived and actual risk of mistakes.
              </li>
              <li>
                <span className="pattern-body--bold">Calibration failures</span> – Users struggle to calibrate the system&apos;s capabilities and limitations, leading either to over-trust (approving actions without scrutiny) or under-trust (refusing to use powerful features at all).
              </li>
            </ul>
            <p className="pattern-body">
              A sandboxed playground addresses these issues by separating <span className="pattern-body--bold">learning</span> from <span className="pattern-body--bold">impact</span>, so that mental models and configuration quality can improve before any real-world consequences occur.
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
                  <span className="pattern-body--bold">The AI agent can perform bulk or high-impact actions</span> – updating many records, deleting assets, sending communications, or modifying infrastructure.
                </li>
                <li>
                  <span className="pattern-body--bold">The domain has complex or opaque business rules</span> – pricing, eligibility, compliance where incorrect actions are costly or time-intensive to fix.
                </li>
                <li>
                  <span className="pattern-body--bold">The feature involves automated or scheduled execution</span> – background jobs, ongoing monitoring agents, auto-remediation.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-user, multi-tenant enterprise environments</span> – roles, approvals, and auditability are critical.
                </li>
                <li>
                  <span className="pattern-body--bold">Introducing AI to cautious customer bases</span> – customers previously burned by misconfigurations or wary of automation.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI agent is <span className="pattern-body--bold">purely assistive and non-destructive</span> – summarizing documents, suggesting search queries, or generating drafts that must always be manually applied.</li>
                <li>The system already includes <span className="pattern-body--bold">clear, item-level previews</span> and easy rollback for small, localized actions.</li>
                <li>The feature impact is <span className="pattern-body--bold">low-risk and easily reversible</span> – reordering items in a private view, personalizing local UI settings, or adding non-critical tags.</li>
                <li>The AI operates only on <span className="pattern-body--bold">temporary or disposable data</span> – exploratory datasets not tied to real production systems.</li>
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
                This pattern usually appears as an alternate environment or mode (Sandbox) that mirrors the main workflow of the AI agent while guaranteeing that no changes are applied to production systems.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: First-Run Experience
              </h3>
              <p className="pattern-card__intro">
                Onboarding flows for new AI agents expose sandbox as the default path.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Try in Sandbox&quot; or &quot;Start in Sandbox&quot; as default option</li>
                <li>Setup wizards include a &quot;Simulation&quot; step before &quot;Enable in production&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Critical Feature Zones</h3>
              <p className="pattern-card__intro">
                Inline links or buttons near risky actions.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Simulate this workflow in sandbox&quot; near bulk-update or &quot;Auto-apply&quot; toggles</li>
                <li>Sandbox toggles within advanced settings (e.g., &quot;Simulation only&quot; vs. &quot;Apply changes&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Educational Surfaces</h3>
              <p className="pattern-card__intro">
                Banners or callouts recommending sandbox mode.
              </p>
              <ul className="pattern-card__list">
                <li>Appears when a user first navigates to an AI-driven area</li>
                <li>Links from documentation, tooltips, or walkthrough tours that open sandboxed examples</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Org Settings</h3>
              <p className="pattern-card__intro">
                Admin pages for controlling sandbox behavior.
              </p>
              <ul className="pattern-card__list">
                <li>Default to sandbox mode for new agents or teams</li>
                <li>Require sandbox testing before production enablement</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Sandbox Session</h3>
            <p className="pattern-card__intro">
              The primary object is a Sandbox Session (or simulated run) that represents one execution of the AI agent in a no-impact environment.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Sandbox run – sample customer data&quot;</li>
                  <li>&quot;Simulation: AI assistant on staging leads (5k records)&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Simulates closing stale opportunities older than 90 days.&quot;</li>
                  <li>&quot;Tests automatic remediation of failed deployments over the last 24 hours.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Run / re-run simulation</li>
                  <li>Adjust parameters: prompt, filters, rules, thresholds</li>
                  <li>Inspect results: expand rows, view diffs, filter by action type</li>
                  <li>Promote configuration from sandbox to production</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Creator, date/time, and environment (sandbox vs. production)</li>
                  <li>Dataset or resource scope (table, project, tenant, repository)</li>
                  <li>Status: Not run, Running, Completed, Needs review, Approved</li>
                  <li>Summary metrics: estimated items impacted, types of actions</li>
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
                The lifecycle of a sandboxed playground spans from first discovery to regular, expert usage.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Introduction & Default to Sandbox</h3>
              <ul className="pattern-card__list">
                <li>When a user lands in a high-risk AI area for the first time, the system highlights sandbox mode and makes it the default path.</li>
                <li>A persistent environment indicator (banner or chip) reaffirms that the current session is sandboxed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Scope & Environment Selection</h3>
              <ul className="pattern-card__list">
                <li>System suggests a safe data subset: synthetic or anonymized data, historical snapshots, or read-only replicas.</li>
                <li>Clear messaging explains what the sandbox is connected to and what is excluded (e.g., &quot;No outbound emails, no API calls&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Simulation Setup & Plan Generation</h3>
              <ul className="pattern-card__list">
                <li>User configures a task or provides a prompt (e.g., &quot;Clean up duplicate contacts&quot;).</li>
                <li>AI agent generates a proposed plan shown in human-readable form with numbered steps.</li>
                <li>System clarifies that the plan is simulated and no live actions are taken.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Execute Simulated Run</h3>
              <ul className="pattern-card__list">
                <li>User starts the simulation; system executes same logic that would be used in production.</li>
                <li>All writes are redirected to sandbox storage; external side effects are no-ops or mocked.</li>
                <li>Progress indicators and logs show what the agent is &quot;doing&quot; as if it were live.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Result & Diff Review</h3>
              <ul className="pattern-card__list">
                <li>Aggregated counts: &quot;Would update 27 records, close 3 tasks, delete 0 assets.&quot;</li>
                <li>Item-level diffs: before/after values, proposed state changes, or actions.</li>
                <li>Filters allow users to focus on risky changes (deletions, external actions).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Iteration & Refinement</h3>
              <ul className="pattern-card__list">
                <li>Users adjust prompts, rules, or scopes directly from the sandbox result view and re-run.</li>
                <li>Each run is stored as a separate simulation, enabling comparison across runs.</li>
                <li>System highlights differences between runs (e.g., &quot;Reduced deletions from 12 to 3&quot;).</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Graduation to Production</h3>
              <ul className="pattern-card__list">
                <li>Once satisfactory, users with appropriate permissions can promote the configuration.</li>
                <li>Confirmation flows re-state impact scope: &quot;This configuration will now run on the full production dataset.&quot;</li>
                <li>Role-based controls can require approvals or dual control before enabling production.</li>
                <li>Option to run a single supervised production run before enabling full automation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Ongoing Usage & Re-entry</h3>
              <ul className="pattern-card__list">
                <li>Even after production is enabled, sandbox mode remains available for testing changes.</li>
                <li>Use for training new team members in a safe environment.</li>
                <li>Simulate rare or incident scenarios without affecting real systems.</li>
                <li>Historical sandbox sessions can be accessed as examples or &quot;playbooks&quot; for new setups.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & messaging guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; the semantics around sandbox mode must be explicit and consistent.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Sandbox mode: no changes are written to production systems.&quot;</li>
                  <li>&quot;Simulation only: no emails, messages, or API calls are sent.&quot;</li>
                  <li>&quot;Run simulation&quot; (clearly labeled action button)</li>
                  <li>&quot;Will update matching records in the live CRM and send notifications where applicable.&quot; (for production actions)</li>
                  <li>&quot;Simulation does not include external integrations that are only available in production.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Test mode&quot; (without clarifying whether real systems are affected)</li>
                  <li>&quot;Preview&quot; (ambiguous – could be a preview of changes that will be made)</li>
                  <li>&quot;Try it out&quot; (doesn&apos;t communicate safety guarantees)</li>
                  <li>&quot;Safe mode&quot; (vague, doesn&apos;t explain what is safe)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Name the Environment Explicitly</h3>
                <ul className="pattern-card__list">
                  <li>Use clear labels: &quot;Sandbox,&quot; &quot;Simulation,&quot; or &quot;Dry run only&quot;</li>
                  <li>Avoid ambiguous terms like &quot;Test&quot; without clarifying impact</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">State the Guarantee Plainly</h3>
                <ul className="pattern-card__list">
                  <li>Provide a concise statement of safety at the environment level</li>
                  <li>Reinforce boundaries near high-risk actions</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Explain Limitations
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Clarify differences between sandbox and production behavior</li>
                  <li>Provide hints about expected discrepancies between simulated and real outcomes</li>
                  <li>Use realistic but safe data examples that resemble real-world structures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual & Interaction Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Visual & interaction guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                While visual specifics depend on the product&apos;s design system, consistent cues strengthen trust in sandboxed environments.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Persistent Environment Indicators</h3>
              <ul className="pattern-card__list">
                <li>Place an environment banner or top-level chip in a stable location across screens</li>
                <li>Include iconography or wording that signals safety (e.g., &quot;Simulation only&quot;)</li>
                <li>Make it easy to scan and confirm environment status at a glance</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Differentiated Styling</h3>
              <ul className="pattern-card__list">
                <li>Ensure sandbox views feel related to, but distinct from, production</li>
                <li>Use background treatments, subtle badges, or border treatments</li>
                <li>Avoid relying solely on color to differentiate states (accessibility)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clear Control Separation</h3>
              <ul className="pattern-card__list">
                <li>Group sandbox actions (&quot;Run simulation,&quot; &quot;Re-run&quot;) separately from production actions</li>
                <li>When both are visible, emphasize hierarchy and guard rails around production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Diff-First Result Presentation</h3>
              <ul className="pattern-card__list">
                <li>Lead with summaries and diffs rather than raw logs</li>
                <li>Show high-level impact metrics first</li>
                <li>Allow drill-down from summary to detailed records</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Stepwise Flow for High-Risk Changes</h3>
              <ul className="pattern-card__list">
                <li>For complex or destructive actions, combine sandboxed previews with stepwise review</li>
                <li>1. Review plan → 2. Review diffs → 3. Confirm and schedule production run</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Responsive Behavior</h3>
              <ul className="pattern-card__list">
                <li>Maintain environment indicators across viewport sizes</li>
                <li>Collapse detailed diffs to summaries on mobile with expandable details</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details vary by stack, but several recurring patterns support robust sandbox behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Strategy</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Read-only replicas or snapshots</span> for queries</li>
                <li><span className="pattern-body--bold">Synthetic or anonymized datasets</span> for demonstrations and training</li>
                <li><span className="pattern-body--bold">Shadow tables or isolated schemas</span> for simulated writes</li>
                <li>Ensure sandbox writes cannot route to production by misconfiguration; use strong separation and explicit environment checks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Action Simulation Layer</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Implement a &quot;dry-run&quot; mode</span> in the agent&apos;s action execution layer</li>
                <li>All proposed actions evaluated and logged without invoking side effects</li>
                <li>External calls are mocked or recorded as &quot;would call X with payload Y&quot;</li>
                <li>Keep the same decision logic across sandbox and production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Diff Computation & Storage</h3>
              <ul className="pattern-card__list">
                <li>Generate diffs by comparing pre- and post-simulation states in sandbox storage</li>
                <li>Summarize changes at multiple levels (total, by entity type, by risk level)</li>
                <li>Store simulation results for auditing, comparison, and training purposes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Permissions, Roles & Approvals</h3>
              <ul className="pattern-card__list">
                <li>Restrict ability to enable production runs to specific roles</li>
                <li>Optionally require multi-step confirmations or peer/manager approval flows</li>
                <li>Log who granted permissions, when, and which config version applied</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Cost & Performance Controls</h3>
              <ul className="pattern-card__list">
                <li>Apply limits on sandbox run size, duration, and frequency</li>
                <li>Provide clear feedback when runs are truncated or sampled</li>
                <li>Example: &quot;Simulation run on 10% of dataset&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Logging & Multi-Tenant Safety</h3>
              <ul className="pattern-card__list">
                <li>Log sandbox actions separately from production with shared schema</li>
                <li>Guarantee that sandbox data never leaks across tenants</li>
                <li>Avoid using real PII in synthetic demo data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of sandboxed playgrounds can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Unclear Environment Boundaries</h3>
                  <p className="antipattern-subtitle">Environment status is hard to spot or ambiguous.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If environment status is hard to spot, users may misinterpret simulation results as real actions, or vice versa. Switching between sandbox and production must be explicit and traceable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use persistent, prominent environment indicators that are visible at all times.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unrealistic Simulations</h3>
                  <p className="antipattern-subtitle">Simulations ignore real constraints like quotas, rate limits, or permissions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Simulations that ignore real constraints can produce overly optimistic results. If production runs behave very differently from simulations, trust in the entire system erodes.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Apply the same constraints in sandbox as production, and clearly document any known differences.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Side Effects</h3>
                  <p className="antipattern-subtitle">Sandbox mode accidentally touches real systems.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Any side effect that accidentally touches real systems (e.g., emails sent during a &quot;simulation&quot;) severely damages credibility. Sandbox mode must provide strong guarantees.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement strict isolation at the infrastructure level and verify with automated testing.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Sandbox as a Crutch</h3>
                  <p className="antipattern-subtitle">Requiring sandbox for inherently low-risk features.</p>
                </div>
              </div>
              <p className="antipattern-description">
                For inherently low-risk features, sandbox requirements can slow onboarding and clutter the UI. In such cases, inline previews, undo/rollback, or item-level confirmations may be more appropriate.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Reserve sandbox for high-impact actions; use lighter patterns for low-risk features.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inadequate Limitation Explanation</h3>
                  <p className="antipattern-subtitle">Users not informed that simulation omits certain integrations.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If users are not informed that simulation omits certain integrations or constrained scenarios, discrepancies will appear as bugs rather than expected behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Proactively explain sandbox limitations and expected discrepancies in the UI.</span>
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
                How sandboxed playgrounds apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Warehouse / Analytics Agent</h3>
              <p className="pattern-card__intro">Business Intelligence</p>
              <p className="pattern-card__label">Sandbox capabilities</p>
              <ul className="pattern-card__list">
                <li>Generate transformation queries on limited dataset or read-only replica</li>
                <li>See estimated rows affected per table</li>
                <li>Preview changes to schema or derived tables</li>
              </ul>
              <p className="pattern-card__label">Production promotion</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Promote transformations only after reviewing diffs and sample outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">CRM / Sales Operations</h3>
              <p className="pattern-card__intro">B2B Sales Platform</p>
              <p className="pattern-card__label">Sandbox capabilities</p>
              <ul className="pattern-card__list">
                <li>Detect duplicates and invalid entries</li>
                <li>Suggest merges and field normalizations</li>
                <li>Show count of affected contacts and accounts with table-level diffs</li>
              </ul>
              <p className="pattern-card__label">Production promotion</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>After iteration and approval, enable same configuration for scheduled production runs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Automation</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <p className="pattern-card__label">Sandbox capabilities</p>
              <ul className="pattern-card__list">
                <li>Simulate segment definitions with estimated audience size</li>
                <li>Generate emails but mark as drafts only</li>
                <li>Produce timeline of &quot;would send&quot; events</li>
              </ul>
              <p className="pattern-card__label">Production promotion</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Actually sends messages according to approved configuration</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps / Infrastructure</h3>
              <p className="pattern-card__intro">Operations Platform</p>
              <p className="pattern-card__label">Sandbox capabilities</p>
              <ul className="pattern-card__list">
                <li>Show commands that would run (scaling, restarts, config changes)</li>
                <li>Display impact on services and dependencies based on telemetry</li>
              </ul>
              <p className="pattern-card__label">Production promotion</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Whitelist certain remediations for automatic execution after verification</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Finance and Billing</h3>
              <p className="pattern-card__intro">Financial Platform</p>
              <p className="pattern-card__label">Sandbox capabilities</p>
              <ul className="pattern-card__list">
                <li>Calculate hypothetical credits, charges, and adjustments</li>
                <li>Present summary of financial impact per customer segment</li>
              </ul>
              <p className="pattern-card__label">Production promotion</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Finance teams review, refine rules, then selectively apply approved adjustments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess the effectiveness of Sandboxed Playgrounds as a trust-building pattern, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Usage</h3>
              <ul className="pattern-card__list">
                <li>Percentage of new AI feature users who complete at least one sandbox run</li>
                <li>Number of sandbox sessions per user before first production run</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality & Safety</h3>
              <ul className="pattern-card__list">
                <li>Rate of misconfigurations or incident tickets before and after sandbox introduction</li>
                <li>Variance between simulated and actual production impact</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Conversion & Confidence</h3>
              <ul className="pattern-card__list">
                <li>Conversion rate from sandbox-only usage to enabled production agents</li>
                <li>Time from first sandbox session to first successful production run</li>
                <li>Survey-based trust metrics (self-reported confidence)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Reduction in support requests about &quot;what will the AI do?&quot;</li>
                <li>Frequency of sandbox use when editing existing configurations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design & review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Environment Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it immediately obvious whether the user is in sandbox or production mode?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the environment indicator visible at all times, not just at the start?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Safety Guarantees</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there strong guarantees that sandbox mode cannot affect production systems?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are external side effects (emails, API calls) clearly disabled or mocked?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Result Presentation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do simulation results show clear before/after diffs and impact summaries?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users filter results by risk level or action type?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Production Promotion</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is promoting to production a deliberate action with clear confirmation?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are role-based permissions enforced for production enablement?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Iteration & Learning</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily re-run simulations with adjusted parameters?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are historical sandbox sessions available for comparison and learning?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Limitations & Honesty</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are sandbox limitations clearly documented in the UI?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are expected discrepancies between sandbox and production explained?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
