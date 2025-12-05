import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import EscalationDemo from '../demos/EscalationDemo';

// SEO metadata for this pattern page
export const ESCALATION_FALLBACK_ROUTING_SEO = {
  title: "Escalation & Fallback Routing - AI Trust Pattern",
  description: "A structured way for agentic systems to hand off work when limits are reached—routing to alternative agents or humans while keeping the process transparent, auditable, and controllable.",
  keywords: ["AI escalation", "fallback routing", "human handoff", "AI trust", "agent routing", "agentic UX", "multi-agent AI", "AI oversight"],
  canonicalPath: "/agentic_ai_patterns/escalation-fallback-routing"
};


export default function EscalationFallbackRoutingPattern() {
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
            <span className="pattern-header__index">7.6</span>
            <div>
              <h1 className="pattern-header__title">Escalation & Fallback Routing</h1>
              <p className="pattern-header__subtitle">
                A structured way for agentic systems to hand off work when limits are reached—routing to alternative agents or humans while keeping the process transparent, auditable, and controllable.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.6" patternTitle="Escalation & Fallback Routing" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Overview Section */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Escalation & Fallback Routing is a pattern for multi-agent and agentic AI systems that ensures work does not stall when an agent lacks the capability, confidence, permissions, or context to complete a task.
            </p>
            <p className="pattern-body">
              Instead of failing silently or looping, the system routes the task to a more appropriate handler (another agent, a simpler deterministic workflow, or a human). This pattern appears most often in:
            </p>
            <ul className="pattern-list">
              <li>Chat-based AI assistants embedded in web applications (support, operations, analytics, configuration)</li>
              <li>Agentic workflows that coordinate multiple specialized agents across domains</li>
              <li>B2B consoles where operators monitor and govern AI-driven processes</li>
            </ul>
            <p className="pattern-body">
              Its core value is trust: tasks are handled predictably, reasons for escalation are visible, and controls exist to tune behavior over time. The system demonstrates that it knows when to stop guessing and bring in a more reliable path.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Escalation and fallback routing example">
          <EscalationDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without structured escalation and fallback, agentic AI systems tend to exhibit:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Silent failures and loops</span> – Agents may repeatedly attempt actions that cannot succeed (missing permissions, external system errors, ambiguous inputs), creating a sense that the system is &quot;thinking&quot; forever while nothing is progressing.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear responsibility and next steps</span> – When tasks fail, the system often returns vague error messages or generic apologies without indicating what will happen next, whether anyone is looking into the issue, or what the realistic outcome will be.
              </li>
              <li>
                <span className="pattern-body--bold">Inconsistent and opaque risk handling</span> – High-risk or ambiguous cases might sometimes be handled by automation and sometimes by humans, with no visible reason. This erodes confidence and makes governance and compliance difficult.
              </li>
              <li>
                <span className="pattern-body--bold">Poor handoffs and context loss</span> – Even when escalation happens, humans or specialized agents often receive incomplete context, forcing users to restate information and making the process feel disjointed and inefficient.
              </li>
            </ul>
            <p className="pattern-body">
              A structured escalation and fallback routing pattern addresses these problems by defining predictable triggers, visible pathways, and well-designed handoffs between agents and humans.
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
                  <span className="pattern-body--bold">High-risk or regulated decisions</span> – Financial advice, medical triage, safety-critical operations, compliance checks, or any domain where incorrect automation would be costly or harmful.
                </li>
                <li>
                  <span className="pattern-body--bold">Systems with multiple agents or specialized capabilities</span> – Architectures where one agent orchestrates others, or where tasks can be offloaded to narrower, more deterministic agents.
                </li>
                <li>
                  <span className="pattern-body--bold">Long-running or multi-step workflows</span> – Scenarios that span multiple systems or require several dependent actions, where any single failure could stall the entire chain.
                </li>
                <li>
                  <span className="pattern-body--bold">Environments with strict SLAs or audit needs</span> – Customer support, fraud detection, and operations teams that must demonstrate how decisions are made.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, reversible tasks</span> – Casual Q&A, drafting non-critical content, or exploratory analysis where failures can simply be retried without risk.</li>
                <li><span className="pattern-body--bold">Single-shot, short interactions</span> – Simple queries where the cost of implementing orchestration and escalation outweighs the benefit.</li>
                <li><span className="pattern-body--bold">Highly deterministic pipelines</span> – Areas already governed by robust validation and strong guarantees where failures are rare and trivially handled.</li>
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
                The Escalation & Fallback Routing pattern typically spans the primary interaction surface (chat or workflow UI), a governance or operations console, and system logs and analytics.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline in Conversation
              </h3>
              <p className="pattern-card__intro">
                Banner or inline message indicating that escalation has occurred.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;This request has been escalated to a human specialist due to ambiguous tax rules. View details.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operations / Admin Console</h3>
              <p className="pattern-card__intro">
                Dedicated &quot;Escalations&quot; or &quot;Exceptions&quot; tab showing open cases, queues, and status.
              </p>
              <ul className="pattern-card__list">
                <li>Rule configuration interface for defining escalation triggers and routes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notifications & Alerts</h3>
              <p className="pattern-card__intro">
                Email, in-app notifications, or chat integrations sent to human operators.
              </p>
              <ul className="pattern-card__list">
                <li>Optional alerts for high-risk or SLA-breaching cases</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Escalation Case</h3>
            <p className="pattern-card__intro">
              The primary object is an Escalation Case (sometimes called a &quot;routed task&quot; or &quot;exception ticket&quot;) that represents one task that has been escalated from an agent.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>A short, human-readable summary of the issue and route</li>
                  <li>Example: &quot;Escalated: high-risk transfer – low confidence classification&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>What the user requested</li>
                  <li>What the agent attempted and where it failed or became uncertain</li>
                  <li>The trigger condition(s) that caused escalation</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Claim / assign owner</li>
                  <li>Re-route to another queue, team, or agent</li>
                  <li>Trigger a retry with updated parameters</li>
                  <li>Mark as resolved or closed with resolution type</li>
                  <li>Provide feedback tags (e.g., &quot;rule too conservative&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Confidence scores from one or more agents</li>
                  <li>Risk level or severity (low/medium/high/critical)</li>
                  <li>SLA target and time remaining</li>
                  <li>Tenant / customer / segment details</li>
                  <li>Audit references (request IDs, policy versions, model versions)</li>
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
                Below is a typical lifecycle for Escalation & Fallback Routing in an agentic system.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Request & Primary Handling</h3>
              <ul className="pattern-card__list">
                <li>A user submits a request via chat, form, or API</li>
                <li>A primary agent (or orchestrator agent) processes the request and attempts to complete the task within defined constraints</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Detection of Limitation or Risk</h3>
              <ul className="pattern-card__list">
                <li>Low model confidence or conflicting agent outputs</li>
                <li>Repeated errors (e.g., 3 consecutive external API failures)</li>
                <li>Policy violations or risk flags</li>
                <li>Missing capabilities (request outside the agent&apos;s declared scope)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Rule Evaluation & Routing Decision</h3>
              <ul className="pattern-card__list">
                <li>A configurable rules engine evaluates the situation via a no-code or low-code editor</li>
                <li>Example: <code>IF (confidence &lt; 0.7 AND risk_level != low) THEN route_to: human_specialist</code></li>
                <li>Rules may combine model outputs, metadata, business logic, and user preferences</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Fallback or Escalation Execution</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Fallback to another agent:</span> Route to a narrower or more specialized agent, or to a simpler deterministic service</li>
                <li><span className="pattern-body--bold">Escalation to a human:</span> Create or update an Escalation Case, add context, and assign to a human queue</li>
                <li>All relevant context (conversation history, tool calls, logs) is packaged to avoid context loss</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. User-Facing Feedback</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Prominent mode:</span> &quot;A specialist is reviewing this request due to conflicting data. No changes have been applied yet.&quot;</li>
                <li><span className="pattern-body--bold">Soft mode:</span> &quot;Some details are being verified in the background. Current results are partial.&quot;</li>
                <li>User can view escalation details, cancel or modify the request, or provide additional context</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Human or Secondary Agent Intervention</h3>
              <ul className="pattern-card__list">
                <li>The assignee sees the full event timeline (agents involved, actions attempted, errors)</li>
                <li>Explanation of why escalation happened</li>
                <li>Recommended next steps from the system</li>
                <li>Controls to approve, adjust, or reject and send a personalized explanation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Resolution & Closing Loop</h3>
              <ul className="pattern-card__list">
                <li>Escalation Case is marked with final status (resolved, rejected, deferred, re-assigned)</li>
                <li>Resolution notes and structured labels (e.g., &quot;policy gap&quot;, &quot;data quality issue&quot;)</li>
                <li>User-facing UI is updated with confirmation and explanation of actions taken</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Learning & Optimization</h3>
              <ul className="pattern-card__list">
                <li>Logged data feeds into rule tuning (e.g., adjust confidence thresholds)</li>
                <li>Agent improvement (fine-tuning, retrieval configuration, tool coverage)</li>
                <li>Capacity planning for human queues</li>
                <li>Simulations and replay tools allow teams to test new rules against historical escalations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Configuration & Rules Model */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Configuration & rules model</p>
              <p className="pattern-body pattern-body--narrow">
                Effective Escalation & Fallback Routing relies on a well-designed configuration model that balances power and safety.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">No-Code / Low-Code Editors</h3>
              <ul className="pattern-card__list">
                <li>Condition builder UI using business-friendly concepts</li>
                <li>Inputs: confidence scores, intents, error codes, user segments, content classifications, policy flags</li>
                <li>Operators: greater than, less than, equals, in list, AND/OR/NOT</li>
                <li>Outputs: route to agent, route to queue, trigger fallback workflow, request human approval</li>
                <li>Explanatory labels and tooltips for model-specific signals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Default Safe Fallbacks</h3>
              <ul className="pattern-card__list">
                <li>High-risk categories escalate to human by default</li>
                <li>Ambiguous content types default to manual review until enough learning exists</li>
                <li>Certain error patterns (e.g., repeated external system failures) trigger conservative fallback behaviors</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Retry & Backoff Strategies</h3>
              <ul className="pattern-card__list">
                <li>Configurable retry limits for transient errors</li>
                <li>Example: <code>max_retries=2</code> before escalation to human or deterministic workflow</li>
                <li>Visual representation of retry and escalation sequence to avoid hidden loops</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Simulation / Dry-Run Modes</h3>
              <ul className="pattern-card__list">
                <li>Run rule changes against recent logs to see how many cases would have escalated differently</li>
                <li>Preview impact by segment, risk level, or agent</li>
                <li>Compare &quot;before vs after&quot; metrics</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Governance Boundaries</h3>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Separation of Roles</p>
                <ul className="pattern-card__list">
                  <li>Clear distinction between who defines escalation rules (e.g., product owners, safety teams) and who can override specific cases (e.g., supervisors)</li>
                  <li>Role-based access control for modifying high-impact routing rules</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Versioning & Auditability</p>
                <ul className="pattern-card__list">
                  <li>Version history of rule sets, including who changed what and when</li>
                  <li>Linked incidents or performance metrics that motivated changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & UI Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & UI guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Effective user-facing feedback and operations console UX are critical to making this pattern trustworthy.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Clear Reason Messages</h3>
              <ul className="pattern-card__list">
                <li>Replace vague phrasing (&quot;Something went wrong&quot;) with structured explanations</li>
                <li><span className="pattern-body--bold">Trigger:</span> &quot;low confidence classification&quot;, &quot;policy conflict&quot;, &quot;system outage&quot;</li>
                <li><span className="pattern-body--bold">Impact:</span> what has been done or paused</li>
                <li><span className="pattern-body--bold">Next step:</span> who is now responsible and expected timing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Status Visualization</h3>
              <ul className="pattern-card__list">
                <li>&quot;In progress – automated&quot;</li>
                <li>&quot;In review – human specialist&quot;</li>
                <li>&quot;Completed – human approved&quot;</li>
                <li>&quot;Completed – automated&quot;</li>
                <li>For multi-step workflows, show which steps were automated and which were escalated</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Escalation List & Filters</h3>
              <ul className="pattern-card__list">
                <li>Sortable / filterable by status, trigger, risk level, queue, customer, time since creation</li>
                <li>Quick filters: &quot;High-risk unresolved&quot;, &quot;Breaching SLA soon&quot;, &quot;New rule misfires&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Case Detail View</h3>
              <ul className="pattern-card__list">
                <li>Timeline of agent actions and tools used</li>
                <li>Access to raw logs or structured summary</li>
                <li>Inline controls for re-routing, commenting, and resolution</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Bulk Actions & Triage Flows</h3>
            <ul className="pattern-card__list">
              <li>Support bulk triage where many similar escalations occur (for example, an integration outage)</li>
              <li>Provide a way to apply the same resolution or note to multiple cases</li>
              <li>Tag affected cases with a shared incident reference</li>
            </ul>
          </div>
        </section>

        {/* Edge Cases & Risks */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & risks</p>
              <p className="pattern-body pattern-body--narrow">
                Several edge cases and risks should be considered when implementing this pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <AlertTriangle size={16} className="pattern-icon--warning" />
                Human Queue Overload
              </h3>
              <p className="pattern-card__intro">
                Overly aggressive escalation rules may flood human reviewers, causing slow responses and reduced trust.
              </p>
              <ul className="pattern-card__list">
                <li>Monitor backlog and SLA metrics</li>
                <li>Incorporate capacity-aware routing (e.g., temporarily increase thresholds when queues are saturated)</li>
                <li>Introduce prioritization (e.g., risk-weighted processing)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <AlertTriangle size={16} className="pattern-icon--warning" />
                Escalation Loops
              </h3>
              <p className="pattern-card__intro">
                Poorly configured rules might route tasks between agents or between agents and humans without resolution.
              </p>
              <ul className="pattern-card__list">
                <li>Explicit maximum hop count and loop detection</li>
                <li>Guardrails that require a human final decision after a certain number of hops</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <AlertTriangle size={16} className="pattern-icon--warning" />
                Inconsistent Experiences Across Tenants
              </h3>
              <p className="pattern-card__intro">
                B2B multi-tenant platforms may allow tenant-specific rules, which can lead to unpredictable behavior.
              </p>
              <ul className="pattern-card__list">
                <li>Provide safe default profiles</li>
                <li>Clearly surface tenant-specific overrides in the UI and logs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <AlertTriangle size={16} className="pattern-icon--warning" />
                Privacy & Data Minimization
              </h3>
              <p className="pattern-card__intro">
                Escalations often involve sensitive content that must not be over-shared across teams or regions.
              </p>
              <ul className="pattern-card__list">
                <li>Redaction policies for certain data categories</li>
                <li>Region-aware routing and permissions control</li>
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
                Certain implementations of Escalation & Fallback Routing can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Escalation as Generic Catch-All Error</h3>
                  <p className="antipattern-subtitle">Escalating every failure without analyzing root causes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Escalating every failure without analyzing root causes results in a noisy queue and frustrated humans.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Categorize failures and create targeted escalation rules for each category.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque &quot;Magic Handoffs&quot;</h3>
                  <p className="antipattern-subtitle">Re-routing behind the scenes without any user-facing indication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Re-routing behind the scenes without any user-facing indication can create confusion when outcomes appear delayed or inconsistent.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always notify users when escalation occurs and provide visibility into the escalation status.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Context-Poor Escalations</h3>
                  <p className="antipattern-subtitle">Sending only minimal information to human reviewers.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Sending only minimal information (or raw logs) to humans forces repeated questioning and slows resolution.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Package full context including conversation history, agent actions, and recommendations.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Reliance on Confidence Scores Alone</h3>
                  <p className="antipattern-subtitle">Treating model confidence as the sole trigger.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Treating model confidence as the sole trigger ignores risk, cost of error, and user context. Confidence should be one input among many.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Combine confidence with risk level, user segment, action type, and business rules.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Instrumentation & Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation & success metrics</p>
              <p className="pattern-body pattern-body--narrow">
                To keep this pattern healthy and trustworthy, instrumentation should cover performance, quality, and operational metrics.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance Metrics</h3>
              <ul className="pattern-card__list">
                <li>Escalation rate by segment, task type, and trigger</li>
                <li>Time-to-first-human-touch and time-to-resolution</li>
                <li>Percentage of escalations that result in task completed as requested, modified, or rejected</li>
                <li>Escalations deemed &quot;unnecessary&quot; in retrospect</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality & Trust Metrics</h3>
              <ul className="pattern-card__list">
                <li>User satisfaction ratings before and after escalations</li>
                <li>Frequency of user complaints involving &quot;confusion,&quot; &quot;uncertainty,&quot; or &quot;no update&quot;</li>
                <li>Human reviewer feedback on rule appropriateness and helpfulness of context</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Metrics</h3>
              <ul className="pattern-card__list">
                <li>Queue depth and SLA adherence across human teams</li>
                <li>Impact of rule changes (pre/post) on escalations and incident rates</li>
                <li>Distribution of escalations by risk level, region, or customer tier</li>
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
                How Escalation & Fallback Routing applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Content Moderation Platform</h3>
              <p className="pattern-card__intro">B2C social or community product</p>
              <ul className="pattern-card__list">
                <li>A Moderation Agent screens content in real time</li>
                <li>Ambiguous or borderline posts trigger escalation based on configurable thresholds</li>
                <li><code>toxicity_score</code> between 0.3 and 0.6 escalates to human review</li>
                <li>High-risk categories (self-harm, child safety) escalate regardless of score</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Financial Advising App</h3>
              <p className="pattern-card__intro">B2C or B2B2C wealth management</p>
              <ul className="pattern-card__list">
                <li>A digital advisor agent proposes investment strategies</li>
                <li>Escalates when portfolio change exceeds risk delta, or confidence falls below threshold</li>
                <li>User UI indicates &quot;A licensed advisor is now reviewing the suggestion&quot;</li>
                <li>Advisors work from escalation queue with proposed recommendations and controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Autonomous System Simulation</h3>
              <p className="pattern-card__intro">B2B operations or engineering</p>
              <ul className="pattern-card__list">
                <li>Multiple sensor and planning agents coordinate simulations</li>
                <li>When sensor data is inconsistent or flagged as untrusted, a specialized Oversight Agent attempts reconciliation</li>
                <li>If unresolved, escalates to an engineer or safety review queue</li>
                <li>Engineers use escalation logs to improve agents and update data quality checks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Rule Configuration</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Clear definitions for when tasks <em>must</em> escalate vs <em>may</em> escalate</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>No-code rules editor with guardrails and default safe profiles</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Explicit mapping from triggers → routes (agents, humans, queues)</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Experience</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>User-facing messaging that explains reason, impact, and next steps</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Complete case objects with context, history, and controls for humans</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Operations</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Operations console for monitoring queues, cases, and trends</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Telemetry to track escalation rates, resolution times, and satisfaction</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Simulation tools to test rule changes before rollout</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Playbooks for high-risk or high-volume escalation scenarios</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Regular review cadence for rule tuning, based on real-world outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
