import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import ExecutionProgressDemo from '../demos/ExecutionProgressDemo';

// SEO metadata for this pattern page
export const EXECUTION_PROGRESS_VIEW_SEO = {
  title: "Execution Progress View - AI Trust Pattern",
  description: "Visualizes an AI agent's multi-step plan and current execution state so that users understand what is happening, how far along it is, and where intervention is needed.",
  keywords: ["AI progress view", "execution tracker", "step visualization", "AI transparency", "workflow progress", "agentic UX", "AI trust patterns", "multi-step execution"],
  canonicalPath: "/agentic_ai_patterns/execution-progress-view"
};


export default function ExecutionProgressViewPattern() {
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
            <span className="pattern-header__index">5.5</span>
            <div>
              <h1 className="pattern-header__title">Execution Progress View</h1>
              <p className="pattern-header__subtitle">
                Visualizes an AI agent&apos;s multi-step plan and current execution state so users understand what is happening, how far along it is, and where intervention is needed.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.5" patternTitle="Execution Progress View" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Execution Progress View is a structured visualization of an AI agent&apos;s work as it executes a plan, exposing steps, progress, and blockers that require attention.
            </p>
            <p className="pattern-body">
              It typically appears as a step-based tracker and progress indicator embedded in, or adjacent to, an agent conversation. The pattern exposes the plan, highlights the current step, distinguishes completed and upcoming steps, and surfaces blockers that require attention.
            </p>
            <p className="pattern-body">
              The primary value is <span className="pattern-body--bold">reduced uncertainty</span>. Instead of a generic &quot;Working...&quot; indicator, users see <em>what</em> the system is doing, <em>where</em> it is in the workflow, and <em>how</em> that maps to their business process. This improves perceived reliability, reduces premature cancellations and duplicate requests, and makes it safer to delegate high-impact tasks to agentic systems.
            </p>
            <p className="pattern-body">
              <span className="pattern-body--bold">Example concept:</span> An incident-investigation assistant called <strong>Atlas</strong> runs a 5-step analysis plan:
            </p>
            <ol className="pattern-list">
              <li>Scope investigation</li>
              <li>Pull metrics &amp; error rates</li>
              <li>Correlate patterns</li>
              <li>Draft root cause findings</li>
              <li>Validate confidence levels</li>
            </ol>
            <p className="pattern-body">
              During execution, the chat shows a vertical stepper with checkmarks for finished steps, a highlighted state for the active one (&quot;Correlate patterns&quot;), and muted icons for upcoming steps. Below, a horizontal progress bar labeled &quot;Step 3 of 4 &ndash; Correlation analyst processing...&quot; fills as work proceeds, with a clear percentage and controls to <strong>Pause</strong> or <strong>Show details</strong>. If the agent gets stuck (e.g., missing datastore credentials), the active step switches to a &quot;Blocked&quot; state with a short explanation and a quick action to resolve it.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/5.5 execution progress.png"
              alt="Execution Progress View pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows an execution progress view that breaks down a multi-step workflow into visible phases. Users can see which step is currently running, which have completed, and what remains—replacing vague &quot;thinking&quot; indicators with meaningful progress information.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Execution Progress View interactive demo">
            <ExecutionProgressDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without an explicit execution view, agentic workflows often feel opaque and unpredictable:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Vague status indicators</span> &ndash; The interface shows only a spinner or vague status (&quot;Thinking...&quot;, &quot;Working on it&quot;), leaving users unsure whether the system is stuck, idle, or progressing normally.
              </li>
              <li>
                <span className="pattern-body--bold">No visibility into progress</span> &ndash; Long-running or multi-step tasks provide no visibility into which tasks have completed, which are in progress, and how much work remains.
              </li>
              <li>
                <span className="pattern-body--bold">Silent failures</span> &ndash; When something goes wrong (e.g., missing access, inconsistent inputs, API rate limits), the system fails silently or returns a generic error, forcing users to guess what needs to be fixed.
              </li>
            </ul>
            <p className="pattern-body">
              Execution Progress View addresses this by making the agent&apos;s plan, state, and blockers visible in a compact, always-available surface.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when...
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">Multiple sequential or parallel steps</span> &ndash; Agentic workflows that involve investigations, analysis pipelines, content workflows, or configuration changes.
                </li>
                <li>
                  <span className="pattern-body--bold">Long-running tasks</span> &ndash; Execution time is measured in tens of seconds or minutes, and uncertainty can cause mistrust or duplicate requests.
                </li>
                <li>
                  <span className="pattern-body--bold">High-risk or high-impact operations</span> &ndash; Deployments, data migrations, security scans, or bulk updates where stakeholders must understand what the agent is doing.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-agent systems</span> &ndash; Different specialized agents handle stages of the workflow and responsibility needs to be explicit.
                </li>
                <li>
                  <span className="pattern-body--bold">Human intervention may be required mid-run</span> &ndash; Approvals, credentials, policy checks, or additional inputs.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Simple, single-step actions complete in a couple of seconds and are already clearly reflected in the UI (e.g., formatting a short text snippet).</li>
                <li>The main application view already conveys progress unambiguously (e.g., a file finishes uploading and appears immediately in a list).</li>
                <li>Agent behavior is stateless or ephemeral, and there is no meaningful notion of a multi-step plan or pipeline.</li>
                <li>The workflow has no user-facing notion of &quot;steps,&quot; and adding one would create unnecessary complexity.</li>
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
                Execution Progress View is typically composed of a <strong>step-based tracker</strong> plus <strong>real-time status indicators</strong>, integrated into the agent&apos;s conversation stream or a dedicated side panel.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: In-Chat
              </h3>
              <p className="pattern-card__intro">
                Within the chat conversation, grouped with the agent&apos;s message that describes the plan or confirms execution has started.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Persistent Panel</h3>
              <p className="pattern-card__intro">
                A persistent panel or drawer attached to the main content area.
              </p>
              <ul className="pattern-card__list">
                <li>Right rail in a dashboard</li>
                <li>Bottom execution console in a builder</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Inline Indicators</h3>
              <p className="pattern-card__intro">
                Inline indicators in related surfaces.
              </p>
              <ul className="pattern-card__list">
                <li>Toast or banner: &quot;Run 3 of 5: &apos;Marketing pipeline setup&apos; in progress&quot;</li>
                <li>Badges on navigation: &quot;1 running&quot;, &quot;2 blocked&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Execution Step</h3>
            <p className="pattern-card__intro">
              The core unit in this pattern is an <strong>execution step</strong> within an <strong>agent-run</strong>.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <p className="pattern-card__intro">Short, action-oriented phrase describing the outcome:</p>
                <ul className="pattern-card__list">
                  <li>&quot;Pull metrics &amp; error rates&quot;</li>
                  <li>&quot;Generate remediation plan&quot;</li>
                  <li>&quot;Sync changes to staging cluster&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <p className="pattern-card__intro">Optional explanatory text:</p>
                <ul className="pattern-card__list">
                  <li>&quot;Querying last 24 hours of error logs across services tagged &apos;checkout&apos;&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Pause / resume entire run or this step</li>
                  <li>Cancel run</li>
                  <li>Retry step</li>
                  <li>Skip step (where safe and well-guarded)</li>
                  <li>&quot;Fix&quot; or &quot;Provide input&quot; when blocked</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Status: Not started, In progress, Completed, Blocked, Failed, Skipped</li>
                  <li>Responsible agent or role: &quot;Metrics Agent&quot;, &quot;SQL Analyst&quot;</li>
                  <li>Time estimates or elapsed time</li>
                  <li>Link to logs or detailed traces</li>
                  <li>Impact scope tags: environments, datasets, segments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Run Container */}
          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Run Container</h3>
            <p className="pattern-card__intro">
              The run container aggregates steps and may display:
            </p>
            <ul className="pattern-card__list">
              <li>Run title and description</li>
              <li>Overall status (&quot;Running&quot;, &quot;Blocked&quot;, &quot;Completed with warnings&quot;)</li>
              <li>Overall progress indicator (percentage, step count)</li>
              <li>Global controls and links to history</li>
            </ul>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior &amp; lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of an execution progress view spans from plan generation through completion and historical review.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Plan Generation</h3>
              <ul className="pattern-card__list">
                <li>The agent proposes a structured plan, often as a numbered list or stepper</li>
                <li>Initial state shows all steps as &quot;Not started&quot; or lightly muted</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Optional Plan Confirmation</h3>
              <ul className="pattern-card__list">
                <li>For higher-risk operations, require explicit confirmation before starting</li>
                <li>Users can edit, reorder, or deselect steps where supported</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Execution Start</h3>
              <ul className="pattern-card__list">
                <li>First active steps transition to &quot;In progress&quot;</li>
                <li>System message indicates execution has started, with timestamp</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Progress Updates</h3>
              <ul className="pattern-card__list">
                <li>Completed steps switch to checkmarks with timestamps</li>
                <li>Active steps remain visually distinct (color, dot, glow, motion)</li>
                <li>Progress bar and &quot;Step X of Y&quot; indicator shows position</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Parallel Branches</h3>
              <ul className="pattern-card__list">
                <li>Multiple &quot;In progress&quot; indicators at same level, or</li>
                <li>Grouped under collapsible &quot;Batch&quot; node (e.g., &quot;Enrich 12 data sources (4/12 complete)&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Blocked / Attention Required</h3>
              <ul className="pattern-card__list">
                <li>Affected step flags as &quot;Blocked&quot; with inline explanation</li>
                <li>Clear call to action: &quot;Connect repository&quot;, &quot;View changes&quot;</li>
                <li>Run either pauses globally or continues with independent steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Error Handling &amp; Retries</h3>
              <ul className="pattern-card__list">
                <li>Failures marked with error icon and summary</li>
                <li>Optional controls for retrying with same or adjusted inputs</li>
                <li>Problematic steps highlighted first in final state</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Completion &amp; Handoff</h3>
              <ul className="pattern-card__list">
                <li>Overall run state updates to &quot;Completed&quot; or &quot;Completed with warnings&quot;</li>
                <li>Agent presents summary and resulting artifacts</li>
                <li>Progress tracker remains available as historical record</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. History &amp; Re-entry</h3>
              <ul className="pattern-card__list">
                <li>Past runs accessible from activity logs or project views</li>
                <li>Same execution view pattern, now read-only</li>
                <li>Helps auditors or collaborators understand what occurred</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States & Visual Language */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States &amp; visual language</p>
              <p className="pattern-body pattern-body--narrow">
                A consistent state model is critical to comprehension.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Not Started</h3>
              <p className="pattern-card__intro">Muted or low-contrast, no icon fill.</p>
            </div>
            <div className="pattern-card">
              <h3 className="pattern-card__title">In Progress</h3>
              <p className="pattern-card__intro">Highlighted step with active indicator (dot, spinner, pulse).</p>
            </div>
            <div className="pattern-card">
              <h3 className="pattern-card__title">Completed</h3>
              <p className="pattern-card__intro">Checkmark or success icon, strong contrast label, timestamp.</p>
            </div>
            <div className="pattern-card">
              <h3 className="pattern-card__title">Blocked</h3>
              <p className="pattern-card__intro">Warning icon and color, inline reason, prominent &quot;Fix&quot; or &quot;Review&quot; action.</p>
            </div>
            <div className="pattern-card">
              <h3 className="pattern-card__title">Failed</h3>
              <p className="pattern-card__intro">Error icon and color, link to details and logs.</p>
            </div>
            <div className="pattern-card">
              <h3 className="pattern-card__title">Skipped</h3>
              <p className="pattern-card__intro">Greyed-out with clear label to avoid confusion with errors.</p>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Design Considerations</h3>
            <ul className="pattern-card__list">
              <li>Rely on <strong>more than color</strong> to encode state (icons, shapes, labels) for accessibility</li>
              <li>Keep visible states manageable; group or collapse distant or low-relevance steps</li>
              <li>Avoid overly precise percentages; coarse milestones often better reflect reality for AI workflows</li>
            </ul>
          </div>
        </section>

        {/* Multi-Agent Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Multi-agent considerations</p>
              <p className="pattern-body pattern-body--narrow">
                In multi-agent systems, several agents may contribute to a single run.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Attribution per Step</h3>
              <ul className="pattern-card__list">
                <li>Display responsible agent&apos;s name, role, or avatar on each step</li>
                <li>For shared steps, show multiple avatars or a &quot;handoff&quot; indicator</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Agent Handoffs</h3>
              <ul className="pattern-card__list">
                <li>Explicitly show transitions where ownership changes</li>
                <li>&quot;Analysis Agent &rarr; Drafting Agent &rarr; Reviewer Agent&quot;</li>
                <li>Use transitions as natural places for approvals or additional inputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Concurrency &amp; Orchestration</h3>
              <ul className="pattern-card__list">
                <li>Group parallel agent steps under a parent node</li>
                <li>&quot;Specialist agents running (3/5 complete)&quot;</li>
                <li>Surface only meaningful milestones even if many internal micro-steps exist</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction Design & Controls */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction design &amp; controls</p>
              <p className="pattern-body pattern-body--narrow">
                Execution Progress View often pairs visualization with critical controls.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Pause / Resume</h3>
              <ul className="pattern-card__list">
                <li>Suitable for longer runs with potential side effects</li>
                <li>When paused, clearly indicate frozen state and waiting steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cancel Run</h3>
              <ul className="pattern-card__list">
                <li>Safe way to stop execution with confirmation text</li>
                <li>&quot;No changes will be applied to production&quot;</li>
                <li>Show whether cancellation is immediate or &quot;best effort&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Fix / Unblock Actions</h3>
              <ul className="pattern-card__list">
                <li>Short, focused flows for resolving blockers</li>
                <li>Connect integration, add credentials, adjust filters, grant permissions</li>
                <li>Return users to execution view afterward, with step resuming automatically</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">View Details / Logs</h3>
              <ul className="pattern-card__list">
                <li>Expandable panel or &quot;Show details&quot; link for deeper info</li>
                <li>Prompts, queries, API calls, system messages</li>
                <li>Default to concise view to prevent overwhelming non-technical users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Run-Level Actions</h3>
              <ul className="pattern-card__list">
                <li>Duplicate plan</li>
                <li>Rerun with new parameters</li>
                <li>Schedule run</li>
                <li>Share link to run for collaboration</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scaling Controls with Risk</h3>
              <p className="pattern-card__intro">
                Interaction richness should scale with risk and complexity: critical production operations justify more controls; low-risk generative tasks may require only simple status and cancellation.
              </p>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content guidelines</p>
            <p className="pattern-body">
              Effective messaging clarifies what&apos;s happening and sets appropriate expectations.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good step labels</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Validate confidence levels&quot; (outcome-oriented)</li>
                  <li>&quot;Gather error logs from checkout service&quot;</li>
                  <li>&quot;Generate remediation plan&quot;</li>
                  <li>&quot;Usually completes in under 2 minutes&quot; (qualitative guidance)</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak step labels</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Step 3: Processing&quot; (vague, no user-understandable outcome)</li>
                  <li>&quot;Run model X on dataset Y&quot; (internal implementation)</li>
                  <li>&quot;Estimated time: 47 seconds&quot; (overly precise, often wrong)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Lead with Outcomes</h3>
                <p className="pattern-card__intro">
                  Step labels should describe the business outcome (&quot;Validate confidence levels&quot;) rather than internal implementation (&quot;Run model X on dataset Y&quot;).
                </p>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Consistent Verb Structures</h3>
                <p className="pattern-card__intro">
                  Start steps with action verbs: &quot;Gather...&quot;, &quot;Analyze...&quot;, &quot;Generate...&quot;, &quot;Apply...&quot;
                </p>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain Blockers in Plain Language</h3>
                <p className="pattern-card__intro">
                  Combine a short high-level description with concise technical hints: &quot;Blocked: cannot access S3 bucket &apos;events-prod&apos;. The configured role lacks s3:GetObject permissions.&quot;
                </p>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Align Terminology with Domain</h3>
                <p className="pattern-card__intro">
                  For marketing, use &quot;campaign&quot;, &quot;segment&quot;, &quot;send list&quot;; for observability, use &quot;services&quot;, &quot;spans&quot;, &quot;error rate&quot;.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility & Internationalization */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility &amp; internationalization</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure progress views work for all users and across languages.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Semantic Markup</h3>
              <ul className="pattern-card__list">
                <li>Use semantic markup for lists, progress indicators, and statuses</li>
                <li><code>aria-live</code> for status updates</li>
                <li><code>role=&quot;progressbar&quot;</code> with proper attributes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Beyond Color</h3>
              <ul className="pattern-card__list">
                <li>Supplement icons and colors with text labels and patterns</li>
                <li>Suitable for color-blind users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Screen Reader Announcements</h3>
              <ul className="pattern-card__list">
                <li>Announce key state changes for assistive technologies</li>
                <li>&quot;Step 3 of 5 started: Correlate patterns&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Internationalization</h3>
              <ul className="pattern-card__list">
                <li>Plan for label length variability across languages</li>
                <li>Step containers should gracefully support longer translated text</li>
                <li>Avoid encoding state purely through animation</li>
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
                Implementation details vary by stack, but several recurring patterns support robust execution views.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Model</h3>
              <ul className="pattern-card__list">
                <li>Represent runs and steps with explicit IDs, ordered positions, states, timestamps, and responsible agents</li>
                <li>Allow partial updates so UI can incrementally update as events stream in</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Real-Time Updates</h3>
              <ul className="pattern-card__list">
                <li>Use websockets, server-sent events, or polling to keep progress live</li>
                <li>Handle disconnects gracefully by resyncing state on reconnect</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Idempotency &amp; Resilience</h3>
              <ul className="pattern-card__list">
                <li>Reloading the page should not lose track of a run</li>
                <li>Users should be able to re-open the same execution view from history</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security &amp; Privacy</h3>
              <ul className="pattern-card__list">
                <li>Logs and &quot;Show details&quot; may expose prompts, data samples, or system metadata</li>
                <li>Apply appropriate redaction and access controls</li>
                <li>Route sensitive blockers (credentials) to secure input flows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance</h3>
              <ul className="pattern-card__list">
                <li>For very long pipelines, consider virtualized lists and summarized nodes</li>
                <li>&quot;+15 more steps&quot; with drill-down options</li>
                <li>Avoid UI thrashing; batch rapid-fire updates into coherent changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Success of this pattern can be tracked through:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Behavioral Indicators</h3>
              <ul className="pattern-card__list">
                <li>Reduction in cancelled runs due to perceived &quot;stuck&quot; behavior</li>
                <li>Fewer duplicate requests or re-submissions for the same task</li>
                <li>Increased completion rates for long-running or complex workflows</li>
                <li>Frequency and resolution time of &quot;Blocked&quot; states</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Support &amp; Qualitative Signals</h3>
              <ul className="pattern-card__list">
                <li>Decrease in support tickets mentioning confusion about agent status</li>
                <li>Positive mentions of clarity, transparency, and predictability in surveys</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engagement with Transparency Features</h3>
              <ul className="pattern-card__list">
                <li>Click-through rates on &quot;Show details&quot;, &quot;View logs&quot;, or per-step explanations</li>
                <li>Adoption of shared run links among collaborators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Common pitfalls &amp; anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Fake or Misleading Progress</h3>
                  <p className="antipattern-subtitle">Smooth linear progress when system has no real notion of progress.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing smooth, linear progress when the system has no real notion of progress erodes trust once users notice inconsistencies.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use discrete step markers instead of continuous progress bars when actual progress is unknown.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming Detail by Default</h3>
                  <p className="antipattern-subtitle">Surfacing every micro-action in the main view.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Surfacing every micro-action, prompt, or API call in the main view makes the pattern noisy and hard to scan.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Show meaningful milestones by default with optional drill-down for detail.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous Labels</h3>
                  <p className="antipattern-subtitle">Vague terms like &quot;Step 3: Processing&quot;.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Vague terms such as &quot;Step 3: Processing&quot; do not convey meaningful value; each step should map to a user-understandable outcome.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use action-oriented, outcome-focused labels like &quot;Validate confidence levels&quot;.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Failure or Hidden Blockers</h3>
                  <p className="antipattern-subtitle">Failing without marking affected steps or explaining resolution.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Failing without clearly marking the affected step or explaining how to resolve the issue leads to frustration and re-runs.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Explicitly mark blocked steps with inline explanations and clear resolution actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Non-Responsive Controls</h3>
                  <p className="antipattern-subtitle">Pause, cancel, and retry actions without immediate UI feedback.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Pause, cancel, and retry actions must update the UI immediately with transitional states (&quot;Cancelling...&quot;) to avoid rapid repeated clicks and race conditions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide immediate visual feedback with transitional states for all control actions.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How execution progress views apply across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data &amp; Analytics Platforms</h3>
              <p className="pattern-card__intro">Business Intelligence</p>
              <ul className="pattern-card__list">
                <li>Pipeline-building agent shows ingestion, transformation, validation, and publishing stages</li>
                <li>Indicates which data sources and models are being touched</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Observability &amp; Incident Response</h3>
              <p className="pattern-card__intro">Operations Platform</p>
              <ul className="pattern-card__list">
                <li>Investigation agent runs scoped queries, correlates metrics and traces</li>
                <li>Identifies probable root causes, drafts postmortem, prepares remediation tasks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps &amp; Deployment Tools</h3>
              <p className="pattern-card__intro">Infrastructure Platform</p>
              <ul className="pattern-card__list">
                <li>AI deployment orchestrator shows build, test, canary rollout, traffic shifting, rollback checks</li>
                <li>Highlights approvals needed for production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing, Sales &amp; CRM</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <ul className="pattern-card__list">
                <li>Campaign agent builds segments, drafts messages, runs compliance checks</li>
                <li>Schedules sends and creates follow-up experiments with progress view for each stage</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Knowledge Management &amp; Content</h3>
              <p className="pattern-card__intro">Content Operations</p>
              <ul className="pattern-card__list">
                <li>Documentation agent crawls sources, extracts entities, generates drafts</li>
                <li>Requests human review and publishes updates with clear blockers where manual sign-off is required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Related patterns</p>
            <p className="pattern-body">
              These patterns together create a comprehensive transparency framework that increases trust in agentic AI systems:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Plan Preview</span> &ndash; Shows the proposed multi-step plan before execution starts, often feeding directly into the Execution Progress View once confirmed.</li>
              <li><span className="pattern-body--bold">Safeguarded High-Risk Actions</span> &ndash; Adds confirmations, reviews, and approval gates around sensitive steps within the execution flow.</li>
              <li><span className="pattern-body--bold">Explanatory System Messages</span> &ndash; Provides natural-language explanations of what the agent is doing and why, complementing the visual stepper.</li>
              <li><span className="pattern-body--bold">Run History &amp; Audit Trail</span> &ndash; Extends the execution view into long-term records for compliance, collaboration, and debugging.</li>
            </ul>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design &amp; review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Progress Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the current step clearly highlighted and distinguishable from completed and upcoming steps?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily tell how far along the workflow is and how much remains?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Blocker Handling</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are blocked states clearly marked with explanations and resolution actions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users fix blockers without losing context or workflow state?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Control Availability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are pause, resume, and cancel controls easily accessible during execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do controls provide immediate visual feedback with transitional states?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Information Hierarchy</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the default view concise with meaningful milestones rather than every micro-action?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users drill down for more detail when needed?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Multi-Agent Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear which agent is responsible for each step in multi-agent workflows?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are handoffs between agents explicitly shown?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">History &amp; Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are completed runs available for historical review?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can collaborators or auditors understand what occurred from the historical view?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
