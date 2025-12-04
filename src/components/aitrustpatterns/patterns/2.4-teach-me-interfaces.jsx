import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, ChevronDown } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// Interactive demo component - Teach Me Interfaces
function TeachMeDemo() {
  const [step, setStep] = useState('initial'); // 'initial' | 'corrected' | 'teaching' | 'saved' | 'dismissed'
  const [resetBtnHovered, setResetBtnHovered] = useState(false);
  const [primaryBtnHovered, setPrimaryBtnHovered] = useState(false);
  const [secondaryBtnHovered, setSecondaryBtnHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  // Handle category change click
  const handleChangeCategory = () => {
    setStep('corrected');
    // Show teach me interface after a brief delay
    setTimeout(() => {
      setStep('teaching');
    }, 800);
  };

  // Handle "Yes, create rule" click
  const handleSaveRule = () => {
    setStep('saved');
  };

  // Handle "No, just this once" click
  const handleDismissRule = () => {
    setStep('dismissed');
  };

  // Reset demo
  const handleReset = () => {
    setStep('initial');
    setDropdownOpen(false);
  };

  // Determine current category display
  const currentCategory = step === 'initial' ? 'General Expenses' : 'Marketing';
  const categoryIsMarketing = step !== 'initial';

  // Styles object - fully self-contained
  const styles = {
    // Demo container
    patternDemo: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      maxWidth: '640px',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
    patternDemoHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
    },
    patternDemoHeaderContent: {
      flex: 1,
    },
    patternDemoTitle: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#111827',
      margin: '0 0 8px 0',
      lineHeight: 1.2,
    },
    patternDemoDescription: {
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: 1.5,
      margin: 0,
    },
    resetBtn: {
      background: resetBtnHovered ? '#f9fafb' : '#ffffff',
      border: '1px solid #e5e7eb',
      borderColor: resetBtnHovered ? '#d1d5db' : '#e5e7eb',
      color: resetBtnHovered ? '#111827' : '#374151',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      whiteSpace: 'nowrap',
      height: 'fit-content',
    },

    // Chat UI
    chatUi: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      height: '420px',
      overflowY: 'auto',
      background: '#ffffff',
    },
    chatMessage: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '85%',
    },
    chatMessageUser: {
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
    },
    chatMessageAgent: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
    },
    chatBubble: {
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      fontSize: '0.9375rem',
      lineHeight: 1.5,
    },
    chatBubbleUser: {
      backgroundColor: '#2563eb',
      color: 'white',
      borderBottomRightRadius: '2px',
    },
    chatBubbleAgent: {
      backgroundColor: '#f1f5f9',
      color: '#1e293b',
      borderBottomLeftRadius: '2px',
    },

    // Invoice card
    invoiceCard: {
      marginTop: '0.5rem',
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1rem',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    invoiceRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
    },
    invoiceLabel: {
      color: '#64748b',
    },
    invoiceValue: {
      fontWeight: 500,
    },
    categoryBox: {
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      padding: '0.5rem',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '0.5rem',
    },
    categoryTag: {
      fontSize: '0.75rem',
      fontWeight: 600,
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      background: categoryIsMarketing ? '#dbeafe' : '#e2e8f0',
      color: categoryIsMarketing ? '#1e40af' : '#64748b',
    },
    // Category dropdown
    categoryDropdownWrapper: {
      position: 'relative',
      flex: 1,
    },
    categoryDropdownTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '0.375rem 0.5rem',
      background: step === 'initial' ? '#fff' : '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      cursor: step === 'initial' ? 'pointer' : 'default',
      fontSize: '0.75rem',
      fontWeight: 600,
      color: categoryIsMarketing ? '#1e40af' : '#64748b',
      transition: 'all 0.2s',
    },
    categoryDropdownTriggerHover: {
      borderColor: '#cbd5e1',
      background: '#f8fafc',
    },
    categoryDropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: '4px',
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      overflow: 'hidden',
    },
    categoryOption: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.75rem',
      fontWeight: 500,
      color: '#1e293b',
      cursor: 'pointer',
      transition: 'background 0.15s',
      background: '#fff',
    },
    categoryOptionHover: {
      background: '#f1f5f9',
    },
    categoryOptionSelected: {
      background: '#dbeafe',
      color: '#1e40af',
    },
    chevronIcon: {
      marginLeft: '0.25rem',
      transition: 'transform 0.2s',
      color: '#64748b',
    },

    // Teach Me Interface
    teachInterface: {
      marginTop: '1rem',
      background: '#fffbeb',
      border: '1px solid #fed7aa',
      borderRadius: '8px',
      padding: '1rem',
      position: 'relative',
    },
    teachInterfaceSuccess: {
      marginTop: '1rem',
      background: '#ecfdf5',
      border: '1px solid #6ee7b7',
      borderRadius: '8px',
      padding: '1rem',
      position: 'relative',
    },
    teachHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
      color: '#b45309',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    teachHeaderSuccess: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
      color: '#065f46',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    teachIcon: {
      fontSize: '1rem',
    },
    teachContent: {
      fontSize: '0.875rem',
      color: '#1e293b',
      marginBottom: '1rem',
      lineHeight: 1.4,
    },
    teachContentSuccess: {
      fontSize: '0.875rem',
      color: '#1e293b',
      lineHeight: 1.4,
      marginBottom: 0,
    },
    teachLogic: {
      fontFamily: 'monospace',
      background: 'rgba(255,255,255,0.6)',
      padding: '2px 4px',
      borderRadius: '4px',
      color: '#9a3412',
    },
    teachActions: {
      display: 'flex',
      gap: '0.5rem',
    },
    btnPrimary: {
      padding: '0.375rem 0.75rem',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: '1px solid #1e293b',
      background: primaryBtnHovered ? '#000' : '#1e293b',
      color: 'white',
    },
    btnSecondary: {
      padding: '0.375rem 0.75rem',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: '1px solid #d1d5db',
      background: secondaryBtnHovered ? '#f3f4f6' : 'white',
      color: '#1e293b',
    },
    manageRulesLink: {
      marginTop: '8px',
      fontSize: '0.75rem',
      textDecoration: 'underline',
      cursor: 'pointer',
      color: '#065f46',
    },
  };

  return (
    <div style={styles.patternDemo} role="region" aria-label="Teach Me Interfaces demo">
      {/* Scoped keyframe animations */}
      <style>{`
        @keyframes teachme-fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes teachme-slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .teachme-animate-fade { animation: teachme-fadeIn 0.3s ease-out; }
        .teachme-animate-slide { animation: teachme-slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {/* Demo Header */}
      <header style={styles.patternDemoHeader}>
        <div style={styles.patternDemoHeaderContent}>
          <h2 style={styles.patternDemoTitle}>Teach Me Interface</h2>
          <p style={styles.patternDemoDescription}>
            Experience how the AI Agent learns from your corrections. Use the category dropdown to change from &quot;General Expenses&quot; to &quot;Marketing&quot; to trigger the pattern.
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
      </header>

      {/* Chat UI */}
      <div style={styles.chatUi}>
        {/* User Message */}
        <div style={{ ...styles.chatMessage, ...styles.chatMessageUser }} className="teachme-animate-fade">
          <div style={{ ...styles.chatBubble, ...styles.chatBubbleUser }}>
            Here is the new invoice from "Creative Ads Co" for $1,200. Can you process it?
          </div>
        </div>

        {/* Agent Message */}
        <div style={{ ...styles.chatMessage, ...styles.chatMessageAgent }} className="teachme-animate-fade">
          <div style={{ ...styles.chatBubble, ...styles.chatBubbleAgent }}>
            I've processed the invoice. I categorized it under "{step === 'initial' ? 'General Expenses' : 'Marketing'}".

            {/* Invoice Card */}
            <div style={styles.invoiceCard}>
              <div style={styles.invoiceRow}>
                <span style={styles.invoiceLabel}>Vendor</span>
                <span style={styles.invoiceValue}>Creative Ads Co</span>
              </div>
              <div style={styles.invoiceRow}>
                <span style={styles.invoiceLabel}>Amount</span>
                <span style={styles.invoiceValue}>$1,200.00</span>
              </div>
              <div style={styles.categoryBox}>
                <span style={styles.invoiceLabel}>Category</span>
                <div style={styles.categoryDropdownWrapper}>
                  <button
                    style={{
                      ...styles.categoryDropdownTrigger,
                      ...(dropdownOpen && step === 'initial' ? styles.categoryDropdownTriggerHover : {}),
                    }}
                    onClick={() => step === 'initial' && setDropdownOpen(!dropdownOpen)}
                    disabled={step !== 'initial'}
                  >
                    <span>{currentCategory}</span>
                    {step === 'initial' && (
                      <ChevronDown
                        size={14}
                        style={{
                          ...styles.chevronIcon,
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </button>
                  {dropdownOpen && step === 'initial' && (
                    <div style={styles.categoryDropdown}>
                      {['General Expenses', 'Marketing'].map((category) => (
                        <div
                          key={category}
                          style={{
                            ...styles.categoryOption,
                            ...(hoveredOption === category ? styles.categoryOptionHover : {}),
                            ...(currentCategory === category ? styles.categoryOptionSelected : {}),
                          }}
                          onMouseEnter={() => setHoveredOption(category)}
                          onMouseLeave={() => setHoveredOption(null)}
                          onClick={() => {
                            setDropdownOpen(false);
                            if (category === 'Marketing') {
                              handleChangeCategory();
                            }
                          }}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Teach Me Interface - appears after correction */}
          {(step === 'teaching' || step === 'saved') && (
            <div
              style={step === 'saved' ? styles.teachInterfaceSuccess : styles.teachInterface}
              className="teachme-animate-slide"
            >
              {step === 'teaching' ? (
                <>
                  <div style={styles.teachHeader}>
                    <span style={styles.teachIcon}>⚡</span>
                    <span>Teach me a new rule?</span>
                  </div>
                  <div style={styles.teachContent}>
                    I noticed you changed this. Should I always route invoices from{' '}
                    <span style={styles.teachLogic}>Creative Ads Co</span> to{' '}
                    <span style={styles.teachLogic}>Marketing</span>?
                  </div>
                  <div style={styles.teachActions}>
                    <button
                      style={styles.btnPrimary}
                      onClick={handleSaveRule}
                      onMouseEnter={() => setPrimaryBtnHovered(true)}
                      onMouseLeave={() => setPrimaryBtnHovered(false)}
                    >
                      Yes, create rule
                    </button>
                    <button
                      style={styles.btnSecondary}
                      onClick={handleDismissRule}
                      onMouseEnter={() => setSecondaryBtnHovered(true)}
                      onMouseLeave={() => setSecondaryBtnHovered(false)}
                    >
                      No, just this once
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={styles.teachHeaderSuccess}>
                    <span style={styles.teachIcon}>✅</span>
                    <span>Rule Saved</span>
                  </div>
                  <div style={styles.teachContentSuccess}>
                    Future invoices from <strong>Creative Ads Co</strong> will be automatically tagged as{' '}
                    <strong>Marketing</strong>.
                    <div style={styles.manageRulesLink}>Manage Rules</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// SEO metadata for this pattern page
export const TEACH_ME_INTERFACES_SEO = {
  title: "Teach Me Interfaces - AI Trust Pattern",
  description: "Interfaces that turn user corrections into persistent, inspectable rules so the AI system becomes a jointly configured partner rather than an opaque black box.",
  keywords: ["teach me AI", "AI learning", "user corrections", "AI rules", "AI preferences", "AI trust", "agentic UX", "AI personalization", "machine teaching"],
  canonicalPath: "/agentic_ai_patterns/teach-me-interfaces"
};

export default function TeachMeInterfacesPattern() {
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
            <span className="pattern-header__index">2.4</span>
            <div>
              <h1 className="pattern-header__title">Teach Me Interfaces</h1>
              <p className="pattern-header__subtitle">
                Interfaces that turn user corrections into persistent, inspectable rules so the AI system becomes a jointly configured partner rather than an opaque black box.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.4" patternTitle="Teach Me Interfaces" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              &quot;Teach Me&quot; interfaces are lightweight teaching surfaces embedded in AI workflows that turn moments of friction or failure into learning events.
            </p>
            <p className="pattern-body">
              Instead of treating corrections as disposable, the system invites the user to articulate &quot;what should happen next time&quot; and converts that into a reusable rule, preference, or training signal.
            </p>
            <p className="pattern-body">
              This pattern leverages a well-known behavioral effect: people tend to value and trust systems they have helped configure or build. When the product clearly shows how user feedback changes future behavior, the AI shifts from being an unpredictable agent to a controllable collaborator.
            </p>
            <p className="pattern-body">
              These interfaces typically appear:
            </p>
            <ul className="pattern-list">
              <li>Immediately after a wrong or suboptimal action (e.g., misrouted ticket, off-target email draft, irrelevant recommendation)</li>
              <li>As inline prompts that ask for small, structured instructions rather than broad free-form training</li>
              <li>As a &quot;rule center&quot; or preference hub where previous teaching moments can be reviewed, edited, and disabled</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Teach Me Interfaces example">
          <TeachMeDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without &quot;Teach Me&quot; interfaces, AI systems often feel:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unteachable</span> – Corrections are applied once but not remembered, so the same mistakes repeat and erode trust.
              </li>
              <li>
                <span className="pattern-body--bold">Opaque</span> – Systems adjust behavior in hidden ways (or not at all), leaving users unsure whether feedback had any effect.
              </li>
              <li>
                <span className="pattern-body--bold">Costly to configure</span> – Rich automation is technically possible (e.g., workflow builders, rule engines) but too complex or far removed from the moment of need.
              </li>
              <li>
                <span className="pattern-body--bold">Risky</span> – Users may fear that a single correction will silently impact wide swaths of behavior without any clear scope or way to undo it.
              </li>
            </ul>
            <p className="pattern-body">
              Over time, this leads to resignation (&quot;the AI never learns&quot;), workarounds (manual rework, bypassing the system), and low adoption of agentic features. A pattern is needed that turns everyday corrections into safe, understandable, and reversible learning events.
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
                  <span className="pattern-body--bold">Repeated workflows with consistent rules</span> – Domains where similar decisions recur (support triage, invoice handling, CRM routing, task assignment, content tagging).
                </li>
                <li>
                  <span className="pattern-body--bold">Agentic behavior with real consequences</span> – Systems that take autonomous actions (send emails, schedule meetings, provision resources, update records) where missteps are costly.
                </li>
                <li>
                  <span className="pattern-body--bold">Frequent corrections or overrides</span> – Workflows where logs show recurring manual adjustments that hint at stable underlying rules.
                </li>
                <li>
                  <span className="pattern-body--bold">Onboarding to automation</span> – When users are not ready to design full workflows but are comfortable articulating &quot;in this situation, do that instead.&quot;
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">One-off or highly bespoke tasks</span> – Scenarios where cases are nearly always unique and rules rarely apply twice (e.g., one-time crisis response).</li>
                <li><span className="pattern-body--bold">Low-stakes, low-friction contexts</span> – Features where an error is trivial to fix and unlikely to recur (e.g., sorting a casual reading list).</li>
                <li><span className="pattern-body--bold">Stable, explicit configuration already exists</span> – Products that already require structured rule definition up front and where inline teaching would duplicate that surface.</li>
                <li><span className="pattern-body--bold">Model behavior is inherently probabilistic and noisy</span> – Situations where apparent &quot;rules&quot; would be too brittle or encourage overfitting.</li>
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
                &quot;Teach Me&quot; interfaces consist of three main parts: detection of a teachable moment, a micro-teaching UI for structured rule capture, and a rule management surface for reviewing and editing accumulated lessons.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Inline After Correction
              </h3>
              <p className="pattern-card__intro">
                Appears immediately after a user revises the AI&apos;s outcome.
              </p>
              <ul className="pattern-card__list">
                <li>After a misrouted ticket is dragged into a different queue</li>
                <li>After a generated response is labeled &quot;Not helpful&quot; or &quot;Off-topic&quot;</li>
                <li>After an AI-suggested action is canceled or undone</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Proactive Prompt</h3>
              <p className="pattern-card__intro">
                Embedded in feedback flows or review checklists.
              </p>
              <ul className="pattern-card__list">
                <li>In rating dialogs: &quot;How should similar cases be handled next time?&quot;</li>
                <li>In review checklists: &quot;Convert this correction into a rule?&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: From History or Logs</h3>
              <p className="pattern-card__intro">
                Access from activity logs, settings, or personalization centers.
              </p>
              <ul className="pattern-card__list">
                <li>Activity logs with &quot;Create rule from this correction&quot;</li>
                <li>A &quot;Teaching & Rules&quot; page within AI or automation settings</li>
                <li>A personalization center aggregating learned preferences</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Rule Management</h3>
              <p className="pattern-card__intro">
                Centralized surfaces for governance and oversight.
              </p>
              <ul className="pattern-card__list">
                <li>Browse, search, and filter all rules</li>
                <li>Bulk enable/disable operations</li>
                <li>Impact statistics and audit trails</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Learned Rule / Lesson</h3>
            <p className="pattern-card__intro">
              The core object is a learned rule that binds conditions to actions or preferences. Each rule should be inspectable, editable, and reversible.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Subscription invoices → CC Finance&quot;</li>
                  <li>&quot;Enterprise customers → route to Tier 2 Support&quot;</li>
                  <li>&quot;VIP accounts → always require human review&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li><em>Condition:</em> &quot;When invoice type is subscription AND amount &gt; $10,000&quot;</li>
                  <li><em>Action:</em> &quot;Route to Finance Review and CC finance@company.com&quot;</li>
                  <li><em>Example:</em> &quot;Invoice #14532 from Acme Cloud would match this rule&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Edit:</span> Change conditions, actions, or scope</li>
                  <li><span className="pattern-body--bold">Enable/Disable:</span> Toggle without deleting</li>
                  <li><span className="pattern-body--bold">Scope:</span> Personal, team, or organization-level</li>
                  <li><span className="pattern-body--bold">Source:</span> &quot;Created from correction on ticket #12345&quot;</li>
                  <li><span className="pattern-body--bold">Usage stats:</span> Times applied, last triggered</li>
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
                How teaching moments flow from initial correction to persistent, evolving rules.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial AI Action</h3>
              <ul className="pattern-card__list">
                <li>The AI performs an action (routes, drafts, recommends) based on its current model and existing rules.</li>
                <li>The action is presented with transparent cues (e.g., &quot;AI-assigned queue: Billing Support&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. User Correction</h3>
              <ul className="pattern-card__list">
                <li>The user revises the AI&apos;s outcome: changes a field, rewrites a message, reassigns a task.</li>
                <li>This correction is logged as a candidate &quot;teachable moment.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Teachable Moment Detection</h3>
              <ul className="pattern-card__list">
                <li>System checks if the correction is meaningful (not a minor edit).</li>
                <li>Checks if similar corrections have occurred before.</li>
                <li>Determines if a stable condition-action pattern is detectable.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Micro-Teaching Prompt</h3>
              <ul className="pattern-card__list">
                <li>A lightweight, non-blocking prompt appears (inline card, toast, or side panel).</li>
                <li>Proposes a candidate rule with pre-filled conditions and actions.</li>
                <li>User can save as-is, edit details, or &quot;Skip for now.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Rule Definition & Validation</h3>
              <ul className="pattern-card__list">
                <li>User refines conditions, actions, and scope if needed.</li>
                <li>System validates for conflicts with existing rules.</li>
                <li>Warnings appear for overly broad conditions or high-risk actions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Confirmation & Transparency</h3>
              <ul className="pattern-card__list">
                <li>Clear confirmation shown after saving.</li>
                <li>Link to &quot;View / edit all rules&quot; reinforces control.</li>
                <li>New rule appears immediately in the rule list with metadata.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Execution at Runtime</h3>
              <ul className="pattern-card__list">
                <li>On future matching events, the AI applies the learned rule.</li>
                <li>UI surfaces an indicator: &quot;Applied rule: Subscription invoices → CC Finance.&quot;</li>
                <li>Controls allow easy override and optional refinement.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Feedback & Continual Refinement</h3>
              <ul className="pattern-card__list">
                <li>When the rule fires and is overridden, system may suggest refining it.</li>
                <li>Rules evolve through updated conditions, changed actions, or scope adjustments.</li>
                <li>Unused rules are flagged for archival or deletion.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of teaching prompts should acknowledge friction without blame, focus on future benefit, and keep requests small and concrete.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;This was updated. Save a rule for similar cases?&quot;</li>
                  <li>&quot;Use this correction to improve future routing.&quot;</li>
                  <li>&quot;When invoice type is &apos;Subscription&apos; and vendor contains &apos;Acme&apos;, route to Subscription Ops.&quot;</li>
                  <li>&quot;Example that will follow this rule: Invoice #14532 from Acme Cloud.&quot;</li>
                  <li>&quot;This rule will apply to tickets that this team receives.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;You made a mistake. Want to fix it?&quot; (implies user error)</li>
                  <li>&quot;Describe how the system should behave going forward.&quot; (too open-ended)</li>
                  <li>&quot;Create predicate expression for trigger.&quot; (technical jargon)</li>
                  <li>&quot;Apply learning.&quot; (vague, no scope indication)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Rule Summaries</h3>
                <ul className="pattern-card__list">
                  <li>Use plain-language, testable statements</li>
                  <li>Avoid jargon like &quot;predicate,&quot; &quot;expression,&quot; or &quot;trigger&quot;</li>
                  <li>Provide examples or sample matches to make rules concrete</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Safety & Scope Language</h3>
                <ul className="pattern-card__list">
                  <li>Be explicit about who is affected: &quot;This rule will apply to tickets that this team receives.&quot;</li>
                  <li>Clarify reversibility: &quot;Rules can be edited or disabled at any time in Teaching & Rules.&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Conflict Messaging
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>&quot;This new rule conflicts with [existing rule]. Choose which should apply first.&quot;</li>
                  <li>&quot;This rule would affect a large number of cases. Consider narrowing the conditions.&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building this pattern robustly.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Model for Rules</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Represent rules as structured objects</span> – Conditions (fields, operators, values), actions (routing, notifications), and metadata (scope, creator, timestamps).</li>
                <li><span className="pattern-body--bold">Support versioning</span> – Changes and rollbacks should be traceable.</li>
                <li><span className="pattern-body--bold">Clear evaluation order</span> – Global rules → team rules → personal rules, or priority-based ordering.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration with AI Models</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Combine symbolic rules and statistical models</span> – Use rules to constrain actions, nudge behavior, or post-process outputs.</li>
                <li><span className="pattern-body--bold">Treat rules as first-class citizens</span> – Show when a rule, not the model, drove a decision.</li>
                <li><span className="pattern-body--bold">Allow rules to override model confidence</span> – In defined areas where explicit behavior is preferred.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-User & Enterprise Governance</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Different scopes and permissions</span> – Personal rules, team rules, organization-level rules.</li>
                <li><span className="pattern-body--bold">Auditability</span> – &quot;Rule created by Alex Chen on 2025-06-10 from Ticket #483291.&quot;</li>
                <li><span className="pattern-body--bold">Approval flows</span> – Proposed rules for shared scopes may require admin review.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety, Privacy & Compliance</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Avoid storing sensitive content verbatim</span> – Use anonymized patterns or references.</li>
                <li><span className="pattern-body--bold">Prevent information leakage</span> – Ensure rules do not leak between tenants or teams.</li>
                <li><span className="pattern-body--bold">Define guardrails</span> – Certain actions may require additional checks before being automated.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Telemetry & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Key indicators of pattern effectiveness.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption Metrics</h3>
              <ul className="pattern-card__list">
                <li>Number and rate of rules created over time</li>
                <li>Percentage of corrections that result in rule suggestions</li>
                <li>Conversion rate from suggestion → saved rule</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Impact on Behavior</h3>
              <ul className="pattern-card__list">
                <li>Reduction in repeated errors for scenarios with rules</li>
                <li>Reduction in manual overrides for rule-covered cases</li>
                <li>Average time saved per case after rule introduction</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction Signals</h3>
              <ul className="pattern-card__list">
                <li>User satisfaction ratings before and after rule adoption</li>
                <li>Decrease in complaints about &quot;the AI never learns&quot;</li>
                <li>Qualitative feedback referencing control, predictability, reliability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Rule Health</h3>
              <ul className="pattern-card__list">
                <li>Percentage of rules frequently triggered vs. rarely used</li>
                <li>Frequency of overrides on rule-triggered actions</li>
                <li>Number of conflicting or disabled rules</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations & example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How this pattern applies across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline &quot;One-Click&quot; Teaching</h3>
              <p className="pattern-card__intro">Support Triage Board (B2B SaaS)</p>
              <ul className="pattern-card__list">
                <li>When a ticket is dragged from &quot;Product Questions&quot; to &quot;Billing,&quot; a small inline card appears</li>
                <li>&quot;Move similar billing tickets here automatically?&quot; [Create rule] [Not now]</li>
                <li>Best for fast-moving workflows where users do not have time for a detailed rule builder</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Guided Rule Creation Wizard</h3>
              <p className="pattern-card__intro">Finance System (Invoice Processing)</p>
              <ul className="pattern-card__list">
                <li>After multiple manual corrections, a banner invites the user to configure automations</li>
                <li>Opens a multi-step wizard with previews and impact estimates</li>
                <li>Best for higher-stakes processes where more validation and clarity is needed</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Preference-Based Teaching</h3>
              <p className="pattern-card__intro">AI Drafting Assistant (CRM)</p>
              <ul className="pattern-card__list">
                <li>When a sales rep frequently rewrites greetings or tone, the assistant proposes a style rule</li>
                <li>&quot;Use &apos;Hi [First Name],&apos; and keep the tone concise for future outreach.&quot; [Save preference]</li>
                <li>Best for personalization rules that primarily affect content style and tone</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Organizational Playbooks</h3>
              <p className="pattern-card__intro">Security Incident Response Platform</p>
              <ul className="pattern-card__list">
                <li>After a security analyst handles an incident in a specific way, the system asks to convert it into a playbook</li>
                <li>&quot;Convert this response pattern into a playbook for similar incidents?&quot;</li>
                <li>Best for expert workflows where individual behavior should evolve into shared practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & smells</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and effectiveness.
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
                  <h3 className="antipattern-title">Overprompting</h3>
                  <p className="antipattern-subtitle">Asking to &quot;teach&quot; after nearly every minor correction.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When the system asks for teaching input too frequently, users develop prompt fatigue and start ignoring all teaching opportunities, even valuable ones.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Only surface teaching prompts for meaningful corrections or when patterns suggest a stable rule would help.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Impact</h3>
                  <p className="antipattern-subtitle">Creating broad rules without showing their scope.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When users cannot see how many cases a rule will affect or what systems it touches, they either avoid creating rules or create overly broad ones that cause unexpected behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show scope and estimated impact. Provide examples of what the rule will and won&apos;t match.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque Failures</h3>
                  <p className="antipattern-subtitle">Rules that silently fail due to schema changes or conflicts.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Rules may stop working due to permission errors, schema changes, or conflicts with newer rules—but if users aren&apos;t notified, they lose trust in the entire system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Surface rule failures clearly. Provide a &quot;rule health&quot; dashboard that flags broken or conflicting rules.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unstructured &quot;Training&quot; Only</h3>
                  <p className="antipattern-subtitle">Accepting free-form feedback without structured representation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Inputs like &quot;Please do better next time&quot; cannot be reliably acted upon and leave users uncertain whether their feedback had any effect.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Convert corrections into structured conditions and actions. Make the resulting rule inspectable and testable.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Irreversible Changes</h3>
                  <p className="antipattern-subtitle">No clear way to find, edit, or disable rules once created.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users become hesitant to create rules if they fear they cannot undo or adjust them later. This limits adoption and increases anxiety.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide a clear &quot;Teaching & Rules&quot; management page. Support enable/disable toggle, edit, and delete for all rules.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Admin-Only Learning</h3>
                  <p className="antipattern-subtitle">Requiring centralized configuration for every rule.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When only admins can create rules, frontline experts cannot encode their domain knowledge, and valuable insights are lost or delayed.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Allow personal rules for individual users. Provide escalation paths for rules that should become team or org-wide.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                This pattern works best when combined with other trust-building patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">2.1 Sandboxed Playgrounds</h3>
              <p className="pattern-card__intro">
                Provides a low-risk space to experiment with the AI; &quot;Teach Me&quot; converts successful experiments into persistent behavior.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2.2 Wayfinders</h3>
              <p className="pattern-card__intro">
                Reveals what an AI agent can do in the current context; &quot;Teach Me&quot; deepens the relationship by enabling incremental configuration.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2.3 Progressive Disclosure Modes</h3>
              <p className="pattern-card__intro">
                Aligns complexity with user expertise; &quot;Teach Me&quot; can surface more advanced rule options in expert modes.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback & Correction Patterns</h3>
              <p className="pattern-card__intro">
                Captures ratings, comments, and corrections; &quot;Teach Me&quot; defines how those inputs become durable, controllable rules.
              </p>
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
              <p className="pattern-checklist-category__title">Teachable Moments</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system detect meaningful corrections vs. minor edits?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the teaching prompt non-blocking and easy to dismiss?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Rule Creation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are proposed rules pre-filled with sensible defaults from the correction context?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily refine conditions, actions, and scope?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the UI show examples of what the rule will and won&apos;t match?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Transparency & Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear &quot;Teaching & Rules&quot; management page?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can rules be easily enabled, disabled, edited, and deleted?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When a rule fires, is it indicated in the UI with an option to override?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Scope & Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear whether a rule is personal, team-level, or organization-wide?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can admins review, approve, and manage rules at scale?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are rule creation events auditable with creator, timestamp, and source?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Evolution & Health</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system suggest refining rules that are frequently overridden?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are unused or stale rules flagged for review or cleanup?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
