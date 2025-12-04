import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const PREFERENCE_PERSONA_SETTINGS_SEO = {
  title: "Agent Persona Profiles & Settings - AI Trust Pattern",
  description: "Configurable, reusable definitions of how a specific AI agent should behave—its role, tone, capabilities, and boundaries—applied consistently across interactions to make agent behavior predictable, governable, and trustworthy.",
  keywords: ["AI agent personas", "agent profiles", "AI agent configuration", "AI trust", "multi-agent systems", "agent behavior", "AI governance", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/agent-persona-profiles"
};

// Interactive demo component - Placeholder
function PreferencePersonaSettingsDemo() {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        maxWidth: '800px',
        width: '100%',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        margin: '0 auto',
        padding: '48px 24px',
        textAlign: 'center',
      }}
      role="region"
      aria-label="Agent Persona Profiles demo"
    >
      <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
        <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#374151' }}>
          Interactive Demo Coming Soon
        </p>
        <p style={{ margin: 0 }}>
          This demo will showcase an agent gallery with persona profiles, role definitions, and capability controls.
        </p>
      </div>
    </div>
  );
}

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
                Configurable, reusable definitions of how a specific AI agent should behave—its role, tone, capabilities, and boundaries—applied consistently across interactions to make agent behavior predictable, governable, and trustworthy.
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
              Agent persona profiles define <span className="pattern-body--bold">who an AI agent is and how it operates</span> across tasks, channels, and sessions. Instead of burying this in hidden system prompts or ad-hoc instructions, this pattern makes the agent&apos;s role, style, and constraints a first-class, inspectable configuration.
            </p>
            <p className="pattern-body">
              In multi-agent and agentic systems, these profiles are the backbone of a &quot;team of AI agents&quot;: each agent has a clear persona (e.g., &quot;Support Triage Nurse,&quot; &quot;Risk-Aware Data Strategist,&quot; &quot;Red-Team Critic&quot;) that encodes what the agent is good at and what it refuses to do.
            </p>
            <p className="pattern-body">
              At runtime, each interaction can be thought of as a combination of: (1) <span className="pattern-body--bold">Agent persona</span>—this pattern (the agent&apos;s role, voice, tools, guardrails), (2) <span className="pattern-body--bold">User preferences & context</span>—a separate pattern (who the human is, what they like), and (3) <span className="pattern-body--bold">Task-specific instructions</span>—the immediate ask. This pattern focuses on agent personas.
            </p>
            <ul className="pattern-list">
              <li>Encode what the agent <span className="pattern-body--bold">is good at and what it refuses</span> to do</li>
              <li>Define <span className="pattern-body--bold">tone, level of detail, and preferred outputs</span></li>
              <li>Specify <span className="pattern-body--bold">tools and integrations</span> it may or may not use</li>
              <li>Operate within <span className="pattern-body--bold">org-level safety and compliance constraints</span></li>
            </ul>
            <p className="pattern-body">
              <span className="pattern-body--bold">Example concept:</span> A product analytics platform exposes a gallery of AI agents: &quot;Executive Reporting Analyst,&quot; &quot;Experiment Design Coach,&quot; and &quot;Data QA Auditor.&quot; Each agent card shows its persona summary (&quot;Writes executive-ready briefs with clear recommendations, avoids speculative claims, and calls out data quality risks&quot;). In the chat header, a chip shows &quot;Agent: Executive Reporting Analyst.&quot; Clicking it opens the persona profile: role, tone, risk posture, allowed tools, and limitations.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Agent persona profiles example">
          <PreferencePersonaSettingsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit agent personas, AI-powered products often feel arbitrary and untrustworthy:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unclear roles and boundaries</span> – The same &quot;assistant&quot; seems to do everything and nothing—sometimes brainstorming, sometimes acting as an expert, sometimes refusing unexpectedly.
              </li>
              <li>
                <span className="pattern-body--bold">Inconsistent behavior across surfaces</span> – A &quot;support bot&quot; in chat behaves differently from the &quot;same&quot; bot in email drafting or ticket triage because each surface hard-codes slightly different prompts.
              </li>
              <li>
                <span className="pattern-body--bold">Opaque system prompts</span> – Behavior is encoded in hidden prompts or code, making it impossible for users (and often teams) to understand why an agent responded the way it did.
              </li>
              <li>
                <span className="pattern-body--bold">Difficult to manage multi-agent systems</span> – As more agents are added, their responsibilities overlap, conflict, or drift over time, creating confusion and safety risks.
              </li>
            </ul>
            <p className="pattern-body">
              Agent persona profiles address these issues by treating <span className="pattern-body--bold">the agent&apos;s identity and operating mode as a visible, governed object</span>, not a hidden implementation detail.
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
                  <span className="pattern-body--bold">Multiple agents or a &quot;team of AI agents&quot;</span> – Each agent has distinct roles and responsibilities that need clear definition.
                </li>
                <li>
                  <span className="pattern-body--bold">Agents across channels or surfaces</span> – Web app, email, Slack, Chrome extension—agents must behave consistently.
                </li>
                <li>
                  <span className="pattern-body--bold">Brand, legal, or regulatory standards</span> – Outputs must conform to org-level constraints, and teams need to define and enforce those standards per agent.
                </li>
                <li>
                  <span className="pattern-body--bold">Clear mental models needed</span> – End users need to know &quot;Talk to the Pricing Advisor for pricing questions; talk to the Risk Advisor for regulatory impact.&quot;
                </li>
                <li>
                  <span className="pattern-body--bold">Iterate and govern agent behavior</span> – Product teams want to update agent behavior over time without re-deploying code for every prompt tweak.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>You have <span className="pattern-body--bold">only one very simple agent</span> (e.g., a focused &quot;SQL fix&quot; bot) with a narrow, static behavior.</li>
                <li>The interaction is <span className="pattern-body--bold">low-stakes and purely exploratory</span>, where a generic &quot;assistant&quot; identity is sufficient.</li>
                <li>Agent behavior is fully defined by a <span className="pattern-body--bold">single, highly constrained workflow</span> with little need for differentiation (e.g., a one-shot form filler).</li>
                <li>You&apos;re still <span className="pattern-body--bold">validating whether AI adds value at all</span>; introducing a persona system may be premature complexity.</li>
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
                Agent persona profiles are treated as <span className="pattern-body--bold">first-class objects</span> that define who an agent is and how it should behave.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Agent Gallery / Catalog
              </h3>
              <p className="pattern-card__intro">
                &quot;AI Agents,&quot; &quot;AI Workspace,&quot; or &quot;Agent Library&quot; section listing available agents.
              </p>
              <ul className="pattern-card__list">
                <li>Each card shows name, role summary, risk posture (e.g., &quot;Conservative&quot;), and typical use cases</li>
                <li>Often under &quot;Admin → AI & Automation → Agents&quot; or a dedicated &quot;Agents&quot; section</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">In-Chat Controls</h3>
              <p className="pattern-card__intro">
                Agent indicators and switches within the conversation.
              </p>
              <ul className="pattern-card__list">
                <li>A chip in the header: &quot;Agent: Executive Reporting Analyst&quot;</li>
                <li>A dropdown or switcher for &quot;Change agent&quot; with brief persona descriptions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Configuration Surfaces (Builders/Admins)</h3>
              <p className="pattern-card__intro">
                &quot;Agent configuration&quot; or &quot;Persona designer&quot; surfaces for creating and maintaining agent personas.
              </p>
              <ul className="pattern-card__list">
                <li>Product teams define role, scope, tone, tools, and safety stance</li>
                <li>Preview shows example behavior for typical tasks to validate fit</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative Surfaces</h3>
              <p className="pattern-card__intro">
                Admin pages for org-level agent governance.
              </p>
              <ul className="pattern-card__list">
                <li>Agent lifecycle management (Experimental → Beta → Org-standard → Deprecated)</li>
                <li>Permissions for who can create, edit, or expose agents externally</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Agent Persona Profile</h3>
            <p className="pattern-card__intro">
              The main unit is an <span className="pattern-body--bold">Agent Persona Profile</span>—a structured description of an agent&apos;s role, style, and constraints.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Name / Label</p>
                <ul className="pattern-card__list">
                  <li>&quot;Customer Support Drafting Agent – Cautious&quot;</li>
                  <li>&quot;Marketing Copy Partner&quot;</li>
                  <li>&quot;SRE On-Call Companion&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Role & Mission</p>
                <ul className="pattern-card__list">
                  <li>Short description of what the agent is for and problems it solves</li>
                  <li>Example: &quot;Helps PMs turn analytics into exec-ready narratives with clear recommendations and minimal jargon.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Scope of Responsibility</p>
                <ul className="pattern-card__list">
                  <li>What the agent <em>does</em> (e.g., &quot;Summarizes data,&quot; &quot;Drafts messages&quot;)</li>
                  <li>What it <em>explicitly does not do</em> (e.g., &quot;Does not approve production changes&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Tone, Style & Risk Posture</p>
                <ul className="pattern-card__list">
                  <li>Default tone (formal vs. conversational), level of detail, audience assumptions</li>
                  <li>Risk stance: Conservative, neutral, or exploratory within non-negotiable safety guardrails</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Tooling & Capabilities</p>
                <ul className="pattern-card__list">
                  <li>Which tools, data sources, and APIs the agent can use (and which it must avoid)</li>
                  <li>Preferred formats (code, tables, emails) and default output channels</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Owner (team or role), Scope (Org-wide, workspace, product-specific)</li>
                  <li>Status (Draft, Active, Deprecated), compliance tags</li>
                  <li>Last updated date, last reviewed date</li>
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
                The lifecycle of agent persona profiles spans from initial creation through governance and eventual retirement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Default State</h3>
              <ul className="pattern-card__list">
                <li>Products ship with at least one <span className="pattern-body--bold">baseline agent persona</span> (e.g., &quot;General Product Copilot&quot;) with conservative, safe defaults.</li>
                <li>For enterprise deployments, orgs may replace or constrain the baseline persona with an org-specific one.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Agent Creation / Onboarding</h3>
              <ul className="pattern-card__list">
                <li>Builders or admins use an <span className="pattern-body--bold">agent persona designer</span> to define new agents: role, scope, tone, tools, safety stance.</li>
                <li>A preview shows example behavior for typical tasks to validate fit.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Persona Refinement & Editing</h3>
              <ul className="pattern-card__list">
                <li>Persona profiles can be updated to improve performance: adjust tone, tool usage, or refusal patterns.</li>
                <li>Changes are versioned and auditable, especially in enterprise settings.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Application During Interaction</h3>
              <ul className="pattern-card__list">
                <li>When a user selects an agent (or one is chosen by default), that agent&apos;s persona is applied to every model call.</li>
                <li>The chat UI clearly indicates which agent is active; switching agents is explicit.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Contextual Overrides & Variants</h3>
              <ul className="pattern-card__list">
                <li>Builders can define <span className="pattern-body--bold">persona variants</span> (e.g., &quot;Support Agent – Internal Notes&quot; vs &quot;Support Agent – Customer Replies&quot;).</li>
                <li>Users may temporarily switch agents for a specific task, but the switch is visible and recorded.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Cross-Agent & Cross-Surface Propagation</h3>
              <ul className="pattern-card__list">
                <li>The same agent persona can be used in-product chat, as a sidebar in docs, or as a background workflow.</li>
                <li>Differences per surface (e.g., mobile constraints) are minimal and clearly documented.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Review and Evolution</h3>
              <ul className="pattern-card__list">
                <li>Agents with high usage or high risk are periodically reviewed: &quot;Last persona review: 90 days ago&quot; prompts for evaluation.</li>
                <li>Observed issues (e.g., confusion, unsafe suggestions) feed into persona updates.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Archival and Retirement</h3>
              <ul className="pattern-card__list">
                <li>Agents can be deprecated: hidden from new users but kept for audit.</li>
                <li>Cleanly redirected to newer agents (&quot;This agent has been replaced by…&quot;); retirement is communicated to users who rely on the agent.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Configuration & Persona Builder */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Configuration & persona builder</p>
              <p className="pattern-body pattern-body--narrow">
                The persona builder is primarily a <span className="pattern-body--bold">builder/admin tool</span>. For agent personas, it emphasizes role, mission, tools, and constraints.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Role & Mission</h3>
              <ul className="pattern-card__list">
                <li>&quot;What problem does this agent solve?&quot; and &quot;For whom?&quot;</li>
                <li>Intended users (e.g., PMs, SREs, Sales reps) and typical tasks (e.g., &quot;Summarize incidents,&quot; &quot;Draft customer updates&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tone of Voice & Style</h3>
              <ul className="pattern-card__list">
                <li>Sliders or pickers: Formal ↔ Conversational, Concise ↔ Thorough.</li>
                <li>Structural preferences: &quot;Use bullet lists by default,&quot; &quot;Always lead with TL;DR, followed by detail.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Level of Detail & Audience</h3>
              <ul className="pattern-card__list">
                <li>Presets: &quot;Executive summary only,&quot; &quot;Detailed reasoning with steps,&quot; &quot;Code-focused with comments.&quot;</li>
                <li>Audience: Domain expertise (novice ↔ expert), preferred framing (business outcomes vs. technical specifics).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk Tolerance & Operating Mode</h3>
              <ul className="pattern-card__list">
                <li>&quot;Conservative: prefer citing sources, highlight uncertainty, refuse ambiguous tasks.&quot;</li>
                <li>&quot;Exploratory: generate broader ideas but clearly mark speculation.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tooling & Data Access</h3>
              <ul className="pattern-card__list">
                <li>Which tools the agent can call: &quot;May query production metrics, but only read-only views.&quot;</li>
                <li>Tool usage aggression: &quot;Always check internal knowledge base before answering.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Limitations & Escalation Rules</h3>
              <ul className="pattern-card__list">
                <li>Explicit refusal patterns: &quot;If user asks for production changes, suggest a runbook and involve on-call.&quot;</li>
                <li>Handoffs: &quot;Tag the Security team for review if the request mentions regulated data.&quot;</li>
              </ul>
            </div>
          </div>

          {/* Presets & Templates */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Org-Provided Agent Templates</h3>
              <ul className="pattern-card__list">
                <li>&quot;Customer Support Drafting Agent – Cautious&quot;</li>
                <li>&quot;Marketing Copy Partner – On-brand & Creative&quot;</li>
                <li>&quot;Compliance Reviewer – Highly Conservative&quot;</li>
              </ul>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Activity-Based Templates</h3>
              <ul className="pattern-card__list">
                <li>&quot;Brainstorming agent,&quot; &quot;Red-team critic,&quot; &quot;Documentation refiner,&quot; &quot;Data QA checker.&quot;</li>
                <li>Teams can create variants tuned to their domain (e.g., Developer Tools vs HR Communications).</li>
              </ul>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Dynamic Examples & Previews</h3>
              <ul className="pattern-card__list">
                <li>Sample tasks for the agent&apos;s expected use cases with live preview of responses.</li>
                <li>Side-by-side previews for different agents to highlight differences.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integration with AI Ecosystem */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Integration with the AI ecosystem</p>
              <p className="pattern-body pattern-body--narrow">
                Agent personas live inside a larger configuration stack and interact with other patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Application Scope & Inheritance</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Org-level policies:</span> Non-editable constraints, mandatory disclaimers, restrictions on tools, data sources, and risk domains.</li>
                <li><span className="pattern-body--bold">Agent persona:</span> Defines the agent&apos;s role, tone, tools, and operating mode within org constraints.</li>
                <li><span className="pattern-body--bold">User preferences (separate pattern):</span> Adjusts things like preferred language, level of detail, and personal goals.</li>
                <li><span className="pattern-body--bold">Task-level instructions:</span> The immediate user request or conversation context.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Precedence Rule (Example)</h3>
              <ul className="pattern-card__list">
                <li>Org policies → Agent persona → User preferences → Task instructions.</li>
                <li>The UI should hint at that layering without overwhelming users.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Interactions with Other Patterns</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">User Preference Profiles (separate pattern):</span> Agent persona defines &quot;who the agent is&quot;; user profile defines &quot;who you are.&quot;</li>
                <li><span className="pattern-body--bold">Memory Controls:</span> Agent personas should not be conflated with long-term memory—persona is stable and inspectable separately.</li>
                <li><span className="pattern-body--bold">Safety & Guardrails:</span> Personas must operate within hard safety constraints. Risk tolerance is local nuance, not a way to disable safety.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent & Multi-Channel</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Multi-agent orchestration:</span> Orchestrators select agents based on persona metadata; each agent&apos;s persona is logged when it contributes.</li>
                <li><span className="pattern-body--bold">Channels:</span> The same persona should behave similarly across surfaces; if channel constraints force differences, document them clearly.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maintenance, Governance & Feedback */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Maintenance, governance & feedback</p>
              <p className="pattern-body pattern-body--narrow">
                Even though personas are agent-centric, users should still be able to comment on persona fit.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">User-Facing Feedback Loops</h3>
              <ul className="pattern-card__list">
                <li>Per-response microfeedback: &quot;Did this match what you expect from the &apos;Executive Reporting Analyst&apos; agent?&quot;</li>
                <li>Persona-aware re-run: &quot;Try this with the &apos;Data QA Auditor&apos; agent instead.&quot;</li>
                <li>These signals feed into persona tuning or prompt for a different agent selection.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin & Org Controls</h3>
              <ul className="pattern-card__list">
                <li>Permissions: Who can create, edit, or mark agents as &quot;Org-approved&quot; or &quot;Experimental.&quot;</li>
                <li>Audit & versioning: Track persona changes over time; log which version produced which outputs.</li>
                <li>Policy integration: Automated checks on persona descriptions for prohibited framing.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Evolution Over Time</h3>
              <ul className="pattern-card__list">
                <li>Lifecycle management: Move agents from Experimental → Beta → Org-standard → Deprecated.</li>
                <li>Track usage per agent, satisfaction and override rates, error or escalation rates by persona.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transparency & Control Indicators */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Transparency & control indicators</p>
              <p className="pattern-body pattern-body--narrow">
                How to surface active agent status and provide user control.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Active Agent Chip</h3>
              <ul className="pattern-card__list">
                <li>Display the active agent and persona summary near the conversation title: &quot;Agent: Exec Reporting Analyst · Conservative risk.&quot;</li>
                <li>Clicking opens key fields: role, scope, limitations, last reviewed date.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Explanations for Agent Changes</h3>
              <ul className="pattern-card__list">
                <li>When an agent is switched or retired, show inline notes: &quot;Switched to &apos;Data QA Auditor&apos; for this conversation.&quot;</li>
                <li>&quot;This agent has been replaced by &apos;Compliance Reviewer&apos; for regulatory reasons.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Responsibility Hints</h3>
              <ul className="pattern-card__list">
                <li>Short reminders at the top of new conversations: &quot;This agent helps you explain dashboards to executives. It does not edit production data.&quot;</li>
                <li>Clear boundary-setting builds trust that the agent has a stable contract.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separation from User Preferences</h3>
              <ul className="pattern-card__list">
                <li>Clearly distinguish: &quot;Agent persona: Exec Reporting Analyst&quot; vs. &quot;Your profile: Prefers concise answers, EN-US.&quot;</li>
                <li>This distinction builds trust that the agent has its own stable contract, not just a fuzzy personalization layer.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How agent persona profiles apply across different organizational contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Organizational AI &quot;Agent Gallery&quot;</h3>
              <p className="pattern-card__intro">SaaS Platform</p>
              <ul className="pattern-card__list">
                <li>Gallery of pre-configured agents: &quot;Customer Email Drafter – Empathetic & Cautious,&quot; &quot;Release Notes Summarizer – Data-forward & Neutral,&quot; &quot;Risk & Compliance Reviewer – Highly Conservative.&quot;</li>
                <li>Each persona is owned by a specific team (Support, Product, Legal).</li>
                <li>Org can confidently expose certain agents externally while keeping others internal-only.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Incident Management Companion Agents</h3>
              <p className="pattern-card__intro">Observability Platform</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">&quot;Incident Scribe&quot;</span> – Focused on chronological summaries, neutral tone, detailed steps.</li>
                <li><span className="pattern-body--bold">&quot;Exec Incident Briefing Agent&quot;</span> – Creates short, non-technical incident summaries for leadership.</li>
                <li><span className="pattern-body--bold">&quot;Postmortem Drafting Agent&quot;</span> – Helps write detailed retros with standardized structure.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Multi-Agent Document Workflow</h3>
              <p className="pattern-card__intro">Document Authoring Tool</p>
              <ul className="pattern-card__list">
                <li>A <span className="pattern-body--bold">Brainstorming Agent</span> helps authors explore ideas, explicitly marked as speculative.</li>
                <li>A <span className="pattern-body--bold">Fact-Checking Agent</span> runs after drafting, focused on cautious verification and citation.</li>
                <li>A <span className="pattern-body--bold">Compliance Agent</span> runs before external publishing, with a strict persona governed by Legal.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Customer-Facing Support Copilot</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">&quot;Customer Reply Drafting Agent&quot;</span> – Empathetic, precise, never overpromises, follows brand tone, external-facing.</li>
                <li><span className="pattern-body--bold">&quot;Internal Notes Agent&quot;</span> – More informal, shorthand allowed, focuses on summarizing for teammates.</li>
                <li>Both share underlying models but differ meaningfully in persona and allowed output styles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Compliance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & compliance</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for handling agent persona configuration responsibly.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Separation from User Data</h3>
              <ul className="pattern-card__list">
                <li>Store agent persona configuration separately from user-specific content or identity.</li>
                <li>Avoid encoding sensitive data directly into personas; reference data sources instead.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Access Control</h3>
              <ul className="pattern-card__list">
                <li>Limit who can view or edit agent personas, especially in regulated environments.</li>
                <li>Distinguish internal-only personas from those exposed to external customers.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Retention & Auditability</h3>
              <ul className="pattern-card__list">
                <li>Log which persona version produced given outputs for high-risk domains.</li>
                <li>Keep a version history without storing unnecessary user content in persona definitions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regulatory Alignment</h3>
              <ul className="pattern-card__list">
                <li>Ensure persona descriptions do not conflict with regulatory requirements.</li>
                <li>Avoid implying investment advice, legal advice, or medical diagnosis capabilities where prohibited.</li>
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
                Certain implementations of agent persona profiles can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Persona Sprawl</h3>
                  <p className="antipattern-subtitle">Too many overlapping agents confuse users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Too many overlapping agents (&quot;Writer – 1,&quot; &quot;Writer – 2&quot;) confuse users and dilute trust. Users cannot tell which agent to use.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Favor fewer, clearly differentiated agents with distinct roles and responsibilities.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Misleading Names</h3>
                  <p className="antipattern-subtitle">Names like &quot;Legal Expert&quot; or &quot;Doctor&quot; overstate capabilities.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Names that imply professional credentials or guarantees can mislead users and expose the organization to liability.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Prefer accurate, scoped labels like &quot;Legal Content Reviewer&quot; or &quot;Health Information Explainer.&quot;</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Behavior Changes</h3>
                  <p className="antipattern-subtitle">Updating personas silently without surfacing changes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Updating personas silently without surfacing that behavior might change confuses users. Material changes should be communicated.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Communicate material changes and, in some cases, version personas per-workspace.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overloading a Single Agent</h3>
                  <p className="antipattern-subtitle">One agent that tries to do everything becomes unpredictable.</p>
                </div>
              </div>
              <p className="antipattern-description">
                One agent that tries to do everything (brainstorming, compliance, QA, drafting) becomes unpredictable and hard to trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Break it into multiple personas with clear scopes and handoff rules.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Using Risk Posture as a Safety Bypass</h3>
                  <p className="antipattern-subtitle">&quot;High-risk&quot; settings must not override baseline safety.</p>
                </div>
              </div>
              <p className="antipattern-description">
                &quot;High-risk&quot; settings must not override baseline safety and compliance guardrails. Risk posture is about style (exploratory vs cautious), not permission to be unsafe.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Risk posture operates within non-negotiable safety constraints—style, not permission.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for UX, product, and engineering teams.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">UX & Product</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Make agents first-class concepts:</span> Use consistent naming and visual treatments for agent personas in galleries, chat headers, and configuration surfaces.</li>
                <li><span className="pattern-body--bold">Provide clear positioning:</span> Let users quickly answer &quot;Which agent should I use for this task?&quot; and &quot;What does this agent do and not do?&quot;</li>
                <li><span className="pattern-body--bold">Start with a small set:</span> Better to have a few high-quality, trustworthy agents than a large gallery of slightly different ones.</li>
                <li><span className="pattern-body--bold">Support graceful switching:</span> Make it easy to switch agents mid-conversation, with a clear record of which agent produced which messages.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engineering & System Design</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Treat personas as structured configuration:</span> JSON or similar schema for role, tone, tools, risk posture, and constraints. Map to prompt templates and tool access policies.</li>
                <li><span className="pattern-body--bold">Support versioning and rollout strategies:</span> Blue/green or phased rollout of persona updates. Pin users/workspaces to specific versions for stability.</li>
                <li><span className="pattern-body--bold">Log persona identifiers with interactions:</span> Enable analysis of behavior and trust metrics by persona and version. Avoid logging sensitive prompt contents.</li>
                <li><span className="pattern-body--bold">Design for multi-tenancy:</span> Isolate personas per tenant when needed; allow shared base templates with per-tenant overrides.</li>
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
                To assess the effectiveness of Agent Persona Profiles as a trust-building pattern, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Usage</h3>
              <ul className="pattern-card__list">
                <li>How many users actively choose specific agents instead of a generic default?</li>
                <li>Distribution of tasks by agent—are specialized agents being used appropriately?</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Success & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Task completion and satisfaction scores segmented by agent persona.</li>
                <li>&quot;Did this agent behave as described?&quot; feedback.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Friction & Confusion</h3>
              <ul className="pattern-card__list">
                <li>Frequency of agent switching mid-task (healthy when intentional, problematic if users are hunting for a working agent).</li>
                <li>Support tickets or complaints mentioning &quot;wrong agent&quot; behavior.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety & Compliance</h3>
              <ul className="pattern-card__list">
                <li>Incidents or escalations linked to specific personas.</li>
                <li>False-positive and false-negative rates for refusal behavior by persona.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist for teams</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Entry & Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are agent personas defined as explicit, structured profiles—not just hidden prompts?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there an agent gallery or other clear entry point where users can see available agents and their roles?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the active agent always visible in the UI, with an easy way to inspect its persona?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Scope & Responsibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each agent persona have a crisp, understandable scope of responsibility and clear limitations?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are tone, level of detail, risk posture, and tools captured in a structured way?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Versioning</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can teams safely iterate on personas with versioning, staging, and rollback?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are agent persona changes auditable, especially for regulated or high-risk use cases?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Separation & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are personas clearly distinguished from user preferences and long-term memory?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are safety and compliance guardrails enforced independently of persona risk posture?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Related patterns</p>
          </div>
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">8.x User Preference & Context Profiles</h3>
              <p className="pattern-card__intro">
                Capturing &quot;who the user is&quot; (role, goals, preferences) to combine with agent personas at runtime.
              </p>
            </div>
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">8.1 Memory Controls & History Management</h3>
              <p className="pattern-card__intro">
                Managing what the AI remembers about specific workstreams and past interactions.
              </p>
            </div>
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">4.x Structured Clarification & Task Scoping</h3>
              <p className="pattern-card__intro">
                Ensuring tasks are framed clearly for a given agent persona.
              </p>
            </div>
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">3.x AI Onboarding & First-Run Education</h3>
              <p className="pattern-card__intro">
                Introducing users to the agent gallery and helping them choose the right agent.
              </p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
