import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import AgentPersonaProfilesDemo from '../demos/AgentPersonaProfilesDemo';

// SEO metadata for this pattern page
export const AGENT_PERSONA_PROFILES_SEO = {
  title: "Agent Persona Profiles & Settings - AI Trust Pattern",
  description: "Configurable agent persona profiles that define how AI agents behave—including role, tone, capabilities, and risk posture—and are surfaced as governed, reusable objects across the product.",
  keywords: ["AI preferences", "persona settings", "AI personalization", "behavior profiles", "AI trust", "tone settings", "AI configuration", "agentic UX", "AI customization", "persona builder", "agent gallery"],
  canonicalPath: "/agentic_ai_patterns/preference-persona-settings"
};

export default function PreferencePersonaSettingsPattern() {
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
            <span className="pattern-header__index">8.2</span>
            <div>
              <h1 className="pattern-header__title">Agent Persona Profiles & Settings</h1>
              <p className="pattern-header__subtitle">
                Configurable agent persona profiles that define how AI agents behave—including role, tone, capabilities, and risk posture—and are surfaced as governed, reusable objects across the product.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.2" patternTitle="Agent Persona Profiles & Settings" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Agent Persona Profiles & Settings define how an AI agent behaves in a product, and make that behavior explicit, consistent, and governable.
            </p>
            <p className="pattern-body">
              Instead of a single opaque &quot;assistant,&quot; the system exposes named, structured personas that answer a clear question: <span className="pattern-body--bold">&quot;Which agent is acting, on whose behalf, with what powers, and in what style?&quot;</span>
            </p>
            <p className="pattern-body">
              In B2B and B2C web applications, this pattern typically appears as:
            </p>
            <ul className="pattern-list">
              <li>A central <span className="pattern-body--bold">Agent Gallery</span> or configuration area where personas are created, reviewed, and managed.</li>
              <li><span className="pattern-body--bold">Inline agent selectors</span> in workflows that let teams pick which persona to use (e.g., &quot;Compliance Reviewer&quot; vs &quot;Brainstorming Partner&quot;).</li>
              <li><span className="pattern-body--bold">Visible agent indicators</span> in the chat or activity surfaces that show the active persona, its risk posture, and its limitations.</li>
            </ul>
            <p className="pattern-body">
              The core value is trust and predictability. End-users, admins, and stakeholders can see that:
            </p>
            <ul className="pattern-list">
              <li>The same persona behaves consistently across features and teams.</li>
              <li>Risk posture and capabilities are not improvised per prompt but governed centrally.</li>
              <li>Differences between agents (e.g., exploratory vs conservative, customer-facing vs internal) are intentional and legible.</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/8.2 agent persona.png"
              alt="Preference & Persona Settings pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This administrative configuration interface demonstrates how agent personas are defined as governed, structured objects. Select different personas from the sidebar (Legal Briefing Agent, Contract Drafter, or Negotiation Strategist) to see how each has distinct mission statements, risk postures, and capabilities. Try adjusting the risk tolerance between Conservative, Balanced, and Experimental to understand how behavioral guardrails are explicitly defined. Toggle capabilities on and off to control tool access, and notice how changes are versioned and require explicit saving to take effect.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Preference and Persona Settings interactive demo">
            <AgentPersonaProfilesDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit agent personas, AI behavior often feels arbitrary and unreliable:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque behavior and identity.</span> Users are unsure whether a response comes from a generic assistant, a specialized internal tool, or a test agent. It becomes difficult to answer &quot;who is acting on my behalf?&quot; or &quot;is this a production-grade agent or an experiment?&quot;
              </li>
              <li>
                <span className="pattern-body--bold">Inconsistent tone, risk posture, and capabilities.</span> Different teams prompt and configure agents independently, leading to divergent behavior across surfaces. In one part of the product the AI is cautious and literal; elsewhere it guesses aggressively and edits data without clear confirmation.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear limits and responsibilities.</span> Users do not know what the agent is allowed to do (e.g., &quot;Can this agent send emails?&quot; &quot;Can it access PII?&quot;), which leads either to over-trust (taking speculative output as authoritative) or under-trust (ignoring useful suggestions).
              </li>
              <li>
                <span className="pattern-body--bold">Weak governance and auditability.</span> Prompt text and configuration are scattered in code and config files, so changes are hard to review, version, or trace. Risk and compliance teams cannot easily answer &quot;what agents exist, what can they do, and who approved them?&quot;
              </li>
            </ul>
            <p className="pattern-body">
              A structured Agent Persona pattern addresses this by turning the agent itself into a first-class, inspectable object—separate from user preferences (&quot;who is the human?&quot;) and shared context (&quot;what world are we in?&quot;).
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>When multiple AI agents are present in a product (e.g., drafting, reviewing, summarizing, or triaging) and must behave differently by design.</li>
                <li>When organizations require <span className="pattern-body--bold">consistent, reusable AI behavior</span> across teams or surfaces.</li>
                <li>In <span className="pattern-body--bold">regulated or high-risk domains</span> (e.g., healthcare, finance, HR, security) where risk posture, escalation behavior, and tool access must be governed and auditable.</li>
                <li>When features rely on <span className="pattern-body--bold">multi-agent workflows</span> (e.g., brainstorming → fact checking → compliance review) and each stage needs a clear role and responsibility.</li>
                <li>When offering <span className="pattern-body--bold">tenant-configurable AI</span> and administrators need a safe way to adjust tone, tools, and scope without editing raw prompts or code.</li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>There is only a <span className="pattern-body--bold">single, low-risk assistant</span> with a fixed role, minimal capabilities, and no need for organizational governance.</li>
                <li>AI functionalities are <span className="pattern-body--bold">non-agentic and bounded</span>, such as inline autocomplete suggestions or simple grammar corrections.</li>
                <li>The product is an <span className="pattern-body--bold">early-stage prototype</span> where behavior is still being explored and formal governance has not yet been introduced.</li>
                <li>A small team or single owner can manage behavior through <span className="pattern-body--bold">a simple global settings panel</span> without confusion.</li>
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
                This pattern has two main surfaces: configuration & discovery surfaces (Agent Gallery, admin settings, creation flows), and runtime surfaces (chat interfaces, action panels, document tools) where an active agent is visible and selectable.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Global / Navigation-Level
              </h3>
              <ul className="pattern-card__list">
                <li>&quot;AI Agents&quot; or &quot;Personas&quot; entry in admin or workspace settings.</li>
                <li>Organization-level &quot;Agent Gallery&quot; accessible from an AI or automation section.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow-Level</h3>
              <ul className="pattern-card__list">
                <li>Agent selector dropdown or segmented control near the chat input or generation trigger.</li>
                <li>Per-feature configuration (e.g., pipeline settings, runbooks) that specify which persona is used by default.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual / Inline</h3>
              <ul className="pattern-card__list">
                <li>A chip or badge in the conversation header: <code>Agent: Compliance Reviewer (Conservative)</code>.</li>
                <li>Inline link in a system message or tooltip (&quot;Configured as: Exec Briefing Agent – View details&quot;).</li>
                <li>Empty-state hints when no default agent is configured for a workflow.</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Agent Persona</h3>
            <p className="pattern-card__intro">
              The core object is the Agent Persona, treated as a first-class, structured entity with the following fields:
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Identity & Ownership</p>
                <ul className="pattern-card__list">
                  <li>Label: concise, human-readable name (e.g., &quot;Compliance Reviewer (Conservative)&quot;)</li>
                  <li>Description / Mission Statement: testable definition of purpose</li>
                  <li>Owner metadata (team, group, or individual responsible)</li>
                  <li>Environment tags (dev / stage / prod)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Scope & Capabilities</p>
                <ul className="pattern-card__list">
                  <li>Domains and surfaces where the persona is allowed to act</li>
                  <li>Supported content types (emails, knowledge articles, incident reports)</li>
                  <li>Allowed tools and actions (data sources, action permissions, external APIs)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Tone & Risk Posture</p>
                <ul className="pattern-card__list">
                  <li>Tone & Style: concise vs detailed, formal vs casual, speculative vs reserved</li>
                  <li>Risk Posture: &quot;Experimental,&quot; &quot;Balanced,&quot; &quot;Conservative,&quot; or &quot;Safety-first&quot;</li>
                  <li>Mapping from posture to guardrails and escalation behavior</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Escalation & Controls</p>
                <ul className="pattern-card__list">
                  <li>Rules for when the agent should defer to a human or supervisor agent</li>
                  <li>Triggers: risk score, confidence level, sensitive topics</li>
                  <li>Controls: Activate, Set as default, Edit, Duplicate, Archive, View version history</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Tags (e.g., &quot;Legal,&quot; &quot;Support,&quot; &quot;Internal-only&quot;)</li>
                  <li>Status: Draft, Under Review, Approved, Deprecated</li>
                  <li>Last updated timestamp and change summary</li>
                  <li>Approvals (e.g., Compliance, Security, Data Protection)</li>
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
                A well-implemented persona pattern follows a predictable lifecycle from creation through ongoing usage.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Creation & Drafting</h3>
              <ul className="pattern-card__list">
                <li>A persona is created from scratch or from a template.</li>
                <li>The creator defines role, scope, tone, capabilities, and risk posture using structured fields.</li>
                <li>The system provides guardrails (default safe settings, required fields for high-risk domains).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Review & Governance</h3>
              <ul className="pattern-card__list">
                <li>For higher-risk personas, changes follow an approval workflow (e.g., legal or compliance review).</li>
                <li>Changes are versioned, with clear diffs of what changed in the persona.</li>
                <li>Personas transition through states: Draft → In Review → Approved → Live.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Assignment & Targeting</h3>
              <ul className="pattern-card__list">
                <li>Personas are assigned to specific surfaces or workflows.</li>
                <li>Default persona for a workspace or product area.</li>
                <li>Override persona per team, project, or pipeline.</li>
                <li>Assignment rules determine where the persona appears in selectors.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Runtime Activation</h3>
              <ul className="pattern-card__list">
                <li>At runtime, the active agent is clearly indicated near the interaction surface.</li>
                <li>Switching personas is explicit and often requires confirmation.</li>
                <li>The agent&apos;s identity and limits are visible without leaving the current context.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Interaction & Escalation</h3>
              <ul className="pattern-card__list">
                <li>The agent behaves according to its defined role and risk posture.</li>
                <li>Asks for clarification when appropriate.</li>
                <li>Requests approval to perform higher-risk actions.</li>
                <li>Escalates to a human reviewer or supervisor agent when triggered.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Monitoring & Feedback</h3>
              <ul className="pattern-card__list">
                <li>Feedback on outputs (ratings, corrections, safety flags) is attributed to the persona and version.</li>
                <li>Usage analytics reveal where personas perform well or poorly.</li>
                <li>High override rates or frequent handoffs indicate misalignment.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Evolution & Deprecation</h3>
            <ul className="pattern-card__list">
              <li>Persona changes are rolled out gradually where appropriate (e.g., to a subset of teams or environments).</li>
              <li>Older versions are retained for audit and rollback.</li>
              <li>Deprecated personas are hidden from selectors but preserved in logs for historical interpretation.</li>
            </ul>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Key technical and design considerations for implementing Agent Persona Profiles & Settings.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured Persona Model</h3>
              <ul className="pattern-card__list">
                <li>Represent personas as structured objects, not only as long prompt strings.</li>
                <li>Include explicit fields for: identity and owner, role/mission/exclusions, data access scope, tone/style/risk posture, and escalation triggers.</li>
                <li>Separate three concerns: <span className="pattern-body--bold">Agent Persona</span> (who the AI is), <span className="pattern-body--bold">User Preferences</span> (how the human prefers to interact), and <span className="pattern-body--bold">Context & Environment</span> (the workspace, data, and policies in effect).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Gallery & Browsing</h3>
              <ul className="pattern-card__list">
                <li>Provide an <span className="pattern-body--bold">Agent Gallery</span> that presents personas in a scannable layout.</li>
                <li>Each card shows name, mission snippet, risk badge, and environment.</li>
                <li>Filters support role, risk posture, domain, and owning team.</li>
                <li>Offer search over persona names, descriptions, and domains.</li>
                <li>Differentiate: Organization-wide personas, Team-level personas, Personal/experimental personas.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Display of Active Agent</h3>
              <ul className="pattern-card__list">
                <li>Surface the active agent prominently near the interaction surface.</li>
                <li>A labeled chip or pill in the chat header: <code>Agent: Postmortem Drafter (Balanced)</code>.</li>
                <li>Provide quick access to details via hover or click: mission, risk posture, allowed tools, data scope.</li>
                <li>Indicate environment (e.g., <code>Environment: Staging</code>, <code>Actions: Draft-only</code>).</li>
                <li>Reflect significant changes to the active persona in the UI.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Versioning & Change Management</h3>
              <ul className="pattern-card__list">
                <li>Maintain <span className="pattern-body--bold">versioned personas</span> with immutable version identifiers.</li>
                <li>Human-readable change logs: &quot;v7 – enabled access to CRM notes; approved by Legal.&quot;</li>
                <li>Support <span className="pattern-body--bold">approval workflows</span> for risky changes.</li>
                <li>Tie persona versions into logs and audit trails.</li>
                <li>Incident analysis and model evaluations can be filtered by persona.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Persona Variants & Inheritance</h3>
              <ul className="pattern-card__list">
                <li>Use shared <span className="pattern-body--bold">core personas</span> with variants for different audiences or channels.</li>
                <li>Example: &quot;Support Agent – Customer Replies&quot; vs &quot;Support Agent – Internal Notes&quot;.</li>
                <li>Implement an inheritance model: shared core mission, risk posture, and tool access with variant-specific adjustments.</li>
                <li>Clearly present relationships in the UI: show parent persona and variant badges.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tooling & Capability Boundaries</h3>
              <ul className="pattern-card__list">
                <li>Map each persona to explicit capabilities: read access only vs read/write vs administrative actions.</li>
                <li>Treat tool access as a permission model tied to personas.</li>
                <li>Admins manage which tools and data domains a persona can use.</li>
                <li>Reflect capability boundaries visually with icons or labels for tool categories.</li>
                <li>Clear messaging when the agent declines an action due to limited scope.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Escalation & Human Handoff</h3>
              <ul className="pattern-card__list">
                <li>Encode escalation rules directly within persona settings.</li>
                <li>Triggers based on content type, confidence, or policy rules.</li>
                <li>Preferred handoff channels (e.g., assign to human queue, tag a team, open a ticket).</li>
                <li>Make escalation explainable: the agent states when it is deferring and why.</li>
                <li>Each escalation event indicates which persona initiated it and under what rule.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States & Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States & edge cases</p>
              <p className="pattern-body pattern-body--narrow">
                Consider explicit handling for these scenarios:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">No Persona Selected</h3>
              <ul className="pattern-card__list">
                <li>Provide a safe default agent or block high-risk actions until a persona is chosen.</li>
                <li>Explain why a persona needs to be selected (e.g., different risk profiles).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Persona Unavailable</h3>
              <ul className="pattern-card__list">
                <li>When a persona is removed, deprecated, or not allowed in a given environment, show clear fallback behavior and messaging.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Capability Mismatch</h3>
              <ul className="pattern-card__list">
                <li>If a persona cannot perform a requested action (e.g., no write access), the agent should explicitly state its limitation.</li>
                <li>Where appropriate, suggest a persona that can perform the action.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User-Level Restrictions</h3>
              <ul className="pattern-card__list">
                <li>A persona may be available globally but restricted to certain roles.</li>
                <li>The UI should hide or disable personas that a user is not allowed to invoke, with appropriate explanation in admin contexts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Experience Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">User experience considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Guidelines for naming, explaining risk, and gathering feedback on agent personas.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Names & Mental Models</h3>
              <ul className="pattern-card__list">
                <li>Use <span className="pattern-body--bold">functional names</span> that emphasize role and responsibilities: &quot;Invoice Classifier,&quot; &quot;Security Policy Reviewer.&quot;</li>
                <li>Combine role with risk posture: &quot;Compliance Reviewer (Conservative),&quot; &quot;Brainstorm Coach (Experimental).&quot;</li>
                <li>Avoid overly anthropomorphic or whimsical names in serious or regulated contexts.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explaining Risk Posture</h3>
              <ul className="pattern-card__list">
                <li>Represent risk posture using both labels and descriptions.</li>
                <li>&quot;Experimental – open to speculative ideas and may hallucinate; outputs require human review.&quot;</li>
                <li>&quot;Conservative – avoids speculation; prefers to omit answers over guessing.&quot;</li>
                <li>Avoid encoding risk posture purely through color (for accessibility). Combine iconography and text.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback & Correction</h3>
              <ul className="pattern-card__list">
                <li>Provide lightweight feedback mechanisms: thumbs up/down or short tags (&quot;Too risky,&quot; &quot;Too speculative&quot;).</li>
                <li>Attribute feedback to the persona and version.</li>
                <li>Use feedback to refine mission statements, guardrails, and defaults.</li>
                <li>Allow teams to propose new personas when recurring feedback suggests a missing role.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Policy Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & policy considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Important considerations for data scope, memory, and policy enforcement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Scope Transparency</h3>
              <ul className="pattern-card__list">
                <li>Clearly indicate which data each persona can access (e.g., &quot;Reads: Tickets and internal KB; no access to customer PII fields.&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Personalization & Memory</h3>
              <ul className="pattern-card__list">
                <li>Show whether the persona uses: no memory (stateless), per-user memory (preferences, recent context), or shared team/organizational memory.</li>
                <li>Provide controls to reset or limit what the persona remembers.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy Enforcement</h3>
              <ul className="pattern-card__list">
                <li>Associate personas with policy bundles (e.g., regional compliance, allowed content).</li>
                <li>Ensure that persona configuration respects data residency and regulatory constraints.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Auditability</h3>
              <ul className="pattern-card__list">
                <li>Include persona identifiers in all logs where AI actions are recorded.</li>
                <li>Maintain audit logs of persona changes (who changed what, when, and why).</li>
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
                Monitor the impact and health of agent personas with these metrics:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Usage</h3>
              <ul className="pattern-card__list">
                <li>Number of sessions and interactions per persona.</li>
                <li>Personas most selected or set as default by teams.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Behavioral Fit</h3>
              <ul className="pattern-card__list">
                <li>Rate of persona switching mid-workflow.</li>
                <li>Frequency of overrides (e.g., disabling actions, editing generated output heavily).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Outcome Quality & Safety</h3>
              <ul className="pattern-card__list">
                <li>Output ratings segmented by persona and version.</li>
                <li>Incidents, policy violations, or safety escalations per persona.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance & Change Impact</h3>
              <ul className="pattern-card__list">
                <li>Post-change metrics: behavior changes following persona updates or new versions.</li>
                <li>Effectiveness of approval workflows (e.g., reduced incidents after governance introduction).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How Agent Persona Profiles & Settings apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Organizational AI Agent Gallery (B2B SaaS)</h3>
              <p className="pattern-card__intro">Enterprise SaaS Platform</p>
              <ul className="pattern-card__list">
                <li>An <span className="pattern-body--bold">Agent Gallery</span> in admin settings with agents like &quot;Customer Email Drafter – Empathetic & Cautious,&quot; &quot;Risk & Compliance Reviewer – Highly Conservative,&quot; and &quot;Product Update Summarizer – Internal-only.&quot;</li>
                <li>Feature teams select from approved personas when adding AI to a workflow.</li>
                <li>Ensures consistent behavior and a single place to adjust tone, risk posture, and capabilities.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident Management Companions</h3>
              <p className="pattern-card__intro">Observability Platform</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Incident Scribe:</span> Tracks chronological narrative of events, neutral and factual tone, read-only access to logs and alerts.</li>
                <li><span className="pattern-body--bold">Exec Briefing Agent:</span> Concise status updates for leaders, executive-friendly tone, summarizes but does not propose remediations.</li>
                <li><span className="pattern-body--bold">Postmortem Drafting Agent:</span> Helps draft post-incident reports, balanced risk posture, flags speculative content.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Document Workflow</h3>
              <p className="pattern-card__intro">Knowledge Tools Platform</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Brainstorming Agent:</span> Generates diverse, speculative ideas; experimental risk posture; clearly marked as ideation only.</li>
                <li><span className="pattern-body--bold">Fact-Checking Agent:</span> Cross-checks claims against approved sources; conservative risk posture; refuses unverifiable statements.</li>
                <li><span className="pattern-body--bold">Compliance Agent:</span> Reviews for policy, brand, or legal compliance; rigid risk posture; flags issues and may block publication.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer-Facing vs Internal Support</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Customer Reply Drafting Agent:</span> Writes customer-facing email and chat responses; empathetic, respectful, precise tone; conservative risk posture.</li>
                <li><span className="pattern-body--bold">Internal Notes Agent:</span> Summarizes interactions for teammates; concise, shorthand, more technical tone; can include internal tags and jargon.</li>
                <li>Agents share a common understanding of the domain but vary in tone, audience, and allowed disclosures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Common mistakes that undermine trust in agent personas.
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
                  <h3 className="antipattern-title">Hidden Personas</h3>
                  <p className="antipattern-subtitle">Agent role, scope, and risk posture are embedded in prompts but never exposed in the UI.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When personas are hidden, users are surprised by agent behavior and cannot understand or predict how the AI will act in different contexts.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make personas visible and inspectable with clear indicators in the UI.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overlapping or Confusing Personas</h3>
                  <p className="antipattern-subtitle">Many personas with similar names and unclear distinctions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Personas like &quot;Sales Helper 1&quot; and &quot;Sales Helper 2&quot; cause misselection and inconsistent behavior because users cannot tell them apart.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use distinct, functional names with clear descriptions of each persona&apos;s unique purpose.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unbounded Editing by End-Users</h3>
                  <p className="antipattern-subtitle">Allowing arbitrary editing of high-risk personas without governance.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When anyone can modify compliance or safety-critical personas without review, the governance model breaks down and risk increases.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement approval workflows and role-based access for editing sensitive personas.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mismatch Between Persona and Capability</h3>
                  <p className="antipattern-subtitle">A persona presented as &quot;Compliance Reviewer&quot; but configured with weak guardrails.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When a persona&apos;s name implies strict behavior but the configuration allows broad write access, users over-trust and potential violations occur.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure persona names accurately reflect their actual capabilities and risk posture.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Changes</h3>
                  <p className="antipattern-subtitle">Personas are modified without visible change logs or notifications.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When persona behavior suddenly shifts without explanation, users lose trust and cannot understand why the AI is acting differently.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain visible version history and notify users of significant persona updates.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Persona Model</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Define a structured persona model with clear fields for role, scope, tone, risk, tools, and ownership.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement an <span className="pattern-body--bold">Agent Gallery</span> with filters, search, and clear summaries for each persona.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Runtime Display</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Surface the <span className="pattern-body--bold">active agent</span> prominently in all relevant interaction surfaces.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Make data scope, memory behavior, and tool access visible and understandable.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Establish <span className="pattern-body--bold">versioning and governance</span> workflows for persona changes, including audit logs and approvals.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Support persona variants for different audiences or channels while keeping a shared core definition.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Feedback & Monitoring</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Capture metrics and feedback per persona and version to inform iteration and risk management.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Document relationships to other patterns (memory, activity logs, approvals) to keep the experience coherent.</span>
                </li>
              </ul>
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
          <ul className="pattern-list">
            <li><span className="pattern-body--bold">8.1 Memory Inspector & Editor</span> – Distinguishes between personal, team, and global memory and how agents use stored context.</li>
            <li><span className="pattern-body--bold">Activity Timeline & Audit Log</span> – Shows how agent actions and decisions are logged and surfaced.</li>
            <li><span className="pattern-body--bold">Human-in-the-Loop Review & Approvals</span> – Governs when and how agents require or request human confirmation.</li>
            <li><span className="pattern-body--bold">Prompt & Instruction Transparency</span> – Exposes system instructions and constraints that shape agent behavior.</li>
          </ul>
        </section>
      </main>
    </motion.div>
  );
}
