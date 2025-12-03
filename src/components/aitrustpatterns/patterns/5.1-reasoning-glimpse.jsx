import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const REASONING_GLIMPSE_SEO = {
  title: "Reasoning Glimpse (Chain-of-Thought Visualization) - AI Trust Pattern",
  description: "A structured, human-readable view of how an AI agent is approaching a request, surfaced as a lightweight plan, progress, rationale, and motion cues alongside the final answer.",
  keywords: ["AI reasoning", "chain of thought", "AI transparency", "AI trust", "progress visualization", "agentic UX", "AI audit trail", "reasoning trace"],
  canonicalPath: "/agentic_ai_patterns/reasoning-glimpse"
};

// Placeholder demo component
function ReasoningGlimpseDemo() {
  const styles = {
    demoWrapper: {
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
    },
    placeholderIcon: {
      width: '64px',
      height: '64px',
      margin: '0 auto 16px',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
    },
    placeholderTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#111827',
      margin: '0 0 8px 0',
    },
    placeholderDescription: {
      fontSize: '0.875rem',
      color: '#6b7280',
      margin: 0,
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.5,
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Reasoning Glimpse demo placeholder">
      <div style={styles.placeholderIcon}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12,6 12,12 16,14"></polyline>
        </svg>
      </div>
      <h3 style={styles.placeholderTitle}>Interactive Demo Coming Soon</h3>
      <p style={styles.placeholderDescription}>
        This demo will show an AI assistant with a visible reasoning trace, animated progress indicators, and step-by-step plan visualization.
      </p>
    </div>
  );
}

