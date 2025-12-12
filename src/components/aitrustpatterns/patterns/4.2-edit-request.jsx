import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import EditRequestDemo from '../demos/EditRequestDemo';

// SEO metadata for this pattern page
export const EDIT_REQUEST_SEO = {
  title: "Edit Request - AI Trust Pattern",
  description: "Inline editing of a previously sent request so users can refine intent after seeing how an AI agent interpreted it.",
  keywords: ["edit request", "AI prompts", "refine intent", "agentic AI", "conversational AI", "user intent", "AI trust patterns", "message editing", "request revision"],
  canonicalPath: "/agentic_ai_patterns/edit-request"
};

export default function EditRequestPattern() {
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
            <span className="pattern-header__index">4.2</span>
            <div>
              <h1 className="pattern-header__title">Edit Request</h1>
              <p className="pattern-header__subtitle">
                Inline editing of a previously sent request so users can refine intent after seeing how an AI agent interpreted it.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="4.2" patternTitle="Edit Request" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Edit Request is a conversational pattern that allows users to revise a previously sent prompt or instruction after the AI agent has already responded or taken preparatory actions. It typically appears in chat-style interfaces as an inline &quot;Edit&quot; affordance on the user&apos;s own messages.
            </p>
            <p className="pattern-body">
              The core idea is to acknowledge that intent often becomes clearer only after seeing how the system interpreted a request. By making it safe and easy to correct that request, the pattern:
            </p>
            <ul className="pattern-list">
              <li>Improves task accuracy by allowing rapid refinement of goals and constraints.</li>
              <li>Increases trust by providing a clear recovery path when the system &quot;misunderstands.&quot;</li>
              <li>Reduces prompt anxiety by signaling that requests are not permanent or brittle.</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/4.2 edit request.png"
              alt="Edit Request pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo Placeholder */}
        <section className="pattern-section" aria-label="Edit request example">
          <EditRequestDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without Edit Request, conversational AI systems often exhibit the following friction:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Post-hoc realization</span> – Users realize only after a response appears that the original request was ambiguous, underspecified, or framed poorly.
              </li>
              <li>
                <span className="pattern-body--bold">Tangled conversations</span> – The only recovery path is to append more prompts (&quot;Actually, include EMEA as well…&quot;) which can create long, tangled conversations and unstable context.
              </li>
              <li>
                <span className="pattern-body--bold">Propagating errors</span> – Incorrect assumptions derived from an early request can propagate through many steps, making it difficult to &quot;reset&quot; the interaction without starting a new conversation.
              </li>
            </ul>
            <p className="pattern-body">
              These issues erode trust, increase cognitive load, and make it harder to reason about what the AI agent is actually doing and why this specific result exists.
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
                  <span className="pattern-body--bold">Non-trivial interpretation</span> – The AI agent performs non-trivial interpretation of natural language (e.g., infers scope, filters, time ranges, entities, or configurations from free text).
                </li>
                <li>
                  <span className="pattern-body--bold">Subtle detail sensitivity</span> – The same request may lead to materially different outcomes depending on subtle details (e.g., region, customer segment, environment, data source).
                </li>
                <li>
                  <span className="pattern-body--bold">Long-lived conversations</span> – The conversation is long-lived, and users frequently refine their goals as they see intermediate outputs, plans, or assumptions.
                </li>
                <li>
                  <span className="pattern-body--bold">Auditability requirements</span> – The system must support auditability and explainability, making it important to understand which exact request led to which action.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The conversation is <span className="pattern-body--bold">short-lived and low stakes</span> – casual Q&A with no downstream actions or data changes.</li>
                <li>The primary input is already <span className="pattern-body--bold">highly structured</span> – form-based configuration with explicit fields and validations where ambiguity is minimal.</li>
                <li>Each request is <span className="pattern-body--bold">independent and small</span> – single-step translation or unit conversion where sending a new message is sufficient and editing offers little incremental value.</li>
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
                Edit Request wraps a user-authored message in a small set of controls that support revision, while maintaining the integrity of the conversation timeline and audit history.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline Message Controls
              </h3>
              <p className="pattern-card__intro">
                Hover or always-visible &quot;Edit&quot; icon/button on the user&apos;s own messages in the chat transcript.
              </p>
              <ul className="pattern-card__list">
                <li>Appears on message hover or as persistent icon</li>
                <li>Clear visual affordance for editability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Overflow Menu</h3>
              <p className="pattern-card__intro">
                &quot;Edit request&quot; option within a contextual menu on the message.
              </p>
              <ul className="pattern-card__list">
                <li>Three-dot menu with &quot;Edit request&quot; option</li>
                <li>Groups with other message actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System Suggestions</h3>
              <p className="pattern-card__intro">
                Inline system hint following a response that appears misaligned with stated intent.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Not what you intended? Edit request&quot;</li>
                <li>Contextual prompt when mismatch detected</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard Shortcut</h3>
              <p className="pattern-card__intro">
                For power users, a shortcut when focus is on a specific message.
              </p>
              <ul className="pattern-card__list">
                <li>Arrow key navigation through transcript</li>
                <li>Shortcut to enter edit mode</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Editable User Request Message</h3>
            <p className="pattern-card__intro">
              The fundamental object is the user&apos;s original timestamped message, visually tagged as &quot;Edited&quot; once changes are saved.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label & Description</p>
                <ul className="pattern-card__list">
                  <li><em>Label:</em> Original timestamped message</li>
                  <li><em>Description:</em> The natural language instruction or prompt that the AI agent used as input</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Edit (primary)</li>
                  <li>Save / Submit changes</li>
                  <li>Cancel / Discard changes</li>
                  <li>Copy request text to clipboard</li>
                  <li>(Optional) &quot;Branch from here&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Original vs. edited content (version history)</li>
                  <li>Author and role (in multi-user environments)</li>
                  <li>Impact indicators (&quot;Used to generate: 2 reports&quot;)</li>
                  <li>Status flags (&quot;Locked due to executed production changes&quot;)</li>
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
                The lifecycle of Edit Request spans from initial message through editing, re-execution, and history updates.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>The user sends a request in natural language.</li>
                <li>The AI agent interprets it, optionally surfaces assumptions or a plan.</li>
                <li>Returns a response and/or executes side-effectful actions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Discovery of Misalignment</h3>
              <ul className="pattern-card__list">
                <li>The user notices that the response does not match intent.</li>
                <li>Missing criteria, wrong timeframe, wrong entity, mistaken environment.</li>
                <li>The system presents a visible edit affordance.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Entering Edit Mode</h3>
              <ul className="pattern-card__list">
                <li>Message transforms into an editable field in place.</li>
                <li>Original text appears pre-filled.</li>
                <li>Other messages remain visible but de-emphasized.</li>
                <li>Save/Submit and Cancel controls appear.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Validation & Guidance</h3>
              <ul className="pattern-card__list">
                <li>Lightweight inline guidance or validation.</li>
                <li>&quot;Time period required,&quot; &quot;Ambiguous region name.&quot;</li>
                <li>Warnings about constraints or past actions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Saving & Re-triggering</h3>
              <ul className="pattern-card__list">
                <li>Agent reprocesses the updated message.</li>
                <li>In-place continuation or branching options.</li>
                <li>Downstream content flagged as obsolete or replaced.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Timeline & History Updates</h3>
              <ul className="pattern-card__list">
                <li>Transcript reflects &quot;Edited 2 minutes ago.&quot;</li>
                <li>Downstream messages replaced or dimmed.</li>
                <li>Audit history keeps both original and edited text.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Ongoing Iteration</h3>
              <ul className="pattern-card__list">
                <li>The user may repeat this pattern as understanding evolves.</li>
                <li>Treat the request as a living specification of intent.</li>
                <li>System may adaptively propose edits based on observed confusion patterns.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building a robust Edit Request implementation.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Defining Safe Edit Boundaries</h3>
              <ul className="pattern-card__list">
                <li>Allow edits for messages that only affected <span className="pattern-body--bold">internal state</span> (analysis, planning, interpretation, retrieval).</li>
                <li>Carefully restrict edits for messages that led to <span className="pattern-body--bold">irreversible or externally visible actions</span>.</li>
                <li>Disable edit with clear reason or support edits only as a <span className="pattern-body--bold">new branch</span>.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Versioning & Auditability</h3>
              <ul className="pattern-card__list">
                <li>Maintain version history: original text, edited text, timestamps, editor identity.</li>
                <li>Clear audit log statements linking actions to request versions.</li>
                <li>For enterprise/regulated environments, ensure history is <span className="pattern-body--bold">immutable</span>.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. UI States & Visual Design</h3>
              <ul className="pattern-card__list">
                <li>Distinguish: normal messages, currently editing, previously edited, superseded responses.</li>
                <li>Avoid abrupt layout shifts when switching into edit mode.</li>
                <li>Make edit affordance discoverable but not dominant.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Re-Execution Strategy</h3>
              <ul className="pattern-card__list">
                <li>Re-run the full reasoning chain from the edited message onward.</li>
                <li>Refresh external tool calls if they depend on changed parameters.</li>
                <li>Avoid redoing heavy or irreversible side effects.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Handling Streaming Responses</h3>
              <ul className="pattern-card__list">
                <li>Entering edit mode should cancel ongoing streaming.</li>
                <li>After editing, restart streaming with a clear separator.</li>
                <li>Provide explicit feedback when an edit interrupts a response.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Permissions & Multi-User</h3>
              <ul className="pattern-card__list">
                <li>Restrict edits to the message author by default.</li>
                <li>Allow elevated roles to edit with clear labeling.</li>
                <li>Consider branching over in-place editing in shared workspaces.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Copy & Export Affordances</h3>
              <ul className="pattern-card__list">
                <li>Provide explicit <span className="pattern-body--bold">Copy request</span> control on each message.</li>
                <li>Copy only textual request, not system labels or internal IDs.</li>
                <li>Consider &quot;Copy with context&quot; variant including system assumptions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & Microcopy Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              Clear, consistent language helps users understand the editing experience and its implications.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Effective microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Edit request&quot; or &quot;Edit message&quot; rather than generic &quot;Edit.&quot;</li>
                  <li>&quot;Edited 3 minutes ago&quot; – generally sufficient for history.</li>
                  <li>&quot;Original request retained in audit log&quot; – for regulated contexts.</li>
                  <li>&quot;Earlier version,&quot; &quot;Superseded by updated request,&quot; or &quot;Replaced after edit.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Generic &quot;Edit&quot; without context.</li>
                  <li>No explanation when editing is disabled.</li>
                  <li>Long, verbose explanations in superseded sections.</li>
                  <li>Unclear labels that don&apos;t communicate what was affected.</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain When Disabled</h3>
                <ul className="pattern-card__list">
                  <li>&quot;Edit disabled because this request triggered changes in production.&quot;</li>
                  <li>&quot;Create a new request to apply further changes.&quot;</li>
                  <li>Always provide a reason and alternative path.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Label Actions Clearly</h3>
                <ul className="pattern-card__list">
                  <li>&quot;Edit request&quot; not just &quot;Edit&quot;</li>
                  <li>&quot;Save changes&quot; and &quot;Cancel&quot;</li>
                  <li>&quot;Branch from here&quot; for creating alternatives</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  History Labels
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Prefer concise labels over long explanations</li>
                  <li>&quot;Edited 3 minutes ago&quot;</li>
                  <li>&quot;Superseded by updated request&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations</p>
              <p className="pattern-body pattern-body--narrow">
                Different manifestations of the pattern suited to different contexts and risk levels.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. In-Place Edit (Linear Timeline)</h3>
              <p className="pattern-card__intro">
                The edited message replaces the original in the main transcript.
              </p>
              <ul className="pattern-card__list">
                <li>Subtle &quot;Edited&quot; tag and audit log capture what changed</li>
                <li><span className="pattern-body--bold">Pros:</span> Simple mental model, less UI overhead</li>
                <li><span className="pattern-body--bold">Cons:</span> Risk of confusion in multi-user environments</li>
                <li><span className="pattern-body--bold">Best for:</span> Personal copilots, low-to-medium risk tasks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Branch From Here</h3>
              <p className="pattern-card__intro">
                Editing creates a new conversation branch starting at that message.
              </p>
              <ul className="pattern-card__list">
                <li>UI shows &quot;Branch from here&quot; alongside or instead of &quot;Edit&quot;</li>
                <li>New branch inherits context up to that message but diverges</li>
                <li>Original branch remains intact and auditable</li>
                <li><span className="pattern-body--bold">Best for:</span> Experimentation, multi-stakeholder workflows, high-risk domains</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Edit Within Structured Card</h3>
              <p className="pattern-card__intro">
                The AI converts free text into a structured &quot;request card&quot; for editing.
              </p>
              <ul className="pattern-card__list">
                <li>Users adjust fields (date range, region, metric) instead of text</li>
                <li>Combines flexibility of natural language with clarity of forms</li>
                <li><span className="pattern-body--bold">Best for:</span> Analytics, configuration changes, repetitive workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Accessibility considerations</p>
            <p className="pattern-body">
              Ensure the Edit Request pattern is usable by everyone, including keyboard and screen reader users.
            </p>
            <ul className="pattern-list">
              <li>Ensure all edit-related controls are <span className="pattern-body--bold">keyboard accessible</span>: Tab focus on messages, clear focus states on icons and buttons.</li>
              <li>Expose keyboard shortcuts but don&apos;t require them.</li>
              <li>Provide meaningful labels for screen readers: &quot;Edit request from [timestamp]&quot;, &quot;Request edited; original content available in history.&quot;</li>
              <li>Avoid reliance on hover-only affordances on touch devices; ensure edit entry points are reachable via taps and menus.</li>
              <li>Maintain adequate contrast for edited badges, warnings, and superseded labels.</li>
            </ul>
          </div>
        </section>

        {/* Error & Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Error & edge cases</p>
            <p className="pattern-body">
              Handle these scenarios gracefully to maintain trust.
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Conflicting edits:</span> In collaborative contexts, if two participants attempt to edit the same request, prefer a last-writer-wins model with conflict messaging, or disallow concurrent edits and surface a clear warning.
              </li>
              <li>
                <span className="pattern-body--bold">Backend failure on re-execution:</span> If the AI agent or tools fail when processing the edited request, keep the original request and its outputs intact and show an explicit, non-destructive error state.
              </li>
              <li>
                <span className="pattern-body--bold">Timeouts and long-running tasks:</span> When re-running a heavy workflow upon edit, clearly indicate that a new run is in progress and which outputs correspond to which version.
              </li>
            </ul>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and usability.
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
                  <h3 className="antipattern-title">Silent Rewriting</h3>
                  <p className="antipattern-subtitle">Changing what a user previously wrote without a visible marker.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Changing what a user previously wrote without a visible &quot;Edited&quot; marker or versioning undermines trust and makes debugging impossible.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show &quot;Edited&quot; indicators and maintain version history.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Retroactive Change of Irreversible Actions</h3>
                  <p className="antipattern-subtitle">Presenting an edited request as if it triggered a past external change.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Presenting an edited request as if it were the one that triggered a past external change can mislead stakeholders and violate compliance requirements.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Lock editing for requests that triggered irreversible actions, or branch instead.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Edit Affordance</h3>
                  <p className="antipattern-subtitle">Burying the edit option in obscure interactions only.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If editing is essential for correcting misunderstandings, burying it in a deep menu or gesture-only control can increase frustration.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make edit discoverable via hover, inline icons, or contextual menus.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Aggressive Auto-Save</h3>
                  <p className="antipattern-subtitle">Automatically overwriting the request while the user is experimenting.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Automatically overwriting the request while the user is still experimenting with alternatives can lead to accidental loss of the base prompt that actually worked.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Require explicit save action and provide cancel option.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How Edit Request applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Analytics Copilot</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Initial:</span> &quot;Show Q4 sales performance.&quot;</li>
                <li><span className="pattern-body--bold">Agent assumes:</span> Global region, revenue only.</li>
                <li><span className="pattern-body--bold">User edits to:</span> &quot;Show Q4 EMEA sales performance with revenue and units by product line.&quot;</li>
                <li><span className="pattern-body--bold">Result:</span> System regenerates charts, marks previous as &quot;Earlier version.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Agent Assist</h3>
              <p className="pattern-card__intro">B2B</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Initial:</span> &quot;Draft a response explaining the plan cannot be upgraded mid-cycle.&quot;</li>
                <li><span className="pattern-body--bold">Agent:</span> Generates standard response.</li>
                <li><span className="pattern-body--bold">User realizes:</span> Customer is on enterprise contract with exception.</li>
                <li><span className="pattern-body--bold">User edits:</span> Incorporates nuance, AI generates new draft.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Content Copilot</h3>
              <p className="pattern-card__intro">B2C/Web</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Initial:</span> &quot;Create a launch email for our new feature.&quot;</li>
                <li><span className="pattern-body--bold">Agent:</span> Produces casual tone email.</li>
                <li><span className="pattern-body--bold">User edits to:</span> &quot;...in a more technical tone for existing customers with 3+ months usage.&quot;</li>
                <li><span className="pattern-body--bold">Result:</span> AI regenerates with clear version mapping.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps / Infrastructure Agent</h3>
              <p className="pattern-card__intro">B2B PaaS</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Initial:</span> &quot;Plan a deployment of service X to production.&quot;</li>
                <li><span className="pattern-body--bold">Agent:</span> Presents deployment plan.</li>
                <li><span className="pattern-body--bold">User edits:</span> Clarifies deployment should go to staging first.</li>
                <li><span className="pattern-body--bold">Result:</span> System updates plan; previous production changes remain in log.</li>
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
                Track these metrics to evaluate whether Edit Request is working as intended.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption</h3>
              <ul className="pattern-card__list">
                <li>Percentage of conversations where at least one request is edited.</li>
                <li>Frequency of edits per conversation and by segment (novices vs. experts).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Correction Effectiveness</h3>
              <ul className="pattern-card__list">
                <li>Success rate of tasks after an edit vs. without an edit.</li>
                <li>Reduction in follow-up clarification messages after Edit Request is used.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Qualitative feedback about control, safety, and predictability.</li>
                <li>NPS or satisfaction scores before and after introducing the pattern.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk Signals</h3>
              <ul className="pattern-card__list">
                <li>Frequency of attempted edits on requests tied to irreversible actions.</li>
                <li>Incidents where misunderstanding persisted despite edits.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Related patterns</p>
            <p className="pattern-body">
              Edit Request works well in combination with these other patterns:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">4.1 Structured Clarification Prompts</span> – The agent proactively asks targeted questions when a request is ambiguous, before executing. Often used in combination with Edit Request to minimize misinterpretation.
              </li>
              <li>
                <span className="pattern-body--bold">3.6 Rollback & Version History</span> – Provides recovery from actions already taken (e.g., reverting a change or discarding an output), complementing Edit Request, which focuses on correcting the intent going forward.
              </li>
              <li>
                <span className="pattern-body--bold">4.3 Confirmed Assumptions Panel</span> – Explicitly surfaces how the agent interpreted a request (e.g., selected region, timeframe, filters), making it easier to notice when an edit is needed.
              </li>
            </ul>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist for design & review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Discoverability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the edit affordance visible and easy to find on user messages?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system suggest editing when a response appears misaligned?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Safety & Boundaries</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are edits disabled or branched for requests that triggered irreversible actions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear explanation when editing is not allowed?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">History & Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are edited messages clearly marked with &quot;Edited&quot; indicators?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is version history maintained and accessible for audit purposes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Experience</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does editing happen inline without jarring layout shifts?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are downstream responses clearly marked as superseded or replaced?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
