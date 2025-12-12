import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import StructuredClarificationDemo from '../demos/StructuredClarificationDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const STRUCTURED_CLARIFICATION_PROMPTS_SEO = {
  title: "Structured Clarification Prompts - AI Trust Pattern",
  description: "A pattern for agentic AI systems to ask a small set of targeted, structured questions before acting, resolving ambiguity while keeping interactions fast and trustworthy.",
  keywords: ["structured clarification", "AI prompts", "clarification questions", "agentic AI", "workflow automation", "user intent", "AI trust patterns", "pre-execution prompts"],
  canonicalPath: "/agentic_ai_patterns/structured-clarification-prompts"
};

export default function StructuredClarificationPromptsPattern() {
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
            <span className="pattern-header__index">4.1</span>
            <div>
              <h1 className="pattern-header__title">Structured Clarification Prompts</h1>
              <p className="pattern-header__subtitle">
                A pattern for agentic AI systems to ask a small set of targeted, structured questions before acting, resolving ambiguity while keeping interactions fast and trustworthy.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="4.1" patternTitle="Structured Clarification Prompts" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Structured Clarification Prompts are short, focused question sets that an AI agent surfaces when a request is underspecified or risky. Instead of improvising or stalling with vague follow-up questions, the system presents a compact, structured panel of clarifications—often as multiple-choice fields with sensible defaults and a clear &quot;other/custom&quot; option.
            </p>
            <p className="pattern-body">
              This pattern appears wherever an agent is about to:
            </p>
            <ul className="pattern-list">
              <li>Call tools or APIs that affect real data or systems</li>
              <li>Execute multi-step workflows across services or environments</li>
              <li>Spend money, allocate resources, or change configurations on behalf of a user</li>
            </ul>
            <p className="pattern-body">
              The core idea is to <span className="pattern-body--bold">ask the minimum number of high-value questions</span>, in a structured format, only when needed. This reduces error cascades and rework, supports auditability, and helps users feel that the system is careful rather than careless or needy.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/4.1 clarification prompts.png"
              alt="Structured Clarification Prompts pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Structured clarification prompts example">
          <StructuredClarificationDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without this pattern, agentic systems often exhibit one of two extremes:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Silent assumption</span> – The agent guesses missing details and proceeds. In high-impact contexts (deployments, billing, data mutations), those guesses can cause production issues, compliance problems, or irrecoverable changes.
              </li>
              <li>
                <span className="pattern-body--bold">Interrogation mode</span> – The agent asks long chains of generic, open-ended questions (&quot;Can you clarify?&quot; &quot;What did you mean?&quot;) that feel repetitive and unstructured. This raises cognitive load and often leads to abandonment.
              </li>
              <li>
                <span className="pattern-body--bold">Fragmented clarification</span> – Clarifications appear sporadically across the conversation: one question when the task starts, another mid-run, a third after an error. Answers are not reused or remembered, and the agent occasionally asks the same thing again.
              </li>
            </ul>
            <p className="pattern-body">
              As a result:
            </p>
            <ul className="pattern-list">
              <li>Users are unsure why the agent is asking questions or how answers will be used.</li>
              <li>Teams cannot rely on the system for repeatable, auditable workflows.</li>
              <li>Multi-agent setups suffer error cascades when underspecified handoffs go unclarified.</li>
            </ul>
            <p className="pattern-body">
              Structured Clarification Prompts address these issues by packaging necessary questions into a deliberate, minimal, and visible step in the interaction.
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
                  <span className="pattern-body--bold">High-impact or irreversible actions</span> – data deletions, production deployments, financial operations, security or permission changes, bulk updates.
                </li>
                <li>
                  <span className="pattern-body--bold">Underspecified and high-variance requests</span> – &quot;Set up a campaign for existing customers&quot; where &quot;existing&quot; could mean multiple segments, regions, or tiers.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-agent or multi-tool workflows</span> – where subtle gaps at one step can cascade into downstream failures.
                </li>
                <li>
                  <span className="pattern-body--bold">Compliance, audit, or governance needs</span> – HR, healthcare, fintech, marketing automation, or cloud infrastructure management.
                </li>
                <li>
                  <span className="pattern-body--bold">Reasonably stable user preferences</span> – preferred environment, typical budget ceilings, default output formats, or notification channels.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The interaction is <span className="pattern-body--bold">low-stakes and reversible</span> – brainstorming ideas, drafting non-critical copy, summarizing a document.</li>
                <li>A <span className="pattern-body--bold">traditional form or configuration UI</span> already captures everything structurally.</li>
                <li>The <span className="pattern-body--bold">missing details are trivial or easily inferred</span> from context – answering a quick fact-based question, or generating a one-off email draft where small ambiguities carry little risk.</li>
                <li>The system is serving a <span className="pattern-body--bold">purely exploratory or learning use case</span> – open-ended research chats where the agent is not expected to take real-world actions.</li>
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
                Structured Clarification Prompts typically appear as a compact panel or inline card within the chat, summarizing what the agent needs to know and offering structured controls to resolve ambiguity quickly.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Pre-Action Checkpoint
              </h3>
              <p className="pattern-card__intro">
                After the agent drafts a plan or detects missing critical fields, but before it calls tools, commits changes, or spends money.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Before continuing, 3 details require confirmation.&quot;</li>
                <li>Appears after intent detection but before execution</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Mid-Run Pause</h3>
              <p className="pattern-card__intro">
                When a long-running or multi-step automation reaches a risky or ambiguous step and needs clarification to proceed safely.
              </p>
              <ul className="pattern-card__list">
                <li>Choosing between multiple environments</li>
                <li>Resolving conflicting records</li>
                <li>Clarification needed to continue safely</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Inline Follow-Up</h3>
              <p className="pattern-card__intro">
                For localized uncertainty inside a result or recommendation, such as a small question card embedded in the response.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Which of these departments should this apply to?&quot;</li>
                <li>Smaller than a full modal</li>
                <li>Embedded in the response itself</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Preference Templates</h3>
              <p className="pattern-card__intro">
                For frequently repeated tasks, preferences and defaults are set upfront.
              </p>
              <ul className="pattern-card__list">
                <li>Later tasks reuse these templates</li>
                <li>Only asks clarifications when deviations or unusual conditions arise</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Clarification Question</h3>
            <p className="pattern-card__intro">
              The fundamental unit is a Clarification Question object, often rendered as a card or row in a grouped panel.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label & Description</p>
                <ul className="pattern-card__list">
                  <li><em>Label:</em> &quot;Which environment should this run in?&quot;</li>
                  <li><em>Description:</em> One line explaining why the question matters</li>
                  <li>&quot;Running in production may affect live customers; staging is safe for testing.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Radio buttons, segmented controls, or dropdowns for mutually exclusive options</li>
                  <li>Checkboxes or chips for multi-select</li>
                  <li>Numeric inputs or sliders for ranges (budget, limits, thresholds)</li>
                  <li>A clearly visible &quot;Other / custom…&quot; field or button</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Criticality:</span> Required vs optional</li>
                  <li><span className="pattern-body--bold">Scope tags:</span> &quot;Production impact&quot;, &quot;Billing&quot;, &quot;Notifications&quot;</li>
                  <li><span className="pattern-body--bold">Defaults:</span> Pre-fills sourced from prior interactions or context</li>
                  <li><span className="pattern-body--bold">Persistence:</span> &quot;Save as my default&quot; or &quot;Apply for this project only&quot;</li>
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
                How clarification prompts surface at different moments in the user&apos;s journey with the agent.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Intent & Ambiguity Detection</h3>
              <ul className="pattern-card__list">
                <li>The agent receives a task and generates an internal plan.</li>
                <li>A detection layer evaluates whether required fields are missing, conflicting, or uncertain.</li>
                <li>Categorizes unknowns by impact (e.g., &quot;high-risk config&quot;, &quot;optional preference&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Selective Clarification</h3>
              <ul className="pattern-card__list">
                <li>High-impact unknowns trigger clarifications.</li>
                <li>Low-impact unknowns are filled via inference from context/history, safe defaults, or deferred questions.</li>
                <li>A budget (e.g., max 3–5 questions) limits how many prompts are surfaced at once.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Question Bundling</h3>
              <ul className="pattern-card__list">
                <li>All high-priority unknowns for this action are collected into a bundle.</li>
                <li>Similar or overlapping questions from multiple tools or agents are merged.</li>
                <li>Questions ordered by importance and logical flow.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Structured Panel Presentation</h3>
              <ul className="pattern-card__list">
                <li>&quot;To run this workflow safely, 4 clarifications are required.&quot;</li>
                <li>Visible required/optional markers.</li>
                <li>Pre-filled defaults wherever safe.</li>
                <li>Progress indicator for longer sets.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. User Answers</h3>
              <ul className="pattern-card__list">
                <li>Users select options, adjust values, or choose &quot;Other / custom…&quot; to provide free text.</li>
                <li>Validation runs inline (out-of-range values, missing required fields).</li>
                <li>Answers are previewed in a summary row.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Execution with Context</h3>
              <ul className="pattern-card__list">
                <li>The agent incorporates the clarified values into its plan.</li>
                <li>Exposes them in a pre-execution summary.</li>
                <li>User confirms the plan and the agent proceeds to act.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Preference Persistence</h3>
              <ul className="pattern-card__list">
                <li>For questions tagged as &quot;preference,&quot; the interface can surface a &quot;Remember this for next time&quot; checkbox.</li>
                <li>Values are stored in user or workspace settings and reused as defaults.</li>
                <li>When a persisted preference is applied, the interface discloses that origin and offers an override.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Logging, Audit & Learning</h3>
              <ul className="pattern-card__list">
                <li>Clarification bundles and answers are logged as structured events.</li>
                <li>Enables audits of why a particular action was taken.</li>
                <li>Analysis of which questions are frequently skipped or overridden (signals for redesign).</li>
                <li>Data for improving the underlying &quot;when to ask&quot; models.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & interaction guidelines</p>
            <p className="pattern-body">
              The language and design of clarification prompts should minimize friction while maximizing clarity about what the answer affects.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Effective clarification design</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Focus on high-impact questions—reserve blocking clarifications for parameters that materially change risk, cost, or outcomes.</li>
                  <li>Make the value of each question explicit: &quot;Max budget controls the total ad spend this agent can allocate across channels.&quot;</li>
                  <li>Use structured choices (radio, dropdown, checkbox) with an &quot;Other / custom…&quot; escape hatch.</li>
                  <li>Bundle 2–6 related questions into a single panel when preparing for a significant action.</li>
                  <li>Pre-fill values from historical choices, current context, or organization defaults.</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak clarification design</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Generic phrasing like &quot;This field is required&quot; without context.</li>
                  <li>Open-ended questions that require users to guess the right format.</li>
                  <li>Asking about cosmetic or reversible details before doing anything useful.</li>
                  <li>Rigid multiple-choice options without a way to specify a custom answer.</li>
                  <li>Long chains of questions scattered across multiple messages.</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Reuse What the System Knows</h3>
                <ul className="pattern-card__list">
                  <li>Pre-fill from historical choices (with disclosure)</li>
                  <li>Use current context (active project, environment, account)</li>
                  <li>Apply organization defaults</li>
                  <li>Skip questions when confident, low-risk inference is available</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Match Tone to Domain</h3>
                <ul className="pattern-card__list">
                  <li>Use straightforward, professional phrasing in B2B and high-stakes contexts</li>
                  <li>Avoid casual wording for critical decisions</li>
                  <li>Clarity and seriousness support trust</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Accessibility
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Keep labels concise and avoid jargon unless the audience is specialized</li>
                  <li>Ensure full keyboard navigation and screen-reader-friendly grouping</li>
                  <li>Break up dense explanation text using short paragraphs or expandable &quot;Learn more&quot; links</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                Different manifestations of the pattern suited to different contexts and risk levels.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Inline Micro-Clarification</h3>
              <ul className="pattern-card__list">
                <li>A single, small question embedded directly beneath the agent&apos;s message.</li>
                <li>Best for localized, low- to medium-impact choices.</li>
                <li>Example: &quot;Which file should this apply to?&quot; with 2–3 options.</li>
                <li>Minimizes disruption and often auto-submits on selection.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Pre-Execution Clarification Panel</h3>
              <ul className="pattern-card__list">
                <li>A more prominent panel or side sheet used before a high-impact workflow runs.</li>
                <li>Bundles all critical questions related to an operation.</li>
                <li>Often combined with a plan summary and confirmation step.</li>
                <li>Suited to deployment, migration, or financial workflows.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Step-Level Clarification in Multi-Agent Pipelines</h3>
              <ul className="pattern-card__list">
                <li>Each agent or tool can emit its own clarification request.</li>
                <li>A central &quot;clarification manager&quot; bundles them to avoid repetition.</li>
                <li>Questions from upstream agents are resolved before downstream agents proceed.</li>
                <li>Reduces error propagation across the chain.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Preference-First Templates</h3>
              <ul className="pattern-card__list">
                <li>For frequently repeated tasks, the system offers &quot;templates&quot; where preferences and defaults are set upfront.</li>
                <li>Later tasks reuse these templates.</li>
                <li>Only asks clarifications when deviations or unusual conditions arise.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical & data considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building this pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Deciding When to Ask</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Rules + model-based heuristics:</span> Required-field checks for tools and APIs.</li>
                <li><span className="pattern-body--bold">Risk classification:</span> Environment = production, financial amount &gt; threshold.</li>
                <li><span className="pattern-body--bold">Ambiguity detection:</span> Multiple viable entities, conflicting constraints.</li>
                <li><span className="pattern-body--bold">Question budget:</span> Per task to prevent over-questioning.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Modeling Impact vs Cost</h3>
              <ul className="pattern-card__list">
                <li>Treat each potential question as carrying an expected reduction in task error or risk.</li>
                <li>Also consider cost in latency and user effort.</li>
                <li>Prioritize questions with the highest impact-to-cost ratio.</li>
                <li>&quot;Ask only when the gain justifies the friction.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured Representation</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">id:</span> Unique identifier for the question</li>
                <li><span className="pattern-body--bold">label:</span> The question text</li>
                <li><span className="pattern-body--bold">description:</span> Why it matters</li>
                <li><span className="pattern-body--bold">type:</span> single-select, multi-select, numeric, text</li>
                <li><span className="pattern-body--bold">options:</span> Array of choices</li>
                <li><span className="pattern-body--bold">default:</span> Pre-filled value</li>
                <li><span className="pattern-body--bold">criticality:</span> high, medium, low</li>
                <li><span className="pattern-body--bold">persistable:</span> Whether to offer &quot;remember this&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Orchestration</h3>
              <ul className="pattern-card__list">
                <li>Centralize clarification logic so multiple agents do not independently ask similar questions.</li>
                <li>Attach clarifications to edges (handoffs) between agents.</li>
                <li>Treat each edge as a potential failure point.</li>
                <li>An edge-local clarifier improves robustness without large latency overhead.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How Structured Clarification Prompts apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Workflow Builder</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                &quot;Clean inactive leads and sync high-intent contacts into CRM and marketing tools.&quot;
              </p>
              <p className="pattern-card__label">Clarification panel:</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Target environment:</span> Staging / Production</li>
                <li><span className="pattern-body--bold">Contact source:</span> CRM only / Product data only / Both</li>
                <li><span className="pattern-body--bold">Max records to update:</span> 1,000 / 5,000 / 25,000 / Custom</li>
                <li><span className="pattern-body--bold">Notification channel:</span> Slack #revops / Email / None</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Campaign Agent</h3>
              <p className="pattern-card__intro">B2B/B2C</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                &quot;Launch a reactivation campaign for churned subscribers.&quot;
              </p>
              <p className="pattern-card__label">Clarification panel:</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Audience definition:</span> Canceled in last 30/90 days, All past subscribers, Custom segment</li>
                <li><span className="pattern-body--bold">Max monthly budget:</span> $5,000 / $10,000 / Custom</li>
                <li><span className="pattern-body--bold">Primary KPI:</span> Re-subscriptions / Trial signups / Site traffic</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Engineering Agent</h3>
              <p className="pattern-card__intro">Internal Tools</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                &quot;Backfill missing analytics events for the last quarter.&quot;
              </p>
              <p className="pattern-card__label">Clarification panel:</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Time window:</span> This month only / Last 90 days / Custom range</li>
                <li><span className="pattern-body--bold">Backfill scope:</span> Page views only / All events / Specific event types</li>
                <li><span className="pattern-body--bold">Concurrency limit:</span> Slider or numeric field with safe defaults</li>
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
                  <h3 className="antipattern-title">Endless Interrogation</h3>
                  <p className="antipattern-subtitle">Dozens of questions across multiple messages with no clear grouping.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This feels like a form rather than a conversation and increases abandonment. Users lose track of what they&apos;ve already answered and why it matters.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Bundle related questions, limit to 3–5 at a time, and show progress indicators.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Blocking on Trivial Details</h3>
                  <p className="antipattern-subtitle">Requiring clarification for low-risk stylistic choices before doing anything useful.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Asking about email tone or formatting preferences before the system demonstrates any value creates friction and delays trust-building.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Reserve blocking clarifications for high-impact decisions. Use sensible defaults for stylistic choices.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Duplicate Questions in One Session</h3>
                  <p className="antipattern-subtitle">Asking the same question again because the system did not store or reuse the earlier answer.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This signals that the system is not paying attention and wastes user effort. It undermines trust in the agent&apos;s competence.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Persist answers within the session and offer preference saving for cross-session reuse.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Assumptions</h3>
                  <p className="antipattern-subtitle">Inferring critical values and never showing them in a summary or confirmation step.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users are surprised when actions don&apos;t match their expectations because they never saw what the system assumed. This is especially dangerous for high-impact actions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show inferred values in a pre-execution summary. Allow users to inspect and change assumptions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Escape Hatch for Options</h3>
                  <p className="antipattern-subtitle">Providing rigid multiple-choice options without a way to specify a custom answer.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Forces users into inaccurate selections when their true answer doesn&apos;t fit the predefined options. This leads to errors and frustration.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always include an &quot;Other / custom…&quot; option that opens a free-text or advanced input field.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Instrument the pattern to understand whether it actually improves task success and user trust.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Clarification Rate</h3>
              <ul className="pattern-card__list">
                <li>Percentage of tasks that trigger Structured Clarification Prompts.</li>
                <li>Spikes may indicate overly cautious policies.</li>
                <li>Near-zero values may signal under-clarification.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Success & Rollback Rate</h3>
              <ul className="pattern-card__list">
                <li>Compare failure/rollback incidents for tasks with and without clarifications.</li>
                <li>Track manual reversions and error alerts.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Corrections Post-Execution</h3>
              <ul className="pattern-card__list">
                <li>Frequency of messages like &quot;That is not the right segment&quot; or &quot;Wrong environment.&quot;</li>
                <li>Indicates missed or ineffective clarifications.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Preference Utilization</h3>
              <ul className="pattern-card__list">
                <li>How often persisted answers are reused.</li>
                <li>How often they are overridden.</li>
                <li>Reveals whether defaults are helpful or stale.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Completion Time</h3>
              <ul className="pattern-card__list">
                <li>Monitor how clarification affects overall time-to-completion.</li>
                <li>Longer conversations are not inherently worse, but unnecessary turns are harmful.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Perceived Trust</h3>
              <ul className="pattern-card__list">
                <li>&quot;How clear is it what this agent will do?&quot;</li>
                <li>&quot;Has this agent done anything that surprised you?&quot;</li>
                <li>Qualitative feedback focused on confidence.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist for design & review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Question Design</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-impact unknowns explicitly modeled and classified?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system have a clear policy for when to ask vs when to infer?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each question explain what the answer affects?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Presentation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are clarification questions bundled into coherent panels rather than scattered messages?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are inputs structured where possible, with an obvious &quot;Other / custom…&quot; escape hatch?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Experience</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users accept suggested defaults or skip non-critical questions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can preferences be persisted with explicit consent and surfaced when reused?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all clarifications logged as structured events for audit and learning?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are metrics in place to track impact on task success, errors, and user trust?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
