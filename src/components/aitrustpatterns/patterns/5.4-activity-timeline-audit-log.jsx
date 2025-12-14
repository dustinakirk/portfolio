import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import ActivityTimelineDemo from '../demos/ActivityTimelineDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const ACTIVITY_TIMELINE_AUDIT_LOG_SEO = {
  title: "Activity Timeline & Audit Log - AI Trust Pattern",
  description: "Provide a transparent, structured history of what agents, tools, and humans did so teams can verify, debug, and govern AI-driven work.",
  keywords: ["audit log", "activity timeline", "AI transparency", "agent history", "AI compliance", "event log", "agentic UX", "AI governance"],
  canonicalPath: "/agentic_ai_patterns/activity-timeline-audit-log"
};


export default function ActivityTimelineAuditLogPattern() {
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
            <span className="pattern-header__index">5.4</span>
            <div>
              <h1 className="pattern-header__title">Activity Timeline & Audit Log</h1>
              <p className="pattern-header__subtitle">
                Provide a transparent, structured history of what agents, tools, and humans did so teams can verify, debug, and govern AI-driven work.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.4" patternTitle="Activity Timeline & Audit Log" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Activity Timelines and Audit Logs present a chronological record of everything an AI agent (and its tools or human collaborators) did in the course of completing work.
            </p>
            <p className="pattern-body">
              They typically appear alongside an agent run, a task, or a conversation, and provide a readable &quot;flight recorder&quot; of the interaction. In agentic systems, this pattern is essential for trust.
            </p>
            <p className="pattern-body">
              It enables teams to:
            </p>
            <ul className="pattern-list">
              <li>Confirm that agents stayed within the intended scope and permissions.</li>
              <li>Reconstruct how a decision or artifact was produced.</li>
              <li>Investigate incidents, regressions, or unexpected side effects.</li>
              <li>Demonstrate compliance and governance to internal and external stakeholders.</li>
            </ul>
            <p className="pattern-body">
              The core idea is to log <span className="pattern-body--bold">who/what acted</span>, <span className="pattern-body--bold">when</span>, <span className="pattern-body--bold">on which resource</span>, <span className="pattern-body--bold">using which tool or data</span>, and <span className="pattern-body--bold">with what outcome</span>&mdash;and to present this in a way that is legible to non-technical stakeholders while still being precise enough for engineering, security, and legal teams.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/5.4 activity timeline.png"
              alt="Activity Timeline & Audit Log pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows an activity timeline that provides a complete record of an AI agent&apos;s actions. Each entry captures what happened, when, which tools were used, and the outcome—creating an audit trail that supports debugging, compliance, and user trust.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Activity Timeline interactive demo">
            <ActivityTimelineDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic AI systems can feel opaque and untrustworthy without a clear record of what actually happened.
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Black-box behavior</span> &ndash; Agents perform multi-step operations across services, but only a final answer is visible. Stakeholders cannot see which tools or data sources were used, or why a particular decision was made.
              </li>
              <li>
                <span className="pattern-body--bold">Difficult debugging and incident response</span> &ndash; When results look wrong or a system behaves unexpectedly, teams lack the timelines needed to reproduce, triage, and fix the issue.
              </li>
              <li>
                <span className="pattern-body--bold">Compliance and governance gaps</span> &ndash; Highly regulated or audited environments require proof of what actions were taken, by whom, and under what authorization. Undocumented agent activity creates risk and slows approvals.
              </li>
            </ul>
            <p className="pattern-body">
              An Activity Timeline &amp; Audit Log addresses these gaps by providing a durable, inspectable record of system behavior at the level of a run, a user, or a resource.
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
                  <span className="pattern-body--bold">Multi-step agent workflows</span> that orchestrate planning, tool calls, delegations, and revisions (e.g., investigations, forecasting, automation runs).
                </li>
                <li>
                  <span className="pattern-body--bold">High-impact or high-risk operations</span> such as access changes, financial transactions, customer communications, or configuration changes.
                </li>
                <li>
                  <span className="pattern-body--bold">Shared, multi-user environments</span> where several roles (operators, managers, security, compliance, customer support) may review the same AI-initiated activity.
                </li>
                <li>
                  <span className="pattern-body--bold">Asynchronous or background work</span> where agents continue acting after the initiating user leaves the screen.
                </li>
                <li>
                  <span className="pattern-body--bold">Products with governance or audit requirements</span>, including security tools, observability platforms, marketing automation, and enterprise productivity suites.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The experience is a <span className="pattern-body--bold">single-turn, low-risk chat</span> that does not trigger side effects (e.g., pure Q&amp;A with no data persistence).</li>
                <li>The system already provides <span className="pattern-body--bold">simple, localized histories</span> that fully capture the behavior (e.g., inline &quot;last updated by X at Y&quot; labels for non-critical objects).</li>
                <li>The underlying operations are <span className="pattern-body--bold">trivial, reversible, and observable directly</span> in a local UI (e.g., temporary visual tweaks in a design tool with full undo/redo).</li>
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
                The Activity Timeline &amp; Audit Log is generally presented as a dedicated surface attached to a run, task, resource, or conversation. It may be the primary view for high-risk systems, or a secondary panel in lower-risk applications.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Navigation
              </h3>
              <p className="pattern-card__intro">
                A &quot;Runs,&quot; &quot;History,&quot; &quot;Activity,&quot; or &quot;Audit Log&quot; item in product navigation listing all recent agent activity.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task or Run Details</h3>
              <p className="pattern-card__intro">
                A tab or panel labeled &quot;Timeline,&quot; &quot;Execution,&quot; or &quot;Activity&quot; inside a run/task detail view.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Links</h3>
              <p className="pattern-card__intro">
                Inline &quot;View activity&quot; / &quot;View log&quot; links from notifications, error banners, or resource records.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System Alerts & Incidents</h3>
              <p className="pattern-card__intro">
                Links from alert details, incident dashboards, or security events that jump directly into the relevant segment of the log.
              </p>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Event</h3>
            <p className="pattern-card__intro">
              Each event represents a discrete action taken by an actor (agent, tool, system, or human) at a specific point in time.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>Actor + verb + object, phrased in domain language</li>
                  <li>Example: &quot;Metrics Scout queried checkout error metrics from New Relic APM.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>Short explanation of what happened and why, including key parameters and outcomes</li>
                  <li>Example: &quot;Returned 5 time series for &apos;/api/checkout&apos; between 09:00&ndash;10:00 UTC. Detected 3 spikes above baseline.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Expand/collapse for details (raw tool input/output, prompts, parameters)</li>
                  <li>Links to related entities (data source, dashboard, ticket, commit, document)</li>
                  <li>Actions such as &quot;Open in source system,&quot; &quot;Export,&quot; &quot;Copy event link,&quot; or &quot;Flag for review&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Timestamp (with timezone and relative time)</li>
                  <li>Actor type (Agent, Human, System) and identity</li>
                  <li>Tool or integration used</li>
                  <li>Status (Pending, In Progress, Succeeded, Failed, Blocked, Skipped)</li>
                  <li>Scope (environment, tenant, project, dataset)</li>
                  <li>Cost and performance (tokens, latency, rate limit details)</li>
                  <li>Correlation IDs or trace/spans for engineering tools</li>
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
                The timeline evolves through distinct phases as an agent run progresses.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Before the Run</h3>
              <ul className="pattern-card__list">
                <li>The timeline region is visible but empty or populated with pre-run events (e.g., &quot;Task created,&quot; &quot;Agent assigned,&quot; &quot;Constraints configured&quot;).</li>
                <li>The UI hints that events will stream in as work progresses.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. During the Run (Real-Time)</h3>
              <ul className="pattern-card__list">
                <li>New events are appended in chronological order.</li>
                <li>Events update status as they progress (Pending &rarr; Running &rarr; Completed or Failed).</li>
                <li>Groups or clusters may represent phases or steps.</li>
                <li>A small live indicator (&quot;Live&quot; pill, subtle pulse) communicates real-time updates.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Post-Completion</h3>
              <ul className="pattern-card__list">
                <li>The timeline becomes a stable, read-only record.</li>
                <li>Filters, search, and grouping controls help users navigate between summaries and detailed traces.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Filtering & Search</h3>
              <ul className="pattern-card__list">
                <li>Filters support: actor, tool/integration, data source, status, severity, resource type, or tag.</li>
                <li>Search spans event labels, descriptions, tool inputs/outputs, and related identifiers.</li>
                <li>Grouping options: &quot;by step,&quot; &quot;by agent,&quot; &quot;by resource,&quot; or &quot;by environment.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Details & Expansion</h3>
              <ul className="pattern-card__list">
                <li>Full prompts and responses (with redaction where required).</li>
                <li>Tool call parameters and truncated outputs.</li>
                <li>References to data used (files, tables, dashboards, tickets).</li>
                <li>Guardrail interventions or policy checks.</li>
                <li>Links to underlying source systems for deeper investigation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Annotations & Human Input</h3>
              <ul className="pattern-card__list">
                <li>Annotations can be added for investigations (&quot;Confirmed false positive,&quot; &quot;Access change approved by Security&quot;).</li>
                <li>Tagging events with incident ID, Jira ticket, or case number connects logs to broader workflows.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Persistence, Export & Retention</h3>
              <ul className="pattern-card__list">
                <li>Events are immutable by default; they are never edited or deleted, only appended or annotated.</li>
                <li>Export options (CSV, JSON, PDF) support security reviews, compliance audits, and postmortems.</li>
                <li>Retention and access policies are configurable per tenant or environment, aligned with legal and security requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction & States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & states</p>
              <p className="pattern-body pattern-body--narrow">
                The timeline supports different viewing modes and handles various data states gracefully.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Live View</h3>
              <ul className="pattern-card__list">
                <li>Optimized for monitoring currently running tasks.</li>
                <li>Emphasizes latest events, streaming behavior, and quick status scanning.</li>
                <li>Often includes a sticky summary header (e.g., &quot;Step 3 of 5, 73% complete, estimated 2 min remaining&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Historical View</h3>
              <ul className="pattern-card__list">
                <li>Optimized for investigation and review.</li>
                <li>Emphasizes navigation, filtering, and linkability (deep links to specific runs, steps, or events).</li>
                <li>May collapse steps or phases by default for readability, with expand controls for deeper inspection.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Empty State</h3>
              <p className="pattern-card__intro">
                Communicates what will appear here once an agent runs, with concise guidance or examples. Example: &quot;This timeline will capture each tool the agent calls, who requested it, and what changed.&quot;
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Loading State</h3>
              <p className="pattern-card__intro">
                Indicates that recent events are being fetched; avoids implying missing data.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial Data State</h3>
              <p className="pattern-card__intro">
                Handles gaps due to retention limits, integration failures, or permissions. Explicit labels help avoid assumptions (e.g., &quot;Events before Aug 1 are unavailable due to retention policy.&quot;).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error State</h3>
              <p className="pattern-card__intro">
                When event retrieval fails, a limited message is shown and suggests safe next steps (e.g., &quot;Activity is temporarily unavailable. Try again later or export logs from the security console.&quot;).
              </p>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & messaging guidelines</p>
            <p className="pattern-body">
              Clear, consistent language helps users quickly parse the timeline and understand what happened.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good event labels</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Access Manager Agent updated role &apos;Billing Admin&apos; for user alex@example.com.&quot;</li>
                  <li>&quot;Relevance Tuner Agent changed filter &apos;region&apos; in segment &apos;EMEA trial users&apos;.&quot;</li>
                  <li>&quot;Contracts Agent drafted summary for Legal Reviewer (requested by mlee).&quot;</li>
                  <li>&quot;Triggered by alert: Checkout error rate &gt; 5% for 5 minutes.&quot;</li>
                  <li>&quot;Skipped deploy step because tests failed in stage &apos;staging&apos;.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak event labels</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Action completed&quot; (no context)</li>
                  <li>&quot;Updated record&quot; (which record?)</li>
                  <li>&quot;Agent did something&quot; (vague)</li>
                  <li>&quot;Error occurred&quot; (no details)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Actor &rarr; Action &rarr; Object</h3>
                <ul className="pattern-card__list">
                  <li>Use a consistent pattern for all event labels</li>
                  <li>Keep labels short and scannable; push secondary details into descriptions</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Make the Actor Explicit</h3>
                <ul className="pattern-card__list">
                  <li>Especially when an agent acts on behalf of a human</li>
                  <li>Distinguish clearly between attempts and results</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Neutral, Factual Phrasing</h3>
                <ul className="pattern-card__list">
                  <li>Avoid speculation</li>
                  <li>Avoid anthropomorphism that could blur accountability</li>
                  <li>Agent names should be descriptive of their function</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details vary by stack, but several recurring patterns support robust activity logging.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Instrumentation Strategy</h3>
              <ul className="pattern-card__list">
                <li>Treat the timeline as a <span className="pattern-body--bold">first-class product surface</span>, not an afterthought attached to raw application logs.</li>
                <li>Log events at a <span className="pattern-body--bold">semantic level</span> aligned with the domain while retaining references to lower-level technical logs.</li>
                <li>Capture both high-level agent operations and tool/integration calls.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Model & Correlation</h3>
              <ul className="pattern-card__list">
                <li>Assign each run a stable identifier and connect all events via <span className="pattern-body--bold">correlation IDs</span> or trace spans.</li>
                <li>Represent actor identity (user, agent, service) explicitly to support filtering and governance.</li>
                <li>Link each event to the request that triggered it and the resources affected.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Privacy, Security & Access Control</h3>
              <ul className="pattern-card__list">
                <li>Enforce <span className="pattern-body--bold">role-based access</span> to logs; some events may be visible only to admins or specific teams.</li>
                <li>Redact or hash sensitive payloads (PII, secrets, access tokens) while retaining debugging context.</li>
                <li>Respect tenant boundaries; no cross-tenant leakage in shared SaaS environments.</li>
                <li>Align retention policies with regulatory and contractual obligations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Scalability</h3>
              <ul className="pattern-card__list">
                <li>Stream events via websockets or server-sent events to avoid polling overhead.</li>
                <li>Use pagination and virtualized lists for long timelines.</li>
                <li>Consider summarizing or collapsing repetitive events (e.g., &quot;50 similar records updated&quot;) with options to expand raw entries.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration with External Systems</h3>
              <ul className="pattern-card__list">
                <li>Provide export and integration hooks (webhooks, SIEM connectors, audit APIs) for organizations that centralize logs.</li>
                <li>Include stable, shareable URLs for specific runs or events to support tickets, runbooks, and incident reviews.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations</p>
              <p className="pattern-body pattern-body--narrow">
                Activity timelines can take different forms depending on the context and use case.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Run Timeline</h3>
              <p className="pattern-card__intro">
                Attached to a specific task or workflow (e.g., &quot;Security investigation #7342&quot;). Best for detailed debugging and storytelling.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Entity Activity Feed</h3>
              <p className="pattern-card__intro">
                Attached to a resource (e.g., &quot;Customer account activity,&quot; &quot;Campaign history&quot;), mixing agent and human actions.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Organization-Wide Audit Log</h3>
              <p className="pattern-card__intro">
                Centralized, cross-product view filtered by actor, environment, or integration; heavily used by security and compliance teams.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Chat-Centric History</h3>
              <p className="pattern-card__intro">
                Embedded within or adjacent to chat, where each agent message expands into the underlying sequence of tool calls and system actions.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases / Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How activity timelines apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Compliance</h3>
              <p className="pattern-card__intro">Security Platform</p>
              <p className="pattern-card__label">Use case</p>
              <ul className="pattern-card__list">
                <li>An &quot;Access Manager Agent&quot; automatically adjusts IAM policies based on detected risks.</li>
                <li>The activity timeline lets security engineers confirm exactly which policies were changed, when, on whose behalf, and with what justification.</li>
                <li>During audits, compliance teams export the log for evidence.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Observability & Incident Management</h3>
              <p className="pattern-card__intro">SRE Platform</p>
              <p className="pattern-card__label">Use case</p>
              <ul className="pattern-card__list">
                <li>An &quot;Incident Investigator&quot; agent triages alerts.</li>
                <li>The timeline shows each step: queries to telemetry backends, correlations to deployments, hypothesis generation, and created tickets.</li>
                <li>SREs review the timeline during post-incident analysis to understand which hypotheses the agent considered.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing & Growth Automation</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <p className="pattern-card__label">Use case</p>
              <ul className="pattern-card__list">
                <li>Agents adjust audience segments, bid strategies, and content variants.</li>
                <li>The audit log records every segment edit and campaign change, including pre- and post-change metrics.</li>
                <li>Marketing operations teams trace performance swings back to specific AI-driven adjustments.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support & CRM</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <p className="pattern-card__label">Use case</p>
              <ul className="pattern-card__list">
                <li>A support agent assistant drafts responses, creates cases, and updates CRM records.</li>
                <li>The timeline shows the assistant&apos;s suggestions, the human agent&apos;s edits, the final message sent to the customer, and any subsequent record changes.</li>
                <li>Managers review the log to understand agent autonomy and policy compliance.</li>
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
                Certain implementations of activity timelines can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Overwhelming Verbosity</h3>
                  <p className="antipattern-subtitle">Logging every low-level action without summarization.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Logging every token-level prompt, internal retry, or system event without summarization can overload users and hide important events.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Summarize repetitive events and provide expand controls for detailed traces when needed.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Incomplete or Misleading Histories</h3>
                  <p className="antipattern-subtitle">Omitting failed attempts, guardrail interventions, or policy denials.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Logs that omit failures, blocked actions, or policy interventions can create a false sense of safety and make debugging impossible.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Include all meaningful events, including failures and policy enforcement actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Editable Audit Trails</h3>
                  <p className="antipattern-subtitle">Allowing events to be edited or removed.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing events themselves to be edited or removed undermines trust and may violate compliance requirements.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make events immutable. Only annotations should be mutable.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Leaking Sensitive Data</h3>
                  <p className="antipattern-subtitle">Displaying raw prompts or outputs without redaction.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Displaying raw prompts, inputs, or outputs without redaction can expose secrets or PII to unintended audiences.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Apply appropriate redaction while retaining enough context for debugging.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous Attribution</h3>
                  <p className="antipattern-subtitle">Logs that don&apos;t clearly state who performed an action.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Logs that do not clearly state whether a human or an agent performed an action make accountability unclear.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always include explicit actor attribution with clear human vs. agent distinction.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess whether an Activity Timeline &amp; Audit Log is effective, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage & Engagement</h3>
              <ul className="pattern-card__list">
                <li>Percentage of runs where the timeline is opened</li>
                <li>Time spent in the timeline following incidents or alerts</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Mean time to detect and resolve incidents involving agents (MTTD/MTTR)</li>
                <li>Frequency with which logs are referenced in postmortems, reviews, or audits</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Qualitative feedback from security, compliance, and operations teams on perceived transparency</li>
                <li>Reduction in &quot;what did the agent do?&quot; support tickets and escalations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance</h3>
              <ul className="pattern-card__list">
                <li>Number of policy violations or misconfigurations detected early via log inspection</li>
                <li>Adoption of exports/integrations into SIEM and audit tooling</li>
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
              <p className="pattern-checklist-category__title">Event Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is every meaningful agent and tool action represented as a timestamped event with clear actor attribution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do events use consistent, domain-appropriate Actor &rarr; Action &rarr; Object labels?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Navigation & Filtering</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the timeline support filtering and search by agent, tool, status, and key metadata?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users quickly navigate between summary and detailed views?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Integrity & Compliance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the log immutable, with annotations and tags available for investigation and review?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is sensitive data in events appropriately redacted, and is access governed by roles and permissions?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Integration & Export</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do export and integration paths exist for security, compliance, and analytics workflows?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there stable, shareable URLs for specific runs or events?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Value</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can real users in high-risk roles answer: &quot;What did the agent do?&quot;</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can real users answer: &quot;Why was that action taken?&quot;</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can real users answer: &quot;What changed as a result?&quot;</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
