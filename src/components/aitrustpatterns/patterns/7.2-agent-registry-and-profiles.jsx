import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import AgentRegistryDemo from '../demos/AgentRegistryDemo';

// SEO metadata for this pattern page
export const AGENT_REGISTRY_PROFILES_SEO = {
  title: "Agent Registry & Profiles - AI Trust Pattern",
  description: "Centralized, searchable catalog of AI agents that exposes each agent's role, permissions, performance, and history so humans can confidently select, configure, and govern agentic behavior.",
  keywords: ["agent registry", "agent profiles", "AI governance", "agent catalog", "multi-agent oversight", "agentic UX", "AI trust patterns", "agent management"],
  canonicalPath: "/agentic_ai_patterns/agent-registry-profiles"
};


export default function AgentRegistryProfilesPattern() {
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
            <span className="pattern-header__index">7.2</span>
            <div>
              <h1 className="pattern-header__title">Agent Registry & Profiles</h1>
              <p className="pattern-header__subtitle">
                Centralized, searchable catalog of AI agents that exposes each agent&apos;s role, permissions, performance, and history so humans can confidently select, configure, and govern agentic behavior.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.2" patternTitle="Agent Registry & Profiles" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              An Agent Registry is a centralized directory of all AI agents available within a product or organization. Each agent is represented as a profile with clear metadata: purpose, capabilities, tools and permissions, risk classification, environment (dev/stage/prod), ownership, performance, and historical activity.
            </p>
            <p className="pattern-body">
              This pattern usually appears in an admin or &quot;AI configuration&quot; area of a B2B/B2C web application, and is often complemented by inline entry points wherever agents are invoked: workflow builders, orchestration graphs, chat transcripts, or logs. The core idea is to make invisible automation visible: every non-human actor has a name, a documented mandate, explicit guardrails, and an accountable owner.
            </p>
            <p className="pattern-body">
              By exposing agent profiles and providing strong search, filtering, and governance features, this pattern:
            </p>
            <ul className="pattern-list">
              <li>Increases <span className="pattern-body--bold">transparency</span> about what agents exist and what they are allowed to do.</li>
              <li>Reduces <span className="pattern-body--bold">operational and compliance risk</span> through oversight and predictable behavior.</li>
              <li>Encourages <span className="pattern-body--bold">reuse</span> of proven agents instead of ad-hoc, opaque configurations.</li>
              <li>Creates a foundation for <span className="pattern-body--bold">monitoring, tuning, and continuous improvement</span>.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Agent registry demo">
          <AgentRegistryDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              In multi-agent AI systems, powerful automation often runs behind seemingly simple interfaces. Without an explicit registry and profile pattern, agents tend to be scattered, undocumented, and difficult to govern.
            </p>
            <p className="pattern-body">
              Common friction points include:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque automation and unclear responsibilities</span> &ndash; Agents operate behind chat interfaces or workflows with no obvious indication of which agent is acting, what tools it can invoke, or who is accountable for its behavior.
              </li>
              <li>
                <span className="pattern-body--bold">Weak governance and elevated risk</span> &ndash; Security, risk, and compliance stakeholders cannot easily see which agents have access to sensitive data, which are in production versus experimental, or how changes were introduced over time.
              </li>
              <li>
                <span className="pattern-body--bold">Reinvented agents and inconsistent experiences</span> &ndash; Product teams and power users create ad-hoc agents or prompts in isolation, leading to duplicates, inconsistent behavior, and fragmented knowledge about what &quot;good&quot; looks like.
              </li>
              <li>
                <span className="pattern-body--bold">Slow incident response and debugging</span> &ndash; When something goes wrong, it is hard to trace which agent was involved, what tools it called, and which version of its configuration was active.
              </li>
            </ul>
            <p className="pattern-body">
              These issues erode trust in agentic capabilities and make it difficult to scale AI safely across an organization. The Agent Registry & Profiles pattern addresses this by turning agents into first-class, inspectable entities.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when&hellip;
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">Multiple agents exist with distinct roles</span> (e.g., retrieval, summarization, classification, autonomous tasking) and are reused across features, teams, or workflows.
                </li>
                <li>
                  <span className="pattern-body--bold">The product allows teams to configure or create custom agents</span>, tools, or workflows that will be shared or reused in a multi-tenant or multi-team environment.
                </li>
                <li>
                  <span className="pattern-body--bold">Agents have access to sensitive data</span>, external systems, or high-impact actions (e.g., billing, compliance, HR, security, operations).
                </li>
                <li>
                  <span className="pattern-body--bold">Governance stakeholders</span> (security, compliance, legal, risk) require traceability, approvals, or auditability around AI behavior.
                </li>
                <li>
                  <span className="pattern-body--bold">The roadmap anticipates increasing numbers of agents</span>, tools, or environments (dev/stage/prod) that must remain manageable and understandable over time.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The product exposes only a <span className="pattern-body--bold">single, tightly scoped assistant</span> with minimal or no configuration, low-risk read-only behavior, and no external tool access.</li>
                <li>Agent behavior is <span className="pattern-body--bold">strictly limited to non-sensitive, content-only tasks</span> (e.g., generic copy suggestions, grammar corrections) with no long-term state or side-effects.</li>
                <li>All AI capabilities are <span className="pattern-body--bold">statically configured by the vendor</span>, with no tenant-level customization, no external tool integrations, and no need for per-agent governance or observability.</li>
                <li>The agent concept is <span className="pattern-body--bold">purely internal</span> to the implementation and there is no value in exposing it as a conceptual object to end users or admins.</li>
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
                The Agent Registry & Profiles pattern typically consists of a registry surface, agent profile surface, governance controls, and integration points.
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
                Dedicated &quot;AI Agents,&quot; &quot;Agents & Tools,&quot; or &quot;AI Catalog&quot; section under product or organization settings.
              </p>
              <ul className="pattern-card__list">
                <li>Accessible mainly to admins, developers, and operators responsible for AI configuration and governance.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow & Orchestration Surfaces</h3>
              <p className="pattern-card__intro">
                Inline links or icons wherever an agent node appears in a workflow builder or orchestration graph.
              </p>
              <ul className="pattern-card__list">
                <li>Clicking a node labeled &quot;Expense Audit Agent&quot; opens its profile.</li>
                <li>Context menus offering &quot;View agent profile,&quot; &quot;Replace agent,&quot; or &quot;Edit agent configuration.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Chat & Interaction Logs</h3>
              <p className="pattern-card__intro">
                Inline indicators in conversational UIs and logs that link to agent profiles.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Handled by: Expense Audit Agent&quot; next to relevant message clusters.</li>
                <li>Agent names in timelines act as navigable elements.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Search & Command Palettes</h3>
              <p className="pattern-card__intro">
                Global search results that include agents as a distinct entity type.
              </p>
              <ul className="pattern-card__list">
                <li>Results like &quot;Agents: Expense Audit Agent&quot;</li>
                <li>Filters to jump directly to agents by name, domain, owner, or environment.</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Agent Card or Row</h3>
            <p className="pattern-card__intro">
              The core repeated unit of this pattern is the agent card or row in the registry view. Each row/card represents a single AI agent as a well-defined object.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>Short, human-readable name that clearly communicates purpose (e.g., &quot;Expense Audit Agent,&quot; &quot;GDPR Data Deletion Agent&quot;).</li>
                  <li>Optional type indicator (e.g., &quot;System agent,&quot; &quot;User-created agent,&quot; &quot;Template agent&quot;).</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description</p>
                <ul className="pattern-card__list">
                  <li>One to two sentences in plain language that explain what the agent does and what it does <span className="pattern-body--bold">not</span> do.</li>
                  <li>Example: &quot;Analyzes submitted expenses to flag potential policy violations. Does not approve or reject payments.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Open profile (primary)</li>
                  <li>Activate / Deactivate agent</li>
                  <li>Move environment (e.g., promote from dev to prod)</li>
                  <li>Test in sandbox, Duplicate, Archive/Retire</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Domain or category (Finance, Marketing, Support, Operations)</li>
                  <li>Environment (Dev, Staging, Production)</li>
                  <li>Risk level (Low, Medium, High)</li>
                  <li>Owner/team, status, usage signals, tags</li>
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
                The pattern supports the full lifecycle of an agent from creation to retirement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Creation & Discovery</h3>
              <ul className="pattern-card__list">
                <li>A new agent is created by a developer, admin, or system (e.g., from a template or external integration).</li>
                <li>The agent is added to the registry as a Draft or Dev entry with minimal metadata and a clear default environment.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Profile Authoring</h3>
              <ul className="pattern-card__list">
                <li>The agent owner fills in required metadata: name, description, capabilities, domain, tools & permissions, environment, and risk classification.</li>
                <li>Validation ensures mandatory fields are completed before activation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Sandbox Testing</h3>
              <ul className="pattern-card__list">
                <li>The profile exposes a &quot;Test in Sandbox&quot; area where authorized users can run trial interactions without affecting production.</li>
                <li>The sandbox shows which tools and data sources will be accessible and makes logs visible for debugging.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Review & Approval</h3>
              <ul className="pattern-card__list">
                <li>For high-risk agents, changes trigger a review workflow involving designated approvers (e.g., security or compliance).</li>
                <li>The agent&apos;s status reflects review state (e.g., &quot;Awaiting approval&quot;) and change history records who reviewed and what was approved.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Activation & Assignment</h3>
              <ul className="pattern-card__list">
                <li>Once approved, an agent can be activated and assigned to workflows, chat entry points, or specific user groups.</li>
                <li>The registry and profile reflect current assignments (e.g., &quot;Used in: Invoice Review Workflow, Finance Copilot&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Ongoing Operation & Monitoring</h3>
              <ul className="pattern-card__list">
                <li>The system records usage, performance metrics, incidents, and feedback.</li>
                <li>The profile surfaces these metrics in near real-time, highlighting error spikes, slow response times, or negative feedback trends.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Iteration & Versioning</h3>
              <ul className="pattern-card__list">
                <li>Updates to prompts, tools, or parameters create new versions, tracked in a Change History section.</li>
                <li>The profile shows which version is active in each environment and allows safe rollback to previous stable versions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Deprecation & Retirement</h3>
              <ul className="pattern-card__list">
                <li>Deprecated agents are clearly labeled in the registry and profile, with a replacement or migration path where applicable.</li>
                <li>New assignments are blocked, existing workflows are flagged, and a sunset date or rationale is documented.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Key states</p>
              <p className="pattern-body pattern-body--narrow">
                The pattern should handle a range of states gracefully, both at registry and profile level.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div>
              <h3 className="pattern-card__title" style={{ marginBottom: '1rem' }}>Registry States</h3>
              <div className="pattern-card">
                <h4 className="pattern-card__title">Populated</h4>
                <ul className="pattern-card__list">
                  <li>Multiple agents listed with filters and sorting controls visible.</li>
                  <li>Batch actions (e.g., bulk deactivate) available where appropriate.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Empty State</h4>
                <ul className="pattern-card__list">
                  <li>No agents exist yet.</li>
                  <li>Clear explanation of what agents are and the value of creating them, plus safe calls-to-action.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Filtered Empty / No Results</h4>
                <ul className="pattern-card__list">
                  <li>Search or filters return no matches.</li>
                  <li>Guidance on how to broaden or adjust filters.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Error State</h4>
                <ul className="pattern-card__list">
                  <li>Failure to load agents (e.g., network or permission issues).</li>
                  <li>Clear, non-technical messaging, retry action, and link to support.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="pattern-card__title" style={{ marginBottom: '1rem' }}>Profile States</h3>
              <div className="pattern-card">
                <h4 className="pattern-card__title">Active</h4>
                <ul className="pattern-card__list">
                  <li>Agent is approved and serving traffic in at least one environment.</li>
                  <li>Environment badges, last deployment time, and active version prominently displayed.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Inactive / Draft</h4>
                <ul className="pattern-card__list">
                  <li>Agent exists but is not used in any live workflow.</li>
                  <li>Emphasis on configuration tasks and sandbox testing, with prominent &quot;Activate&quot; action.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Deprecated</h4>
                <ul className="pattern-card__list">
                  <li>Agent remains visible for history and audit, but cannot be newly assigned.</li>
                  <li>Banner indicating deprecation reason, replacement agent, and effective date.</li>
                </ul>
              </div>
              <div className="pattern-card" style={{ marginTop: '0.75rem' }}>
                <h4 className="pattern-card__title">Restricted / Limited Visibility</h4>
                <ul className="pattern-card__list">
                  <li>Agent is visible only to certain roles or teams, often due to sensitive data or regional regulations.</li>
                  <li>UI clearly indicates scope of availability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants & Scalability */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants & scalability</p>
              <p className="pattern-body pattern-body--narrow">
                The pattern can be adapted for different organizational sizes and contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Lightweight Variant</h3>
              <p className="pattern-card__intro">For smaller or less regulated contexts with a handful of agents.</p>
              <ul className="pattern-card__list">
                <li>Simple list views with minimal metrics</li>
                <li>Basic activation controls</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Enterprise Variant</h3>
              <p className="pattern-card__intro">For organizations with dozens or hundreds of agents across multiple environments.</p>
              <ul className="pattern-card__list">
                <li>Robust search, faceted filtering, saved views</li>
                <li>Role-based access control and extensive history/metrics</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Tenant Variant</h3>
              <p className="pattern-card__intro">For platforms where each client or workspace manages its own agents.</p>
              <ul className="pattern-card__list">
                <li>Global templates plus tenant-specific variants</li>
                <li>Clear origin and override indicators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agent Profile Structure */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Agent profile structure</p>
              <p className="pattern-body pattern-body--narrow">
                The detailed profile forms the backbone of this pattern. A typical structure includes these key sections.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Header & Summary</h3>
              <ul className="pattern-card__list">
                <li>Agent name, environment badges, risk level, and status (Active/Inactive/Deprecated)</li>
                <li>Domain/tag chips (e.g., &quot;Finance,&quot; &quot;Compliance,&quot; &quot;Batch only&quot;)</li>
                <li>Owner and team, with contact or link to relevant group</li>
                <li>Short summary statement explaining the agent&apos;s value and boundaries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Capabilities & Typical Tasks</h3>
              <ul className="pattern-card__list">
                <li>Bullet list of capabilities in plain language</li>
                <li>Examples of common tasks or prompts the agent is optimized for</li>
                <li>Explicit &quot;non-capabilities&quot; for critical boundaries (e.g., &quot;Does not send emails; drafts only.&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Tools & Permissions</h3>
              <ul className="pattern-card__list">
                <li>Structured list of tools and APIs the agent can call with access levels</li>
                <li>Data categories accessed (e.g., PII, financial data, logs)</li>
                <li>Toggles for enabling/disabling tools, with confirmation for high-risk permissions</li>
                <li>Visual emphasis on high-risk capabilities with guardrail explanations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Data Scope & Guardrails</h3>
              <ul className="pattern-card__list">
                <li>Data sources and indices the agent can query</li>
                <li>Data residency or region constraints, PII/SPI handling, retention policies</li>
                <li>Guardrails: rate limits, content filters, policy enforcements, system instructions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Performance & Reliability</h3>
              <ul className="pattern-card__list">
                <li>Aggregate metrics: volume (requests/day), latency (average and p95), success/error rates</li>
                <li>Escalations or manual overrides triggered</li>
                <li>Visualization through simple charts or sparklines</li>
                <li>Clear explanations of metrics in tooltips</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Incident & Change History</h3>
              <ul className="pattern-card__list">
                <li>Incident history: timeline or table of noteworthy incidents with severity, description, impact, resolution</li>
                <li>Change history / audit log: versioned list of prompt updates, permission modifications, environment promotions</li>
                <li>Diff views for comparing configurations across versions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Feedback & Quality Signals</h3>
              <ul className="pattern-card__list">
                <li>Aggregated feedback from end-users or operators with ratings (e.g., 1&ndash;5)</li>
                <li>Thematic breakdown of feedback (e.g., &quot;Too conservative,&quot; &quot;Hallucinated data source&quot;)</li>
                <li>Recent verbatim feedback examples (with sensitive data masked)</li>
                <li>Controls for raising issues (&quot;Report incident,&quot; &quot;Flag misuse&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Controls & Governance</h3>
              <ul className="pattern-card__list">
                <li>Primary actions: Activate/Deactivate, Promote between environments, Clone, Delete or retire</li>
                <li>Role-based access configuration (who can use, edit, or assign the agent)</li>
                <li>Approval workflow triggers for high-risk changes</li>
                <li>Subscription controls for notifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* UX Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">UX guidelines & best practices</p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Clarity & Language</h3>
              <ul className="pattern-card__list">
                <li>Use clear, domain-specific names and descriptions; avoid internal model or framework jargon.</li>
                <li>Lead with purpose and risk, not technical implementation details.</li>
                <li>Express boundaries explicitly: what the agent will not do is as important as what it will do.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk & Permissions</h3>
              <ul className="pattern-card__list">
                <li>Present risk level and data access as first-class attributes in both registry and profile headers.</li>
                <li>Group high-risk tools and permissions together, visually distinguished from low-risk options.</li>
                <li>Show environment context prominently to prevent misinterpretation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Navigation & Discoverability</h3>
              <ul className="pattern-card__list">
                <li>Support powerful search and filtering by domain, owner, environment, risk, and tags.</li>
                <li>Allow saving and sharing filtered views.</li>
                <li>Provide consistent entry points from orchestration graphs, workflows, and logs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Privacy & Data Protection</h3>
              <ul className="pattern-card__list">
                <li>Avoid exposing sensitive content in logs, feedback, or incident history; mask or anonymize data where necessary.</li>
                <li>Clearly distinguish between synthetic examples and real historical logs.</li>
                <li>For multi-tenant products, ensure tenant isolation in registry views.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Layout & Visual Design</h3>
              <ul className="pattern-card__list">
                <li>Prioritize scannability with key information (name, purpose, risk, environment, status) in the top area.</li>
                <li>Group detailed sections with clear headings and collapsible panels.</li>
                <li>Use restrained, meaningful status colors with accessible contrast and non-color cues.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Responsiveness</h3>
              <ul className="pattern-card__list">
                <li>For large registries, rely on server-side pagination, virtualized lists, and progressive loading.</li>
                <li>Defer loading of heavy metrics or logs until the relevant tab is opened.</li>
                <li>Ensure profile pages remain usable on smaller viewports.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Access Control & Roles */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Access control & roles</p>
              <p className="pattern-body pattern-body--narrow">
                The pattern works best when paired with clearly defined roles and permissions.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">View-Only Roles</h3>
              <ul className="pattern-card__list">
                <li>Can browse registry and view agent details, but cannot change configuration or activate agents.</li>
                <li>Suitable for auditors, compliance staff, or stakeholders who need oversight without operational control.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Owners</h3>
              <ul className="pattern-card__list">
                <li>Can edit agent profiles, change configuration within defined bounds, and respond to feedback or incidents.</li>
                <li>Ownership is explicit and easily discoverable in the profile.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrators</h3>
              <ul className="pattern-card__list">
                <li>Can manage global settings, assign roles, approve high-risk changes, and retire agents.</li>
                <li>Often control environment management and cross-team access.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">End Users / Operators</h3>
              <ul className="pattern-card__list">
                <li>Primarily interact with agents through chat, workflows, or tools, but may see limited profile details.</li>
                <li>Typically have access to feedback and issue-reporting mechanisms but not to sensitive configuration or logs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Error Handling & Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Error handling & edge cases</p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Unavailable</h3>
              <ul className="pattern-card__list">
                <li>When an agent is temporarily offline or misconfigured, signal this in the registry and profile with a clear status and instructions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Misaligned Configuration</h3>
              <ul className="pattern-card__list">
                <li>If the profile metadata becomes out of sync with the underlying configuration, surface a warning and prompt for reconciliation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Missing Owner</h3>
              <ul className="pattern-card__list">
                <li>Highlight agents that lack an owner, and encourage assignment via a clear CTA and possibly an automated reminder.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Unauthorized Access</h3>
              <ul className="pattern-card__list">
                <li>Provide informative messaging when a user without sufficient permissions attempts to access or edit an agent, with a path to request access.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases</p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Finance Workflow Governance</h3>
              <p className="pattern-card__intro">Enterprise Finance</p>
              <ul className="pattern-card__list">
                <li>A platform administrator reviews the Expense Audit Agent profile to confirm it has read-only access to expense data and cannot modify payments.</li>
                <li>Then assigns it to a production &quot;Expense Review&quot; workflow with confidence in its guardrails.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Optimization</h3>
              <p className="pattern-card__intro">E-commerce Platform</p>
              <ul className="pattern-card__list">
                <li>A product manager filters agents by domain = &quot;Marketing&quot; and risk = &quot;Medium.&quot;</li>
                <li>Compares candidate agents by SEO-related tools and performance metrics, tests a promising agent in a sandbox, then deploys it.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Project Management</h3>
              <p className="pattern-card__intro">Collaboration Platform</p>
              <ul className="pattern-card__list">
                <li>A project management platform exposes a catalog of agents for planning, risk analysis, and retrospectives.</li>
                <li>Teams choose from the registry, inspect incident histories to avoid unreliable agents.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security Incident Analysis</h3>
              <p className="pattern-card__intro">Security Operations</p>
              <ul className="pattern-card__list">
                <li>A security team investigates a suspicious automation outcome.</li>
                <li>Navigates from an incident log to the responsible agent profile and reviews incident history, change history, and tool permissions to identify root cause.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow Builder Reuse</h3>
              <p className="pattern-card__intro">Workflow Automation</p>
              <ul className="pattern-card__list">
                <li>A workflow designer searches the registry for &quot;classification&quot; agents.</li>
                <li>Finds an existing high-performing, low-risk agent used in multiple successful workflows and reuses it rather than creating a new bespoke configuration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Instrumentation & Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation & metrics</p>
              <p className="pattern-body pattern-body--narrow">
                To assess the effectiveness of Agent Registry & Profiles as a trust-building pattern, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Coverage</h3>
              <ul className="pattern-card__list">
                <li>Number of active agents by domain, environment, and risk level</li>
                <li>Percentage of workflows or AI features backed by registry-listed agents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engagement with Registry & Profiles</h3>
              <ul className="pattern-card__list">
                <li>Agent profile views before assignment or activation events</li>
                <li>Frequency of search and filtering interactions; most common search terms</li>
                <li>Use of sandbox testing prior to promotion to production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance & Safety</h3>
              <ul className="pattern-card__list">
                <li>Number of high-risk agents with missing owners or incomplete profiles</li>
                <li>Rate of unapproved changes vs. changes that went through an approval flow</li>
                <li>Incident rate per agent and time-to-detection/time-to-resolution</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Feedback scores and trending topics for each agent</li>
                <li>Correlation between registry usage (e.g., reviewing profile, sandbox testing) and reduced incident rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & traps</p>
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
                  <h3 className="antipattern-title">Generic, Opaque Agent Names</h3>
                  <p className="antipattern-subtitle">Names like &quot;Agent-1&quot; or &quot;LLM Bot&quot; with no insight into purpose.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Generic names provide no insight into purpose, increasing confusion and misconfiguration risk.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use clear, purpose-driven names like &quot;Expense Audit Agent&quot; or &quot;GDPR Data Deletion Agent.&quot;</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden or Incomplete Permissions</h3>
                  <p className="antipattern-subtitle">Omitting high-risk tools or data access from the profile.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Omitting high-risk tools or data access from the profile, or burying them in obscure tabs, undermines trust and governance.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Surface permissions prominently with clear risk indicators and visual hierarchy.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Registry as Static Catalog Only</h3>
                  <p className="antipattern-subtitle">A directory that lists agents but lacks controls, metrics, or history.</p>
                </div>
              </div>
              <p className="antipattern-description">
                A directory that lists agents but lacks controls, metrics, history, or sandboxing becomes stale and is quickly bypassed.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Include governance controls, live metrics, change history, and sandbox testing.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Ownership or Accountability</h3>
                  <p className="antipattern-subtitle">Agents without a clearly designated owner.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Agents without a clearly designated owner leave a vacuum when issues arise and degrade long-term quality.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Require explicit ownership assignment, with automated reminders for unowned agents.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming Detail Without Hierarchy</h3>
                  <p className="antipattern-subtitle">Profiles that present every technical parameter equally.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Profiles that present every technical parameter equally, without prioritization, make it difficult to understand what matters for risk and behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Lead with purpose and risk; organize details in collapsible sections with clear hierarchy.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Cross-Tenant Leakage</h3>
                  <p className="antipattern-subtitle">Exposing agents or logs from one customer to another.</p>
                </div>
              </div>
              <p className="antipattern-description">
                In multi-tenant products, exposing agents or logs from one customer to another is a critical breach of trust and compliance.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Enforce strict tenant isolation in registry views with automated testing and auditing.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Orchestration View</h3>
              <p className="pattern-card__intro">
                Visualizes how agents connect within workflows or graphs and links nodes back to their profiles in the registry.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">AI Execution Logs & Traceability</h3>
              <p className="pattern-card__intro">
                Detailed execution traces that reference agent names, versions, tools called, and outcomes, with backlinks into agent profiles.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Permission & Policy Controls</h3>
              <p className="pattern-card__intro">
                Centralized management of data access, tool scopes, and policy enforcement that integrates with agent profiles.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Chat Attribution & Disclosure</h3>
              <p className="pattern-card__intro">
                Inline indicators in conversational UIs that show which agent produced a response, with entry points into its profile.
              </p>
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Design checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Registry Basics</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Every agent is represented as a clear, human-readable object in a centralized registry.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Registry surfaces allow efficient search, filtering, and scanning by purpose, environment, risk, and ownership.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Profile Completeness</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Each agent profile documents purpose, capabilities, tools/permissions, data scope, and guardrails in plain language.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Risk level, environment, and data access are prominent in both registry and profile headers.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Observability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Profiles expose sandbox testing, usage metrics, incident history, change history, and feedback in an organized way.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Instrumentation is in place to measure adoption, trust, and safety outcomes associated with the agent registry.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Ownership and governance roles are explicit, with appropriate access controls for viewing and editing.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>High-risk changes and promotions trigger clear review and approval workflows.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Lifecycle</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Deprecated agents remain visible for audit with clear deprecation status and replacement guidance.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Logs, incidents, and feedback avoid exposing unnecessary sensitive information and respect tenant boundaries.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
