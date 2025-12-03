import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import '../demos/ScenarioTemplatesDemo.css';
import FeedbackLink from '../FeedbackLink';

// Recipe data
const recipes = {
  release: {
    title: "Release Readiness Review",
    desc: "Assess whether a software release is ready for production by auditing tickets, tests, and risks.",
    inputs: ["Release Version (e.g., v2.4)", "Jira Project Key", "Target Date"],
    sources: ["Jira", "GitHub", "SonarQube"],
    steps: [
      { action: "Fetch stories & bugs", agent: "Jira Agent" },
      { action: "Check test coverage", agent: "QA Agent" },
      { action: "Analyze risk factors", agent: "Risk Analyst Agent" },
      { action: "Draft Go/No-Go summary", agent: "Writer Agent" }
    ]
  },
  postmortem: {
    title: "Incident Postmortem",
    desc: "Produce a structured incident review document from multiple data sources.",
    inputs: ["Incident ID", "Time window", "Slack Channel Link"],
    sources: ["PagerDuty", "Slack", "Datadog"],
    steps: [
      { action: "Pull alert timeline", agent: "Observability Agent" },
      { action: "Scrape chat transcripts", agent: "Comms Agent" },
      { action: "Extract key events", agent: "Analyst Agent" },
      { action: "Draft Root Cause Analysis", agent: "Writer Agent" }
    ]
  },
  qbr: {
    title: "Customer QBR Prep",
    desc: "Prepare materials for a strategic account review including metrics and opportunities.",
    inputs: ["Account Name", "Date Range", "Stakeholders"],
    sources: ["Salesforce", "Zendesk", "Snowflake"],
    steps: [
      { action: "Pull usage metrics", agent: "Data Agent" },
      { action: "Aggregate support tickets", agent: "Support Agent" },
      { action: "Identify upsell risks", agent: "Sales Agent" },
      { action: "Generate Slide Outline", agent: "Presentation Agent" }
    ]
  }
};

