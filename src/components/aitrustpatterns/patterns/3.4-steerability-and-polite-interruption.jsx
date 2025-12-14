import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import SteerabilityDemo from '../demos/SteerabilityDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const STEERABILITY_POLITE_INTERRUPTION_SEO = {
  title: "Steerability & Polite Interruption - AI Trust Pattern",
  description: "Enable users to redirect an agentic AI mid-task, preserving useful progress while clearly acknowledging and incorporating new intent. A proven UX pattern for building trust in agentic AI applications.",
  keywords: ["AI steerability", "polite interruption", "mid-task correction", "AI control", "agentic UX", "AI trust patterns", "plan adaptation", "conversational AI", "AI redirection"],
  canonicalPath: "/agentic_ai_patterns/steerability-polite-interruption"
};

export default function SteerabilityPoliteInterruptionPattern() {
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
            <span className="pattern-header__index">3.4</span>
            <div>
              <h1 className="pattern-header__title">Steerability & Polite Interruption</h1>
              <p className="pattern-header__subtitle">
                Enables users to redirect an agentic AI mid-task, preserving useful progress while clearly acknowledging and incorporating new intent.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.4" patternTitle="Steerability & Polite Interruption" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Steerability and polite interruption refer to the system&apos;s ability to accept mid-stream changes in direction, integrate them into the agent&apos;s current plan, and continue work without unnecessary reset or loss of context.
            </p>
            <p className="pattern-body">
              In agentic AI experiences, especially those driven by natural language chat, users expect conversational flexibility: it should be possible to correct misunderstandings early, add new constraints, pivot the objective, or stop unsafe or undesired actions without starting from scratch.
            </p>
            <p className="pattern-body">
              This pattern defines how the agent detects and responds to interruptions (both explicit and implicit), how it adjusts its plan, and how it communicates status back to the user in a calm, trustworthy manner.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/3.4 steerability.png"
              alt="Steerability & Polite Interruption pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows an AI agent executing a marketing outreach campaign that can be redirected mid-task. The agent is preparing email and discount code steps when the user interrupts with new instructions, demonstrating how the system acknowledges the change and adapts its plan accordingly.
            </p>
            <div className="pattern-demo-instructions">
              <p className="pattern-body--bold">How to interact with this demo:</p>
              <ol className="pattern-list pattern-list--numbered">
                <li>Watch the agent begin executing its initial plan</li>
                <li>Click &quot;Submit&quot; to interrupt with the pre-filled redirect instruction</li>
                <li>Observe how the agent acknowledges the change and updates its plan</li>
                <li>Use &quot;Reset Demo&quot; to start over</li>
              </ol>
            </div>
          </div>
          <div className="pattern-demo" aria-label="Steerability interactive demo">
            <SteerabilityDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without steerability and polite interruption:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Long-running workflows feel brittle</span> – A small change in intent often forces a complete restart or manual reconfiguration, wasting time and effort.
              </li>
              <li>
                <span className="pattern-body--bold">Users experience anxiety and mistrust</span> – When they cannot see whether a critical mid-task correction (e.g., &quot;do not email this customer segment&quot;) has actually been applied.
              </li>
              <li>
                <span className="pattern-body--bold">The system feels unlike human collaboration</span> – Conversation flows become linear scripts instead of flexible dialogues, making agentic AI feel more like an opaque batch process than a partner.
              </li>
            </ul>
            <p className="pattern-body">
              This pattern ensures that agentic systems stay responsive to evolving intent, reduce wasted effort, and maintain user confidence that the agent is truly listening and adapting.
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
                  <span className="pattern-body--bold">Multi-step or long-running tasks</span> – Workflows like report generation, campaign building, coding and deployment, data remediation, or workflow automation where the agent executes a sequence of steps over time.
                </li>
                <li>
                  <span className="pattern-body--bold">Evolving or ambiguous goals</span> – When initial instructions are incomplete, exploratory, or likely to change as the user sees interim results.
                </li>
                <li>
                  <span className="pattern-body--bold">High-stakes or policy-heavy contexts</span> – Domains such as finance, security operations, legal review, medical documentation, or HR where mid-task corrections must be honored immediately.
                </li>
                <li>
                  <span className="pattern-body--bold">Agent-driven orchestration over external systems</span> – When agents trigger actions in third-party tools (CRM, marketing platforms, cloud infrastructure) and users must retain fine-grained control.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single-turn Q&A or simple transformations</span> – For basic question answering or one-off text transformations, a standard &quot;edit and resend&quot; affordance usually suffices.</li>
                <li><span className="pattern-body--bold">Highly structured wizards with narrow scope</span> – When a workflow is short, linear, and fully controlled by a form, inline form edits are often simpler.</li>
                <li><span className="pattern-body--bold">Non-critical, low-effort tasks</span> – For casual tasks where re-running is trivial and consequences are low (e.g., generating a fun tagline).</li>
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
                This pattern lives primarily inside the conversational and &quot;agent run&quot; surfaces: where the agent&apos;s plan, status, and artifacts are visible, and where the user can intervene.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Active Run in Chat
              </h3>
              <p className="pattern-card__intro">
                While the agent is &quot;thinking&quot;, streaming, or executing steps, the message composer remains active.
              </p>
              <ul className="pattern-card__list">
                <li>Inline controls: <strong>Pause</strong>, <strong>Stop</strong>, <strong>Adjust</strong>, or <strong>Revise plan</strong></li>
                <li>Controls appear adjacent to the current run or plan card</li>
                <li>User can type new messages at any time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Plan Summary / Task Panel</h3>
              <p className="pattern-card__intro">
                A collapsible panel or card summarizing the current plan (e.g., &quot;Steps 1–5&quot;).
              </p>
              <ul className="pattern-card__list">
                <li><strong>Edit constraints</strong> – Modify parameters mid-run</li>
                <li><strong>Skip step</strong> – Bypass a specific action</li>
                <li><strong>Change target</strong> – Redirect scope or focus</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry Points</h3>
              <p className="pattern-card__intro">
                Lightweight prompts that appear at key moments.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Need to change direction?&quot; after major milestones or errors</li>
                <li>&quot;Update constraints&quot; when agent detects conflicting instructions</li>
                <li>System notifications: &quot;Plan updated to exclude blocked regions&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Implicit Steering</h3>
              <p className="pattern-card__intro">
                Free-form messages the system interprets as steering commands.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Actually, do not include interns&quot;</li>
                <li>&quot;Make this SMS-first for EMEA only&quot;</li>
                <li>&quot;Drop any discounts from the campaign&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Steerable Agent Run</h3>
            <p className="pattern-card__intro">
              The core object is a single goal-directed execution with an attached plan, status, artifacts, and control affordances.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Optimize Q4 ad campaign&quot;</li>
                  <li>&quot;Refactor data ingestion pipeline&quot;</li>
                  <li>&quot;Summarize customer feedback for Product A&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Constraints</p>
                <ul className="pattern-card__list">
                  <li>A short description of the current plan or scope</li>
                  <li>Key constraints: &quot;Region: EMEA&quot;, &quot;Channel: SMS only&quot;</li>
                  <li>Updated dynamically when steering occurs</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Actions:</span> Pause/Resume, Stop/Cancel, Revise plan, Undo last change</li>
                  <li><span className="pattern-body--bold">Status:</span> Planning, Executing, Paused, Awaiting input, Revising plan</li>
                  <li><span className="pattern-body--bold">Risk level:</span> Approval requirements, affected environments</li>
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
                A typical lifecycle for steerable agent runs, from initial intent through interruption and resumption.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Intent & Plan</h3>
              <ul className="pattern-card__list">
                <li>User expresses a goal in natural language</li>
                <li>Agent synthesizes a plan (steps, dependencies, outputs)</li>
                <li>Presents a concise summary before or during execution</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Execution Begins</h3>
              <ul className="pattern-card__list">
                <li>Agent starts acting: drafting, querying APIs, updating configs</li>
                <li>UI indicates live progress</li>
                <li>Composer and controls remain available</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Interruption Occurs</h3>
              <ul className="pattern-card__list">
                <li>User sends a message that contradicts, refines, or pivots the goal</li>
                <li>Or presses an explicit control (Pause / Adjust / Stop)</li>
                <li>System treats this as a high-priority signal</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Immediate Acknowledgment</h3>
              <ul className="pattern-card__list">
                <li>Agent stops further non-essential actions quickly</li>
                <li>Responds promptly with an acknowledgment</li>
                <li>Restates the detected change: &quot;Understood. Updating the plan to...&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Plan Adaptation</h3>
              <ul className="pattern-card__list">
                <li>Re-evaluates the existing plan</li>
                <li>Determines what can be reused vs. updated or discarded</li>
                <li>Archives or versions the previous plan</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Present Updated Plan</h3>
              <ul className="pattern-card__list">
                <li>Revised plan shown succinctly, emphasizing changes</li>
                <li>High-stakes: request confirmation (&quot;Proceed with updated plan?&quot;)</li>
                <li>Low-stakes: update and proceed with rollback option</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Resumption</h3>
              <ul className="pattern-card__list">
                <li>Once confirmed, agent resumes from the appropriate step</li>
                <li>Existing useful work is reused (drafts, cached results)</li>
                <li>Avoids unnecessary repetition</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Handling Overlapping Interruptions</h3>
              <ul className="pattern-card__list">
                <li>Subsequent steering inputs are queued or merged</li>
                <li>UI summarizes multiple adjustments together</li>
                <li>&quot;Three changes applied: region, budget, and channel&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Completion & Review</h3>
              <ul className="pattern-card__list">
                <li>Plan history shows major redirections and rationale</li>
                <li>User can inspect what was executed under each plan version</li>
                <li>Enables traceability and learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guidance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidance</p>
              <p className="pattern-body pattern-body--narrow">
                Technical and UX considerations for building steerable agent experiences.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Detection & Classification</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Input-based detection:</span> Treat any new message while a run is active as a potential steering event. Classify into clarification, constraint update, goal pivot, stop/cancel, or out-of-band chit-chat.</li>
                <li><span className="pattern-body--bold">Control-based detection:</span> Observe explicit control triggers (Pause, Stop, Adjust, Undo) as authoritative interruptions.</li>
                <li><span className="pattern-body--bold">Priority routing:</span> Ensure interruption signals are routed with higher priority than ongoing tool calls.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">State Management & Plan Adaptation</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Stateful context:</span> Maintain a structured representation of the plan separate from free-text chat.</li>
                <li><span className="pattern-body--bold">Non-destructive updates:</span> Version plans instead of overwriting. Compute a &quot;delta plan&quot; showing what remains valid vs. altered.</li>
                <li><span className="pattern-body--bold">Selective rollback:</span> For operations that affected external systems, provide remediation options where feasible.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Conversation & UX Patterns</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Immediate acknowledgment:</span> Always follow an interruption with a quick confirmation that the agent has heard and understood.</li>
                <li><span className="pattern-body--bold">Short re-planning phase:</span> Use transient status indicators like &quot;Revising plan…&quot; rather than long delays.</li>
                <li><span className="pattern-body--bold">Non-intrusive system messages:</span> Call attention to substantial changes once, then respect the updated direction.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety & Policy Integration</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Safety first:</span> Steerability must not allow users to bypass safety rules or policy checks.</li>
                <li><span className="pattern-body--bold">Conflict detection:</span> Detect contradictions and surface them clearly. Prefer a clarification turn over silently picking one interpretation.</li>
                <li><span className="pattern-body--bold">Access control:</span> Connect interruption handling with role-based checks and approval flows for sensitive actions.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Technical Considerations</h3>
            <ul className="pattern-card__list">
              <li>Cancellation and cooperative interruption in long-running tasks (cancelable async operations, tool calls, streaming responses)</li>
              <li>Logging and observability for each interruption, including timestamps, changed parameters, and affected outputs</li>
              <li>Resilience to network interruptions and reconnect scenarios (resuming a paused run after a user returns)</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How steerability and polite interruption apply across different domains.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Content & Communication</h3>
              <p className="pattern-card__intro">Email drafting, documentation, messaging</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Email sequences:</span> User adds mid-run: &quot;Make the tone more formal and remove any discount language.&quot; Agent updates style without discarding structure.</li>
                <li><span className="pattern-body--bold">Documentation:</span> User narrows audience: &quot;Assume an internal engineering audience, not customers.&quot; Agent revises outline accordingly.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Research & Analysis</h3>
              <p className="pattern-card__intro">Market research, data analysis, diagnostics</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Report compilation:</span> User introduces constraints: &quot;Exclude sources older than 12 months; focus on North America.&quot; Agent filters findings and resumes.</li>
                <li><span className="pattern-body--bold">Log analysis:</span> User specifies a different time range. Agent adapts queries and explains new scope.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Automation & Orchestration</h3>
              <p className="pattern-card__intro">DevOps, CRM operations, infrastructure</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Infrastructure scaling:</span> User interrupts: &quot;Limit changes to staging only.&quot; Agent halts production-related steps, updates plan.</li>
                <li><span className="pattern-body--bold">CRM bulk updates:</span> User adds filter mid-run. Agent stops updates, recalculates target set, requests confirmation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error Correction & Ideation</h3>
              <p className="pattern-card__intro">Corrections, brainstorming, constraint reinforcement</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Hallucination correction:</span> User spots a factual error and replies immediately with correct information. Agent updates context and regenerates.</li>
                <li><span className="pattern-body--bold">Brainstorming:</span> User steers with &quot;Focus on sustainability&quot; or &quot;Avoid ideas needing legal approval.&quot; Agent adjusts selection criteria.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              Language for acknowledgments, explanations, and conflict handling should be clear, neutral, and collaborative.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good acknowledgments</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Understood. Updating the plan to only target EMEA and remove discount offers.&quot;</li>
                  <li>&quot;Pausing current actions and revising based on your new constraints.&quot;</li>
                  <li>&quot;Changes applied: 1) Channel set to SMS, 2) Region limited to EMEA, 3) Discounts removed.&quot;</li>
                  <li>&quot;Got it. Skipping step 3 and moving to the next phase.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak acknowledgments</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;OK&quot; (too terse, doesn&apos;t confirm what was understood)</li>
                  <li>&quot;I&apos;ll try to incorporate that&quot; (vague, doesn&apos;t commit)</li>
                  <li>&quot;You changed your mind?&quot; (implies blame)</li>
                  <li>&quot;Starting over with new instructions...&quot; (discards work unnecessarily)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Restate Key Elements</h3>
                <ul className="pattern-card__list">
                  <li>Echo back the new direction to reinforce understanding</li>
                  <li>Use specifics, not generic confirmations</li>
                  <li>Avoid language that blames or implies user error</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain Changes Succinctly</h3>
                <ul className="pattern-card__list">
                  <li>Summarize changes in numbered or bulleted form</li>
                  <li>Provide optional detail affordances (&quot;View plan diff&quot;)</li>
                  <li>Don&apos;t force verbose explanations into the main flow</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Handling Conflicts
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Clearly state what is infeasible and why</li>
                  <li>Offer one or more alternative paths</li>
                  <li>Maintain a calm, professional tone</li>
                  <li>Avoid ambiguous phrases like &quot;might not work&quot;</li>
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
                Different flavors of steerability depending on the scope and nature of the change.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Soft Steer (Micro-adjustments)</h3>
              <p className="pattern-card__intro">
                Small changes that don&apos;t fundamentally alter the goal (tone, detail level, format).
              </p>
              <ul className="pattern-card__list">
                <li>Update generation parameters and prompts in-place</li>
                <li>No need for full plan re-approval</li>
                <li>A short acknowledgment in the chat is sufficient</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Hard Redirect (Goal Change)</h3>
              <p className="pattern-card__intro">
                A new instruction that effectively defines a new goal entirely.
              </p>
              <ul className="pattern-card__list">
                <li>Offer to start a new run or thread</li>
                <li>Preserve the previous one for reference</li>
                <li>Clear boundary message: &quot;This is a new task; the previous plan will remain available.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scoped Adjustment (Partial Edit)</h3>
              <p className="pattern-card__intro">
                Changes affecting only parts of the plan (skip a step, change subset).
              </p>
              <ul className="pattern-card__list">
                <li>Present affected steps, allow selective edits</li>
                <li>Recompute downstream dependencies</li>
                <li>Visual diff or strike-through for removed steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explicit vs. Implicit Interruption</h3>
              <p className="pattern-card__intro">
                Two paths that should converge on the same internal mechanisms.
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Explicit:</span> Buttons and commands (Pause, Stop, Update filters)</li>
                <li><span className="pattern-body--bold">Implicit:</span> Free-form messages interpreted as steering</li>
                <li>Both should produce consistent safety and plan adaptation behavior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases & Pitfalls */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & pitfalls</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate and design for these potential issues.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Over-interruption Thrashing</h3>
              <p className="pattern-card__intro">
                Users change direction repeatedly, causing excessive re-planning.
              </p>
              <ul className="pattern-card__list">
                <li>Summarize multiple changes together</li>
                <li>Suggest stabilizing constraints</li>
                <li>Recommend a brief alignment step before continuing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Ambiguous Steering</h3>
              <p className="pattern-card__intro">
                Commands like &quot;fix this&quot; or &quot;make it better&quot; are unclear.
              </p>
              <ul className="pattern-card__list">
                <li>Request focused clarification</li>
                <li>Don&apos;t make high-risk guesses</li>
                <li>Offer specific options to choose from</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial Constraint Application</h3>
              <p className="pattern-card__intro">
                Constraints apply only to later steps, leaving earlier artifacts inconsistent.
              </p>
              <ul className="pattern-card__list">
                <li>Warn when earlier outputs are now outdated</li>
                <li>Offer regeneration options</li>
                <li>Highlight affected sections visually</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Silent Tool Failures</h3>
              <p className="pattern-card__intro">
                Inability to cancel long-running external calls undermines expectations.
              </p>
              <ul className="pattern-card__list">
                <li>State what can be halted immediately</li>
                <li>Explain what will complete but be discarded</li>
                <li>Provide status on pending external operations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Compliance Regressions</h3>
              <p className="pattern-card__intro">
                Careless plan updates might drop important filters or compliance checks.
              </p>
              <ul className="pattern-card__list">
                <li>Mark certain safeguards as non-removable</li>
                <li>Explain when changes conflict with policy</li>
                <li>Require elevated approval for security-sensitive overrides</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Instrument the pattern to understand whether it improves control and trust.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage Metrics</h3>
              <ul className="pattern-card__list">
                <li>Frequency and timing of interruptions per run</li>
                <li>Distribution of interruption types (clarifications, corrections, pivots, stops)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Outcome Metrics</h3>
              <ul className="pattern-card__list">
                <li>Task completion rate before vs. after introducing steerability</li>
                <li>Reduction in &quot;start over&quot; events and repeated runs</li>
                <li>Error or incident rates in external systems</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Experience Metrics</h3>
              <ul className="pattern-card__list">
                <li>User-reported trust and perceived control (via in-product surveys)</li>
                <li>Qualitative feedback on whether mid-stream changes &quot;stick&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Metrics</h3>
              <ul className="pattern-card__list">
                <li>Success rate of cancellation and rollback operations</li>
                <li>Latency between interruption and agent acknowledgment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-sm">
            <ul className="pattern-card__list">
              <li>Ensure all key controls (Pause, Stop, Adjust plan) are <span className="pattern-body--bold">keyboard-accessible</span> and properly labeled for assistive technologies</li>
              <li>Use <span className="pattern-body--bold">ARIA live regions</span> to announce major state changes (&quot;Run paused&quot;, &quot;Plan updated&quot;, &quot;Execution resumed&quot;)</li>
              <li>Avoid overly dynamic or flashing indicators during re-planning; favor <span className="pattern-body--bold">stable, minimal animations</span></li>
              <li>Provide <span className="pattern-body--bold">clear textual summaries</span> instead of relying solely on color or icon changes</li>
            </ul>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these behaviors that undermine trust and safety.
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
                  <h3 className="antipattern-title">Ignoring or Minimizing Interruptions</h3>
                  <p className="antipattern-subtitle">Continuing execution for several seconds without acknowledgment.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When the agent continues high-risk actions after a user has tried to stop or redirect, trust is quickly eroded. Users feel powerless and anxious.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Acknowledge interruptions immediately and pause non-essential actions within seconds.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Discarding Useful Work</h3>
                  <p className="antipattern-subtitle">Completely resetting the task on every steering input.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When users see &quot;Starting over...&quot; every time they make a small adjustment, they learn to avoid steering entirely, reducing the value of the agentic experience.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Preserve reusable work and explain what was kept vs. what changed in the new plan.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Verbose Status Updates</h3>
                  <p className="antipattern-subtitle">Long, chatty explanations that obscure key changes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When every interruption results in paragraphs of explanation, users stop reading and miss important information about what actually changed.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep acknowledgments brief. Offer &quot;View details&quot; for users who want more information.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Using Interruptions to Upsell</h3>
                  <p className="antipattern-subtitle">Injecting promotional content when users try to regain control.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Moments when users are trying to correct or redirect the agent are high-stress. Inserting promotional or irrelevant content at these moments damages trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep interruption handling focused entirely on resolving the user&apos;s immediate concern.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Allowing Safety Bypasses</h3>
                  <p className="antipattern-subtitle">Treating user steering as permission to disable guardrails.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Steerability is about redirecting goals, not circumventing safety rules. Allowing users to accidentally or intentionally bypass critical guardrails creates serious risk.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain safety checks regardless of steering. Explain when requested changes conflict with policy.</span>
              </div>
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
              <p className="pattern-checklist-category__title">Input & Controls</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Users can send new messages and access control buttons while the agent is mid-run</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Acknowledgment</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The agent promptly acknowledges interruptions and restates the updated intent or constraints</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Plan Management</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Plans are versioned so that changes are visible and reversible where possible</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">High-Stakes Tasks</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>High-stakes tasks require confirmation before executing under a revised plan</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Safety & Policy</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Safety and policy checks remain enforced even after redirections</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Logging</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Interruptions are fully logged with their impact on the plan and external systems</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The experience is accessible via keyboard and screen readers, with clear status announcements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
