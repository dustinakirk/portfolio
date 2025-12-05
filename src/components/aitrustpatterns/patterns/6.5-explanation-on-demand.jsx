import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import ExplanationOnDemandDemo from '../demos/ExplanationOnDemandDemo';

// SEO metadata for this pattern page
export const EXPLANATION_ON_DEMAND_SEO = {
  title: "Explanation-on-Demand - AI Trust Pattern",
  description: "Provides an on-demand 'Why?' control that reveals layered explanations for AI outputs, allowing users to inspect reasoning without cluttering the primary workflow.",
  keywords: ["AI explanation", "why control", "AI transparency", "explainable AI", "XAI", "AI reasoning", "trust patterns", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/explanation-on-demand"
};


export default function ExplanationOnDemandPattern() {
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
            <span className="pattern-header__index">6.5</span>
            <div>
              <h1 className="pattern-header__title">Explanation-on-Demand</h1>
              <p className="pattern-header__subtitle">
                Provides an on-demand &quot;Why?&quot; control that reveals layered explanations for AI outputs, allowing users to inspect reasoning without cluttering the primary workflow.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.5" patternTitle="Explanation-on-Demand" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Explanation-on-Demand introduces a small, consistent affordance (for example, &quot;Why?&quot; or &quot;Why this result?&quot;) near an AI decision, action, or recommendation. When activated, it reveals a concise, human-readable explanation with optional deeper layers: key factors, evidence, confidence, and alternatives considered.
            </p>
            <p className="pattern-body">
              This pattern is particularly valuable in agentic AI systems where the model initiates actions, prioritizes work, or recommends decisions across complex domains such as finance, HR, cybersecurity, legal, or enterprise SaaS. It gives users the ability to scrutinize specific outputs without forcing heavy explanations into every surface.
            </p>
            <p className="pattern-body">
              By making explanations optional but always available, the pattern:
            </p>
            <ul className="pattern-list">
              <li>Preserves focus and reduces cognitive load for users who do not need details.</li>
              <li>Supports accountability and auditability for those who do.</li>
              <li>Reinforces that the human operator is the final decision-maker, not the AI.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Explanation-on-demand example">
          <ExplanationOnDemandDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explanation-on-demand, AI outputs and actions appear as opaque judgments. Users see a score, a recommendation, or an automated step, but cannot tell:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">What drove the result.</span> The system appears as a &quot;black box&quot;, especially when multiple signals or models interact behind the scenes.
              </li>
              <li>
                <span className="pattern-body--bold">Whether the result is trustworthy.</span> Users cannot easily verify that the AI used appropriate data, respected constraints, or avoided bias.
              </li>
              <li>
                <span className="pattern-body--bold">How to correct or improve outcomes.</span> When a result is wrong or surprising, there is no clear path to refine inputs, adjust preferences, or challenge the decision.
              </li>
            </ul>
            <p className="pattern-body">
              This can undermine adoption of agentic AI: users revert to manual workflows, override recommendations reflexively, or escalate issues to support and compliance teams. Explanation-on-Demand addresses this by making the system&apos;s reasoning inspectable precisely when it matters.
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
                  <span className="pattern-body--bold">AI decisions with material impact.</span> Any result that can affect money, reputation, employment, legal exposure, or security.
                </li>
                <li>
                  <span className="pattern-body--bold">Agentic workflows with autonomy.</span> Systems that take actions on behalf of users where operators need a fast way to understand &quot;why this action now&quot;.
                </li>
                <li>
                  <span className="pattern-body--bold">Complex ranking, routing, or prioritization.</span> Lists ordered by AI where order matters and may be contested.
                </li>
                <li>
                  <span className="pattern-body--bold">Compliance- or audit-heavy domains.</span> Environments where regulators, customers, or internal governance require traceability of automated decisions.
                </li>
                <li>
                  <span className="pattern-body--bold">Training and onboarding scenarios.</span> Surfaces where new users must learn how the AI &quot;thinks&quot; to use it effectively over time.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Trivial or reversible actions.</span> Simple, low-impact decisions where errors are low-cost and easily undone.</li>
                <li><span className="pattern-body--bold">Highly transparent logic in the main UI.</span> Cases where inputs, criteria, and calculations are already explicit and legible.</li>
                <li><span className="pattern-body--bold">Purely decorative or random content.</span> Situations where the AI output is intentionally playful or non-deterministic.</li>
                <li><span className="pattern-body--bold">Strictly deterministic rules are already surfaced.</span> When a rules engine is used and the relevant rule is clearly shown inline.</li>
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
                Explanation-on-Demand typically appears as a small control attached to an AI-driven output, with a structured explanation surface that opens on interaction.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Inline per item
              </h3>
              <p className="pattern-card__intro">
                A &quot;Why?&quot; link, icon, or button placed close to an AI decision, ranking, or label.
              </p>
              <ul className="pattern-card__list">
                <li>Next to a candidate score, alert severity, or flagged transaction row</li>
                <li>Minimal visual weight to avoid distraction</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Summary-level control</h3>
              <p className="pattern-card__intro">
                A &quot;Why this plan?&quot; or &quot;Explain this summary&quot; control at the top of an AI-generated panel.
              </p>
              <ul className="pattern-card__list">
                <li>Appears on dashboards, recommendation panels, or AI-generated plans</li>
                <li>Explains the aggregate logic, not individual items</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual controls</h3>
              <p className="pattern-card__intro">
                &quot;Why am I seeing this?&quot; links in notifications, toasts, or banners.
              </p>
              <ul className="pattern-card__list">
                <li>Triggered by AI-driven targeting, personalization, or anomaly detection</li>
                <li>Useful in email alerts and push notifications</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Chat transcripts and agent messages</h3>
              <p className="pattern-card__intro">
                A subtle &quot;Why?&quot; or &quot;Show reasoning&quot; affordance attached to specific AI messages.
              </p>
              <ul className="pattern-card__list">
                <li>In conversational interfaces</li>
                <li>Attached to actions or recommendations within chat</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Explanation Unit</h3>
            <p className="pattern-card__intro">
              The core object is an explanation unit: a structured, reusable component that explains a single AI output, decision, or action.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Title</p>
                <ul className="pattern-card__list">
                  <li>&quot;Why this lead is prioritized&quot;</li>
                  <li>&quot;Why this access was denied&quot;</li>
                  <li>&quot;Why this incident is critical&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Primary Explanation</p>
                <ul className="pattern-card__list">
                  <li>Short, plain-language summary of key reasons</li>
                  <li>One to three sentences maximum</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Supporting Details (Tiered)</p>
                <ul className="pattern-card__list">
                  <li>Key factors & signals</li>
                  <li>Weights & importance</li>
                  <li>Data sources</li>
                  <li>Confidence & uncertainty</li>
                  <li>Alternatives considered</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>&quot;Expand details&quot; / &quot;Show more&quot;</li>
                  <li>&quot;Adjust preferences&quot; or &quot;Change criteria&quot;</li>
                  <li>&quot;Mark as incorrect&quot; / &quot;Report issue&quot;</li>
                  <li>&quot;Override decision&quot; (where allowed)</li>
                  <li>&quot;Pin explanation&quot; or &quot;Export&quot;</li>
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
                The lifecycle of an explanation-on-demand spans from initial output to logging and improvement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Output</h3>
              <ul className="pattern-card__list">
                <li>The AI generates a response, recommendation, plan, or action.</li>
                <li>A &quot;Why?&quot; affordance is shown in a consistent location but with low visual weight.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Hover / Focus State</h3>
              <ul className="pattern-card__list">
                <li>Hover or focus may surface a brief tooltip (&quot;See why this was recommended&quot;).</li>
                <li>Clarifies purpose without triggering a full explanation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Explanation Trigger</h3>
              <ul className="pattern-card__list">
                <li>On activation, an explanation surface opens: inline expansion, side drawer, panel, popover, or modal.</li>
                <li>Modal used sparingly for high-stakes decisions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. First-Layer Explanation</h3>
              <ul className="pattern-card__list">
                <li>Concise, one-three sentence explanation summarizing primary factors.</li>
                <li>Includes confidence level and major constraints or policies applied.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Deep Dive (Tiered Details)</h3>
              <ul className="pattern-card__list">
                <li>Optional expanders reveal detailed signals and their relative influence.</li>
                <li>Comparisons to other candidates/items, visualizations, links to underlying records.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Adjustments & Feedback</h3>
              <ul className="pattern-card__list">
                <li>Preference changes (e.g., &quot;De-emphasize job title seniority&quot;).</li>
                <li>Policy or filter adjustments, feedback submission.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Closing & Persistence</h3>
              <ul className="pattern-card__list">
                <li>The explanation can be dismissed easily.</li>
                <li>Optional ability to pin it alongside the main content, export as PDF/CSV, or attach to a case or ticket for audit.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Logging & Improvement</h3>
              <ul className="pattern-card__list">
                <li>Interactions with the &quot;Why?&quot; control and related feedback are logged.</li>
                <li>Informs model improvements, refinement of explanation templates, and detection of problematic patterns.</li>
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
                Explanation-on-Demand can be adapted across different surfaces, scopes, and interaction patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">By Surface</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Inline peek explanation:</span> Short explanation displayed directly under the item.</li>
                <li><span className="pattern-body--bold">Side-panel explanation:</span> Persistent panel visible while browsing multiple items.</li>
                <li><span className="pattern-body--bold">Modal explanation:</span> Used sparingly for high-stakes decisions requiring review and confirmation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">By Scope</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Local &quot;Why this?&quot;:</span> Explains a single output.</li>
                <li><span className="pattern-body--bold">Global &quot;How this works&quot;:</span> Explains the overall logic of a model or feature.</li>
                <li><span className="pattern-body--bold">Policy-based vs. model-based:</span> Emphasizes rules/thresholds vs. signals/patterns.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">By Interaction Pattern</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Single-click:</span> One click opens, second click closes.</li>
                <li><span className="pattern-body--bold">Hover preview + click:</span> Short preview on hover; full explanation on click.</li>
                <li><span className="pattern-body--bold">Chat-based &quot;why?&quot;:</span> Natural language query maps to explanation component.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & messaging guidelines</p>
            <p className="pattern-body">
              Effective messaging is crucial for trust; the structure and tone of explanations must be clear and consistent.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good explanation structure</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li><span className="pattern-body--bold">Summary:</span> &quot;This [decision] was made because...&quot;</li>
                  <li><span className="pattern-body--bold">Key factors:</span> &quot;The most influential factors were...&quot;</li>
                  <li><span className="pattern-body--bold">Limitations:</span> &quot;This decision may be less reliable when...&quot;</li>
                  <li>Front-load the most important information</li>
                  <li>Prefer short bullet lists for signals and factors</li>
                  <li>Use consistent templates per domain</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak explanations</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>Overly technical jargon without plain-language definitions</li>
                  <li>Generic disclaimers instead of concrete limitations</li>
                  <li>Marketing-style explanations that don&apos;t reflect actual model behavior</li>
                  <li>Inconsistent phrasing and structures across similar explanations</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Handling Uncertainty</h3>
                <ul className="pattern-card__list">
                  <li>Explicitly state uncertainty or partial visibility when data is incomplete</li>
                  <li>Make limitations concrete: &quot;This score does not consider offline purchases&quot;</li>
                  <li>For very low confidence, suggest secondary validation actions</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Alternatives & Counterfactuals</h3>
                <ul className="pattern-card__list">
                  <li>Show items just below a threshold (&quot;Next-best options&quot;)</li>
                  <li>What would need to change for a different outcome</li>
                  <li>Help users see the decision space, not just a single outcome</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Safety, Ethics, and Bias</h3>
                <ul className="pattern-card__list">
                  <li>Avoid explanations that attribute decisions to protected characteristics</li>
                  <li>Highlight the application of fairness constraints when relevant</li>
                  <li>Provide escalation paths when an explanation reveals potential unfairness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure explanations are accessible to all users across devices and assistive technologies.
              </p>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-sm">
            <ul className="pattern-card__list">
              <li>Ensure all &quot;Why?&quot; affordances are reachable via keyboard and follow logical tab order.</li>
              <li>Provide accessible names and descriptions for icons (e.g., ARIA labels such as &quot;Why this result&quot;).</li>
              <li>Ensure explanations are readable with screen readers and maintain consistent heading hierarchy.</li>
              <li>Avoid relying solely on color to communicate confidence or risk; pair color with text labels or patterns.</li>
              <li>Support responsive layouts so explanations remain usable on smaller screens and in constrained side panels.</li>
            </ul>
          </div>
        </section>

        {/* Edge Cases & Error States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & error states</p>
              <p className="pattern-body pattern-body--narrow">
                Handle gracefully when explanations are unavailable, restricted, or potentially misleading.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">No Explanation Available</h3>
              <ul className="pattern-card__list">
                <li>Provide a clear, honest message: &quot;An explanation is not available for this result due to missing data.&quot;</li>
                <li>Offer guidance on next steps or alternative views where possible.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Sensitive or Restricted Information</h3>
              <ul className="pattern-card__list">
                <li>Mention limitations without exposing protected details.</li>
                <li>Example: &quot;Additional internal risk signals contributed to this decision but cannot be displayed here.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Stale or Outdated Explanations</h3>
              <ul className="pattern-card__list">
                <li>Indicate when an explanation may not reflect the latest data: &quot;Based on data as of [timestamp]&quot;.</li>
                <li>Provide a control to refresh if recomputation is feasible.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Disagreement Between Explanation and Outcome</h3>
              <ul className="pattern-card__list">
                <li>Treat as a critical defect.</li>
                <li>Provide an easy way to report mismatches and ensure these are prioritized for investigation.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Bulk Actions and Batch Decisions</h3>
            <ul className="pattern-card__list">
              <li>For bulk updates driven by AI, offer both a global explanation of the logic applied and a way to inspect explanations for individual items sampled from the batch.</li>
            </ul>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of explanation-on-demand can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Explanation Washing</h3>
                  <p className="antipattern-subtitle">Generic or marketing-style explanations that don&apos;t reflect actual model behavior.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Providing simple, generic, or marketing-style explanations that do not reflect actual model behavior. This can damage trust severely once detected.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure explanations accurately reflect the actual decision factors and model behavior.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Exposure of Complexity</h3>
                  <p className="antipattern-subtitle">Surfacing raw model internals that overwhelm non-expert users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Surfacing raw model internals, equations, or unprocessed feature names that overwhelm or confuse non-expert users.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Translate technical details into plain language; reserve deep technical info for advanced views.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Templates</h3>
                  <p className="antipattern-subtitle">Different phrasing and structures for similar explanations.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using different phrasing and structures for similar explanations across areas, forcing users to re-learn formats and reducing comparability.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain a centralized component library with consistent explanation templates.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Intrusive UI</h3>
                  <p className="antipattern-subtitle">Large modals or blocking flows that turn explanations into friction.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using large modals or blocking flows unnecessarily, turning explanations into friction instead of reassurance.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use lightweight inline expansions or side panels; reserve modals for high-stakes confirmations only.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Revealing Attackable Details</h3>
                  <p className="antipattern-subtitle">Exposing granular model internals that enable gaming or privacy violations.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing highly granular model internals or thresholds that enable model gaming, reverse engineering, or privacy violations.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Balance transparency with security; explain reasoning without exposing exploitable thresholds.</span>
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
                How Explanation-on-Demand applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Loan Approval Agent</h3>
              <p className="pattern-card__intro">B2C / B2B2C Banking</p>
              <ul className="pattern-card__list">
                <li>Approved loans show: &quot;Approved based on stable income history, low debt-to-income ratio, and strong repayment history.&quot;</li>
                <li>Denied loans show key factors with relative contribution, policy thresholds, suggestions for improvement.</li>
                <li>Supports customer understanding and equips support agents with consistent language.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Lead Prioritization in CRM</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <ul className="pattern-card__list">
                <li>Sales teams see prioritized leads with &quot;Why?&quot; icons per row.</li>
                <li>Short explanation: &quot;Prioritized due to high product usage, recent trial activation, and engagement with pricing pages.&quot;</li>
                <li>Toggle to reduce weight on marketing email clicks for this view.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security Operations Center Triage</h3>
              <p className="pattern-card__intro">B2B Enterprise</p>
              <ul className="pattern-card__list">
                <li>&quot;Why critical?&quot; explanations including attack pattern matched, assets involved, correlation across signals.</li>
                <li>Side panel shows alternative alerts that were downgraded and why.</li>
                <li>Gives analysts confidence in automated triage while allowing rapid overrides.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">HR Screening & Talent Intelligence</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <ul className="pattern-card__list">
                <li>Local explanations detail skills match, seniority, location, recency of relevant roles.</li>
                <li>Global explanation describes how diversity and fairness constraints are applied.</li>
                <li>Recruiters can confidently defend shortlists to hiring managers and compliance teams.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                Track a mix of behavioral, outcome, and quality metrics to assess the effectiveness of Explanation-on-Demand.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Engagement & Usage</h3>
              <ul className="pattern-card__list">
                <li>Percentage of AI outputs where the &quot;Why?&quot; control is used.</li>
                <li>Frequency of repeated explanation usage by the same user segment or role.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Decision Quality & Overrides</h3>
              <ul className="pattern-card__list">
                <li>Override rates before and after explanation adoption.</li>
                <li>Changes in appeal/request-for-review volume and resolution time.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Survey scores related to perceived transparency, control, and fairness.</li>
                <li>Qualitative feedback on clarity and usefulness of explanations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Indicators</h3>
              <ul className="pattern-card__list">
                <li>Incidents related to misunderstood AI decisions.</li>
                <li>Compliance or audit findings referencing explanation quality.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Latency</h3>
              <ul className="pattern-card__list">
                <li>Time to render explanations, especially for complex or multi-model scenarios.</li>
                <li>Error rate for explanation generation.</li>
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
                Implementation details for product, design, and engineering teams.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Product & Policy</h3>
              <ul className="pattern-card__list">
                <li>Define where explanations are required vs. optional.</li>
                <li>Establish consistent taxonomy for decision types and explanation templates.</li>
                <li>Align with legal, compliance, and security on what can be exposed and retention requirements.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Design</h3>
              <ul className="pattern-card__list">
                <li>Maintain a centralized component library for &quot;Why?&quot; affordances and explanation surfaces.</li>
                <li>Plan for responsive behavior across web, embedded widgets, and chat interfaces.</li>
                <li>Prototype explanation variants with representative users.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engineering</h3>
              <ul className="pattern-card__list">
                <li>Separate explanation generation from core decision logic while ensuring alignment.</li>
                <li>Support local explanations (individual decisions) and global explanations (model-level).</li>
                <li>Implement logging for inputs, outputs, key signals, explanation payloads, and user interactions.</li>
                <li>Build fallbacks for explanation failures.</li>
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
                These patterns work best as a cohesive system, making AI reasoning observable, contestable, and improvable over time.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">6.1 Source Reveal & Citations</h3>
              <p className="pattern-card__intro">Shows supporting evidence and source documents used by the AI. Often linked from within the &quot;Why?&quot; explanation.</p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6.2 Confidence & Uncertainty Indicators</h3>
              <p className="pattern-card__intro">Communicates how sure the AI is about an output; pairs naturally with explanations that describe why confidence is high or low.</p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6.3 Guardrails & Policy Messaging</h3>
              <p className="pattern-card__intro">Displays organizational or regulatory constraints that shape AI decisions (e.g., compliance rules).</p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6.4 Alternatives & &quot;What If?&quot; Exploration</h3>
              <p className="pattern-card__intro">Allows users to explore alternative options and counterfactuals, often building on the signals surfaced in explanations.</p>
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
              <p className="pattern-checklist-category__title">Discoverability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the &quot;Why?&quot; affordance visible and discoverable without being distracting?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the affordance placed consistently across all AI-driven outputs?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the first-layer explanation provide a clear, plain-language summary?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are tiered details available for users who want to go deeper?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accuracy</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do explanations accurately reflect the actual decision factors?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are limitations and uncertainty clearly communicated?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Actionability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users provide feedback or report issues from the explanation surface?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are adjustment controls available where appropriate?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Consistency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are explanation templates consistent across similar decision types?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the explanation component reusable across different surfaces?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility & Compliance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the explanation accessible via keyboard and screen readers?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are explanations logged and exportable for audit purposes?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
