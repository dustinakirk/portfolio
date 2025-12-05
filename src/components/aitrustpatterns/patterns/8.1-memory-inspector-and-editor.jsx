import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import MemoryInspectorDemo from '../demos/MemoryInspectorDemo';

// SEO metadata for this pattern page
export const MEMORY_INSPECTOR_EDITOR_SEO = {
  title: "Memory Inspector & Editor - AI Trust Pattern",
  description: "A dedicated surface that exposes an AI agent's stored memories as structured, editable items, enabling transparent personalization and explicit control over what the agent remembers and uses.",
  keywords: ["AI memory", "memory inspector", "AI personalization", "agent memory", "AI trust", "memory editor", "AI data control", "agentic UX", "AI preferences", "memory management"],
  canonicalPath: "/agentic_ai_patterns/memory-inspector-editor"
};


export default function MemoryInspectorEditorPattern() {
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
            <span className="pattern-header__index">8.1</span>
            <div>
              <h1 className="pattern-header__title">Memory Inspector & Editor</h1>
              <p className="pattern-header__subtitle">
                A dedicated surface that exposes an AI agent&apos;s stored memories as structured, editable items, enabling transparent personalization and explicit control over what the agent remembers and uses.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.1" patternTitle="Memory Inspector & Editor" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              The Memory Inspector & Editor pattern provides a dedicated, structured surface where an AI agent&apos;s persistent memories about a person, organization, or workspace are visible, understandable, and controllable.
            </p>
            <p className="pattern-body">
              In agentic AI experiences that rely on long-term personalization&mdash;such as copilots embedded in CRMs, analytics platforms, support tools, or productivity suites&mdash;this pattern clarifies what the agent &quot;knows&quot;, how it learned it, and how those memories are used.
            </p>
            <p className="pattern-body">
              By treating memories as data objects rather than opaque model state, the pattern improves predictability, enables correction of inaccuracies, reduces risk from outdated information, and supports privacy and compliance expectations. It also creates a shared debugging surface for end users, admins, and support teams to reason about agent behavior.
            </p>
            <p className="pattern-body">
              A design example embedded into a product page could show:
            </p>
            <ul className="pattern-list">
              <li>On the right side of a chat interface, a <span className="pattern-body--bold">&quot;Memory&quot; panel</span> lists items such as &quot;Preferred tone: concise&quot;, &quot;Team: EMEA Sales&quot;, and &quot;Primary product focus: Data Platform&quot;, each with inline edit and delete controls.</li>
              <li>As the agent composes a reply, <span className="pattern-body--bold">chips appear under the draft</span> labeled &quot;Using memories: [Tone: concise] [Team: EMEA Sales]&quot;.</li>
              <li>Hovering any chip <span className="pattern-body--bold">highlights the corresponding entry</span> in the panel and shows when it was last updated.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Memory Inspector & Editor example">
          <MemoryInspectorDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a clear memory surface, AI agents build and act on persistent beliefs that remain invisible and uncontrollable. This creates a number of trust and usability issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque personalization</span> &ndash; Agent outputs suddenly reference past details (role, tone, preferences) with no visible explanation of where that information came from or whether it is still correct.
              </li>
              <li>
                <span className="pattern-body--bold">Accumulated inaccuracies</span> &ndash; Errors or outdated facts (e.g., role changes, new region, updated constraints) persist and continue to influence responses across sessions and tasks.
              </li>
              <li>
                <span className="pattern-body--bold">Lack of control and consent</span> &ndash; Persistent personal or organizational data is stored without a clear way to inspect, edit, or remove it, making it difficult to meet expectations around consent, minimization, and the right to be forgotten.
              </li>
              <li>
                <span className="pattern-body--bold">Troubleshooting difficulty</span> &ndash; When an AI behaves strangely or &quot;gets stuck&quot; in a pattern, there is no obvious place to diagnose which belief or memory is responsible.
              </li>
              <li>
                <span className="pattern-body--bold">Organizational risk</span> &ndash; In shared or workspace-level agents, ungoverned memories can leak internal context across teams, survive beyond project lifetimes, or violate internal policy and regulatory requirements.
              </li>
            </ul>
            <p className="pattern-body">
              Without a Memory Inspector & Editor, persistent AI behavior can feel unpredictable and ungoverned, undermining trust even when the underlying models are technically capable and secure.
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
                  When an agent maintains <span className="pattern-body--bold">long-lived personalization</span> that persists across sessions, devices, or channels.
                </li>
                <li>
                  When the system <span className="pattern-body--bold">infers traits, preferences, or constraints</span> from natural language interactions (e.g., tone, language, working hours, approval limits).
                </li>
                <li>
                  When multiple users share <span className="pattern-body--bold">workspace or organizational agents</span> that rely on shared context or rules.
                </li>
                <li>
                  When incorrect personalization can have <span className="pattern-body--bold">material consequences</span>, such as in sales, finance, operations, compliance, or customer support workflows.
                </li>
                <li>
                  When products are sold into <span className="pattern-body--bold">enterprise or regulated environments</span> where administrators expect explicit governance, auditability, and data control for AI behavior.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent is intentionally <span className="pattern-body--bold">stateless</span>, with no memory beyond the current session and no reuse of details across tasks.</li>
                <li>Personalization is limited to a small number of explicit, low-risk settings (e.g., theme, language) already managed in a standard preferences page.</li>
                <li>The system stores only <span className="pattern-body--bold">ephemeral, low-impact hints</span> that are already obvious from UI context and do not meaningfully affect agent behavior.</li>
                <li>The user base or domain is highly constrained and <span className="pattern-body--bold">long-term memory is disabled by design</span> to minimize risk.</li>
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
                The Memory Inspector & Editor is typically implemented as a dedicated &quot;My Agent Memory&quot; dashboard or panel that behaves like a structured data-management surface. It exposes each memory as a discrete item with clear labeling, metadata, and controls, and connects contextually to the chat experience whenever a memory is created, updated, or used.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Global Navigation
              </h3>
              <p className="pattern-card__intro">
                A persistent entry in the primary nav, app header, or user/profile dropdown.
              </p>
              <ul className="pattern-card__list">
                <li>Labeled &quot;Memory&quot;, &quot;Agent Memory&quot;, or &quot;AI Data&quot;</li>
                <li>Provides direct access to the full dashboard for proactive review and cleanup</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent / AI Settings</h3>
              <p className="pattern-card__intro">
                A section within &quot;AI Settings&quot;, &quot;Preferences&quot;, or &quot;Privacy & Data&quot;.
              </p>
              <ul className="pattern-card__list">
                <li>Anchors memory alongside other personalization and data-use controls</li>
                <li>Works well for products that centralize AI configuration in a single place</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Within Chat</h3>
              <p className="pattern-card__intro">
                Contextual affordances that appear when the agent reads, writes, or applies memories.
              </p>
              <ul className="pattern-card__list">
                <li>Chips under an assistant message: &quot;Used memory: Preferred tone &ndash; concise&quot;</li>
                <li>Subtle banner after a learning event: &quot;Saved to memory: role = Sales Ops Manager [Review]&quot;</li>
                <li>Inline links next to critical facts: &quot;using workspace rule [edit]&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notifications and Digests</h3>
              <p className="pattern-card__intro">
                Periodic digests summarizing changes to agent memory.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;3 new memories added this week&quot; with deep links to specific items or filters</li>
                <li>Useful for enterprise environments and admins who need passive monitoring</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Memory Record</h3>
            <p className="pattern-card__intro">
              The primary object is a memory record: a structured representation of a belief the agent can reuse.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Preferred tone&quot;</li>
                  <li>&quot;Role&quot;</li>
                  <li>&quot;Team&quot;</li>
                  <li>&quot;Org-wide rule: customer communications&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Preferred tone: concise, professional&quot;</li>
                  <li>&quot;Role: Senior Product Manager, Data Platform&quot;</li>
                  <li>&quot;Org rule: Do not email customers directly without approval&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Edit:</span> adjust the value or wording</li>
                  <li><span className="pattern-body--bold">Change scope:</span> this agent, all agents, workspace, project</li>
                  <li><span className="pattern-body--bold">Pin / protect:</span> prevent automatic overwrites</li>
                  <li><span className="pattern-body--bold">Delete:</span> remove with short-lived undo option</li>
                  <li><span className="pattern-body--bold">Expand / details:</span> reveal history, usage, origin</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Category:</span> Preferences, Personal Facts, Org Rules, etc.</li>
                  <li><span className="pattern-body--bold">Scope:</span> This account only, workspace, all agents in org</li>
                  <li><span className="pattern-body--bold">Source:</span> Explicitly provided, inferred, synced, admin-set</li>
                  <li><span className="pattern-body--bold">Timestamps:</span> Created, last updated, last used</li>
                  <li><span className="pattern-body--bold">Status:</span> Active, Pending review, Archived, Conflict</li>
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
                The Memory Inspector & Editor defines a clear lifecycle for each memory record, from creation to expiration or deletion.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Detection & Candidate Creation</h3>
              <ul className="pattern-card__list">
                <li>During interaction, the agent detects potentially durable information: roles, long-term projects, stable preferences, recurring constraints.</li>
                <li>The system creates a candidate memory record with an initial label, value, category, and suggested scope.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Confirmation & Onboarding</h3>
              <ul className="pattern-card__list">
                <li>For impactful or sensitive data, candidate memories enter a &quot;pending review&quot; state.</li>
                <li>Review section in the inspector (&quot;Needs review&quot;) or lightweight prompts in chat.</li>
                <li>Options like &quot;Save&quot;, &quot;Save for this project only&quot;, or &quot;Do not remember this&quot; clarify consequences.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Storage & Organization</h3>
              <ul className="pattern-card__list">
                <li>Confirmed memories become active records, organized into tabs or sections.</li>
                <li>Categories: User Preferences, Personal Facts, Organizational Data, Long-Term Tasks, Interaction-Derived Insights.</li>
                <li>Users can adjust labels, categories, and scope to match their mental models.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Usage & Attribution</h3>
              <ul className="pattern-card__list">
                <li>When the agent uses a memory, the UI displays chips, badges, or callouts showing which memories influenced behavior.</li>
                <li>Details panels answer &quot;Why did this happen?&quot; by referencing specific memory records.</li>
                <li>Usage is recorded as metadata, supporting audit trails and debugging.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Editing & Conflict Resolution</h3>
              <ul className="pattern-card__list">
                <li>If a memory appears incorrect or outdated, it can be edited directly from the inspector or via &quot;Edit this memory&quot; links in chat.</li>
                <li>Conflicts (e.g., multiple roles or regions) can be detected and highlighted with warnings.</li>
                <li>Simple version history allows rollback to previous values with timestamps.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Expiration & Scoping</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Session-only:</span> automatically discarded when session ends.</li>
                <li><span className="pattern-body--bold">Time-bound:</span> archived or deleted after a given period.</li>
                <li><span className="pattern-body--bold">Project-bound:</span> cleared when a project closes.</li>
                <li><span className="pattern-body--bold">Persistent:</span> remain until explicitly removed.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Deletion & Data Subject Rights</h3>
              <ul className="pattern-card__list">
                <li>Deletion flows explain impact, especially when training data or external systems are involved.</li>
                <li>Clarify whether deletion removes use in future model training.</li>
                <li>Clarify whether content remains in system logs or external integrations.</li>
                <li>For privacy and compliance, deletions are propagated and reflected in an auditable log.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Error Handling & Feedback Loops</h3>
              <ul className="pattern-card__list">
                <li>When a memory contributes to errors, the system highlights the suspect record (&quot;Potentially outdated: project deadline 2023-03-01&quot;).</li>
                <li>Suggests actions: &quot;Edit&quot;, &quot;Archive&quot;, &quot;Ignore for this task&quot;.</li>
                <li>Tooltips, inline help, and short explanations reinforce how memories work.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States</p>
              <p className="pattern-body pattern-body--narrow">
                Clear states make the inspector easier to understand and operate.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Empty State</h3>
              <ul className="pattern-card__list">
                <li>For new accounts or when memory is disabled, explains what agent memory is, what types of data may appear, and what controls are available.</li>
                <li>May include a few illustrative sample entries or a quick guided tour.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Populated State</h3>
              <ul className="pattern-card__list">
                <li>The main working view, with active records grouped by category.</li>
                <li>Offers search, filters (category, scope, sensitivity), and sort (recency, usage, creation date).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Pending Review Queue</h3>
              <ul className="pattern-card__list">
                <li>Dedicated space for new or high-risk candidate memories awaiting approval.</li>
                <li>Provides batch actions (&quot;Approve&quot;, &quot;Discard&quot;, &quot;Change scope for all&quot;) with clear summaries.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Conflict / Warning State</h3>
              <ul className="pattern-card__list">
                <li>Visual indicators (icons, banners, inline warnings) for contradictory facts, stale data, or policy violations.</li>
                <li>Each warning links directly to recommended remediation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Read-Only / Policy-Controlled</h3>
              <ul className="pattern-card__list">
                <li>Some entries (compliance rules, admin-defined playbooks) may be read-only.</li>
                <li>UI distinguishes locked items with clear icons and explanatory tooltips.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error & Loading States</h3>
              <ul className="pattern-card__list">
                <li>Graceful handling of loading, sync errors, and partial failures.</li>
                <li>Non-blocking indicators while fetching memories.</li>
                <li>Safe fallbacks that avoid exposing inconsistent data.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Design guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Key principles for implementing an effective Memory Inspector & Editor.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Information Architecture</h3>
              <ul className="pattern-card__list">
                <li>Organize memories into <span className="pattern-body--bold">human-centered categories</span> rather than technical collections: &quot;My Profile&quot;, &quot;Preferences&quot;, &quot;Work Context&quot;, &quot;Org Rules&quot;, etc.</li>
                <li>Use <span className="pattern-body--bold">progressive disclosure</span>: show high-level summaries by default, place detailed logs and metadata behind expandable sections.</li>
                <li>Align page layout with other settings or admin surfaces to reduce learning cost.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Labeling & Copy</h3>
              <ul className="pattern-card__list">
                <li>Use <span className="pattern-body--bold">precise, neutral language</span> that emphasizes clarity and control: &quot;Saved to memory&quot; rather than overly anthropomorphic phrasing.</li>
                <li>Avoid promises that cannot reliably be met; clarify what &quot;permanent&quot; means in context of retention policies.</li>
                <li>Make scope and visibility explicit: &quot;Visible to: only this account&quot;, &quot;Used by: Sales Copilot&quot;, &quot;Managed by: Organization admin&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Interaction & Controls</h3>
              <ul className="pattern-card__list">
                <li>Prefer <span className="pattern-body--bold">inline editing</span> over disruptive modals, especially for simple text or scope changes.</li>
                <li>Optimize for <span className="pattern-body--bold">fast remediation</span>: one-click delete with undo for obviously incorrect entries.</li>
                <li>Multi-select cleanup tools for project closure, role changes, or periodic hygiene.</li>
                <li>Provide graded confirmation: lightweight toasts for low-risk edits, stronger dialogs for operations with wide impact.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Hierarchy & Accessibility</h3>
              <ul className="pattern-card__list">
                <li>Make important elements stand out with <span className="pattern-body--bold">typographic hierarchy</span>, not color alone.</li>
                <li>Ensure <span className="pattern-body--bold">full keyboard navigation</span> with tab order that follows reading order.</li>
                <li>Implement robust <span className="pattern-body--bold">screen-reader support</span> with descriptive labels for memory records and controls.</li>
                <li>Use iconography consistently and sparingly: shield for admin-controlled, clock for time-bound, warning for conflicts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & governance considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Critical considerations for implementing memory management in enterprise and regulated environments.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Consent and Transparency</h3>
              <ul className="pattern-card__list">
                <li>Clearly indicate when persistent memory is enabled, what categories of data may be stored, and for what purposes.</li>
                <li>Provide straightforward ways to disable memory entirely, switch to session-only mode, or clear all memories for an account or workspace.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Role-Based Access Control (RBAC)</h3>
              <ul className="pattern-card__list">
                <li>Distinguish personal memories from shared workspace and org-wide records.</li>
                <li>Reflect permissions accurately: some users can view but not edit shared rules; admins may see additional system-level memories.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Retention and Compliance</h3>
              <ul className="pattern-card__list">
                <li>Respect organizational retention policies and relevant regulations (e.g., data deletion timelines, subject access requests).</li>
                <li>Connect memory deletion and export flows to broader privacy tooling and data-governance processes.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">External Systems Integration</h3>
              <ul className="pattern-card__list">
                <li>When memories derive from external sources (CRM, HRIS, project-management tools), display the source system.</li>
                <li>Indicate whether edits should be made in the external source (&quot;Edit in Salesforce&quot;) or are local overrides.</li>
                <li>Avoid conflicting sources of truth by favoring canonical systems for authoritative data.</li>
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
                Different implementations suited to varying product complexity and user needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Memory Manager</h3>
              <p className="pattern-card__intro">Minimal surface exposed entirely inside the chat interface.</p>
              <ul className="pattern-card__list">
                <li>Shows a small subset of the most influential memories (e.g., tone, role, region) with quick controls.</li>
                <li>Best for simpler products or early-stage implementations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Full &quot;My Agent Memory&quot; Dashboard</h3>
              <p className="pattern-card__intro">A dedicated, tabbed interface with comprehensive features.</p>
              <ul className="pattern-card__list">
                <li>Categories, search and filters, audit and history views, bulk operations.</li>
                <li>Well suited for enterprise copilots and complex multi-agent platforms.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin Memory Console</h3>
              <p className="pattern-card__intro">An admin-focused view of workspace and org-level memories.</p>
              <ul className="pattern-card__list">
                <li>Policies, playbooks, escalation rules, and shared constraints.</li>
                <li>Enables governance tasks: defining default memories, enforcing compliance rules, auditing how policies influence agent actions.</li>
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
                How the Memory Inspector & Editor applies across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Personal Preference Update</h3>
              <p className="pattern-card__intro">Writing assistant in a marketing tool</p>
              <ul className="pattern-card__list">
                <li>A writing assistant consistently produces content in American English.</li>
                <li>In the Memory Inspector, a record labeled &quot;Preferred language variant: American English&quot; appears under &quot;Preferences&quot;.</li>
                <li>The record is updated to &quot;British English&quot; and scope is set to &quot;All writing agents in this workspace&quot;.</li>
                <li>Subsequent drafts use British English, and the memory&apos;s usage history shows when it influenced outputs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Organizational Compliance Cleanup</h3>
              <p className="pattern-card__intro">Shared analytics copilot</p>
              <ul className="pattern-card__list">
                <li>A manager opens the &quot;Org Rules&quot; category and finds a memory describing an obsolete pricing model.</li>
                <li>The entry is deleted with a short note, and the audit log records the change.</li>
                <li>Forecasts generated afterwards stop referencing deprecated price tiers, preventing misinformation in executive reports.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Coordination</h3>
              <p className="pattern-card__intro">Platform with multiple specialized agents</p>
              <ul className="pattern-card__list">
                <li>Separate agents for pipeline planning, outbound sequencing, and QBR preparation.</li>
                <li>A shared memory describes current fiscal-year budget constraints for a strategic account.</li>
                <li>Through the inspector, that memory is scoped to all three agents and marked as protected.</li>
                <li>Each agent references the constraint in its own UI, creating a consistent planning surface across workflows.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Project-Bound Long-Term Tasks</h3>
              <p className="pattern-card__intro">AI project coordinator</p>
              <ul className="pattern-card__list">
                <li>A cross-functional team uses an AI project coordinator to track a multi-month rollout.</li>
                <li>The inspector&apos;s &quot;Active Projects&quot; tab lists memories for &quot;Launch date: Beta program &ndash; March 15&quot; and &quot;Primary success metric: activation rate&quot;.</li>
                <li>When the rollout ends, the team archives these memories as part of project closure, preventing obsolete dates from influencing future planning.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & common failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation approaches that can undermine trust and usability.
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
                  <h3 className="antipattern-title">Opaque Memory Use</h3>
                  <p className="antipattern-subtitle">Agent stores and reuses memories without exposing them.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing the agent to store and reuse memories without exposing them leads to confusion and a perception of &quot;creepy&quot; or arbitrary behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always surface when memories are being used with clear attribution and edit affordances.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Technical Representations</h3>
                  <p className="antipattern-subtitle">Showing raw prompts, embeddings, IDs, or database records.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing raw prompts, embeddings, IDs, or database records instead of clear statements makes the inspector unusable for most stakeholders.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Present memories as human-readable statements with clear labels and plain language descriptions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">All-or-Nothing Controls</h3>
                  <p className="antipattern-subtitle">Providing only a global &quot;Clear all memory&quot; option.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Providing only a global &quot;Clear all memory&quot; option prevents targeted correction and discourages adoption of personalization features.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Offer granular controls: edit individual records, delete specific items, adjust scope per memory.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Overwrites</h3>
                  <p className="antipattern-subtitle">Automatically replacing memories without signaling changes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Automatically replacing existing memories with new inferences without signaling the change can produce surprising behavior and complicate troubleshooting.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Notify users of updates, show version history, and allow pinning to prevent automatic overwrites.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mixing Logs with Memories</h3>
                  <p className="antipattern-subtitle">Dumping full chat logs into the inspector.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Dumping full chat logs or transcripts into the inspector creates noise and hides the relatively small number of durable beliefs that actually drive behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Separate memories (durable beliefs) from conversation history; link to source conversations when relevant.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Success Signals */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & success signals</p>
              <p className="pattern-body pattern-body--narrow">
                Key indicators for assessing the effectiveness of the Memory Inspector & Editor.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust and Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Reduction in feedback or tickets indicating the agent &quot;keeps getting things wrong&quot; about roles, preferences, or constraints.</li>
                <li>Improved CSAT or task satisfaction scores for interactions involving personalization.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage and Correction Behavior</h3>
              <ul className="pattern-card__list">
                <li>Regular, healthy use of the inspector: edits, scope changes, and targeted deletions rather than frequent complete resets.</li>
                <li>Higher task success rates after memory edits, indicating effective corrective control.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance and Risk Reduction</h3>
              <ul className="pattern-card__list">
                <li>Fewer escalations related to inappropriate data retention or sharing of AI-derived context.</li>
                <li>Positive outcomes in internal audits and procurement reviews focused on AI explainability and control.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption of Personalization</h3>
              <ul className="pattern-card__list">
                <li>Higher opt-in and lower opt-out rates for memory-based personalization when the inspector is present and well understood.</li>
                <li>Compared to similar deployments without an inspector.</li>
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
              <p className="pattern-checklist-category__title">Visibility & Access</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear, discoverable entry point to view and manage agent memories?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When memories influence behavior, is this attribution visible to the user?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Control & Editing</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users edit, delete, and adjust the scope of individual memory records?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there bulk operations for cleanup during role changes or project closure?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Organization & Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are memories organized into human-centered categories that match user mental models?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is metadata (source, scope, timestamps) clearly presented without overwhelming users?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Consent & Privacy</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear what data is being stored and for what purpose?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users disable memory entirely or switch to session-only mode?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Compliance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are admin-controlled memories clearly distinguished from user-editable ones?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do deletion flows support data subject rights and audit requirements?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Troubleshooting</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily identify which memory is causing unexpected behavior?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are conflicts between memories detected and surfaced with clear resolution paths?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
