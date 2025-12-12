import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import RiskPolicyHeatmapsDemo from '../demos/RiskPolicyHeatmapsDemo';

// SEO metadata for this pattern page
export const RISK_AND_POLICY_HEATMAPS_SEO = {
  title: "Risk & Policy Heatmaps - AI Trust Pattern",
  description: "Visualize AI agent risk across workflows to guide governance decisions, make policies actionable, and reinforce organizational and end-user trust.",
  keywords: ["AI risk", "policy heatmaps", "AI governance", "risk visualization", "AI trust", "compliance", "fleet governance", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/risk-and-policy-heatmaps"
};

export default function RiskAndPolicyHeatmapsPattern() {
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
            <span className="pattern-header__index">10.2</span>
            <div>
              <h1 className="pattern-header__title">Risk & Policy Heatmaps</h1>
              <p className="pattern-header__subtitle">
                Visualize AI agent risk across workflows to guide governance decisions, make policies actionable, and reinforce organizational and end-user trust.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="10.2" patternTitle="Risk & Policy Heatmaps" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Risk & Policy Heatmaps present a consolidated, visual overview of AI-related risk across agents, workflows, and environments. This pattern typically appears as part of an admin-facing &quot;AI Governance&quot; or &quot;Safety & Compliance&quot; area within a product, and occasionally as a simplified read-only summary for non-admin stakeholders.
            </p>
            <p className="pattern-body">
              At its core, the pattern:
            </p>
            <ul className="pattern-list">
              <li>Aggregates risk signals (data sensitivity, autonomy, financial impact, legal exposure, reputational risk, etc.).</li>
              <li>Visualizes those signals in an interpretable grid or matrix.</li>
              <li>Connects each visual element directly to governance controls (policies, guardrails, review tiers).</li>
              <li>Provides traceability and transparency for both admins and end-users.</li>
            </ul>
            <p className="pattern-body">
              This allows organizations to deliberately decide where AI agents may act autonomously, where human review is required, and where capabilities should be restricted or disabled. It reduces guesswork and surfaces &quot;hot spots&quot; before they become incidents.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/10.1 risk and policy heatmaps.png"
              alt="Risk & Policy Heatmaps pattern illustration"
            />
          </div>
        </section>

        {/* Example Interaction */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <div className="pattern-card pattern-card--highlight">
              <h3 className="pattern-card__title">Example Interaction Concept</h3>
              <p className="pattern-card__intro" style={{ fontStyle: 'italic' }}>
                An admin opens the &quot;AI Risk Center&quot; in a multi-agent SaaS platform. A heatmap shows workflows on the Y-axis (Lead Scoring, Contract Renewal, Expense Approvals, Social Posting) and risk dimensions on the X-axis (Data Sensitivity, Autonomy, Financial Exposure, Regulatory Exposure).
              </p>
              <p className="pattern-body" style={{ fontStyle: 'italic' }}>
                Cells for &quot;Contract Renewal &times; Regulatory Exposure&quot; and &quot;Social Posting &times; Reputational Risk&quot; are bright red. Hovering a cell reveals why the risk is high (e.g., &quot;handles signed contracts in regulated markets; no mandatory human approval above $100k&quot;). The admin clicks the cell, adjusts policy sliders to require legal review above a threshold, and saves. The cell color shifts from red to amber, and a policy version change is logged.
              </p>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This heatmap visualizes risk levels across four AI workflows (Contract Renewal Bot, Social Posting Assistant, L1 Support Agent, and Invoice Processing) against four risk dimensions (Data Privacy, Regulatory, Financial Impact, and Brand Safety). Each cell displays a risk score from 1-10, color-coded as Low (green), Medium (yellow), or High (red). Notice the high-risk red cells for Contract Renewal under Regulatory (9) and Social Posting under Brand Safety (9). Click any cell to open the policy adjustment panel where you can modify Human-in-the-Loop requirements and Data Access levels. Watch how adjusting these controls simulates a lower risk score in real time, demonstrating how governance policies directly impact overall risk posture.
            </p>
          </div>
          <RiskPolicyHeatmapsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a structured way to visualize AI risk and connect it to policies, organizations encounter several recurring issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Fragmented understanding of risk</span> – AI agents proliferate across departments and tools. Risk is assessed ad hoc in slide decks or spreadsheets, with no single coherent picture of where the system is most exposed.
              </li>
              <li>
                <span className="pattern-body--bold">Invisible policy decisions</span> – Governance rules are often buried in config files, scattered admin pages, or external documentation. Admins struggle to verify which workflows are actually protected and to what degree.
              </li>
              <li>
                <span className="pattern-body--bold">Slow and inconsistent responses to incidents</span> – When something goes wrong (e.g., a harmful output or data leak), teams cannot quickly trace which agent, policy, or integration contributed. Remediation depends on tribal knowledge rather than systematic insight.
              </li>
              <li>
                <span className="pattern-body--bold">Limited end-user trust</span> – End-users experience AI responses but rarely see what safeguards exist. A lack of visible structure around risk and policy can reduce confidence, especially in domains involving sensitive data or high-stakes decisions.
              </li>
            </ul>
            <p className="pattern-body">
              A Risk & Policy Heatmap directly targets these issues by aligning visual salience (what looks dangerous or safe) with governance levers and clear explanations.
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
                  <span className="pattern-body--bold">Multiple AI agents or workflows are in production</span> – The platform orchestrates several agents, tools, or workflows across different teams, products, or business units.
                </li>
                <li>
                  <span className="pattern-body--bold">Heterogeneous risk levels across the system</span> – Some workflows involve PII, contracts, regulated data, or external publishing; others are low-stakes (e.g., formatting, summarization). The governance model must reflect this diversity.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulatory, compliance, or audit requirements exist</span> – The organization must demonstrate due diligence, provide evidence of controls, and show that AI usage is actively governed rather than purely experimental.
                </li>
                <li>
                  <span className="pattern-body--bold">Cross-functional stakeholders need shared visibility</span> – Legal, Security, Compliance, and Operations require a shared artifact that makes AI risk understandable without deep ML expertise.
                </li>
                <li>
                  <span className="pattern-body--bold">Policies need rapid iteration</span> – AI behavior, models, and integrations evolve quickly and policy changes must be tested and rolled out in a controlled, observable way.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single low-risk agent in a constrained workflow</span> – For a narrow, internal-only assistant (e.g., a documentation search bot) with read-only access and no external actions, a simple configuration page or status card may suffice.</li>
                <li><span className="pattern-body--bold">Early-stage prototypes or sandboxes</span> – In small experiments with limited audiences and no production data, detailed heatmaps may introduce unnecessary complexity. A basic policy checklist can be adequate.</li>
                <li><span className="pattern-body--bold">Obvious, uniform risk across all workflows</span> – If all agents share the same low-risk profile and identical policies, a heatmap may duplicate what a single &quot;Global AI Policy&quot; panel already conveys.</li>
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
                Risk & Policy Heatmaps usually take the form of an interactive grid backed by a configurable risk model, tightly integrated with governance controls.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Navigation
              </h3>
              <p className="pattern-card__intro">
                &quot;AI Governance&quot;, &quot;AI Safety Center&quot;, &quot;Trust & Risk&quot;, or &quot;Admin → AI Controls&quot;.
              </p>
              <ul className="pattern-card__list">
                <li>Often listed under Security/Compliance or Platform Administration</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry from Agent Config</h3>
              <p className="pattern-card__intro">
                Link or button from an individual agent/workflow settings page.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;View this agent in Risk Heatmap&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Alert-Driven Entry</h3>
              <p className="pattern-card__intro">
                Notification, banner, or email.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;New high-risk pattern detected in Social Posting workflow. Open Heatmap.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Read-Only Stakeholder Views</h3>
              <p className="pattern-card__intro">
                Shortcuts from &quot;Security Overview&quot; or &quot;Executive Dashboard&quot; pages.
              </p>
              <ul className="pattern-card__list">
                <li>Summarized or filtered heatmap focusing on a subset of risk dimensions</li>
              </ul>
            </div>
          </div>

          {/* Core Item */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Heatmap Cell</h3>
            <p className="pattern-card__intro">
              The main repeated unit in this pattern is a <span className="pattern-body--bold">heatmap cell</span> representing the risk level of a specific object along a specific dimension.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Common Matrix Configurations</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Matrix A:</span> Workflows &times; Risk Dimensions (Data Sensitivity, Autonomy, Financial Impact, etc.)</li>
                  <li><span className="pattern-body--bold">Matrix B:</span> Workflows &times; Environments or Departments</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Cell Components</p>
                <ul className="pattern-card__list">
                  <li>Color scale for severity (green, yellow, orange, red)</li>
                  <li>Optional numeric score (1–10) or bucket (Low / Medium / High / Critical)</li>
                  <li>Description on hover/click explaining the current level</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls (via Side Panel or Modal)</p>
                <ul className="pattern-card__list">
                  <li>Adjust policy thresholds (autonomy level, required approvals)</li>
                  <li>Toggle human-in-the-loop for certain actions</li>
                  <li>Restrict or expand tool access</li>
                  <li>Enable/disable advanced monitoring</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Last policy change timestamp and actor</li>
                  <li>Trend indicator (risk rising / stable / falling)</li>
                  <li>Linked incidents or alerts count</li>
                  <li>Tags (e.g., &quot;Contains PII&quot;, &quot;SOX-relevant&quot;)</li>
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
                From a lifecycle perspective, the pattern typically follows these stages.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior & Defaults</h3>
              <ul className="pattern-card__list">
                <li>Platform ships with a default risk model and baseline thresholds.</li>
                <li>Heatmap initially reflects static configuration (declared data sensitivity, autonomy settings).</li>
                <li>Empty or unknown states are clearly indicated with &quot;No data yet&quot; treatment rather than implying safety.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Data Ingestion & Risk Scoring</h3>
              <ul className="pattern-card__list">
                <li>System collects events: tool invocations, data classification labels, error rates, escalations.</li>
                <li>Scoring engine re-evaluates risk dimensions with configurable weights.</li>
                <li>Scores normalized and mapped to visual buckets (0–3 = Low, 4–6 = Medium, etc.).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Visualization & Interaction</h3>
              <ul className="pattern-card__list">
                <li>Heatmap loads with global controls (date range, environment, department).</li>
                <li>Legend for colors and scores.</li>
                <li>Filters for risk types (show only High & Critical, only workflows with PII).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Drill-Down & Analysis</h3>
              <ul className="pattern-card__list">
                <li>Selecting a cell reveals detailed breakdown of contributing factors.</li>
                <li>Recent events or incidents timeline.</li>
                <li>Related policies currently in force.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Policy Adjustment & Simulation</h3>
              <ul className="pattern-card__list">
                <li>Admins adjust controls: tighten autonomy, restrict data access, add review tiers.</li>
                <li>Simulation mode estimates impact before committing.</li>
                <li>Potential side effects surfaced (latency increase, reviewer workload).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Policy Application & Versioning</h3>
              <ul className="pattern-card__list">
                <li>Policies applied to agents/workflows once confirmed.</li>
                <li>Policy versions recorded with metadata (editor, timestamp, rationale).</li>
                <li>System may require rollout or validation phase.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Ongoing Monitoring & Alerts</h3>
              <ul className="pattern-card__list">
                <li>Heatmap updates over time and highlights newly emerging high-risk cells.</li>
                <li>Surfaces improving areas where risk has declined due to policy changes.</li>
                <li>Stale configurations flagged (e.g., no review in X months for high-risk cells).</li>
                <li>Scheduled review prompts (e.g., quarterly risk review).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Communication to End-Users</h3>
              <ul className="pattern-card__list">
                <li>Simplified risk messages inline: &quot;AI assistance is operating with human review enabled for sensitive actions.&quot;</li>
                <li>Read-only &quot;System Safety Overview&quot; exposing aggregated heatmap summaries.</li>
                <li>Avoids sensitive internal details while demonstrating governance is active.</li>
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
                Implementation details vary by stack, but several recurring patterns support robust heatmap behavior.
              </p>
            </div>
          </div>

          {/* Risk Dimensions */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Risk Dimensions & Scoring</h3>
            <p className="pattern-card__intro">
              Common dimensions to consider when building a risk model.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Data Sensitivity</p>
                <ul className="pattern-card__list">
                  <li>Whether the agent accesses PII, financial data, health information, trade secrets</li>
                  <li>Data classification system (Public / Internal / Confidential / Highly Confidential)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Autonomy Level</p>
                <ul className="pattern-card__list">
                  <li>Spectrum from read-only assistive to high-autonomy actions</li>
                  <li>Granular autonomy per action or tool</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Business Impact</p>
                <ul className="pattern-card__list">
                  <li>Financial exposure (direct monetary impact)</li>
                  <li>Operational impact (system downtime, support load)</li>
                  <li>Customer impact (number affected if something goes wrong)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Legal / Regulatory Exposure</p>
                <ul className="pattern-card__list">
                  <li>Association with regulated processes (GDPR, HIPAA, SOX, PCI-DSS)</li>
                  <li>Presence of contractual obligations or SLAs</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Reputational Risk</p>
                <ul className="pattern-card__list">
                  <li>Potential to generate public-facing content</li>
                  <li>Sensitivity of topics (moderation of user-generated content)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Integration & Supply Chain Risk</p>
                <ul className="pattern-card__list">
                  <li>Dependence on external APIs, third-party tools, or plugins</li>
                  <li>Model providers and sub-processors involved</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Visualization Design</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Color and encoding</span> – Use limited, accessible palette aligned with severity; support non-color encodings for accessibility</li>
                <li><span className="pattern-body--bold">Structure</span> – Keep dimensions manageable (5–8 columns); offer advanced view for additional metrics</li>
                <li><span className="pattern-body--bold">Details-on-demand</span> – Avoid overloading grid with text; use hover tooltips and drill-down panels</li>
                <li><span className="pattern-body--bold">Responsive</span> – Collapse heatmap into list on small screens with tap-to-expand</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Controls & Governance Flows</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Inline policy editing</span> – Editable from context of high-risk cell, not distant config page</li>
                <li><span className="pattern-body--bold">Role-based access control</span> – Restrict who can see full details and adjust policies</li>
                <li><span className="pattern-body--bold">Simulation & approval workflows</span> – Optionally require approvals for high-risk changes</li>
                <li><span className="pattern-body--bold">Notifications & thresholds</span> – Configure alerts when risk crosses thresholds</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Privacy, Security & Compliance</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Aggregation over raw data</span> – Surface aggregate metrics, not raw user data</li>
                <li><span className="pattern-body--bold">Multi-region awareness</span> – Distinguish risk by environment and region</li>
                <li><span className="pattern-body--bold">Auditability</span> – Every policy change versioned with who, when, why, and which agents affected</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Communicating Risk Without Overstating Certainty</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Avoid false precision</span> – Scores framed as estimates, not guarantees</li>
                <li><span className="pattern-body--bold">Display confidence indicators</span> – &quot;Score 7/10, low confidence due to limited usage&quot;</li>
                <li><span className="pattern-body--bold">Clear microcopy</span> – Clarify whether values reflect risk potential, observed incidents, or combination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases & Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases & examples</p>
              <p className="pattern-body pattern-body--narrow">
                How Risk & Policy Heatmaps apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Legal Risk Mitigation in Contract Management</h3>
              <p className="pattern-card__intro">Contract Lifecycle Management</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Heatmap highlights high regulatory and financial risk for &quot;Contract Renewal&quot; agent</li>
                <li>Drill-down reveals access to signed contracts, ability to propose renewals without legal review</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Admins require legal approval for contracts above value threshold</li>
                <li>End-users see AI-drafted terms marked as suggestions pending legal review</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Reputational Safeguarding in Social Media</h3>
              <p className="pattern-card__intro">Social Publishing Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Heatmap surfaces &quot;Social Posting Assistant&quot; as high in Reputational Risk</li>
                <li>Detailed view shows direct publishing rights, limited safety filters</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Mandatory human review for posts on high-risk topics or campaigns</li>
                <li>Creators see risk badges for posts (&quot;Reviewed&quot;, &quot;Pending review&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Financial Oversight in Budgeting</h3>
              <p className="pattern-card__intro">Finance-Oriented SaaS</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>&quot;Forecasting Agent&quot; shows medium to high risk in Financial Impact and Model Risk</li>
                <li>High autonomy in creating forecasts that drive automated budget adjustments</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Agent restricted to advisory mode for high-impact levers</li>
                <li>Finance teams see forecasts labeled with risk and confidence indicators</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Team Collaboration in HR Systems</h3>
              <p className="pattern-card__intro">HR & People Platform</p>
              <p className="pattern-card__label">Scenario</p>
              <ul className="pattern-card__list">
                <li>Heatmap reveals HR agents operating with access to sensitive PII (SSNs, salary, benefits)</li>
                <li>Varying levels of Autonomy and Integration Risk across onboarding workflows</li>
              </ul>
              <p className="pattern-card__label">Outcome</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>HR, Security, Legal collaborate through shared heatmap views filtered by PII workflows</li>
                <li>New hires see transparent messaging that PII-handling actions have additional safeguards</li>
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
                Certain implementations of Risk & Policy Heatmaps can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Decorative Heatmaps with No Governance Linkage</h3>
                  <p className="antipattern-subtitle">A colorful grid that cannot change anything.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Heatmaps with no controls, no impact on policies, become &quot;dashboard theater&quot; and erode trust over time.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Connect every cell to actionable governance controls with real policy impact.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque Scoring with No Explanation</h3>
                  <p className="antipattern-subtitle">&quot;It is high because the model says so.&quot;</p>
                </div>
              </div>
              <p className="antipattern-description">
                Risk scores that cannot be explained discourage responsible action and create friction with compliance stakeholders.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide clear breakdown of contributing factors on hover/click for every cell.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overloading a Single Blended Score</h3>
                  <p className="antipattern-subtitle">Collapsing radically different risk types into one number.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Combining legal vs. reputational vs. model risk into one number hides trade-offs and makes reasoning difficult.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep dimensions visible and separate; allow drill-down into each risk type.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Static, Never-Updated Views</h3>
                  <p className="antipattern-subtitle">Heatmaps that update rarely or require manual intervention.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If risk heatmaps update rarely, stakeholders quickly learn to ignore them.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement real-time or near-real-time scoring updates with visible refresh timestamps.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Leaking Sensitive Details via the Heatmap</h3>
                  <p className="antipattern-subtitle">Exposing PII fields or user identifiers in the visualization itself.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Showing too much contextual information undermines privacy and security goals the heatmap is meant to protect.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Surface aggregate metrics and derived scores; apply least-privilege to detailed views.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Instrumentation & Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation & metrics</p>
              <p className="pattern-body pattern-body--narrow">
                To evaluate effectiveness of this pattern, platforms commonly track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Coverage</h3>
              <ul className="pattern-card__list">
                <li>Percentage of agents/workflows represented on the heatmap</li>
                <li>Percentage of workflows with at least one configured policy</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Behavior Change</h3>
              <ul className="pattern-card__list">
                <li>Number of policy edits initiated from high-risk cells</li>
                <li>Frequency of simulations run versus direct edits</li>
                <li>Average time from alert to policy change</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk Posture Over Time</h3>
              <ul className="pattern-card__list">
                <li>Distribution of workflows across risk buckets (Low/Medium/High/Critical) over weeks or months</li>
                <li>Trend in incident frequency and severity correlated with policy changes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Review Discipline</h3>
              <ul className="pattern-card__list">
                <li>Number of overdue policy reviews for high-risk workflows</li>
                <li>Average time since last review by dimension or department</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">End-User Trust Signals</h3>
              <ul className="pattern-card__list">
                <li>Changes in opt-in rates for AI features after safety transparency improvements</li>
                <li>Qualitative feedback from surveys referencing perceived safety and control</li>
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
              <p className="pattern-checklist-category__title">Risk Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the heatmap provide a consolidated view of risk across all agents and workflows?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-risk areas immediately visually salient?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Explainability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users understand why each cell has its current risk level?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are contributing factors and confidence levels visible on drill-down?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Actionability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can policies be adjusted directly from the heatmap context?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a simulation mode to preview policy change impact?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are policy changes versioned with who, when, and why?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is role-based access control enforced for viewing and editing?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Freshness & Relevance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the heatmap update in real-time or near-real-time?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are stale configurations and overdue reviews flagged?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">End-User Communication</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a read-only summary view for non-admin stakeholders?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do end-users receive contextual messaging about active safeguards?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
