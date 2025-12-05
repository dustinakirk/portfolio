import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import SemanticHighlightingDemo from '../demos/SemanticHighlightingDemo';

// SEO metadata for this pattern page
export const SEMANTIC_HIGHLIGHTING_UNCERTAINTY_SEO = {
  title: "Semantic Highlighting of Uncertainty - AI Trust Pattern",
  description: "Visually and interactively expose uncertain portions of AI-generated content so human reviewers can quickly identify, inspect, and act on areas that require judgment.",
  keywords: ["AI uncertainty", "confidence visualization", "AI trust", "uncertainty highlighting", "AI review", "human-in-the-loop", "agentic UX", "AI transparency", "calibrated confidence"],
  canonicalPath: "/agentic_ai_patterns/semantic-highlighting-uncertainty"
};

export default function SemanticHighlightingUncertaintyPattern() {
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
            <span className="pattern-header__index">6.3</span>
            <div>
              <h1 className="pattern-header__title">Semantic Highlighting of Uncertainty</h1>
              <p className="pattern-header__subtitle">
                Visually and interactively expose uncertain portions of AI-generated content so human reviewers can quickly identify, inspect, and act on areas that require judgment.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.3" patternTitle="Semantic Highlighting of Uncertainty" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Semantic Highlighting of Uncertainty overlays visual cues on specific words, phrases, sentences, or steps in AI-generated output where the system has low or ambiguous confidence.
            </p>
            <p className="pattern-body">
              Instead of presenting a monolithic answer that appears uniformly reliable, the UI differentiates between &quot;likely reliable&quot; and &quot;needs scrutiny&quot; content. This pattern frequently appears in AI copilots inside productivity tools (docs, spreadsheets, email, IDEs), agentic workflows that draft contracts, summarize accounts, or propose actions, and analytics or BI assistants that infer trends and recommendations.
            </p>
            <p className="pattern-body">
              The core idea is to use fine-grained, contextual signals&mdash;such as dotted underlines, soft highlights, or inline badges&mdash;to direct expert attention to the most questionable parts of an AI result. Interacting with a highlight reveals why the system is uncertain and offers targeted actions such as refining inputs, requesting alternatives, or escalating to a human expert.
            </p>
            <p className="pattern-body">
              This increases trust not by claiming that the AI is always right, but by being explicit about where it may be wrong.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Semantic highlighting example">
          <SemanticHighlightingDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without semantic uncertainty cues, AI output is often perceived as uniformly confident. This creates several issues in both B2B and B2C applications:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Automation bias and over-trust</span> &ndash; Users may over-rely on AI responses because the interface does not distinguish between &quot;plausible guess&quot; and &quot;strongly supported conclusion.&quot;
              </li>
              <li>
                <span className="pattern-body--bold">Cognitive overload in long outputs</span> &ndash; When the AI produces long-form documents, analyses, or multi-step plans, reviewing every part at equal depth is impractical. Important ambiguities are easily missed.
              </li>
              <li>
                <span className="pattern-body--bold">Invisible model and data limitations</span> &ndash; Global disclaimers (&quot;This may be wrong&quot;) are too coarse. They do not reveal <em>where</em> limitations are most impactful or <em>why</em> the system is uncertain.
              </li>
              <li>
                <span className="pattern-body--bold">Inefficient human review workflows</span> &ndash; Reviewers lack clear triage signals to decide which sections to inspect first, slowing down high-stakes processes such as approvals, compliance checks, or customer responses.
              </li>
            </ul>
            <p className="pattern-body">
              These issues reduce trust and can either cause under-use (users ignore AI entirely) or over-use (blind acceptance), both of which counteract the intended value of agentic systems.
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
                  <span className="pattern-body--bold">High- or medium-stakes decision support</span> &ndash; Legal review, pricing recommendations, financial summaries, medical documentation support, security assessments, compliance checks, HR or policy decisions.
                </li>
                <li>
                  <span className="pattern-body--bold">Complex, dense, or lengthy outputs</span> &ndash; Contracts, technical specs, strategy docs, long chat transcripts, financial reports, or multi-step action plans where complete line-by-line review is unrealistic.
                </li>
                <li>
                  <span className="pattern-body--bold">AI agents that can trigger or propose real-world actions</span> &ndash; Systems that draft emails, update CRM records, modify infrastructure, or schedule workflows, where incorrect steps can have operational or reputational impact.
                </li>
                <li>
                  <span className="pattern-body--bold">Scenarios with known uncertainty sources</span> &ndash; Cases with sparse data, conflicting sources, domain or language mismatches, or limited grounding where the system can estimate and localize uncertainty.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes ideation and exploration</span> &ndash; Naming explorations, casual brainstorming, storytelling, or moodboarding, where minor inaccuracies or ambiguities are acceptable.</li>
                <li><span className="pattern-body--bold">Short, atomic responses</span> &ndash; Single-sentence answers or simple lookups where confidence is already obvious or the risk is minimal, and a global confidence badge or disclaimer is sufficient.</li>
                <li><span className="pattern-body--bold">Highly deterministic or validated workflows</span> &ndash; Flows where the system already uses strict validation, exhaustive search, or rules-based checks that guarantee correctness for the domain.</li>
                <li><span className="pattern-body--bold">Unreliable or uncalibrated uncertainty estimates</span> &ndash; Situations where the underlying confidence signals are too noisy or misleading, leading to fake precision and erosion of trust.</li>
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
                Semantic Highlighting of Uncertainty is layered on top of existing surfaces such as chat messages, document editors, tables, dashboards, or code editors. It should feel additive and contextual, not like an entirely separate experience.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: AI-Generated View
              </h3>
              <p className="pattern-card__intro">
                The main surface where AI output is displayed with highlights visible by default or via toggle.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;AI draft&quot; in a side panel with uncertainty highlights</li>
                <li>Agent&apos;s suggested answer in a support console</li>
                <li>Prominent &quot;Show uncertainty&quot; toggle in the header</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Toolbar Controls</h3>
              <p className="pattern-card__intro">
                Header controls for managing highlight visibility and sensitivity.
              </p>
              <ul className="pattern-card__list">
                <li>Toggle to Show/Hide highlights</li>
                <li>Drop-down to adjust sensitivity (e.g., &quot;Only high uncertainty&quot;, &quot;High + medium&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Summary Indicators</h3>
              <p className="pattern-card__intro">
                Inline chips, banners, or summary indicators that communicate overall uncertainty status.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;3 sections marked as low confidence.&quot;</li>
                <li>&quot;Some parts of this analysis rely on sparse data.&quot;</li>
                <li>Clicking jumps to highlighted segments</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Deep Inspection: Side Panel</h3>
              <p className="pattern-card__intro">
                Expanded view for detailed investigation of uncertain segments.
              </p>
              <ul className="pattern-card__list">
                <li>Shows relevant source passages or queries</li>
                <li>Renders multiple candidate alternatives</li>
                <li>Provides controls to rewrite, comment, or route to another role</li>
              </ul>
            </div>
          </div>

          {/* Core Item */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Uncertainty Marker</h3>
            <p className="pattern-card__intro">
              The primary unit in this pattern is the Uncertainty Marker, associated with a text span or step.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Low confidence&quot;</li>
                  <li>&quot;Ambiguous translation&quot;</li>
                  <li>&quot;Sparse data&quot;</li>
                  <li>&quot;Conflicting sources&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Model has not seen many similar clauses in training data.&quot;</li>
                  <li>&quot;Source documents disagree on this figure.&quot;</li>
                  <li>&quot;Trend calculation is based on &lt; 10 data points.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><strong>Clarify this section</strong> &ndash; ask AI to refine</li>
                  <li><strong>Show supporting evidence</strong> &ndash; open citations</li>
                  <li><strong>See alternatives</strong> &ndash; present candidate options</li>
                  <li><strong>Escalate / Assign</strong> &ndash; route to human review</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Uncertainty level (low/medium/high) or bucketed score</li>
                  <li>Reason category (data quality, out-of-domain, hallucination risk)</li>
                  <li>Affected entities or fields (pricing, SLAs, dates)</li>
                  <li>Resolution status (Unreviewed, Reviewed, Overridden)</li>
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
                The lifecycle spans from initial generation through user interaction to resolution and feedback.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Generation &amp; Scoring</h3>
              <ul className="pattern-card__list">
                <li>AI produces output (text, steps, suggestions)</li>
                <li>Separate component computes token-, phrase-, or step-level uncertainty</li>
                <li>Uses model confidence, retrieval coverage, self-consistency, or ensemble estimates</li>
                <li>Associates each segment with uncertainty level and reason category</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Rendering &amp; Display</h3>
              <ul className="pattern-card__list">
                <li>Output rendered with subtle visual cues on segments above thresholds</li>
                <li>Optional summary indicator: &quot;This answer contains 1 high and 2 medium uncertainty segments&quot;</li>
                <li>Visual intensity correlates with severity</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. User Interaction</h3>
              <ul className="pattern-card__list">
                <li>Hover/focus shows tooltip with severity label, explanation, and actions</li>
                <li>Keyboard focus moves through highlights in reading order</li>
                <li>Shortcuts can jump between highlighted segments</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Deep Inspection</h3>
              <ul className="pattern-card__list">
                <li>Click opens side panel with source passages or queries</li>
                <li>Multiple candidate alternatives rendered</li>
                <li>Controls to rewrite, comment, or route to another role</li>
                <li>Taking action updates main content</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Resolution &amp; State Update</h3>
              <ul className="pattern-card__list">
                <li>Reviewed segments can downgrade severity or collapse to badge</li>
                <li>Metadata retained for audit (who, when, how resolved)</li>
                <li>Uncertainty markers stored with the object for history</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Feedback &amp; Calibration</h3>
              <ul className="pattern-card__list">
                <li>Interaction data feeds back into threshold updates</li>
                <li>Track which highlights users override, ignore, or escalate</li>
                <li>Reduce false positives over time</li>
                <li>Focus on most meaningful uncertainties per domain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States & Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States &amp; variants</p>
              <p className="pattern-body pattern-body--narrow">
                The pattern can manifest in different states and implementation variants depending on context.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">States</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">No highlights</span> &ndash; No segments exceed threshold, or feature disabled. May show global confidence state.</li>
                <li><span className="pattern-body--bold">Active highlights (unreviewed)</span> &ndash; Default when segments flagged. Visual intensity correlates with severity.</li>
                <li><span className="pattern-body--bold">Reviewed / resolved</span> &ndash; Explicitly reviewed highlights shrink to compact badges while retaining traceability.</li>
                <li><span className="pattern-body--bold">Unavailable / degraded</span> &ndash; When computation fails, message explains highlights are not shown and why.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Common Variants</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Inline-only variant</span> &ndash; Simple dotted underlines or shaded spans with hover tooltips. Low complexity, good for early integration.</li>
                <li><span className="pattern-body--bold">Inline + side panel variant</span> &ndash; Rich explanation and actions in side panel. Better for complex tasks like legal or financial review.</li>
                <li><span className="pattern-body--bold">Summary-first variant</span> &ndash; Top-level &quot;Uncertainty summary&quot; card with list of affected sections and jump links. Useful for long documents.</li>
                <li><span className="pattern-body--bold">Step-level variant</span> &ndash; In agentic flows with multi-step plans, each step carries confidence label and can expand to show uncertainty sources.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content &amp; microcopy guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; the language around uncertainty must be precise, neutral, and actionable.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Low confidence&quot;, &quot;Needs review&quot;, &quot;Ambiguous&quot;, &quot;Based on limited data&quot;</li>
                  <li>&quot;Few recent data points after 2023.&quot;</li>
                  <li>&quot;Sources disagree on this figure.&quot;</li>
                  <li>&quot;Model has low familiarity with this jurisdiction.&quot;</li>
                  <li>Reasons that connect to concrete actions (clarify, compare, escalate)</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Numeric percentages without calibration or explanation</li>
                  <li>Accusatory or alarming language</li>
                  <li>Vague terms like &quot;maybe wrong&quot; without specifics</li>
                  <li>Idioms that may not translate or imply blame</li>
                  <li>Fake precision (e.g., &quot;73.2% confident&quot;) when uncalibrated</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Neutral, Descriptive Language</h3>
                <ul className="pattern-card__list">
                  <li>Prefer &quot;Low confidence,&quot; &quot;Needs review,&quot; &quot;Ambiguous&quot;</li>
                  <li>Avoid accusatory or alarming wording</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Explain Reasons, Not Just Levels</h3>
                <ul className="pattern-card__list">
                  <li>Short, precise reasons build understanding</li>
                  <li>Ground explanations in evidence or model behavior</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Avoid Fake Precision</h3>
                <ul className="pattern-card__list">
                  <li>Use percentages only if well-calibrated and explainable</li>
                  <li>Three or four tiers (Low/Medium/High) often work better</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Connect to Actions</h3>
                <ul className="pattern-card__list">
                  <li>Every description should lead to one or more actions</li>
                  <li>Clarify, compare alternatives, or escalate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Uncertainty highlighting must be perceivable and operable for all users, including those using assistive technologies.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Color-Only Signaling</h3>
              <ul className="pattern-card__list">
                <li>Pair color with patterns, icons, and explicit text labels</li>
                <li>Uncertainty should be visible to users with color vision deficiencies</li>
                <li>Use underlines, borders, or icons in addition to background colors</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Respect Reading Order &amp; Focus</h3>
              <ul className="pattern-card__list">
                <li>Highlights must be reachable via keyboard</li>
                <li>Announced in logical sequence by screen readers</li>
                <li>Both content and uncertainty status should be announced</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clear, Concise Announcements</h3>
              <ul className="pattern-card__list">
                <li>Use short, structured phrases for assistive tech</li>
                <li>Example: &quot;Low confidence segment: [text sample]. Reason: conflicting data.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Configurable Intensity</h3>
              <ul className="pattern-card__list">
                <li>Settings for reducing visual intensity</li>
                <li>Consider users sensitive to visual clutter or motion</li>
                <li>Especially important if highlights appear dynamically</li>
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
                Implementation details vary by stack, but several recurring patterns support robust uncertainty highlighting.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Uncertainty Signals (Backend)</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Token-level or span-level confidence</span> &ndash; Derived from model probabilities or log probabilities</li>
                <li><span className="pattern-body--bold">Self-consistency and sampling</span> &ndash; Compare multiple sampled outputs; high disagreement = uncertain</li>
                <li><span className="pattern-body--bold">Retrieval and evidence coverage</span> &ndash; Highlight statements not strongly grounded in retrieved documents</li>
                <li><span className="pattern-body--bold">Domain rules and heuristics</span> &ndash; Overlay domain-specific checks (unusual terms, out-of-policy values)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Calibration &amp; Thresholds</h3>
              <ul className="pattern-card__list">
                <li>Use offline evaluation and human labeling to calibrate</li>
                <li>Ensure thresholds align with actual correctness rates</li>
                <li>Consider domain-specific risk levels</li>
                <li>Track and reduce false positive rates over time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">UI &amp; Interaction</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Visual hierarchy</span> &ndash; Subtle default styling; stronger colors only for high-risk</li>
                <li><span className="pattern-body--bold">User control</span> &ndash; Toggle, filter by severity, expand/collapse</li>
                <li><span className="pattern-body--bold">Performance</span> &ndash; Don&apos;t slow down rendering, especially in long docs or streaming</li>
                <li><span className="pattern-body--bold">Consistency</span> &ndash; Same styling and terminology across surfaces</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Persistence &amp; Auditing</h3>
              <ul className="pattern-card__list">
                <li>Store uncertainty markers with the object (contract, analysis, ticket)</li>
                <li>Audit trails show which sections were explicitly reviewed</li>
                <li>Resolution history: who, when, and how each marker was addressed</li>
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
                How semantic highlighting of uncertainty applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Contract Review Agent</h3>
              <p className="pattern-card__intro">Legal Workflow Application</p>
              <ul className="pattern-card__list">
                <li>AI suggests changes to vendor agreement</li>
                <li>Clauses involving indemnification, liability caps, or jurisdiction analyzed for confidence</li>
                <li>Ambiguous phrases highlighted with dotted underline and amber background</li>
                <li>Hover reveals: &quot;Low confidence: uncommon phrasing for limitation of liability&quot;</li>
                <li>Actions: Open similar clauses from past contracts, generate alternatives, assign to specialist</li>
              </ul>
              <p className="pattern-card__label">Result</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Lawyers focus on high-risk areas first, while standard boilerplate remains visually quiet.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Translation &amp; Localization AI</h3>
              <p className="pattern-card__intro">Multilingual Collaboration Tool</p>
              <ul className="pattern-card__list">
                <li>AI translates product announcement into multiple languages</li>
                <li>Idiomatic and culturally nuanced phrases receive lower confidence</li>
                <li>Highlighted with inline &quot;Ambiguous translation&quot; chip</li>
                <li>Click displays alternative translations for different tones</li>
                <li>&quot;Request native review&quot; option posts to localization queue</li>
              </ul>
              <p className="pattern-card__label">Result</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Localization teams efficiently focus on segments most likely to need human refinement.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Analysis &amp; BI Assistant</h3>
              <p className="pattern-card__intro">Business Intelligence Platform</p>
              <ul className="pattern-card__list">
                <li>AI generates narrative summary of revenue trends and forecasts</li>
                <li>Sections based on sparse data, heavy seasonality, or outliers labeled with higher uncertainty</li>
                <li>Sentences like &quot;Revenue will likely grow 20-25%&quot; highlighted in narrative</li>
                <li>Tooltip: &quot;Forecast based on limited historical data (8 weeks) and high volatility&quot;</li>
                <li>Actions: Drill into chart, adjust filters, mark as &quot;Not for external use&quot;</li>
              </ul>
              <p className="pattern-card__label">Result</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Analysts understand where AI is extrapolating aggressively and can qualify recommendations.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Code Copilot in Developer Tools</h3>
              <p className="pattern-card__intro">IDE with AI Code Completion</p>
              <ul className="pattern-card__list">
                <li>AI suggests multi-line function implementation</li>
                <li>Lines with security-sensitive APIs or complex concurrency get higher uncertainty</li>
                <li>Subtle highlight cues with &quot;Review carefully&quot; icon</li>
                <li>Hover: &quot;Low confidence: limited examples in training data for this library version&quot;</li>
                <li>Actions: Request alternatives, show docs, generate tests</li>
              </ul>
              <p className="pattern-card__label">Result</p>
              <p className="pattern-body" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Developers&apos; attention directed to riskiest portions, improving review quality.
              </p>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Semantic Highlighting of Uncertainty works alongside other patterns to create transparent, reviewable AI systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Global Confidence Badges</h3>
              <p className="pattern-body" style={{ fontSize: '0.875rem' }}>
                Single overall confidence indicator for an answer or plan, complementary to fine-grained highlighting.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Evidence Highlighting / Grounded Citations</h3>
              <p className="pattern-body" style={{ fontSize: '0.875rem' }}>
                Visually ties generated statements to supporting source snippets or data tables.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human Review Gates &amp; Queues</h3>
              <p className="pattern-body" style={{ fontSize: '0.875rem' }}>
                Workflow pattern for routing uncertain or high-risk outputs to specific roles for approval.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Alternatives &amp; Branching Suggestions</h3>
              <p className="pattern-body" style={{ fontSize: '0.875rem' }}>
                Mechanism that presents multiple candidate phrasings or plans, often triggered from uncertainty markers.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clarification &amp; Follow-up Prompts</h3>
              <p className="pattern-body" style={{ fontSize: '0.875rem' }}>
                Pattern where the system asks clarifying questions when uncertainty is driven by ambiguous or incomplete user input.
              </p>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To validate and refine this pattern, instrument both behavior and outcomes.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Interaction Metrics</h3>
              <ul className="pattern-card__list">
                <li>Percentage of AI outputs that contain highlights</li>
                <li>Hover and click rates on highlighted segments</li>
                <li>Usage of actions: Clarify, Show evidence, Escalate</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Review Effectiveness</h3>
              <ul className="pattern-card__list">
                <li>Error detection rate in highlighted vs. non-highlighted segments</li>
                <li>Time to approval or resolution with and without highlighting</li>
                <li>Reduction in downstream corrections, tickets, or rework</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust Calibration</h3>
              <ul className="pattern-card__list">
                <li>Survey-based measures of perceived reliability and controllability</li>
                <li>Behavioral indicators: over-acceptance vs. healthy skepticism</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Model Calibration Feedback</h3>
              <ul className="pattern-card__list">
                <li>False positive rate (segments flagged but rarely corrected)</li>
                <li>False negative rate (issues in non-highlighted segments)</li>
                <li>Feed into threshold adjustment and uncertainty estimation improvements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design &amp; review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Visibility &amp; Discoverability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are uncertainty highlights visible by default or easily discoverable?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a summary indicator showing overall uncertainty status?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Clarity &amp; Explanation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do highlights explain <em>why</em> the system is uncertain, not just the level?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are explanations grounded in evidence or model behavior?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Actionability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each uncertainty marker offer clear next-step actions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users clarify, view alternatives, or escalate from the highlight?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users toggle highlights on/off?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users filter by severity level (high only, medium + high, etc.)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do highlights use more than just color to convey uncertainty?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are highlights keyboard-navigable and announced by screen readers?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Calibration &amp; Trust</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are uncertainty signals well-calibrated (not noisy or misleading)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a feedback loop to improve calibration over time?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