// Demo component
function ScenarioTemplatesDemo() {
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const openRecipe = (id) => {
    setActiveRecipe(id);
    setShowSuccess(false);
  };

  const closeRecipe = () => {
    setActiveRecipe(null);
    setShowSuccess(false);
  };

  const useRecipe = () => {
    setShowSuccess(true);
  };

  const resetDemo = () => {
    closeRecipe();
  };

  const recipe = activeRecipe ? recipes[activeRecipe] : null;

  return (
    <div className="std-container">
      {/* Header */}
      <header className="std-header">
        <div className="std-header__title">
          <svg className="std-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          AI Agent Workspace
          <span className="std-header__badge">Recipes Demo</span>
        </div>
        <button className="std-header__reset" onClick={resetDemo}>Reset Demo</button>
      </header>

      {/* Content wrapper - panel positions relative to this */}
      <div className="std-content">
        {/* Main Gallery */}
        <div className="std-gallery">
          <div className="std-gallery__intro">
            <h2 className="std-gallery__heading">Start from a Template</h2>
            <p className="std-gallery__subtext">
              Choose a pre-configured workflow to orchestrate agents for your specific business needs.
            </p>
          </div>

          <div className="std-grid">
            {/* Card 1: Release */}
            <div className="std-card" onClick={() => openRecipe('release')}>
              <div className="std-card__icon">
                <svg className="std-icon" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
                  <path d="m14 9 2 2-2 2" />
                </svg>
              </div>
              <div>
                <h3 className="std-card__title">Release Readiness</h3>
                <p className="std-card__desc">
                  Audit Jira tickets, test coverage, and risks to generate a Go/No-Go report.
                </p>
              </div>
              <div className="std-card__footer">
                <span className="std-card__tag">Engineering</span>
                <span className="std-card__tag">Jira</span>
              </div>
            </div>

            {/* Card 2: Postmortem */}
            <div className="std-card" onClick={() => openRecipe('postmortem')}>
              <div className="std-card__icon">
                <svg className="std-icon" viewBox="0 0 24 24">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="std-card__title">Incident Postmortem</h3>
                <p className="std-card__desc">
                  Compile timeline from logs and chat, analyze root cause, and draft report.
                </p>
              </div>
              <div className="std-card__footer">
                <span className="std-card__tag">SRE / Ops</span>
                <span className="std-card__tag">Slack</span>
              </div>
            </div>

            {/* Card 3: QBR */}
            <div className="std-card" onClick={() => openRecipe('qbr')}>
              <div className="std-card__icon">
                <svg className="std-icon" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="std-card__title">Customer QBR Prep</h3>
                <p className="std-card__desc">
                  Aggregate usage metrics and tickets to draft a Quarterly Business Review deck.
                </p>
              </div>
              <div className="std-card__footer">
                <span className="std-card__tag">Success</span>
                <span className="std-card__tag">Salesforce</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-over Panel */}
        <div className={`std-panel ${activeRecipe ? 'std-panel--active' : ''}`}>
          <div className="std-panel__header">
            <span className="std-panel__title">{recipe?.title || 'Recipe Details'}</span>
            <button className="std-panel__close" onClick={closeRecipe}>×</button>
          </div>

          <div className="std-panel__body">
            {recipe && !showSuccess && (
              <>
                <div className="std-detail">
                  <p className="std-detail__desc">{recipe.desc}</p>
                </div>

                <div className="std-detail">
                  <div className="std-detail__label">Data Access</div>
                  <div>
                    {recipe.sources.map((source, i) => (
                      <span key={i} className="std-source">{source}</span>
                    ))}
                  </div>
                </div>

                <div className="std-detail">
                  <div className="std-detail__label">Required Inputs</div>
                  <div className="std-input-preview">
                    {recipe.inputs.map((input, i) => (
                      <div key={i}>• {input}</div>
                    ))}
                  </div>
                </div>

                <div className="std-detail">
                  <div className="std-detail__label">Workflow Steps</div>
                  <ul className="std-steps">
                    <div className="std-steps__line" />
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="std-step">
                        <div className="std-step__number">{i + 1}</div>
                        <div className="std-step__content">
                          <div>{step.action}</div>
                          <span className="std-step__agent">Using {step.agent}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {showSuccess && (
              <div className="std-success">
                <div className="std-success__icon">
                  <svg className="std-icon" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="std-success__title">Plan Created</h3>
                <p className="std-success__text">
                  The agents are ready. You would now fill in the required inputs and confirm execution.
                </p>
                <div className="std-success__placeholder">
                  <div className="std-success__placeholder-label std-success__placeholder-label--short" />
                  <div className="std-success__placeholder-input" />
                  <div className="std-success__placeholder-label std-success__placeholder-label--medium" />
                  <div className="std-success__placeholder-input" />
                </div>
              </div>
            )}
          </div>

          {!showSuccess && (
            <div className="std-panel__footer">
              <button className="std-btn" onClick={useRecipe}>Use this Recipe</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// SEO metadata for this pattern page
export const SCENARIO_TEMPLATES_SEO = {
  title: "Scenario Templates & Recipes - AI Trust Pattern",
  description: "Pre-built, domain-specific AI workflows that help users articulate complex requests by selecting and customizing structured recipes instead of starting from a blank prompt.",
  keywords: ["AI templates", "scenario recipes", "AI workflows", "prompt templates", "AI onboarding", "agentic UX", "AI trust patterns", "workflow automation"],
  canonicalPath: "/agentic_ai_patterns/scenario-templates-and-recipes"
};

export default function ScenarioTemplatesAndRecipesPattern() {
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
            <span className="pattern-header__index">2.5</span>
            <div>
              <h1 className="pattern-header__title">Scenario Templates & Recipes</h1>
              <p className="pattern-header__subtitle">
                Pre-built, domain-specific AI workflows that help users articulate complex requests by selecting and customizing structured &quot;recipes&quot; instead of starting from a blank prompt.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.5" patternTitle="Scenario Templates & Recipes" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Scenario Templates & Recipes are pre-configured, multi-step workflows that demonstrate what an agentic AI system can do in concrete business situations.
            </p>
            <p className="pattern-body">
              Rather than requiring users to invent prompts from scratch, this pattern presents named scenarios (for example, <em>Quarterly Business Review</em>, <em>Release Readiness Review</em>, <em>Incident Postmortem</em>, <em>Product Launch Checklist</em>) that can be instantiated with a small set of inputs.
            </p>
            <p className="pattern-body">
              Each scenario encapsulates:
            </p>
            <ul className="pattern-list">
              <li>A clear goal and expected outputs</li>
              <li>The steps and agents involved</li>
              <li>Required inputs and data sources</li>
              <li>Guardrails, constraints, and assumptions</li>
            </ul>
            <p className="pattern-body">
              In a product, this typically appears as a &quot;Templates&quot; or &quot;Recipes&quot; gallery attached to a planning surface, workspace, or AI entry point. Selecting a recipe pre-populates a plan or workflow with editable steps, parameters, and agent assignments, which can then be reviewed, customized, and executed.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Scenario templates example">
          <ScenarioTemplatesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without scenario templates, interaction with an agentic AI system often begins from a blank input field. This creates several issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Blank-page paralysis and prompt anxiety</span> – Users must understand both the domain problem and how to phrase a request for the AI. Many know the outcome they want but struggle to translate it into a structured, multi-step plan.
              </li>
              <li>
                <span className="pattern-body--bold">Unclear system capabilities and boundaries</span> – Without curated scenarios, it is difficult to infer what the AI can or cannot do, which tools it can access, and how far automation can be safely delegated.
              </li>
              <li>
                <span className="pattern-body--bold">Inconsistent outcomes and low repeatability</span> – Ad-hoc prompts lead to variable quality, limited reproducibility, and fragile &quot;prompt lore&quot; that lives in chats or personal notes instead of in a shared, governed library.
              </li>
              <li>
                <span className="pattern-body--bold">High onboarding and training cost</span> – New or non-expert users often depend on power users or documentation to discover effective workflows, increasing support burden and slowing adoption.
              </li>
            </ul>
            <p className="pattern-body">
              Scenario Templates & Recipes address these issues by turning proven, high-value AI workflows into discoverable, guided, and repeatable building blocks.
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
                  <span className="pattern-body--bold">Multi-step, repeatable workflows</span> – When the AI is expected to orchestrate several steps or agents across multiple systems (for example, CRM + issue tracker + analytics) to complete a business outcome.
                </li>
                <li>
                  <span className="pattern-body--bold">Role- or domain-specific scenarios</span> – When different roles (PM, marketer, engineer, CSM) have recurring workflows that benefit from standardization and shared language.
                </li>
                <li>
                  <span className="pattern-body--bold">High-value but complex tasks</span> – When workflows are impactful but non-trivial to describe in a single prompt, such as audits, readiness checks, risk assessments, or executive briefing preparation.
                </li>
                <li>
                  <span className="pattern-body--bold">Onboarding to an agentic system</span> – When the product must quickly demonstrate what is possible with agents, and provide safe, guided &quot;first runs&quot; that build trust.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single-step, low-stakes interactions</span> – For simple tasks like &quot;rewrite this sentence&quot; or &quot;summarize this article,&quot; inline tools or lightweight prompt suggestions are usually sufficient.</li>
                <li><span className="pattern-body--bold">Highly exploratory or creative open-ended work</span> – In scenarios where structure may be a constraint (for example, blue-sky brainstorming, creative writing), templates should be optional and non-dominant.</li>
                <li><span className="pattern-body--bold">Obvious, well-known flows already encoded elsewhere</span> – If an existing wizard, form, or domain-specific workflow already captures the process clearly, adding a separate AI scenario template may add redundancy and confusion.</li>
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
                Scenario Templates & Recipes are composed of a discoverable gallery and detailed, structured &quot;recipe&quot; objects that instantiate plans for agents to execute.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Templates / Recipes Hub
              </h3>
              <p className="pattern-card__intro">
                A dedicated &quot;Templates&quot; or &quot;Recipes&quot; tab in the main navigation of the AI workspace or planner.
              </p>
              <ul className="pattern-card__list">
                <li>A prominent &quot;Start from template&quot; action in new-plan or new-project flows</li>
                <li>Searchable, filterable gallery of available recipes</li>
                <li>Role and domain categorization</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Empty States and First-Run</h3>
              <p className="pattern-card__intro">
                Empty states for planning canvases, agent orchestration views, or AI dashboards present a small, focused set of &quot;Recommended scenarios.&quot;
              </p>
              <ul className="pattern-card__list">
                <li>First-run onboarding surfaces a guided flow that ends in selecting a starter recipe</li>
                <li>Context-aware recommendations based on user role</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Inline Recommendations</h3>
              <p className="pattern-card__intro">
                In-context prompts that deep-link into a relevant recipe with pre-filled inputs.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Turn this incident into a postmortem&quot;</li>
                <li>&quot;Generate a release readiness checklist based on this milestone&quot;</li>
                <li>A small &quot;Browse recipes&quot; affordance near AI text areas or action menus</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Org Settings</h3>
              <p className="pattern-card__intro">
                Admin pages for managing organization-wide templates.
              </p>
              <ul className="pattern-card__list">
                <li>Promote team recipes to org-standard</li>
                <li>Version control and change logs</li>
                <li>Role-based access controls</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Scenario Recipe</h3>
            <p className="pattern-card__intro">
              The central unit is the Scenario Recipe: a reusable, shareable definition of a business workflow that an AI agent or set of agents can execute.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Name & Summary</p>
                <ul className="pattern-card__list">
                  <li>Concise, outcome-oriented name (e.g., &quot;Release Readiness Review&quot;)</li>
                  <li>Role-aware naming (e.g., &quot;Weekly Risk Digest for VP Eng&quot;)</li>
                  <li>One or two line description explaining goal and expected outputs</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Inputs & Parameters</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Required inputs:</span> Minimal fields needed to run (time range, project IDs, account list)</li>
                  <li><span className="pattern-body--bold">Optional parameters:</span> Filters, output style, sensitivity thresholds, notification preferences</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Steps & Agents</p>
                <ul className="pattern-card__list">
                  <li>Ordered, named steps the system will perform</li>
                  <li>Which agent or tool is used per step</li>
                  <li>What data is read/written</li>
                  <li>Success conditions for each step</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Data Sources & Permissions</p>
                <ul className="pattern-card__list">
                  <li>Systems accessed (Jira, GitHub, CRM, observability)</li>
                  <li>Read vs write operations</li>
                  <li>Required scopes and approvals</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Outputs</p>
                <ul className="pattern-card__list">
                  <li>Primary output format (doc, dashboard, email draft, checklist, tickets)</li>
                  <li>Example snippets or screenshots</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Use / Run:</span> Instantiates a plan with fields pre-populated</li>
                  <li><span className="pattern-body--bold">Preview / Expand:</span> Shows step detail before commitment</li>
                  <li><span className="pattern-body--bold">Customize:</span> Clone and edit into team-specific recipe</li>
                  <li><span className="pattern-body--bold">Share / Publish:</span> Share within workspace or org</li>
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
                The pattern follows a lifecycle from discovery to institutionalized reuse.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Discovery & Recommendation</h3>
              <ul className="pattern-card__list">
                <li>On first exposure to the AI workspace, the system surfaces a short, curated set of scenarios aligned with the user&apos;s role or current context.</li>
                <li>In ongoing use, recommendations are driven by recent activity and organizational priorities.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Exploration & Preview</h3>
              <ul className="pattern-card__list">
                <li>Selecting a recipe opens a detail view showing goal, output examples, steps and agents involved, and required inputs.</li>
                <li>This step builds trust by exposing the internal plan before execution.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Instantiation & Input Collection</h3>
              <ul className="pattern-card__list">
                <li>The user triggers &quot;Use this recipe&quot;, which creates a new plan populated with all steps and agents.</li>
                <li>A short form collects required inputs; some values may be pre-filled from context.</li>
                <li>Validation is performed on required fields and permissions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Customization & Fit</h3>
              <ul className="pattern-card__list">
                <li>Before execution, the plan remains fully editable: steps can be reordered, removed, or extended.</li>
                <li>Agents can be swapped (e.g., from &quot;Draft email&quot; to &quot;Draft doc&quot;).</li>
                <li>Parameters like threshold values or data ranges can be adjusted.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Execution & Monitoring</h3>
              <ul className="pattern-card__list">
                <li>Progress is tracked step-by-step with clear states: Pending, Running, Completed, Needs Review, Blocked.</li>
                <li>Manual checkpoints are highlighted with call-to-action controls.</li>
                <li>Logs and justification are accessible for each step.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Review & Refinement</h3>
              <ul className="pattern-card__list">
                <li>After completion, outputs are presented in a review surface.</li>
                <li>Users can modify generated content, mark steps as successful or needing changes.</li>
                <li>Feedback captured here can improve the underlying recipe.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Save as Custom Recipe</h3>
              <ul className="pattern-card__list">
                <li>If a particular configuration proves useful, the user can save it as a personal recipe.</li>
                <li>Propose it as a team or org-level standard, subject to admin review.</li>
                <li>Proven, curated recipes can be upgraded to &quot;standard&quot; with appropriate governance.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Governance, Versioning & Retirement</h3>
              <ul className="pattern-card__list">
                <li>Admins or recipe owners manage version history and change logs.</li>
                <li>Deprecation and replacement of outdated recipes.</li>
                <li>Role-based access controls for recipes that write to production or send external communications.</li>
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
                How scenario templates apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Release Readiness Review</h3>
              <p className="pattern-card__intro">B2B SaaS · Engineering / SRE</p>
              <p className="pattern-card__label">Goal</p>
              <p className="pattern-body" style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Assess whether a software release is ready for production.
              </p>
              <p className="pattern-card__label">Inputs</p>
              <ul className="pattern-card__list">
                <li>Release name, target date, environments</li>
                <li>Relevant Jira projects, error-budget thresholds</li>
              </ul>
              <p className="pattern-card__label">Steps</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Fetch stories and bugs targeted for the release from Jira</li>
                <li>Check test coverage and open critical bugs</li>
                <li>Analyze recent production incidents touching affected services</li>
                <li>Review deployment success rates and rollback history</li>
                <li>Draft readiness summary, risk list, and go/no-go decision</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident Postmortem</h3>
              <p className="pattern-card__intro">Ops / SRE</p>
              <p className="pattern-card__label">Goal</p>
              <p className="pattern-body" style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Produce a structured incident postmortem document from multiple data sources.
              </p>
              <p className="pattern-card__label">Inputs</p>
              <ul className="pattern-card__list">
                <li>Incident ID, time window, impacted services</li>
                <li>Incident channel link</li>
              </ul>
              <p className="pattern-card__label">Steps</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Pull incident timeline from alerting and observability tools</li>
                <li>Scrape chat transcript from the incident channel</li>
                <li>Extract key events and decisions into a structured timeline</li>
                <li>Propose root-cause analysis and contributing factors</li>
                <li>Draft follow-up actions and create tickets where appropriate</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer QBR Prep</h3>
              <p className="pattern-card__intro">CS / Sales</p>
              <p className="pattern-card__label">Goal</p>
              <p className="pattern-body" style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Prepare materials for a strategic account review.
              </p>
              <p className="pattern-card__label">Inputs</p>
              <ul className="pattern-card__list">
                <li>Account(s), QBR date, primary stakeholders</li>
                <li>Timeframe (e.g., last 90 days)</li>
              </ul>
              <p className="pattern-card__label">Steps</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Pull product usage metrics and feature adoption trends</li>
                <li>Aggregate support tickets and satisfaction scores</li>
                <li>Identify risk indicators and expansion opportunities</li>
                <li>Draft slide outline summarizing value delivered, risks, and recommendations</li>
                <li>Generate tailored email draft to send materials before meeting</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Product Launch Checklist</h3>
              <p className="pattern-card__intro">Marketing / PMM</p>
              <p className="pattern-card__label">Goal</p>
              <p className="pattern-body" style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Ensure all tasks for a feature or product launch are planned and tracked.
              </p>
              <p className="pattern-card__label">Inputs</p>
              <ul className="pattern-card__list">
                <li>Feature name, launch date, target segment, channels</li>
              </ul>
              <p className="pattern-card__label">Steps</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Generate launch checklist across channels (email, in-app, docs, training)</li>
                <li>Map checklist items to owners based on org structure</li>
                <li>Draft core messaging and FAQ from feature spec</li>
                <li>Create tasks in work management tool for each item</li>
                <li>Set reminders and follow-up tasks leading up to launch date</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations</p>
              <p className="pattern-body pattern-body--narrow">
                Different implementations of scenario templates depending on context and complexity.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Micro-Recipes</h3>
              <p className="pattern-card__intro">
                Small, single-context recipes triggered directly from a document, ticket, or dashboard.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Turn this incident into a customer update email&quot;</li>
                <li>&quot;Generate a summary for this document&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Wizard-Style Recipes</h3>
              <p className="pattern-card__intro">
                Templates that unfold across a multi-step setup wizard, collecting inputs before creating a plan.
              </p>
              <ul className="pattern-card__list">
                <li>Suitable when prerequisites and configurations are complex</li>
                <li>Step-by-step input collection with validation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Workflow Recipes</h3>
              <p className="pattern-card__intro">
                Recipes rendered as a visual flow (nodes and edges) where each node represents an agent action.
              </p>
              <ul className="pattern-card__list">
                <li>Users can drag to add, remove, or reroute steps before execution</li>
                <li>Clear visualization of dependencies and data flow</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Dynamic / Context-Aware Recipes</h3>
              <p className="pattern-card__intro">
                Templates that adapt steps or defaults based on current context.
              </p>
              <ul className="pattern-card__list">
                <li>Different steps for P1 vs P3 incidents</li>
                <li>Different channels for enterprise vs small accounts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of scenario templates should be clear, actionable, and transparent about what will happen.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Prepare VP Eng Risk Digest&quot; – action- and outcome-oriented</li>
                  <li>&quot;This recipe will read from Jira and Slack, and create a draft document.&quot;</li>
                  <li>&quot;Required: Release name, target date. Optional: Custom error-budget threshold.&quot;</li>
                  <li>&quot;Step 3 requires your approval before sending any external emails.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Incident Data Aggregation v2&quot; – technical jargon, not outcome-oriented</li>
                  <li>&quot;Uses your tools and data&quot; – without naming them</li>
                  <li>&quot;AI will handle everything&quot; – vague, doesn&apos;t describe boundaries</li>
                  <li>&quot;Advanced workflow template&quot; – marketing language, not operational</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Names & Descriptions</h3>
                <ul className="pattern-card__list">
                  <li>Use concise, action- and outcome-oriented names that reflect real-world tasks</li>
                  <li>State what the scenario is for, who it is for (role), and what it produces</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Inputs & Steps</h3>
                <ul className="pattern-card__list">
                  <li>Ask only for the minimum required inputs</li>
                  <li>Provide clear labels, placeholders, and inline examples</li>
                  <li>Write steps in plain language with explicit verbs and visible dependencies</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Trust & Safety
                  <span className="pattern-pill pattern-pill--neutral">Critical</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Explicitly call out data that will be accessed and whether it is read-only or write-capable</li>
                  <li>Highlight any external communications that might be sent</li>
                  <li>Indicate manual approval gates before irreversible actions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & states</p>
              <p className="pattern-body pattern-body--narrow">
                Key UI states for scenario template interactions.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Gallery State</h3>
              <ul className="pattern-card__list">
                <li>Cards or tiles displaying name, short description, primary role</li>
                <li>&quot;Use&quot; or &quot;Preview&quot; action for each recipe</li>
                <li>Filters / facets (role, domain, data source, complexity, verified vs experimental)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Detail State</h3>
              <ul className="pattern-card__list">
                <li>Goals and expected outputs</li>
                <li>Steps and agents</li>
                <li>Data access summary</li>
                <li>Clear primary action: &quot;Use this recipe&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Configuration State</h3>
              <ul className="pattern-card__list">
                <li>Lightweight form collecting required inputs</li>
                <li>Contextual validation</li>
                <li>Optional advanced section for power users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Execution State</h3>
              <ul className="pattern-card__list">
                <li>Progress indicator per step with inline explanations</li>
                <li>Ability to pause, cancel, or re-run individual steps</li>
                <li>Highlighted manual checkpoints requiring human confirmation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Completion State</h3>
              <ul className="pattern-card__list">
                <li>Summary of what was done, where, and with which outputs</li>
                <li>Quick links to generated artifacts (docs, tickets, dashboards)</li>
                <li>Option to rate or provide feedback on the recipe</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error State</h3>
              <ul className="pattern-card__list">
                <li>Step marked as Blocked with clear explanation</li>
                <li>Allow retry after adjustment of inputs or parameters</li>
                <li>Avoid discarding progress from completed steps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Error Handling & Edge Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Error handling & edge cases</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate and design for these potential issues.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Missing Permissions or Data Access</h3>
              <p className="pattern-card__intro">
                If access is missing for required systems.
              </p>
              <ul className="pattern-card__list">
                <li>Explain which permission is needed and why</li>
                <li>Offer to adjust the recipe to a read-only or partial mode, or suggest alternatives</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incomplete Inputs</h3>
              <p className="pattern-card__intro">
                When required fields are missing or invalid.
              </p>
              <ul className="pattern-card__list">
                <li>Highlight missing or invalid fields with actionable error messages</li>
                <li>Not generic failures</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent or Tool Failure</h3>
              <p className="pattern-card__intro">
                When a step fails during execution.
              </p>
              <ul className="pattern-card__list">
                <li>Mark the step as Blocked with a clear explanation</li>
                <li>Allow retry after adjustment of inputs or parameters</li>
                <li>Avoid discarding progress from completed steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Changes in Underlying Systems</h3>
              <p className="pattern-card__intro">
                When connected systems change (e.g., renamed projects, deleted dashboards).
              </p>
              <ul className="pattern-card__list">
                <li>Mark affected recipes as &quot;Needs Attention&quot; and notify owners</li>
                <li>Provide a repair flow to update mappings and references</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Outdated or Deprecated Recipes</h3>
              <p className="pattern-card__intro">
                Managing recipe lifecycle.
              </p>
              <ul className="pattern-card__list">
                <li>Clearly label deprecated templates and suggest replacements</li>
                <li>Prevent running recipes that are known to be unsafe or incompatible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & Telemetry Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data & telemetry considerations</p>
              <p className="pattern-body pattern-body--narrow">
                To improve recipe quality and trust over time, the product should observe key metrics and feedback signals.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Discovery & Adoption</h3>
              <ul className="pattern-card__list">
                <li>Which scenarios are most frequently viewed, instantiated, and completed</li>
                <li>Which roles use which templates and in what contexts</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Execution Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Completion rate, failure rate by step, average time to completion</li>
                <li>Manual edits applied to generated outputs, especially repeated patterns of edits</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Feedback</h3>
              <ul className="pattern-card__list">
                <li>Explicit ratings or quick reactions (e.g., &quot;Useful&quot;, &quot;Not relevant&quot;, &quot;Needs more detail&quot;)</li>
                <li>Free-text feedback for recipe owners to refine prompts and steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance Signals</h3>
              <ul className="pattern-card__list">
                <li>Which templates are commonly cloned and adapted</li>
                <li>Where misuse or confusion is detected, prompting content or scope adjustments</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-sm">
            <p className="pattern-body">
              Telemetry should be carefully designed to avoid logging sensitive data while still capturing enough information to improve template design.
            </p>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure scenario templates are usable by everyone.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Navigation & Focus</h3>
              <ul className="pattern-card__list">
                <li>Ensure that the gallery and detail views are fully navigable via keyboard, with clear focus states</li>
                <li>Use headings and landmarks so assistive technologies can understand the structure of templates and steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual & Labels</h3>
              <ul className="pattern-card__list">
                <li>Avoid encoding critical information only in colors; use text labels and patterns for state changes</li>
                <li>Provide concise but descriptive labels for buttons such as &quot;Use this recipe&quot;, &quot;Preview steps&quot;, and &quot;View data access details&quot;</li>
              </ul>
            </div>
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
                  <h3 className="antipattern-title">Recipe as Opaque Black Box</h3>
                  <p className="antipattern-subtitle">Hiding steps, tools, or data access from users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Hiding steps, tools, or data access leads to mistrust. Users should be able to inspect what will happen before committing.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show steps, data sources, and permissions before execution.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overwhelming, Uncurated Catalog</h3>
                  <p className="antipattern-subtitle">A large, undifferentiated list of templates.</p>
                </div>
              </div>
              <p className="antipattern-description">
                A large, undifferentiated list of templates creates confusion. Without role- or context-based curation, it becomes harder to find relevant scenarios.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Curate and categorize templates by role, domain, and use case. Show relevant recipes first.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mandatory Templating for Simple Tasks</h3>
                  <p className="antipattern-subtitle">Forcing templates even for trivial actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Forcing templates even for trivial actions adds friction. Templates should accelerate workflows, not gate basic interactions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make templates optional and reserve them for complex, multi-step workflows.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Recipes That Self-Modify</h3>
                  <p className="antipattern-subtitle">Templates that silently change based on model behavior.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing recipes to silently change based on model behavior or unsupervised feedback risks inconsistency and confusion. Versioning and change logs are essential.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain explicit versioning with visible change history. Require admin approval for recipe changes.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Templates That Over-Promise</h3>
                  <p className="antipattern-subtitle">Marketing language that implies excessive autonomy.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Marketing language that implies excessive autonomy (&quot;The AI will manage the entire release&quot;) without clear boundaries increases risk and erodes trust when reality does not match expectations.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Be specific about what the recipe does and doesn&apos;t do. Set realistic expectations.</span>
              </div>
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
              <p className="pattern-checklist-category__title">Discovery & IA</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a dedicated Templates / Recipes entry point in the AI workspace?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do empty states and first-run flows surface a focused set of role-relevant scenarios?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there filters or facets to narrow templates by role, domain, and verification status?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Recipe Definition</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each recipe have a clear name, concise description, and defined target roles?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are inputs and parameters documented, with clear required vs optional fields?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are steps, agents, and tools explicitly defined, including data access and write operations?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Trust & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are data sources, permissions, and outbound actions clearly disclosed?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do manual approval gates exist before high-impact actions (emails, config changes)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are higher-risk recipes flagged and governed (e.g., &quot;Org standard – security reviewed&quot;)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Interaction & UX</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users preview steps and data access before running a recipe?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are plans instantiated from templates fully editable prior to execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are progress and errors visible at step-level with clear actions to retry or adjust?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Lifecycle & Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do recipes support versioning with visible change history?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a process for promoting personal or team recipes to org-standard variants?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are deprecated recipes clearly marked and safely retired with suggested alternatives?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Measurement & Iteration</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is telemetry in place to measure adoption, completion, and feedback?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does a regular review cadence exist for updating and pruning the template library?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are signals from edits and failures used to refine prompts, steps, and defaults?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
