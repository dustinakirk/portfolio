import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import ApologyRemedyBundleDemo from '../demos/ApologyRemedyBundleDemo';

// SEO metadata for this pattern page
export const APOLOGY_REMEDY_BUNDLE_SEO = {
  title: "Apology + Remedy Bundle - AI Trust Pattern",
  description: "A pattern for turning AI mistakes into trust-building moments by combining a clear apology, explanation, and concrete repair options in a single, structured interaction.",
  keywords: ["AI apology", "AI error recovery", "trust repair", "AI remedy", "AI corrections", "agentic UX", "AI accountability", "error handling"],
  canonicalPath: "/agentic_ai_patterns/apology-remedy-bundle"
};

export default function ApologyRemedyBundlePattern() {
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
            <span className="pattern-header__index">9.4</span>
            <div>
              <h1 className="pattern-header__title">Apology + Remedy Bundle</h1>
              <p className="pattern-header__subtitle">
                A pattern for turning AI mistakes into trust-building moments by combining a clear apology, explanation, and concrete repair options in a single, structured interaction.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="9.4" patternTitle="Apology + Remedy Bundle" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Apology + Remedy Bundle is a conversational and UI pattern for agentic AI systems that have taken actions or produced outputs which may be wrong, incomplete, or harmful.
            </p>
            <p className="pattern-body">
              Instead of treating errors as embarrassing glitches, this pattern frames them as accountable, repairable events: the system openly acknowledges what went wrong, explains the cause, and proposes one or more concrete remedies that the user can review and control.
            </p>
            <p className="pattern-body">
              In B2B and B2C web applications, this pattern typically appears inline in chat transcripts, task detail views, or system notifications whenever the assistant realizes that a previous answer, recommendation, or automated action was incorrect or unreliable. The key idea is to avoid generic apologies or silent corrections in favor of a bundled &quot;trust repair packet&quot; that is explicit, actionable, and auditable.
            </p>
            <p className="pattern-body">
              <span className="pattern-body--bold">Example concept:</span> An AI revenue-ops copilot mislabels several opportunities as &quot;Closed Lost.&quot; A correction card appears in the conversation and in the activity log: <span className="pattern-body--bold">&quot;Correction: Opportunity status update was inaccurate.&quot;</span> The card explains the issue, lists the affected records, shows the proposed new statuses, and presents primary actions such as <span className="pattern-body--bold">&quot;Apply fixes to 7 opportunities&quot;</span>, <span className="pattern-body--bold">&quot;Review details&quot;</span>, and <span className="pattern-body--bold">&quot;Ignore for now.&quot;</span>
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/9.1 apology and remedy bundle.png"
              alt="Apology & Remedy Bundle pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This interactive demo shows a revenue operations AI agent that mistakenly marks opportunities as "Closed Lost" during a cleanup job. Watch as the agent detects its error through a sync check, then surfaces a correction bundle that explains what went wrong, identifies the impact (5 specific opportunities), and offers clear remedy actions. Click "Restore to 'Stalled'" to apply the fix and see how the bundle transitions to a success state, confirming the correction and maintaining trust through transparent accountability.
            </p>
          </div>
          <ApologyRemedyBundleDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic AI systems inevitably make mistakes: hallucinated facts, misapplied rules, misrouted tickets, flawed forecasts, or broken transformations. When those mistakes are not handled well, trust and adoption erode rapidly.
            </p>
            <p className="pattern-body">
              Without this pattern:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Errors feel opaque</span> – The system either fails silently or quietly overwrites previous work, leaving users unsure whether anything can be relied on.
              </li>
              <li>
                <span className="pattern-body--bold">Apologies are generic and repetitive</span> – Messages such as &quot;Sorry, something went wrong&quot; or &quot;Sorry, that answer was incorrect&quot; appear repeatedly without any explanation or meaningful next step, creating frustration and &quot;apology fatigue.&quot;
              </li>
              <li>
                <span className="pattern-body--bold">Recovery is manual and costly</span> – Users must track down impacted data, reverse changes, and reconstruct decisions without support, often under time pressure in production or operational environments.
              </li>
            </ul>
            <p className="pattern-body">
              In systems that autonomously act on data or trigger workflows, this lack of structured error repair becomes a serious risk: it undermines not only perceived intelligence but also perceived integrity and safety. The Apology + Remedy Bundle pattern addresses this by making trust repair explicit, guided, and reversible.
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
                  <span className="pattern-body--bold">The AI has taken an action that modifies persistent state</span> – for example, updating CRM records, changing access rules, sending communications, modifying infrastructure, or editing documents.
                </li>
                <li>
                  <span className="pattern-body--bold">The AI has delivered information that influences significant decisions</span> – for example, forecasts, pricing or budgeting advice, performance summaries, or incident analysis—and later detects that the information was inaccurate or incomplete.
                </li>
                <li>
                  <span className="pattern-body--bold">The error affects multiple entities, stakeholders, or downstream workflows</span> – and remediation requires more than a small local fix.
                </li>
                <li>
                  <span className="pattern-body--bold">A user flags an answer or action as incorrect, unsafe, biased, or out of policy</span> – and the system has enough context to propose a targeted repair.
                </li>
                <li>
                  <span className="pattern-body--bold">Post-hoc validation, anomaly detection, or monitoring discovers discrepancies</span> – in AI-driven automation runs (for example, unexpected spike in errors after a new prompt or model update).
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The interaction is <span className="pattern-body--bold">low-stakes, ephemeral, and obviously inconsequential</span> – for example, a single casual query that required no data writes and has already been replaced by a correct answer.</li>
                <li>The UI already supports <span className="pattern-body--bold">simple correction flows</span> that are more efficient – for example, inline text edits in a draft email, or directly adjusting a single field in a form.</li>
                <li>The discrepancy is <span className="pattern-body--bold">minor and self-evident</span>, and the product already has a more appropriate micro-pattern, such as inline clarification or partial suggestion update.</li>
                <li>The system <span className="pattern-body--bold">cannot confidently identify the error&apos;s scope or a safe remedy</span>, and the best action is to clearly flag uncertainty and escalate to a human specialist instead.</li>
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
                This pattern is usually expressed as a dedicated &quot;correction bundle&quot; element in the conversation or product UI. It is visually distinct from normal messages, summarizes the issue in plain language, and presents one or more repair actions that keep control firmly with the user.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline within the chat transcript
              </h3>
              <p className="pattern-card__intro">
                Displayed as a system message or card directly under the original erroneous response or action, often collapsed by default with a concise summary.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Attached to impacted objects</h3>
              <p className="pattern-card__intro">
                Shown on record detail pages, dashboards, or job-run summaries (for example, a &quot;Correction&quot; section on a forecast report, or a warning chip on a ticket list).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Via notification or banner</h3>
              <p className="pattern-card__intro">
                Used when a background process or post-hoc validator finds issues in prior AI activity, especially when the affected scope spans multiple users, projects, or tenants.
              </p>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Correction Bundle</h3>
            <p className="pattern-card__intro">
              The primary object is a Correction Bundle: a structured unit combining apology, explanation, impact, and remedy.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Title</p>
                <p className="pattern-card__intro">Communicates what the item is and signals trust repair.</p>
                <ul className="pattern-card__list">
                  <li>&quot;Correction to earlier forecast&quot;</li>
                  <li>&quot;Update: access policy change was incorrect&quot;</li>
                  <li>&quot;Revision: meeting summary has been adjusted&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <p className="pattern-card__intro">A concise, testable explanation of:</p>
                <ul className="pattern-card__list">
                  <li>What was wrong (the specific mistake or misalignment)</li>
                  <li>What caused it (for example, misinterpreted data, outdated assumptions, misapplied rule, model limitation)</li>
                  <li>The scope of impact (for example, &quot;affects 7 opportunities created today&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Remedy Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Preview fix</span> – showing a diff or before/after comparison</li>
                  <li><span className="pattern-body--bold">Apply fix</span> – confirming the corrective action</li>
                  <li><span className="pattern-body--bold">Edit fix</span> – letting the user adjust the proposal before application</li>
                  <li><span className="pattern-body--bold">Undo / Roll back</span> – revert to pre-error state</li>
                  <li><span className="pattern-body--bold">Escalate or contact support</span> – hand-off to a human when stakes or ambiguity are high</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Timestamp and creator (&quot;Generated by AI assistant on 2025-12-02&quot;)</li>
                  <li>Severity or impact level</li>
                  <li>Links to logs, traces, or model run IDs</li>
                  <li>A short note on prevention, such as &quot;Future runs will use the new data source by default&quot;</li>
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
                The lifecycle of an Apology + Remedy Bundle spans from error detection through resolution and learning.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>The AI produces an answer or executes an action (for example, updating records, editing content, or orchestrating workflows).</li>
                <li>The result is persisted or used as the basis for subsequent work.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Error Detection</h3>
              <ul className="pattern-card__list">
                <li>Automatic validators (schema checks, policy rules, constraint violations, or anomaly detection).</li>
                <li>Cross-checks against authoritative data sources.</li>
                <li>User feedback (flagging, downvotes, &quot;This looks wrong&quot; shortcuts, comments).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Severity and Scope Assessment</h3>
              <ul className="pattern-card__list">
                <li>The system classifies the issue (for example, low/medium/high severity).</li>
                <li>Identifies whether it affects a single artifact, batch of artifacts, or is systemic.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Bundle Construction</h3>
              <ul className="pattern-card__list">
                <li>A short, specific acknowledgment of the error.</li>
                <li>A clear explanation of what was wrong and why.</li>
                <li>An impact statement describing what is affected.</li>
                <li>One or more proposed remedies with associated actions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Surfacing in Context</h3>
              <ul className="pattern-card__list">
                <li>Right below the original assistant response in chat.</li>
                <li>On the relevant record or report, with a link back to the original conversation.</li>
                <li>As a notification that deep-links into the impacted area.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. User Decision and Control</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Primary path:</span> preview and apply the suggested fix.</li>
                <li><span className="pattern-body--bold">Alternative paths:</span> revise the fix, partially apply it, or decline.</li>
                <li><span className="pattern-body--bold">Escalation path:</span> request human review or open a support ticket.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Execution and Confirmation</h3>
              <ul className="pattern-card__list">
                <li>Applies the selected remedy safely, using transactional updates where possible.</li>
                <li>Records both the original state and the corrected state.</li>
                <li>Confirms success back in the UI with a lightweight &quot;Corrected&quot; banner or status chip.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Learning and Prevention</h3>
              <ul className="pattern-card__list">
                <li>Signals are logged for model fine-tuning, prompt updates, or rule adjustments.</li>
                <li>Product settings or preferences can be updated based on this correction.</li>
                <li>For repeated patterns, the system can propose higher-level fixes.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. History and Auditability</h3>
              <ul className="pattern-card__list">
                <li>Activity logs show the full sequence: initial action → detected issue → correction proposed → correction applied or declined.</li>
                <li>Stakeholders can review what happened for compliance, legal, or customer investigations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & tone guidelines</p>
            <p className="pattern-body">
              Effective bundles are short, sincere, and action-oriented. They acknowledge the mistake but focus attention on the path forward.
            </p>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Lead with clarity, not drama</h3>
                <ul className="pattern-card__list">
                  <li>Use one short clause to acknowledge the issue, then move quickly into explanation and action.</li>
                  <li>Avoid excessive or repetitive apologizing.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Be specific and testable</h3>
                <ul className="pattern-card__list">
                  <li>Specify which fields, entities, or time ranges were affected.</li>
                  <li>Avoid vague statements like &quot;Something was off&quot; in favor of concrete phrasing.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain cause at the right level</h3>
                <ul className="pattern-card__list">
                  <li>Reference understandable causes such as &quot;incomplete data,&quot; &quot;misconfigured filter,&quot; or &quot;changed schema.&quot;</li>
                  <li>Avoid opaque model jargon or internal error codes in user-facing text.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Connect remedy to explanation</h3>
                <ul className="pattern-card__list">
                  <li>Make it obvious how the proposed fix responds to the described cause.</li>
                  <li>For example, if the cause is a misapplied filter, the remedy should clearly show the corrected filter.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Avoid blame and defensiveness</h3>
                <ul className="pattern-card__list">
                  <li>Do not suggest that the error occurred because the user &quot;asked wrong.&quot;</li>
                  <li>Focus on collaborative problem solving and next steps.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Calibrate empathy to context</h3>
                <ul className="pattern-card__list">
                  <li>In high-stakes cases, acknowledge impact in professional, non-theatrical language.</li>
                  <li>In low-stakes creative contexts, slightly warmer tone may be appropriate.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for implementing robust error detection, bundle construction, and safe remediation.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Detection & Triggers</h3>
              <ul className="pattern-card__list">
                <li>Implement <span className="pattern-body--bold">inline validators</span> and <span className="pattern-body--bold">post-hoc monitors</span> that can detect violations of business rules or policies.</li>
                <li>Detect anomalous outputs compared to historical data or benchmarks.</li>
                <li>Capture <span className="pattern-body--bold">user feedback</span> signals with simple &quot;incorrect / correct&quot; voting and quick tags.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Constructing the Bundle</h3>
              <ul className="pattern-card__list">
                <li>Use structured templates with clear sections for title, explanation, impact, remedies, and prevention notes.</li>
                <li>Ensure text is <span className="pattern-body--bold">localizable</span> and avoids culture-specific idioms.</li>
                <li>Render the bundle as a visually distinct component that stands out from standard messages.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety & Guardrails</h3>
              <ul className="pattern-card__list">
                <li>For destructive or high-impact operations, require confirmation and display a clear summary of changes.</li>
                <li>Provide <span className="pattern-body--bold">rollback capabilities</span> where feasible—maintain snapshots of state before and after AI-driven actions.</li>
                <li>Limit remedies to actions that are technically possible and policy-compliant.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data, Privacy & Compliance</h3>
              <ul className="pattern-card__list">
                <li>Avoid echoing sensitive or confidential information beyond what is strictly necessary.</li>
                <li>Include identifiers (job IDs, run IDs, trace IDs) that allow internal teams to investigate.</li>
                <li>In regulated domains, align apology and remedy language with legal and compliance guidance.</li>
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
                Different manifestations of the pattern for varying severity and scope.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Micro-Correction</h3>
              <p className="pattern-card__intro">
                Used when the error is local and low-stakes, such as a mis-typed entity or minor misinterpretation.
              </p>
              <ul className="pattern-card__list">
                <li>Appears as a single, compact line.</li>
                <li>Example: &quot;Correction: The customer&apos;s legal name is &apos;Acme Corporation LLC&apos;.&quot;</li>
                <li>May automatically update without requiring confirmation, but remains visible in history.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Full Correction Card</h3>
              <p className="pattern-card__intro">
                Used for moderate to high-stakes scenarios with visible impact.
              </p>
              <ul className="pattern-card__list">
                <li>Includes title, explanation, impact, and prominent action buttons.</li>
                <li>Example contexts: misclassified support tickets, incorrectly assigned leads, or off-target campaign audiences.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Global Incident Remediation Notice</h3>
              <p className="pattern-card__intro">
                Used when an AI model, prompt, or integration issue has caused systematic errors across multiple users or tenants.
              </p>
              <ul className="pattern-card__list">
                <li>Dashboard banner summarizing the incident and correction plan.</li>
                <li>&quot;Learn more&quot; link to a postmortem or incident report.</li>
                <li>Bulk actions such as &quot;Apply revised forecast across all active projects.&quot;</li>
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
                Patterns to avoid when designing apology and repair flows.
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
                  <h3 className="antipattern-title">Empty Apologies</h3>
                  <p className="antipattern-subtitle">Apologizing without explaining what went wrong or offering practical steps.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Generic apologies without explanation or next steps leave users skeptical and annoyed. They do not restore trust or help users understand what happened.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always pair apologies with specific explanations and actionable remedies.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Apology Loops</h3>
                  <p className="antipattern-subtitle">Repeating &quot;Sorry, something went wrong&quot; in multiple turns without progress.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Repeated apologies without resolution create frustration and erode trust further. Users feel stuck in a cycle with no path forward.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Escalate to alternative approaches or human support when automated fixes fail repeatedly.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Blame-Shifting</h3>
                  <p className="antipattern-subtitle">Implying the user caused the system to fail.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Suggesting the error occurred because the user &quot;asked wrong&quot; or &quot;provided bad input&quot; damages trust and creates defensiveness rather than collaboration.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Take responsibility and focus on collaborative problem solving and next steps.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Corrections</h3>
                  <p className="antipattern-subtitle">Modifying critical data after the fact without informing affected users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Silent corrections make downstream inconsistencies hard to diagnose and erode trust in the system&apos;s transparency and reliability.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always notify users when corrections are made to data they depend on.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Emotional Language</h3>
                  <p className="antipattern-subtitle">Using overly emotional or anthropomorphic apologies in professional contexts.</p>
                </div>
              </div>
              <p className="antipattern-description">
                In professional contexts, overly emotional or human-like apologies can feel insincere or manipulative and may conflict with organizational tone.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Match tone to context—professional and measured for enterprise, warmer for consumer contexts.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overuse for Trivial Adjustments</h3>
                  <p className="antipattern-subtitle">Treating every minor adjustment as a full &quot;apology + remedy&quot; event.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using full correction bundles for trivial changes like reformatting text dilutes the perceived importance of genuine corrections.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Reserve full bundles for meaningful errors; use lightweight inline corrections for minor issues.</span>
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
                How Apology + Remedy Bundles apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Meeting Summarization</h3>
              <p className="pattern-card__intro">Collaboration Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An AI meeting assistant generates a summary that omits two key stakeholders and misstates a decision about budget approval.</li>
                <li>After cross-referencing the transcript and participant list, the system detects discrepancies.</li>
              </ul>
              <p className="pattern-card__label">Correction bundle</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Title: &quot;Correction: Updated meeting summary for Q4 planning.&quot;</li>
                <li>Explanation: Certain attendees and decisions were omitted due to ambiguous speaker labels.</li>
                <li>Actions: &quot;Replace previous summary,&quot; &quot;Review side-by-side,&quot; or &quot;Keep original.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Predictive Analytics</h3>
              <p className="pattern-card__intro">Sales or Finance Tool</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>A forecasting assistant provides a 12-month revenue prediction, later discovering that a new data source was missing and a seasonality parameter was misconfigured.</li>
              </ul>
              <p className="pattern-card__label">Correction bundle</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Explains that the initial forecast did not include recently added enterprise deals.</li>
                <li>Shows a chart overlay comparing original and corrected forecasts.</li>
                <li>Actions: &quot;Update all downstream reports,&quot; &quot;Re-run only for this region.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Creative Assistance</h3>
              <p className="pattern-card__intro">Brand Design Tool</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An AI design assistant generates social media assets that violate brand typography and logo clear-space rules.</li>
                <li>A brand rules engine flags the output after generation.</li>
              </ul>
              <p className="pattern-card__label">Correction bundle</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Identifies which rules were violated.</li>
                <li>Presents revised designs adhering to the style guide.</li>
                <li>Actions: &quot;Replace assets in this campaign,&quot; &quot;Keep both sets,&quot; or &quot;Adjust brand rules.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Developer or Ops Co-Pilot</h3>
              <p className="pattern-card__intro">Infrastructure Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>An AI assistant proposes a configuration change that inadvertently degraded performance in a staging environment.</li>
              </ul>
              <p className="pattern-card__label">Correction bundle</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Summarizes the configuration change and the observed performance regression.</li>
                <li>Shows metrics before and after the change.</li>
                <li>Actions: &quot;Roll back to previous config,&quot; &quot;Apply fix and rerun tests,&quot; &quot;Open incident in tracking tool.&quot;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases & Special Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & special considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Handling complex scenarios that require additional care.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Uncertain Cause</h3>
              <ul className="pattern-card__list">
                <li>When the root cause cannot be confidently identified, the explanation should admit uncertainty.</li>
                <li>Focus on impact and prioritize safe recovery over speculative narratives.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial Errors</h3>
              <ul className="pattern-card__list">
                <li>Some parts of a composite output may be correct while others are flawed.</li>
                <li>The bundle should allow selective repair (for example, &quot;Update action items only; leave decisions as-is&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-User and Multi-Tenant Contexts</h3>
              <ul className="pattern-card__list">
                <li>In shared workspaces, clarify who is seeing and controlling the remedy.</li>
                <li>Provide visibility for relevant stakeholders when changes impact shared resources.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regulated and Safety-Critical Domains</h3>
              <ul className="pattern-card__list">
                <li>In healthcare, finance, or safety-critical automation, involve compliance and risk partners.</li>
                <li>Define which errors merit automated remediation vs. mandatory human review.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">False Positives in Error Detection</h3>
              <ul className="pattern-card__list">
                <li>Overly sensitive detection can trigger corrections where no real error exists.</li>
                <li>Make it easy to decline corrections and treat those decisions as a signal to tune detection.</li>
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
                To assess and refine this pattern, track these key metrics.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Remedy Acceptance</h3>
              <ul className="pattern-card__list">
                <li>Rate of accepted vs. declined remedies to gauge usefulness and accuracy of proposed fixes.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Time-to-Correction</h3>
              <ul className="pattern-card__list">
                <li>Monitor time between error occurrence, detection, and applied remedy.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Downstream Incident Volume</h3>
              <ul className="pattern-card__list">
                <li>Measure support tickets about incorrect AI actions before and after rollout.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Confidence Metrics</h3>
              <ul className="pattern-card__list">
                <li>Include questions about trust, confidence, and perceived accountability in periodic user surveys or post-correction microfeedback.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Repeat-Error Patterns</h3>
              <ul className="pattern-card__list">
                <li>Analyze whether prevention statements and structural changes are actually reducing recurrence.</li>
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
                Other patterns that complement or connect to Apology + Remedy Bundle.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Clarification & Fallback Prompts</h3>
              <p className="pattern-card__intro">
                Proactively asking for clarification when intent or data is ambiguous, standing upstream of many avoidable errors.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Undo / Rollback Controls</h3>
              <p className="pattern-card__intro">
                Allowing quick reversal of AI-driven actions, especially for destructive or multi-step operations.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Confidence and Uncertainty Indicators</h3>
              <p className="pattern-card__intro">
                Signaling how reliable an answer or action is before it is used for critical decisions.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Change History & Audit Trail</h3>
              <p className="pattern-card__intro">
                Providing a clear record of AI-initiated changes, including corrections and reversals.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human Escalation & Handoff</h3>
              <p className="pattern-card__intro">
                Seamlessly transitioning from automated assistance to human support when automated remedies are insufficient or risky.
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
              <p className="pattern-checklist-category__title">Detection & Triggering</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can the system detect errors through automatic validators, cross-checks, and user feedback?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear trigger for when a correction bundle should be generated vs. simpler inline corrections?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Bundle Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the bundle include a clear acknowledgment, explanation, impact statement, and remedy options?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the bundle visually distinct from normal messages and easy to identify?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users preview, edit, apply, or decline proposed remedies?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there an escalation path when automated fixes are insufficient?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Tone & Content</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the language specific, action-oriented, and appropriately calibrated to context?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the content avoid blame-shifting, excessive apologizing, or overly emotional language?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability & Learning</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are corrections logged in activity history for compliance and debugging?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do correction events feed into system learning to prevent similar errors?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
