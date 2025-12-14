import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import AssignmentBoardDemo from '../demos/AssignmentBoardDemo';

// SEO metadata for this pattern page
export const ASSIGNMENT_BOARD_WORK_QUEUES_SEO = {
  title: "Assignment Board & Work Queues - AI Trust Pattern",
  description: "Visual task board for monitoring and directing work across human and AI agents, providing transparent status, accountability, and safe intervention in multi-agent workflows.",
  keywords: ["AI task board", "work queues", "multi-agent AI", "AI oversight", "task management", "agent coordination", "AI trust", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/assignment-board-work-queues"
};

export default function AssignmentBoardWorkQueuesPattern() {
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
            <span className="pattern-header__index">7.5</span>
            <div>
              <h1 className="pattern-header__title">Assignment Board & Work Queues</h1>
              <p className="pattern-header__subtitle">
                Visual task board for monitoring and directing work across human and AI agents, providing transparent status, accountability, and safe intervention in multi-agent workflows.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.5" patternTitle="Assignment Board & Work Queues" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              In agentic systems, tasks are often generated, delegated, and executed by multiple AI agents operating semi-autonomously, sometimes over long periods and across different tools or environments.
            </p>
            <p className="pattern-body">
              Without a clear overview, work can feel opaque, brittle, or unsafe. An assignment board with structured work queues gives a shared frame of reference for what agents are doing, what is blocked, and where human oversight is needed.
            </p>
            <p className="pattern-body">
              This pattern presents work items as cards flowing through stages (for example, <span className="pattern-body--bold">Planned → In Progress → Blocked → Done</span>), with explicit ownership, status, risk, and timing. It bridges conversational interfaces and operational reality: users request outcomes in natural language, agents translate those into tasks, and the board shows how those tasks are progressing.
            </p>
            <p className="pattern-body">
              In many B2B and B2C applications, the assignment board becomes the central &quot;control room&quot; for multi-agent operations, enabling supervisors, operators, and domain experts to intervene: reassign tasks, adjust priorities, review logs, or cancel risky actions. By making agent behavior visible and controllable, the pattern supports trust, auditability, and coordination between humans and agents.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/7.5 assignment board.png"
              alt="Assignment Board & Work Queues pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo presents a task board showing AI work across multiple agents in different states. Notice the blocked task at the top, which surfaces a human-in-the-loop blocker requiring clarification before the agent can proceed. Below, active tasks show live progress bars and can be paused or resumed using the controls. Click the chat icon on any task to jump to its conversation context. The board makes it easy to see what agents are working on, what's stuck, how long tasks have been running, and their associated costs—providing a single control room for monitoring and managing autonomous AI work.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Assignment Board interactive demo">
            <AssignmentBoardDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic systems frequently run background workflows that are difficult to see, understand, or control:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Implicit task creation</span> – Tasks are created implicitly from conversations or API calls, with no central view of what exists, who owns it, or how far it has progressed.
              </li>
              <li>
                <span className="pattern-body--bold">Late failure discovery</span> – Failures and edge cases are discovered only when something breaks downstream (for example, missing data, wrong configuration, or policy violations), rather than being surfaced early and clearly.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear responsibility</span> – Multiple agents act at once without a visible model of responsibility, which makes it hard to debug behavior, enforce guardrails, or provide human approvals.
              </li>
              <li>
                <span className="pattern-body--bold">Fragmented coordination</span> – Stakeholders across teams lack a shared artifact for coordination; each role sees a different fragment (logs, notifications, metrics) but not a holistic, actionable overview.
              </li>
            </ul>
            <p className="pattern-body">
              Without an assignment board and work queues, multi-agent workflows tend to feel like a black box, eroding trust and increasing operational and compliance risk.
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
                  <span className="pattern-body--bold">Multi-step, multi-agent workflows</span> that run for more than a few seconds, span multiple tools, or involve handoffs between specialized agents.
                </li>
                <li>
                  <span className="pattern-body--bold">Tasks need to be triaged, prioritized, or re-routed</span> based on risk, customer impact, or SLAs (for example, operations, support, finance, security, IT, marketing automation).
                </li>
                <li>
                  <span className="pattern-body--bold">Human-in-the-loop approvals or oversight</span> environments (for example, compliance review, infrastructure changes, data access requests).
                </li>
                <li>
                  <span className="pattern-body--bold">Long-running or parallel work</span> that must remain observable, interruptible, and auditable.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Single-turn, low-risk interactions where an agent completes tasks synchronously in response to a prompt (for example, simple content rewrites or one-off analyses).</li>
                <li>Systems with only one or two concurrent tasks where a simple &quot;Recent activity&quot; list or per-run timeline already provides sufficient clarity.</li>
                <li>Experiments or prototypes where agent actions are limited to non-destructive, easily reversible operations and there is no expectation of operational oversight.</li>
                <li>End-user experiences where exposing underlying tasks would only create confusion, and a higher-level progress metaphor (for example, a stepper or &quot;run status&quot; widget) is adequate.</li>
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
                The assignment board is typically a dedicated, high-signal surface in the product—often accessed as a top-level &quot;Work&quot;, &quot;Tasks&quot;, or &quot;Runs&quot; view, or embedded as a panel next to conversational agents.
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
                A &quot;Workboard&quot;, &quot;Tasks&quot;, or &quot;Agent Jobs&quot; item in the main navigation.
              </p>
              <ul className="pattern-card__list">
                <li>Full-page board for a workspace, team, or environment</li>
                <li>Top-level visibility for operational oversight</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline from Agent Experiences</h3>
              <p className="pattern-card__intro">
                &quot;View tasks&quot; or &quot;Open in board&quot; links from chat transcripts and run summaries.
              </p>
              <ul className="pattern-card__list">
                <li>Deep-links directly to filtered views (for example, &quot;Tasks from this conversation&quot;)</li>
                <li>&quot;Tasks owned by this agent&quot; filtered views</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry Points</h3>
              <p className="pattern-card__intro">
                Banners or toasts indicating blocked, long-running, or approval-required tasks.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Review in board&quot; action opens the relevant slice of the board</li>
                <li>System messages with actionable links</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Programmatic Links</h3>
              <p className="pattern-card__intro">
                Links from external tools that open the board with aligned filters.
              </p>
              <ul className="pattern-card__list">
                <li>Incident management, CRM, ticketing, CI/CD integrations</li>
                <li>Example: &quot;Tasks linked to Incident-1234&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Task Card</h3>
            <p className="pattern-card__intro">
              The core object in this pattern is the task card representing a unit of work owned by an AI agent, human operator, or both.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Title</p>
                <ul className="pattern-card__list">
                  <li>Clear, outcome-oriented summary of the task</li>
                  <li>&quot;Generate Q4 billing adjustments&quot;</li>
                  <li>&quot;Investigate anomaly in EU tax calculations&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Ownership Metadata</p>
                <ul className="pattern-card__list">
                  <li>Primary AI agent (role-aligned label)</li>
                  <li>Optional backup agents</li>
                  <li>Human owner or watcher; associated team or queue</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Status & Stage</p>
                <ul className="pattern-card__list">
                  <li>Planned, In Progress, Waiting on Human, Blocked</li>
                  <li>Paused, Failed, Done, Canceled</li>
                  <li>Optional sub-status or reason</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Risk & Priority</p>
                <ul className="pattern-card__list">
                  <li>Priority level (P0–P3 or similar)</li>
                  <li>Risk tags: &quot;Financial impact&quot;, &quot;Security-sensitive&quot;</li>
                  <li>SLA or due time</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Timing & Progress</p>
                <ul className="pattern-card__list">
                  <li>Start time, last update time, ETA or time remaining</li>
                  <li>Total time in state</li>
                  <li>Progress indicators (steps completed out of total)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls / Inline Actions</p>
                <ul className="pattern-card__list">
                  <li>Reassign, change priority, pause, resume</li>
                  <li>Approve, reject, retry, cancel</li>
                  <li>Open details, add comment, add watcher</li>
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
                A typical lifecycle for tasks on an assignment board spans from creation through completion or cancellation.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Task Creation & Ingestion</h3>
              <ul className="pattern-card__list">
                <li>Tasks created by agents (from chat prompts, workflows, API calls) or by humans</li>
                <li>New tasks appear in default column: <span className="pattern-body--bold">Planned</span>, <span className="pattern-body--bold">Unassigned</span>, or specific intake queue</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Assignment & Routing</h3>
              <ul className="pattern-card__list">
                <li>Rules, agent capabilities, or human triage assign tasks to agents, queues, or teams</li>
                <li>Auto-assign based on load, specialization, or risk</li>
                <li>Humans can override via drag-and-drop or bulk actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Agent Execution & Live Updates</h3>
              <ul className="pattern-card__list">
                <li>Card moves to <span className="pattern-body--bold">In Progress</span> when agent starts working</li>
                <li>Updates show key milestones (&quot;Model analysis completed&quot;, &quot;API calls queued&quot;)</li>
                <li>Board refreshes in near real time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Human-in-the-Loop Checkpoints</h3>
              <ul className="pattern-card__list">
                <li>Tasks requiring review transition to <span className="pattern-body--bold">Waiting on Human</span></li>
                <li>Reviewers inspect context and logs</li>
                <li>Approve, request changes, or reject</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Blocking, Escalations & Errors</h3>
              <ul className="pattern-card__list">
                <li>Hard issues move card to <span className="pattern-body--bold">Blocked</span> or <span className="pattern-body--bold">Failed</span></li>
                <li>Visible, actionable reasons displayed</li>
                <li>Escalation paths: reassign to higher-skill agent, involve another team</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Completion & Verification</h3>
              <ul className="pattern-card__list">
                <li>On success, tasks move to <span className="pattern-body--bold">Done</span></li>
                <li>Link to final artifact (report, change, generated content)</li>
                <li>Optional verification step for high-risk actions</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Archival & Analytics</h3>
              <ul className="pattern-card__list">
                <li>Completed tasks age out into history views, reports, or archives</li>
                <li>Logs and decisions preserved for audit</li>
                <li>Aggregated data feeds operational metrics: throughput, SLA adherence, failure patterns, agent performance</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Cross-Run Relationships</h3>
              <ul className="pattern-card__list">
                <li>Some tasks spawn subtasks or downstream jobs</li>
                <li>Board supports hierarchy or linking (parent–child relationships)</li>
                <li>&quot;Part of Run-101&quot; references for filtering and collapsing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for building effective assignment boards that support trust, control, and observability.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Board Layout & Visual Structure</h3>
              <ul className="pattern-card__list">
                <li>Use a <span className="pattern-body--bold">Kanban-style column layout</span> for stages, supplemented by a list view for dense scenarios</li>
                <li>Each column corresponds to a meaningful state with clear entry/exit conditions</li>
                <li>Keep columns manageable; group rare states into &quot;More&quot; or &quot;Other&quot;</li>
                <li>Reserve top of board for global controls: filters, search, auto-refresh toggle, key metrics</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Statuses, Stages & SLAs</h3>
              <ul className="pattern-card__list">
                <li>Align status labels with domain language (&quot;Queued&quot;, &quot;Under review&quot;, &quot;Ready to deploy&quot;)</li>
                <li>Distinguish agent-execution states, human states, and terminal states</li>
                <li>Represent SLAs visually (badges, countdown timers) without relying solely on color</li>
                <li>Avoid fake precision for ETAs; use ranges or qualitative labels</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Assignment, Reassignment & Controls</h3>
              <ul className="pattern-card__list">
                <li>Support <span className="pattern-body--bold">drag-and-drop</span> for intuitive reassignment with keyboard-accessible alternatives</li>
                <li>Provide <span className="pattern-body--bold">bulk actions</span> for high-volume operations</li>
                <li>Use confirmation patterns for destructive or high-risk actions</li>
                <li>Log every assignment change with timestamp, actor, and rationale</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Observability, Logs & Detail Views</h3>
              <ul className="pattern-card__list">
                <li>Clicking a card opens a <span className="pattern-body--bold">detail panel or page</span> with full context</li>
                <li>Step-by-step activity log showing which agent took which action and when</li>
                <li>Inputs/outputs samples, errors, warnings, retry history</li>
                <li>Watcher/subscription functionality for notifications</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Filters, Search & Segmentation</h3>
              <ul className="pattern-card__list">
                <li>Filter by agent/agent type, human owner, team, business unit</li>
                <li>Filter by status, risk level, priority, SLA window</li>
                <li>Filter by origin (conversation, API client, integration, scheduled job)</li>
                <li>Preserve filter state in URL for shareable views</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Permissions & Governance</h3>
              <ul className="pattern-card__list">
                <li>Enforce <span className="pattern-body--bold">role-based access control (RBAC)</span></li>
                <li>Some roles observe only; others manage specific domains or risk tiers</li>
                <li>Protect sensitive fields with masking, redaction, or scope-limited views</li>
                <li>Every task exposes &quot;who authorized what&quot; trail for audits</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Performance, Real-Time Updates & Scaling</h3>
            <ul className="pattern-card__list">
              <li>Use <span className="pattern-body--bold">optimistic UI</span> for quick actions, updating immediately while handling errors gracefully</li>
              <li>Avoid overloading UI with constant micro-updates; coalesce updates and prioritize meaningful state changes</li>
              <li>For very high volume, support pagination/lazy loading, aggregated summaries, and auto-archiving of completed tasks</li>
            </ul>
          </div>
        </section>

        {/* Use Cases & Scenarios */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases & scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How assignment boards apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Operations & Back-Office Automation</h3>
              <p className="pattern-card__intro">Billing, Invoicing, Data Reconciliation</p>
              <ul className="pattern-card__list">
                <li>Tasks generated from chat requests and scheduled jobs</li>
                <li>Operations team sees spikes in blocked billing adjustments</li>
                <li>Reassign workloads during outages, track SLA risk across customers</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support & IT Service Management</h3>
              <p className="pattern-card__intro">Incident Resolution</p>
              <ul className="pattern-card__list">
                <li>Support agents and AI co-pilots collaborate on tickets</li>
                <li>Board shows incidents grouped by severity and product area</li>
                <li>AI agents propose actions requiring human approval before production execution</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Compliance Workflows</h3>
              <p className="pattern-card__intro">Access Changes, Policy Updates</p>
              <ul className="pattern-card__list">
                <li>AI agents propose changes that enter &quot;Waiting on Human&quot; state</li>
                <li>Security reviewers batch-approve low-risk items</li>
                <li>Escalate ambiguous ones, maintain complete approval audit trail</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing & Creative Production</h3>
              <p className="pattern-card__intro">Content Generation, Asset Requests</p>
              <ul className="pattern-card__list">
                <li>Content generation agents create drafts and variant testing setups</li>
                <li>Board tracks work across agents (Research, Copy, Visual, Localization)</li>
                <li>Failed or low-quality outputs re-queued with reviewer notes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engineering & DevOps</h3>
              <p className="pattern-card__intro">Code Changes, Rollouts</p>
              <ul className="pattern-card__list">
                <li>Agents file issues, propose code changes, and plan rollouts</li>
                <li>Tasks pass through analysis, proposal, review, and rollout stages</li>
                <li>Cross-environment view: production approval vs. staging auto-apply</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consumer Productivity (Pro Tiers)</h3>
              <p className="pattern-card__intro">Data Imports, Bulk Edits</p>
              <ul className="pattern-card__list">
                <li>Advanced users see &quot;AI tasks&quot; board for background jobs</li>
                <li>Pause, reorder, or cancel larger jobs</li>
                <li>Control impact on important documents or connected systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & copy guidelines</p>
            <p className="pattern-body">
              Effective copy on assignment boards helps users quickly understand task status, ownership, and required actions.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good task titles</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Reconcile invoices for Q4 EU customers&quot;</li>
                  <li>&quot;Generate monthly billing summary for Account-1234&quot;</li>
                  <li>&quot;Investigate anomaly in EU tax calculations&quot;</li>
                  <li>&quot;Draft security incident report for 2024-12-01&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak task titles</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;BillingTask_42781&quot;</li>
                  <li>&quot;Task-1234&quot;</li>
                  <li>&quot;Processing...&quot;</li>
                  <li>&quot;State=HOLD_APPROVAL&quot;</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Outcome-Based Titles</h3>
                <ul className="pattern-card__list">
                  <li>Prefer clear, outcome-based titles over technical labels</li>
                  <li>Include relevant context (customer, time period, scope)</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Actionable Status Labels</h3>
                <ul className="pattern-card__list">
                  <li>Use status labels that reflect real work states</li>
                  <li>&quot;Waiting for approval&quot; instead of &quot;State=HOLD_APPROVAL&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Clear Reason Phrases</h3>
                <ul className="pattern-card__list">
                  <li>Provide short, actionable reasons for blocked or failed tasks</li>
                  <li>&quot;Missing S3 permission: role-billing-readonly&quot;</li>
                  <li>&quot;Policy: Cannot export PII outside region&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusivity</p>
              <p className="pattern-body pattern-body--narrow">
                Assignment boards must be accessible to all users, including those using assistive technologies.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Color Independence</h3>
              <ul className="pattern-card__list">
                <li>Do not rely solely on color to convey status, risk, or priority</li>
                <li>Combine color with text labels, icons, or patterns</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard Navigation</h3>
              <ul className="pattern-card__list">
                <li>Ensure full keyboard navigation: moving between columns and cards</li>
                <li>Activate actions and open details without pointer input</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Implement proper semantics and ARIA attributes</li>
                <li>Announce card positions (&quot;Task 3 of 10 in In Progress&quot;)</li>
                <li>Convey status changes using live regions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Density Modes</h3>
              <ul className="pattern-card__list">
                <li>Provide adjustable density modes (compact vs. comfortable)</li>
                <li>Support different visual needs and preferences</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Time & Locale</h3>
              <ul className="pattern-card__list">
                <li>Consider time zone and locale differences for timestamps</li>
                <li>Display relative times alongside absolute times</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clear Language</h3>
              <ul className="pattern-card__list">
                <li>Avoid jargon-heavy labels where domain-neutral language can work</li>
                <li>Provide contextual help for domain-specific terms</li>
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
                Instrument the assignment board to understand effectiveness and improve both UX and underlying agent workflows.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Task-Level Metrics</h3>
              <ul className="pattern-card__list">
                <li>Time in each state; total time to completion</li>
                <li>Frequency and cause of failures or blocks</li>
                <li>Number and type of human interventions (reassignments, approvals, overrides)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Queue-Level Metrics</h3>
              <ul className="pattern-card__list">
                <li>Volume and aging per queue, agent, and risk tier</li>
                <li>SLA adherence, including near misses and breaches</li>
                <li>Load distribution between agents and human operators</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Behavior Indicators</h3>
              <ul className="pattern-card__list">
                <li>Common filters and views used by different roles</li>
                <li>Tasks regularly canceled or manually corrected (agent misalignment)</li>
                <li>Post-intervention outcomes (whether manual overrides improve success rates)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & common pitfalls</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of assignment boards can unintentionally undermine trust and effectiveness.
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
                  <h3 className="antipattern-title">Overloading with Trivial Tasks</h3>
                  <p className="antipattern-subtitle">Flooding the board with tiny, low-risk tasks.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Displaying every micro-step of a single job creates noise and hides important work. Group subtasks where possible or show only meaningful milestones.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Group subtasks or show only significant milestones to maintain signal-to-noise ratio.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous or Inconsistent States</h3>
                  <p className="antipattern-subtitle">Multiple states that mean similar things without clear definitions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Having &quot;On Hold&quot;, &quot;Pending&quot;, and &quot;Waiting&quot; without clear definitions leads to misinterpretation and ineffective triage.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Define clear, mutually exclusive states with documented entry and exit criteria.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Automated Actions</h3>
                  <p className="antipattern-subtitle">Agents performing impactful work without corresponding board tasks.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing agents to work without board visibility undermines the premise of the pattern and erodes trust in the system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure all significant agent work is represented on the board with appropriate visibility.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unclear Ownership</h3>
                  <p className="antipattern-subtitle">Cards without explicit agent and human owners.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Tasks without clear ownership create confusion when issues arise. Every active task should have a clear escalation path.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Require ownership metadata for all tasks with defined escalation paths.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Auto-Refresh or UI Thrash</h3>
                  <p className="antipattern-subtitle">Highly granular updates that constantly move cards or reorder lists.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Constant UI changes can be disorienting, especially for users trying to focus on specific tasks or make decisions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Aggregate changes, use subtle animations, and batch updates to maintain stability.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Permission Mismatch</h3>
                  <p className="antipattern-subtitle">Roles with inappropriate task modification access.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing roles to modify tasks beyond their remit introduces security risks. Overly restrictive permissions can block necessary interventions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement granular RBAC that balances security with operational flexibility.</span>
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
                This pattern works in concert with other multi-agent orchestration and oversight patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Registry & Capability Profiles</h3>
              <p className="pattern-card__intro">
                Surfaces what each agent can do and which tasks it typically owns, often linked from cards or filters.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Run Overview & Execution Contracts</h3>
              <p className="pattern-card__intro">
                Provides a high-level summary of a single multi-agent run, including scope, constraints, costs, and expected outcomes, with links to tasks on the board.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Approval Gates & Safety Holds</h3>
              <p className="pattern-card__intro">
                Defines structured checkpoints where human review is required before agents proceed, integrating with the board&apos;s &quot;Waiting on Human&quot; states.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Activity Logs & Trace Views</h3>
              <p className="pattern-card__intro">
                Offers deep, chronological views of all actions taken by agents and humans, linked from task detail views for debugging and audits.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notifications & Escalation Rules</h3>
              <p className="pattern-card__intro">
                Manages how stakeholders are informed when tasks are blocked, approaching SLA limits, or require immediate attention, often triggered from board state changes.
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
              <p className="pattern-checklist-category__title">Board Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each column represent a meaningful, distinct workflow state?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the number of columns manageable to avoid scanning fatigue?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Task Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users quickly identify task ownership, status, and priority?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are blocked or failed tasks clearly visible with actionable reasons?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Control & Intervention</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users reassign, pause, or cancel tasks without leaving the board?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are destructive actions protected with appropriate confirmations?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Filtering & Search</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users filter by agent, owner, status, priority, and origin?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is filter state preserved in the URL for shareable views?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Observability & Audit</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users drill down into detailed activity logs for each task?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear &quot;who authorized what&quot; trail for governance?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Performance & Scale</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the board handle high task volumes without performance degradation?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are real-time updates balanced against UI stability?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
