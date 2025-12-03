import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// Inline styles for the delegation modes demo
const demoStyles = {
  container: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    maxWidth: '720px',
    border: '1px solid #e0e4ea',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    margin: '0 auto',
  },
  chat: {
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    padding: '12px',
    fontSize: '12px',
  },
  chatSpacing: {
    marginTop: '12px',
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  chatTitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#111827',
  },
  chatCaption: {
    fontSize: '11px',
    color: '#6b7280',
  },
  messageGroup: {
    display: 'flex',
    gap: '8px',
    marginBottom: '10px',
  },
  avatar: {
    width: '20px',
    height: '20px',
    borderRadius: '999px',
    backgroundColor: '#111827',
    color: '#f9fafb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    flexShrink: 0,
  },
  avatarAgent: {
    backgroundColor: '#0f766e',
  },
  bubble: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '8px 10px',
    border: '1px solid #e5e7eb',
    flex: 1,
  },
  bubbleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  },
  bubbleTitle: {
    fontWeight: 500,
    color: '#111827',
  },
  modePill: {
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  pillAdvisor: {
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
  },
  pillCopilot: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
  },
  pillAutopilot: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  bubbleBody: {
    color: '#374151',
    lineHeight: 1.4,
  },
  bubbleFooter: {
    marginTop: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
  },
  reviewActions: {
    display: 'inline-flex',
    gap: '4px',
  },
  button: {
    borderRadius: '999px',
    border: '1px solid #d1d5db',
    backgroundColor: '#ffffff',
    padding: '2px 8px',
    fontSize: '11px',
    cursor: 'default',
  },
  buttonPrimary: {
    borderColor: '#111827',
  },
};

// Demo component showing the three delegation modes
function DelegationModesDemo() {
  return (
    <div style={demoStyles.container}>
      {/* Advisor chat */}
      <div style={demoStyles.chat} aria-label="Advisor mode example">
        <div style={demoStyles.chatHeader}>
          <div style={demoStyles.chatTitle}>Advisor mode</div>
          <div style={demoStyles.chatCaption}>Atlas suggests replies. Nothing is sent automatically.</div>
        </div>

        <div style={demoStyles.messageGroup}>
          <div style={demoStyles.avatar} aria-hidden="true">U</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Customer ticket</div>
            </div>
            <div style={demoStyles.bubbleBody}>
              "Hi, my password reset link has expired. Can you send a new one?"
            </div>
          </div>
        </div>

        <div style={{ ...demoStyles.messageGroup, marginBottom: 0 }}>
          <div style={{ ...demoStyles.avatar, ...demoStyles.avatarAgent }} aria-hidden="true">AI</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Suggested reply</div>
              <span style={{ ...demoStyles.modePill, ...demoStyles.pillAdvisor }}>Advisor</span>
            </div>
            <div style={demoStyles.bubbleBody}>
              <em>
                "I've generated a new password reset link for your account. Please check your inbox and let us know if you
                still can't sign in."
              </em>
            </div>
            <div style={demoStyles.bubbleFooter}>
              <div style={demoStyles.reviewActions}>
                <button style={{ ...demoStyles.button, ...demoStyles.buttonPrimary }}>Insert into reply</button>
                <button style={demoStyles.button}>Regenerate</button>
              </div>
              <span>Agent chooses whether to send.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Pilot chat */}
      <div style={{ ...demoStyles.chat, ...demoStyles.chatSpacing }} aria-label="Co-Pilot mode example">
        <div style={demoStyles.chatHeader}>
          <div style={demoStyles.chatTitle}>Co‑Pilot mode</div>
          <div style={demoStyles.chatCaption}>Atlas drafts replies and queues them for approval.</div>
        </div>

        <div style={demoStyles.messageGroup}>
          <div style={demoStyles.avatar} aria-hidden="true">U</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Customer ticket</div>
            </div>
            <div style={demoStyles.bubbleBody}>
              "Hi, my password reset link has expired. Can you send a new one?"
            </div>
          </div>
        </div>

        <div style={{ ...demoStyles.messageGroup, marginBottom: 0 }}>
          <div style={{ ...demoStyles.avatar, ...demoStyles.avatarAgent }} aria-hidden="true">AI</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Draft in queue</div>
              <span style={{ ...demoStyles.modePill, ...demoStyles.pillCopilot }}>Co‑Pilot</span>
            </div>
            <div style={demoStyles.bubbleBody}>
              Atlas has drafted this reply in your <strong>"Ready to send"</strong> queue:
              <br />
              <em>
                "We've sent a new password reset link to the email on file. If you don't see it in a few minutes, please
                check your spam folder or reply here."
              </em>
            </div>
            <div style={demoStyles.bubbleFooter}>
              <div style={demoStyles.reviewActions}>
                <button style={{ ...demoStyles.button, ...demoStyles.buttonPrimary }}>Approve &amp; send</button>
                <button style={demoStyles.button}>Edit</button>
              </div>
              <span>Nothing is sent until you approve.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Autopilot chat */}
      <div style={{ ...demoStyles.chat, ...demoStyles.chatSpacing }} aria-label="Autopilot mode example">
        <div style={demoStyles.chatHeader}>
          <div style={demoStyles.chatTitle}>Autopilot mode</div>
          <div style={demoStyles.chatCaption}>Atlas resolves low‑risk tickets automatically within guardrails.</div>
        </div>

        <div style={demoStyles.messageGroup}>
          <div style={demoStyles.avatar} aria-hidden="true">U</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Customer ticket</div>
            </div>
            <div style={demoStyles.bubbleBody}>
              "Hi, my password reset link has expired. Can you send a new one?"
            </div>
          </div>
        </div>

        <div style={{ ...demoStyles.messageGroup, marginBottom: 0 }}>
          <div style={{ ...demoStyles.avatar, ...demoStyles.avatarAgent }} aria-hidden="true">AI</div>
          <div style={demoStyles.bubble}>
            <div style={demoStyles.bubbleHeader}>
              <div style={demoStyles.bubbleTitle}>Action executed</div>
              <span style={{ ...demoStyles.modePill, ...demoStyles.pillAutopilot }}>Autopilot</span>
            </div>
            <div style={demoStyles.bubbleBody}>
              Atlas automatically sent the password reset email and marked the ticket as <strong>Resolved</strong>.
            </div>
            <div style={demoStyles.bubbleFooter}>
              <div style={demoStyles.reviewActions}>
                <button style={{ ...demoStyles.button, ...demoStyles.buttonPrimary }}>View change log</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO metadata for this pattern page
