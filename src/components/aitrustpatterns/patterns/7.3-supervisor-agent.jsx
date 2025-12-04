import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const SUPERVISOR_AGENT_SEO = {
  title: "Supervisor Agent - AI Trust Pattern",
  description: "A centralized oversight agent that monitors, evaluates, and governs the actions and outputs of other agents, enforcing policies while making interventions visible, explainable, and controllable.",
  keywords: ["supervisor agent", "AI oversight", "policy enforcement", "AI governance", "multi-agent AI", "AI trust", "AI compliance", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/supervisor-agent"
};

// Pattern example image component - Supervisor Agent
function SupervisorAgentDemo() {
  return (
    <div
      style={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
      }}
      role="img"
      aria-label="Supervisor Agent pattern example showing a centralized oversight agent reviewing proposed actions"
    >
      <img
        src="/agentic/pattern_images/supervisor-agent.png"
        alt="Supervisor Agent pattern example demonstrating how a centralized oversight agent reviews proposed actions, applies policies, and surfaces interventions to users with clear explanations"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e7eb',
        }}
      />
    </div>
  );
}

export default function SupervisorAgentPattern() {
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
            <span className="pattern-header__index">7.3</span>
            <div>
              <h1 className="pattern-header__title">Supervisor Agent</h1>
              <p className="pattern-header__subtitle">
                A centralized oversight agent that monitors, evaluates, and governs the actions and outputs of other agents, enforcing policies while making interventions visible, explainable, and controllable.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.3" patternTitle="Supervisor Agent" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              As agentic systems become more capable and autonomous, individual agents increasingly perform complex actions: drafting emails, changing configurations, modifying data, and orchestrating workflows. Without a dedicated oversight layer, these systems can feel opaque and risky.
            </p>
            <p className="pattern-body">
              The Supervisor Agent pattern introduces a dedicated, configurable oversight agent that sits between task agents and the environment. It reviews proposed actions and outputs, applies organizational and product-level policies, and determines whether to approve, modify, block, or escalate them.
            </p>
            <p className="pattern-body">
              The pattern emphasizes:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Consistent policy enforcement</span> across all agents and workflows</li>
              <li><span className="pattern-body--bold">Transparent explanations</span> of decisions and interventions</li>
              <li><span className="pattern-body--bold">Configurable rules and thresholds</span> that preserve human control</li>
              <li><span className="pattern-body--bold">Auditable traces</span> that support compliance, debugging, and governance</li>
            </ul>
            <p className="pattern-body">
              This pattern typically appears in AI-enabled web applications as:
            </p>
            <ul className="pattern-list">
              <li>Inline annotations around AI-generated content or actions</li>
              <li>&quot;Decision log&quot; or &quot;supervision log&quot; views in admin or governance panels</li>
              <li>Policy configuration screens where administrators define rules, thresholds, and escalation paths</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Supervisor Agent example">
          <SupervisorAgentDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a Supervisor Agent, multi-agent AI systems tend to behave in ways that feel unpredictable, fragile, or unsafe:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unclear responsibility and accountability</span> – When multiple agents can change data, send messages, or trigger automations, it becomes difficult to determine which component made a decision, why it did so, and whether that behavior aligns with organizational policies.
              </li>
              <li>
                <span className="pattern-body--bold">Opaque policy enforcement</span> – Policies such as &quot;no PII in outbound messages&quot; or &quot;no changes to production settings without approval&quot; may be implemented ad hoc inside individual agents. Violations manifest as inconsistent behaviors or silent failures.
              </li>
              <li>
                <span className="pattern-body--bold">Limited user control over autonomous behavior</span> – End users and administrators often experience AI actions as &quot;all or nothing&quot;: either fully enabled and risky or disabled and underpowered.
              </li>
              <li>
                <span className="pattern-body--bold">Poor support for audits and compliance</span> – In regulated domains, teams must demonstrate that AI behavior is bounded, monitored, and auditable. Without a clear oversight layer, it is difficult to reconstruct what happened.
              </li>
              <li>
                <span className="pattern-body--bold">Fragile evolution of policies over time</span> – As policies change, updating each individual agent&apos;s behavior becomes error-prone and slow, leading to drift between written policies and runtime behavior.
              </li>
            </ul>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">Multi-agent systems</span> where several specialized agents collaborate to complete tasks or workflows.
                </li>
                <li>
                  <span className="pattern-body--bold">AI agents can trigger side effects</span> beyond text generation, such as sending communications, modifying configurations, or changing financial or legal records.
                </li>
                <li>
                  <span className="pattern-body--bold">Compliance, legal, privacy, or brand-safety requirements</span> – including finance, healthcare, education, infrastructure, and enterprise SaaS.
                </li>
                <li>
                  <span className="pattern-body--bold">Different roles require different levels of control</span> – e.g., admins vs. operators vs. end users need varying visibility and override capability.
                </li>
                <li>
                  <span className="pattern-body--bold">Audit trails are required</span> – products that must provide policy proofs or governance views for customers, compliance officers, or internal risk teams.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Single-agent chat experiences that only provide informational responses and cannot trigger external actions or persistent changes.</li>
                <li>Low-stakes, consumer-grade scenarios where general-purpose guardrails and basic safety filters provide sufficient protection.</li>
                <li>Prototypes and internal experiments that do not contain real customer data and have no access to production systems.</li>
                <li>Features whose outputs are already completely constrained by a separate, simpler pattern.</li>
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
                The Supervisor Agent pattern typically comprises three main surfaces: the runtime oversight layer, the supervision UI, and the policy configuration and governance surfaces.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Main Navigation / Admin Panel
              </h3>
              <p className="pattern-card__intro">
                &quot;AI Governance&quot;, &quot;Policy Center&quot;, or &quot;Supervision&quot; section for administrators and advanced users.
              </p>
              <ul className="pattern-card__list">
                <li>Rule management and simulation/sandboxing</li>
                <li>Aggregated supervision metrics and dashboards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow Builders & Automation Editors</h3>
              <p className="pattern-card__intro">
                Entry points for attaching the supervisor to specific flows, agents, or tools.
              </p>
              <ul className="pattern-card__list">
                <li>Configuration panels for choosing which rules apply</li>
                <li>Strictness level controls per workflow</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline within Agent Interactions</h3>
              <p className="pattern-card__intro">
                Inline chips or badges on AI messages showing supervision status.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Reviewed by Supervisor&quot;, &quot;Modified&quot;, &quot;Blocked&quot; badges</li>
                <li>Hover or click actions that reveal explanations and controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notifications & Alerts</h3>
              <p className="pattern-card__intro">
                System banners, toasts, or inbox-style notifications for high-severity events.
              </p>
              <ul className="pattern-card__list">
                <li>Alerts when high-severity blocks or escalations occur</li>
                <li>Links from notifications directly into detailed supervision records</li>
              </ul>
            </div>
          </div>

          {/* Core Objects */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Object: Supervision Rule</h3>
              <p className="pattern-card__intro">
                A policy that describes what should be enforced.
              </p>
              <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
                <div>
                  <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                  <ul className="pattern-card__list">
                    <li>&quot;No PII in outbound messages&quot;</li>
                    <li>&quot;No production config changes without approval&quot;</li>
                  </ul>
                </div>
                <div>
                  <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                  <ul className="pattern-card__list">
                    <li>Enable / disable rule</li>
                    <li>Edit conditions and thresholds</li>
                    <li>Set decision type (approve, modify, block, escalate)</li>
                    <li>Simulation/test mode and version history</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Object: Supervision Event</h3>
              <p className="pattern-card__intro">
                A record of the supervisor&apos;s decision on a specific agent action or output.
              </p>
              <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
                <div>
                  <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                  <ul className="pattern-card__list">
                    <li>&quot;Reply Draft Agent · Email send · Blocked&quot;</li>
                    <li>&quot;Config Agent · Setting update · Approved&quot;</li>
                  </ul>
                </div>
                <div>
                  <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                  <ul className="pattern-card__list">
                    <li>Expand to view full context</li>
                    <li>&quot;Accept&quot; or &quot;Apply modified output&quot;</li>
                    <li>&quot;Override and proceed&quot; for permitted users</li>
                    <li>&quot;Mark as incorrect&quot; for feedback</li>
                  </ul>
                </div>
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
                The Supervisor Agent&apos;s behavior spans configuration, runtime decision-making, and continuous refinement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Setup & Default Policies</h3>
              <ul className="pattern-card__list">
                <li>System-level default rules are provided, typically conservative and aligned with general safety requirements.</li>
                <li>The supervisor is wired to intercept defined classes of actions from participating agents.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Rule Configuration & Scoping</h3>
              <ul className="pattern-card__list">
                <li>Administrators define organization-specific rules, mapping them to specific agents, tools, or workflows.</li>
                <li>Scopes can be global, workspace-level, or feature-level.</li>
                <li>Simulation mode allows rules to run in &quot;shadow&quot; mode before activating enforcement.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Runtime Interception</h3>
              <ul className="pattern-card__list">
                <li>When an agent proposes an action, the proposal is routed to the Supervisor Agent.</li>
                <li>The supervisor receives structured context: agent identity, user role, content, and relevant policy scopes.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Evaluation & Decision-Making</h3>
              <ul className="pattern-card__list">
                <li>The supervisor evaluates proposals against relevant rules and detectors.</li>
                <li>Decisions: <strong>Approve</strong>, <strong>Modify</strong>, <strong>Block</strong>, or <strong>Escalate</strong>.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Surfacing Interventions</h3>
              <ul className="pattern-card__list">
                <li>Clear status indicators on affected content (badges, labels, iconography).</li>
                <li>Short inline explanations with &quot;View details&quot; affordance.</li>
                <li>Diffs or side-by-side comparisons for modifications.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Override & Escalation Paths</h3>
              <ul className="pattern-card__list">
                <li>Users with sufficient permissions can override certain interventions.</li>
                <li>Escalations route to designated reviewers via notifications or approval queues.</li>
                <li>Approved overrides are logged with reason and actor identity.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Logging, Audit & Analytics</h3>
              <ul className="pattern-card__list">
                <li>Every supervision event is persisted, including inputs, decisions, triggered rules, and follow-up actions.</li>
                <li>Audit view allows filtered inspection by agent, user, rule, outcome, and timeframe.</li>
                <li>Aggregate metrics help understand intervention frequency and false positive rates.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Continuous Refinement</h3>
              <ul className="pattern-card__list">
                <li>Teams analyze supervision analytics and feedback to refine rules and adjust thresholds.</li>
                <li>Simulation mode supports testing changes against historical data.</li>
                <li>Versioning and change history provide traceability for compliance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Guidelines for designing inline interventions, supervisor dashboards, and policy management interfaces.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Interventions</h3>
              <ul className="pattern-card__list">
                <li>Use consistent iconography and color tokens to represent status.</li>
                <li>Keep inline messages concise, but always provide an affordance for deeper explanation.</li>
                <li>For modifications, favor transparent diffs over silent edits to build trust.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Supervisor Dashboard</h3>
              <ul className="pattern-card__list">
                <li>Present high-level overview: trends, top triggered rules, distribution by outcome.</li>
                <li>Provide filters for agent, workflow, rule, severity, outcome, and environment.</li>
                <li>Allow navigation from aggregate views into specific events.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy Management UI</h3>
              <ul className="pattern-card__list">
                <li>Represent rules as understandable, testable policy objects.</li>
                <li>Offer both no-code interface and expert mode with safety nets.</li>
                <li>Support previewing impact of rule changes with historical replay.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & explanation guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; explanations must be clear, specific, and actionable.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good explanation patterns</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Blocked due to detected bank account number — Rule: &apos;No PII in outbound messages&apos;.&quot;</li>
                  <li>&quot;Likely contains sensitive information&quot; (acknowledges uncertainty)</li>
                  <li>&quot;Detected personal address in this paragraph&quot; (specific location)</li>
                  <li>Clear next steps: edit content, apply suggestions, request approval, adjust rules</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak explanation patterns</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Action blocked for safety reasons&quot; (too generic)</li>
                  <li>&quot;Policy violation detected&quot; (no specifics)</li>
                  <li>Raw classifier output or low-level diagnostics for end users</li>
                  <li>Messages without actionable next steps</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Lead with the Reason</h3>
                <ul className="pattern-card__list">
                  <li>Provide human-readable rationale first</li>
                  <li>Follow with reference to the underlying rule</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Be Specific but Not Overwhelming</h3>
                <ul className="pattern-card__list">
                  <li>Identify what triggered the intervention</li>
                  <li>Avoid drowning users in raw diagnostics</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Adapt to Role & Permissions</h3>
                <ul className="pattern-card__list">
                  <li>Richer diagnostics for administrators and reviewers</li>
                  <li>Essential information only for end users</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data, Logging & Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, logging & metrics</p>
              <p className="pattern-body pattern-body--narrow">
                Key elements to log per supervision event and metrics for evaluating and refining the supervisor.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Key Elements to Log</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Event identifiers:</span> timestamp, environment, correlation ID, user and agent IDs</li>
                <li><span className="pattern-body--bold">Inputs:</span> action type, content summary or redacted content, contextual metadata</li>
                <li><span className="pattern-body--bold">Policy context:</span> applied rules, versions, thresholds, and scopes</li>
                <li><span className="pattern-body--bold">Decision:</span> outcome and any modifications applied</li>
                <li><span className="pattern-body--bold">Human actions:</span> overrides, edits, approvals, cancellations, and feedback</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Evaluation Metrics</h3>
              <ul className="pattern-card__list">
                <li>Intervention rates per agent, workflow, and rule</li>
                <li>Ratio of blocks/modifications to all supervised actions</li>
                <li>Override rates and false-positive reports per rule</li>
                <li>Time-to-approve for escalated events</li>
                <li>Distribution by severity, user role, and environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details vary by stack, but several recurring patterns support robust supervisor behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Architecture & Placement</h3>
              <ul className="pattern-card__list">
                <li>Implement as a distinct service or agent with a well-defined API</li>
                <li>Centralize enforcement so all agents invoke the same oversight layer</li>
                <li>Avoid embedding policies in each individual agent</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Rule Engine & Detectors</h3>
              <ul className="pattern-card__list">
                <li>Combine deterministic rules (regex, schema-based) with learned models</li>
                <li>Ensure deterministic checks are fast and predictable</li>
                <li>Use asynchronous evaluations for expensive model calls when possible</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Latency</h3>
              <ul className="pattern-card__list">
                <li>Optimize for latency by short-circuiting obviously safe cases</li>
                <li>Run heavy checks only when required</li>
                <li>Consider asynchronous follow-up checks for long-running tasks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Fallback Behavior</h3>
              <ul className="pattern-card__list">
                <li>Define clear behavior for supervisor failure, timeouts, or degraded performance</li>
                <li>&quot;Fail closed&quot; for high-risk actions; allow but log for low-risk scenarios</li>
                <li>Make failure modes visible through monitoring dashboards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Tenant & Multi-Region</h3>
              <ul className="pattern-card__list">
                <li>Respect tenant boundaries and regional data residency rules</li>
                <li>Allow policies to differ per tenant, region, or regulatory context</li>
                <li>Leverage shared defaults while supporting customization</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Privacy</h3>
              <ul className="pattern-card__list">
                <li>Treat supervised content as sensitive, especially with PII</li>
                <li>Apply appropriate encryption, access controls, and retention policies</li>
                <li>Ensure supervision logs are properly protected</li>
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
                Certain implementations of Supervisor Agents can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Hidden Interventions</h3>
                  <p className="antipattern-subtitle">Silent edits or blocks that are not surfaced to users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Implementing silent edits or blocks that are not surfaced to users erodes trust and makes debugging difficult. Every intervention should have an observable trace and rationale.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make every intervention visible with clear explanations and audit trails.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Generic Explanations</h3>
                  <p className="antipattern-subtitle">Messages like &quot;Action blocked for safety reasons&quot; without detail.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Messages such as &quot;Action blocked for safety reasons&quot; without further detail frustrate users and do not help teams improve their prompts or content.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide specific, actionable explanations that identify the trigger and suggest next steps.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">One-Size-Fits-All Policies</h3>
                  <p className="antipattern-subtitle">Applying the same strict policies across all contexts.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Applying the same strict policies across all agents, tenants, and use cases leads to unnecessary friction and frequent overrides. Policies should be scoped and adjustable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Allow policies to be scoped per agent, workflow, tenant, or context with appropriate defaults.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Escape Hatch</h3>
                  <p className="antipattern-subtitle">Blocking everything without override mechanisms.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Blocking everything in perpetuity without override mechanisms can stall workflows in high-skill, high-accountability contexts (e.g., legal teams, SREs). Proper permission models and escalation paths are essential.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide override options for users with appropriate permissions, with clear logging and justification requirements.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Configurability</h3>
                  <p className="antipattern-subtitle">Exposing advanced configuration without guardrails.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing advanced policy configuration without sensible defaults, templates, or boundaries can result in misconfiguration and risk. Admin experiences should be opinionated and guided.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide sensible defaults, templates, and guardrails with progressive disclosure of advanced options.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Feedback Loops</h3>
                  <p className="antipattern-subtitle">Failing to monitor override and false-positive signals.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Failing to monitor override and false-positive signals keeps the supervisor static and brittle. Continuous tuning is necessary as usage patterns and regulations evolve.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement feedback mechanisms and regularly review metrics to refine rules and thresholds.</span>
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
                How Supervisor Agents apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Platforms</h3>
              <p className="pattern-card__intro">Support Agent Oversight</p>
              <p className="pattern-card__label">Supervisor capabilities</p>
              <ul className="pattern-card__list">
                <li>Check generated responses for toxicity, PII leakage, and brand tone violations</li>
                <li>Block responses containing sensitive data with clear explanations</li>
                <li>Suggest redactions that agents can accept or override</li>
              </ul>
              <p className="pattern-card__label">Governance features</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Supervisors review trends in blocked replies and update policies</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Legal & Compliance Documents</h3>
              <p className="pattern-card__intro">Contract Drafting Oversight</p>
              <p className="pattern-card__label">Supervisor capabilities</p>
              <ul className="pattern-card__list">
                <li>Scan drafts for non-compliant clauses and missing mandatory language</li>
                <li>Detect jurisdiction-specific issues</li>
                <li>Escalate high-risk sections to legal reviewers with context</li>
              </ul>
              <p className="pattern-card__label">Governance features</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Configure rules per document type, client, or region</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Educational Content Platforms</h3>
              <p className="pattern-card__intro">Lesson & Quiz Generation</p>
              <p className="pattern-card__label">Supervisor capabilities</p>
              <ul className="pattern-card__list">
                <li>Evaluate content for age appropriateness and bias</li>
                <li>Check alignment with curriculum standards</li>
                <li>Block or redraft content that violates guidelines</li>
              </ul>
              <p className="pattern-card__label">Governance features</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Teachers can override or refine prompts while maintaining safeguards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps & Infrastructure Tools</h3>
              <p className="pattern-card__intro">Operations Oversight</p>
              <p className="pattern-card__label">Supervisor capabilities</p>
              <ul className="pattern-card__list">
                <li>Enforce &quot;no direct production changes without approval&quot;</li>
                <li>Block destructive commands without confirmation</li>
                <li>Respect maintenance windows and rate limits</li>
              </ul>
              <p className="pattern-card__label">Governance features</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Route risky actions through approval steps with full context for SREs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing & Communication</h3>
              <p className="pattern-card__intro">Campaign Content Oversight</p>
              <p className="pattern-card__label">Supervisor capabilities</p>
              <ul className="pattern-card__list">
                <li>Check for prohibited claims and regulated terms</li>
                <li>Detect competitive references and localization issues</li>
                <li>Flag problematic content with clear reasons</li>
              </ul>
              <p className="pattern-card__label">Governance features</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Marketing teams refine or override with suggestions provided</li>
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
              <p className="pattern-checklist-category__title">Visibility & Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all interventions (approvals, modifications, blocks, escalations) visible to users?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do explanations clearly identify what triggered the intervention and why?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Control & Override</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users with appropriate permissions override interventions when necessary?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are override actions logged with justification for audit purposes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Policy Management</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are rules represented as understandable, testable policy objects?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can administrators preview the impact of rule changes before activation?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Compliance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are supervision events persisted with sufficient detail for audits?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can teams filter and inspect supervision history by agent, rule, and outcome?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Continuous Improvement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are feedback mechanisms in place to identify false positives and over-strict rules?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are metrics tracked to evaluate and refine supervisor performance?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Architecture & Performance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the supervisor centralized so all agents invoke the same oversight layer?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there defined fallback behaviors for supervisor failures or timeouts?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
