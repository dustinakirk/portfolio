import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import SafeFailureStatesDemo from '../demos/SafeFailureStatesDemo';

// SEO metadata for this pattern page
export const SAFE_FAILURE_STATES_SEO = {
  title: "Safe Failure States - AI Trust Pattern",
  description: "Agentic AI systems avoid harmful or confusing behavior by failing in clear, contained, and recoverable ways that protect data, preserve context, and maintain trust.",
  keywords: ["AI failure states", "safe failure", "AI error handling", "graceful degradation", "AI trust", "agentic UX", "AI recovery", "AI abstention"],
  canonicalPath: "/agentic_ai_patterns/safe-failure-states"
};

export default function SafeFailureStatesPattern() {
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
            <span className="pattern-header__index">9.1</span>
            <div>
              <h1 className="pattern-header__title">Safe Failure States</h1>
              <p className="pattern-header__subtitle">
                Agentic AI systems avoid harmful or confusing behavior by failing in clear, contained, and recoverable ways that protect data, preserve context, and maintain trust.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="9.1" patternTitle="Safe Failure States" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Safe Failure States is a pattern for handling AI breakdowns, uncertainty, and guardrail violations in a way that keeps people, data, and systems safe while preserving trust in the product.
            </p>
            <p className="pattern-body">
              Instead of forcing the model to produce something at all costs or silently dropping actions, the system deliberately <span className="pattern-body--bold">abstains</span>, <span className="pattern-body--bold">degrades</span>, or <span className="pattern-body--bold">rolls back</span> in controlled ways and clearly communicates what happened.
            </p>
            <p className="pattern-body">
              In agentic AI—where assistants can trigger tools, modify records, send messages, or deploy code—failures are inevitable. The crucial design decision is not whether an agent ever fails, but <span className="pattern-body--bold">how</span> it fails: whether the experience feels opaque and risky, or predictable and repairable.
            </p>
            <p className="pattern-body">
              This pattern typically surfaces in:
            </p>
            <ul className="pattern-list">
              <li>AI chat threads (system messages, assistant responses, and inline cards describing what could not be completed)</li>
              <li>Agent run dashboards or logs in developer tools and admin consoles</li>
              <li>Contextual UI around critical actions such as deploy, publish, send, or delete</li>
            </ul>
            <p className="pattern-body">
              The core idea is simple: when the AI cannot safely proceed, it stops or limits its own behavior, explains why, and offers a set of clearly bounded next steps.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/9.1 safe failure states.png"
              alt="Safe Failure States pattern illustration"
            />
          </div>
        </section>

        {/* Example Scenario */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Example Scenario</p>
            <p className="pattern-body--bold">Release Copilot Safe-Failure Flow</p>
            <p className="pattern-body">
              A DevOps copilot is asked in a chat interface to deploy a new version of a service to production. The agent runs tests, inspects observability metrics, and detects a spike in error rates on a related service. Instead of deploying anyway or returning a generic failure, the agent posts a structured message:
            </p>
            <ul className="pattern-list">
              <li>A clear status line: &quot;Production deploy paused – elevated error rates detected.&quot;</li>
              <li>A short explanation: what was checked, what threshold was crossed, and which service was affected.</li>
              <li>Impact summary: &quot;No changes have been made. The current production version is still serving traffic.&quot;</li>
              <li>Action options as buttons: &quot;View failing metrics,&quot; &quot;Create incident ticket,&quot; &quot;Proceed in staging only,&quot; and &quot;Override and deploy anyway (requires approval).&quot;</li>
            </ul>
            <p className="pattern-body">
              The agent remains transparent, protective of the environment, and aligned with team workflows, while ensuring there is always a visible path forward.
            </p>
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This interactive demo simulates a DevOps deployment scenario where an AI agent detects elevated error rates and pauses a production deploy. Notice how the agent clearly communicates what was detected, confirms that no changes were made, and presents three distinct recovery options: viewing metrics for investigation, canceling the deployment safely, or overriding with admin authorization. Try clicking any action button to see how the agent responds to your choice.
            </p>
          </div>
          <SafeFailureStatesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a Safe Failure States pattern, AI agents frequently fail in ways that are confusing, risky, or trust-eroding. Typical problems include:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque or silent failure</span> – The AI ignores a request, times out without explanation, or responds with a vague &quot;Something went wrong&quot; that provides no path forward.
              </li>
              <li>
                <span className="pattern-body--bold">Unsafe behavior on low confidence</span> – Models proceed with actions despite uncertainty, hallucinated facts, or partial context—sending incorrect emails, mutating production data, or deploying unstable builds.
              </li>
              <li>
                <span className="pattern-body--bold">Dead ends and lost work</span> – Failure states often discard context, leaving no way to retry, refine inputs, or recover partial outputs.
              </li>
              <li>
                <span className="pattern-body--bold">Blame and frustration</span> – Poorly written error messages can imply that the person did something wrong, rather than acknowledging system limits.
              </li>
            </ul>
            <p className="pattern-body">
              At scale, these problems reduce adoption, increase support burden, and limit organizations to shallow &quot;toy&quot; use cases rather than deeply integrated agentic workflows.
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
                  An AI agent can perform <span className="pattern-body--bold">high-impact or irreversible actions</span> such as deployments, data deletions, bulk updates, notifications, or financial transactions.
                </li>
                <li>
                  Workflows span <span className="pattern-body--bold">multiple steps, tools, or external systems</span>, increasing the chance that something will break mid-run.
                </li>
                <li>
                  The system needs to <span className="pattern-body--bold">abstain on low-confidence predictions</span> or conflicting signals instead of &quot;guessing and proceeding.&quot;
                </li>
                <li>
                  Regulatory, legal, or safety constraints require <span className="pattern-body--bold">clear audit trails</span> and explanations whenever the AI declines, rolls back, or asks for human intervention.
                </li>
                <li>
                  Enterprise teams expect <span className="pattern-body--bold">shared accountability</span> between humans and AI, with explicit points of override, approval, and escalation.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The feature is a <span className="pattern-body--bold">low-stakes, single-step generator</span> (e.g., rewriting a headline) where existing undo and revision tools already provide safe recovery.</li>
                <li>The AI is <span className="pattern-body--bold">strictly read-only</span>, surfacing insights without any direct actions or automation.</li>
                <li>A simple, traditional error state is already <span className="pattern-body--bold">well-handled by platform-level UI</span>, and the AI layer is not the primary point of failure.</li>
                <li>The system is operating in <span className="pattern-body--bold">internal prototypes on synthetic or disposable data</span>.</li>
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
                Safe Failure States combine system-level logic (how and when to stop) with clear UI surfaces (how to communicate and recover). The pattern centers on a structured &quot;failure block&quot; that appears in context, keeps the thread alive, and makes the limits of the agent explicit.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline in the Chat Thread
              </h3>
              <p className="pattern-card__intro">
                As an assistant message or card that appears in direct response to a prompt, describing what prevented the requested action.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Run / Workflow Detail Views</h3>
              <p className="pattern-card__intro">
                In B2B tools, a &quot;run&quot; or &quot;job&quot; page may show where an agent plan failed, including which step, tool, or environment triggered the safe failure.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual UI Around Critical Actions</h3>
              <p className="pattern-card__intro">
                In application screens (e.g., deployment dashboards, CRM bulk updates, marketing campaigns), safe failure messaging appears in modals, inline callouts, or banners associated with the blocked action.
              </p>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Safe Failure Block</h3>
            <p className="pattern-card__intro">
              The main object is a <span className="pattern-body--bold">Safe Failure Block</span>—a structured unit that explains the failure and offers recovery options.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Deploy paused – failing tests detected&quot;</li>
                  <li>&quot;Bulk update cancelled – missing permissions&quot;</li>
                  <li>&quot;Analysis incomplete – ambiguous filters&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>What was attempted</li>
                  <li>What condition triggered the safe failure</li>
                  <li>What state the system is currently in</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Retry</span> with same parameters</li>
                  <li><span className="pattern-body--bold">Refine</span> or edit input parameters</li>
                  <li><span className="pattern-body--bold">Run in safe mode</span> (preview only, draft but do not send)</li>
                  <li><span className="pattern-body--bold">Escalate</span> (notify a human owner, create a ticket)</li>
                  <li><span className="pattern-body--bold">Override</span> (proceed despite warning, often gated by role)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Timestamp, environment, and impacted entities</li>
                  <li>Error category (data issue, model uncertainty, policy block)</li>
                  <li>Confidence indicators or threshold information</li>
                  <li>Links to logs, metrics, or traces</li>
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
                The lifecycle of a Safe Failure State spans from initial request through detection, containment, communication, and recovery.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Request & Planning</h3>
              <ul className="pattern-card__list">
                <li>The person issues a request in chat or via UI (e.g., &quot;Deploy to production&quot;).</li>
                <li>The agent starts planning, selects tools, and begins executing steps.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Detection & Classification</h3>
              <ul className="pattern-card__list">
                <li>During execution, the system detects a condition that should block or constrain the action.</li>
                <li>Conditions include: low confidence, missing input, violated guardrail, API errors, permission failures.</li>
                <li>The agent classifies the issue to determine the appropriate safe failure strategy.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Containment & Rollback</h3>
              <ul className="pattern-card__list">
                <li>The agent stops further actions and, if necessary, rolls back partial changes.</li>
                <li>Falls back to a read-only mode if applicable.</li>
                <li>Prioritizes preserving existing state and preventing irreversible side effects.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Communication in Context</h3>
              <ul className="pattern-card__list">
                <li>A Safe Failure Block appears at the point of breakdown.</li>
                <li>Clearly indicates that the action was not completed.</li>
                <li>Explains why it was blocked and what has/has not changed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Recovery & Alternatives</h3>
              <ul className="pattern-card__list">
                <li>Presents explicit options based on severity and context.</li>
                <li>May ask for clarification or offer alternative interpretations.</li>
                <li>Can suggest a safer environment (e.g., staging vs. production).</li>
                <li>Routes to a human expert or approval flow when needed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Override with Explicit Consent</h3>
              <ul className="pattern-card__list">
                <li>For certain scenarios, a privileged user may still choose to proceed.</li>
                <li>Requires clear indication of additional risk.</li>
                <li>May apply stricter guardrails (limited scope, smaller blast radius).</li>
                <li>Logs that an override occurred, including who approved and when.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Feedback & Learning</h3>
            <ul className="pattern-card__list">
              <li>The safe failure event is logged with structured metadata (category, severity, tools involved, recovery path taken).</li>
              <li>Optional feedback controls (e.g., &quot;This block was unhelpful&quot;) feed into continuous improvement of model prompts, policies, and UX.</li>
            </ul>
          </div>
        </section>

        {/* States & Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States & variants</p>
              <p className="pattern-body pattern-body--narrow">
                Safe Failure States usually manifest in a small set of repeatable variants.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Abstain with Explanation</h3>
              <p className="pattern-card__intro">
                The agent declines to answer or act when outputs would be speculative, unsafe, or outside domain constraints.
              </p>
              <ul className="pattern-card__list">
                <li>Message focuses on limits, not blame</li>
                <li>Often points to manual alternatives or external resources</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Degraded / Safe Mode</h3>
              <p className="pattern-card__intro">
                Instead of executing the full request, the system performs a safer subset.
              </p>
              <ul className="pattern-card__list">
                <li>Generating a draft without sending it</li>
                <li>Running a &quot;dry run&quot; of a deployment</li>
                <li>Returning a list of suggested edits without applying them</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial Completion with Clear Boundaries</h3>
              <p className="pattern-card__intro">
                Some steps succeed while others fail (e.g., data analysis completes but chart export fails).
              </p>
              <ul className="pattern-card__list">
                <li>The UI differentiates completed from incomplete parts</li>
                <li>Enables targeted retries for failed portions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Escalation & Handoff</h3>
              <p className="pattern-card__intro">
                When automation cannot safely continue, the system packages state and hands it off to a human.
              </p>
              <ul className="pattern-card__list">
                <li>Includes logs, context, and partial outputs</li>
                <li>Preserves continuity and reduces duplicated effort</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & messaging guidelines</p>
            <p className="pattern-body">
              Safe Failure States rely heavily on precise, calm microcopy that normalizes failure and emphasizes safety.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy principles</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li><span className="pattern-body--bold">Lead with status and safety</span> – &quot;Bulk update cancelled – contacts were not changed.&quot;</li>
                  <li><span className="pattern-body--bold">Explain in plain language</span> – &quot;The CRM integration is not connected, so account data cannot be updated yet.&quot;</li>
                  <li><span className="pattern-body--bold">Clarify impact and scope</span> – &quot;No alerts were disabled. Only a preview of the rule changes was generated.&quot;</li>
                  <li><span className="pattern-body--bold">Offer next steps, not dead ends</span> – Every safe failure should end with one or more clear actions.</li>
                  <li><span className="pattern-body--bold">Acknowledge limitation without over-apologizing</span> – A brief acknowledgement is sufficient.</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Avoid these patterns</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Vague messages like &quot;Something went wrong&quot; without explanation</li>
                  <li>Blaming the user for system limitations</li>
                  <li>Dead ends with no recovery options</li>
                  <li>Over-apologizing repeatedly</li>
                  <li>Technical jargon without user-relevant context</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Expose Uncertainty When Relevant</h3>
                <ul className="pattern-card__list">
                  <li>When uncertainty visualizations or confidence scores are used, they should be clearly explained</li>
                  <li>Connect uncertainty indicators to the decision to fail safely</li>
                  <li>Research indicates that properly designed uncertainty visuals can improve trust</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction Details */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction details</p>
              <p className="pattern-body pattern-body--narrow">
                How Safe Failure States manifest across different interface contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Chat-Based Agent Interfaces</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Structured assistant messages</span> – Present Safe Failure Blocks as visually distinct messages with sections: status, explanation, and actions.</li>
                <li><span className="pattern-body--bold">Quick actions via buttons or chips</span> – Place primary recovery actions directly under the message.</li>
                <li><span className="pattern-body--bold">Progressive disclosure for details</span> – Hide advanced details (traces, metrics) behind collapsible elements.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Embedded UI & Workflows</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Inline callouts</span> – Safe failure messages appear near controls to maintain spatial context.</li>
                <li><span className="pattern-body--bold">Background jobs and notifications</span> – Surface safe failures in notification centers, resource pages, and admin dashboards.</li>
                <li><span className="pattern-body--bold">Consistent patterns</span> – Use similar designs across AI features and non-AI system errors.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & Logic Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data & logic considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Implementing Safe Failure States effectively requires coordination between AI, application logic, and infrastructure.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Failure Taxonomy & Severity Model</h3>
              <ul className="pattern-card__list">
                <li>Model uncertainty / ambiguity</li>
                <li>User input issues</li>
                <li>Policy/guardrail violations</li>
                <li>System / integration errors</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '12px' }}>
                Each category can map to recommended UI states and recovery options.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Confidence & Policy Thresholds</h3>
              <ul className="pattern-card__list">
                <li>Establish thresholds for when the agent must abstain or fall back</li>
                <li>Pay special attention to high-value actions (deployments, payments, compliance changes)</li>
                <li>Apply extra scrutiny for sensitive data (PII, financial records, health data)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Guardrails & &quot;Do Not Perform&quot; Lists</h3>
              <ul className="pattern-card__list">
                <li>Maintain explicit lists of forbidden actions or contexts</li>
                <li>Examples: no production data deletion, no customer communication without approval</li>
                <li>Safe failures become the natural output when a request crosses these boundaries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safe Defaults & Rollback Mechanisms</h3>
              <ul className="pattern-card__list">
                <li>Ensure actions are idempotent where possible</li>
                <li>Define rollback or restore paths for agentic workflows</li>
                <li>Use logging and state snapshots to enable recovery from mistaken overrides</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Metrics & Monitoring</h3>
            <p className="pattern-card__intro">
              Track these metrics to assess the effectiveness of Safe Failure States:
            </p>
            <ul className="pattern-card__list">
              <li>Rate and distribution of safe failures by category</li>
              <li>Time-to-recovery after a safe failure</li>
              <li>Frequency of overrides and escalations</li>
              <li>Impact on key business outcomes and trust measures</li>
            </ul>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Accessibility & inclusivity</p>
            <p className="pattern-body">
              Safe Failure States must be accessible to all users, including those using assistive technologies or working under stress.
            </p>
            <ul className="pattern-list">
              <li>Ensure text-based explanations accompany any color, icon, or animation; do not rely on color alone to indicate error or state.</li>
              <li>Use clear headings and ARIA roles for screen readers; announce state changes such as &quot;Deploy paused&quot; or &quot;No changes were applied.&quot;</li>
              <li>Avoid idioms or culture-specific references in error messages to reduce confusion in global or multilingual teams.</li>
              <li>Provide sufficient contrast, spacing, and typography for easy scanning in high-pressure situations such as incident response.</li>
            </ul>
          </div>
        </section>

        {/* Examples & Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How Safe Failure States apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Deployment Automation & DevOps Copilots</h3>
              <p className="pattern-card__intro">DevOps Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An AI deployment agent refuses to promote a release after detecting failing tests or regression in observability metrics</li>
                <li>Summarizes issues, links to relevant dashboards</li>
                <li>Offers to deploy to staging, open an incident, or notify on-call</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Content Generation for Regulated Domains</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A marketing copilot is asked to generate email copy with sensitive financial claims</li>
                <li>Policy checks flag non-compliant language, triggering safe failure</li>
                <li>Proposes a conservative template and offers to route to legal/compliance</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Analysis & BI Copilots</h3>
              <p className="pattern-card__intro">Analytics Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An analytics agent detects schema changes and ambiguous aggregations</li>
                <li>Fails safely with a description of the ambiguity</li>
                <li>Presents two possible interpretations with options to generate both reports</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support & Ticket Triage</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A support copilot with low confidence in resolution avoids auto-closing tickets</li>
                <li>Suggests a draft resolution comment</li>
                <li>Flags the ticket for human review with highlighted ambiguous signals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Compliance Operations</h3>
              <p className="pattern-card__intro">Security Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An AI assistant detects conflicting threat intelligence before auto-resolving alerts</li>
                <li>Safe failure blocks the auto-resolution and explains the conflict</li>
                <li>Suggests opening an investigation or routing to a human analyst</li>
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
                Certain implementations of Safe Failure States can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Vague or Generic Failures</h3>
                  <p className="antipattern-subtitle">Messages like &quot;Something went wrong&quot; without explanation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without specific information about what failed and why, users cannot take appropriate action and lose trust in the system&apos;s reliability.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide specific status, explanation, and actionable next steps in every failure message.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Blaming the User</h3>
                  <p className="antipattern-subtitle">Error messages that imply the person did something wrong.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Messages that shift blame create frustration and erode trust. System limitations should be acknowledged without making users feel at fault.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Focus on system limits and next steps, not user actions. Use neutral, supportive language.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Dead Ends with No Recovery</h3>
                  <p className="antipattern-subtitle">Failure states that offer no path forward.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When failures discard context and leave no way to retry, refine inputs, or recover partial outputs, users lose work and confidence in the system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide at least one actionable recovery option: retry, refine, escalate, or safe mode.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Triggering Safe Failures</h3>
                  <p className="antipattern-subtitle">Excessive caution that blocks routine, low-risk actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If safe failures trigger too often for low-stakes actions, users become frustrated and may disable safety features or avoid using the AI altogether.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Calibrate thresholds appropriately. Reserve safe failures for genuinely high-impact or uncertain situations.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Failure</h3>
                  <p className="antipattern-subtitle">The system fails without any user-visible indication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Silent failures leave users uncertain about whether their request was processed at all, and whether the system is reliable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always surface a visible, informative failure message in context when the system cannot complete a request.</span>
              </div>
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
              <p className="pattern-checklist-category__title">Taxonomy & Classification</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>A clear taxonomy exists for AI failure types, mapped to specific safe failure behaviors and UI states.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Confidence thresholds and policy rules are defined for when agents must abstain rather than guess.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">High-Impact Actions</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>High-impact actions (deploy, delete, send, pay, publish) are instrumented with safe defaults and rollbacks.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Override flows require explicit, logged consent and appropriate roles/permissions.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">UI & Communication</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Safe Failure Blocks are visually consistent across chat, dashboards, and embedded UIs.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Every failure state includes at least one actionable next step (retry, refine, alternative mode, or escalation).</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Logging & Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Error and safe failure events are logged with structured metadata for monitoring, audits, and improvements.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Accessibility checks (contrast, semantics, screen reader behavior) have been run on all failure states.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Analytics & Improvement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Product analytics track safe failure frequency, recovery rates, and correlations with trust metrics.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Teams have processes to regularly review high-volume or high-severity safe failures and adjust accordingly.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Related patterns</p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Confidence & Uncertainty Visualization</span> – Communicating how sure the AI is about its outputs.</li>
              <li><span className="pattern-body--bold">Guardrails & Policy Enforcement</span> – Defining hard boundaries for agent behavior and sensitive actions.</li>
              <li><span className="pattern-body--bold">Human-in-the-Loop & Escalation</span> – Handing off to human experts when automation should stop.</li>
              <li><span className="pattern-body--bold">Explainability & Audit Trails</span> – Showing how decisions were made and enabling after-the-fact review.</li>
              <li><span className="pattern-body--bold">Session History & Recovery</span> – Allowing users to revisit, replay, and recover from past AI-assisted workflows.</li>
            </ul>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
