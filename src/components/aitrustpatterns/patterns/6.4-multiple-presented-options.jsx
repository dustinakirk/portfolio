import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import MultiplePresentedOptionsDemo from '../demos/MultiplePresentedOptionsDemo';

// SEO metadata for this pattern page
export const MULTIPLE_PRESENTED_OPTIONS_SEO = {
  title: "Multiple Presented Options - AI Trust Pattern",
  description: "Expose a small set of distinct AI-generated options so that people can compare, adapt, or combine them, reducing over-reliance on a single suggestion and strengthening agency and trust.",
  keywords: ["AI options", "plurality pattern", "AI alternatives", "AI trust", "multiple suggestions", "AI decision support", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/multiple-presented-options"
};


export default function MultiplePresentedOptionsPattern() {
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
            <span className="pattern-header__index">6.4</span>
            <div>
              <h1 className="pattern-header__title">Multiple Presented Options</h1>
              <p className="pattern-header__subtitle">
                Expose a small set of distinct AI-generated options so that people can compare, adapt, or combine them, reducing over-reliance on a single suggestion and strengthening agency and trust.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="6.4" patternTitle="Multiple Presented Options" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              The Plurality Pattern surfaces multiple AI-generated options at once instead of a single &quot;final answer.&quot; Each option is framed as a distinct, labeled path that reflects different assumptions, trade-offs, or styles.
            </p>
            <p className="pattern-body">
              In agentic AI experiences, this pattern counters the impression that the system has produced <em>the</em> correct answer. Instead, it communicates that there are several reasonable ways forward and that human judgment is central to choosing and refining them. This improves trust by:
            </p>
            <ul className="pattern-list">
              <li>Making uncertainty and trade-offs visible rather than hidden</li>
              <li>Reducing single-point failure risk when an AI suggestion is wrong or misaligned</li>
              <li>Encouraging critical thinking instead of passive acceptance of AI output</li>
            </ul>
            <p className="pattern-body">
              Plurality surfaces most naturally in:
            </p>
            <ul className="pattern-list">
              <li>Chat-based copilots returning multiple drafts</li>
              <li>Strategic planning tools showing alternative scenarios</li>
              <li>Recommendation and personalization systems proposing variations of a plan, path, or configuration</li>
              <li>Troubleshooting and diagnostic flows offering different investigation strategies</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/6.4 multiple options.png"
              alt="Multiple Presented Options pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This demo shows how presenting multiple AI-generated options supports better decision-making for a product launch campaign. Instead of showing a single "best" strategy, the AI presents three distinct approaches—Conservative, Balanced, and Aggressive—each optimized for different priorities (cost efficiency, steady growth, or maximum reach). Click "Compare options" to view them side-by-side, highlighting the key trade-offs in budget, timeline, and expected outcomes. Notice how each option is labeled with clear differentiators to guide your choice.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Multiple Presented Options interactive demo">
            <MultiplePresentedOptionsDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without Plurality, AI systems often present a single output as if it were definitive. This creates several issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Automation bias and over-trust</span> – When only one answer is shown, people tend to treat it as authoritative—even when it is wrong, biased, or misaligned with constraints.
              </li>
              <li>
                <span className="pattern-body--bold">Invisible uncertainty and hidden trade-offs</span> – The system may be equally uncertain about multiple plausible answers, but this is obscured by only showing the top-ranked one. Important alternatives stay hidden.
              </li>
              <li>
                <span className="pattern-body--bold">Mismatch with mental models</span> – A single suggestion that does not match expectations can cause the entire system to be discarded as &quot;unhelpful&quot; or &quot;inaccurate,&quot; even when nearby alternatives would have been acceptable.
              </li>
              <li>
                <span className="pattern-body--bold">Lost opportunity for exploration and creativity</span> – Generative systems are good at exploring diverse possibilities, but a single-answer UI forces a narrow, linear workflow.
              </li>
              <li>
                <span className="pattern-body--bold">Single-point failures in high-impact decisions</span> – In planning, financial, or operational contexts, a wrong single suggestion can drive poor decisions, especially when there is little visibility into what else the AI could have proposed.
              </li>
            </ul>
            <p className="pattern-body">
              Plurality addresses these issues by explicitly surfacing multiple viable paths, making it easier to choose, critique, or combine suggestions without having to manually prompt for variants repeatedly.
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
                  <span className="pattern-body--bold">Ambiguous or under-specified prompts</span> – When the system detects ambiguity, conflicting goals, or multiple reasonable interpretations of intent.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-dimensional or trade-off-heavy decisions</span> – Strategy, planning, pricing, segmentation, roadmapping, experiment design, hiring plans, and other tasks where risk, impact, cost, and time all matter.
                </li>
                <li>
                  <span className="pattern-body--bold">Creative or open-ended generation tasks</span> – Content drafting, UI copy, campaign ideas, design variants, training plans, or knowledge base structuring where there is no single &quot;correct&quot; answer.
                </li>
                <li>
                  <span className="pattern-body--bold">High-stakes or high-impact actions</span> – Financial moves, system changes, bulk operations, or configuration updates that require robust review and justification.
                </li>
                <li>
                  <span className="pattern-body--bold">Preference discovery and personalization</span> – Situations where the system must learn individual or organizational preferences over time.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, factual Q&A</span> – Simple lookups, deterministic rules, or clear numerical answers are served better by a single grounded answer plus sources.</li>
                <li><span className="pattern-body--bold">Highly constrained workflows</span> – When the product already limits valid outputs (e.g., a form-based configuration wizard with a small finite set of allowed combinations).</li>
                <li><span className="pattern-body--bold">Very short, frequent interactions</span> – Cases where latency and cognitive load matter more than showcasing diversity (e.g., a quick autocomplete suggestion in a search bar).</li>
                <li><span className="pattern-body--bold">Known and stable preferences</span> – When a high-confidence best option matches long-standing user or organization preferences, and the remaining options add little value.</li>
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
                Plurality is typically rendered as a small set of AI-generated option cards or tabs that appear in the primary response region of an AI assistant. Each option is clearly labeled, summarized, and configurable as a starting point for further edits, merges, or actions.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: AI Chat Response Area
              </h3>
              <p className="pattern-card__intro">
                After a prompt, the assistant returns 2–4 options in a horizontal carousel, stacked list, or tabbed view.
              </p>
              <ul className="pattern-card__list">
                <li>The first option may be marked as &quot;Recommended&quot; but alternatives remain prominent and easily comparable</li>
                <li>Options appear directly in the main response region</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: &quot;More Ways&quot; Control</h3>
              <p className="pattern-card__intro">
                A single answer is initially shown for speed, with a control to reveal more options.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Show 2 more alternatives&quot;</li>
                <li>&quot;See other strategies&quot;</li>
                <li>&quot;View different tones&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Editors & Workflows</h3>
              <p className="pattern-card__intro">
                Directly in email, document, or design editors as &quot;Draft variations.&quot;
              </p>
              <ul className="pattern-card__list">
                <li>In configuration screens (e.g., &quot;Auto-generate 3 deployment strategies&quot;)</li>
                <li>Triggered when system detects low confidence or high uncertainty</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Option Card</h3>
            <p className="pattern-card__intro">
              The core unit in this pattern is the Option Card (or Option Tab). Each option represents a distinct proposal or path.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>Communicates the key differentiator: risk level, tone, focus, or scenario</li>
                  <li>Example: &quot;Conservative (Cost-saving)&quot;, &quot;Balanced (Steady Growth)&quot;, &quot;Aggressive (Expansion)&quot;</li>
                  <li>Ideal labels are short, comparative, and aligned with domain language</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description</p>
                <ul className="pattern-card__list">
                  <li>A concise summary (1–3 sentences) of what this option does or assumes</li>
                  <li>Optional supporting bullets: primary goals, key trade-offs, critical dependencies</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><strong>Primary:</strong> &quot;Use this,&quot; &quot;Apply plan,&quot; &quot;Insert into document&quot;</li>
                  <li><strong>Secondary:</strong> Edit, Compare, Merge, Ask why, Save/Pin</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Confidence or quality indicators (if interpretable)</li>
                  <li>Tagged dimensions: Risk, Budget, Timeline</li>
                  <li>Status indicators: &quot;New,&quot; &quot;Based on previous plan&quot;</li>
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
                The lifecycle of plurality spans from prompt recognition through option generation, presentation, comparison, and eventual commitment.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Prompt & Intent Recognition</h3>
              <ul className="pattern-card__list">
                <li>User issues a prompt or workflow reaches a step where AI suggestion is needed</li>
                <li>System identifies that multiple interpretations are possible, or trade-off-sensitive options are feasible</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Option Generation & Diversification</h3>
              <ul className="pattern-card__list">
                <li>System generates 2–4 options constrained by diversity along meaningful axes</li>
                <li>Near-duplicates are pruned and options are internally ranked by relevance or quality</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Option Presentation</h3>
              <ul className="pattern-card__list">
                <li>Options rendered as cards or tabs with clear labels and concise summaries</li>
                <li>A recommended default may be highlighted while keeping alternatives visible</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Inspection & Comparison</h3>
              <ul className="pattern-card__list">
                <li>User scans summaries and optionally expands to view detailed content</li>
                <li>Compare view shows two or more options side-by-side with diff highlighting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Selection, Editing & Merging</h3>
              <ul className="pattern-card__list">
                <li>User chooses one option as starting point, adjusts parameters, or merges elements</li>
                <li>System generates combined version while preserving links back to original options</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Commitment & Execution</h3>
              <ul className="pattern-card__list">
                <li>Once satisfied, user commits the chosen/merged option</li>
                <li>System logs which option was selected and annotates downstream artifacts</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Learning & Adaptation</h3>
            <ul className="pattern-card__list">
              <li>Over time, the system uses interaction data to learn which patterns of options tend to be selected in given contexts</li>
              <li>Adjusts how options are generated (e.g., more conservative options for certain teams, more exploratory options in creative contexts)</li>
              <li>Refines the diversity axes and labels so they better match real-world decision styles</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & interaction guidelines</p>
            <p className="pattern-body">
              Effective messaging and presentation is crucial for the plurality pattern to build trust rather than create confusion.
            </p>

            <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Number & Diversity of Options</h3>
                <ul className="pattern-card__list">
                  <li><strong>Default to 2–4 options.</strong> Two options map to clear trade-offs; three or four span a spectrum</li>
                  <li><strong>Ensure meaningful differences.</strong> Each option should represent a real alternative, not minor wording tweaks</li>
                  <li><strong>Avoid option overload.</strong> Use clustering or heuristics to select representative options; hide more behind progressive disclosure</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Labels, Copy & Framing</h3>
                <ul className="pattern-card__list">
                  <li><strong>Make differences explicit in the label.</strong> Combine a short name with a qualifier: &quot;Balanced – Moderate risk and spend&quot;</li>
                  <li><strong>Summarize trade-offs succinctly.</strong> E.g., &quot;Maximizes reach, higher spend&quot;</li>
                  <li><strong>Avoid manipulative framing.</strong> Don&apos;t visually diminish options purely for business preference</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Visual Hierarchy & Layout</h3>
                <ul className="pattern-card__list">
                  <li>Present options in a layout that supports scanning from left to right or top to bottom</li>
                  <li>Align similar elements so differences are easy to spot</li>
                  <li>Use visual emphasis sparingly; highlight recommended option but keep others obviously interactive</li>
                </ul>
              </div>
            </div>

            <div className="pattern-example-group pattern-grid--mt-md">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good labels</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Conservative – Lower risk, steady returns&quot;</li>
                  <li>&quot;Balanced – Moderate spend, medium timeline&quot;</li>
                  <li>&quot;Aggressive – High growth potential, higher risk&quot;</li>
                  <li>&quot;Quick Fix – Fastest to implement&quot;</li>
                  <li>&quot;Thorough – Root cause analysis&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak labels</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Option 1&quot;, &quot;Option 2&quot;, &quot;Option 3&quot;</li>
                  <li>&quot;Good&quot;, &quot;Better&quot;, &quot;Best&quot;</li>
                  <li>&quot;Try this&quot;</li>
                  <li>&quot;Alternative approach&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Handling Ambiguity */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Handling ambiguity, uncertainty & alternatives</p>
              <p className="pattern-body pattern-body--narrow">
                Plurality is especially effective when paired with explicit communication about uncertainty and assumptions.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Ambiguous Prompts</h3>
              <p className="pattern-card__intro">
                If a prompt is vague, the system can respond with a short clarification plus options:
              </p>
              <ul className="pattern-card__list">
                <li>&quot;This can be approached in several ways. Here are three options:&quot;</li>
                <li>1. Reduce cycle time</li>
                <li>2. Improve data quality</li>
                <li>3. Simplify approvals</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Uncertain or Conflicting Data</h3>
              <p className="pattern-card__intro">
                When data is incomplete or conflicting, alternatives can be framed as:
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Scenario A: Based on last 90 days only&quot;</li>
                <li>&quot;Scenario B: Including seasonal trends&quot;</li>
                <li>&quot;Scenario C: Assuming projected growth targets&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Normative & Value-Laden Decisions</h3>
              <p className="pattern-card__intro">
                For decisions involving fairness, inclusion, or ethics:
              </p>
              <ul className="pattern-card__list">
                <li>Show options optimized for different goals (e.g., accuracy vs. demographic parity)</li>
                <li>Make it explicit that each optimization goal has trade-offs</li>
                <li>Pair with careful governance and clear explanation</li>
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
                How the plurality pattern applies across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Strategy & Planning Copilots (B2B)</h3>
              <p className="pattern-card__intro">Project or portfolio management tools</p>
              <ul className="pattern-card__list">
                <li>AI agent generates three alternative project roadmaps: &quot;Minimal Change,&quot; &quot;Transformational,&quot; &quot;Phased Modernization&quot;</li>
                <li>Each roadmap highlights different dependencies, budgets, and risks</li>
                <li>Can be compared side-by-side and merged into a final plan</li>
                <li>Teams gain visibility into trade-offs before committing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Personalization & Recommendations (B2C/B2B2C)</h3>
              <p className="pattern-card__intro">Commerce or subscription platforms</p>
              <ul className="pattern-card__list">
                <li>Personalization engine suggests multiple bundles: &quot;Budget-conscious,&quot; &quot;Balanced value,&quot; &quot;Premium experience&quot;</li>
                <li>People can swap items between bundles and save preferred configurations as presets</li>
                <li>System learns which balance of price, quality, and features tends to be favored</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Troubleshooting & Diagnostics</h3>
              <p className="pattern-card__intro">Support, DevOps, IT consoles</p>
              <ul className="pattern-card__list">
                <li>AI agent proposes diagnostic paths: &quot;Quick triage,&quot; &quot;Root-cause analysis,&quot; &quot;Customer-safety first&quot;</li>
                <li>Operators see estimated resolution time, risk of regression, and required downtime for each</li>
                <li>Selected path is logged for structured post-incident reviews</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Authoring & Communication Tools</h3>
              <p className="pattern-card__intro">Email, chat, or document authoring</p>
              <ul className="pattern-card__list">
                <li>AI assistant offers multiple drafts with different tones (formal, friendly, concise) or lengths</li>
                <li>User picks a draft, tweaks it, or merges pieces</li>
                <li>Presence of multiple drafts encourages review rather than blind sending</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of plurality can unintentionally undermine trust or create confusion.
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
                  <h3 className="antipattern-title">Too Many Options</h3>
                  <p className="antipattern-subtitle">Large grids of options become indistinguishable.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Large grids of options cause decision fatigue and make it harder for users to identify meaningful differences. For large search spaces, use filters and facets rather than treating everything as a &quot;plurality option.&quot;
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Limit to 2–4 options; use progressive disclosure for more exploration.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Fake Diversity</h3>
                  <p className="antipattern-subtitle">Superficial wording changes without meaningful content differences.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Superficial wording changes without meaningful content differences erode trust quickly. Users will notice when options are essentially the same thing rephrased, making the plurality feel like theater rather than genuine choice.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure options reflect distinctly different assumptions, strategies, or emphases.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Constraints</h3>
                  <p className="antipattern-subtitle">Some options silently down-ranked or omitted due to constraints.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If some options are silently down-ranked or omitted due to constraints (e.g., compliance), users may be confused about why certain approaches weren&apos;t considered. This undermines transparency.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Communicate constraint-based filtering appropriately to avoid confusion.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Labels</h3>
                  <p className="antipattern-subtitle">Labels like &quot;Conservative&quot; and &quot;Aggressive&quot; shift in meaning.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Labels must map to consistent ranges across the product. Shifting meanings over time make historical comparisons and organizational learning difficult.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Define and document label meanings; maintain consistency across features and time.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Default Bias That Negates Plurality</h3>
                  <p className="antipattern-subtitle">Overpowering styling for the recommended option.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Overpowering styling for the recommended option (e.g., large primary button on one card, muted controls on others) trains users to ignore alternatives. This turns plurality into a decorative flourish rather than a substantive trust-building mechanism.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Highlight recommended option subtly; keep all options obviously interactive and viable.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical guidance for implementing the plurality pattern effectively.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Generating Diverse Options</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Vary prompts or system messages</span> to target different goals (risk, time horizon, cost, tone, channels)</li>
                <li><span className="pattern-body--bold">Use sampling or diverse decoding strategies</span> rather than deterministic decoding for all options</li>
                <li><span className="pattern-body--bold">Inject structured constraints</span> (e.g., &quot;Option A: minimize cost&quot;, &quot;Option B: maximize speed within budget X&quot;)</li>
                <li><span className="pattern-body--bold">Apply diversity check:</span> represent outputs using embeddings and select subset that maximizes pairwise distance</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Ranking & Filtering</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Rank candidate options by:</span> relevance to prompt and context, domain constraints, historical selection patterns</li>
                <li><span className="pattern-body--bold">Filter out:</span> near-duplicates, options that violate policies, brand guidelines, or legal requirements</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Telemetry & Learning</h3>
              <p className="pattern-card__intro">Instrument events such as:</p>
              <ul className="pattern-card__list">
                <li>Number of options generated vs. displayed</li>
                <li>Which option was expanded, compared, selected, edited or merged</li>
                <li>Time to decision and commit rates</li>
                <li>Downstream outcomes attached back to the chosen option type</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">UI Considerations</h3>
              <ul className="pattern-card__list">
                <li>Consistent card structure across all options (same sections in same order)</li>
                <li>Responsive design: stack vertically on mobile, horizontal on desktop</li>
                <li>Keyboard navigation support for accessibility</li>
                <li>Consider loading states when generating multiple options takes time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess whether the Plurality Pattern is working as intended, track these categories of metrics.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Engagement with Options</h3>
              <ul className="pattern-card__list">
                <li>Percentage of interactions where at least one non-default option is opened</li>
                <li>Usage of compare and merge features</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Decision Quality & Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Success metrics tied to chosen options (e.g., incident resolution time, campaign performance)</li>
                <li>Reduction in critical errors or rework resulting from AI-generated suggestions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Self-reported measures of trust, clarity, and perceived control</li>
                <li>Qualitative feedback on whether options feel genuinely distinct and helpful</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Time to reach a decision or &quot;good enough&quot; draft</li>
                <li>Number of follow-up prompts required (fewer is better)</li>
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
                This pattern interlocks with several others in an AI design system.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Grounded Explanations & Evidence</h3>
              <p className="pattern-card__intro">
                Pair each option with references, assumptions, and data sources so that differences are interpretable.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Assumption Controls & Knobs</h3>
              <p className="pattern-card__intro">
                Allow users to adjust the underlying axes (e.g., risk appetite, budget, tone) and regenerate options accordingly.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Simulation & Scenario Exploration</h3>
              <p className="pattern-card__intro">
                Extend plurality by enabling interactive simulation of each option&apos;s impact over time.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Confirmation & Safeguards</h3>
              <p className="pattern-card__intro">
                For high-impact actions, combine plurality with explicit confirmation flows to ensure conscious selection rather than accidental acceptance.
              </p>
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
              <p className="pattern-checklist-category__title">Option Quality</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are the options genuinely distinct, representing different strategies, assumptions, or trade-offs?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the number of options appropriate (2–4) to avoid decision fatigue?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Labeling & Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do labels clearly communicate the key differentiator for each option?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are trade-offs summarized concisely for quick scanning?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Visual Balance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the recommended option highlighted without making alternatives feel secondary?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all options obviously interactive and viable choices?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Agency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users compare options side-by-side?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users edit, merge, or combine elements from different options?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are assumptions and constraints behind each option visible or accessible?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear why certain options weren&apos;t included (if filtered by constraints)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Learning & Adaptation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is interaction data being captured to improve option generation over time?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are downstream outcomes linked back to selected options for evaluation?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
