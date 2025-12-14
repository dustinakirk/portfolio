import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import ConfidenceThermometerDemo from '../demos/ConfidenceThermometerDemo';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const CONFIDENCE_THERMOMETER_SEO = {
  title: "Confidence Thermometer - AI Trust Pattern",
  description: "A compact visual and textual indicator that communicates an AI system's self-assessed confidence in its outputs, guiding appropriate scrutiny and next steps.",
  keywords: ["AI confidence", "uncertainty indicator", "trust calibration", "AI transparency", "confidence score", "AI reliability", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/confidence-thermometer"
};


export default function ConfidenceThermometerPattern() {
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
            <span className="pattern-header__index">6.2</span>
            <div>
              <h1 className="pattern-header__title">Confidence Thermometer</h1>
              <p className="pattern-header__subtitle">
                A compact visual and textual indicator that communicates an AI system&apos;s self-assessed confidence in its outputs, guiding appropriate scrutiny and next steps.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.2" patternTitle="Confidence Thermometer" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              A Confidence Thermometer is an inline UI element that exposes how certain an AI system is about a specific output or action.
            </p>
            <p className="pattern-body">
              It typically combines an icon or gauge, a textual label (e.g., <em>High confidence</em>), and optional detail explaining why the system is more or less certain. In agentic AI products—especially chat-based assistants embedded in B2B or B2C web applications—this pattern helps:
            </p>
            <ul className="pattern-list">
              <li>Clarify when an AI response is a strong recommendation vs. a tentative suggestion.</li>
              <li>Direct attention toward statements or actions that merit additional review.</li>
              <li>Encourage collaborative problem solving instead of unquestioned automation.</li>
            </ul>
            <p className="pattern-body">
              This pattern often sits adjacent to AI-generated messages, recommended actions (such as &quot;update CRM records&quot;), or generated artifacts (contracts, forecasts, triage decisions). It is particularly valuable where the AI can act on behalf of the user or make recommendations with material consequences.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/6.2 confidence thermometer.png"
              alt="Confidence Thermometer pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows how confidence indicators work across different AI predictions in a sales forecasting context. Each forecast row displays a confidence thermometer (Low, Medium, or High) that reflects the AI's certainty based on data quality and historical patterns. Click "Show details" on any row to see why the system assigned that confidence level, including specific factors like data recency, pattern strength, and known limitations. Try the "Regenerate Forecasts" button to see how confidence varies with different scenarios.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Confidence Thermometer interactive demo">
            <ConfidenceThermometerDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without an explicit confidence signal, AI-generated output tends to appear more authoritative than it truly is. This creates several forms of friction and risk:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Overtrust and silent errors</span> – Users may accept AI-suggested actions or answers as fact, especially when presented in polished, natural language, leading to incorrect updates, risky decisions, or compliance violations.
              </li>
              <li>
                <span className="pattern-body--bold">Undertrust and underuse</span> – In high-stakes workflows (e.g., finance, healthcare, operations), teams may assume the AI is unreliable by default and ignore valuable suggestions because the system does not clarify when it is very confident.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear next steps when uncertainty is high</span> – When a response is ambiguous or incomplete, users are left guessing whether to refine the prompt, consult a colleague, or switch tools entirely.
              </li>
            </ul>
            <p className="pattern-body">
              A confidence thermometer addresses these issues by pairing each output with explicit signals about reliability and actionable guidance for what to do when certainty is low.
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
                  When AI recommendations influence <span className="pattern-body--bold">irreversible or costly actions</span>, such as financial transactions, lead routing, access control, pricing changes, medical triage, or customer communication at scale.
                </li>
                <li>
                  When the AI is aggregating or extrapolating from <span className="pattern-body--bold">heterogeneous or incomplete data</span>, such as combining logs, CRM records, and external benchmarks.
                </li>
                <li>
                  When regulatory, contractual, or reputational risk is <span className="pattern-body--bold">non-trivial</span>, such as in healthcare, finance, HR, cybersecurity, or legal tooling.
                </li>
                <li>
                  When teams explicitly need to <span className="pattern-body--bold">calibrate trust</span> in AI as part of adoption, change management, or compliance objectives.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI is used for <span className="pattern-body--bold">purely cosmetic or easily reversible tasks</span>, such as changing tone, formatting text, or resizing images.</li>
                <li>The feature is backed by <span className="pattern-body--bold">deterministic, verifiable logic</span> (e.g., sorting a table, calculating a sum) rather than probabilistic inference.</li>
                <li>The UI already includes <span className="pattern-body--bold">simple binary validation</span> that makes uncertainty obvious (e.g., a spell-checker with direct &quot;correct/incorrect&quot; markers).</li>
                <li>The feature operates in <span className="pattern-body--bold">very low-stakes consumer contexts</span> where occasional minor mistakes have negligible impact and are easy for users to spot and ignore.</li>
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
                A confidence thermometer typically pairs with a specific AI message, recommendation, or action. It should be visually lightweight but consistently discoverable across the product, reinforcing a shared mental model of &quot;how certain the system is&quot; and &quot;what to do about it.&quot;
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline in AI chat messages
              </h3>
              <p className="pattern-card__intro">
                Attached to each AI response or section header within a long answer.
              </p>
              <ul className="pattern-card__list">
                <li>Often placed near a timestamp or message menu</li>
                <li>Provides immediate context without interrupting reading flow</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline in structured outputs</h3>
              <p className="pattern-card__intro">
                Adjacent to rows, cards, or sections in generated content.
              </p>
              <ul className="pattern-card__list">
                <li>Rows in a table (e.g., each lead score or incident classification)</li>
                <li>Cards in a gallery (e.g., campaign variants)</li>
                <li>Sections in a generated document (e.g., contract clauses)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Side panel or summary bar</h3>
              <p className="pattern-card__intro">
                Showing overall confidence for multi-step plans.
              </p>
              <ul className="pattern-card__list">
                <li>Right-hand detail panel with overall confidence score</li>
                <li>Ability to drill down into per-step confidence</li>
                <li>Useful for workflow runs or automation recipes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual surfaces</h3>
              <p className="pattern-card__intro">
                Notifications, banners, or toasts for significant actions.
              </p>
              <ul className="pattern-card__list">
                <li>Shown when the AI proposes a significant action</li>
                <li>Example: &quot;Auto-close 37 tickets – Medium confidence&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Confidence Indicator</h3>
            <p className="pattern-card__intro">
              The primary object is the Confidence Indicator associated with a specific AI output or action.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <p className="pattern-card__intro">Communicates the confidence band and optionally a numeric approximation.</p>
                <ul className="pattern-card__list">
                  <li><em>High confidence</em></li>
                  <li><em>Medium confidence (≈70%)</em></li>
                  <li><em>Low confidence – incomplete data</em></li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <p className="pattern-card__intro">Concise explanatory text clarifying why the system is at this confidence level.</p>
                <ul className="pattern-card__list">
                  <li>&quot;Based mainly on last quarter&apos;s revenue and current pipeline coverage.&quot;</li>
                  <li>&quot;Symptoms match multiple conditions; limited recent vitals data.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Expand / collapse details (&quot;Show reasoning&quot;, &quot;See supporting data&quot;)</li>
                  <li>Request re-evaluation (&quot;Recalculate with new inputs&quot;)</li>
                  <li>Provide feedback (&quot;Mark as incorrect&quot;, &quot;This was overconfident&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Data recency (e.g., &quot;Data last updated 3 days ago&quot;)</li>
                  <li>Scope or data sources</li>
                  <li>Risk flags (e.g., &quot;Potential PII present&quot;, &quot;Requires human sign-off&quot;)</li>
                  <li>Status (e.g., &quot;Pending review&quot;, &quot;Approved by analyst&quot;)</li>
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
                The lifecycle of a confidence thermometer spans from initial request through feedback and learning.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>User initiates an AI request (e.g., forecast, triage, recommendation)</li>
                <li>UI shows a loading state for the response without yet rendering a confidence indicator</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Confidence Estimation</h3>
              <ul className="pattern-card__list">
                <li>System generates a candidate response or action</li>
                <li>Computes confidence using model-internal probabilities, historical accuracy, data quality checks, or agreement between sources</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Indicator Rendering</h3>
              <ul className="pattern-card__list">
                <li>AI output is presented with a confidence thermometer</li>
                <li>Includes concise label (Low / Medium / High)</li>
                <li>Visual cue (bar, dot, or icon with color and intensity)</li>
                <li>Optional numeric range (e.g., &quot;≈80% estimated reliability&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Explanation and Grounding</h3>
              <ul className="pattern-card__list">
                <li>On hover or click, an overlay reveals deeper context</li>
                <li>Short explanation of <em>why</em> the confidence is at that level</li>
                <li>Key drivers and known gaps or caveats</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Adaptive Next-Step Suggestions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">High confidence:</span> streamlined actions like &quot;Apply change&quot;, &quot;Create ticket&quot;</li>
                <li><span className="pattern-body--bold">Medium confidence:</span> prompts for quick review like &quot;Adjust assumptions&quot;</li>
                <li><span className="pattern-body--bold">Low confidence:</span> defensive guidance like &quot;Verify with dashboard&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. User Input and Re-evaluation</h3>
              <ul className="pattern-card__list">
                <li>Users may refine the context (add constraints, upload a file, correct an assumption)</li>
                <li>System regenerates output and recalculates confidence</li>
                <li>Optionally indicates changes (&quot;Confidence increased after adding Q4 data&quot;)</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Feedback and Learning Loop</h3>
            <ul className="pattern-card__list">
              <li>When actions are accepted, edited, or rejected, the system logs the presented confidence band, the user&apos;s choice, and downstream accuracy when available</li>
              <li>Over time, these signals support calibration improvements and policy adjustments (e.g., lowering the threshold for auto-approval, or widening the &quot;Needs human review&quot; band)</li>
            </ul>
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Design guidelines & best practices</p>
              <p className="pattern-body pattern-body--narrow">
                Effective confidence thermometers require careful attention to calibration, visual encoding, and user controls.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Calibration and Scoring</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Base confidence on objective signals</span> – Combine model scores with data quality checks, retrieval coverage, and historical performance</li>
                <li><span className="pattern-body--bold">Use coarse bands, not false precision</span> – Prefer 3–4 meaningful bands over overly precise numbers</li>
                <li><span className="pattern-body--bold">Ground expectations in real performance</span> – Align labels with measured accuracy</li>
                <li><span className="pattern-body--bold">Revisit calibration per domain</span> – Tune thresholds and language per risk profile</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Encoding</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Use color plus shape, not color alone</span> – Combine with icons, patterns, or labels for accessibility</li>
                <li><span className="pattern-body--bold">Keep it compact and consistent</span> – Maintain a stable visual language across the product</li>
                <li><span className="pattern-body--bold">Avoid alarming visuals for routine uncertainty</span> – Reserve critical cues for genuinely serious risk conditions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explanatory Overlays</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Lead with a single, clear reason</span> – Start with the primary factor, then offer further details</li>
                <li><span className="pattern-body--bold">Highlight limitations and missing data</span> – Explicitly call out gaps like stale data or unverified assumptions</li>
                <li><span className="pattern-body--bold">Link to underlying evidence</span> – Provide paths to inspect data or documents behind the answer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adaptive Actions</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Tie actions to confidence bands</span> – Map specific actions to each band</li>
                <li><span className="pattern-body--bold">Avoid auto-acting on low-confidence outputs</span> – Favor friction that encourages review</li>
                <li><span className="pattern-body--bold">Respect organizational guardrails</span> – Integrate with approval workflows and audit logging</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">User Controls</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Allow configurable thresholds</span> – Give admins options to set alert thresholds</li>
                <li><span className="pattern-body--bold">Enable confidence re-checks</span> – Provide &quot;Recalculate&quot; control when data changes</li>
                <li><span className="pattern-body--bold">Record and surface overrides</span> – Capture decisions against low-confidence warnings</li>
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
                How confidence thermometers apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Forecasting and Planning Agent</h3>
              <p className="pattern-card__intro">B2B Analytics</p>
              <ul className="pattern-card__list">
                <li>Revenue analytics product suggests quarterly forecasts for each region</li>
                <li><em>High</em> indicators for regions with stable historical patterns</li>
                <li><em>Medium</em> or <em>Low</em> when market shifts or incomplete data introduce risk</li>
                <li>Low-confidence rows include prompts to refine assumptions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident and Operations Assistant</h3>
              <p className="pattern-card__intro">DevOps / IT</p>
              <ul className="pattern-card__list">
                <li>AI proposes root-cause hypotheses and remediation steps</li>
                <li>Confidence band based on historical incident mappings and log coverage</li>
                <li>Explanation overlay shows which metrics and logs informed the conclusion</li>
                <li>Low-confidence: &quot;Collect additional logs&quot; or &quot;Escalate to SRE&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Content Generation Agent</h3>
              <p className="pattern-card__intro">Marketing & Sales</p>
              <ul className="pattern-card__list">
                <li>Campaign assistant generates ad copy variants</li>
                <li>Confidence reflects alignment with past high-performing campaigns</li>
                <li>Marketers can filter variants by confidence band</li>
                <li>Bold, experimental options marked as &quot;Low confidence – exploratory&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Triage Agent</h3>
              <p className="pattern-card__intro">Support Platform</p>
              <ul className="pattern-card__list">
                <li>AI classifies incoming tickets by urgency and resolution path</li>
                <li>Automatic routing only for high-confidence cases</li>
                <li>Agent confirmation required for medium- and low-confidence tickets</li>
                <li>Quick explanations like &quot;Low confidence – unfamiliar product version&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Telehealth Analysis</h3>
              <p className="pattern-card__intro">Healthcare B2C</p>
              <ul className="pattern-card__list">
                <li>Symptom analysis agent surfaces potential conditions</li>
                <li>Each suggestion includes &quot;Preliminary match – low confidence&quot;</li>
                <li>Encourages human review by clinicians</li>
                <li>Directs patients toward appropriate next steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consumer Financial Coaching</h3>
              <p className="pattern-card__intro">FinTech B2C</p>
              <ul className="pattern-card__list">
                <li>Savings recommendation engine with similar indicators</li>
                <li>Signals whether plan is based on robust patterns or speculative assumptions</li>
                <li>Helps users understand reliability of financial advice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of confidence thermometers can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Always-High Confidence</h3>
                  <p className="antipattern-subtitle">Presenting every result as &quot;High confidence&quot;.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Undermines the pattern and encourages risky overtrust, especially in complex or novel situations where the system should be uncertain.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Calibrate thresholds based on real-world accuracy data and vary confidence appropriately.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">False Precision</h3>
                  <p className="antipattern-subtitle">Displaying exact percentages like &quot;83.7% confidence&quot;.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Can mislead users into overvaluing small numeric differences. The precision suggests a level of certainty the system does not actually possess.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use coarse bands (Low / Medium / High) that match actual predictive reliability.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous Semantics</h3>
                  <p className="antipattern-subtitle">Mixing &quot;confidence&quot; with other metrics in the same visual affordance.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Mixing confidence with importance, impact, or urgency leads to misinterpretation. Each indicator should have a clear, singular meaning.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep confidence indicators separate from other metrics with distinct visual treatments.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden or Buried Uncertainty</h3>
                  <p className="antipattern-subtitle">Low-confidence indications deep in secondary overlays or footnotes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Burying uncertainty defeats the purpose. Uncertainty should be discoverable at a glance when it matters, not hidden away.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make confidence visible inline, directly adjacent to the AI output it describes.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming Detail Overlays</h3>
                  <p className="antipattern-subtitle">Explaining the entire model architecture instead of key factors.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Long, dense explanations overwhelm users and reduce practical value. Users need to understand why, not how.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Lead with the primary factor behind confidence, then offer progressive disclosure for details.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data, Telemetry & Experimentation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, telemetry & experimentation</p>
              <p className="pattern-body pattern-body--narrow">
                To ensure the confidence thermometer actually improves decision quality and trust:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Track Usage vs. Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Correlate confidence bands with user actions (accept, edit, reject)</li>
                <li>Track downstream outcomes (forecast accuracy, incident time-to-resolution, error rates)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Measure Calibration</h3>
              <ul className="pattern-card__list">
                <li>Periodically compare predicted confidence bands with real-world correctness</li>
                <li>Adjust thresholds, band labels, or visual mappings accordingly</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Assess Behavior at Different Bands</h3>
              <ul className="pattern-card__list">
                <li>Instrument user flows to understand how often teams proceed with low-confidence outputs</li>
                <li>Track how frequently they request additional context or override recommendations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Run Experiments on Representation</h3>
              <ul className="pattern-card__list">
                <li>Test alternative labels, visual styles, and wording</li>
                <li>Determine which variants improve appropriate caution without unnecessary friction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility & Localization */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & localization</p>
              <p className="pattern-body pattern-body--narrow">
                Ensuring confidence thermometers work for all users across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Visual Accessibility</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Do not rely solely on color</span> – Pair color with icons, text labels, or patterns for users with visual impairments</li>
                <li><span className="pattern-body--bold">Support keyboard and screen readers</span> – Ensure indicators and overlays are reachable via keyboard focus with semantic labels</li>
                <li><span className="pattern-body--bold">Respect motion preferences</span> – Avoid distracting animations; provide stable, predictable transitions</li>
              </ul>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Localization</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Use clear, translatable language</span> – Stick to simple terms like <em>Low / Medium / High confidence</em></li>
                <li><span className="pattern-body--bold">Avoid idioms</span> – Nuanced phrases may not localize well across regions</li>
                <li><span className="pattern-body--bold">Consider cultural context</span> – Confidence displays may be interpreted differently across cultures</li>
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
              <p className="pattern-checklist-category__title">Calibration Quality</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is confidence calibrated against real-world accuracy data?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are confidence bands meaningful and distinct (not always &quot;High&quot;)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Visual Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the confidence indicator visible at a glance, not buried?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the visual encoding work without relying solely on color?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Explanatory Value</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users understand <em>why</em> confidence is at a given level?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are limitations and missing data clearly called out?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Actionable Guidance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are next-step suggestions tailored to each confidence band?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there appropriate friction for low-confidence actions?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users request re-evaluation when context changes?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are overrides and decisions against low-confidence logged?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Consistency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the confidence indicator visually consistent across the product?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do the same labels and bands mean the same thing everywhere?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
