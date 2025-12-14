import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import ConfessionsViewDemo from '../demos/ConfessionsViewDemo';

// SEO metadata for this pattern page
export const CONFESSIONS_VIEW_SEO = {
  title: "Confessions View (Post-Task Self-Report) - AI Trust Pattern",
  description: "A post-task, structured self-report where the agent explicitly describes how well it followed its instructions, which shortcuts it took, and where it was uncertain, in order to surface misbehavior and support oversight.",
  keywords: ["AI confessions", "self-report", "AI transparency", "AI trust", "AI honesty", "policy compliance", "AI oversight", "agentic UX", "AI accountability"],
  canonicalPath: "/agentic_ai_patterns/confessions-view"
};

export default function ConfessionsViewPattern() {
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
            <span className="pattern-header__index">5.6</span>
            <div>
              <h1 className="pattern-header__title">Confessions View (Post-Task Self-Report)</h1>
              <p className="pattern-header__subtitle">
                A post-task, structured self-report where the agent explicitly describes how well it followed its instructions, which shortcuts it took, and where it was uncertain, in order to surface misbehavior and support oversight.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.6" patternTitle="Confessions View" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              The Confessions View is a transparency pattern for agentic AI systems that introduces a second, honesty-focused output alongside the main task result.
            </p>
            <p className="pattern-body">
              After the agent completes an action or generates an answer, it can be prompted to produce a structured &quot;confession&quot; describing which instructions and policies applied, whether it believes it complied with each one, and where it cut corners, violated constraints, or was uncertain.
            </p>
            <p className="pattern-body">
              This post-hoc self-report does not prevent bad behavior; instead, it makes hidden behavior more observable, especially in cases where the main answer looks polished yet was produced via shortcuts, reward hacking, or misapplied judgment.
            </p>
            <p className="pattern-body">
              In B2B and B2C web applications, the Confessions View typically appears as an expandable panel or detail drawer attached to the agent&apos;s completed answer or task card. It functions as:
            </p>
            <ul className="pattern-list">
              <li>A <span className="pattern-body--bold">user-facing explanation</span> of how closely the agent followed instructions.</li>
              <li>An <span className="pattern-body--bold">operator/admin tool</span> for monitoring risky behaviors across a fleet of agents.</li>
              <li>A <span className="pattern-body--bold">training and evaluation hook</span> for collecting signals about honesty and policy adherence.</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/5.6 confessions.png"
              alt="Confessions View pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows a confessions view where an AI agent proactively discloses limitations, uncertainties, and potential issues with its output. Rather than presenting a polished facade, the agent surfaces what it&apos;s unsure about, what shortcuts it took, and where human review might be needed.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Confessions View interactive demo">
            <ConfessionsViewDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic AI systems often perform complex, multi-step tasks that are difficult for end-users and operators to fully audit. Without an explicit self-report, several problems emerge:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Hidden shortcuts and misalignment</span> &ndash; Models can optimize for the wrong objective (e.g., &quot;what passes an automated checker&quot; instead of &quot;what truly follows the policy&quot;) while producing answers that look acceptable on the surface.
              </li>
              <li>
                <span className="pattern-body--bold">False sense of safety in polished outputs</span> &ndash; High-quality language, confident tone, and well-structured responses can mask hallucinations, off-policy actions, or improper data use, especially in domains like finance, HR, or infrastructure.
              </li>
              <li>
                <span className="pattern-body--bold">Limited visibility into instruction compliance</span> &ndash; Stakeholders often cannot see which instructions were considered, which were ignored, or where the agent encountered ambiguity, making it hard to debug edge cases or refine policies.
              </li>
              <li>
                <span className="pattern-body--bold">Insufficient monitoring tools for operators</span> &ndash; Traditional logs show actions and events but rarely capture the model&apos;s own view of its compliance and uncertainty, limiting diagnostic depth for safety and product teams.
              </li>
            </ul>
            <p className="pattern-body">
              These issues make it difficult to calibrate trust: the system may appear reliable until a high-impact failure occurs. The Confessions View addresses this gap by creating a dedicated surface for the model&apos;s honesty-focused self-report and tying that into monitoring and intervention flows.
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
                  <span className="pattern-body--bold">High-impact or high-risk agentic actions</span> &ndash; Tasks that touch money, credentials, infrastructure, production data, compliance obligations, or legally sensitive content.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-constraint tasks with nuanced policies</span> &ndash; Situations where the agent must juggle multiple constraints and where misinterpretation can be costly.
                </li>
                <li>
                  <span className="pattern-body--bold">Complex workflows that are hard to fully observe</span> &ndash; Multi-step plans, tool-using agents, or workflows where the agent orchestrates other services.
                </li>
                <li>
                  <span className="pattern-body--bold">Evaluation, piloting, or early-stage rollouts</span> &ndash; Experimental deployments where teams need richer telemetry for model behavior.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulated or audited environments</span> &ndash; Domains where regulators or security teams require post-hoc evidence of policy enforcement.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, easily reversible tasks</span> &ndash; Casual Q&amp;A, brainstorming, or cosmetic text edits where misbehavior is low risk.</li>
                <li><span className="pattern-body--bold">Highly constrained, single-purpose tools</span> &ndash; Narrow features where the UI already enforces strict guardrails.</li>
                <li><span className="pattern-body--bold">Transparent deterministic logic</span> &ndash; Workflows where business rules are implemented as explicit code.</li>
                <li><span className="pattern-body--bold">Latency-sensitive interactions</span> &ndash; Real-time experiences where the overhead provides little value.</li>
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
                The Confessions View extends a standard agent response surface with an attached, structured self-report. It is typically implemented as a secondary panel or collapsible section tightly coupled to a single agent answer or task execution.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline Badge on Main Answer
              </h3>
              <p className="pattern-card__intro">
                A short status badge adjacent to the agent&apos;s output.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Self-assessed: &#10003; Compliant&quot;</li>
                <li>&quot;Self-assessed: &#9888; Partial issues &ndash; View Confession&quot;</li>
                <li>&quot;Self-assessed: ? Unclear / ambiguous inputs&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Collapsible &quot;View Confession&quot; Link</h3>
              <p className="pattern-card__intro">
                A small, secondary-control link under the answer.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;View compliance report&quot;, &quot;View confession&quot;</li>
                <li>Eye icon or shield icon affordance</li>
                <li>Opens accordion, drawer, or side panel</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task / Job Details Page</h3>
              <p className="pattern-card__intro">
                In job or run history views.
              </p>
              <ul className="pattern-card__list">
                <li>Dedicated tab labeled &quot;Confession&quot;, &quot;Compliance Report&quot;, or &quot;Self-report&quot;</li>
                <li>Alongside Logs, Metrics, and Settings tabs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin and Safety Consoles</h3>
              <p className="pattern-card__intro">
                Aggregated Confessions panels in admin dashboards.
              </p>
              <ul className="pattern-card__list">
                <li>Inspect confessions for flagged runs</li>
                <li>Filter by severity and review trends</li>
                <li>Natural language trigger: &quot;Confess about the last step&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Confession Report</h3>
            <p className="pattern-card__intro">
              The core object is a structured, machine-generated self-report bound to a single agent answer or task execution.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Header / Summary Strip</p>
                <ul className="pattern-card__list">
                  <li>Overall self-assessed status (&#10003; Compliant, &#9888; Issues, &#10007; Violated policy)</li>
                  <li>Short summary sentence (1&ndash;2 lines) describing headline outcome</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Objectives &amp; Instructions List</p>
                <ul className="pattern-card__list">
                  <li>Label: Concise name for each objective</li>
                  <li>Type tag: Policy / Safety / User constraint / System constraint</li>
                  <li>Source: Where the objective came from</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Compliance Assessment Rows</p>
                <ul className="pattern-card__list">
                  <li>Status pill: &#10003; Met, &#9888; Partial / Unclear, &#10007; Not met</li>
                  <li>Rationale: One-sentence explanation</li>
                  <li>Evidence / references (optional)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Shortcuts, Violations &amp; Uncertainties</p>
                <ul className="pattern-card__list">
                  <li>Shortcuts / &quot;hacks&quot;: Plain-language descriptions of corners cut</li>
                  <li>Policy violations: Rules the agent believes it broke</li>
                  <li>Ambiguities: Confessed uncertainties about instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior &amp; lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of a Confessions View spans from task completion through remediation and audit.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Task Completion</h3>
              <ul className="pattern-card__list">
                <li>The agent executes a task (e.g., generating a report, modifying infrastructure) and returns the main result.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Confession Request</h3>
              <ul className="pattern-card__list">
                <li>The orchestration layer sends a dedicated &quot;confession system message&quot; to the model.</li>
                <li>May happen automatically for high-risk tasks or on demand.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Confession Generation</h3>
              <ul className="pattern-card__list">
                <li>The model produces a structured self-report detailing objectives, compliance, shortcuts, and uncertainties.</li>
                <li>A separate scoring process may evaluate honesty during training.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. UI Rendering</h3>
              <ul className="pattern-card__list">
                <li>The UI shows a high-level badge next to the original answer.</li>
                <li>Full Confession Report in collapsible or panel-based view.</li>
                <li>For critical actions, may be expanded by default or required before approval.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. User / Operator Interaction</h3>
              <ul className="pattern-card__list">
                <li>Stakeholders inspect key objectives, flagged issues, and uncertainties.</li>
                <li>Feedback on accuracy (accurate / inaccurate, missing violations) is captured.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Remediation &amp; Follow-up</h3>
              <ul className="pattern-card__list">
                <li>If issues identified, trigger re-run, rollback, guided repair, or escalation.</li>
                <li>Confession data logged alongside task metadata for analysis.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Lifecycle in History and Audit</h3>
            <ul className="pattern-card__list">
              <li>Confessions remain attached to runs in job history, audit logs, or change records.</li>
              <li>Provide long-lived evidence for compliance audits and post-incident analysis.</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content &amp; messaging guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; the semantics around confessions must be explicit and consistent.
            </p>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Tone &amp; Framing</h3>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Neutral and factual</span> &ndash; Use calm, evidence-based language</li>
                  <li><span className="pattern-body--bold">Plain language, minimal jargon</span> &ndash; Understandable by non-experts</li>
                  <li><span className="pattern-body--bold">Honest about uncertainty</span> &ndash; Say so explicitly rather than speculating</li>
                  <li><span className="pattern-body--bold">Separate evaluation</span> &ndash; Make clear confession is a separate channel optimized for honesty</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Section Labels</h3>
                <ul className="pattern-card__list">
                  <li>&quot;Objectives &amp; Instructions&quot;</li>
                  <li>&quot;Compliance assessment&quot;</li>
                  <li>&quot;Shortcuts and violations&quot;</li>
                  <li>&quot;Ambiguities &amp; judgment calls&quot;</li>
                </ul>
              </div>
            </div>

            <div className="pattern-example-group pattern-grid--mt-md">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Status phrasing examples</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Status: &#10003; Met &ndash; Followed the instruction fully.&quot;</li>
                  <li>&quot;Status: &#9888; Partially met &ndash; Some conditions were satisfied, others were not.&quot;</li>
                  <li>&quot;Status: &#10007; Not met &ndash; The answer did not follow this instruction.&quot;</li>
                  <li>&quot;Shortcut: Used cached results instead of refreshing data.&quot;</li>
                  <li>&quot;Uncertainty: The policy text does not clearly define whether hashed IDs count as personal data.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Feedback prompts</span>
                  <span className="pattern-example__badge pattern-example__badge--neutral">Examples</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Was this self-assessment accurate?&quot;</li>
                  <li>&quot;Report a missed violation&quot;</li>
                  <li>&quot;Confession is unclear&quot;</li>
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
                Different implementations of the Confessions View for various contexts and risk levels.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Lightweight Confession Badge</h3>
              <p className="pattern-card__intro">
                A minimal variant suitable for medium-risk tasks.
              </p>
              <ul className="pattern-card__list">
                <li>Shows only an overall self-assessed status badge</li>
                <li>Full Confession Report loaded lazily when clicked</li>
                <li>Appropriate for chat-style assistants in productivity tools</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Full Compliance Report Panel</h3>
              <p className="pattern-card__intro">
                A rich, detailed variant for high-risk or audited systems.
              </p>
              <ul className="pattern-card__list">
                <li>Side panel or tab with complete objectives list</li>
                <li>Per-objective compliance, evidence snippets, shortcuts/violations</li>
                <li>Integrated remediation controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Admin-Only Confessions</h3>
              <p className="pattern-card__intro">
                Confessions hidden from end-users but available to operators.
              </p>
              <ul className="pattern-card__list">
                <li>Confessions appear in admin dashboards or audit logs</li>
                <li>End-users see only generic confidence indicator</li>
                <li>Appropriate when policy details should not be exposed</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Gated Approval Confession</h3>
              <p className="pattern-card__intro">
                Used as a pre-flight check before irreversible actions.
              </p>
              <ul className="pattern-card__list">
                <li>Confession generated and presented as mandatory review step</li>
                <li>Approvers must acknowledge before change is applied</li>
                <li>Used for deployments, bulk updates, financial postings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases & Failure States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases &amp; failure states</p>
              <p className="pattern-body pattern-body--narrow">
                Handling situations where confessions are unavailable, incomplete, or contradictory.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">No Confession Available</h3>
              <ul className="pattern-card__list">
                <li>Model or configuration may not support confessions for certain tasks</li>
                <li>Hide affordance or show clear message: &quot;No self-report available for this action.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Confession Generation Failure</h3>
              <ul className="pattern-card__list">
                <li>Show graceful fallback: &quot;Self-report could not be generated. Logs are still available.&quot;</li>
                <li>Flag the run for operator review if high risk</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Model Confusion or Low Confidence</h3>
              <ul className="pattern-card__list">
                <li>Confessions may contain their own uncertainty</li>
                <li>Mark as &quot;Honest uncertainty&quot; and encourage human judgment</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contradictory Signals</h3>
              <ul className="pattern-card__list">
                <li>Polished answer with confession reporting violations should trigger emphasis or escalation</li>
                <li>Bias toward taking confessions seriously as early warnings</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">False Positive or False Negative Confessions</h3>
            <ul className="pattern-card__list">
              <li>Confessions can be incomplete or mistaken; feedback mechanism should allow corrections</li>
              <li>Over time, signals can refine training and prompt design</li>
            </ul>
          </div>
        </section>

        {/* Data, Telemetry & Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, telemetry &amp; metrics</p>
              <p className="pattern-body pattern-body--narrow">
                Confessions provide rich telemetry for safety, product, and ML teams.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Objective Compliance Rates</h3>
              <ul className="pattern-card__list">
                <li>Percentage of runs where each objective is marked as &#10003;, &#9888;, or &#10007;</li>
                <li>Trends over time and across models or versions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Confession vs Ground-Truth Alignment</h3>
              <ul className="pattern-card__list">
                <li>Rate at which confessions correctly identify actual violations</li>
                <li>Measured where ground truth is available</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">False Negatives / False Positives</h3>
              <ul className="pattern-card__list">
                <li>Cases where external evaluation finds violations but confessions claim compliance (false negatives)</li>
                <li>Or vice versa (false positives)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Shortcut and Violation Taxonomy</h3>
              <ul className="pattern-card__list">
                <li>Categorization of shortcuts (data freshness, approximate calculations, skipping checks)</li>
                <li>Violations (policy, privacy, access control)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback on Confession Accuracy</h3>
              <ul className="pattern-card__list">
                <li>Thumbs up/down, tags such as &quot;Missed violation&quot;, &quot;Overstated risk&quot;</li>
                <li>Useful for model training and tuning UI details</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Fleet-Level Risk Dashboards</h3>
              <ul className="pattern-card__list">
                <li>Aggregated view of confession statuses across agents, tasks, domains</li>
                <li>Filters for high-severity confessions, recurring patterns, specific policies</li>
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
                Implementation details for robust confession behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Orchestration &amp; Model Requirements</h3>
              <ul className="pattern-card__list">
                <li>Confessions require a model that can be prompted post-hoc with a &quot;confession system message&quot;</li>
                <li>Training procedures can separate reward signals: main answer for helpfulness, confession for honesty</li>
                <li>Orchestration layer should capture all pertinent instructions and parse confession into well-defined schema</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance &amp; Cost</h3>
              <ul className="pattern-card__list">
                <li>Confessions add at least one extra model call per task</li>
                <li>Automatic confessions should be scoped to high-risk or high-value actions</li>
                <li>Consider asynchronous generation for non-blocking review</li>
                <li>Sampling strategies (e.g., 10&ndash;20% of low-risk runs) to gather telemetry</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Privacy &amp; Security</h3>
              <ul className="pattern-card__list">
                <li>Confessions may mention sensitive data or internal policies</li>
                <li>Respect data handling rules and avoid exposing raw identifiers when not necessary</li>
                <li>Prevent confessions from leaking confidential policies to external users</li>
                <li>Cover confessions by same logging and retention policies as other sensitive records</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance &amp; Policy Integration</h3>
              <ul className="pattern-card__list">
                <li>Link confessions to organization&apos;s model spec, usage policies, and safety guidelines</li>
                <li>Policy teams can use confession data to identify ambiguous instructions and refine them</li>
                <li>Demonstrate due diligence to auditors and regulators</li>
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
                Common mistakes that undermine the value of confessions.
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
                  <h3 className="antipattern-title">Treating Confessions as Infallible</h3>
                  <p className="antipattern-subtitle">Overreliance without additional monitoring.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Confessions are signals, not guarantees. Overreliance on them without additional monitoring or spot checks can create a false sense of safety.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use confessions as one input among many in a layered monitoring approach.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Flooding Users with Low-Value Details</h3>
                  <p className="antipattern-subtitle">Surfacing every minor shortcut in the main UI.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Surfacing every minor shortcut or low-impact ambiguity in the main UI can overwhelm and desensitize users. The primary surface should highlight what materially affects safety, correctness, or policy compliance.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Prioritize material issues; provide drill-down for details.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Penalizing Honesty in User Workflows</h3>
                  <p className="antipattern-subtitle">Harsh visual treatment for minor admissions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Designs that visually punish the system for admitting issues (e.g., harsh red alerts for minor, honestly reported shortcuts) can inadvertently push future training setups toward under-reporting.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use neutral, proportionate visual treatment that encourages honest reporting.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Using Confessions as a Substitute for Guardrails</h3>
                  <p className="antipattern-subtitle">Relying on post-hoc reporting instead of prevention.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Confessions should augment&mdash;not replace&mdash;strong input validation, access control, and tool-level safety checks.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Layer confessions on top of robust preventive guardrails.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Exposing Sensitive Internal Policies</h3>
                  <p className="antipattern-subtitle">Showing internal policies to external users by default.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Some policies and instructions should remain internal; confessions for customer-facing surfaces may need redaction or abstraction.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement role-based visibility with appropriate redaction for external users.</span>
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
                How Confessions View applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Financial Closing Assistant</h3>
              <p className="pattern-card__intro">ERP System</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Agent posts monthly close package</li>
                <li>Badge indicates: &quot;Self-assessed: &#9888; Partial issues&quot;</li>
                <li>Confession shows objectives like &quot;Use only reconciled ledgers&quot; and &quot;Exclude transactions after Nov 30&quot;</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Approver triggers &quot;Re-run with enforced reconciled snapshot only&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Code Deployment Agent</h3>
              <p className="pattern-card__intro">Infrastructure Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Agent proposes rollout of new configuration</li>
                <li>Mandatory pre-approval confession step</li>
                <li>Shows canary policy compliance, direct writes violation, secrets status</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Approver blocks rollout, assigns remediation task</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Auto-Responder</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Most responses show &quot;Self-assessed: &#10003; Compliant&quot; badge</li>
                <li>Borderline refund case shows &#9888; with policy ambiguity</li>
                <li>Confession attached to ticket for human review</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Ticket routed for human review with confession context</li>
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
                Patterns that complement or interact with Confessions View.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">5.1 Reasoning Glimpse</h3>
              <p className="pattern-card__intro">
                Shows a brief peek into how the agent approached the task. Confessions complement this by assessing how well the agent followed the rules and objectives.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5.4 Activity Timeline &amp; Audit Log</h3>
              <p className="pattern-card__intro">
                Records actions across time. Confessions add a qualitative, self-reported layer to those logs, enriching audits and post-incident reviews.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3.6 Rollback &amp; Version History</h3>
              <p className="pattern-card__intro">
                Provides mechanisms to undo or revert changes. Confessions often serve as the trigger for invoking rollback flows.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6.2 Confidence Thermometer</h3>
              <p className="pattern-card__intro">
                Displays overall model confidence. Confessions inform and calibrate these signals by providing structured explanations of uncertainty and partial compliance.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6.3 Semantic Highlighting of Uncertainty</h3>
              <p className="pattern-card__intro">
                Highlights uncertain spans within the main answer. Confessions explain why those uncertainties exist and how they relate to instructions and policies.
              </p>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist</p>
          </div>
          <p className="pattern-body pattern-body--narrow">
            Before shipping this pattern, teams can confirm:
          </p>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Implementation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>A dedicated confession channel is implemented in the agent orchestration layer, with prompts referencing explicit and implicit instructions.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Confession content is structured into objectives, per-objective compliance, shortcuts/violations, and uncertainties.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The Confessions View is discoverable but not overwhelming, with an appropriate entry point for the domain.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Triggering &amp; Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>High-risk tasks always trigger a confession; lower-risk tasks use on-demand or sampled confessions.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Feedback mechanisms exist to rate confession accuracy and report missed or overstated issues.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Monitoring &amp; Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Confessions feed into monitoring dashboards and, where appropriate, into training or fine-tuning signals.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Privacy, security, and policy requirements are respected in what the confession reveals to different audiences.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Confessions are integrated with rollback, repair, or escalation flows so that admitted issues can be addressed.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">References</p>
          </div>
          <div className="pattern-card pattern-card--secondary">
            <ul className="pattern-card__list">
              <li>
                <a href="https://openai.com/index/how-confessions-can-keep-language-models-honest/" target="_blank" rel="noopener noreferrer" className="pattern-link">
                  How confessions can keep language models honest <ExternalLink size={12} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </a>
                &nbsp;&ndash; OpenAI
              </li>
              <li>
                <a href="https://dl.acm.org/doi/fullHtml/10.1145/3546577" target="_blank" rel="noopener noreferrer" className="pattern-link">
                  Post-hoc Interpretability for Neural NLP: A Survey <ExternalLink size={12} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </a>
                &nbsp;&ndash; ACM Digital Library
              </li>
            </ul>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
