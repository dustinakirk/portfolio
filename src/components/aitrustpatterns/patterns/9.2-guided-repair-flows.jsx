import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import GuidedRepairFlowsDemo from '../demos/GuidedRepairFlowsDemo';

// SEO metadata for this pattern page
export const GUIDED_REPAIR_FLOWS_SEO = {
  title: "Guided Repair Flows - AI Trust Pattern",
  description: "Structured, interactive flows that turn AI failures into guided co-repair moments, resolving issues while building understanding, predictability, and long-term trust.",
  keywords: ["AI repair", "guided repair", "AI error recovery", "AI failure handling", "co-repair", "AI trust", "agentic UX", "AI debugging"],
  canonicalPath: "/agentic_ai_patterns/guided-repair-flows"
};


export default function GuidedRepairFlowsPattern() {
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
            <span className="pattern-header__index">9.2</span>
            <div>
              <h1 className="pattern-header__title">Guided Repair Flows</h1>
              <p className="pattern-header__subtitle">
                Structured, interactive flows that turn AI failures into guided co-repair moments, resolving issues while building understanding, predictability, and long-term trust.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="9.2" patternTitle="Guided Repair Flows" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Guided repair flows are structured recovery experiences that appear when an AI agent cannot complete a task, produces an unsatisfactory result, or detects a risk that requires human input.
            </p>
            <p className="pattern-body">
              Instead of ending in a generic error message, the system offers an interactive, stepwise flow that:
            </p>
            <ul className="pattern-list">
              <li>Explains what went wrong in understandable terms</li>
              <li>Breaks resolution into small, low-effort steps</li>
              <li>Shares control between the AI agent and the human operator</li>
              <li>Optionally learns from the fix so similar issues do not recur</li>
            </ul>
            <p className="pattern-body">
              In B2B and B2C web applications, this pattern commonly appears inline within conversational UIs (chat, sidecar copilots, assistant panels), as lightweight wizards launched from error messages, toasts, or banners, and within configuration and data workflows when AI-driven automation hits ambiguity or validation errors.
            </p>
            <p className="pattern-body">
              By framing failures as co-learning opportunities rather than dead ends, guided repair flows reduce frustration, increase success rates, and gradually deepen trust in agentic AI systems.
            </p>
          </div>
        </section>

        {/* Example Scenario */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Example scenario</p>
            <p className="pattern-body">
              In an analytics platform, an AI copilot attempts to generate a dashboard but fails because metric names in the prompt do not match the schema:
            </p>
            <ol className="pattern-list pattern-list--numbered">
              <li>
                The assistant message reads: <span className="pattern-body--bold">&quot;The dashboard could not be created because &apos;Monthly Revenue&apos; was not found in the selected dataset.&quot;</span>
              </li>
              <li>
                An inline call-to-action appears: <span className="pattern-body--bold">&quot;Help fix dataset &amp; retry&quot;</span>.
              </li>
              <li>
                Selecting it opens a right-hand panel with a three-step flow:
                <ul className="pattern-list">
                  <li><span className="pattern-body--bold">Step 1: Confirm dataset</span> – lists likely datasets, highlights the one the assistant used.</li>
                  <li><span className="pattern-body--bold">Step 2: Map fields</span> – shows the unresolved metric (&quot;Monthly Revenue&quot;) and suggests a matching field (&quot;mrr_usd&quot;), with options to accept, change, or search.</li>
                  <li><span className="pattern-body--bold">Step 3: Preview &amp; save rule</span> – shows a summary of changes and asks whether this mapping should be reused for future dashboards in this workspace.</li>
                </ul>
              </li>
            </ol>
            <p className="pattern-body">
              The user finishes the flow, the dashboard is generated, and the mapping is stored as a reusable rule.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Guided repair flows example">
          <GuidedRepairFlowsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without guided repair flows, AI-powered products tend to fail in ways that are opaque, repetitive, and disempowering:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Errors feel like dead ends</span> – Generic system messages (e.g., &quot;Something went wrong&quot;) give no actionable next step and force users to abandon the task or seek human support.
              </li>
              <li>
                <span className="pattern-body--bold">The same failure repeats</span> – Even when users figure out a workaround, the system does not remember it, causing identical errors in future runs and eroding trust.
              </li>
              <li>
                <span className="pattern-body--bold">Responsibility is unclear</span> – Users are unsure whether the problem lies in their input, the underlying data, the AI agent, or the platform itself, which makes the system feel unreliable or arbitrary.
              </li>
              <li>
                <span className="pattern-body--bold">Support channels are overloaded</span> – High-friction failures push users into tickets, chats, or calls that could have been resolved through structured, productized flows.
              </li>
              <li>
                <span className="pattern-body--bold">Learning opportunities are lost</span> – Failures do not translate into better models, better rules, or better mental models for users.
              </li>
            </ul>
            <p className="pattern-body">
              Guided repair flows address these issues by connecting the moment of failure to a predictable, teachable path toward resolution.
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
                  <span className="pattern-body--bold">Recoverable AI failures with a clear resolution path</span> – schema mismatches, permission issues, missing parameters, or tool/API timeouts where structured questions or configuration changes can fix the issue.
                </li>
                <li>
                  <span className="pattern-body--bold">Ambiguity or underspecification in user intent</span> – When the agent cannot safely act without clarification, such as missing constraints, unclear ownership, or conflicting resources.
                </li>
                <li>
                  <span className="pattern-body--bold">High-stakes or high-friction workflows</span> – financial operations, CRM updates, infrastructure changes, or compliance workflows where unaddressed failures can be costly.
                </li>
                <li>
                  <span className="pattern-body--bold">Recurring configuration or data quality issues</span> – When similar errors are expected to happen across different users or sessions and can be reduced by creating reusable mappings, rules, or preferences.
                </li>
                <li>
                  <span className="pattern-body--bold">Enterprise contexts with shared settings</span> – Cases where a single correction (e.g., field mapping, policy override template) should apply across teams, projects, or environments.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>
                  <span className="pattern-body--bold">Low-impact, one-off errors are easily fixed inline</span> – a simple prompt typo or a missing required field that can be corrected directly in the current form.
                </li>
                <li>
                  <span className="pattern-body--bold">The UI already provides full clarity and control</span> – When a standard form validation message combined with inline hints is sufficient, a multi-step flow can add unnecessary friction.
                </li>
                <li>
                  <span className="pattern-body--bold">The system can automatically repair with high confidence</span> – If the agent can silently retry with a reliable, low-risk fix, it may be better to auto-correct and briefly note the adjustment.
                </li>
                <li>
                  <span className="pattern-body--bold">The operation is trivial or experimental</span> – For low-stakes exploratory queries where failure carries minimal cost, a brief explanation and quick retry button may be enough.
                </li>
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
                At a high level, a guided repair flow consists of a clear, empathetic failure message, a discrete entry point, a short series of steps, controls for pacing and choice, and an optional learning step.
              </p>
            </div>
          </div>

          {/* Core Components */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Components</h3>
              <ul className="pattern-card__list">
                <li>A <span className="pattern-body--bold">clear, empathetic failure message</span> that explains what happened and why the action could not proceed</li>
                <li>A <span className="pattern-body--bold">discrete entry point</span> (button or inline link) that offers help resolving the issue</li>
                <li>A <span className="pattern-body--bold">short series of steps</span> (typically 3–5) that gather missing information, propose fixes, and preview the impact</li>
                <li><span className="pattern-body--bold">Controls for pacing and choice</span>, such as Back, Skip, and Cancel/Escalate</li>
                <li>An optional <span className="pattern-body--bold">&quot;learn from this fix&quot;</span> step to persist rules, mappings, or preferences</li>
                <li>A <span className="pattern-body--bold">confirmation state</span> summarizing the outcome and any longer-term changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Item: Repair Session</h3>
              <p className="pattern-card__intro">
                The core object is the repair session: a structured, time-bounded interaction focused on resolving a specific failure.
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Label</span> – A short title anchoring the failure and its context</li>
                <li><span className="pattern-body--bold">Description</span> – A brief, testable description of the problem and its impact</li>
                <li><span className="pattern-body--bold">Controls</span> – Accept suggestion, Edit, Skip, Retry, Escalate to support, Apply globally, Apply once</li>
                <li><span className="pattern-body--bold">Metadata</span> – Affected entities, scope, risk level, timestamps, and status (Not started, In progress, Fixed, Failed, Escalated)</li>
              </ul>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Entry Point: Inline in AI Message
              </h3>
              <p className="pattern-card__intro">
                A call-to-action beneath an assistant message that failed.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Help fix this&quot; or &quot;Review and retry&quot;</li>
                <li>Appears immediately after the failure is surfaced</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Entry Point: Within UI Components</h3>
              <p className="pattern-card__intro">
                Links or buttons in tables, forms, or configuration panels.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Resolve mapping issues&quot; on a data source card</li>
                <li>Error state indicators with repair actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Entry Point: From Notifications</h3>
              <p className="pattern-card__intro">
                Toasts, banners, or email alerts pointing to repair flows.
              </p>
              <ul className="pattern-card__list">
                <li>Critical failures like failed sync or failed automation run</li>
                <li>Direct links into the pre-populated repair surface</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Entry Point: From Logs or History</h3>
              <p className="pattern-card__intro">
                For advanced users investigating failures via run history.
              </p>
              <ul className="pattern-card__list">
                <li>Each failed run includes a &quot;Guided repair&quot; entry point</li>
                <li>Contextual repair based on incident timelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior &amp; lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                A typical guided repair lifecycle in an AI-enabled application follows these stages.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Failure Detection</h3>
              <ul className="pattern-card__list">
                <li>The AI agent fails to complete a task (tool error, validation failure, ambiguous intent, policy violation)</li>
                <li>System captures diagnostic information and tags the run as recoverable</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Failure Surfaced Clearly</h3>
              <ul className="pattern-card__list">
                <li>An assistant message, banner, or inline error explains what went wrong in concise, non-blaming language</li>
                <li>Primary recovery call-to-action: &quot;Help fix this&quot; or &quot;Start guided repair&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Repair Session Initiated</h3>
              <ul className="pattern-card__list">
                <li>Opens a dedicated surface (modal, side panel, or embedded stepper)</li>
                <li>Clear title, brief context, and step indicator (e.g., &quot;Step 1 of 3&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Scoping &amp; Impact Clarified</h3>
              <ul className="pattern-card__list">
                <li>Confirms what is being repaired (specific run, rule, configuration, or dataset)</li>
                <li>May ask whether changes should apply locally or broadly</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Guided Clarifications</h3>
              <ul className="pattern-card__list">
                <li>For each step, the AI proposes likely fixes and asks targeted questions</li>
                <li>Progress indicators and Back/Skip controls allow comfortable pacing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Preview of Proposed Fix</h3>
              <ul className="pattern-card__list">
                <li>Before applying changes, presents a concise summary and preview</li>
                <li>Shows affected records, upcoming automation changes, or example outputs</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Application &amp; Retry</h3>
              <ul className="pattern-card__list">
                <li>On confirmation, applies selected changes and retries the original AI task</li>
                <li>Updates state in both the conversational interface and underlying system</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Optional Learning &amp; Persistence</h3>
              <ul className="pattern-card__list">
                <li>Offers to save the fix as a rule or preference (field mappings, conflict resolution rules, preference signals)</li>
                <li>Clarifies scope (per user, team, workspace, or organization) and provides access to rule management</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Exit &amp; Escalation Paths</h3>
              <ul className="pattern-card__list">
                <li>Session ends with clear outcome: Fixed, Partially fixed, Not fixed, or Escalated</li>
                <li>If repair fails, provides alternate paths: manual editing, export/import, or support links</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">10. Analytics &amp; Reuse</h3>
              <ul className="pattern-card__list">
                <li>Repair sessions logged for analytics and improvements</li>
                <li>Data used to auto-suggest fixes earlier or simplify repair steps over time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content &amp; tone guidelines</p>
            <p className="pattern-body">
              Guided repair flows operate at a vulnerable moment: the system has failed to deliver. Language and framing significantly affect how trustworthy the product feels.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy principles</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li><span className="pattern-body--bold">Own the failure</span> – Phrase errors as system or environment issues rather than blaming the user</li>
                  <li><span className="pattern-body--bold">Acknowledge friction</span> – Briefly recognize inconvenience without being dramatic or over-apologetic</li>
                  <li><span className="pattern-body--bold">Be specific and actionable</span> – Describe cause and path forward in one or two short sentences</li>
                  <li><span className="pattern-body--bold">Reflect uncertainty honestly</span> – Present hypotheses as suggestions (&quot;Most likely cause&quot;, &quot;Best guess&quot;)</li>
                  <li><span className="pattern-body--bold">Keep steps concise</span> – Each step&apos;s instruction should fit in a single short paragraph</li>
                  <li><span className="pattern-body--bold">Close the loop</span> – End with a summary of what changed and how future behavior may differ</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Avoid these patterns</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;The field &apos;X&apos; entered is invalid&quot; – Blames user instead of owning the issue</li>
                  <li>&quot;Something went wrong&quot; – Vague language without actionable next steps</li>
                  <li>Dramatic or over-apologetic messaging that undermines confidence</li>
                  <li>Presenting guesses as statements of fact</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Useful Copy Patterns</h3>
                <ul className="pattern-card__list">
                  <li>&quot;This task could not be completed because…&quot;</li>
                  <li>&quot;To fix this, the system will…&quot;</li>
                  <li>&quot;Review these options and choose how to proceed.&quot;</li>
                  <li>&quot;This change will apply to…&quot;</li>
                  <li>&quot;This fix has been saved and will be used next time.&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & UX Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction &amp; UX considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Well-executed guided repair flows reduce cognitive load rather than adding complexity.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Flow Design</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Limit step count</span> – Aim for 3–5 steps; group related questions</li>
                <li><span className="pattern-body--bold">Show progress and control</span> – Clear stepper with Back and Cancel/Escalate options</li>
                <li><span className="pattern-body--bold">Offer default recommendations</span> – Pre-select the safest or most likely option</li>
                <li><span className="pattern-body--bold">Anchor to context</span> – Keep original task or data visible where possible</li>
                <li><span className="pattern-body--bold">Support partial fixes</span> – Allow fixing critical issues and deferring non-blocking ones</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility &amp; Inclusivity</h3>
              <ul className="pattern-card__list">
                <li>Full keyboard navigation, focus management, and screen reader announcements</li>
                <li>Avoid relying solely on color for error states or step indicators</li>
                <li>Keep reading levels manageable; avoid unnecessary jargon</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Responsiveness &amp; Layout</h3>
              <ul className="pattern-card__list">
                <li>On larger screens, favor side panels for continuity with underlying context</li>
                <li>On smaller viewports, consider full-screen stepper flows</li>
                <li>Avoid layering multiple modals; consolidate into a single stepper</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Data, privacy &amp; governance</p>
            <p className="pattern-body">
              Guided repair flows often create rules and preferences that influence future AI behavior, which has implications for governance and compliance.
            </p>

            <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
              <div className="pattern-card">
                <h3 className="pattern-card__title">Scope &amp; Audience</h3>
                <ul className="pattern-card__list">
                  <li>When saving a fix, specify whether it applies to current user, team, workspace, or organization</li>
                  <li>Provide a stable place where saved mappings, preferences, and rules can be reviewed, edited, or deleted</li>
                </ul>
              </div>

              <div className="pattern-card">
                <h3 className="pattern-card__title">Privacy &amp; Audit</h3>
                <ul className="pattern-card__list">
                  <li>Avoid leaking sensitive context when showing suggestions from other users or tenants</li>
                  <li>For regulated environments, record who approved a rule, when, and what changes it effects</li>
                  <li>Respect opt-out controls for organizations that restrict cross-session learning</li>
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
                Different product and risk contexts may favor different versions of guided repair.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Lightweight Inline Clarification</h3>
              <p className="pattern-card__intro">
                For conversational assistants, a short turn-taking sequence in the same chat thread (one or two clarifying questions) can function as a mini repair flow without a separate UI.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Full Wizard-Style Repair</h3>
              <p className="pattern-card__intro">
                For complex configuration or high-stakes operations, a multi-step wizard or side panel offers greater structure, review capacity, and documentation.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Template-Based Repair</h3>
              <p className="pattern-card__intro">
                For common, repeatable issues (standard API misconfigurations, recurring mapping patterns), prebuilt templates can auto-populate most of the flow.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Asynchronous Repair</h3>
              <p className="pattern-card__intro">
                For long-running jobs, the system can send a notification linking directly to a repair flow that can be completed later, possibly by a different user with required permissions.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks &amp; anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Common mistakes that reduce trust instead of building it.
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
                  <h3 className="antipattern-title">Endless Loops</h3>
                  <p className="antipattern-subtitle">Returning the user to the same failing state without new options.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Returning the user to the same failing state without offering new options, escalation, or a clear exit creates frustration and erodes trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide escalation paths and clear exit options after repeated attempts.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Wizarding Trivial Issues</h3>
                  <p className="antipattern-subtitle">Launching a full multi-step flow for minor validation errors.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Launching a full multi-step flow for minor validation errors that could be fixed inline adds unnecessary friction.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Match the repair flow complexity to the error severity. Simple errors get simple fixes.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hiding Risk and Impact</h3>
                  <p className="antipattern-subtitle">Applying changes without summarizing what will be affected.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Applying changes without summarizing what will be affected or providing a way to revert undermines user confidence in the repair process.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show a preview of impact and provide clear revert options.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Anthropomorphism</h3>
                  <p className="antipattern-subtitle">Overly emotional or cutesy messaging that downplays serious failures.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Overly emotional or cutesy messaging that downplays serious failures or operational impact can feel inappropriate in professional contexts.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use clear, professional language that acknowledges the issue without trivializing it.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque Auto-Learning</h3>
                  <p className="antipattern-subtitle">Silently creating rules based on a single repair without informing the user.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Silently creating rules based on a single repair without informing the user or providing a way to manage those rules later creates unpredictable behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always ask before creating persistent rules and provide clear access to manage them.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Blocking Manual Control</h3>
                  <p className="antipattern-subtitle">Forcing the guided flow as the only path forward.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Forcing the guided flow as the only path forward when an expert user could fix the issue faster through direct configuration creates unnecessary friction.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide an escape hatch for users who prefer direct manual control.</span>
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
                How guided repair flows apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Integration &amp; ETL</h3>
              <p className="pattern-card__intro">Data Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A data sync agent encounters missing or renamed fields</li>
                <li>Sync job fails and surfaces: &quot;3 fields in the destination table have no source mapping&quot;</li>
                <li>Guided repair walks user through mapping each field with drag-and-drop or dropdown</li>
                <li>Offers to save mapping as a sync template for this integration</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Automation &amp; Scheduling</h3>
              <p className="pattern-card__intro">Project Management</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>AI scheduler tries to create events but encounters conflicts and permissions</li>
                <li>Reports: &quot;Two team members are unavailable for the proposed time&quot;</li>
                <li>Repair flow asks whether to prioritize a specific calendar, adjust hours, or allow overlap</li>
                <li>Summary shows updated schedule and notes new conflict rule</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Personalization &amp; Recommendations</h3>
              <p className="pattern-card__intro">E-commerce / Content</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>AI recommendation engine keeps suggesting irrelevant items</li>
                <li>System notices low engagement and prompts: &quot;Preferences may be misaligned. Improve recommendations?&quot;</li>
                <li>Guided flow shows items with quick rating controls and &quot;Show less often&quot; options</li>
                <li>Explains ratings will influence future recommendations and links to preference settings</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Developer &amp; DevOps Copilots</h3>
              <p className="pattern-card__intro">Infrastructure Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Deployment copilot fails to roll out new version due to misconfigured environment variables</li>
                <li>Explains specific variables are missing or mismatched and offers repair flow</li>
                <li>Steps include viewing current config, copying values from staging, and previewing deployment plan</li>
                <li>Ends with updated configuration and option to create reusable environment template</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support &amp; Ticket Routing</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>AI triage agent misroutes tickets or fails to categorize new issues</li>
                <li>Agent flags low-confidence classification and invites supervisor into guided repair flow</li>
                <li>Supervisor reviews suggested labels, updates routing rules, and provides example phrases</li>
                <li>Updated rules improve future routing accuracy and are transparently logged</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess and refine guided repair flows, track these metrics.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption Metrics</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Entry rate</span> – Percentage of failures where users engage with guided repair vs. ignoring or abandoning</li>
                <li><span className="pattern-body--bold">Completion rate</span> – Percentage of initiated repair sessions that reach a clear end state</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality Metrics</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Repair success rate</span> – Proportion of failures fully resolved by the flow without human support</li>
                <li><span className="pattern-body--bold">Time to resolution</span> – Average time from failure to successful completion</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Efficiency Metrics</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Repeat failure rate</span> – Frequency of the same error pattern after a repair rule has been created</li>
                <li><span className="pattern-body--bold">Support deflection</span> – Change in support tickets or escalations linked to relevant workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust Metrics</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">User sentiment</span> – CSAT/NPS after repair, or in-product feedback scores</li>
                <li><span className="pattern-body--bold">Step abandonment</span> – Which steps are most frequently abandoned to identify friction points</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes for agentic AI systems</p>
              <p className="pattern-body pattern-body--narrow">
                For agentic AI systems that orchestrate tools, APIs, and structured workflows, guided repair flows should be designed in tandem with technical error handling.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured Error Schemas</h3>
              <ul className="pattern-card__list">
                <li>Ensure tools and APIs return machine-readable errors (codes, categories, suggested remediations) that the LLM can interpret and map to repair flows</li>
                <li>Classify failures into categories: User input, Data quality, Permissions, System/infra, Policy/guardrail</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Reasoning Hooks</h3>
              <ul className="pattern-card__list">
                <li>Allow the AI agent to detect when a failure is likely recoverable through clarification vs. when it should immediately escalate or halt</li>
                <li>Preserve run IDs, error IDs, and related context so repair flows can be pre-populated</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Guardrails &amp; Governance</h3>
              <ul className="pattern-card__list">
                <li>For destructive or irreversible actions, always require explicit confirmation and provide impact preview</li>
                <li>In enterprise environments, ensure repairs respect permissions: only authorized roles can create rules affecting others</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Testing &amp; Validation</h3>
              <ul className="pattern-card__list">
                <li>Include repair flows in automated and manual testing</li>
                <li>Validate common error scenarios end-to-end, not only at the model or API level</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design &amp; review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Failure Communication</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the failure message clear, non-blaming, and actionable?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the entry point to guided repair appear immediately and prominently?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Flow Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the repair flow limited to 3–5 steps for common cases?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are progress indicators and Back/Skip/Cancel controls clearly visible?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Suggestions &amp; Defaults</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the AI propose likely fixes with pre-selected defaults?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily inspect and change suggested options?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Preview &amp; Confirmation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear preview of impact before changes are applied?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the confirmation state summarize what changed and its scope?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Learning &amp; Persistence</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the option to save rules clearly presented with scope clarification?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily access and manage saved rules later?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Exit &amp; Escalation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are escalation and manual control paths always available?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the flow end with a clear outcome status and next steps?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
