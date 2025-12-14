import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import ToolUsageIndicatorsDemo from '../demos/ToolUsageIndicatorsDemo';

// SEO metadata for this pattern page
export const TOOL_USAGE_INDICATORS_SEO = {
  title: "Tool Usage Indicators - AI Trust Pattern",
  description: "Clear, contextual cues showing which tools an AI agent is using, what state each call is in, and how that activity interacts with data and systems.",
  keywords: ["AI tool usage", "tool indicators", "AI transparency", "AI trust", "agentic UX", "tool calls", "AI visibility", "system integration"],
  canonicalPath: "/agentic_ai_patterns/tool-usage-indicators"
};


export default function ToolUsageIndicatorsPattern() {
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
            <span className="pattern-header__index">5.3</span>
            <div>
              <h1 className="pattern-header__title">Tool Usage Indicators</h1>
              <p className="pattern-header__subtitle">
                Clear, contextual cues showing which tools an AI agent is using, what state each call is in, and how that activity interacts with data and systems.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.3" patternTitle="Tool Usage Indicators" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Tool Usage Indicators make an AI agent&apos;s interaction with external systems, data sources, and automations visible and understandable.
            </p>
            <p className="pattern-body">
              Instead of a generic &quot;thinking…&quot; state, the interface distinguishes between:
            </p>
            <ul className="pattern-list">
              <li>Pure model reasoning (no tools)</li>
              <li>Read-only tool use (search, retrieval, calculations)</li>
              <li>Write or side-effectful tool use (updating records, sending messages, triggering workflows)</li>
            </ul>
            <p className="pattern-body">
              This pattern typically appears directly in or near the chat surface of an AI assistant, in assistant sidebars, or within job/task detail views. It provides short, human-readable labels such as:
            </p>
            <ul className="pattern-list">
              <li>&quot;Searching internal knowledge base…&quot;</li>
              <li>&quot;Running SQL query on analytics warehouse…&quot;</li>
              <li>&quot;Preparing write to CRM (pending approval)…&quot;</li>
              <li>&quot;Creating Jira issue in Engineering project…&quot;</li>
            </ul>
            <p className="pattern-body">
              The core idea is to align the user&apos;s mental model with what the agent is actually doing behind the scenes: which systems are being accessed, whether operations are read-only or write, and what stage each operation is in (queued, running, awaiting approval, failed, completed). For higher-risk actions, indicators are paired with explicit review and approval controls.
            </p>
            <p className="pattern-body">
              Tool Usage Indicators integrate naturally with a Reasoning Glimpse or plan visualization pattern. Reasoning steps such as &quot;Gather context&quot; or &quot;Update records&quot; can be annotated with tool badges and live status, forming a coherent picture of both <span className="pattern-body--bold">why</span> the agent is doing something and <span className="pattern-body--bold">how</span> it is doing it.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/5.3 tool usage.png"
              alt="Tool Usage Indicators pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows how an AI agent can make its tool usage visible to users. As the agent processes a request, it displays which tools are being called, what data they&apos;re accessing, and the results—providing transparency about where information comes from and what actions are being taken.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Tool Usage Indicators interactive demo">
            <ToolUsageIndicatorsDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without visible tool usage, AI agents feel like opaque black boxes with unpredictable side effects:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unclear origin of answers</span> – Users cannot tell whether a response came purely from the model, from up-to-date enterprise data, or from external web sources. This undermines trust and makes it difficult to judge reliability.
              </li>
              <li>
                <span className="pattern-body--bold">Hidden side effects and data changes</span> – When agents can call APIs or modify systems-of-record, invisible writes become dangerous. Users may later discover that tickets were created, emails were sent, or records were updated without any clear indication of when or how.
              </li>
              <li>
                <span className="pattern-body--bold">Ambiguous &quot;thinking&quot; state</span> – A single, generic typing or loading indicator conflates reasoning, tool calls, network delays, and approval waits. Users cannot tell whether the agent is actually working, waiting on a dependency, or stuck.
              </li>
              <li>
                <span className="pattern-body--bold">Weak auditability and incident analysis</span> – In enterprise contexts, teams need to answer questions such as &quot;Which tools did this agent use?&quot;, &quot;Which systems were modified?&quot;, and &quot;What data was accessed?&quot; Without a structured record of tool usage, debugging and compliance reviews are slow and error-prone.
              </li>
            </ul>
            <p className="pattern-body">
              Tool Usage Indicators address these issues by revealing tool-driven activity in a structured, human-readable way, with clear distinctions between read-only and write operations and a visible lifecycle for each call.
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
                  <span className="pattern-body--bold">Agentic workflows with tool orchestration</span> – Whenever an AI agent can call APIs, run code, execute workflows, or interact with third-party systems (CRM, HRIS, ERP, ticketing, analytics, cloud services).
                </li>
                <li>
                  <span className="pattern-body--bold">Scenarios involving system-of-record changes</span> – Any workflow where the agent can create, update, or delete records or send messages on behalf of a human.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-source retrieval and RAG experiences</span> – When the agent searches across local documents, product logs, internal knowledge bases, and external web sources, and stakeholders care about which sources are being used.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulated or high-stakes domains</span> – Compliance, finance, healthcare, HR, security, and legal workflows where data access and system changes must be transparent and auditable.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Simple, local-only tasks</span> – Short, single-turn completions such as rewriting text, translating content, or summarizing a short note where no external tools or data sources are involved.</li>
                <li><span className="pattern-body--bold">Static, bounded operations with obvious behavior</span> – Cases where a form or wizard already clearly controls which system is being used and exactly what will happen.</li>
                <li><span className="pattern-body--bold">Low-impact, read-only queries</span> – Informational queries against a single known source where the impact of tool usage is trivial and latency is low.</li>
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
                Tool Usage Indicators typically consist of a compact, inline surface directly under or adjacent to the agent&apos;s message, showing what tools are being used right now, plus an optional expanded view for deeper inspection and auditability.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Inline Tool Status
              </h3>
              <p className="pattern-card__intro">
                A short &quot;Activity&quot; or &quot;Tools used&quot; section beneath agent responses.
              </p>
              <ul className="pattern-card__list">
                <li>Visible by default whenever tools are invoked</li>
                <li>Compact—often a single line per tool with icon, label, and status</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Expandable Activity Details</h3>
              <p className="pattern-card__intro">
                A &quot;View details&quot; or chevron button reveals an expanded list or timeline.
              </p>
              <ul className="pattern-card__list">
                <li>Shows individual calls, durations, scopes, and error messages</li>
                <li>Useful for power users, admins, and debugging</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Task / Job Detail View</h3>
              <p className="pattern-card__intro">
                For longer-running or asynchronous tasks, a dedicated detail page or modal.
              </p>
              <ul className="pattern-card__list">
                <li>Full tool usage timeline for review, debugging, and audits</li>
                <li>Accessed from notification toasts, job cards, or status banners</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Tool Call Indicator</h3>
            <p className="pattern-card__intro">
              Each Tool Call Indicator represents a single tool invocation or a small batch of closely related calls. It answers three key questions at a glance:
            </p>
            <ol className="pattern-list" style={{ listStyleType: 'decimal' }}>
              <li>Which tool or system is involved?</li>
              <li>What is the agent attempting to do with it?</li>
              <li>What is the current status and impact?</li>
            </ol>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <p className="pattern-card__intro">A concise, action-oriented description in domain language:</p>
                <ul className="pattern-card__list">
                  <li>&quot;Searching product knowledge base…&quot;</li>
                  <li>&quot;Running SQL query on analytics warehouse…&quot;</li>
                  <li>&quot;Preparing 12 CRM updates (pending approval)…&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description (optional)</p>
                <p className="pattern-card__intro">One or two lines of additional context:</p>
                <ul className="pattern-card__list">
                  <li>&quot;Filtering customer records from the past 90 days.&quot;</li>
                  <li>&quot;Simulating changes in sandbox environment only.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Cancel / stop call</li>
                  <li>Retry failed call</li>
                  <li>Open source system (e.g., &quot;Open in CRM&quot;)</li>
                  <li>Review pending changes or diffs</li>
                  <li>Approve / reject a write operation</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Tool identity: icon, name (&quot;CRM&quot;, &quot;Data warehouse&quot;)</li>
                  <li>Access mode: read-only, write, or simulate</li>
                  <li>Environment: Production, Sandbox, Test</li>
                  <li>Scope: counts (&quot;17 records&quot;), entities, time ranges</li>
                  <li>Status: Queued, In progress, Awaiting approval, Completed, Failed</li>
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
                The lifecycle of a Tool Call Indicator spans from request planning through completion or failure.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Request and Planning</h3>
              <ul className="pattern-card__list">
                <li>The user submits a prompt or action request.</li>
                <li>The agent determines that one or more tools are required and decides which tools to call and in which order.</li>
                <li>If a Reasoning Glimpse or plan pattern is present, tool usage is mapped to specific steps.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Tool Discovery and Pre-Run Indication</h3>
              <ul className="pattern-card__list">
                <li>Before executing risky or long-running calls, the UI may show a brief, anticipatory indicator.</li>
                <li>&quot;Will search internal knowledge base and analytics warehouse.&quot;</li>
                <li>Gives stakeholders a chance to cancel or adjust scope before tool calls begin.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Tool Call Initiation</h3>
              <ul className="pattern-card__list">
                <li>For each active tool, a Tool Call Indicator appears in the inline Activity section.</li>
                <li>Shows tool identity (icon + name), operation (&quot;Searching…&quot;, &quot;Updating…&quot;), and initial status (&quot;In progress&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Live Execution and Progress Updates</h3>
              <ul className="pattern-card__list">
                <li>Displays a small animated element (spinner, shimmer, pulsing icon) to signal progress.</li>
                <li>Optionally shows intermediate counts or milestones (&quot;Scanning 1,200 transactions…&quot;).</li>
                <li>For multi-tool workflows, indicators may stack vertically or show aggregate labels.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. User Control and Intervention</h3>
              <ul className="pattern-card__list">
                <li>If the tool operation is cancellable, a &quot;Cancel&quot; or &quot;Stop&quot; control is available.</li>
                <li>For write operations, indicators transition to an &quot;Awaiting approval&quot; state before committing.</li>
                <li>Controls such as &quot;Review 12 proposed changes&quot; and &quot;Approve all / Approve individually&quot; are visible.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Completion</h3>
              <ul className="pattern-card__list">
                <li>On success, the indicator transitions to a stable &quot;Completed&quot; state.</li>
                <li>Spinner stops, icon changes to a checkmark, label shifts to past tense: &quot;Searched knowledge base (24 results found).&quot;</li>
                <li>The Activity section clearly shows which tools contributed to the response.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Failure and Fallback</h3>
              <ul className="pattern-card__list">
                <li>On failure, the indicator shows a clear error status (&quot;Failed&quot;, &quot;Timeout&quot;, &quot;Permission denied&quot;).</li>
                <li>Suggested actions (e.g., &quot;Reconnect integration&quot;, &quot;Retry with smaller date range&quot;).</li>
                <li>If the agent proceeds with degraded behavior, that limitation is explicitly noted.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Post-Task Visibility and Audit Trail</h3>
              <ul className="pattern-card__list">
                <li>All tool calls for a given task or session are recorded in the expanded timeline.</li>
                <li>Timestamp, tool, operation, scope, status, duration.</li>
                <li>Historical views remove animations and emphasize static states and filters.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States & Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States & variants</p>
              <p className="pattern-body pattern-body--narrow">
                Tool Usage Indicators can be tailored based on depth of information and the nature of the operation.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Depth Variants</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Inline summary (default)</span> – Compact &quot;Activity&quot; section with one line per tool or phase. Shows tool name, operation, and status.</li>
                <li><span className="pattern-body--bold">Expanded activity log</span> – Detailed list or timeline including scope, timestamps, and error messages. Intended for power users, admins, and debugging.</li>
                <li><span className="pattern-body--bold">Debug / developer view</span> – Restricted mode surfacing endpoints, query summaries, payload size, correlation IDs, latency metrics. Useful for engineers and operators.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk & Operation Variants</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Read-only tools</span> – Searching, retrieving, aggregating, or analyzing data. Indicators emphasize source and scope: &quot;Reading from Data Warehouse (read-only).&quot;</li>
                <li><span className="pattern-body--bold">Write / side-effectful tools</span> – Creating, updating, deleting records, or triggering workflows. Indicators emphasize risk and approval: &quot;Proposing updates to 17 CRM opportunities (review required).&quot;</li>
                <li><span className="pattern-body--bold">Simulation / sandbox tools</span> – Operations that simulate changes without affecting production. Indicators emphasize safe mode: &quot;Simulating HR policy changes in sandbox (no live changes).&quot;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual & Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Visual & content guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                While visual specifics depend on the product&apos;s design system, consistent cues strengthen trust in tool usage visibility.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Design</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Use consistent iconography for tool categories</span> – Data sources, communication tools, ticketing systems, code execution should have distinct but coherent visual treatments.</li>
                <li><span className="pattern-body--bold">Show state changes clearly</span> – Combine text status (&quot;In progress&quot;, &quot;Completed&quot;, &quot;Failed&quot;), icon state (spinner → check → warning), and subtle color changes.</li>
                <li><span className="pattern-body--bold">Limit concurrent motion</span> – When many tools run in parallel, animate the most relevant calls and keep others static. Respect reduced motion preferences.</li>
                <li><span className="pattern-body--bold">Align with existing design system</span> – Reuse badges, pills, progress bars, accordions, and timelines from the product&apos;s design system.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Content & Labeling</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Prefer domain language over internal jargon</span> – &quot;Sales CRM&quot; is clearer than &quot;sfdc-api&quot;. &quot;Reading account records&quot; communicates intent better than &quot;GET /accounts&quot;.</li>
                <li><span className="pattern-body--bold">Make read vs write explicit</span> – Use verbs that distinguish reads (&quot;Searching&quot;, &quot;Fetching&quot;, &quot;Reading&quot;) from writes (&quot;Updating&quot;, &quot;Creating&quot;, &quot;Deleting&quot;).</li>
                <li><span className="pattern-body--bold">Include scope where helpful</span> – &quot;Reading 12 invoices from last month.&quot; &quot;Preparing updates for 3 at-risk contracts.&quot;</li>
                <li><span className="pattern-body--bold">Handle partial or degraded states explicitly</span> – &quot;CRM was unavailable; answer is based on ticket history only.&quot;</li>
              </ul>
            </div>
          </div>

          <div className="pattern-example-group pattern-grid--mt-md">
            <div className="pattern-example pattern-example--good">
              <div className="pattern-example__header">
                <span className="pattern-example__label">Good labeling</span>
                <span className="pattern-example__badge pattern-example__badge--do">Do</span>
              </div>
              <ul className="pattern-example__list">
                <li>&quot;Searching internal knowledge base…&quot;</li>
                <li>&quot;Running SQL query on analytics warehouse…&quot;</li>
                <li>&quot;Preparing write to CRM (pending approval)…&quot;</li>
                <li>&quot;Creating Jira issue in Engineering project…&quot;</li>
              </ul>
            </div>

            <div className="pattern-example pattern-example--bad">
              <div className="pattern-example__header">
                <span className="pattern-example__label">Avoid</span>
                <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
              </div>
              <ul className="pattern-example__list">
                <li>&quot;POST /api/v2/records&quot; (too technical)</li>
                <li>&quot;sfdc-api&quot; (internal jargon)</li>
                <li>Generic &quot;Thinking…&quot; for all activity</li>
                <li>Silent writes without any indication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Security */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & security considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Tool usage indicators must balance transparency with appropriate information boundaries.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Minimize Sensitive Exposure</h3>
              <ul className="pattern-card__list">
                <li>Avoid including personally identifiable information or secrets in tool labels or descriptions.</li>
                <li>Prefer aggregate or abstract descriptions: &quot;Analyzing 45 payroll records&quot; instead of listing names or IDs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Respect Access Control</h3>
              <ul className="pattern-card__list">
                <li>Tool usage indicators must not leak the existence of restricted data or systems to unauthorized users.</li>
                <li>Use generic wording when an agent cannot access a system: &quot;Some records were inaccessible due to permissions.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separate Access from Changes</h3>
              <ul className="pattern-card__list">
                <li>Make it clear which tools were read-only and which performed changes.</li>
                <li>In audit views, structure logs with clear sections: &quot;Data accessed&quot; vs &quot;Actions taken&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Align with Compliance Policies</h3>
              <ul className="pattern-card__list">
                <li>Treat tool usage logs as sensitive operational data.</li>
                <li>Apply appropriate retention, masking, and access control policies.</li>
                <li>Provide controls for exporting or reviewing logs only to authorized roles.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clarify Environment and Scope</h3>
              <ul className="pattern-card__list">
                <li>Always indicate when actions occur in sandbox vs production environments.</li>
                <li>For multi-tenant platforms, avoid cross-tenant leakage in labels and logs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Tool Usage Indicators support several key interaction flows depending on timing and risk level.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Pre-Execution Confirmation for Risky Tools</h3>
              <ul className="pattern-card__list">
                <li>Before executing write operations, display tool indicators in a &quot;pending&quot; state with clear controls.</li>
                <li>&quot;Review details&quot; opens a diff or summary.</li>
                <li>&quot;Approve all&quot; or &quot;Approve individually&quot; for batch writes.</li>
                <li>&quot;Reject&quot; or &quot;Cancel&quot; to abort the action.</li>
                <li>The agent&apos;s language should clarify that proposed changes have not yet been applied.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Mid-Run Steering</h3>
              <ul className="pattern-card__list">
                <li>For complex or long-running tasks, allow mid-run adjustments.</li>
                <li>Limiting scope (&quot;Only update deals over $50k.&quot;)</li>
                <li>Switching environment (&quot;Run this in sandbox first.&quot;)</li>
                <li>Pausing specific tool calls while others proceed.</li>
                <li>Changes to configuration should be reflected immediately in corresponding indicators.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Post-Execution Review</h3>
              <ul className="pattern-card__list">
                <li>Provide a concise summary of tool actions in the chat context (&quot;Updated 7 opportunities and created 3 follow-up tasks.&quot;).</li>
                <li>A link or inline expansion to view the full tool usage log or diffs.</li>
                <li>Particularly important where manual review is part of standard operating procedures.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error Handling and Recovery</h3>
              <ul className="pattern-card__list">
                <li>When a tool fails, clearly mark the indicator with a failure state and short explanation.</li>
                <li>Offer recovery actions where appropriate (&quot;Retry&quot;, &quot;Try a smaller date range&quot;, &quot;Reconnect integration&quot;).</li>
                <li>Indicate downstream effects (&quot;Will continue without analytics data; results may be incomplete.&quot;).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How Tool Usage Indicators apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Sales & Revenue Operations Copilot</h3>
              <p className="pattern-card__intro">A sales manager requests: &quot;Prioritize this quarter&apos;s pipeline, flag deals at risk, and update stages for those unlikely to close.&quot;</p>
              <p className="pattern-card__label">Tool indicators show:</p>
              <ul className="pattern-card__list">
                <li>&quot;Reading opportunity data from Sales CRM (read-only)…&quot;</li>
                <li>&quot;Analyzing win probability model results…&quot;</li>
                <li>&quot;Preparing updates to 23 opportunities (pending approval)…&quot;</li>
                <li>&quot;Creating 5 follow-up tasks in Support system (pending approval)…&quot;</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.5rem' }}>
                The manager reviews the proposed changes, approves them, and the indicators transition to &quot;Completed&quot;. The activity timeline provides an audit trail.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">HR & People Ops Assistant</h3>
              <p className="pattern-card__intro">An HR partner asks: &quot;Generate a list of employees eligible for promotion and create draft promotion cases in the HR system.&quot;</p>
              <p className="pattern-card__label">Indicators show:</p>
              <ul className="pattern-card__list">
                <li>&quot;Fetching employee data from HR system (read-only)…&quot;</li>
                <li>&quot;Cross-checking performance reviews from the last 2 cycles…&quot;</li>
                <li>&quot;Drafting 14 promotion cases in HR system (pending approval)…&quot;</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.5rem' }}>
                Before creation, the assistant surfaces a structured review UI. Only after explicit confirmation do the indicators move from &quot;pending&quot; to &quot;completed&quot;.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Analytics & BI Agent</h3>
              <p className="pattern-card__intro">A data analyst requests: &quot;Investigate why infrastructure costs spiked in Q3 in the EU region and summarize top drivers.&quot;</p>
              <p className="pattern-card__label">Indicators show:</p>
              <ul className="pattern-card__list">
                <li>&quot;Running SQL query on Cost ledger (read-only)…&quot;</li>
                <li>&quot;Joining Cost ledger with Deployment logs (read-only)…&quot;</li>
                <li>&quot;Running anomaly detection model on Q2–Q3 series…&quot;</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.5rem' }}>
                All operations are read-only. The activity section clearly signals that no changes are being made to production systems.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Copilot</h3>
              <p className="pattern-card__intro">A support leader asks: &quot;Identify customers who opened more than 10 tickets in the last 30 days and create follow-up cases for account management.&quot;</p>
              <p className="pattern-card__label">Tool indicators show:</p>
              <ul className="pattern-card__list">
                <li>&quot;Searching ticket history in Helpdesk system (read-only)…&quot;</li>
                <li>&quot;Grouping tickets by customer account…&quot;</li>
                <li>&quot;Creating 32 follow-up cases in CRM (pending approval)…&quot;</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.5rem' }}>
                The leader can inspect which accounts will be affected and modify thresholds before approving, with each action visible in the activity timeline.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & pitfalls</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of tool usage indicators can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Generic, Opaque &quot;Thinking&quot; States</h3>
                  <p className="antipattern-subtitle">Using a single spinner for all activity.</p>
                </div>
              </div>
              <p className="antipattern-description">
                A single spinner or typing indicator for all activity, including tool calls, hides important information about data access and side effects.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Distinguish between reasoning, read-only calls, and write operations with specific indicators.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Writes and Hidden Side Effects</h3>
                  <p className="antipattern-subtitle">Performing updates without visible indicators.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Performing system-of-record updates or sending messages without clearly labeled indicators and approval steps erodes trust and can cause real harm.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show write operations with clear labels and, for high-risk actions, approval controls.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Technical Labels</h3>
                  <p className="antipattern-subtitle">Surfacing internal endpoint names as user-facing labels.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Surfacing internal endpoint names, table names, or job IDs as user-facing labels (&quot;POST /api/v2/records&quot;) increases cognitive load and confuses non-technical users.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use domain language: &quot;Updating customer records in CRM&quot; instead of technical API calls.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Verbosity by Default</h3>
                  <p className="antipattern-subtitle">Showing every micro-call in the main chat view.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing every micro-call or low-level event (e.g., multiple paginated fetches) in the main chat view overwhelms the interface. Detailed logs belong behind an expanded or debug view.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep the default view compact; offer &quot;View details&quot; for deeper inspection.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Treatment Across Surfaces</h3>
                  <p className="antipattern-subtitle">Some tools show indicators, others don&apos;t.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If some tools or agents surface indicators while others with similar risk profiles do not, users cannot reliably predict impact. Tool usage transparency should be coherent across the product.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Apply consistent indicator patterns to all tools with similar risk profiles.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Misaligned Labels and Behavior</h3>
                  <p className="antipattern-subtitle">Labeling a tool as &quot;read-only&quot; when it can write.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Labeling a tool as &quot;read-only&quot; when it can write, or failing to update indicators when a tool fails or is skipped, quickly undermines the pattern&apos;s purpose.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure labels accurately reflect tool behavior; update status in real-time.</span>
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
                To evaluate the effectiveness of Tool Usage Indicators, consider tracking:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Perceived Safety</h3>
              <ul className="pattern-card__list">
                <li>Changes in user-reported trust around data handling and system changes</li>
                <li>Reduction in &quot;surprise&quot; reports about unexpected changes or side effects</li>
                <li>Qualitative feedback from interviews and support tickets regarding clarity</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Safety</h3>
              <ul className="pattern-card__list">
                <li>Frequency and severity of incidents related to unintended writes or misdirected actions</li>
                <li>Number of write operations executed without manual approval, where approval is expected</li>
                <li>Rate of cancellations or scope reductions after users see tool indicators</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Success & Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Time to complete complex, tool-heavy tasks before vs after introducing indicators</li>
                <li>Reduction in rework caused by misunderstandings about data sources or scope</li>
                <li>Patterns in how often tool logs are consulted when troubleshooting issues</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Confidence</h3>
              <ul className="pattern-card__list">
                <li>Adoption rate of higher-autonomy features after introducing clearer tool visibility</li>
                <li>Differences in behavior between users who frequently inspect tool usage and those who do not</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for implementing robust Tool Usage Indicators.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Represent Tool Calls as Structured Events</h3>
              <ul className="pattern-card__list">
                <li>Model each tool call as an event with fields: tool identifier and category, operation type (read/write/simulate), status, scope, time metadata, and correlation IDs.</li>
                <li>This makes it straightforward to render consistent indicators and logs across multiple surfaces.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separate Orchestration from UI Rendering</h3>
              <ul className="pattern-card__list">
                <li>The orchestrator (agent framework, workflow engine) should emit tool call events with lifecycle updates.</li>
                <li>The UI layer subscribes to these events and updates indicators accordingly, ensuring visual state matches real execution state.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integrate with Reasoning Glimpse</h3>
              <ul className="pattern-card__list">
                <li>For each reasoning step, associate tool events as children in a tree or graph structure.</li>
                <li>In the UI, show high-level reasoning steps and annotate them with tool badges (e.g., &quot;Used CRM&quot;), with optional expansion for detailed calls.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Design for Progressive Disclosure</h3>
              <ul className="pattern-card__list">
                <li>Default to a minimal, readable inline Activity section.</li>
                <li>Offer deeper inspection views (side panels, timelines) only when needed.</li>
                <li>Ensure minimal views still distinguish between read-only and write operations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Instrument for Observability</h3>
              <ul className="pattern-card__list">
                <li>Store tool usage logs centrally for analysis and anomaly detection.</li>
                <li>Track patterns: unusually high write volumes, tools failing frequently, calls against unexpected systems.</li>
                <li>Use this data to refine guardrails, approvals, and indicator design.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Align with Governance and RBAC</h3>
              <ul className="pattern-card__list">
                <li>Gate certain capabilities (viewing detailed logs, approving changes, running high-risk tools) behind roles and permissions.</li>
                <li>Ensure indicators respect those boundaries: some users may see only high-level labels, while admins see more detailed activity.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design & review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Visibility & Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear which tools the agent is currently using or has used?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users distinguish between read-only and write operations at a glance?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Status & Progress</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the current status of each tool call (queued, running, completed, failed) clearly shown?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are progress indicators distinguishable from static states?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Control & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>For write operations, is there a clear approval step before execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users cancel or modify in-progress tool calls?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a way to view the full history of tool calls for a task or session?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do logs capture enough detail for compliance and incident review?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Error Handling</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are failures clearly indicated with actionable recovery options?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the UI explain the impact when a tool is unavailable or degraded?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Consistency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are tool usage indicators applied consistently across all agent capabilities?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do labels use domain language rather than technical jargon?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
