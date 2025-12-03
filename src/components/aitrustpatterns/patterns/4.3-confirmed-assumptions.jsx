import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const CONFIRMED_ASSUMPTIONS_SEO = {
  title: "Confirmed Assumptions Panel - AI Trust Pattern",
  description: "Learn how to design assumption panels that make AI inferences visible and editable. A proven UX pattern for building trust in agentic AI applications.",
  keywords: ["AI assumptions", "agentic UX", "AI transparency", "trust patterns", "AI inference", "user corrections", "AI UX design"],
  canonicalPath: "/agentic_ai_patterns/confirmed-assumptions"
};

export default function ConfirmedAssumptionsPattern() {
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
            <span className="pattern-header__index">4.3</span>
            <div>
              <h1 className="pattern-header__title">Confirmed Assumptions Panel</h1>
              <p className="pattern-header__subtitle">
                A UX pattern for surfacing AI inferences, enabling user corrections, and building trust in agentic applications.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated November 2025</span>
            <FeedbackLink patternIndex="4.3" patternTitle="Confirmed Assumptions Panel" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Purpose */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Make the AI&apos;s assumptions visible so people can correct them early - before they leak into forecasts,
              plans, and automations.
            </p>
            <p className="pattern-body">
              Agentic systems infer missing details all the time: region, time horizon, currency, segments, permissions.
              When those inferences are hidden, wrong, or overly sticky, trust erodes. The
              <span className="pattern-body--bold"> Confirmed Assumptions Panel</span> provides a dedicated surface
              where the system exposes its current assumptions, lets users edit them inline, and clearly communicates
              how they influence outcomes.
            </p>
          </div>
        </section>

        {/* Pattern example */}
        <section className="pattern-example assumptions-layout" aria-label="Chat with confirmed assumptions panel">
          <style>{`
            .assumptions-layout {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
              font-size: 14px;
              line-height: 1.4;
              color: #111827;
              background: #F9FAFB;
              border-radius: 16px;
              border: 1px solid #E5E7EB;
              box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
              display: flex;
              max-width: 920px;
              overflow: hidden;
            }

            .assumptions-layout * {
              box-sizing: border-box;
            }

            .assumptions-layout__chat {
              flex: 3;
              padding: 16px 20px 18px;
              background: linear-gradient(145deg, #F9FAFB 0%, #EEF2FF 40%, #F9FAFB 100%);
              border-right: 1px solid #E5E7EB;
              position: relative;
            }

            .assumptions-layout__panel {
              flex: 2.4;
              min-width: 280px;
              padding: 16px 16px 14px;
              background: #FFFFFF;
            }

            .assumptions-chat__header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 12px;
            }

            .assumptions-chat__title {
              font-size: 13px;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              color: #4B5563;
              font-weight: 600;
            }

            .assumptions-chat__hint {
              font-size: 12px;
              color: #6B7280;
              margin-top: 2px;
            }

            .assumptions-chat__thread {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 6px;
            }

            .assumptions-chat__message {
              display: flex;
              gap: 8px;
              align-items: flex-start;
            }

            .assumptions-chat__message--user {
              max-width: 90%;
            }

            .assumptions-chat__message--agent {
              max-width: 100%;
            }

            .assumptions-chat__avatar {
              width: 26px;
              height: 26px;
              border-radius: 999px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              font-weight: 600;
              flex-shrink: 0;
            }

            .assumptions-chat__avatar--user {
              background: #0EA5E9;
              color: #ECFEFF;
            }

            .assumptions-chat__avatar--agent {
              background: #111827;
              color: #F9FAFB;
              box-shadow: 0 0 0 2px rgba(243, 244, 246, 0.8);
            }

            .assumptions-chat__bubble {
              background: rgba(255, 255, 255, 0.9);
              padding: 10px 12px;
              border-radius: 14px;
              border: 1px solid rgba(148, 163, 184, 0.3);
              box-shadow: 0 8px 20px rgba(148, 163, 184, 0.22);
              backdrop-filter: blur(6px);
            }

            .assumptions-chat__bubble--agent {
              background: #111827;
              border-color: #111827;
              box-shadow: 0 18px 40px rgba(15, 23, 42, 0.5);
              color: #E5E7EB;
            }

            .assumptions-chat__meta {
              display: flex;
              gap: 8px;
              align-items: baseline;
              margin-bottom: 4px;
            }

            .assumptions-chat__name {
              font-size: 12px;
              font-weight: 600;
              color: #111827;
            }

            .assumptions-chat__name--agent {
              color: #E5E7EB;
            }

            .assumptions-chat__timestamp {
              font-size: 11px;
              color: #9CA3AF;
            }

            .assumptions-chat__text {
              margin: 0;
              font-size: 13px;
              color: #111827;
            }

            .assumptions-chat__text--agent {
              color: #E5E7EB;
            }

            .assumptions-chat__inline-row {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 0;
              margin-top: 6px;
            }

            .assumptions-chat__inline-assumption {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 4px 8px;
              border-radius: 999px;
              background: rgba(15, 23, 42, 0.7);
              font-size: 11px;
              color: #E5E7EB;
            }

            .assumptions-chat__inline-dot {
              width: 6px;
              height: 6px;
              border-radius: 999px;
              background: radial-gradient(circle at 30% 30%, #A5B4FC, #4F46E5);
              box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.45);
              flex-shrink: 0;
            }

            .assumptions-chat__inline-edit {
              border-radius: 4px;
              border: 1px solid rgba(148, 163, 184, 0.9);
              padding: 4px 10px 4px 8px;
              font-size: 10px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              background: transparent;
              color: #E5E7EB;
              cursor: pointer;
              white-space: nowrap;
              margin-left: -2px;
            }

            .assumptions-chat__inline-edit:focus-visible {
              outline: 2px solid #E5E7EB;
              outline-offset: 2px;
            }

            .assumptions-chat__footnote {
              margin-top: 8px;
              font-size: 11px;
              color: #9CA3AF;
            }

            .assumptions-chat__actions {
              margin-top: 10px;
              display: flex;
              justify-content: flex-end;
            }

            .assumptions-chat__continue-button {
              border-radius: 4px;
              border: 1px solid rgba(191, 219, 254, 0.4);
              padding: 6px 14px;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              cursor: pointer;
              color: #E5E7EB;
              background: radial-gradient(circle at 0 0, rgba(129, 140, 248, 0.4), transparent 55%),
                linear-gradient(135deg, #4F46E5, #6366F1);
              box-shadow: 0 10px 24px rgba(55, 65, 81, 0.6);
            }

            .assumptions-chat__continue-button:focus-visible {
              outline: 2px solid #E5E7EB;
              outline-offset: 2px;
            }

            .assumptions-panel__header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 10px;
              margin-bottom: 8px;
            }

            .assumptions-panel__title {
              font-size: 13px;
              font-weight: 600;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              color: #4B5563;
              margin: 0 0 4px;
            }

            .assumptions-panel__subtitle {
              font-size: 12px;
              color: #6B7280;
              margin: 0;
            }

            .assumptions-panel__chips {
              list-style: none;
              padding: 0;
              margin: 6px 0 0;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .assumptions-panel__chip {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              padding: 10px 12px;
              border-radius: 12px;
              border: 1px solid #E5E7EB;
              background: #F9FAFB;
              box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
              max-width: 100%;
            }

            .assumptions-panel__chip-label {
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #6B7280;
              min-width: 72px;
              text-align: right;
              padding-top: 2px;
            }

            .assumptions-panel__chip-body {
              display: flex;
              flex-direction: column;
              gap: 4px;
              min-width: 0;
              flex: 1;
            }

            .assumptions-panel__chip-input-label {
              font-size: 12px;
              font-weight: 500;
              color: #111827;
            }

            .assumptions-panel__chip-input-row {
              display: flex;
              align-items: center;
              gap: 8px;
              max-width: 100%;
            }

            .assumptions-panel__chip-input {
              font-size: 12px;
              border-radius: 8px;
              border: 1px solid #CBD5F5;
              padding: 4px 9px;
              background: #FFFFFF;
              color: #111827;
              min-width: 0;
              width: 100%;
              max-width: 240px;
            }

            .assumptions-panel__chip-input--select {
              padding-right: 26px;
            }

            .assumptions-panel__chip-input:focus-visible {
              outline: 2px solid #4F46E5;
              outline-offset: 1px;
            }

            .assumptions-panel__chip-hint {
              font-size: 11px;
              color: #6B7280;
            }

            @media (max-width: 780px) {
              .assumptions-layout {
                flex-direction: column;
              }

              .assumptions-layout__chat {
                border-right: none;
                border-bottom: 1px solid #E5E7EB;
              }

              .assumptions-panel__chip {
                flex-direction: column;
                align-items: flex-start;
              }

              .assumptions-panel__chip-label {
                min-width: auto;
                text-align: left;
              }
            }
          `}</style>

          <div className="assumptions-layout__chat assumptions-chat">
            <div className="assumptions-chat__thread">
              <div className="assumptions-chat__message assumptions-chat__message--user">
                <div className="assumptions-chat__avatar assumptions-chat__avatar--user" aria-hidden="true">DS</div>
                <div className="assumptions-chat__bubble">
                  <div className="assumptions-chat__meta">
                    <span className="assumptions-chat__name">You</span>
                    <span className="assumptions-chat__timestamp">Today &bull; 9:12 AM</span>
                  </div>
                  <p className="assumptions-chat__text">
                    Can you draft an end-of-quarter email campaign for our paying customers and schedule it
                    for next week?
                  </p>
                </div>
              </div>

              <div className="assumptions-chat__message assumptions-chat__message--agent">
                <div className="assumptions-chat__avatar assumptions-chat__avatar--agent" aria-hidden="true">
                  AI
                </div>
                <div className="assumptions-chat__bubble assumptions-chat__bubble--agent">
                  <div className="assumptions-chat__meta">
                    <span className="assumptions-chat__name assumptions-chat__name--agent">Workspace agent</span>
                    <span className="assumptions-chat__timestamp">Thinking from your settings</span>
                  </div>
                  <p className="assumptions-chat__text assumptions-chat__text--agent">
                    Absolutely. I&apos;ll create copy for a 3-email sequence and schedule it.
                    Based on your workspace settings, I&apos;m currently assuming:
                  </p>
                  <div className="assumptions-chat__inline-row">
                    <div className="assumptions-chat__inline-assumption" aria-label="Assumptions preview">
                      <span className="assumptions-chat__inline-dot" aria-hidden="true" />
                      <span>Q4 timing, US-West region, USD pricing</span>
                    </div>
                    <button className="assumptions-chat__inline-edit" type="button">EDIT</button>
                  </div>

                  <div className="assumptions-chat__actions">
                    <button className="assumptions-chat__continue-button" type="button">Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="assumptions-layout__panel assumptions-panel" aria-label="Confirmed assumptions panel">
            <header className="assumptions-panel__header">
              <div>
                <h2 className="assumptions-panel__title">Assumptions</h2>
              </div>
            </header>

            <ul className="assumptions-panel__chips">
              <li className="assumptions-panel__chip">
                <span className="assumptions-panel__chip-label">Region</span>
                <div className="assumptions-panel__chip-body">
                  <span className="assumptions-panel__chip-input-label">Operating region</span>
                  <div className="assumptions-panel__chip-input-row">
                    <select className="assumptions-panel__chip-input assumptions-panel__chip-input--select" aria-label="Operating region" defaultValue="US-West (Oregon)">
                      <option>US-West (Oregon)</option>
                      <option>US-East (N. Virginia)</option>
                      <option>EU-West (Ireland)</option>
                    </select>
                  </div>
                  <span className="assumptions-panel__chip-hint">Used for send times, benchmarks, and cost estimates.</span>
                </div>
              </li>

              <li className="assumptions-panel__chip">
                <span className="assumptions-panel__chip-label">Q4</span>
                <div className="assumptions-panel__chip-body">
                  <span className="assumptions-panel__chip-input-label">Quarter definition</span>
                  <div className="assumptions-panel__chip-input-row">
                    <input
                      className="assumptions-panel__chip-input"
                      type="text"
                      defaultValue="Q4 = October-December"
                      aria-label="Quarter timing"
                    />
                  </div>
                  <span className="assumptions-panel__chip-hint">Affects performance charts and campaign wording.</span>
                </div>
              </li>

              <li className="assumptions-panel__chip">
                <span className="assumptions-panel__chip-label">Currency</span>
                <div className="assumptions-panel__chip-body">
                  <span className="assumptions-panel__chip-input-label">Pricing currency</span>
                  <div className="assumptions-panel__chip-input-row">
                    <select className="assumptions-panel__chip-input assumptions-panel__chip-input--select" aria-label="Pricing currency" defaultValue="USD">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>
                  <span className="assumptions-panel__chip-hint">Used for discounts, thresholds, and revenue projections.</span>
                </div>
              </li>
            </ul>
          </aside>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic systems routinely fill in missing details to keep flows fast and "magical". But when those
              assumptions are hidden or wrong, people experience the system as unpredictable and opaque. Forecasts look
              "off", automations fire on unexpected segments, and teams lose confidence in the AI&apos;s
              recommendations.
            </p>
            <ul className="pattern-list">
              <li>Hidden assumptions make it hard to trace why the AI behaved the way it did.</li>
              <li>Wrong assumptions force people to redo work or abandon the flow.</li>
              <li>Sticky assumptions silently leak into future tasks and decisions.</li>
            </ul>
            <p className="pattern-body">
              The Confirmed Assumptions Panel turns these invisible inferences into first-class UI objects: visible,
              editable, and scoped.
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
                  The AI creates <span className="pattern-body--bold">plans, forecasts, or policies</span>
                  (financial, operational, legal).
                </li>
                <li>
                  Actions have <span className="pattern-body--bold">cost or risk</span> (deployments, messaging,
                  changes to live systems).
                </li>
                <li>
                  Your product is <span className="pattern-body--bold">multi-tenant</span> with different org-level
                  defaults.
                </li>
                <li>Silent defaults could materially change numbers or stakeholder expectations.</li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The interaction is low-stakes and clearly reversible.</li>
                <li>All relevant filters and choices are already visible in the core UI.</li>
                <li>You&apos;re only inferring trivial or cosmetic details.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Anatomy & Behavior */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Pattern anatomy</p>
              <p className="pattern-body pattern-body--narrow">
                At its core, this pattern is a small, always-reachable surface that lists the AI&apos;s active assumptions
                with inline controls to confirm, edit, or scope them.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Entry points
              </h3>
              <ul className="pattern-card__list">
                <li>Sidebar titled "Assumptions".</li>
                <li>
                  A preview of the assumptions within the agent output.
                </li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Assumption item</h3>
              <ul className="pattern-card__list">
                <li>Short label: "Fiscal year", "Currency", "Primary region".</li>
                <li>Testable statement: "Assuming your fiscal year starts on April 1."</li>
                <li>Inline controls to edit.</li>
                <li>Optional: "Affects…" hint that lists impacted outputs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Behavior & lifecycle</h3>
              <ul className="pattern-card__list">
                <li>
                  AI infers a value → logs it as <span className="pattern-body--bold">Suggested</span>.
                </li>
                <li>
                  Suggested values are displayed to the user within the Agent's message.
                </li>
                <li>
                  User chooses to edit assumption and clicks Edit.
                </li>
                <li>
                  Panel opens to the side, or area expands within message containing editable inputs.
                </li>
                <li>User edits assumption values.</li>
                <li>User clicks <span className="pattern-body--bold">Continue</span> to further the conversation using the values entered.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & Microcopy */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content guidelines</p>
            <p className="pattern-body">
              The language around assumptions matters. It should be concrete, testable, and explicit about scope.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>
                    "Assuming your fiscal year starts on
                    <span className="pattern-body--bold"> April 1</span>."
                  </li>
                  <li>
                    "Using <span className="pattern-body--bold">USD</span> for all price and cost calculations."
                  </li>
                  <li>
                    "Limiting this analysis to data from the
                    <span className="pattern-body--bold"> last 90 days</span>."
                  </li>
                  <li>
                    "Affects: tax calculations, runway estimates, and YoY comparisons."
                  </li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>"Using your usual settings."</li>
                  <li>"Making some assumptions to help."</li>
                  <li>"Applied defaults." (without telling the user which ones)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-card pattern-card--secondary pattern-grid--mt-md">
              <h3 className="pattern-card__title pattern-card__title--with-pill">
                Scope & persistence
                <span className="pattern-pill pattern-pill--neutral">Optional</span>
              </h3>
              <p className="pattern-card__intro">
                Make it obvious where the assumption lives and how durable it is.
              </p>
              <ul className="pattern-card__list">
                <li>Show who it applies to: just you, this workspace, or the whole org.</li>
                <li>Expose where it&apos;s stored (e.g., "Org settings → Financial preferences").</li>
                <li>Provide a "Reset assumptions" escape hatch.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns & Edge cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns & edge cases</p>
              <p className="pattern-body pattern-body--narrow">
                This pattern earns its keep when it focuses on high-impact assumptions. Overuse or misuse can create
                noise and fatigue.
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
                  <h3 className="antipattern-title">Overloading with minutiae</h3>
                  <p className="antipattern-subtitle">Every tiny knob becomes a decision for the user.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Don&apos;t surface every internal threshold, model knob, or scoring weight. Prioritize assumptions
                that a human would reasonably want to question or tune.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Pull Into Docs</span>
                <span className="antipattern-alternative-text">Capture low-impact details in configuration docs instead.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Non-editable &quot;assumptions&quot;</h3>
                  <p className="antipattern-subtitle">Looks negotiable, but isn&apos;t actually changeable.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If the user can&apos;t change it here, it&apos;s configuration, not an assumption. Link to the
                relevant settings instead of listing it as though the value were adjustable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Link Out</span>
                <span className="antipattern-alternative-text">Provide a clear path to where this can really be changed.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden scope changes</h3>
                  <p className="antipattern-subtitle">Light-looking toggles with heavy consequences.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Avoid switches that quietly change org-wide behavior. Always label the scope, persistence,
                and who will be affected when this assumption is flipped.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Call Out Impact</span>
                <span className="antipattern-alternative-text">Make org-wide or persistent changes unmistakably clear.</span>
              </div>
            </div>
          </div>

          <div className="pattern-card pattern-card--neutral pattern-grid--mt-md">
            <h3 className="pattern-card__title">Handling conflicts</h3>
            <p className="pattern-card__intro">
              When the assumption disagrees with reality (e.g., imported data uses a different fiscal year), use this
              panel to surface the conflict and offer one-click resolution.
            </p>
            <div className="pattern-example pattern-example--inline">
              <p className="pattern-example__body">
                <span className="pattern-body--bold">Data conflict detected.</span> Your imported data suggests the
                fiscal year starts in July.
              </p>
              <p className="pattern-example__body pattern-example__body--muted">
                Update your assumption or keep the current setting?
              </p>
              <div className="pattern-example__actions">
                <button className="pattern-button pattern-button--primary">Update to July 1</button>
                <button className="pattern-button pattern-button--secondary">Keep April 1 for now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Example Flow */}
        <section className="pattern-section">
          <p className="pattern-kicker">Example flow</p>
          <p className="pattern-body pattern-body--narrow">
            A financial planning agent generates a 3-year forecast. Behind the scenes, it infers fiscal year, currency,
            and primary region. Instead of burying those in configuration, it exposes them in the Assumptions panel.
          </p>

          <ol className="pattern-flow">
            <li className="pattern-flow__step">
              <div className="pattern-flow__step-header">
                <span className="pattern-flow__step-number">1</span>
                <h3 className="pattern-flow__step-title">AI infers & logs</h3>
              </div>
              <p className="pattern-flow__step-body">The agent infers:</p>
              <ul className="pattern-flow__step-list">
                <li>Fiscal year starts April 1.</li>
                <li>Q4 = Jan-Mar.</li>
                <li>Currency = USD.</li>
              </ul>
              <p className="pattern-flow__step-body pattern-flow__step-body--muted">
                It records these in the panel as <span className="pattern-body--bold">Suggested</span> assumptions.
              </p>
            </li>

            <li className="pattern-flow__step">
              <div className="pattern-flow__step-header">
                <span className="pattern-flow__step-number">2</span>
                <h3 className="pattern-flow__step-title">User reviews & corrects</h3>
              </div>
              <p className="pattern-flow__step-body">
                The user opens the panel and sees which outputs are affected.
              </p>
              <p className="pattern-flow__step-body pattern-flow__step-body--muted">
                They change the fiscal year start to <span className="pattern-body--bold">July 1</span> and set scope
                to "Remember for this org".
              </p>
            </li>

            <li className="pattern-flow__step">
              <div className="pattern-flow__step-header">
                <span className="pattern-flow__step-number">3</span>
                <h3 className="pattern-flow__step-title">System re-runs with clarity</h3>
              </div>
              <p className="pattern-flow__step-body">The agent re-runs the forecast and explains:</p>
              <p className="pattern-flow__step-body pattern-flow__step-body--muted">
                "I&apos;ve updated your fiscal year to start on July 1 and relabeled quarters in your 3-year forecast."
              </p>
            </li>
          </ol>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Design checklist</p>
          </div>
          <div className="pattern-card pattern-card--checklist">
            <ul className="pattern-checklist">
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Have you identified which assumptions are high-impact enough to surface?</span>
              </li>
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Can users edit the assumptions?</span>
              </li>
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Does the scope of each assumption (task / workspace / org) need to be communicated?</span>
              </li>
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Do you explain what each assumption affects in the system?</span>
              </li>
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Do conflicts between assumptions and real data trigger a clear resolution flow?</span>
              </li>
              <li className="pattern-checklist__item">
                <CheckCircle size={14} className="pattern-checklist__icon" />
                <span>Is there an escape hatch to reset or clear assumptions?</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
