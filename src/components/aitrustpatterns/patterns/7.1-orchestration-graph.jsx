import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import OrchestrationGraphDemo from '../demos/OrchestrationGraphDemo';

// SEO metadata for this pattern page
export const ORCHESTRATION_GRAPH_SEO = {
  title: "Orchestration Graph - AI Trust Pattern",
  description: "Visual, interactive graphs that show how AI agents collaborate, hand off tasks, and progress through a workflow, enabling transparent monitoring, debugging, and human oversight.",
  keywords: ["orchestration graph", "multi-agent AI", "workflow visualization", "AI oversight", "agent collaboration", "agentic UX", "AI transparency", "workflow monitoring"],
  canonicalPath: "/agentic_ai_patterns/orchestration-graph"
};


export default function OrchestrationGraphPattern() {
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
            <span className="pattern-header__index">7.1</span>
            <div>
              <h1 className="pattern-header__title">Orchestration Graph</h1>
              <p className="pattern-header__subtitle">
                Visual, interactive graphs that show how AI agents collaborate, hand off tasks, and progress through a workflow, enabling transparent monitoring, debugging, and human oversight.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.1" patternTitle="Orchestration Graph" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              An orchestration graph is a visual representation of a multi-agent AI workflow. Each node represents an agent, tool, or system step, and edges represent the flow of data, tasks, or control between them.
            </p>
            <p className="pattern-body">
              This pattern typically appears alongside an agentic chat interface or workflow builder and acts as the &quot;control tower&quot; for understanding and steering complex, automated behavior. By visualizing relationships, dependencies, and execution state in real time, the orchestration graph makes agent behavior legible.
            </p>
            <p className="pattern-body">
              It helps product teams:
            </p>
            <ul className="pattern-list">
              <li>Inspect how a result was produced</li>
              <li>Locate and fix issues or misconfigurations</li>
              <li>Introduce guardrails, approval gates, and overrides</li>
              <li>Safely evolve workflows without requiring code changes</li>
            </ul>
            <p className="pattern-body">
              This is especially valuable in B2B and B2C SaaS contexts where multiple stakeholders (operators, admins, domain experts, engineers) depend on AI automation but must maintain reliability, compliance, and accountability.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Orchestration graph example">
          <OrchestrationGraphDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Multi-agent systems often behave like black boxes from a user&apos;s perspective. When an AI system is composed of multiple agents, tools, and APIs, the lack of visibility into how work is actually being done creates friction and mistrust.
            </p>
            <p className="pattern-body">
              Without an orchestration graph:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Execution is opaque</span> – Users see only the final response, with no sense of which agents ran, in what sequence, or based on which inputs.
              </li>
              <li>
                <span className="pattern-body--bold">Debugging is painful</span> – Failures, regressions, or unexpected results require deep technical investigation, often involving logs and code-level tracing rather than a usable UI.
              </li>
              <li>
                <span className="pattern-body--bold">Governance is fragile</span> – It is difficult to demonstrate which steps had human oversight, which agents accessed sensitive data, or how privacy and compliance constraints were enforced.
              </li>
              <li>
                <span className="pattern-body--bold">Optimization is guesswork</span> – Bottlenecks, redundant steps, or opportunities to parallelize work are hard to identify without a visual model of the workflow.
              </li>
            </ul>
            <p className="pattern-body">
              An orchestration graph addresses this by making AI processes observable and controllable, reducing the gap between system behavior and stakeholder expectations.
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
                  <span className="pattern-body--bold">Multi-agent AI workflows</span> where multiple agents, tools, or services collaborate to fulfill a task.
                </li>
                <li>
                  Use cases that require <span className="pattern-body--bold">explainability and auditability</span>, such as healthcare, finance, sales, security, or other regulated domains.
                </li>
                <li>
                  Scenarios involving <span className="pattern-body--bold">long-running or multi-step processes</span> where operational teams monitor and intervene as needed.
                </li>
                <li>
                  AI platforms where non-technical administrators must <span className="pattern-body--bold">configure or tune workflows without writing code</span>.
                </li>
                <li>
                  Environments with <span className="pattern-body--bold">multiple personas</span> (operators, analysts, engineers, reviewers) who share responsibility for managing AI behavior.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Single-step interactions with a single agent or model, where the only meaningful visibility is request/response history.</li>
                <li>Low-risk consumer features (e.g., simple text rewrites, summarizations) where mistakes are easily reversible.</li>
                <li>Highly constrained or static systems where execution is linear and obvious (e.g., a short, hardcoded tool chain).</li>
                <li>Internal tools used only by engineers who already have direct access to logs, metrics, and traces.</li>
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
                The orchestration graph pattern typically consists of a graph canvas, a detail panel, a control bar, and optional complementary views.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Navigation
              </h3>
              <p className="pattern-card__intro">
                Dedicated access from main navigation.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Workflows,&quot; &quot;Orchestration,&quot; or &quot;Runs&quot; section in the main navigation</li>
                <li>Accessible from administrative or &quot;Studio&quot; areas where workflows are designed</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">From Conversation or Job</h3>
              <p className="pattern-card__intro">
                Contextual link from AI-generated content.
              </p>
              <ul className="pattern-card__list">
                <li>Inline link or button such as &quot;View orchestration&quot; next to an AI response</li>
                <li>Used when someone asks &quot;How was this answer produced?&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual/System Events</h3>
              <p className="pattern-card__intro">
                Accessed via alerts or incident reports.
              </p>
              <ul className="pattern-card__list">
                <li>Error notifications or alerts that link directly to the problematic run</li>
                <li>Embedded in task detail pages (tickets, campaigns, cases)</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Run of a Workflow Definition</h3>
            <p className="pattern-card__intro">
              The primary object is a run that represents one execution of the workflow graph.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Marketing Copy Pipeline v3&quot;</li>
                  <li>&quot;Prod&quot; / &quot;Staging&quot; environment tags</li>
                  <li>&quot;Run #5428&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description</p>
                <ul className="pattern-card__list">
                  <li>Concise explanation of what the workflow does</li>
                  <li>Business goal it supports</li>
                  <li>Scope clarification (e.g., &quot;Creates and validates blog content for product launch campaigns&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Global Controls</p>
                <ul className="pattern-card__list">
                  <li>Start, stop, pause, resume, retry, duplicate run</li>
                  <li>Open in editor</li>
                  <li>Zoom, pan, fit to screen, collapse/expand</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Node-Level Controls</p>
                <ul className="pattern-card__list">
                  <li>Retry node, skip node, override input</li>
                  <li>Approve/reject output, route to human review</li>
                  <li>Disable agent</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Status: running, completed, failed, paused, waiting for approval</li>
                  <li>Trigger source: chat, API, schedule, event</li>
                  <li>Initiator, timestamps, duration, per-node timings</li>
                  <li>Tags and links to related artifacts</li>
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
                The orchestration graph reflects the entire lifecycle of a workflow run, evolving through these stages.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Definition & Configuration</h3>
              <ul className="pattern-card__list">
                <li>Agents, tools, and decision points are defined and composed into a graph structure</li>
                <li>Each node has configuration (prompt templates, tool bindings, data access scope)</li>
                <li>Optional human oversight logic (e.g., &quot;require approval if confidence &lt; X&quot;)</li>
                <li>May be edited in a &quot;design mode&quot; separate from live runs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Run Initialization</h3>
              <ul className="pattern-card__list">
                <li>A trigger (user request, scheduled job, API call, event) instantiates a run</li>
                <li>Initial context and parameters are captured and attached</li>
                <li>Graph view loads with all nodes in &quot;pending&quot; or &quot;not started&quot; state</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Execution & Progression</h3>
              <ul className="pattern-card__list">
                <li>Nodes transition: ready → running → completed / failed / skipped</li>
                <li>Edges animate or highlight to show data handoff</li>
                <li>Parallel branches can be visualized as grouped segments</li>
                <li>Progress indicators for long-running actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Human Checkpoints</h3>
              <ul className="pattern-card__list">
                <li>Approval nodes or thresholds can pause execution</li>
                <li>Users can inspect inputs, outputs, and prompts for a node</li>
                <li>Edit or correct data before allowing the workflow to continue</li>
                <li>All interventions are logged for audit and learning</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Error Handling & Fallback</h3>
              <ul className="pattern-card__list">
                <li>Failed nodes surface clear error state with diagnostics</li>
                <li>Graph may retry automatically based on configured policies</li>
                <li>Switch to fallback nodes or alternative paths</li>
                <li>Failed nodes remain visible for post-mortem analysis</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Completion & Summarization</h3>
              <ul className="pattern-card__list">
                <li>Graph locks into a &quot;historical&quot; state when run completes</li>
                <li>Summary panel provides outcome, duration, key outputs</li>
                <li>Links to generated artifacts (documents, content, tickets)</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Review, Iteration & Evolution</h3>
              <ul className="pattern-card__list">
                <li>Historical runs can be compared to identify recurrent failure points</li>
                <li>Learnings inform edits to the workflow definition</li>
                <li>Version changes are tracked; older runs retain references to graph version used</li>
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
                The orchestration graph supports multiple levels of interaction for different user needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Graph-Level Interactions</h3>
              <p className="pattern-card__label">Pan/Zoom</p>
              <ul className="pattern-card__list">
                <li>Drag to navigate large graphs; zoom in for details and out for overview</li>
                <li>&quot;Fit to screen&quot; and &quot;Reset view&quot; affordances reduce disorientation</li>
              </ul>
              <p className="pattern-card__label">Search & Filtering</p>
              <ul className="pattern-card__list">
                <li>Search by node name, agent type, status, or tag</li>
                <li>Toggles to show/hide low-level nodes for &quot;operator&quot; vs &quot;expert&quot; modes</li>
              </ul>
              <p className="pattern-card__label">View Modes</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Graph view</span> for topology understanding</li>
                <li><span className="pattern-body--bold">Timeline view</span> for execution order and latency analysis</li>
                <li><span className="pattern-body--bold">Tabular/log view</span> for detailed inspection</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Node-Level Interactions</h3>
              <p className="pattern-card__label">Hover</p>
              <ul className="pattern-card__list">
                <li>Quick summary: node name, agent type, status, duration, last error</li>
              </ul>
              <p className="pattern-card__label">Click / Select</p>
              <ul className="pattern-card__list">
                <li>Opens sidebar or modal showing inputs, outputs, tools used</li>
                <li>Model versions, parameters, timestamps, retry counts</li>
                <li>Assigned human overseers and any comments/approvals</li>
              </ul>
              <p className="pattern-card__label">Controls on Node</p>
              <ul className="pattern-card__list">
                <li>&quot;Retry,&quot; &quot;Skip,&quot; &quot;Open in editor,&quot; &quot;Fork from here,&quot; &quot;Download output&quot;</li>
                <li>For approval nodes: explicit &quot;Approve&quot; / &quot;Reject&quot; buttons with comment fields</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Edge & Data Flow Interactions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Edge labels</span> display the type of data or task being passed</li>
                <li>On click, show schemas, sample payloads, and transformations</li>
                <li>Useful for debugging mismatches in expectations between agents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scaling to Large Graphs</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Clustering & grouping:</span> Logical groups act as macro-nodes that can be expanded or collapsed</li>
                <li><span className="pattern-body--bold">Progressive disclosure:</span> Show only active, errored, or relevant branches by default</li>
                <li><span className="pattern-body--bold">Mini-map:</span> Optional overview to maintain orientation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Error Handling & Oversight */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Error handling & oversight</p>
              <p className="pattern-body pattern-body--narrow">
                Robust error visibility and human override paths are essential for trust in orchestrated workflows.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Node-Level Errors</h3>
              <ul className="pattern-card__list">
                <li>Clear visual indication (e.g., red outline, error icon, badge)</li>
                <li>Tooltip or detail panel shows error type, affected tools, and recommended next actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Graph-Level Warnings</h3>
              <ul className="pattern-card__list">
                <li>Banner or status bar for systemic issues</li>
                <li>Degraded external APIs, rate limits, misconfigured credentials</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human Override Paths</h3>
              <ul className="pattern-card__list">
                <li>Options to rerun with adjusted inputs</li>
                <li>Routing to human queues or alternate workflows</li>
                <li>Ability to mark a run as &quot;manually resolved&quot; with documentation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Audit Trail</h3>
              <ul className="pattern-card__list">
                <li>Every manual action (approval, override, reroute) is timestamped and attributed</li>
                <li>Logs can be exported or integrated into existing audit/compliance systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusivity</p>
              <p className="pattern-body pattern-body--narrow">
                Orchestration graphs must be usable by all team members, regardless of abilities or device constraints.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard Navigation</h3>
              <ul className="pattern-card__list">
                <li>Nodes and edges can be navigated via keyboard (arrow keys to move between nodes)</li>
                <li>Keyboard shortcuts for zoom, pan, and core actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Graph elements have ARIA roles and labels that express node relationships and statuses</li>
                <li>Alternative non-visual representation (list or tree view) for users who rely on screen readers</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contrast & Color</h3>
              <ul className="pattern-card__list">
                <li>State is never communicated by color alone; icons and text labels complement color coding</li>
                <li>Color choices meet WCAG contrast standards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Latency-Aware Updates</h3>
              <ul className="pattern-card__list">
                <li>Real-time updates are efficient and do not cause layout thrash</li>
                <li>Fallback static views or reduced animation modes available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Security & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, security & governance</p>
              <p className="pattern-body pattern-body--narrow">
                The orchestration graph should make data handling and access controls visible and enforceable.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Scoped Data Access</h3>
              <ul className="pattern-card__list">
                <li>Each node explicitly displays its data access scope</li>
                <li>Examples: &quot;PII redacted,&quot; &quot;Internal-only data,&quot; &quot;External API call&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Privacy Indicators</h3>
              <ul className="pattern-card__list">
                <li>Sensitive handoffs are clearly labeled (anonymization, re-identification steps)</li>
                <li>Icons or badges indicate compliance-related steps (consent checks, retention limits)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Role-Based Controls</h3>
              <ul className="pattern-card__list">
                <li>Editing the graph is restricted to roles with configuration permissions</li>
                <li>Specific actions (e.g., bypassing a compliance step) may require elevated approvals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Logging & Retention</h3>
              <ul className="pattern-card__list">
                <li>Policies around what is logged and how long data is retained are surfaced</li>
                <li>Options for redaction or synthetic examples in shared/demo environments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Success Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Telemetry & success metrics</p>
              <p className="pattern-body pattern-body--narrow">
                Metrics that help validate and evolve the orchestration graph pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage</h3>
              <ul className="pattern-card__list">
                <li>Number of runs per workflow and per user segment</li>
                <li>Frequency of visits to the orchestration view from chats, alerts, or dashboards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Reliability</h3>
              <ul className="pattern-card__list">
                <li>Rate of node and run failures</li>
                <li>Mean time to detect and resolve failed runs</li>
                <li>Frequency of successful automatic recoveries vs manual interventions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Oversight</h3>
              <ul className="pattern-card__list">
                <li>Number and type of human approvals triggered and completed</li>
                <li>Rate of overrides and reroutes by node type</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Optimization</h3>
              <ul className="pattern-card__list">
                <li>Average runtime per run and per phase</li>
                <li>Identification of bottleneck nodes (longest duration, highest failure rate)</li>
                <li>Adoption rate of new graph versions compared to older ones</li>
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
                The orchestration graph pattern can be adapted to different contexts and user needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Run-Centric Viewer</h3>
              <ul className="pattern-card__list">
                <li>Focused on a single execution instance</li>
                <li>Emphasizes actual states, errors, and outputs</li>
                <li>Best for debugging and incident response</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Template-Centric Builder</h3>
              <ul className="pattern-card__list">
                <li>Focused on defining and editing the graph topology, prompts, and configuration</li>
                <li>Includes versioning, testing, and simulation capabilities</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Mini-Graph</h3>
              <ul className="pattern-card__list">
                <li>Compact graph snippet embedded in a ticket, case, or chat transcript</li>
                <li>Shows only the most critical nodes and statuses</li>
                <li>Links to the full view for details</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Read-Only &quot;Explainer&quot; Mode</h3>
              <ul className="pattern-card__list">
                <li>Simplified graph tailored for stakeholders who need to understand but not operate</li>
                <li>Uses higher-level labels and hides implementation details</li>
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
                Certain implementations of orchestration graphs can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Overly Dense, Unreadable Graphs</h3>
                  <p className="antipattern-subtitle">Every micro-step shown as a separate node.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Presenting every micro-step as a separate node without grouping leads to cognitive overload. Users cannot parse the workflow or locate the information they need.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use clustering, grouping, and progressive disclosure to manage complexity.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous or Jargon-Heavy Labels</h3>
                  <p className="antipattern-subtitle">Labels mirror internal implementation names.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Node and edge labels that mirror internal implementation names rather than domain concepts hinder comprehension by non-technical users and domain experts.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use domain language and human-readable descriptions for all labels.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Side Effects</h3>
                  <p className="antipattern-subtitle">Nodes perform external actions without visual indication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Nodes that send emails, update records, or call external systems without clear visual indication erode trust. Users cannot anticipate what will happen when a node runs.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Clearly mark all nodes with external side effects using icons or badges.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unclear Responsibility Boundaries</h3>
                  <p className="antipattern-subtitle">Human and AI responsibilities are mixed without markers.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Mixing human and AI responsibilities without explicit markers obscures who is accountable for what. This creates confusion during debugging and audit.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Visually distinguish AI-automated nodes from human-in-the-loop steps.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Historical Context</h3>
                  <p className="antipattern-subtitle">Only current state is shown, no access to past runs.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Graphs that only show current state, without access to historical runs and changes, limit learning and improvement. Teams cannot identify recurring issues or measure progress.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide access to historical runs with comparison and trend analysis.</span>
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
                While implementation details vary by stack and framework, several practices tend to improve robustness and usability.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Event-Driven Backbone</h3>
              <ul className="pattern-card__list">
                <li>Represent node transitions and data handoffs as events</li>
                <li>UI subscribes to events, enabling real-time updates and replay</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Stable Identifiers</h3>
              <ul className="pattern-card__list">
                <li>Assign stable IDs to nodes and edges across versions</li>
                <li>Enables consistent diffing, analytics, and linking</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Versioning</h3>
              <ul className="pattern-card__list">
                <li>Treat each change to the graph as a new version</li>
                <li>Link each run to its graph version for reproducibility</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance Considerations</h3>
              <ul className="pattern-card__list">
                <li>Use incremental updates and virtualization for large graphs</li>
                <li>Defer loading of heavy payloads until explicitly requested</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Undo/Redo</h3>
              <ul className="pattern-card__list">
                <li>In design mode, support undo/redo stacks for changes</li>
                <li>Consider draft vs published states so partial configs don&apos;t impact production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Export & Sharing</h3>
              <ul className="pattern-card__list">
                <li>Allow export as PNG/SVG/PDF for documentation</li>
                <li>Provide shareable links that preserve selected node and filters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How orchestration graphs apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Content Creation Platform</h3>
              <p className="pattern-card__intro">Marketing Team</p>
              <p className="pattern-card__label">Workflow</p>
              <ul className="pattern-card__list">
                <li>Research Agent → Outline Agent → Draft Agent → Fact-Check Agent → SEO Agent → Publish Agent</li>
              </ul>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Draft Agent fails brand-compliance check</li>
                <li>Fact-Check Agent flags issues, pausing the workflow</li>
                <li>Content strategist reviews and edits in the sidebar</li>
                <li>Graph records intervention and resumes to completion</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Software Development Bug Triage</h3>
              <p className="pattern-card__intro">Engineering Team</p>
              <p className="pattern-card__label">Workflow</p>
              <ul className="pattern-card__list">
                <li>Triage Agent → Code Analysis Agent → Fix Suggestion Agent → Review Agent</li>
              </ul>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Multiple runs stuck at Code Analysis due to tool failures</li>
                <li>Manager inspects error and reroutes to Human Reviewer</li>
                <li>Metrics highlight Code Analysis as a bottleneck</li>
                <li>Team adds backup tool and fallback path</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Healthcare Administration</h3>
              <p className="pattern-card__intro">Healthcare Team</p>
              <p className="pattern-card__label">Workflow</p>
              <ul className="pattern-card__list">
                <li>Intake Agent → Anonymization Agent → Eligibility Check Agent → Analysis Agent → Reporting Agent</li>
              </ul>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Privacy-related nodes are distinguished with badges</li>
                <li>Compliance officer audits historical run</li>
                <li>Confirms anonymization occurred before analysis</li>
                <li>Graph serves as auditable policy enforcement</li>
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
              <p className="pattern-checklist-category__title">Visual Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the graph clearly represent agents, tools, and human steps with distinct visual treatments?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are node and edge labels expressed in domain language rather than internal implementation jargon?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Navigation & Views</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear way to move between graph view, timeline view, and detailed logs?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are large graphs manageable through grouping, filtering, and search?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Status & Progress</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are real-time statuses visible and understandable (running, completed, failed, paused, waiting for approval)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are human-in-the-loop steps and privacy/compliance-sensitive nodes visually prominent?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Oversight & Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can authorized users safely intervene (approve, retry, skip, reroute) with those actions clearly logged?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are versioning and environment distinctions (e.g., staging vs production) explicit?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the experience accessible via keyboard, screen readers, and high-contrast modes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Analytics</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are telemetry and analytics in place to track reliability, interventions, and optimization opportunities?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
