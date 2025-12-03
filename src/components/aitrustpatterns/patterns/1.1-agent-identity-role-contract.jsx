import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import AgentIdentityDemo from '../demos/AgentIdentityDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const AGENT_IDENTITY_SEO = {
  title: "Agent Identity & Role Contract - AI Trust Pattern",
  description: "Learn how to make an AI agent's role, authority, and boundaries explicit so people know what to trust it with. A proven UX pattern for building trust in agentic AI applications.",
  keywords: ["AI agent identity", "role contract", "agent permissions", "AI trust", "agent boundaries", "AI capabilities", "agent authority", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/agent-identity-role-contract"
};

export default function AgentIdentityRoleContractPattern() {
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
            <span className="pattern-header__index">1.1</span>
            <div>
              <h1 className="pattern-header__title">Agent Identity & Role Contract</h1>
              <p className="pattern-header__subtitle">
                An explicit, always-available &quot;role contract&quot; that tells users who the AI agent is, what it can and can&apos;t do, and what it has access to—so expectations, safety, and trust stay aligned.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="1.1" patternTitle="Agent Identity & Role Contract" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Agentic AI in products does not just answer questions—it acts: editing records, sending messages, orchestrating workflows, and making recommendations that impact money, customers, or employees.
            </p>
            <p className="pattern-body">
              Users rapidly form mental models and even &quot;relationships&quot; with these agents, especially in conversational or avatar-based experiences. Misunderstandings about what an agent is and what it can do are a central source of frustration and mistrust.
            </p>
            <p className="pattern-body">
              The <span className="pattern-body--bold">Agent Identity & Role Contract</span> pattern makes that relationship explicit. It bundles:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Who</span> the agent is (identity, domain, role)</li>
              <li><span className="pattern-body--bold">What it is responsible for</span> (capabilities)</li>
              <li><span className="pattern-body--bold">What it will never do</span> (limits and guardrails)</li>
              <li><span className="pattern-body--bold">What it is connected to</span> (data sources, tools, environments)</li>
              <li><span className="pattern-body--bold">How oversight works</span> (draft vs. live actions, approvals, logging)</li>
            </ul>
            <p className="pattern-body">
              This information is exposed as a consistent UI surface: an agent header or card that is always present where the agent appears, plus a deeper &quot;Role & access&quot; or &quot;What I can do&quot; panel.
            </p>
            <p className="pattern-body">
              The pattern is particularly important in B2B/B2C web applications where agents touch production data (CRMs, finance tools, HR platforms, security systems) and where governance and accountability requirements are strict or evolving.
            </p>
          </div>
        </section>

        {/* Agent Identity Demo Example */}
        <section aria-label="Agent identity example">
          <AgentIdentityDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without an explicit role contract, AI agents introduce invisible risk and visible confusion:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Misaligned expectations and trust breakdowns</span> – Users import assumptions from marketing, prior tools, or anthropomorphic design cues (&quot;It has access to everything&quot;; &quot;It&apos;s basically a human rep&quot;). When those expectations are violated, trust erodes quickly.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear data and tool access</span> – Many agentic systems connect to core business platforms (CRM, billing, messaging, analytics). If users cannot see which systems are connected and with what scopes, they may overshare sensitive information or accidentally approve high-risk actions.
              </li>
              <li>
                <span className="pattern-body--bold">Ambiguous accountability and unsafe reliance</span> – When it is not obvious whether the agent is &quot;just suggesting&quot; or actually executing changes, people either over-trust (blindly approving actions) or under-trust (ignoring useful automation).
              </li>
            </ul>
            <p className="pattern-body">
              A clear Agent Identity & Role Contract addresses these issues by making the relationship between user, agent, and system explicit and testable.
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
                  <span className="pattern-body--bold">The agent can act on the user&apos;s behalf</span> – updating CRM records, creating tasks/tickets, drafting and sending emails, triggering automations.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent touches production or regulated data</span> – customer PII, financial transactions, HR records, security configurations.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent appears in multiple product surfaces</span> – global sidebar, inline in tables, confirmation modals, admin consoles.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent&apos;s role or powers can change over time</span> – new tools connected, scopes changed, capabilities graduated.
                </li>
                <li>
                  <span className="pattern-body--bold">Governance and auditability matter</span> – security, compliance, or customer stakeholders need inspectable descriptions.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI is a <span className="pattern-body--bold">narrow, obvious feature</span>—not a &quot;teammate&quot; or &quot;agent&quot; (e.g., ranking, smart filters, &quot;improve writing&quot; controls).</li>
                <li>The feature is <span className="pattern-body--bold">read-only and low-risk</span> (e.g., &quot;summarize this article&quot;, &quot;explain this metric&quot;, &quot;suggest tags&quot;).</li>
                <li>The <span className="pattern-body--bold">context itself strictly constrains behavior</span> – a small inline affordance with clear copy may suffice.</li>
                <li><span className="pattern-body--bold">Internal prototypes</span> that never touch real users or real data.</li>
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
                At a high level, this pattern is an always-available contract UI for the agent: a compact agent header/card that is visible in every interaction, plus a Role & Access panel with structured details.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Agent Header / Card
              </h3>
              <p className="pattern-card__intro">
                Pinned at the top of chat interfaces, side panels, or agent-powered task views.
              </p>
              <ul className="pattern-card__list">
                <li>Agent name</li>
                <li>Avatar or icon (distinct from human avatars)</li>
                <li>Short role tagline</li>
                <li>A &quot;Role & access&quot; / &quot;What I can do&quot; link</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Inline Agent Chips</h3>
              <p className="pattern-card__intro">
                Instances where the agent proposes actions.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Ask Revenue Ops Agent to clean this account&quot;</li>
                <li>&quot;Let AI plan this sprint&quot;</li>
                <li>Hover or click reveals a popover with contract snippets</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Permissions Surfaces</h3>
              <p className="pattern-card__intro">
                Toasts, banners, or modals that include contract-derived statements.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;This agent can update lead fields but cannot delete records.&quot;</li>
                <li>&quot;This agent will draft an email and ask you to send it.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Org Settings</h3>
              <p className="pattern-card__intro">
                Admin pages listing all agents in the workspace.
              </p>
              <ul className="pattern-card__list">
                <li>Compact version of each role contract</li>
                <li>Controls to adjust scopes or deactivate agents</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Role Contract Section</h3>
            <p className="pattern-card__intro">
              The key repeated unit is a self-contained, testable statement about one aspect of the agent. Each section typically includes:
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Who I am&quot;</li>
                  <li>&quot;What I can do&quot;</li>
                  <li>&quot;What I will not do&quot;</li>
                  <li>&quot;Connected tools&quot;</li>
                  <li>&quot;Data I can access&quot;</li>
                  <li>&quot;Approvals & oversight&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description Examples</p>
                <ul className="pattern-card__list">
                  <li><em>Identity:</em> &quot;I help clean CRM data and propose SDR cadences.&quot;</li>
                  <li><em>Capabilities:</em> &quot;I can create, update, and merge contacts in Salesforce.&quot;</li>
                  <li><em>Limits:</em> &quot;I cannot delete records.&quot; &quot;I will not send emails without approval.&quot;</li>
                  <li><em>Data & tools:</em> &quot;Connected to: Salesforce (read/write), Outreach (draft-only).&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Inline actions:</span> Enable/disable capabilities, &quot;Request more access&quot;, &quot;View audit log&quot;</li>
                  <li><span className="pattern-body--bold">Risk level:</span> &quot;Draft-only&quot;, &quot;Requires approval&quot;, &quot;Can execute changes&quot;</li>
                  <li><span className="pattern-body--bold">Status:</span> &quot;Beta&quot;, &quot;Experimental&quot;, &quot;Generally available&quot;</li>
                  <li><span className="pattern-body--bold">Ownership:</span> &quot;Configured by Revenue Ops Admin – 3 days ago&quot;</li>
                  <li><span className="pattern-body--bold">Environment:</span> &quot;Sandbox only&quot; vs. &quot;Production&quot;</li>
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
                How the role contract surfaces at different moments in the user&apos;s journey with the agent.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Introduction</h3>
              <ul className="pattern-card__list">
                <li>On first exposure, show an introduction card with agent name, avatar, and one-line role description.</li>
                <li>Two short lists: &quot;Trusted for&quot; and &quot;Will not do&quot;.</li>
                <li>Primary action opens the full Role & Access panel.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Permission Grant</h3>
              <ul className="pattern-card__list">
                <li>When connecting to external tools, show a permission dialog listing each system and exact operations.</li>
                <li>Explicitly call out high-risk scopes (delete, send, approve).</li>
                <li>Generate the role contract from these scopes.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Normal Operation</h3>
              <ul className="pattern-card__list">
                <li>Agent header remains visible and consistent.</li>
                <li>Users can access Role & Access panel at any time.</li>
                <li>Agent&apos;s messages refer back to contract when relevant.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Boundary Handling</h3>
              <ul className="pattern-card__list">
                <li>When users ask for something outside the contract, state the limitation clearly.</li>
                <li>Offer a safe alternative: &quot;I can identify risky records and prepare a list for you to review.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Capability Changes</h3>
              <ul className="pattern-card__list">
                <li>When the agent gains or loses capabilities, update the role contract.</li>
                <li>Show a banner summarizing the diff: &quot;New: Ops Agent can now send emails after your review.&quot;</li>
                <li>High-risk changes may require explicit confirmation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Incident & Audit</h3>
              <ul className="pattern-card__list">
                <li>Role & Access panel exposes recent actions with links to full audit log.</li>
                <li>Possible to verify whether agent acted inside its stated contract.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Revocation & Offboarding</h3>
            <ul className="pattern-card__list">
              <li>From the contract panel or workspace settings, users or admins can revoke specific scopes or disconnect tools entirely.</li>
              <li>After revocation, the contract and header update to reflect reduced capabilities.</li>
              <li>The agent gracefully explains limitations in subsequent interactions: &quot;I can no longer update CRM data because Salesforce access was revoked.&quot;</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of the contract should be concrete, testable, and scoped—not marketing fluff.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;I&apos;m an AI agent that helps clean CRM data and propose SDR cadences.&quot;</li>
                  <li>&quot;I can: analyze, compare, and propose updates to your pipeline.&quot;</li>
                  <li>&quot;I can&apos;t: approve contracts or modify billing settings.&quot;</li>
                  <li>&quot;I will not: send external messages or delete data without explicit approval.&quot;</li>
                  <li>&quot;Connected to: Salesforce (read/write), Outreach (draft-only), HubSpot (read-only).&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;I can help with anything you need.&quot;</li>
                  <li>&quot;I&apos;m always accurate.&quot; (vague, untestable)</li>
                  <li>&quot;Uses your tools and data.&quot; (without naming them)</li>
                  <li>&quot;I&apos;m your AI copilot.&quot; (without describing domain or authority)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Always Disclose AI</h3>
                <ul className="pattern-card__list">
                  <li>Use phrasing like &quot;I&apos;m an AI agent that helps with…&quot;</li>
                  <li>Never imply a human operator</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Guardrails as Features</h3>
                <ul className="pattern-card__list">
                  <li>Elevate safety language: &quot;All external emails require your approval.&quot;</li>
                  <li>&quot;High-impact changes require admin review.&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Anthropomorphism
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Moderate anthropomorphic cues (name, avatar, conversational tone) can make agents feel more approachable.</li>
                  <li>But advanced agents can become manipulative if anthropomorphism is not balanced with clear limits.</li>
                  <li>Avoid implying genuine emotion or consciousness (&quot;I care deeply about your customers&quot;)—focus on function and constraints.</li>
                  <li>Be upfront about limitations: &quot;I may be wrong. You should review changes before applying them.&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & Visual Details */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & visual details</p>
              <p className="pattern-body pattern-body--narrow">
                Design considerations for implementing the pattern across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Persistent Header</h3>
              <ul className="pattern-card__list">
                <li>Located at top of chat or side panel</li>
                <li>Avatar/icon distinct from human avatars</li>
                <li>Agent name and succinct role line</li>
                <li>Quick summary of mode (&quot;Draft-only&quot;, &quot;Can execute&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Progressive Disclosure</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Surface UI:</span> Simple, scannable summary</li>
                <li><span className="pattern-body--bold">Panel:</span> Tab layout for Overview, Capabilities, Limits, Data & tools, Logs, Settings</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk Communication</h3>
              <ul className="pattern-card__list">
                <li>Use consistent, non-alarming indicators</li>
                <li>Text tags: &quot;Draft&quot;, &quot;Needs approval&quot;, &quot;Executes changes&quot;</li>
                <li>Differentiate modes without red-alert aesthetics</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Responsive Behavior</h3>
              <ul className="pattern-card__list">
                <li>On smaller viewports, collapse header to compact bar or &quot;agent chip&quot;</li>
                <li>&quot;Ops Agent · Draft-only · Role & access&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Consistency</h3>
              <ul className="pattern-card__list">
                <li>Agent&apos;s visual identity remains consistent across chat, inline suggestions, notifications, and admin screens</li>
                <li>Consistent across different products in a suite</li>
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
                Technical considerations for building this pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data & Permissions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Generate the contract from real permissions</span> – Use structured permissions (scopes, RBAC, tool configs) as the single source of truth.</li>
                <li><span className="pattern-body--bold">Model capabilities as structured config</span> – Track system name, resources, allowed/denied operations, environment. This drives backend enforcement, agent planning, and UI copy.</li>
                <li><span className="pattern-body--bold">Align with AI transparency practices</span> – Treat the role contract as a user-friendly front-end to model/system documentation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-tenant & Admin</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Org-level defaults, team-level constraints</span> – Org admins define defaults; teams can add tighter constraints per region or business line.</li>
                <li><span className="pattern-body--bold">Versioning and change management</span> – Maintain version numbers and change logs. Trigger in-product notifications when versions introduce new powers.</li>
                <li><span className="pattern-body--bold">Auditability</span> – Store who granted permissions, when, and which config version applied to each action. Provide exportable views for compliance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate and design for these potential issues.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Contract Drift vs. Reality</h3>
              <p className="pattern-card__intro">
                The contract says &quot;cannot delete records&quot; but a new integration enables deletion.
              </p>
              <ul className="pattern-card__list">
                <li>Derive contract copy from permissions</li>
                <li>Run automated checks comparing current config with rendered contract before deployment</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Technical Failure as Policy</h3>
              <p className="pattern-card__intro">
                The agent says &quot;I can&apos;t access Salesforce&quot; when the real issue is a temporary outage.
              </p>
              <ul className="pattern-card__list">
                <li>Separate &quot;not allowed&quot; (policy) from &quot;currently unable&quot; (incident)</li>
                <li>Keep the contract focused on policy; show transient errors separately</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Different Users, Different Powers</h3>
              <p className="pattern-card__intro">
                Contract appears global but access differs per user role or workspace.
              </p>
              <ul className="pattern-card__list">
                <li>Make it clear when statements are per-user (&quot;In your account, this agent can…&quot;)</li>
                <li>Provide admins with an org-wide view</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">High-Stakes Domains</h3>
              <p className="pattern-card__intro">
                Misinterpretation of agent outputs as professional advice (health, legal, financial).
              </p>
              <ul className="pattern-card__list">
                <li>Use stronger, legally reviewed limits (&quot;Not a medical device&quot;, &quot;Not a legal opinion&quot;)</li>
                <li>Ensure outputs are clearly framed as informational or draft-only</li>
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
                Avoid these patterns that undermine trust and safety.
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
                  <h3 className="antipattern-title">Mystery Agent</h3>
                  <p className="antipattern-subtitle">No name, no role, no visible permissions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Just an &quot;Ask AI&quot; button that sometimes edits data or sends messages with no explanation of what it can do.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide a clear identity, role description, and accessible permissions view.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Masquerading as Human</h3>
                  <p className="antipattern-subtitle">The agent presents itself as a human representative.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users discover the deception only later. This kind of expectation violation is consistently linked to trust damage and negative sentiment.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always disclose that it is AI from the first interaction.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hand-Wavy Disclaimers</h3>
                  <p className="antipattern-subtitle">Tiny footnotes instead of clear, actionable limits.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Generic text like &quot;AI may be inaccurate&quot; instead of specific limits like &quot;I can&apos;t change billing details.&quot;
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make statements specific and testable. Describe actual boundaries, not vague warnings.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Cute Persona for Serious Power</h3>
                  <p className="antipattern-subtitle">Highly anthropomorphic mascots in systems that can move money or affect employment.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Anthropomorphic cues increase trust and compliance, which can be dangerous without robust guardrails and clarity about what the agent can actually do.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Personality is fine as a thin layer. Underneath, keep a crisp, factual description of powers and limits.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Examples</p>
              <p className="pattern-body pattern-body--narrow">
                B2B / B2C web application scenarios showing the pattern in practice.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Revenue Ops Agent</h3>
              <p className="pattern-card__intro">Sales Platform (B2B)</p>
              <p className="pattern-card__label">Trusted for</p>
              <ul className="pattern-card__list">
                <li>Creating and updating leads/contacts in Salesforce</li>
                <li>Identifying and merging duplicates (with review)</li>
                <li>Drafting outreach sequences and tasks</li>
              </ul>
              <p className="pattern-card__label">Will not do</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Delete any records</li>
                <li>Send emails without approval</li>
                <li>Change opportunity stages or quotas</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security Posture Agent</h3>
              <p className="pattern-card__intro">SaaS Security Platform (B2B)</p>
              <p className="pattern-card__label">Trusted for</p>
              <ul className="pattern-card__list">
                <li>Scanning connected apps for risky configurations</li>
                <li>Drafting remediation tickets</li>
                <li>Prioritizing issues based on severity</li>
              </ul>
              <p className="pattern-card__label">Will not do</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Change security settings automatically</li>
                <li>Grant or revoke access rights</li>
                <li>Approve exceptions or policy changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Campaign Co-Pilot</h3>
              <p className="pattern-card__intro">Marketing Platform (SMB / B2C)</p>
              <p className="pattern-card__label">Trusted for</p>
              <ul className="pattern-card__list">
                <li>Drafting email and SMS copy</li>
                <li>Suggesting send times and audience segments</li>
                <li>Summarizing campaign performance</li>
              </ul>
              <p className="pattern-card__label">Will not do</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Launch campaigns</li>
                <li>Change billing or pricing settings</li>
                <li>Upload new contact lists</li>
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
                Instrument the pattern to understand whether it actually improves clarity and trust.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Contract Engagement</h3>
              <ul className="pattern-card__list">
                <li>Percentage of users who open the Role & Access panel at least once</li>
                <li>Frequency of views around key events (first use, new permission grant, incidents)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Boundary Metrics</h3>
              <ul className="pattern-card__list">
                <li>Count and categories of out-of-scope requests (&quot;I&apos;m not allowed to do that&quot;)</li>
                <li>Common misunderstandings to feed back into copy or training data</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident Correlation</h3>
              <ul className="pattern-card__list">
                <li>Whether user complaints or risky behavior correlate with unclear or outdated contract copy</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Perceived Clarity & Trust</h3>
              <ul className="pattern-card__list">
                <li>&quot;How clear is it what this agent can and cannot do?&quot;</li>
                <li>&quot;Has this agent done anything that surprised you?&quot;</li>
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
              <p className="pattern-checklist-category__title">Identity & Role</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can a first-time user answer, from the header alone: Who this agent is? What domain it operates in? Whether it is AI vs. human?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Capabilities & Limits</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are &quot;Trusted for / Will not do&quot; statements specific, concrete, and testable?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are they consistent with the actual permissions and backend constraints?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Data & Tools</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear which systems the agent connects to and what types of data it can read/modify?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear whether the agent operates in sandbox vs. production?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Oversight</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it obvious when the agent is drafting vs. executing?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear what requires user approval or admin review?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Lifecycle & Change</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When the agent&apos;s powers change, is that reflected in the contract and communicated with a clear diff?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can admins view all agents and their contracts in one place?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can admins adjust scopes/modes and access logs and version history for audits?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