export const DELEGATION_MODES_SEO = {
  title: "Delegation Modes (Advisor → Co-Pilot → Autopilot) - AI Trust Pattern",
  description: "Expose clear, named levels of AI autonomy so users can decide how much control to delegate—from suggestions only, to draft-and-confirm, to fully automated execution within guardrails.",
  keywords: ["AI delegation modes", "autopilot AI", "co-pilot mode", "AI autonomy levels", "human-in-the-loop", "AI trust", "agentic UX", "AI control patterns"],
  canonicalPath: "/agentic_ai_patterns/delegation-modes"
};

export default function DelegationModesPattern() {
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
            <span className="pattern-header__index">1.2</span>
            <div>
              <h1 className="pattern-header__title">Delegation Modes (Advisor → Co‑Pilot → Autopilot)</h1>
              <p className="pattern-header__subtitle">
                Expose clear, named levels of AI autonomy so users can decide how much control to delegate—from suggestions only, to draft-and-confirm, to fully automated execution within guardrails.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="1.2" patternTitle="Delegation Modes" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Delegation Modes make the level of autonomy of an AI agent explicit. Instead of a vague &quot;smart automation&quot; toggle, the product provides clear options for how the agent behaves.
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Advisor</span> – read-only, suggestions only</li>
              <li><span className="pattern-body--bold">Co‑Pilot</span> – drafts and proposes actions, human approval required</li>
              <li><span className="pattern-body--bold">Autopilot</span> – executes within defined guardrails, with monitoring and logs</li>
            </ul>
            <p className="pattern-body">
              This pattern appears wherever an agent can change data, communicate with customers, move money, or trigger workflows—email assistants, support triage, CRM workflow agents, finance automations, security alert handlers, and similar agentic systems in B2B and B2C web products.
            </p>
            <p className="pattern-body">
              By aligning with established &quot;levels of autonomy&quot; and human‑in‑the‑loop concepts, Delegation Modes provide a shared language for &quot;who is in charge&quot; at any moment. This reduces anxiety, enables gradual trust-building, and makes it easier for organizations to adopt higher degrees of automation without losing oversight.
            </p>
          </div>
        </section>

        {/* Interactive demo showing the three delegation modes */}
        <section className="pattern-section" aria-label="Delegation modes example">
          <DelegationModesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit delegation modes, it is often unclear how much power the agent actually has.
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Autonomy is ambiguous and unsettling</span> – Many AI features are introduced as &quot;assistants&quot; or &quot;co‑pilots&quot;, but it is not obvious whether they can send messages, update records, or move money on their own. Hidden or poorly-labeled automation leads to fear, disengagement, or outright rejection of AI features.
              </li>
              <li>
                <span className="pattern-body--bold">All‑or‑nothing workflows cause friction</span> – Systems tend to default either to a constant approval requirement (approval for every micro‑step) or to fully automatic behaviors that occasionally do something surprising or incorrect. There is no way to tune the tradeoff between speed and control.
              </li>
              <li>
                <span className="pattern-body--bold">Organizations cannot scale trust systematically</span> – Different domains and roles require different levels of control. Support replies, refunds, access management, and HR workflows all carry different risks. Without a structured autonomy model, it is difficult to set policies, communicate expectations, or audit what happened.
              </li>
            </ul>
            <p className="pattern-body">
              Delegation Modes introduce a simple, legible control surface that resolves this ambiguity and lets trust scale over time.
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
                  <span className="pattern-body--bold">Agents can take real, potentially irreversible actions</span> – sending emails, updating records, deploying code, changing configurations, creating tasks, or moving money.
                </li>
                <li>
                  <span className="pattern-body--bold">The same workflow has both low‑ and high‑risk variants</span> – standard support replies vs. VIP accounts, small vs. large transactions, internal vs. customer‑visible changes.
                </li>
                <li>
                  <span className="pattern-body--bold">Trust is expected to evolve over time</span> – new teams often want Advisor mode at first, then gradually shift stable parts to Co‑Pilot, and eventually move safe segments into Autopilot.
                </li>
                <li>
                  <span className="pattern-body--bold">Human‑in‑the‑loop behavior is required</span> – regulated domains (finance, healthcare, HR, security, legal) often require clear human approval points and auditable logs.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent is <span className="pattern-body--bold">purely read‑only or exploratory</span> – document Q&A, analytics summaries, search assistants that never perform write actions.</li>
                <li>The UI already forces <span className="pattern-body--bold">explicit confirmation on every action</span>, and actions are low‑impact (&quot;generate title&quot;, &quot;suggest alt text&quot;).</li>
                <li>Derived outputs are <span className="pattern-body--bold">trivial and fully reversible</span> – a simple &quot;Auto‑apply suggestions&quot; checkbox may suffice.</li>
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
                At its core, this pattern is a mode selector that binds a clear label and behavioral contract to an agent or workflow, plus persistent indicators and logs that reflect that choice.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Agent or Workflow Settings
              </h3>
              <p className="pattern-card__intro">
                A &quot;Delegation mode&quot; control appears in the agent&apos;s main configuration, workflow builder, or integration settings.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Support Inbox Agent → Delegation mode: Advisor / Co‑Pilot / Autopilot&quot;</li>
                <li>Radio group, segmented control, or dropdown for the three modes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Inline Near Execution Controls</h3>
              <p className="pattern-card__intro">
                A segmented control or dropdown sits next to the primary action.
              </p>
              <ul className="pattern-card__list">
                <li><code>Mode: Advisor ▾</code> near a &quot;Run agent&quot; button</li>
                <li>A chip in the header such as <code>Co‑Pilot • Needs approval</code></li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: From Banners, Toasts, or Logs</h3>
              <p className="pattern-card__intro">
                System suggestions based on observed behavior.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Many similar actions were approved. Consider switching this workflow to Autopilot.&quot;</li>
                <li>&quot;Autopilot paused after several reverted actions. Review and adjust settings.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Task Override</h3>
              <p className="pattern-card__intro">
                At run time, a task‑level override allows a specific job to run at a different mode than the default.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Run once in Advisor mode&quot;</li>
                <li>&quot;This campaign: Co‑Pilot (review required)&quot;</li>
                <li>&quot;For low‑risk tickets only, use Autopilot&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Delegation Mode Configuration</h3>
            <p className="pattern-card__intro">
              The main unit is a Delegation Mode configuration for a given scope (agent, workflow, dataset, inbox, project, or environment).
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Labels & Descriptors</p>
                <ul className="pattern-card__list">
                  <li><em>Advisor</em> – &quot;Suggestions only&quot;</li>
                  <li><em>Co‑Pilot</em> – &quot;Drafts; human approval required&quot;</li>
                  <li><em>Autopilot</em> – &quot;Executes within guardrails&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Behavior Statements</p>
                <ul className="pattern-card__list">
                  <li><em>Advisor:</em> &quot;Reads data and suggests actions; no changes are made automatically.&quot;</li>
                  <li><em>Co‑Pilot:</em> &quot;Drafts updates and messages and places them in a review queue.&quot;</li>
                  <li><em>Autopilot:</em> &quot;Executes actions automatically within specified limits.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Inline actions:</span> &quot;View guardrails&quot;, &quot;Pause Autopilot&quot;, &quot;Downgrade to Co‑Pilot&quot;</li>
                  <li><span className="pattern-body--bold">Scope:</span> &quot;Support inbox: Tier‑3 tickets only&quot;</li>
                  <li><span className="pattern-body--bold">Status:</span> Active, Paused, Pending approval, Under review</li>
                  <li><span className="pattern-body--bold">Owner:</span> Which user or role configured the mode</li>
                  <li><span className="pattern-body--bold">Last change:</span> Timestamp plus actor (for auditability)</li>
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
                Delegation Modes can be understood as a lifecycle of trust between humans and agents.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial State (Advisor by Default)</h3>
              <ul className="pattern-card__list">
                <li>When the agent is first enabled, the default mode is usually <span className="pattern-body--bold">Advisor</span> or the lowest‑risk alternative.</li>
                <li>A short explainer clarifies that the agent will make suggestions only and that no automatic changes will be made.</li>
                <li>This default reduces perceived risk and encourages initial experimentation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Upgrade to Co‑Pilot</h3>
              <ul className="pattern-card__list">
                <li>As teams repeatedly approve similar actions, the system can suggest moving that portion of the workflow to <span className="pattern-body--bold">Co‑Pilot</span>.</li>
                <li>Switching to Co‑Pilot remains reversible, and the UI emphasizes that humans still approve every change before it goes live.</li>
                <li>Co‑Pilot often introduces batching: multiple draft actions reviewed together.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Task‑Level Overrides</h3>
              <ul className="pattern-card__list">
                <li>At run time, a task‑level override allows a specific job to run at a different mode than the default.</li>
                <li>The <span className="pattern-body--bold">effective mode</span> for the current run is clearly indicated, especially when it differs from the workspace default.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Autopilot Activation</h3>
              <ul className="pattern-card__list">
                <li>Enabling <span className="pattern-body--bold">Autopilot</span> requires an explicit confirmation step summarizing scope of impact, guardrails, and rollback options.</li>
                <li>This step often appears as a compact wizard: &quot;Here is what Autopilot is permitted to do in this context.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Run‑Time Behavior</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Advisor:</span> Provides inline suggestions; does not perform direct writes.</li>
                <li><span className="pattern-body--bold">Co‑Pilot:</span> Drafts actions and places them into a review queue; supports batch review.</li>
                <li><span className="pattern-body--bold">Autopilot:</span> Executes automatically; logs every action; routes edge cases &quot;up&quot; for review.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Exceptions & Escalation</h3>
              <ul className="pattern-card__list">
                <li>Thresholds are defined where Autopilot must escalate: unusual patterns, policy violations, low confidence, high‑value entities.</li>
                <li>With repeated issues, the system can automatically pause Autopilot and notify the owner.</li>
                <li>Downgrading is always available via prominent controls.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Evolution Over Time</h3>
            <ul className="pattern-card__list">
              <li>Analytics report on approval rates, error rates, time saved, and common escalation reasons for each mode.</li>
              <li>The system can recommend mode changes: high approval rates → suggest Autopilot; frequent reversions → suggest downgrading.</li>
              <li>Administrators can define global policies: &quot;Autopilot disabled for payments above a threshold&quot;, &quot;Default to Advisor for workflows in regulatory domains.&quot;</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of delegation modes should be intuitive, stable, and explicit about behavioral contracts.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Advisor: All outputs are suggestions; nothing is applied automatically.&quot;</li>
                  <li>&quot;Co‑Pilot: Actions are drafted and must be approved before they go live.&quot;</li>
                  <li>&quot;Autopilot: Actions are executed automatically within defined limits.&quot;</li>
                  <li>&quot;Autopilot applies only to tickets labeled &apos;FAQ&apos; and &apos;Tier‑3&apos; and does not affect billing data.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Smart mode&quot; or &quot;Turbo AI&quot; (doesn&apos;t communicate actual capabilities)</li>
                  <li>&quot;The AI will help you&quot; (vague, doesn&apos;t describe autonomy level)</li>
                  <li>&quot;Enhanced automation&quot; (marketing language, not operational)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Stable Naming</h3>
                <ul className="pattern-card__list">
                  <li>Terms like &quot;Advisor&quot;, &quot;Co‑Pilot&quot;, and &quot;Autopilot&quot; leverage familiar metaphors</li>
                  <li>When different labels are required, maintain a similarly clear progression</li>
                  <li>Example alternatives: &quot;Review‑only / Assist / Auto‑run&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Make Contracts Explicit</h3>
                <ul className="pattern-card__list">
                  <li>What the agent is allowed to do in this mode</li>
                  <li>What the agent will never do in this mode</li>
                  <li>Whether human approval is required before actions take effect</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Avoid Dark Patterns
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Do not quietly auto‑upgrade existing configurations to Autopilot as part of a product update</li>
                  <li>Any change that increases autonomy should be clearly explained and explicitly confirmed</li>
                  <li>Write from an end‑user perspective, not an internal one</li>
                </ul>
              </div>
            </div>
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
              <h3 className="pattern-card__title">Data Model & Scope</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Represent Delegation Mode as part of the configuration object</span> – for agents, workflows, or resource segments.</li>
                <li><span className="pattern-body--bold">Persist:</span> mode (Advisor/Co‑Pilot/Autopilot), scope (resource identifiers), guardrails (constraints), owner, and source (policy vs. preference).</li>
                <li><span className="pattern-body--bold">Guardrails mapping:</span> For each mode, explicitly map allowed tools/APIs, maximum actions per interval, monetary limits, and excluded entities.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Permissions & Observability</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Enforce role requirements</span> – some modes may require certain roles or permissions (e.g., Autopilot for financial actions restricted to admin roles).</li>
                <li><span className="pattern-body--bold">Log every AI‑initiated action</span> – with mode in effect, inputs, outputs, and any human approvals or reversions.</li>
                <li><span className="pattern-body--bold">Provide UI for filtering</span> – actions by mode, inspecting individual actions, and undoing where reversal is possible.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Resilience & Fail‑Safe Design</h3>
            <ul className="pattern-card__list">
              <li>On model errors, external service failures, or inconsistent signals, <span className="pattern-body--bold">degrade toward safer modes</span> (Co‑Pilot or Advisor) instead of continuing Autopilot execution.</li>
              <li>Prefer <span className="pattern-body--bold">fail‑closed behavior</span> for irreversible or high‑risk actions, and fail‑open visibility for issues (surfacing alerts rather than silently skipping).</li>
            </ul>
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
                  <h3 className="antipattern-title">Hidden Autopilot Behavior</h3>
                  <p className="antipattern-subtitle">Autopilot is active but the UI doesn&apos;t clearly communicate this.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When the system acts on its own in unexpected ways, trust is quickly eroded. Users feel betrayed when they discover actions were taken without their knowledge.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show the current mode prominently. Use persistent indicators like badges or chips.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Vague or Marketing Names</h3>
                  <p className="antipattern-subtitle">Labels like &quot;Smart mode&quot; or &quot;Turbo AI&quot; don&apos;t communicate capabilities.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Clear operational contracts are more important than catchy names. Users need to understand what will actually happen, not feel excited about a feature.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use descriptive names that communicate behavior: &quot;Suggestions only&quot;, &quot;Drafts with approval&quot;, &quot;Auto-execute&quot;.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Configuration Complexity</h3>
                  <p className="antipattern-subtitle">Dozens of fine-grained toggles without a coherent mode model.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing too many per-action, per-entity, or per-segment toggles leads to configuration fatigue. Users give up and accept defaults they don&apos;t understand.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Delegation Modes should be the primary abstraction, with advanced controls grouped under each mode as needed.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Auto-Upgrades</h3>
                  <p className="antipattern-subtitle">Automatically migrating configurations to higher autonomy without consent.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Automatically moving from Advisor to Co‑Pilot or Autopilot as part of a release undermines long‑term trust, even if short‑term metrics look positive.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Any change that increases autonomy should require explicit user confirmation, not just notification.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Irreversible Actions Without Guardrails</h3>
                  <p className="antipattern-subtitle">Allowing Autopilot to perform destructive actions without limits or rollback.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Deleting data, sending bulk campaigns, or transferring funds without limits, approvals, or rollback mechanisms is a major risk that can cause irreparable harm.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Define clear guardrails, require confirmations for high-risk operations, and ensure reversibility where possible.</span>
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
                How delegation modes apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Support Inbox Triage</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-card__label">Advisor</p>
              <ul className="pattern-card__list">
                <li>Reads incoming tickets and suggests tags, priorities, and draft replies</li>
                <li>Human agents apply, modify, or ignore suggestions</li>
              </ul>
              <p className="pattern-card__label">Co‑Pilot</p>
              <ul className="pattern-card__list">
                <li>Auto‑fills tags and drafts replies into a review queue</li>
                <li>Support staff review and approve or edit in batch</li>
              </ul>
              <p className="pattern-card__label">Autopilot</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>For low‑risk ticket types (password resets, shipping-status), automatically sends replies and resolves tickets</li>
                <li>Complex or sensitive messages are escalated for human review</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Sales / CRM Pipeline Assistant</h3>
              <p className="pattern-card__intro">B2B Sales Platform</p>
              <p className="pattern-card__label">Advisor</p>
              <ul className="pattern-card__list">
                <li>Suggests next‑best actions, contact prioritization, and proposed stage changes</li>
                <li>Does not alter records</li>
              </ul>
              <p className="pattern-card__label">Co‑Pilot</p>
              <ul className="pattern-card__list">
                <li>Drafts follow‑up emails, proposes stage changes</li>
                <li>Groups these into a queue for approval</li>
              </ul>
              <p className="pattern-card__label">Autopilot</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Automatically updates opportunity stages based on engagement signals</li>
                <li>Sends low‑stakes follow‑ups; leaves strategic moves for human decision</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Portfolio / Trading Assistant</h3>
              <p className="pattern-card__intro">B2C / Prosumer Finance</p>
              <p className="pattern-card__label">Advisor</p>
              <ul className="pattern-card__list">
                <li>Analyzes portfolio and proposes trades and rebalancing as recommendations only</li>
              </ul>
              <p className="pattern-card__label">Co‑Pilot</p>
              <ul className="pattern-card__list">
                <li>Constructs an order basket aligned with chosen strategy</li>
                <li>Human investor approves or edits before submission</li>
              </ul>
              <p className="pattern-card__label">Autopilot</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Executes trades automatically within defined parameters (allocation bands, max order sizes)</li>
                <li>Escalates unusual market conditions; produces logs and reports</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Recruiting Assistant</h3>
              <p className="pattern-card__intro">HR Platform</p>
              <p className="pattern-card__label">Advisor</p>
              <ul className="pattern-card__list">
                <li>Ranks candidates, highlights promising profiles, suggests outreach templates</li>
                <li>Recruiters execute all actions manually</li>
              </ul>
              <p className="pattern-card__label">Co‑Pilot</p>
              <ul className="pattern-card__list">
                <li>Prepares shortlists and drafts outreach sequences</li>
                <li>Recruiters review and launch campaigns</li>
              </ul>
              <p className="pattern-card__label">Autopilot</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>For pre‑approved segments and templates, sends outreach automatically</li>
                <li>Monitors responses and flags interested candidates; keeps senior roles in Co‑Pilot</li>
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
              <p className="pattern-checklist-category__title">Mode Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the current delegation mode always visible where the agent operates?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users immediately tell if they&apos;re in Advisor, Co‑Pilot, or Autopilot?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Behavioral Contracts</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each mode have a clear, documented set of actions it can and cannot take?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are guardrails for Autopilot specific and testable (not vague promises)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Mode Switching</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is upgrading to Autopilot a deliberate action requiring explicit confirmation?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily downgrade or pause at any time?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Escalation & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there defined thresholds where Autopilot must escalate to human review?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system degrade to safer modes on errors or anomalies?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is every action logged with the mode that was in effect at execution time?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can admins view mode configurations, changes, and their owners?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Progressive Trust</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system suggest mode upgrades based on observed behavior and approval rates?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are mode recommendations data-driven rather than arbitrary time-based promotions?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
