import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import CounterEvidenceDemo from '../demos/CounterEvidenceDemo';

// SEO metadata for this pattern page
export const COUNTER_EVIDENCE_SEO = {
  title: "Counter-Evidence - AI Trust Pattern",
  description: "A structured UI pattern that presents both supporting and contradicting evidence for AI outputs, helping users form nuanced judgments and calibrate trust in agentic systems.",
  keywords: ["counter-evidence", "AI evidence", "supporting evidence", "AI transparency", "trust calibration", "AI decision support", "evidence display", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/counter-evidence"
};

export default function CounterEvidencePattern() {
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
            <span className="pattern-header__index">6.6</span>
            <div>
              <h1 className="pattern-header__title">Counter-Evidence</h1>
              <p className="pattern-header__subtitle">
                A structured UI pattern that presents both supporting and contradicting evidence for AI outputs, helping users form nuanced judgments and calibrate trust in agentic systems.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.6" patternTitle="Counter-Evidence" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Counter-Evidence Display pairs an AI-generated answer or recommendation with a deliberately balanced evidence view, surfacing both supporting evidence and counter-evidence in a clear, navigable structure.
            </p>
            <p className="pattern-body">
              In agentic AI experiences—especially chat-based assistants that propose actions, decisions, or root causes—this pattern appears immediately below or alongside the AI response, often as:
            </p>
            <ul className="pattern-list">
              <li>A compact summary chip (for example, &quot;Evidence: 4 supporting · 2 counter&quot;)</li>
              <li>A collapsible panel labeled &quot;Evidence &amp; Counter-Evidence&quot;</li>
              <li>An expandable sidebar or drawer for deeper analysis</li>
            </ul>
            <p className="pattern-body">
              The core idea is to make the AI&apos;s reasoning auditable and contestable, so that users can see where the model&apos;s view is strong, where it is weak, and where alternative interpretations might exist. This supports calibrated trust, reduces blind acceptance, and helps organizations meet regulatory and governance expectations for explainability.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/6.6 counter-evidence.png"
              alt="Counter-Evidence pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows an AI-powered incident diagnosis system for DevOps. The AI suggests a root cause (database connection pool exhaustion) but instead of only showing supporting evidence, it presents both supporting signals and counter-evidence in clearly separated panels. The supporting panel shows error rate spikes and similar past incidents, while the counter-evidence panel highlights conflicting signals like stable traffic patterns and concurrent anomalies elsewhere. Toggle between the panels or use "View all evidence" to see the balanced view. This demonstrates how exposing both sides helps operators make more informed decisions.
            </p>
          </div>
          <CounterEvidenceDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a counter-evidence pattern, agentic AI systems tend to present singular, confident answers. This creates several issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Automation bias and over-reliance</span> – When systems present only supporting rationale, users tend to overweight the AI&apos;s judgment, even when they disagree or sense gaps. This is especially risky in high-stakes domains.
              </li>
              <li>
                <span className="pattern-body--bold">Hidden uncertainty and missing alternatives</span> – Conflicting data, edge cases, and gaps in coverage stay invisible. Users cannot easily see that the AI&apos;s suggestion is just one interpretation of a noisy or incomplete picture.
              </li>
              <li>
                <span className="pattern-body--bold">Trust whiplash after errors</span> – When an AI answer turns out to be wrong and there was no visible indication of counter-evidence, users often swing from over-trust to deep skepticism.
              </li>
              <li>
                <span className="pattern-body--bold">Regulatory and governance friction</span> – In regulated environments, stakeholders require documented evidence that decisions considered both pro and con factors. A one-sided AI interface complicates audits, reviews, and risk management.
              </li>
            </ul>
            <p className="pattern-body">
              Counter-Evidence Display addresses these issues by exposing tension in the data: making it clear that the AI&apos;s output is a hypothesis, not an oracle.
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
                  <span className="pattern-body--bold">High-impact or irreversible decisions</span> – Financial trades, lending decisions, medical triage, production deployment approvals, security actions, and policy changes.
                </li>
                <li>
                  <span className="pattern-body--bold">Ambiguous, noisy, or conflicting data</span> – Scenarios where signals disagree, data coverage is partial, or the model itself expresses low or medium confidence.
                </li>
                <li>
                  <span className="pattern-body--bold">Decision-support, not pure automation</span> – Workflows where humans remain accountable for approval, override, or escalation.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-stakeholder governance and review</span> – Situations requiring deliberation, committee decisions, or post-hoc review, where evidence trails are needed.
                </li>
                <li>
                  <span className="pattern-body--bold">User education and upskilling contexts</span> – Systems where the AI is also teaching junior staff how to reason through data.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes or reversible outcomes</span> – Casual content generation, UI copy suggestions, daily standup summaries, or simple classification tasks.</li>
                <li><span className="pattern-body--bold">Deterministic, well-understood operations</span> – Simple CRUD operations, status lookups, or direct retrieval tasks.</li>
                <li><span className="pattern-body--bold">Single-source-of-truth answers</span> – Scenarios where a canonical source defines correctness (e.g., &quot;Current account balance&quot;).</li>
                <li><span className="pattern-body--bold">Highly constrained UIs with tight time pressure</span> – Surfaces like notifications or toasts where the primary goal is quick acknowledgment.</li>
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
                Counter-Evidence Display typically lives &quot;attached&quot; to an AI message or recommendation, treated as a dedicated evidence section rather than blending into free-form text.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline beneath AI messages
              </h3>
              <p className="pattern-card__intro">
                A persistent &quot;Evidence&quot; affordance under each AI response in chat.
              </p>
              <ul className="pattern-card__list">
                <li>Small counts: &quot;Evidence · 4 supporting · 2 counter&quot;</li>
                <li>Expandable on click to reveal full evidence panel</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Within a recommendation card</h3>
              <p className="pattern-card__intro">
                Cards for &quot;Suggested action&quot; or &quot;Proposed diagnosis&quot; include evidence links.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;View supporting &amp; counter evidence&quot; link</li>
                <li>Inline summary of key signals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual triggers during critical actions</h3>
              <p className="pattern-card__intro">
                When a user is about to apply a recommendation.
              </p>
              <ul className="pattern-card__list">
                <li>Interstitial screen highlighting counter-evidence</li>
                <li>&quot;2 significant risk signals detected—review before proceeding&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Global analysis views</h3>
              <p className="pattern-card__intro">
                A dedicated &quot;Rationale &amp; Evidence&quot; tab in dashboards.
              </p>
              <ul className="pattern-card__list">
                <li>AI proposals listed with associated evidence</li>
                <li>Batch review or audit capabilities</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Evidence Item</h3>
            <p className="pattern-card__intro">
              The core unit is the evidence item, which represents a specific data point, document, metric, or case that bears on the AI&apos;s conclusion.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>Short, scannable summary of the signal</li>
                  <li>&quot;Error rate +320% on db-01 from 10:35–10:42 UTC&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Directional Tag</p>
                <ul className="pattern-card__list">
                  <li>Supporting, Counter, or Neutral / Context</li>
                  <li>Subtle color coding (green for supporting, amber for counter)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Expand / collapse details</li>
                  <li>&quot;Open source&quot; (log view, dashboard, document)</li>
                  <li>Mark as irrelevant or flag as incorrect</li>
                  <li>Copy or export for reports</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Source system (APM, CRM, docs repository)</li>
                  <li>Type (metric, log, document, user feedback)</li>
                  <li>Time range or recency</li>
                  <li>Confidence or weight (strong / moderate / weak)</li>
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
                The lifecycle spans from initial AI output through evidence aggregation, user inspection, and feedback loops.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial AI output</h3>
              <ul className="pattern-card__list">
                <li>User query or task is submitted</li>
                <li>Agent generates primary answer with internal confidence estimate</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Evidence aggregation</h3>
              <ul className="pattern-card__list">
                <li>System retrieves relevant signals from multiple sources</li>
                <li>Ranking and classification labels each item as supporting, counter, or contextual</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Evidence presentation</h3>
              <ul className="pattern-card__list">
                <li>Evidence header: &quot;4 supporting · 2 counter · Confidence: Medium&quot;</li>
                <li>In high-risk scenarios, panel defaults to expanded with counter-evidence emphasized</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. User inspection</h3>
              <ul className="pattern-card__list">
                <li>Users scan summary and selectively expand sections</li>
                <li>Filters limit view to evidence type, direction, time, or scope</li>
                <li>Users may add annotations or reclassify items</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Dynamic updates</h3>
              <ul className="pattern-card__list">
                <li>If user refines query, system re-runs reasoning and evidence selection</li>
                <li>New evidence appears with change indicators (&quot;+1 new counter signal&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Decision and action</h3>
              <ul className="pattern-card__list">
                <li>When user chooses an action, system records recommendation, confidence, and evidence set</li>
                <li>Track whether counter-evidence was inspected or ignored</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Feedback and learning loop</h3>
            <ul className="pattern-card__list">
              <li>Post-hoc outcomes (incident reopened, trade resulted in loss) are linked back to evidence set</li>
              <li>Incorrect or misleading evidence is de-ranked; strong predictive signals are promoted</li>
              <li>Domain experts can curate canonical supporting and counter patterns</li>
            </ul>
          </div>
        </section>

        {/* Visual & Interaction Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Visual &amp; interaction guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Consistent visual cues strengthen trust and help users navigate balanced evidence views.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Layout and Structure</h3>
              <ul className="pattern-card__list">
                <li>Two clearly separated sections: Supporting Evidence and Counter-Evidence</li>
                <li>Use side-by-side columns or clearly labeled tabs</li>
                <li>Hierarchy and progressive disclosure: start with compact summary, allow expansion</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Differentiation</h3>
              <ul className="pattern-card__list">
                <li>Use color accents and icons to distinguish supporting from counter signals</li>
                <li>Avoid overly alarming visuals except in genuinely high-risk scenarios</li>
                <li>Use sufficient contrast and don&apos;t rely solely on color (accessibility)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Density Management</h3>
              <ul className="pattern-card__list">
                <li>Cluster similar items into groups (&quot;8 similar past incidents&quot;)</li>
                <li>Show &quot;Top 3 most impactful&quot; by default</li>
                <li>Provide controls to expand to full list</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Iconography</h3>
              <ul className="pattern-card__list">
                <li>Consistent icons for evidence direction and type</li>
                <li>Filled circle with plus for supporting</li>
                <li>Triangle or caution icon for counter</li>
                <li>Document, chart, or database icons for data types</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Typography</h3>
              <ul className="pattern-card__list">
                <li>Short, bold labels followed by lighter explanatory text</li>
                <li>Support rapid scanning in complex B2B interfaces</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Microcopy and Tone</h3>
              <ul className="pattern-card__list">
                <li>Neutral, non-defensive wording</li>
                <li>&quot;Additional signals to consider&quot; over &quot;Reasons this might be wrong&quot;</li>
                <li>Transparent limitations when evidence coverage is thin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & Technical Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data &amp; technical considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details vary by stack, but several recurring patterns support robust counter-evidence displays.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Evidence Sourcing</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Multi-source aggregation</span> – Pull from APM, logs, CRM, analytics, experimentation platforms, and vetted external sources</li>
                <li><span className="pattern-body--bold">Access control</span> – Evidence must never expose data the current user is not authorized to see</li>
                <li><span className="pattern-body--bold">Grounded retrieval</span> – Restrict LLM to summarizing or classifying real, retrieved items; avoid fabricated evidence</li>
                <li><span className="pattern-body--bold">Diversity</span> – Combine quantitative metrics with qualitative signals to avoid overfitting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Classification and Weighting</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Directional classification</span> – Use rules, models, or heuristics to determine supporting vs. counter</li>
                <li><span className="pattern-body--bold">Strength scoring</span> – Weight evidence by relevance, recency, and predictive value</li>
                <li><span className="pattern-body--bold">Conflict detection</span> – Identify direct contradictions between sources and highlight as data-quality issues</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance and Latency</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Asynchronous loading</span> – Primary AI answer appears first; evidence panel fills in as results arrive</li>
                <li><span className="pattern-body--bold">Progress communication</span> – &quot;Evidence loading…&quot; to avoid confusion</li>
                <li><span className="pattern-body--bold">Caching</span> – Cache evidence sets for similar queries to reduce redundant work</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility &amp; I18n</h3>
              <ul className="pattern-card__list">
                <li>Provide textual indicators (&quot;supporting&quot; / &quot;counter&quot;) in addition to color</li>
                <li>Fully accessible to screen readers with clear semantics and logical tab order</li>
                <li>Support localization while keeping structure consistent</li>
                <li>Consider keyboard shortcuts for expert-heavy workflows</li>
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
                Certain implementations can unintentionally undermine trust rather than build it.
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
                  <h3 className="antipattern-title">Token Counter-Evidence</h3>
                  <p className="antipattern-subtitle">Adding weak or irrelevant counter items just to appear balanced.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Evidence must be substantive and honestly reflect the data. Padding with low-quality counter-evidence reduces rather than builds trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Only show counter-evidence when genuinely substantive; be honest when none exists.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming Firehose</h3>
                  <p className="antipattern-subtitle">Dumping dozens of unprioritized items on users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Forces users to triage noise. The pattern&apos;s value depends on focus and hierarchy—a curated view beats a comprehensive dump.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Lead with top 3–5 most impactful items; offer &quot;Show more&quot; for completeness.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Biased Selection</h3>
                  <p className="antipattern-subtitle">Systematically favoring supporting evidence over counter-evidence.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If supporting evidence is consistently prioritized, the pattern becomes a veneer for confirmation bias rather than a correction. Regular audits are important.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Audit classification regularly; ensure high-impact counter-evidence is never buried.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque Classification</h3>
                  <p className="antipattern-subtitle">Users cannot understand why something is labeled supporting or counter.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If users cannot understand the labeling logic, interpretation becomes guesswork. Simple, consistent rules and brief explanations are essential.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Include brief explanations for each item&apos;s classification; use consistent criteria.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Responsibility Shifting</h3>
                  <p className="antipattern-subtitle">Highlighting counter-evidence without giving users tools to act.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without override controls, escalation paths, or feedback mechanisms, showing counter-evidence can feel like blame shifting rather than support.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Pair evidence display with actionable controls: override, escalate, provide feedback.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Instrumentation & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation &amp; evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Focus on trust calibration and decision quality, not just engagement metrics.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Override and Escalation Rates</h3>
              <ul className="pattern-card__list">
                <li>Track how often users override AI suggestions</li>
                <li>Note whether counter-evidence was visible or inspected when overrides occur</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Outcome-Linked Correctness</h3>
              <ul className="pattern-card__list">
                <li>Associate evidence views with downstream outcomes</li>
                <li>Understand when evidence actually improves decisions (incident resolved, loss avoided)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Attention and Interaction Patterns</h3>
              <ul className="pattern-card__list">
                <li>Measure which evidence types and directions are most inspected</li>
                <li>Track where users abandon the panel or ignore counter-evidence in high-risk scenarios</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Perceived Trust Surveys</h3>
              <ul className="pattern-card__list">
                <li>Gather subjective feedback on whether evidence makes recommendations more understandable</li>
                <li>Ensure complexity doesn&apos;t overwhelm the value</li>
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
                How counter-evidence displays apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Root Cause Analysis Agent</h3>
              <p className="pattern-card__intro">B2B Observability / DevOps</p>
              <p className="pattern-card__label">Supporting Evidence</p>
              <ul className="pattern-card__list">
                <li>Error rates and latency spikes aligned with DB utilization</li>
                <li>Multiple similar past incidents resolved by increasing pool size</li>
              </ul>
              <p className="pattern-card__label">Counter-Evidence</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>No traffic increase or deploy at onset of spike</li>
                <li>api-gateway showing concurrent anomalies</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Investment Advisor AI</h3>
              <p className="pattern-card__intro">B2B/B2C Finance</p>
              <p className="pattern-card__label">Supporting Evidence</p>
              <ul className="pattern-card__list">
                <li>Strong earnings growth and positive guidance</li>
                <li>Backtest showing improved risk-adjusted returns</li>
              </ul>
              <p className="pattern-card__label">Counter-Evidence</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Elevated price volatility and regulatory scrutiny</li>
                <li>High concentration risk in current portfolio</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy Recommendation Agent</h3>
              <p className="pattern-card__intro">Governance, HR, Legal</p>
              <p className="pattern-card__label">Supporting Evidence</p>
              <ul className="pattern-card__list">
                <li>Internal surveys linking collaboration to faster completion</li>
                <li>Historical data showing productivity gains</li>
              </ul>
              <p className="pattern-card__label">Counter-Evidence</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Higher attrition risk for groups with long commutes</li>
                <li>Legal considerations in certain jurisdictions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Automation</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-card__label">Supporting Evidence</p>
              <ul className="pattern-card__list">
                <li>Error rates returned to baseline after config update</li>
                <li>Customer has not reported further issues</li>
              </ul>
              <p className="pattern-card__label">Counter-Evidence</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Exception logs still show low-frequency failures</li>
                <li>Similar tickets from other customers remain open</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Hiring &amp; Talent Screening</h3>
              <p className="pattern-card__intro">Internal HR Systems</p>
              <p className="pattern-card__label">Supporting Evidence</p>
              <ul className="pattern-card__list">
                <li>Experience and skill matches with role profile</li>
                <li>Positive performance reviews in similar environments</li>
              </ul>
              <p className="pattern-card__label">Counter-Evidence</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Limited experience in critical domains for this team</li>
                <li>Potential bias risks if certain backgrounds are underrepresented</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                These patterns are often most effective when combined, forming a cohesive trust and accountability layer for agentic AI systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Confidence &amp; Uncertainty Display</h3>
              <p className="pattern-card__intro">
                Surfaces model confidence levels, uncertainty ranges, and &quot;unknown&quot; states alongside AI outputs.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Source Citations &amp; Provenance</h3>
              <p className="pattern-card__intro">
                Links claims to primary data sources, documents, or logs, helping users verify information directly.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Alternative Hypotheses &amp; Scenarios</h3>
              <p className="pattern-card__intro">
                Presents alternative explanations, options, or scenarios side-by-side with the main AI recommendation.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human Override &amp; Escalation Controls</h3>
              <p className="pattern-card__intro">
                Provides clear mechanisms to override AI outputs, request human review, or escalate complex cases.
              </p>
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
              <p className="pattern-checklist-category__title">Evidence Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are supporting and counter-evidence clearly separated and equally accessible?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a compact summary view with counts for quick scanning?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Evidence Quality</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is all evidence grounded in verifiable data, not fabricated by the model?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-impact counter-evidence items prioritized and never buried?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Interaction</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users filter evidence by type, direction, recency, or source?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users provide feedback on evidence quality (mark as irrelevant, flag as incorrect)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Classification Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear why each item is labeled as supporting or counter?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are classification criteria consistent and auditable?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Actionability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily drill down from evidence items to source data?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there clear next-step options when counter-evidence is significant?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are textual labels provided in addition to color coding?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the evidence panel fully navigable via keyboard and screen reader?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
