import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import AgentHandoverBriefsDemo from '../demos/AgentHandoverBriefsDemo';

// SEO metadata for this pattern page
export const AGENT_HANDOVER_BRIEFS_SEO = {
  title: "Agent Handover Briefs - AI Trust Pattern",
  description: "Structured, reviewable summaries passed between AI agents and humans to preserve context, minimize errors, and increase trust during handoffs in multi-agent workflows.",
  keywords: ["agent handover", "handover briefs", "multi-agent AI", "AI trust", "context preservation", "workflow handoff", "AI orchestration", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/agent-handover-briefs"
};

export default function AgentHandoverBriefsPattern() {
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
            <span className="pattern-header__index">7.4</span>
            <div>
              <h1 className="pattern-header__title">Agent Handover Briefs</h1>
              <p className="pattern-header__subtitle">
                Structured, reviewable summaries passed between AI agents and humans to preserve context, minimize errors, and increase trust during handoffs in multi-agent workflows.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="7.4" patternTitle="Agent Handover Briefs" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Agent Handover Briefs are structured summaries generated at transition points between AI agents, or between agents and human operators.
            </p>
            <p className="pattern-body">
              They capture the current goal, what has been done so far, key decisions, open questions, and any relevant artifacts or links. In multi-agent or human-in-the-loop systems, these briefs function as the &quot;handoff package,&quot; making transitions explicit, auditable, and, where appropriate, editable.
            </p>
            <p className="pattern-body">
              This improves continuity, reduces redundant work and repeated questions, and gives users stronger control and visibility into what the system is doing on their behalf.
            </p>
            <p className="pattern-body">
              In most applications, briefs appear in or near the primary conversational surface (e.g., inline inside the chat, in a side panel, or as a modal during a handoff). They often become part of the persistent activity log, serving as a compressed, human-friendly representation of the underlying interaction history and system state.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/7.4 agent handover briefs.png"
              alt="Agent Handover Briefs pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo illustrates a handoff from a familiar AI assistant to an external travel booking agent. When the user requests flight booking, the assistant generates a structured handover brief summarizing the goal, key details, and open questions before passing control to the TravelLink Agent. You can review and edit the brief fields (try changing the goal or questions), then click Approve to complete the handoff. Notice how the brief preserves context across the boundary, ensuring the external agent receives everything it needs to continue the task without asking the user to repeat information.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Agent Handover Briefs interactive demo">
            <AgentHandoverBriefsDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a structured handover, multi-agent systems and human-in-the-loop workflows often exhibit:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Context loss between agents and humans</span> – New agents or human operators re-ask questions, misinterpret the situation, or miss key constraints because the prior interaction history is long, unstructured, or only machine-readable.
              </li>
              <li>
                <span className="pattern-body--bold">Hidden assumptions and decisions</span> – Agents make routing or domain decisions &quot;silently&quot; (e.g., what data to trust, which hypothesis to follow), leaving humans unsure what the system believes or why a particular path was chosen.
              </li>
              <li>
                <span className="pattern-body--bold">Redundant work and fragmented logs</span> – Each handoff creates a new island of activity; relevant artifacts are scattered across messages, tools, and systems, making later audits, QA, or incident investigations difficult.
              </li>
              <li>
                <span className="pattern-body--bold">Eroded trust in autonomy</span> – When autonomous actions or agent transitions happen without a clear summary and checkpoint, stakeholders worry about loss of control, especially in high-stakes or regulated domains.
              </li>
            </ul>
            <p className="pattern-body">
              A predictable, compact handover brief addresses these issues by standardizing what is shared, where it is surfaced, and how it is reviewed or changed.
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
                  <span className="pattern-body--bold">Multi-agent workflows</span> – Whenever an orchestrator routes work between multiple specialized agents (e.g., &quot;Intake → Research → Drafting → QA&quot;).
                </li>
                <li>
                  <span className="pattern-body--bold">Human-in-the-loop checkpoints</span> – When human experts, operators, or managers are expected to approve, modify, or override an agent&apos;s work before a downstream action.
                </li>
                <li>
                  <span className="pattern-body--bold">Cross-team or cross-role collaboration</span> – When outputs cross organizational boundaries (Support → Sales, Ops → Finance), requiring clear summaries and traceability.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulated or high-risk actions</span> – Where auditors, legal teams, or compliance officers may later need to understand what was known, what decision was made, and why.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single-step or low-stakes interactions</span> – Simple Q&A, one-off content generation, or personal productivity tasks where handoffs are rare.</li>
                <li><span className="pattern-body--bold">Single-agent, short-lived sessions</span> – When one agent owns the full lifecycle of a short task and the full conversation history is already visible.</li>
                <li><span className="pattern-body--bold">Deterministic, well-bounded flows</span> – Highly constrained wizards or forms where the state is already encoded in a visible UI model.</li>
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
                Agent Handover Briefs are usually implemented as a structured, compact object displayed at transition points and stored in the workflow history. The pattern spans generation, presentation, editing, and archival.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Automatic Handoff Event
              </h3>
              <p className="pattern-card__intro">
                Triggered when an orchestrator decides to route a task to another agent or human role.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Escalate to Human Support&quot;</li>
                <li>&quot;Move to Personalization Agent&quot;</li>
                <li>&quot;Route to Fulfillment Agent&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explicit Command from User</h3>
              <p className="pattern-card__intro">
                Activated when a user instructs the system to hand work off.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Send this to Legal for review&quot;</li>
                <li>&quot;Pass this to the supply chain agent&quot;</li>
                <li>&quot;Share this with my account team&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Prompt in Workflow UI</h3>
              <p className="pattern-card__intro">
                Appears as a banner, toast, or inline card when conditions for handoff are met.
              </p>
              <ul className="pattern-card__list">
                <li>Long-running task completion</li>
                <li>Elevated risk score</li>
                <li>Threshold crossed in monitoring</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Handover Brief</h3>
            <p className="pattern-card__intro">
              The primary object is a structured, human-readable summary capturing the current state of work.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Title</p>
                <ul className="pattern-card__list">
                  <li>&quot;Brief for Writing Agent&quot;</li>
                  <li>&quot;Escalation Summary: Premium Customer&quot;</li>
                  <li>&quot;Inventory Review Handover: EMEA Warehouse&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Goal / Objective</p>
                <ul className="pattern-card__list">
                  <li>One or two sentences stating what the next agent or human should accomplish</li>
                  <li>Example: &quot;Generate a concise executive summary tailored for marketing leadership.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Work Summary</p>
                <ul className="pattern-card__list">
                  <li>Short description of what has been done so far and how</li>
                  <li>Often 3–5 bullet points, together &lt;200–300 words</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Key Decisions &amp; Assumptions</p>
                <ul className="pattern-card__list">
                  <li>Important choices, thresholds, and implicit assumptions made upstream</li>
                  <li>Example: &quot;Assumed data from 2022–2023 is representative&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Open Questions / Unknowns</p>
                <ul className="pattern-card__list">
                  <li>Highlighted section for what remains unresolved</li>
                  <li>Example: &quot;Clarify budget constraints&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Context Artifacts</p>
                <ul className="pattern-card__list">
                  <li>Links or attachments: documents, dashboards, code snippets, transcripts</li>
                  <li>Customer records, tickets, screenshots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior &amp; lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of a handover brief spans from initial trigger through consumption and archival.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>A single agent is working on a task or conversing with the user.</li>
                <li>An orchestrator monitors conditions such as complexity, domain specialty needed, or risk level.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Handoff Trigger</h3>
              <ul className="pattern-card__list">
                <li>A rule or model determines that another agent or human should take over.</li>
                <li>The orchestrator selects the target role or agent and signals the need for a brief.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Brief Generation</h3>
              <ul className="pattern-card__list">
                <li>A structured prompt template guides generation from conversation history and system state.</li>
                <li>Content is trimmed to a concise length (~200–300 words).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Presentation to Current Actor</h3>
              <ul className="pattern-card__list">
                <li>The brief appears as an inline card, side panel, or modal.</li>
                <li>The current actor can edit text fields, add notes, or attach/remove artifacts.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Approval &amp; Routing</h3>
              <ul className="pattern-card__list">
                <li>Once approved (or auto-approved), the orchestrator routes the task along with the brief.</li>
                <li>Humans receive notifications with a condensed view and link to the full workflow.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Consumption by Recipient</h3>
              <ul className="pattern-card__list">
                <li>The receiving agent or human uses the brief as the starting point.</li>
                <li>The system maintains version history showing who changed what and when.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Completion &amp; Archival</h3>
              <ul className="pattern-card__list">
                <li>Once downstream work is completed, the brief is stored in the workflow log as a key event.</li>
                <li>Linked to subsequent briefs, forming a chain across a multi-step pipeline.</li>
                <li>Supports later auditing, postmortems, and training or evaluation of agents.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Error &amp; Fallback Behaviors</h3>
              <ul className="pattern-card__list">
                <li>If brief generation fails or is incomplete, the system can fall back to a minimal summary plus direct access to underlying history.</li>
                <li>A visible warning or status indicator can flag that the brief is low-confidence or partial.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content &amp; messaging guidelines</p>
            <p className="pattern-body">
              To keep briefs practical and trustworthy, content should be structured, concise, and unambiguous.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Effective brief elements</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li><strong>Goal:</strong> Single, outcome-focused statement with domain, audience, and constraints</li>
                  <li><strong>Work Summary:</strong> 3–7 bullet points summarizing actions, sources, and findings</li>
                  <li><strong>Key Decisions:</strong> Short, declarative bullets highlighting material choices</li>
                  <li><strong>Open Questions:</strong> Atomic, answerable questions using bold emphasis</li>
                  <li><strong>Artifacts:</strong> Links with clear labels rather than raw URLs</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Ineffective approaches</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Vague goals without audience or constraints</li>
                  <li>Long-form text that mirrors the entire conversation</li>
                  <li>Bundling multiple questions into one item</li>
                  <li>Raw URLs without descriptive labels</li>
                  <li>Anthropomorphic language (&quot;I believe,&quot; &quot;We decided&quot;)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Tone &amp; Style</h3>
                <ul className="pattern-card__list">
                  <li>Neutral, factual, and unambiguous</li>
                  <li>Frame as &quot;The system…&quot; or passive state descriptions</li>
                  <li>Use consistent sentence patterns for easier scanning</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Risks / Flags (Optional)</h3>
                <ul className="pattern-card__list">
                  <li>For higher-stakes workflows, include explicit &quot;Risks &amp; Caveats&quot; section</li>
                  <li>Example: &quot;Data from Region X is incomplete; projections may understate demand.&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Artifact Handling</h3>
                <ul className="pattern-card__list">
                  <li>Prefer links with clear labels (&quot;Customer Timeline,&quot; &quot;Issue Ticket #12345&quot;)</li>
                  <li>Show type and size for attached content</li>
                  <li>Signal if content is sensitive or restricted</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual & Interaction Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction &amp; UX guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Guidelines for visibility, placement, editing, approval, and logging of handover briefs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Visibility &amp; Placement</h3>
              <ul className="pattern-card__list">
                <li>Surface briefs close to the handoff event in the interaction flow</li>
                <li>Provide one clearly visible primary brief per handoff</li>
                <li>Allow quick expand/collapse to avoid cluttering the view</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Editing &amp; Approval</h3>
              <ul className="pattern-card__list">
                <li>For high-impact transitions, present in an editable panel with inline editing</li>
                <li>Optional structured controls (dropdowns, toggles) for key flags</li>
                <li>&quot;Approve &amp; Continue&quot; or &quot;Return for Revision&quot; actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notifications</h3>
              <ul className="pattern-card__list">
                <li>For human recipients: concise notification with brief title, goal, and 1–2 key bullets</li>
                <li>Direct link to &quot;Open full brief &amp; context&quot; in the application</li>
                <li>For agent recipients: mirror into system prompt in structured form (JSON/YAML)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Logs &amp; History</h3>
              <ul className="pattern-card__list">
                <li>Attach briefs directly to the workflow timeline as discrete items</li>
                <li>Enable search and filter by agent/role, account, risk level, status, and date</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">States</h3>
              <ul className="pattern-card__list">
                <li><strong>Draft:</strong> Generated but not yet reviewed</li>
                <li><strong>Pending Approval:</strong> Awaiting required sign-off</li>
                <li><strong>Approved:</strong> Locked for routing purposes</li>
                <li><strong>Amended:</strong> Updated brief creates a new version</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Edge Cases</h3>
              <ul className="pattern-card__list">
                <li><strong>Sensitive data:</strong> Redact or mask PII/secrets before including</li>
                <li><strong>Large histories:</strong> Summarize relevant segments with links to full histories</li>
                <li><strong>Multiple recipients:</strong> Consider tailored briefs per recipient</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details for brief generation, visibility, integration, and trust/safety.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Brief Generation</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Template-driven prompts</span> with explicit sections: Goal, Work Done, Key Decisions, Open Questions, Risks, Artifacts</li>
                <li><span className="pattern-body--bold">Length control</span> – Enforce limits (~200–300 words) with prioritization rules</li>
                <li><span className="pattern-body--bold">Data selection</span> – Use retrieval or tagging to select most relevant inputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visibility &amp; Interaction</h3>
              <ul className="pattern-card__list">
                <li>Implement as reusable components (card, sheet, or modal) with standard layout and states</li>
                <li>Support markdown rendering for readability and emphasis</li>
                <li>Store briefs with IDs, workflow/task IDs, versions, timestamps, authors/agents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration</h3>
              <ul className="pattern-card__list">
                <li>Use lightweight banners or alerts for new brief notifications</li>
                <li>Integrate briefs into triage queues with sorting/filtering by priority</li>
                <li>Expose briefs via API for integration into CRM, ticketing, monitoring systems</li>
                <li>Send webhooks when briefs are created or updated</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust, Safety &amp; Compliance</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Auditability</span> – Maintain clear mapping between brief fields, source events, and downstream actions</li>
                <li><span className="pattern-body--bold">Guardrails</span> – Validate required fields before allowing approval</li>
                <li>Implement optional policy checks (certain risk levels must be reviewed by human)</li>
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
                Different types of handover briefs suited to various contexts and use cases.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent-to-Agent Briefs</h3>
              <p className="pattern-card__intro">Fully autonomous</p>
              <ul className="pattern-card__list">
                <li>Brief is not exposed to end users by default but is logged and available for audit</li>
                <li>Suitable for high-volume, low-risk automation where oversight is primarily retrospective</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent-to-Human Briefs</h3>
              <p className="pattern-card__intro">Interactive oversight</p>
              <ul className="pattern-card__list">
                <li>Handover requires human review and potentially approval</li>
                <li>Used in customer-facing scenarios, regulated actions, or major changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human-to-Agent Briefs</h3>
              <p className="pattern-card__intro">Structured delegation</p>
              <ul className="pattern-card__list">
                <li>Human users or operators create structured briefs for agents to act on</li>
                <li>Useful for task assignment workflows (e.g., incident commander briefing an agent)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-system Handover Briefs</h3>
              <p className="pattern-card__intro">Portable context</p>
              <ul className="pattern-card__list">
                <li>Briefs used to hand tasks between different products or vendors</li>
                <li>The brief serves as a common, portable context format</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks &amp; anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Common pitfalls that can undermine the effectiveness of handover briefs.
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
                  <h3 className="antipattern-title">Overly Long or Dense Briefs</h3>
                  <p className="antipattern-subtitle">Long-form text that mirrors the entire conversation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Verbose briefs defeat the purpose of a summary and reduce adoption. Recipients skim or ignore them entirely.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Strict length limits, prioritization of essential fields, and progressive disclosure of full context.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inaccurate or Hallucinated Summaries</h3>
                  <p className="antipattern-subtitle">Summaries that misrepresent facts or fabricate details.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Summaries that omit critical decisions or fabricate details undermine trust in the entire system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Confidence scoring, sampling of underlying data, easy access to &quot;view source,&quot; and human review for high-stakes workflows.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Changes Without Visibility</h3>
                  <p className="antipattern-subtitle">Agents update briefs without visible change history.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without visible versioning, audit and oversight become impossible, eroding trust over time.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Versioning with diffs, clear authorship (which agent/human changed what), and timestamps.</span>
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
                  <p className="antipattern-subtitle">Briefs don&apos;t clearly indicate who owns next steps.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When ownership is unclear, tasks can be dropped or duplicated, causing confusion and delays.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Explicit &quot;Next Owner&quot; field and status, with clear transitions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Exposure of Sensitive Data</h3>
                  <p className="antipattern-subtitle">Raw PII or secrets copied into shared briefs.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Copying sensitive data into briefs shared across roles or systems creates security vulnerabilities.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Automated detection and redaction, role-based visibility, and explicit labels for sensitive fields.</span>
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
                How Agent Handover Briefs apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Research → Writing</h3>
              <p className="pattern-card__intro">Content workflows</p>
              <p className="pattern-card__label">Brief contents</p>
              <ul className="pattern-card__list">
                <li>Goal: &quot;Draft a 1,000-word report for product leadership&quot;</li>
                <li>Summary: Key insights and data points</li>
                <li>Decisions: Which segments to prioritize</li>
                <li>Open questions: Needed clarifications on audience or tone</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Onboarding</h3>
              <p className="pattern-card__intro">Enterprise accounts</p>
              <p className="pattern-card__label">Brief contents</p>
              <ul className="pattern-card__list">
                <li>Customer goals and constraints</li>
                <li>Tech stack and integration preferences</li>
                <li>High-value status and any red flags</li>
                <li>Support staff annotations for strategic accounts</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Supply Chain &amp; Inventory</h3>
              <p className="pattern-card__intro">Operations planning</p>
              <p className="pattern-card__label">Brief contents</p>
              <ul className="pattern-card__list">
                <li>Current inventory and demand forecast</li>
                <li>Constraints (lead times, supplier issues)</li>
                <li>Proposed actions and assumptions</li>
                <li>Manager approval before execution</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident Management</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-card__label">Brief contents</p>
              <ul className="pattern-card__list">
                <li>Symptoms, suspected root cause, impacted services</li>
                <li>Previous similar incidents and attempted remediations</li>
                <li>Open questions about blast radius or customer impact</li>
                <li>Central artifact in the incident timeline</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Sales &amp; Account Handoffs</h3>
              <p className="pattern-card__intro">Relationship continuity</p>
              <p className="pattern-card__label">Brief contents</p>
              <ul className="pattern-card__list">
                <li>Stakeholders, pain points, and decision timelines</li>
                <li>Competitive context and pricing sensitivity</li>
                <li>Recommended next steps and open questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess the effectiveness of Agent Handover Briefs as a trust-building pattern, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption &amp; Usage</h3>
              <ul className="pattern-card__list">
                <li>Percentage of handoffs with a brief generated</li>
                <li>Percentage of briefs edited or annotated before approval</li>
                <li>Time spent reading or editing briefs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality &amp; Alignment</h3>
              <ul className="pattern-card__list">
                <li>Rate of downstream corrections attributable to misunderstood context</li>
                <li>Survey-based ratings of brief usefulness by human recipients</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Reduction in repeated questions or redundant data gathering</li>
                <li>Time from handoff to completion compared to baselines</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk &amp; Incidents</h3>
              <ul className="pattern-card__list">
                <li>Incidents traceable to incorrect or missing brief content</li>
                <li>Compliance or audit findings related to lack of traceability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Ensuring handover briefs are usable by all team members.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Ensure brief content is screen-reader friendly with clear headings and list structures</li>
                <li>Provide text-to-speech or &quot;listen to summary&quot; controls for users who prefer audio</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Navigation &amp; Visual Design</h3>
              <ul className="pattern-card__list">
                <li>Support keyboard navigation for all controls (edit, approve, expand, etc.)</li>
                <li>Maintain sufficient contrast and typography hierarchy for key sections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design &amp; review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Brief Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is a structured brief generated for every multi-agent or cross-role handoff where risk warrants it?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do briefs adhere to length and formatting constraints for scannability?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Critical Elements</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are critical elements (goal, key decisions, open questions) always present and visually emphasized?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are briefs easy to edit, approve, or reject where human oversight is important?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Versioning &amp; History</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all briefs versioned and linked to underlying conversation or event history?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is sensitive data redacted or role-gated, with redactions clearly indicated?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Measurement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is telemetry for usage, quality, and incidents in place to refine the pattern over time?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
