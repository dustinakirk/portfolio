import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import PrivacyDataUsageControlsDemo from '../demos/PrivacyDataUsageControlsDemo';

// SEO metadata for this pattern page
export const PRIVACY_DATA_USAGE_CONTROLS_SEO = {
  title: "Privacy & Data Usage Controls - AI Trust Pattern",
  description: "Controls that make AI data collection, storage, and usage visible and adjustable, so that individuals and organizations can decide how an agentic system handles their information.",
  keywords: ["AI privacy", "data usage controls", "AI trust", "data collection", "AI personalization", "incognito mode", "AI compliance", "agentic UX", "data retention", "AI governance"],
  canonicalPath: "/agentic_ai_patterns/privacy-and-data-usage-controls"
};


export default function PrivacyDataUsageControlsPattern() {
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
            <span className="pattern-header__index">8.3</span>
            <div>
              <h1 className="pattern-header__title">Privacy & Data Usage Controls</h1>
              <p className="pattern-header__subtitle">
                Controls that make AI data collection, storage, and usage visible and adjustable, so that individuals and organizations can decide how an agentic system handles their information.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.3" patternTitle="Privacy & Data Usage Controls" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Privacy & data usage controls are the primary surfaces where an AI-powered product explains what data is collected, how it is processed, and for which purposes it is used&mdash;and where that behavior can be configured.
            </p>
            <p className="pattern-body">
              In agentic AI experiences&mdash;especially those driven through natural language chat&mdash;these controls are central to trust. The system often ingests free-form text, files, and integrated system data (CRM, calendars, code repositories). Without clear controls and explanations, this can feel opaque and risky, particularly in regulated or high-stakes environments.
            </p>
            <p className="pattern-body">
              In most SaaS and B2C products, this pattern appears as a dedicated <span className="pattern-body--bold">Privacy / Data & AI</span> section in settings, complemented by contextual indicators in the chat or task surfaces (e.g., &quot;Memory on&quot;, &quot;Training disabled&quot;, &quot;Incognito session&quot;). Together, they provide an overview of data flows, targeted toggles for specific capabilities, and reassurance that data handling follows policy and regulatory requirements.
            </p>
            <p className="pattern-body">
              <span className="pattern-body--bold">Example interactive scenario:</span> A design team embeds a mini &quot;Privacy Center&quot; into the AI assistant page:
            </p>
            <ul className="pattern-list">
              <li>A compact header panel above the chat shows a short statement: &quot;This assistant uses this workspace&apos;s data. Training: Off. Retention: 30 days.&quot; with a link: &quot;Manage data & memory&quot;.</li>
              <li>Clicking the link opens a side panel with a lifecycle diagram of data, toggles for personalization, analytics, and tool access, and an &quot;Incognito session&quot; option.</li>
              <li>Changing a toggle immediately updates the header to reflect the new state.</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/8.3 privacy controls.png"
              alt="Privacy & Data Usage Controls pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This example shows how privacy settings are surfaced directly within the AI chat interface. The chat header displays current data usage status—memory, training, and retention policies—with a link to manage settings. Click "Manage data & memory" to open the privacy control panel and explore granular toggles for chat memory, model training, and analytics. Notice how the data lifecycle diagram updates when you toggle settings. Try enabling "Incognito Session" to see how all privacy controls lock into their most restrictive state, with memory and training disabled and session-only retention applied.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Privacy and Data Usage Controls interactive demo">
            <PrivacyDataUsageControlsDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit privacy and data usage controls, agentic AI features often feel risky, confusing, or ungovernable:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Invisible data flows</span> &ndash; Users may not know whether prompts, attachments, or context from integrations are stored, shared, or used to train models, leading to hesitation and self-censorship.
              </li>
              <li>
                <span className="pattern-body--bold">Misalignment with compliance obligations</span> &ndash; Security, legal, and compliance teams cannot easily verify whether the AI feature respects policies (e.g., data residency, PHI handling, data retention), which can block adoption or force blanket bans.
              </li>
              <li>
                <span className="pattern-body--bold">No clear way to correct or revoke data use</span> &ndash; Once data is ingested, it is often unclear whether it can be deleted, redacted, or excluded from future training or personalization.
              </li>
              <li>
                <span className="pattern-body--bold">One-size-fits-all behavior in mixed-risk workflows</span> &ndash; The same data handling may be applied to experimentation, live production work, and highly sensitive workflows, with no quick way to switch to a more private mode.
              </li>
              <li>
                <span className="pattern-body--bold">Weak mental model of &quot;memory&quot;</span> &ndash; Many users assume that AI &quot;remembers everything forever&quot; or, conversely, that nothing persists across sessions. Lack of clarity can lead to over-sharing or under-utilization.
              </li>
            </ul>
            <p className="pattern-body">
              Privacy & data usage controls address these problems by making data flows explicit, configurable, and auditable, turning privacy from a vague promise into a concrete, manipulable system behavior.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when&hellip;
              </h3>
              <ul className="pattern-card__list">
                <li>
                  The AI agent can <span className="pattern-body--bold">retain information</span> across sessions (e.g., explicit &quot;memory&quot;, personalization, profiles, or long-lived projects).
                </li>
                <li>
                  The system <span className="pattern-body--bold">pulls from or writes to external systems</span>, such as CRMs, ticketing systems, EMRs, file storage, or code repositories.
                </li>
                <li>
                  The product operates in <span className="pattern-body--bold">regulated industries</span> (healthcare, finance, insurance, education, public sector) or handles sensitive categories like PHI, PII, financial or legal data.
                </li>
                <li>
                  AI capabilities can be <span className="pattern-body--bold">enabled or configured at multiple scopes</span> (individual, team, workspace, enterprise), especially where administrators manage risk.
                </li>
                <li>
                  Data may be used for <span className="pattern-body--bold">model improvement or cross-tenant learning</span>, and clear opt-in/opt-out behavior is required.
                </li>
                <li>
                  Data retention and residency are <span className="pattern-body--bold">contractually specified</span> (e.g., retention windows, geographic boundaries, deletion SLAs).
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI feature <span className="pattern-body--bold">only runs locally</span> on device or in a strictly isolated environment, and data never leaves that boundary in identifiable form.</li>
                <li>The system <span className="pattern-body--bold">does not log or persist prompts, responses, or metadata</span>, and this is already clearly stated in a simple notice near the AI surface.</li>
                <li>The product handles <span className="pattern-body--bold">no sensitive or regulated data</span>, and only uses AI on low-risk telemetry (e.g., anonymous usage analytics) that is already covered by existing privacy notices.</li>
                <li>A separate, well-established <span className="pattern-body--bold">global privacy center</span> already governs all data collection and processing for the product, and the AI feature does not introduce additional data flows or uses.</li>
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
                Privacy & data usage controls generally consist of a primary surface (privacy dashboard), granular controls that adjust specific behaviors, and contextual indicators embedded in the AI workflow.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Navigation
              </h3>
              <p className="pattern-card__intro">
                A &quot;Privacy & Data&quot; or &quot;Data & AI&quot; item under global settings.
              </p>
              <ul className="pattern-card__list">
                <li>Under Account or Organization settings</li>
                <li>For enterprise products, often under &quot;Security & Compliance&quot; or &quot;Governance&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry in AI Surface</h3>
              <p className="pattern-card__intro">
                A compact status area in the chat header or sidebar.
              </p>
              <ul className="pattern-card__list">
                <li>E.g., &quot;Memory: On &bull; Training: Off &bull; 30-day retention&quot;</li>
                <li>Inline link in AI system messages when data use is relevant</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Just-in-Time Prompts & Banners</h3>
              <p className="pattern-card__intro">
                Banners and prompts that appear at relevant moments.
              </p>
              <ul className="pattern-card__list">
                <li>Banners at first use of AI features that summarize data behavior</li>
                <li>Inline prompts when sensitive patterns are detected (e.g., API keys, PHI)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Item: Data Usage Rule</h3>
              <p className="pattern-card__intro">
                The core unit is a data usage rule or data category card.
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Label:</span> Short, action-oriented name (e.g., &quot;Chat history and training&quot;)</li>
                <li><span className="pattern-body--bold">Description:</span> Plain language explanation of what happens when on/off</li>
                <li><span className="pattern-body--bold">Controls:</span> Toggle, dropdown, or scope selector</li>
                <li><span className="pattern-body--bold">Metadata:</span> Retention window, data residency, scope indicator</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Design Elements */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Key design elements</p>
              <p className="pattern-body pattern-body--narrow">
                The essential components that make privacy controls effective and trustworthy.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Comprehensive Privacy Dashboard</h3>
              <ul className="pattern-card__list">
                <li>A single, discoverable location summarizing <span className="pattern-body--bold">what data is collected, why, and under which policies</span></li>
                <li>A simple &quot;Data use at a glance&quot; section</li>
                <li>Visual breakdowns for data sources, processing activities, and data lifecycle</li>
                <li>Clear linkage to legal privacy policy, DPAs, and regulatory documentation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Granular Toggles and Permissions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Opt-in/opt-out switch</span> for model training/improvement</li>
                <li><span className="pattern-body--bold">Controls for analytics and telemetry</span> differentiating functional logs from opt-in analytics</li>
                <li><span className="pattern-body--bold">Per-source permissions</span> for integrations and repositories</li>
                <li><span className="pattern-body--bold">Scope-aware settings</span> at individual, project, team, and organization levels</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Audit and Compliance Features</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Exportable data usage reports</span> showing users, data sources, retention/deletion events</li>
                <li><span className="pattern-body--bold">Policy integration</span> with visible compliance rules (e.g., &quot;Healthcare mode: PHI redaction applied&quot;)</li>
                <li><span className="pattern-body--bold">Traceability</span> for when settings were changed, by whom, and what was affected</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback and Education</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Short, embedded explanations</span> with progressive disclosure</li>
                <li><span className="pattern-body--bold">Guided walkthroughs</span> during onboarding for privacy setup</li>
                <li><span className="pattern-body--bold">Real-time indicators</span> for memory state, session mode, training status</li>
                <li><span className="pattern-body--bold">Trade-off explanations</span> when disabling features (e.g., reduced personalization)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of privacy controls spans from initial configuration through ongoing review.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>Defaults reflect the product&apos;s privacy posture and regulatory constraints</li>
                <li>First use triggers a short, layered disclosure explaining what data is used and how to change settings</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. First-Run Configuration</h3>
              <ul className="pattern-card__list">
                <li>B2B: Administrators guided through privacy setup (retention windows, admin log visibility, data sources)</li>
                <li>Individuals: Simpler on/off choice for memory and training, with option to configure later</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. In-Session Reinforcement</h3>
              <ul className="pattern-card__list">
                <li>Compact status always visible showing memory, training, and integration state</li>
                <li>Sensitive actions generate contextual notices clarifying which policy is applied</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Dynamic Adjustments</h3>
              <ul className="pattern-card__list">
                <li>Controls appear in relevant contexts (e.g., &quot;Treat this conversation as incognito&quot;)</li>
                <li>Switching settings produces immediate feedback and updates contextual status</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Retention & Deletion</h3>
              <ul className="pattern-card__list">
                <li>Retention windows and deletion behavior visible and configurable per data category</li>
                <li>Export options for conversation history, memory, or logs</li>
                <li>Deletion flows specify what is removed and what remains</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Policy & Admin Overrides</h3>
              <ul className="pattern-card__list">
                <li>Enterprise admins can lock certain settings and mark them as &quot;enforced&quot;</li>
                <li>Individual-level UI reflects when controls are governed at a higher scope</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & messaging guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; the semantics around privacy controls must be explicit and consistent.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Chat content is not used to train AI models.&quot;</li>
                  <li>&quot;Stored for 30 days, then deleted from application logs.&quot;</li>
                  <li>&quot;No emails, messages, or API calls are sent in this mode.&quot;</li>
                  <li>&quot;Applies to: this workspace. Managed by org admin.&quot;</li>
                  <li>&quot;Disabling memory will reduce personalization in future conversations.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Improve service quality&quot; (without explaining what data is used)</li>
                  <li>&quot;Test mode&quot; (without clarifying whether real systems are affected)</li>
                  <li>&quot;Persisted in log storage with TTL of 30 days&quot; (too technical)</li>
                  <li>&quot;Safe mode&quot; (vague, doesn&apos;t explain what is safe)</li>
                  <li>Pre-ticked boxes for high-risk data sharing</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Plain, Non-Legal Language</h3>
                <ul className="pattern-card__list">
                  <li>Avoid jargon like &quot;data controller&quot; in the main controls</li>
                  <li>Keep legal terms in linked documents</li>
                  <li>Describe behavior, not implementation</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Be Explicit About Scope</h3>
                <ul className="pattern-card__list">
                  <li>Make it clear whether a control applies to this conversation, user, team, or organization</li>
                  <li>Indicate default vs. changed state</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Avoid Dark Patterns
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>No pre-ticked boxes for high-risk data sharing without clear consent</li>
                  <li>No misleading labels that obscure data sharing</li>
                  <li>Provide concrete examples in descriptions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States</p>
              <p className="pattern-body pattern-body--narrow">
                Design should consider the following states for data usage controls.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Default State</h3>
              <ul className="pattern-card__list">
                <li>Baseline configuration aligned with product policy and plan</li>
                <li>Copy reflects that this is the default and indicates whether it is conservative</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Restricted / High-Privacy</h3>
              <ul className="pattern-card__list">
                <li>Memory disabled, short retention, limited integrations, training off</li>
                <li>Visual emphasis that this is a stricter mode</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Standard Operational</h3>
              <ul className="pattern-card__list">
                <li>Balanced settings where functionality and privacy are both considered</li>
                <li>Often used outside highly regulated contexts</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin-Enforced</h3>
              <ul className="pattern-card__list">
                <li>Settings locked and controlled at a higher scope (e.g., organization)</li>
                <li>Controls appear disabled with an explanation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error / Degraded</h3>
              <ul className="pattern-card__list">
                <li>When a setting cannot be applied (e.g., configuration conflicts)</li>
                <li>Clear error state explains what failed and current behavior</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Export & Deletion</h3>
              <ul className="pattern-card__list">
                <li>Progress states for exporting or deleting data</li>
                <li>Communicate what is processed, when complete, and any residual data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                Different manifestations of privacy controls for different contexts and user types.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">End-User-Focused Controls</h3>
              <p className="pattern-card__intro">Simplified surfaces for individuals:</p>
              <ul className="pattern-card__list">
                <li>Memory on/off</li>
                <li>Incognito mode for specific chats</li>
                <li>Control over which personal profile fields the agent may reference</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrator / Governance Controls</h3>
              <p className="pattern-card__intro">More complex surfaces with:</p>
              <ul className="pattern-card__list">
                <li>Plan-wide defaults</li>
                <li>Enforcement tools (locked settings)</li>
                <li>Export, audit, and reporting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Per-Session Controls</h3>
              <p className="pattern-card__intro">Lightweight inline pattern for a single conversation:</p>
              <ul className="pattern-card__list">
                <li>Mode switch in the chat header (&quot;Standard / Incognito&quot;)</li>
                <li>Per-thread option to exclude messages from training or memory</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regulated-Mode Variant</h3>
              <p className="pattern-card__intro">When enabled, stricter rules apply:</p>
              <ul className="pattern-card__list">
                <li>PHI redaction</li>
                <li>No cross-tenant processing</li>
                <li>Short retention and extensive audit logging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & Technical Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data & technical considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Technical requirements for robust privacy control implementation.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Enforcement, Not Just Presentation</h3>
              <ul className="pattern-card__list">
                <li>UI controls must map directly to robust backend enforcement</li>
                <li>A toggle that says &quot;Training disabled&quot; must reliably prevent data from contributing to training pipelines</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consistent Behavior Across Surfaces</h3>
              <ul className="pattern-card__list">
                <li>Settings changed in the privacy dashboard must immediately apply to all AI surfaces (chat, agents, automation)</li>
                <li>All devices and platforms (web, mobile, desktop)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Versioning and Granular Retention</h3>
              <ul className="pattern-card__list">
                <li>Changes to key privacy settings should be versioned and logged</li>
                <li>Different data types may require different retention policies</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Localization & Fail-Safe Design</h3>
              <ul className="pattern-card__list">
                <li>When data is restricted to specific regions, UI and backend must align</li>
                <li>In ambiguous conditions, fall back to more privacy-preserving behavior</li>
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
                Certain implementations of privacy controls can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Hidden or Fragmented Controls</h3>
                  <p className="antipattern-subtitle">Privacy settings spread across multiple menus.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When AI-specific settings are buried or inconsistent across menus, it becomes hard to understand overall data behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Consolidate privacy controls in a single, discoverable location with contextual links from AI surfaces.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Vague or Euphemistic Language</h3>
                  <p className="antipattern-subtitle">Phrases like &quot;Improve service quality&quot; without specifics.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without concrete examples or explicit mention of training, sharing, or retention, users cannot make informed decisions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use plain language that explicitly states what data is used, where it goes, and for how long.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Retroactive Surprises</h3>
                  <p className="antipattern-subtitle">Changing default data usage without clear communication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Changing default data usage for existing tenants without clear communication, migration paths, or explicit consent can trigger serious trust and compliance issues.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Communicate changes proactively, provide migration paths, and require explicit consent for expanded data use.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Misaligned Banners and Reality</h3>
                  <p className="antipattern-subtitle">Displaying &quot;Training off&quot; while still using data for training.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Displaying reassuring messages while still using data for model improvement&mdash;internally or via third parties&mdash;is both unethical and risky.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure UI states accurately reflect real data handling behavior with robust backend enforcement.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Escape Hatch for Sensitive Work</h3>
                  <p className="antipattern-subtitle">Forcing a single long-lived memory model on every interaction.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without an incognito or high-privacy option, users may avoid the AI feature entirely or resort to shadow IT and workarounds.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide incognito or per-session privacy modes for sensitive scenarios.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">&quot;All or Nothing&quot; Training Controls</h3>
                  <p className="antipattern-subtitle">Only offering a global on/off switch for training.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without per-source or per-context controls, teams may disable valuable capabilities entirely rather than configure them appropriately.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide granular controls at multiple scopes (conversation, project, workspace, organization).</span>
              </div>
            </div>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases & flows</p>
              <p className="pattern-body pattern-body--narrow">
                How privacy & data usage controls apply across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Healthcare Assistant with PHI-Safe Mode</h3>
              <p className="pattern-card__intro">Clinical system for drafting visit summaries</p>
              <p className="pattern-card__label">Privacy configuration</p>
              <ul className="pattern-card__list">
                <li>Cross-tenant training disabled</li>
                <li>PHI redaction enforced in logs</li>
                <li>Strict retention (7&ndash;30 days) for operational logs</li>
              </ul>
              <p className="pattern-card__label">In-chat experience</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Banner: &quot;Healthcare mode active: PHI redaction and training disabled&quot;</li>
                <li>Sensitive data flags confirm stricter policy applied</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Enterprise Productivity Agent</h3>
              <p className="pattern-card__intro">AI agent in documentation or work management</p>
              <p className="pattern-card__label">Privacy configuration</p>
              <ul className="pattern-card__list">
                <li>Memory: opt-in per account</li>
                <li>Training: disabled at workspace level</li>
                <li>Data sources: restricted to certain repositories</li>
              </ul>
              <p className="pattern-card__label">Incognito mode</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Visually differentiated session</li>
                <li>No long-term memory stored</li>
                <li>Limited retention for safety monitoring only</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Collaborative Project with Team-Only Sharing</h3>
              <p className="pattern-card__intro">AI assistant in a collaboration hub</p>
              <p className="pattern-card__label">Team configuration</p>
              <ul className="pattern-card__list">
                <li>Project-level &quot;shared memory&quot; for key decisions and vocabulary</li>
                <li>Policy prevents sharing memory outside the project</li>
              </ul>
              <p className="pattern-card__label">In-app experience</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Label indicates &quot;Project memory only&quot; when referencing context</li>
                <li>Attempts to pull from outside project are blocked or require approval</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consumer Self-Service Privacy</h3>
              <p className="pattern-card__intro">Consumer-facing app with AI chatbot</p>
              <p className="pattern-card__label">Individual controls</p>
              <ul className="pattern-card__list">
                <li>Turn off personalization while still using generic guidance</li>
                <li>Prevent interaction data from model improvement</li>
                <li>Delete past conversations and personalization data</li>
              </ul>
              <p className="pattern-card__label">In-chat experience</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Header shows &quot;Personalization: Off&quot; when configured</li>
                <li>Assistant acknowledges recommendations are based on general patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Other patterns that work alongside Privacy & Data Usage Controls.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">8.1 Memory Inspector & Editor</h3>
              <p className="pattern-card__intro">
                Focuses on how AI remembers and forgets across sessions, including memory inspection and editing.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8.2 Preference & Persona Settings</h3>
              <p className="pattern-card__intro">
                Covers explanations of why the AI responded in a particular way and which preferences influenced behavior.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consent & Onboarding for AI</h3>
              <p className="pattern-card__intro">
                Emphasizes first-run flows and consent collection when enabling AI capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Ensuring privacy controls are usable by everyone.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard & Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Controls must be <span className="pattern-body--bold">fully operable via keyboard</span> and follow standard focus order</li>
                <li>Toggle states and current privacy modes must be <span className="pattern-body--bold">exposed to screen readers</span> with descriptive labels</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual & Cognitive Accessibility</h3>
              <ul className="pattern-card__list">
                <li>Color is not the only way to convey state; use <span className="pattern-body--bold">text labels and icons</span></li>
                <li>Long-form explanations should be <span className="pattern-body--bold">structured with headings and lists</span></li>
                <li>Avoid ambiguity, double negatives, or overloaded terms</li>
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
              <p className="pattern-checklist-category__title">Dashboard & Discovery</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>A single, discoverable Privacy / Data & AI dashboard exists and is linked from the AI surface</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The dashboard clearly explains what data is collected, where it is stored, how long it is retained, and whether it is used for training</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Granular Controls</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Granular controls exist for training/model improvement, analytics/logs, integrations, and memory/personalization</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Contextual indicators are present in the AI surface and always reflect the current state</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Privacy Modes</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Incognito or high-privacy modes are available for sensitive scenarios</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Admin-level controls and enforcement are implemented for enterprise contexts</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Data Operations</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Export and deletion flows are present and communicate clearly what is and is not removed</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Backend enforcement is verified so that UI states accurately reflect real data handling behavior</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility & Content</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>All controls are accessible (keyboard, screen reader, color-agnostic states)</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Copy avoids dark patterns and clearly communicates trade-offs when privacy is increased or decreased</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