export default function ReasoningGlimpsePattern() {
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
            <span className="pattern-header__index">5.1</span>
            <div>
              <h1 className="pattern-header__title">Reasoning Glimpse (Chain-of-Thought Visualization)</h1>
              <p className="pattern-header__subtitle">
                A structured, human-readable view of how an AI agent is approaching a request, surfaced as a lightweight plan, progress, rationale, and motion cues alongside the final answer.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.1" patternTitle="Reasoning Glimpse" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Reasoning Glimpse is a pattern for making an AI agent&apos;s internal process visible at a human level. Instead of a black-box answer, the agent presents a simple plan, shows progress through that plan (visually and textually), and leaves behind a trace of why it took certain actions.
            </p>
            <p className="pattern-body">
              This pattern typically appears in or near the main conversational surface of an AI-enabled application (e.g., a chat interface, assistant panel, or &quot;Ask AI&quot; sidebar). It gives users a concise, structured summary of what the agent is doing: which steps it plans to take, which tools or data sources it will use, and what has been completed so far.
            </p>
            <p className="pattern-body">
              In chat-centric surfaces, motion plays a critical role. Subtle, continuous animations&mdash;such as pulsing status icons, animated step indicators, or skeleton loading states&mdash;make the agent feel actively engaged rather than stalled, while textual progress updates provide concrete reassurance.
            </p>
            <p className="pattern-body">
              The core idea is not to expose raw prompts or low-level chain-of-thought, but rather a curated, human-understandable view of the agent&apos;s reasoning, reinforced with visual cues. This helps users:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Trust</span> that the system is behaving systematically rather than hallucinating.</li>
              <li><span className="pattern-body--bold">Intervene early</span> (e.g., correct misunderstandings, redirect the task) instead of waiting for a wrong answer.</li>
              <li><span className="pattern-body--bold">Audit</span> how a result was produced, especially in regulated or high-impact environments.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Reasoning Glimpse example">
          <ReasoningGlimpseDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without any reasoning visibility, AI-powered systems often feel opaque and unpredictable:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Black-box answers</span> &ndash; Users receive polished outputs with no sense of how they were derived. This undermines trust, especially when the stakes are high (compliance, finance, healthcare, security, strategic decisions).
              </li>
              <li>
                <span className="pattern-body--bold">Uncertain progress and waiting anxiety</span> &ndash; Long-running tasks (multi-step analysis, search across many systems, heavy data processing) appear as a static message or generic spinner. Users do not know whether the system is stuck, making progress, or even understood the request correctly. In chat, a standard &quot;typing&quot; indicator is often too generic and disconnected from actual work.
              </li>
              <li>
                <span className="pattern-body--bold">No opportunity to course-correct</span> &ndash; If the agent misinterprets the request early on, users only discover it at the end, after waiting. There is no structured way to interrupt or steer the process (&quot;Stop looking at marketing data; focus on billing records instead&quot;).
              </li>
              <li>
                <span className="pattern-body--bold">Weak auditability and accountability</span> &ndash; Stakeholders cannot easily answer &quot;How was this recommendation produced?&quot; or &quot;Which documents and tools were used?&quot; This becomes critical in regulated industries and enterprise environments where decisions must be justified.
              </li>
            </ul>
            <p className="pattern-body">
              Reasoning Glimpse addresses these issues by turning an opaque internal process into a visible, controllable, and auditable workflow, with motion and animation reinforcing that the agent is actively working rather than idle.
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
                  <span className="pattern-body--bold">Complex, multi-step tasks</span> &ndash; For requests that naturally break into several steps (e.g., research, analysis, planning, sequencing tool calls) and are not instantaneous.
                </li>
                <li>
                  <span className="pattern-body--bold">High-stakes or regulated domains</span> &ndash; Compliance, cybersecurity, HR, finance, legal, healthcare, or any area where decisions require traceability and justification.
                </li>
                <li>
                  <span className="pattern-body--bold">Agentic workflows with tool orchestration</span> &ndash; When the AI agent calls APIs, executes workflows, modifies data, or coordinates with other services on behalf of the user.
                </li>
                <li>
                  <span className="pattern-body--bold">Collaborative environments</span> &ndash; When multiple stakeholders (e.g., analysts, managers, auditors) will review or act on the AI&apos;s output and need shared understanding of how it was produced.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, single-turn tasks</span> &ndash; Simple completions like rewriting a sentence, summarizing a short note, or generating quick draft content generally do not require visible step-by-step reasoning or animated progress beyond standard typing indicators.</li>
                <li><span className="pattern-body--bold">Highly predictable, bounded operations</span> &ndash; If the UI already makes behavior fully obvious (e.g., structured forms, known data transformations), adding a separate reasoning layer and custom animations may create noise.</li>
                <li><span className="pattern-body--bold">Derived details are trivial or redundant</span> &ndash; When steps would simply restate the obvious (&quot;1) Read prompt, 2) Answer prompt&quot;) without adding value, or animations would only repeat existing feedback, the pattern becomes clutter rather than clarity.</li>
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
                Reasoning Glimpse typically appears as a combination of a compact, inline representation of the agent&apos;s plan, progress, and activity within the chat or assistant reply (often enhanced with subtle continuous motion), and an optional expanded view that exposes a richer audit trail.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Inline in Agent Response
              </h3>
              <p className="pattern-card__intro">
                A small &quot;How this is being handled&quot; or &quot;Steps taken&quot; section beneath the AI reply header.
              </p>
              <ul className="pattern-card__list">
                <li>Often collapsed by default with a short summary (e.g., &quot;Planned 4 steps &middot; 2 completed so far&quot;)</li>
                <li>Minimal animated indicator while work continues</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Side Panel or Drawer</h3>
              <p className="pattern-card__intro">
                A &quot;View full reasoning&quot; or &quot;View trace&quot; control opens a persistent sidebar.
              </p>
              <ul className="pattern-card__list">
                <li>Shows full step timeline and detailed activity logs</li>
                <li>Subtle motion (e.g., animated progress bar, marching dots) reinforces which part of the trace is live</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Task or Job Details</h3>
              <p className="pattern-card__intro">
                For long-running or background tasks, a task detail page or job status modal contains the Reasoning Glimpse timeline.
              </p>
              <ul className="pattern-card__list">
                <li>Lets users revisit how the result was generated</li>
                <li>Motion is usually less prominent here, focusing on state changes rather than continuous activity</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Reasoning Step</h3>
            <p className="pattern-card__intro">
              The core repeated unit in this pattern is the Reasoning Step. Each step represents one meaningful phase of the agent&apos;s process, rather than every micro-thought. Steps are typically aligned with user-understandable goals.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>A short, action-oriented description</li>
                  <li>&quot;Gather relevant documents&quot;</li>
                  <li>&quot;Analyze trend anomalies&quot;</li>
                  <li>&quot;Check policy against GDPR Art. 13&quot;</li>
                  <li>Communicates goal and scope, not implementation details</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>One or two lines in clear, non-technical language</li>
                  <li>&quot;Scanning the latest privacy and security policies in the compliance workspace.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Expand / collapse for step-level details</li>
                  <li>Stop or skip the step (if safe and supported)</li>
                  <li>Retry, re-run with adjusted context</li>
                  <li>Flag as incorrect / irrelevant for feedback</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Status: Planned, In progress, Completed, Skipped, Failed</li>
                  <li>Time markers: start time, end time, duration</li>
                  <li>Tool usage: which internal or external tools/services were invoked</li>
                  <li>Scope: which datasets, documents, or entities were included</li>
                  <li>Confidence / quality indicators (if interpretable)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Visual State &amp; Motion</p>
                <ul className="pattern-card__list">
                  <li>Icon state: hollow circle for Planned, pulsing ring for In progress, filled checkmark for Completed</li>
                  <li>Continuous but subtle activity animation for In progress (shimmer bar, pulsing glow, moving dots)</li>
                  <li>Brief transition animations when states change</li>
                  <li>Static, high-contrast icons for Completed / Failed to reduce visual noise</li>
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
                The lifecycle of a Reasoning Glimpse spans from request submission through completion and persistent audit trail.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Request Submitted</h3>
              <ul className="pattern-card__list">
                <li>User sends a request that requires non-trivial reasoning or orchestration</li>
                <li>System classifies the request as multi-step and generates an internal plan</li>
                <li>Agent message stub appears with &quot;Planning approach&hellip;&quot; and a low-intensity animation</li>
                <li>Animation is tightly coupled to actual planning work</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Plan Surfaced</h3>
              <ul className="pattern-card__list">
                <li>Agent presents a short, numbered list of planned steps (typically 3&ndash;7)</li>
                <li>Currently active step is visually distinguished (highlighted row, animated progress pill)</li>
                <li>Only high-level list visible by default; full timeline accessible via expansion</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Live Progress Through Steps</h3>
              <ul className="pattern-card__list">
                <li>As each step starts, UI updates status (e.g., &quot;Step 2/4: Retrieving documents&quot;)</li>
                <li>Step&apos;s visual state switches to active animation</li>
                <li>Sub-rows show key activities (&quot;Queried contracts database&quot;, &quot;Opened privacy-policy-v3.docx&quot;)</li>
                <li>Progress indicator paired with motion for long-running steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. User Intervention &amp; Steering</h3>
              <ul className="pattern-card__list">
                <li>Stop the entire task (&quot;Stop analysis&quot;)</li>
                <li>Cancel or skip a specific step</li>
                <li>Adjust scope mid-run (&quot;Exclude data before 2023&quot;)</li>
                <li>Controls grouped near active step; UI animates additions/removals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Completion &amp; Consolidation</h3>
              <ul className="pattern-card__list">
                <li>Agent presents the primary answer or artifact</li>
                <li>Reasoning Glimpse shows completed timeline with final status per step</li>
                <li>All continuous motion removed; brief completion animation</li>
                <li>Calm, static representation suitable for reading and sharing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Persistent Audit Trail</h3>
              <ul className="pattern-card__list">
                <li>Full trace stored and accessible from associated entities</li>
                <li>Audit trail can be filtered (e.g., &quot;Show only tool calls&quot;)</li>
                <li>Supports debugging, reviews, and audits</li>
                <li>In historical views, motion is generally disabled</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Failure &amp; Recovery</h3>
            <ul className="pattern-card__list">
              <li>If a step fails (e.g., tool unavailable, permissions missing), the reasoning view clearly indicates the failed step, cause, and impact</li>
              <li>Animation changes from continuous &quot;in progress&quot; motion to a stable error state (icon shake + attention border once, then static warning icon)</li>
              <li>Agent may adapt the plan (&quot;Fallback to cached data,&quot; &quot;Skip step 3 and continue with partial analysis&quot;)</li>
              <li>Trace records the adjustment with a brief transition animation</li>
            </ul>
          </div>
        </section>

        {/* States & Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States &amp; variants</p>
              <p className="pattern-body pattern-body--narrow">
                Different depth levels and presentation approaches for Reasoning Glimpse depending on context and user needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Shallow Glimpse (Default)</h3>
              <p className="pattern-card__intro">The default inline experience for most users.</p>
              <ul className="pattern-card__list">
                <li>2&ndash;4 short steps displayed inline</li>
                <li>Small, continuous progress animation (pulsing dots, thin animated bar)</li>
                <li>Designed for quick scanning and reassurance</li>
                <li>Ideal for most everyday B2B/B2C interactions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Expanded Reasoning Trace</h3>
              <p className="pattern-card__intro">Full detail for power users and auditors.</p>
              <ul className="pattern-card__list">
                <li>Full list of steps with sub-activities, tool calls, and metadata</li>
                <li>Motion focuses on active step and new activity entries</li>
                <li>Used when something looks off and requires investigation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Developer / Debug Mode</h3>
              <p className="pattern-card__intro">Restricted mode for internal teams.</p>
              <ul className="pattern-card__list">
                <li>Exposes more technical detail (internal prompts, latency, tool call payloads)</li>
                <li>May include detailed timelines, duration bars, tool latency graphs</li>
                <li>Generally not appropriate for end users</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline &quot;How this is being handled&quot;</h3>
              <p className="pattern-card__intro">Compact component under each major AI response.</p>
              <ul className="pattern-card__list">
                <li>Step chips or numbered list</li>
                <li>Subtle animated element only while agent is actively working</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Timeline or Activity Log</h3>
              <p className="pattern-card__intro">Chronological vertical representation.</p>
              <ul className="pattern-card__list">
                <li>Aligns steps with timestamps and messages</li>
                <li>Motion highlights current position and recent additions</li>
                <li>Older entries remain static</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Embedded in Task/Job Cards</h3>
              <p className="pattern-card__intro">For asynchronous or background jobs.</p>
              <ul className="pattern-card__list">
                <li>Surfaces on job detail page</li>
                <li>Motion reduced to incremental progress updates (percent complete, progress bar)</li>
                <li>Avoids constant distraction in list views</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motion & Visual Feedback Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Motion &amp; visual feedback guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Guidelines for using animation and visual cues effectively in Reasoning Glimpse implementations.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Continuous but Calm Activity Cues</h3>
              <ul className="pattern-card__list">
                <li>Use small, continuous animations (pulses, shimmers, slow-moving dots) to indicate ongoing reasoning</li>
                <li>Avoid fast, bouncing, or highly saturated animations that feel stressful in enterprise workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tie Animation to Real State</h3>
              <ul className="pattern-card__list">
                <li>Motion should map tightly to actual system states and progress</li>
                <li>Animated indicators should start when agent begins work, update as steps advance, and stop when work completes or fails</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integrate with Typing Indicators</h3>
              <ul className="pattern-card__list">
                <li>Reasoning Glimpse motion should complement (or replace) generic typing indicators</li>
                <li>For complex tasks, show &quot;Reasoning / running tools&quot; animations rather than a typing bubble</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Respect User Preferences</h3>
              <ul className="pattern-card__list">
                <li>Honor prefers-reduced-motion settings where available</li>
                <li>Provide a motion-light version where continuous animations are replaced with state changes and static icons</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Misleading &quot;Infinite&quot; Loaders</h3>
              <ul className="pattern-card__list">
                <li>Long-running continuous animation without accompanying textual updates can erode trust</li>
                <li>Pair motion with concrete information (current step, item counts, elapsed time, stage labels)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Limit Concurrent Animations</h3>
              <ul className="pattern-card__list">
                <li>In multi-agent or multi-task contexts, restrict active motion to the most relevant task(s)</li>
                <li>Use static indicators for other tasks to prevent visual overload</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content guidelines</p>
            <p className="pattern-body">
              Effective Reasoning Glimpse content uses human language, summarizes rather than dumps, keeps steps scoped, and clarifies limitations.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Effective step descriptions</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Compared latest policy against GDPR Articles 13&ndash;15; identified missing disclosures about data retention and access rights.&quot;</li>
                  <li>&quot;Scanning the latest privacy and security policies in the compliance workspace.&quot;</li>
                  <li>&quot;2 of 5 documents unavailable&quot; &ndash; clearly indicates gaps</li>
                  <li>&quot;Assuming that the &apos;customers&apos; table only includes active accounts&quot; &ndash; surfaces assumptions</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak step descriptions</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Thinking if the policy is compliant&hellip; maybe it is&hellip; will check again&hellip;&quot;</li>
                  <li>&quot;1) Read prompt, 2) Answer prompt&quot; &ndash; restates the obvious</li>
                  <li>Exposing internal model jargon (&quot;tokenization,&quot; &quot;vector search embedding&quot;)</li>
                  <li>Raw chain-of-thought dumps without curation</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Human, Domain-Appropriate Language</h3>
                <ul className="pattern-card__list">
                  <li>Steps should align with how subject-matter experts describe their work</li>
                  <li>Avoid exposing internal model jargon unless the audience is technical and benefits from that detail</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Summarize, Do Not Dump</h3>
                <ul className="pattern-card__list">
                  <li>Reasoning Glimpse is not a raw chain-of-thought dump</li>
                  <li>Each step should capture the intent and result, rather than every intermediate thought</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Keep Steps Scoped &amp; Actionable</h3>
                <ul className="pattern-card__list">
                  <li>Each step should feel like a meaningful unit of work that could be performed by a human analyst</li>
                  <li>For most tasks, 3&ndash;7 steps strike a balance between granularity and readability</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Surface Caveats &amp; Assumptions</h3>
                <ul className="pattern-card__list">
                  <li>Steps should note critical assumptions where possible</li>
                  <li>Ensure motion and content align &ndash; &quot;Finished analyzing&quot; should only appear when animation has ceased</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Security Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy &amp; security considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Important considerations for implementing Reasoning Glimpse while respecting data privacy and security requirements.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Redact Sensitive Content</h3>
              <ul className="pattern-card__list">
                <li>Steps and sub-activities should avoid leaking personally identifiable information, secrets, or other sensitive data</li>
                <li>Indicate type and origin instead: &quot;Analyzed 12 invoices from the billing system&quot; rather than &quot;Analyzed invoice #12345 for Jane Doe&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Respect Permissions &amp; Access Controls</h3>
              <ul className="pattern-card__list">
                <li>Reasoning Glimpse must not reveal that restricted data exists if the current user is not allowed to know</li>
                <li>Use generic language (&quot;Some records were inaccessible&quot;) rather than exposing details that break least-privilege boundaries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Align Trace Retention with Compliance</h3>
              <ul className="pattern-card__list">
                <li>Logging reasoning steps and tool calls creates additional records</li>
                <li>These should follow organizational policies for logging, retention, and data minimization</li>
                <li>Especially important in financial, healthcare, or government settings</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Distinguish User Input from System Inferences</h3>
              <ul className="pattern-card__list">
                <li>For auditability, clearly separate data that was provided by the user from information inferred or retrieved by the agent</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Exposing Implementation Details</h3>
              <ul className="pattern-card__list">
                <li>Animations should not reveal sensitive internal timing or sequencing specifics that could be exploited</li>
                <li>E.g., exact durations of security checks beyond what is appropriate for the domain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction patterns</p>
              <p className="pattern-body pattern-body--narrow">
                How users can interact with and control the Reasoning Glimpse during task execution.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Steering &amp; Control</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Early correction</span> &ndash; As soon as the planning step appears, users can correct or refine it (&quot;Remove step 3; comparative benchmark is not needed&quot;)</li>
                <li><span className="pattern-body--bold">Scoped overrides</span> &ndash; For individual steps, allow targeted controls such as &quot;Use only last quarter&apos;s data&quot; or &quot;Skip external web research&quot;</li>
                <li><span className="pattern-body--bold">Pause and resume</span> &ndash; For long-running operations, a pause/resume capability gives users control in resource-sensitive contexts</li>
                <li>Visual feedback (animated highlight, icon morph) helps reinforce that changes took effect</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback &amp; Learning</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Step-level feedback</span> &ndash; Provide simple &quot;Helpful / Not helpful&quot; or &quot;Accurate / Inaccurate&quot; feedback at the step level</li>
                <li>Quick micro-animations can acknowledge feedback (e.g., short thumbs-up highlight) and then return to a calm state</li>
                <li><span className="pattern-body--bold">Error acknowledgment and re-run</span> &ndash; When a step fails, let users retry that step or re-run the entire plan with adjusted constraints</li>
                <li>Transition from error to retry should be visually distinct but not jarring (brief shake on error, then smooth reset into active animation)</li>
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
                How Reasoning Glimpse applies across different enterprise contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Compliance Agent</h3>
              <p className="pattern-card__intro">B2B SaaS Platform</p>
              <p className="pattern-card__label">User prompt</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '12px' }}>
                &quot;Review this new data-sharing agreement for GDPR, CCPA, and SOC 2 risks.&quot;
              </p>
              <p className="pattern-card__label">Reasoning steps</p>
              <ul className="pattern-card__list">
                <li>Identify applicable regulatory frameworks for this contract</li>
                <li>Extract key clauses related to data processing, retention, access, and sub-processors</li>
                <li>Compare clauses against internal policy standards and regulatory requirements</li>
                <li>Highlight non-compliant or high-risk areas and draft recommended changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Finance / Spend Intelligence Agent</h3>
              <p className="pattern-card__intro">Spend Management Application</p>
              <p className="pattern-card__label">User prompt</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '12px' }}>
                &quot;Explain why software infrastructure costs spiked in Q2 for the EMEA region.&quot;
              </p>
              <p className="pattern-card__label">Reasoning steps</p>
              <ul className="pattern-card__list">
                <li>Gather infrastructure spend data for Q1&ndash;Q2 in EMEA</li>
                <li>Segment spend by vendor, product, and environment</li>
                <li>Identify anomalies or large deltas compared to Q1</li>
                <li>Correlate anomalies with deployment, usage, or headcount changes</li>
                <li>Summarize drivers and suggest follow-up actions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Quality Agent</h3>
              <p className="pattern-card__intro">Support Operations Platform</p>
              <p className="pattern-card__label">User prompt</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '12px' }}>
                &quot;Analyze last month&apos;s tickets and highlight top drivers of customer dissatisfaction.&quot;
              </p>
              <p className="pattern-card__label">Reasoning steps</p>
              <ul className="pattern-card__list">
                <li>Select tickets closed in the last 30 days with CSAT &lt; 4</li>
                <li>Cluster ticket topics and identify most frequent complaint themes</li>
                <li>Cross-check themes against product version and release dates</li>
                <li>Summarize key patterns and propose mitigations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns &amp; pitfalls</p>
              <p className="pattern-body pattern-body--narrow">
                Common mistakes to avoid when implementing Reasoning Glimpse.
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
                  <h3 className="antipattern-title">Overexposing Raw Chain-of-Thought</h3>
                  <p className="antipattern-subtitle">Dumping unfiltered internal reasoning.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Dumping unfiltered internal reasoning can confuse users, leak sensitive data, and create security or safety issues. Reasoning Glimpse should always present curated, high-level summaries.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Present curated, human-understandable summaries regardless of how animated or visually rich the surface is.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Pseudoscientific or Misleading Detail</h3>
                  <p className="antipattern-subtitle">Fabricated metrics without clear meaning.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Fabricated metrics or vague language (&quot;Confidence = 97%&quot; without clear meaning) can falsely reinforce trust. All exposed metadata and animations should be grounded, interpretable, and honest about uncertainty.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure all metadata is grounded and interpretable. Motion must not be used to &quot;oversell&quot; certainty.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Noisy or Excessively Granular Traces</h3>
                  <p className="antipattern-subtitle">Showing every token-level decision.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing every token-level decision or micro-step (&quot;Checking&hellip; re-checking&hellip; still thinking&hellip;&quot;) quickly becomes unusable. Similarly, animating every individual micro-step can make the interface chaotic.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Limit to meaningful phases (3&ndash;7 steps) that align with user-understandable goals.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Behavior Across Surfaces</h3>
                  <p className="antipattern-subtitle">Some AI features show reasoning traces, others do not.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If some AI features show reasoning traces and others do not, users may misinterpret which capabilities are reliable or auditable. Behavior should be coherent across the product.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain consistent visual language of activity and completion across all agent surfaces.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Accessibility</h3>
                  <p className="antipattern-subtitle">Complex animated timelines without proper support.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Complex, animated timelines or narrow side panels may be hard to navigate with screen readers or keyboard-only input. All key information should be accessible with proper semantic structure and ARIA attributes.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure accessibility with proper semantic structure, ARIA attributes, and respect for reduced-motion preferences.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Endless Motion with No Explanation</h3>
                  <p className="antipattern-subtitle">Continuous animation without contextual progress.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Continuous animation without contextual progress updates can increase anxiety. If the system is stuck or waiting on a dependency, the UI should pause or change the animation and explicitly describe the situation.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Pause or change animation when blocked; always provide contextual explanation of what&apos;s happening.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Key metrics to assess whether Reasoning Glimpse is effective for users.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust &amp; Confidence</h3>
              <ul className="pattern-card__list">
                <li>Changes in user-reported trust or perceived transparency (via surveys or feedback prompts)</li>
                <li>Frequency of users expanding reasoning views or revisiting traces in later sessions</li>
                <li>Qualitative feedback on whether motion indicators feel informative vs. distracting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Success &amp; Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Reduction in misaligned outputs or rework due to earlier corrections</li>
                <li>Time to task completion compared before/after introducing reasoning visibility and motion cues</li>
                <li>Drop in task abandonment rates for longer-running operations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Intervention &amp; Steering</h3>
              <ul className="pattern-card__list">
                <li>Rate of mid-run adjustments (e.g., updated parameters after seeing the plan)</li>
                <li>Outcomes of tasks where users intervened vs. where they did not</li>
                <li>Correlation between animation clarity and frequency of timely interventions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Quality</h3>
              <ul className="pattern-card__list">
                <li>Frequency of step failures and where they occur in the process</li>
                <li>Coverage of tool usage and data sources compared to expected workflows</li>
                <li>Correlation between perceived &quot;spinner fatigue&quot; and actual task durations</li>
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
                Technical guidance for building robust Reasoning Glimpse implementations.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Generate a Structured Internal Plan</h3>
              <ul className="pattern-card__list">
                <li>Internally, represent reasoning steps as a structured plan (e.g., JSON schema)</li>
                <li>Capture label, description, status, tools, associated data, and visual state</li>
                <li>This enables consistent UI rendering, motion control, and analytics</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separate Internal Reasoning from Exposed Summaries</h3>
              <ul className="pattern-card__list">
                <li>Maintain a mapping layer that converts internal reasoning artifacts into user-facing descriptions and visual states</li>
                <li>Ensures safety and clarity</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Design for Progressive Disclosure</h3>
              <ul className="pattern-card__list">
                <li>Start with a minimal glimpse (including a simple animated indicator) in the main chat area</li>
                <li>Offer deeper detail in side panels or dedicated views</li>
                <li>Keeps primary workflows clean while supporting power users and auditors</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Align with Existing Design System</h3>
              <ul className="pattern-card__list">
                <li>Use established components (timelines, accordions, badges, progress bars, toasts) to represent steps and statuses</li>
                <li>Reasoning view should feel like a natural part of the product</li>
                <li>Extend the design system with consistent reasoning-related motion tokens</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Implement Motion Responsibly</h3>
              <ul className="pattern-card__list">
                <li>Centralize animation tokens (durations, easing, motion style) for consistency</li>
                <li>Respect system and browser-level accessibility settings for reduced motion</li>
                <li>Ensure all state transitions are understandable even if animation is disabled</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Plan for Scaling</h3>
              <ul className="pattern-card__list">
                <li>As more agents and tools are introduced, ensure traces remain navigable</li>
                <li>Consider filtering by agent, tool, or domain; collapsing older steps; grouping related actions</li>
                <li>Motion should scale gracefully&mdash;prioritizing the most relevant active work</li>
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
              <p className="pattern-checklist-category__title">Plan Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the agent&apos;s plan visible before or as it begins execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are steps described in human, domain-appropriate language?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Progress &amp; Motion</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the UI show continuous but calm progress during execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is motion tied to real state (not misleading &quot;infinite&quot; loaders)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users correct, skip, or adjust steps during execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a pause/resume capability for long-running tasks?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is a persistent audit trail available after task completion?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can the trace be filtered by tool, step, or domain?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Privacy &amp; Security</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is sensitive content redacted from the reasoning view?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the trace respect user permissions and access controls?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the reasoning view navigable with keyboard and screen readers?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the UI respect prefers-reduced-motion settings?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
