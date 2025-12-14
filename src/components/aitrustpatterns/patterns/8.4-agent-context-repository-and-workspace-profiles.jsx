import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import AgentContextRepositoryDemo from '../demos/AgentContextRepositoryDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const AGENT_CONTEXT_REPOSITORY_SEO = {
  title: "Agent Context Repository & Workspace Profiles - AI Trust Pattern",
  description: "A centralized, governed workspace context store that gives agents shared, non-personal knowledge—brand, policy, goals, and project briefs—so behavior is consistent and explainable across users, agents, and sessions.",
  keywords: ["AI context", "workspace profiles", "AI memory", "AI personalization", "AI trust", "context management", "agentic UX", "AI governance", "brand guidelines", "policy enforcement"],
  canonicalPath: "/agentic_ai_patterns/context-repository-profile-store"
};


export default function AgentContextRepositoryPattern() {
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
            <span className="pattern-header__index">8.4</span>
            <div>
              <h1 className="pattern-header__title">Agent Context Repository & Workspace Profiles</h1>
              <p className="pattern-header__subtitle">
                A centralized, governed workspace context store that gives agents shared, non-personal knowledge—brand, policy, goals, and project briefs—so behavior is consistent and explainable across users, agents, and sessions.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.4" patternTitle="Agent Context Repository & Workspace Profiles" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Agentic AI systems quickly become unreliable when each agent or conversation carries its own private stack of &quot;secret instructions.&quot; The same organization can end up with slightly different voices, conflicting policies, and inconsistent outputs depending on which assistant, project, or channel is involved.
            </p>
            <p className="pattern-body">
              The Agent Context Repository & Workspace Profiles pattern addresses this by introducing a <span className="pattern-body--bold">shared, governed context layer</span> at the workspace or project level. Instead of burying brand guidelines, policies, and project briefs inside prompts, the product exposes them as structured, inspectable objects that:
            </p>
            <ul className="pattern-list">
              <li>Are <span className="pattern-body--bold">scoped</span> (workspace / project / region)</li>
              <li>Are <span className="pattern-body--bold">reused</span> across agents and tools</li>
              <li>Are <span className="pattern-body--bold">visible and explainable</span> at the moment an agent acts</li>
            </ul>
            <p className="pattern-body">
              This pattern builds trust by making it clear <span className="pattern-body--bold">what the AI is grounded on</span>, who owns that context, and how to update or revoke it.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/8.4 agent context repo.png"
              alt="Agent Context Repository & Workspace Profiles pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This scenario demonstrates how workspace context items shape agent behavior in real time. The left panel shows three shared context items: brand voice guidelines, privacy policies, and project-specific details. Type a message (or use the pre-filled example) and click "Send" to see how the agent generates a response. Notice how the agent's reply includes context chips that attribute specific facts and tone to workspace rules. Try unchecking context items before sending to see how the agent's output changes when Brand, Policy, or Project context is removed—the response becomes generic, formal, or lacks specific details.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Agent Context Repository interactive demo">
            <AgentContextRepositoryDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a shared agent context repository, AI-powered workflows typically suffer from:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Prompt sprawl and drift</span> – Each team, agent, or power user maintains its own prompt instructions and reference documents. Edits propagate slowly, and wording diverges over time, leading to inconsistent tone and policy behavior across surfaces.
              </li>
              <li>
                <span className="pattern-body--bold">Repetition and context friction</span> – Users repeatedly restate the same workspace-level facts (&quot;Our fiscal year starts in July&quot;, &quot;Call this product &apos;Workspace&apos; not &apos;Suite&apos;&quot;) in each conversation or agent configuration.
              </li>
              <li>
                <span className="pattern-body--bold">Hidden rules and low explainability</span> – Critical constraints—such as redaction rules, compliance requirements, or brand pillars—are often buried in system prompts or embedding stores. When an agent behaves unexpectedly, it is difficult to see which assumptions or documents influenced the output.
              </li>
              <li>
                <span className="pattern-body--bold">Risky, ad hoc &quot;memory&quot;</span> – Teams may upload entire decks or policy PDFs directly into long-term stores without scoping, sanitization, or retention rules, creating exposure and compliance risk.
              </li>
              <li>
                <span className="pattern-body--bold">Poor alignment across agents and tools</span> – A support drafting agent, a marketing copy agent, and a project-planning agent may all operate on slightly different versions of the same reality—different taglines, goals, or definitions of &quot;priority customer.&quot;
              </li>
            </ul>
            <p className="pattern-body">
              A dedicated, governed context repository and workspace profile model resolves these issues by promoting workspace context to a <span className="pattern-body--bold">first-class, shareable, inspectable object</span> in the product.
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
                  When multiple <span className="pattern-body--bold">agents, workflows, or channels</span> must share the same brand voice, policies, or project brief.
                </li>
                <li>
                  When responses must <span className="pattern-body--bold">enforce legal, compliance, or operational rules</span> at scale, and those rules evolve over time.
                </li>
                <li>
                  When organizations need <span className="pattern-body--bold">auditable, admin-controlled context</span> that can be inspected, versioned, and rolled back.
                </li>
                <li>
                  When projects span <span className="pattern-body--bold">weeks or months</span> and involve multiple contributors (human and AI), and continuity of goals, scope, and terminology is critical.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI use case is <span className="pattern-body--bold">single-purpose and low-stakes</span>, such as a one-off internal assistant limited to generic knowledge with no org-specific rules.</li>
                <li>The product serves <span className="pattern-body--bold">individual consumers</span> with minimal shared context (e.g., a casual writing aid not tied to a workspace or brand).</li>
                <li>The applicable context is <span className="pattern-body--bold">simple and static</span> (a single hard-coded disclaimer or fixed locale), where a conventional settings panel or prompt snippet already suffices.</li>
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
                At a high level, this pattern introduces a central context repository keyed by workspace and/or project, workspace profiles that aggregate canonical facts, context-aware agents that select and apply relevant items at runtime, transparent UI surfaces showing which context is active, and governance tooling for safe evolution.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Entry Points
              </h3>
              <p className="pattern-card__intro">
                Global access points for context management.
              </p>
              <ul className="pattern-card__list">
                <li>Global &quot;Workspace Context&quot; or &quot;Workspace Profile&quot; section in admin or workspace settings</li>
                <li>Project-level &quot;Profile / Brief&quot; tab for major initiatives (e.g., product launch, region rollout)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary Entry Points</h3>
              <p className="pattern-card__intro">
                In-context access during AI interactions.
              </p>
              <ul className="pattern-card__list">
                <li>In-chat or in-document side panel labeled &quot;Context&quot; or &quot;Workspace profile,&quot; showing the active context stack</li>
                <li>A compact summary of context items shown above or beside AI outputs with a link to &quot;View details&quot; or &quot;Manage workspace context&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual / Just-in-Time</h3>
              <p className="pattern-card__intro">
                Capture and promotion flows during conversations.
              </p>
              <ul className="pattern-card__list">
                <li>Inline suggestions in chat when the agent detects potentially reusable facts, e.g., &quot;This sounds like a reusable workspace rule. Save to Workspace Context?&quot;</li>
                <li>Modals or inline dialogs shown when saving a template that offer &quot;Promote to Workspace Context&quot; with scoping and owner assignment</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative</h3>
              <p className="pattern-card__intro">
                Enterprise governance and control.
              </p>
              <ul className="pattern-card__list">
                <li>Admin pages for controlling context behavior and defaults</li>
                <li>Role-based permissions for viewing, editing, and approving context items</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Context Item</h3>
            <p className="pattern-card__intro">
              The main repeated unit in this pattern is the context item: a structured representation of a reusable fact, policy, or artifact.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Brand Voice – SaaS, optimistic&quot;</li>
                  <li>&quot;Policy – No internal ticket IDs in public replies&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>&quot;In all external support replies, mask internal ticket IDs and email addresses. Use generic references such as &apos;your case&apos; instead.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Scope</p>
                <ul className="pattern-card__list">
                  <li>Org-wide (all workspaces and agents)</li>
                  <li>Workspace (a specific business unit)</li>
                  <li>Project (a narrow initiative or launch)</li>
                  <li>Region / market (e.g., EU vs US vs APAC)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Category and tags (Brand, Policy, KPI, Goal, Audience)</li>
                  <li>Owner and approver</li>
                  <li>Sensitivity level and status (draft, active, deprecated)</li>
                  <li>Usage signals (last referenced, frequency)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Edit, Change scope, Deactivate</li>
                  <li>View history, Duplicate</li>
                  <li>Promote/Demote (e.g., from project-level to workspace-level)</li>
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
                The lifecycle of a context repository spans from initialization to ongoing maintenance and retirement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initialization</h3>
              <ul className="pattern-card__list">
                <li>A default workspace profile is generated from existing organizational metadata (company name, region, timezone, locale, fiscal year)</li>
                <li>Often sourced from account configuration or identity systems</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Curation and Setup</h3>
              <ul className="pattern-card__list">
                <li>Admins or &quot;context stewards&quot; add and refine initial context items</li>
                <li>Brand voice pillars, goals, legal/compliance policies, product naming rules, region-specific constraints</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Context Resolution at Runtime</h3>
              <ul className="pattern-card__list">
                <li>Orchestration layer identifies relevant scopes (Workspace, Project, Region)</li>
                <li>Selects applicable context items, resolves conflicts</li>
                <li>Injects context as structured, labeled sections in prompts</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Transparency in Responses</h3>
              <ul className="pattern-card__list">
                <li>UI shows context chips or mini-banner summarizing items that influenced output</li>
                <li>Each chip links to the full context item with owner and timestamps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. In-Chat Capture and Promotion</h3>
              <ul className="pattern-card__list">
                <li>Agents detect candidate facts during conversations</li>
                <li>System proposes creating context item with prefilled label, scope, and owner</li>
                <li>User confirms, edits, or discards the suggestion</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Maintenance and Review</h3>
              <ul className="pattern-card__list">
                <li>Context items can be time-bound and flagged when nearing expiry</li>
                <li>Low-usage or conflicting items surfaced in review dashboards</li>
                <li>Change history maintained for auditing</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Retirement and Archival</h3>
              <ul className="pattern-card__list">
                <li>Deprecated items removed from context resolution pipeline but retained in audit log</li>
                <li>Agents no longer reference retired content by default</li>
                <li>Reduces risk of stale policies appearing in new outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Boundaries and Distinctions</h3>
              <ul className="pattern-card__list">
                <li>UI clearly distinguishes workspace context from agent persona and user-specific context</li>
                <li>Helps teams understand which behaviors are shared organizational defaults vs local to a conversation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guidance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidance</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for building an effective agent context repository.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Information Architecture & Repository Structure</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Workspace Profile</span> – Organization name, domains, regions, time zones, primary languages, fiscal calendar</li>
                <li><span className="pattern-body--bold">Goals & Objectives</span> – OKRs, KPIs, and key initiatives at workspace and project levels</li>
                <li><span className="pattern-body--bold">Brand, Voice & Style Guides</span> – Tone-of-voice pillars, target audiences, terminology, do/don&apos;t lists</li>
                <li><span className="pattern-body--bold">Constraints & Policies</span> – Legal, compliance, regulatory rules, redaction rules, escalation workflows</li>
                <li><span className="pattern-body--bold">Artifacts & Examples</span> – Approved templates, canonical examples, reference decks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Model & Context Item Schema</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Core fields</span> – id, label, category, value, description, scope, sensitivity, owner, approver, status</li>
                <li><span className="pattern-body--bold">Lifecycle fields</span> – created_at, updated_at, effective_from, expires_at</li>
                <li><span className="pattern-body--bold">Usage fields</span> – last_referenced_at, reference_count, agents_using, workflows_using</li>
                <li>Enables selection by explicit rules rather than brittle prompt concatenation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Context Retrieval & Injection</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Selectivity over volume</span> – Prefer small, curated set of highly relevant context items</li>
                <li><span className="pattern-body--bold">Structured prompts</span> – Inject context in distinct, labeled sections (Brand Voice, Policies, Goals)</li>
                <li><span className="pattern-body--bold">Tiered context</span> – Treat workspace context as &quot;warm&quot; memory layer between generic model knowledge and session context</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">In-Chat Capture & Promotion</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Detection heuristics</span> – Pattern-based and model-based detection for candidate facts</li>
                <li><span className="pattern-body--bold">Confirmation UI</span> – Small, focused dialog with proposed label, scope, statement, owner</li>
                <li><span className="pattern-body--bold">Approval workflows</span> – For high-risk categories, route new items to pending state requiring approver review</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance, Roles & Permissions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Viewer</span> – Can see context items and inspect details</li>
                <li><span className="pattern-body--bold">Editor</span> – Can propose and edit items in low-risk categories</li>
                <li><span className="pattern-body--bold">Approver</span> – Can approve/reject items in controlled categories</li>
                <li><span className="pattern-body--bold">Admin</span> – Can manage scopes, categories, retention rules, permissions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Observability & Debuggability</h3>
              <ul className="pattern-card__list">
                <li>Provide a &quot;Why did the agent do that?&quot; or &quot;Context used&quot; view for any interaction</li>
                <li>Log and report items referenced most often, by agent and workflow</li>
                <li>Surface items never referenced (candidates for cleanup)</li>
                <li>Track conflicts or overrides (when project-level replaced workspace-level)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How agent context repositories apply across different B2B and enterprise contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Brand-Consistent Content Across Teams</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <ul className="pattern-card__list">
                <li>Context repository contains brand voice pillars, audience archetypes, approved product names and taglines</li>
                <li>Campaign, blog, and ad-copy agents all pull from shared items</li>
                <li>When Brand updates a tagline, all agents automatically align without re-prompting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy-Aware Support Workflows</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <ul className="pattern-card__list">
                <li>Policies like &quot;Never expose internal ticket IDs&quot; and &quot;Mask customer emails&quot; stored in repository</li>
                <li>Regional privacy disclaimers and channel-specific guidelines scoped appropriately</li>
                <li>Support managers update a single policy item to adapt agent behavior everywhere</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Project Profiles for Long-Running Initiatives</h3>
              <p className="pattern-card__intro">Product / Project Tools</p>
              <ul className="pattern-card__list">
                <li>Major product launches represented as projects with their own profiles</li>
                <li>Project brief, success metrics, target segments, key dates and milestones</li>
                <li>Research, content, and analytics agents all reference the same project profile</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Region Compliance Rules</h3>
              <p className="pattern-card__intro">Global SaaS</p>
              <ul className="pattern-card__list">
                <li>Context items capture region-scoped variants: data residency statements, legal disclaimers, market-specific claims</li>
                <li>Each workspace (e.g., &quot;EU Enterprise&quot; vs &quot;US SMB&quot;) links to appropriate regional context</li>
                <li>Compliance team reviews and maintains repository by region</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Design considerations & best practices</p>
              <p className="pattern-body pattern-body--narrow">
                Key principles for building an effective and trustworthy context repository.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Design for Trust and Mental Models</h3>
              <ul className="pattern-card__list">
                <li>Make it clear when workspace context is applied using consistent visual treatments (context banners and chips near AI outputs)</li>
                <li>Visually distinguish workspace-wide defaults from project-level overrides and agent persona traits</li>
                <li>Provide quick, low-friction links from surprising outputs to the context items that shaped them</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Keep Context Lean and Relevant</h3>
              <ul className="pattern-card__list">
                <li>Avoid stuffing entire documents into prompts; summarize into concise context items</li>
                <li>Apply selection and routing: different agents may need different subsets of the repository</li>
                <li>When context grows large, introduce scoring and prioritization (recency, scope specificity, usage frequency)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separate Workspace Context from Personalization</h3>
              <ul className="pattern-card__list">
                <li>Use this pattern primarily for non-personal, shared information: brand guidelines, goals, and project rules</li>
                <li>Keep personal preferences, profile details, and sensitive data in a distinct, privacy-governed memory system</li>
                <li>Clearly label these layers in the interface so teams understand which aspects can be reused across users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Governance</h3>
              <ul className="pattern-card__list">
                <li>Treat the context repository as part of the overall data governance program</li>
                <li>Respect existing classification (public/internal/confidential); encrypt sensitive items</li>
                <li>Validate and sanitize context before injection to avoid prompt injection</li>
                <li>Apply least-privilege principles: agents receive only minimal subset required for their task</li>
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
                Common failures to avoid when implementing agent context repositories.
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
                  <h3 className="antipattern-title">Opaque &quot;Magic Rules&quot;</h3>
                  <p className="antipattern-subtitle">Hidden system prompts or invisible context sources that significantly influence outputs.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When context sources are not surfaced in the UI, users cannot understand why the AI behaves a certain way, making debugging difficult and undermining trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show which context items influenced the output and provide links to inspect them.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overbroad or Mis-scoped Context</h3>
                  <p className="antipattern-subtitle">Applying org-wide policies or regional rules where they do not belong.</p>
                </div>
              </div>
              <p className="antipattern-description">
                EU disclaimers appearing in US-only content, or project-specific rules bleeding into unrelated workspaces, can cause legal or UX issues.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Manage scope carefully with explicit overrides and clear resolution rules.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Stale or Conflicting Items</h3>
                  <p className="antipattern-subtitle">Old policies or brand messages that remain active in the repository.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Outdated context items can lead to inconsistent behavior and rework. When multiple items conflict, agents may produce unpredictable outputs.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement regular review, expiry dates, and conflict detection dashboards.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mixing Personal Data into Workspace Context</h3>
                  <p className="antipattern-subtitle">Combining personal or special-category data with shared context.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Workspace context should remain non-personal wherever possible. Mixing personal data increases privacy and compliance risk and makes governance more complex.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep personal preferences in a separate, privacy-governed memory system with distinct UI and controls.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Context Overload in Prompts</h3>
                  <p className="antipattern-subtitle">Injecting too many context items into prompts.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Excessive context increases latency and can reduce model accuracy by burying important details. Retrieval and selection strategies must be tuned over time.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Apply scoring, prioritization, and selective retrieval to keep injected context within model limits.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Instrumentation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To evaluate and refine this pattern, track key signals across adoption, quality, and operational efficiency.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Coverage</h3>
              <ul className="pattern-card__list">
                <li>Number of active context items by category and scope</li>
                <li>Percentage of workspaces and projects with configured profiles</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage</h3>
              <ul className="pattern-card__list">
                <li>Proportion of agent interactions that reference at least one context item</li>
                <li>Distribution of references across categories (Brand, Policy, Goals)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality & Consistency</h3>
              <ul className="pattern-card__list">
                <li>Reduction in off-brand or policy-violating outputs after introducing the repository</li>
                <li>Time spent editing agent drafts before publishing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance Health</h3>
              <ul className="pattern-card__list">
                <li>Average age of active items and frequency of reviews</li>
                <li>Rate of deprecated items and conflict resolutions</li>
                <li>Audit events showing who updated critical policies and when</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance</h3>
              <ul className="pattern-card__list">
                <li>Average token contribution of context to prompts</li>
                <li>Latency impact of context retrieval and injection</li>
              </ul>
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
              <p className="pattern-checklist-category__title">Repository Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Define top-level sections for workspace context (Profile, Goals, Brand, Policies, Artifacts)</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Design and implement a structured context item schema with scope, ownership, and lifecycle fields</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Technical Infrastructure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Build a central context repository API with search, filtering, and access control</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement context resolution logic in the agent orchestration layer (by workspace, project, region, and agent type)</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Interface</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Add workspace/project profile pages and context chips/banners near AI outputs</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Build in-chat &quot;Save to workspace context&quot; flows for capturing reusable facts</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Observability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Establish governance workflows for approvals, versioning, and expiry for high-risk categories</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Integrate observability and audit: logs, &quot;context used&quot; views, and dashboards for usage and staleness</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Rollout</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Pilot with a small set of high-impact use cases (e.g., support replies, marketing campaigns)</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Expand coverage based on measured improvements and feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
