import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import SourceAnchoringDemo from '../demos/SourceAnchoringDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const SOURCE_ANCHORING_GROUNDING_SEO = {
  title: "Source Anchoring & Grounding - AI Trust Pattern",
  description: "Connects AI-generated outputs to verifiable underlying sources so that every critical statement can be traced, inspected, and trusted.",
  keywords: ["AI citations", "source grounding", "AI transparency", "verifiable AI", "AI trust", "evidence-based AI", "AI provenance", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/source-anchoring-grounding"
};


export default function SourceAnchoringGroundingPattern() {
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
            <span className="pattern-header__index">6.1</span>
            <div>
              <h1 className="pattern-header__title">Source Anchoring & Grounding</h1>
              <p className="pattern-header__subtitle">
                Connects AI-generated outputs to verifiable underlying sources so that every critical statement can be traced, inspected, and trusted.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.1" patternTitle="Source Anchoring & Grounding" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Source Anchoring & Grounding is a trust pattern that links AI responses to the underlying evidence the system relied on—documents, code, databases, logs, dashboards, or external APIs.
            </p>
            <p className="pattern-body">
              It typically appears alongside AI-generated messages in chat interfaces, result views, or side panels. The core idea is simple: do not ask users to &quot;just trust the AI.&quot; Instead, make it trivial to verify key statements, understand where they came from, and judge their reliability.
            </p>
            <p className="pattern-body">
              This is especially important in B2B and B2C applications where the AI is operating over proprietary knowledge bases, internal systems, or sensitive workflows (legal, financial, HR, healthcare, compliance, engineering).
            </p>
            <p className="pattern-body">
              By tying each important claim to a visible source and making verification low-friction, the pattern:
            </p>
            <ul className="pattern-list">
              <li>Reduces the impact of hallucinations and subtle misinterpretations</li>
              <li>Clarifies what is grounded in enterprise data vs. what is inferred or heuristic</li>
              <li>Supports auditability, compliance, and accountability across teams</li>
              <li>Builds a mental model that AI acts as a lens over existing systems, not as an opaque oracle</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/6.1 source anchoring.png"
              alt="Source Anchoring & Grounding pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This interactive demo simulates an AI legal assistant analyzing a Master Services Agreement. Ask a question about data breach liability and watch as the AI streams a response with inline citations. Hover over or click the citation numbers (e.g., [1], [2]) to see the exact source clauses highlighted in the document viewer on the right. Notice how each claim is anchored to specific, verifiable passages, making it easy to validate the AI's interpretation.
            </p>
          </div>
          <SourceAnchoringDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit grounding, AI answers often feel like authoritative guesses. This creates multiple friction points:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque reasoning</span> – The system returns a confident answer, but users cannot see what it looked at or how it arrived there. Every answer becomes a mini trust exercise.
              </li>
              <li>
                <span className="pattern-body--bold">High verification cost</span> – Validating AI output requires manual search through documents, dashboards, or code, often taking longer than doing the task without AI.
              </li>
              <li>
                <span className="pattern-body--bold">Risk and accountability gaps</span> – In regulated or high-stakes domains, internal stakeholders need an evidence trail for decisions. Ungrounded AI responses are hard to defend in audits, reviews, or incidents.
              </li>
              <li>
                <span className="pattern-body--bold">False sense of security</span> – Traditional &quot;citation-style&quot; UI can be misleading if sources are poorly matched, stale, or only weakly related to the answer.
              </li>
            </ul>
            <p className="pattern-body">
              In short, ungrounded responses make AI feel clever but unreliable, which blocks adoption and undermines long-term trust in the system.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when...
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">Evidence-sensitive workflows</span> – Where decisions rely on specific policies, contracts, guidelines, logs, metrics, or research (e.g., legal review, compliance, HR, financial analysis, medical, observability, security).
                </li>
                <li>
                  <span className="pattern-body--bold">Enterprise knowledge assistants</span> – AI agents that answer questions about internal systems, product docs, customer records, or project history, especially in B2B SaaS tools.
                </li>
                <li>
                  <span className="pattern-body--bold">Data-backed recommendations and summaries</span> – Any AI feature that summarizes multiple sources, recommends actions, or produces narratives based on internal data.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-agent or multi-step workflows</span> – When an agent calls tools (e.g., search, SQL, APIs, code execution) and teams need visibility into which calls and artifacts support which parts of the response.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, reversible tasks</span> – For playful, creative, or highly reversible tasks where errors are inexpensive and quick to fix.</li>
                <li><span className="pattern-body--bold">Obvious, local context</span> – When the AI is operating on a single, small artifact already in full view and the &quot;source&quot; is self-evident.</li>
                <li><span className="pattern-body--bold">Trivial or generic knowledge</span> – For generic queries answered from widely accepted public knowledge where adding grounding would only add clutter.</li>
                <li><span className="pattern-body--bold">Heavy cost with minimal benefit</span> – When establishing reliable sources is technically complex, but the domain has minimal risk.</li>
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
                Source Anchoring & Grounding typically consists of three coordinated surfaces: annotated AI answers, evidence surfaces, and source lists.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline within AI messages
              </h3>
              <p className="pattern-card__intro">
                Superscript markers, small link icons, or &quot;View sources (3)&quot; chips appearing directly in or near text segments.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Side panel / details drawer</h3>
              <p className="pattern-card__intro">
                A &quot;Sources,&quot; &quot;Evidence,&quot; or &quot;References&quot; affordance on the message, opening a right-hand panel with a scrollable list of documents, queries, and tool calls.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Split-screen mode</h3>
              <p className="pattern-card__intro">
                A toggle or &quot;Open side-by-side&quot; control that rearranges the layout so the AI answer and primary source content are visible together.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tool activity timeline</h3>
              <p className="pattern-card__intro">
                For agentic systems, an activity log or timeline exposing tool calls that can be expanded for details.
              </p>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Source Citation</h3>
            <p className="pattern-card__intro">
              The core object is the source citation (sometimes presented as a chip, superscript, or list item).
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Employee Handbook – Time Off Policy&quot;</li>
                  <li>&quot;Repo: api-service &rsaquo; auth.ts:42–61&quot;</li>
                  <li>&quot;Dashboard: ARR by Segment&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Clause defining carry-over PTO&quot;</li>
                  <li>&quot;Lines referenced in bug explanation&quot;</li>
                  <li>&quot;Query slice used for this forecast&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Open in viewer / modal</li>
                  <li>Jump to highlighted section</li>
                  <li>Expand to full context</li>
                  <li>Copy link to this location</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Last updated / ingested date</li>
                  <li>Source type (doc, code, API, dashboard)</li>
                  <li>Confidence or match strength indicators</li>
                  <li>Access control cues (e.g., &quot;Restricted to HR&quot;)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                Different approaches to presenting source anchoring based on context and use case.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Inline Citations (Document-Style)</h3>
              <ul className="pattern-card__list">
                <li>Superscript numbers or small reference icons attached directly to text segments</li>
                <li>Best for long-form responses, reports, and explanations</li>
                <li>Works well with hover previews and &quot;jump to source&quot; interactions</li>
                <li>Requires careful styling to avoid overwhelming readers</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Evidence Chips & Source Summary</h3>
              <ul className="pattern-card__list">
                <li>Compact chips at the end of paragraphs or bullets</li>
                <li>Clicking a chip opens a side panel with full evidence</li>
                <li>Useful in chat UIs where full reference lists would be overkill</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Split-Screen Source Viewer</h3>
              <ul className="pattern-card__list">
                <li>Left pane shows AI answer, right pane shows source document</li>
                <li>Ideal for review workflows (legal, compliance, code review)</li>
                <li>Often paired with synchronized highlighting and scroll-locking</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Tool Trace & Provenance Timeline</h3>
              <ul className="pattern-card__list">
                <li>Chronological view of the agent&apos;s actions: searches, queries, API calls</li>
                <li>Each step can be expanded to show inputs, outputs, and associated answer segments</li>
                <li>Particularly valuable for technical, data, and operations users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                How source anchoring works from initial generation through long-running sessions and exports.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Generation</h3>
              <ul className="pattern-card__list">
                <li>Agent produces an answer and associates each key statement with retrieved sources</li>
                <li>UI displays a clean answer with compact citation markers</li>
                <li>Avoids excessive visual noise while maintaining traceability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. On Hover / Focus</h3>
              <ul className="pattern-card__list">
                <li>Hovering shows a lightweight preview: title, snippet, metadata</li>
                <li>Preview makes clear which part of source supports which part of answer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. On Click / Activation</h3>
              <ul className="pattern-card__list">
                <li>Opens a richer view: side panel, modal, or split-screen</li>
                <li>Shows source with referenced fragment highlighted</li>
                <li>Navigation includes obvious way back to original answer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Multi-source Inspection</h3>
              <ul className="pattern-card__list">
                <li>Multiple sources presented as list or tabs, ordered by relevance</li>
                <li>Consolidated &quot;Evidence&quot; section groups sources by type or document</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Re-grounding and Refresh</h3>
              <ul className="pattern-card__list">
                <li>&quot;Refresh using latest data&quot; or date-filtered re-grounding</li>
                <li>System regenerates with updated sources, clearly indicating changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Error and Absence States</h3>
              <ul className="pattern-card__list">
                <li>Clearly states when answer is not grounded in internal data</li>
                <li>Avoids fabricating citations</li>
                <li>Offers alternative actions (search, escalate, ask for details)</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Interaction History</h3>
              <ul className="pattern-card__list">
                <li>Each message retains its own set of sources in long-running chats</li>
                <li>Users can revisit earlier answers and access exact evidence from that time</li>
                <li>Supports auditability across sessions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Session End / Export</h3>
              <ul className="pattern-card__list">
                <li>Exports include inline or end-of-document references</li>
                <li>Source appendix with stable links back into the application</li>
                <li>Deep-links to specific source locations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & interaction guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for building trust through source grounding.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Based on internal HR policy documents&quot;</li>
                  <li>&quot;Source: Employee Handbook – Time Off Policy (updated Sep 2025)&quot;</li>
                  <li>&quot;3 sources found – click to view evidence&quot;</li>
                  <li>&quot;No relevant internal source found; showing general guidance&quot;</li>
                  <li>&quot;Metrics shown are from the last full data refresh (2 hours ago)&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Sources available&quot; (without indication of what or how many)</li>
                  <li>&quot;Verified&quot; (vague, doesn&apos;t explain what was verified)</li>
                  <li>&quot;Based on data&quot; (which data? when?)</li>
                  <li>Showing citation numbers without any preview or context</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Be Explicit About Grounding</h3>
                <ul className="pattern-card__list">
                  <li>Clearly indicate when grounded in internal sources vs. general knowledge</li>
                  <li>Use labels like &quot;Based on internal HR policy documents&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Avoid Over-Claiming</h3>
                <ul className="pattern-card__list">
                  <li>Don&apos;t imply everything is fully grounded if only portions are</li>
                  <li>Consider per-sentence indicators for high-risk domains</li>
                  <li>Use badges like &quot;Partially grounded&quot; or &quot;Fully grounded in 3 sources&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Prioritize Clarity Over Volume</h3>
                <ul className="pattern-card__list">
                  <li>Show the most relevant sources first</li>
                  <li>Avoid listing dozens of weak matches that dilute trust</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Consistent Naming</h3>
                <ul className="pattern-card__list">
                  <li>Source labels should match how documents and systems are named in the organization</li>
                  <li>Users should be able to mentally locate sources outside the AI interface</li>
                </ul>
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
                Implementation details that support robust source anchoring behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Retrieval & Mapping</h3>
              <ul className="pattern-card__list">
                <li>Use retrieval mechanisms that produce <span className="pattern-body--bold">reliable, structured links</span> between answer segments and sources (chunk IDs, line ranges, query IDs)</li>
                <li>Maintain stable identifiers for source locations so links remain valid over time</li>
                <li>Consider immutable versions or snapshots as documents evolve</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality Controls</h3>
              <ul className="pattern-card__list">
                <li>Implement checks to prevent or flag <span className="pattern-body--bold">hallucinated citations</span></li>
                <li>Periodically sample grounded answers and verify source alignment</li>
                <li>Consider confidence thresholds for when not to show a source</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Scalability</h3>
              <ul className="pattern-card__list">
                <li>Make previews and side-panel content lazy-loaded</li>
                <li>Cache commonly referenced documents and queries</li>
                <li>Use progressive disclosure on very large documents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Access Control</h3>
              <ul className="pattern-card__list">
                <li>Respect user and role-based permissions for all linked sources</li>
                <li>If a source is mentioned but not accessible, indicate it&apos;s restricted without leaking content</li>
                <li>Provide safe fallbacks (request access, contact owner)</li>
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
                How source anchoring applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Legal Review Agent</h3>
              <p className="pattern-card__intro">Contract Platform</p>
              <ul className="pattern-card__list">
                <li>Summarizes risk in vendor agreements with superscript citations</li>
                <li>Clicking opens split-screen view with relevant clauses highlighted</li>
                <li>Source summary groups citations by section (Indemnity, Termination, Data Protection)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Research & Insights Assistant</h3>
              <p className="pattern-card__intro">B2B Analytics Tool</p>
              <ul className="pattern-card__list">
                <li>Explains churn increase with evidence chips linking to dashboards and SQL queries</li>
                <li>Side panel shows underlying chart and notes data freshness</li>
                <li>Reduces need to manually reconstruct analysis</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Code Debugging Agent</h3>
              <p className="pattern-card__intro">Developer Platform</p>
              <ul className="pattern-card__list">
                <li>Explanation steps grounded to specific code lines and logs</li>
                <li>Inline markers link to code ranges in file tree</li>
                <li>Log snippets shown as expandable blocks with &quot;Open full log&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">HR Policy Advisor</h3>
              <p className="pattern-card__intro">Employee Portal</p>
              <ul className="pattern-card__list">
                <li>Answers grounded to latest HR policy documents and regional guidelines</li>
                <li>Top-level statement: &quot;Based on: Global Time Off Policy (updated Sep 2025)&quot;</li>
                <li>Inline citations highlight exact bullet points in document viewer</li>
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
                Pitfalls that can undermine trust when implementing source grounding.
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
                  <h3 className="antipattern-title">Cosmetic Citations</h3>
                  <p className="antipattern-subtitle">Citations that don&apos;t meaningfully point to relevant passages.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Adding citation icons that only show generic document titles without specific context, or that point to irrelevant passages, erodes trust quickly.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure citations link to specific, relevant passages with clear context.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming Detail</h3>
                  <p className="antipattern-subtitle">Too many citations creating cognitive overload.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing too many citations, long reference lists, or noisy traces can create cognitive overload. The pattern should reduce verification effort, not increase it.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Prioritize the most relevant sources and use progressive disclosure for additional evidence.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">False Sense of Certainty</h3>
                  <p className="antipattern-subtitle">Visual cues implying stronger grounding than exists.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Visual cues such as checkmarks, &quot;verified&quot; labels, or heavy emphasis on grounding can mislead users into over-trusting answers even when sources are weak or incomplete.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Accurately represent grounding strength and clearly communicate limitations.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Coverage</h3>
                  <p className="antipattern-subtitle">Only some answers are grounded without clear differentiation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If only some answers are grounded but the UI doesn&apos;t differentiate, users may assume all content is equally evidence-backed.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always indicate grounding status clearly, even when no sources are available.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Leaky Abstractions</h3>
                  <p className="antipattern-subtitle">Exposing raw technical data without context.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing raw JSON, SQL, or log payloads without any explanatory framing can confuse non-technical users and shift the burden of interpretation back onto them.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide user-friendly summaries with optional drill-down to technical details.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Track the effectiveness of Source Anchoring & Grounding with these measures.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage Metrics</h3>
              <ul className="pattern-card__list">
                <li>Rate of citation hover / click interactions per grounded message</li>
                <li>Engagement with split-screen or source panels for critical workflows</li>
                <li>Frequency of re-grounding or &quot;refresh with latest data&quot; requests</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Outcome Metrics</h3>
              <ul className="pattern-card__list">
                <li>Time to complete key tasks with vs. without grounding</li>
                <li>Reduction in escalations or manual verification requests</li>
                <li>Error or rework rates for AI-assisted outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Perception</h3>
              <ul className="pattern-card__list">
                <li>Self-reported trust and perceived reliability in surveys</li>
                <li>Qualitative feedback from power users and reviewers</li>
                <li>Whether sources feel relevant and sufficient</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality Audits</h3>
              <ul className="pattern-card__list">
                <li>Periodic evaluations of random grounded answers</li>
                <li>Check citation relevance and correctness</li>
                <li>Track incidents where misleading grounding contributed to negative outcomes</li>
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
              <p className="pattern-checklist-category__title">Source Linking</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are key statements in AI answers linked to specific, inspectable sources?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users verify claims with one or two simple interactions, not full manual searches?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Grounding Status</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is grounding status (fully grounded, partially grounded, ungrounded) clearly communicated?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system avoid fabricating citations and handle missing sources gracefully?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Usability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are sources labeled in a way that aligns with how documents and systems are known within the organization?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is citation UI accessible (keyboard, screen readers, contrast, focus states)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do logs or timelines show which tools and systems the agent used?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can earlier answers and their evidence be revisited for audit and debugging needs?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
