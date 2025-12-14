import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, FileText, FolderOpen, Shield, Users, Settings, GitBranch, Layers } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import WorkflowPolicyTemplateLibraryDemo from '../demos/WorkflowPolicyTemplateLibraryDemo';

// SEO metadata for this pattern page
export const WORKFLOW_POLICY_TEMPLATE_LIBRARY_SEO = {
  title: "Workflow & Policy Template Library - AI Trust Pattern",
  description: "Centralized library of vetted AI workflows and policies that enables safe reuse, consistent guardrails, and faster rollout of agentic AI across an organization.",
  keywords: ["AI workflows", "policy templates", "AI governance", "workflow library", "AI guardrails", "agentic AI", "AI trust", "enterprise AI", "workflow templates", "AI policy management"],
  canonicalPath: "/agentic_ai_patterns/workflow-policy-template-library"
};


export default function WorkflowPolicyTemplateLibraryPattern() {
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
            <span className="pattern-header__index">10.4</span>
            <div>
              <h1 className="pattern-header__title">Workflow & Policy Template Library</h1>
              <p className="pattern-header__subtitle">
                Centralized library of vetted AI workflows and policies that enables safe reuse, consistent guardrails, and faster rollout of agentic AI across an organization.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="10.4" patternTitle="Workflow & Policy Template Library" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              A Workflow & Policy Template Library is a centralized catalog of reusable, pre-approved patterns for how AI agents operate: which steps they take, when humans are involved, what data they can access, and which policies apply.
            </p>
            <p className="pattern-body">
              It typically appears in admin or configuration areas of a product (for example, &quot;AI & Automation&quot; or &quot;Governance&quot; sections), and is surfaced back to end-users at runtime via labels, disclosures, and controls that reference the underlying template.
            </p>
            <p className="pattern-body">
              The core idea is to separate <span className="pattern-body--bold">what</span> an AI agent should do (the workflow), and <span className="pattern-body--bold">under which rules</span> it should operate (the policy), from any specific one-off implementation. Instead of each team hand-rolling automations and guardrails, the organization relies on curated templates that encode best practices, compliance requirements, and tested patterns.
            </p>
            <p className="pattern-body">
              This reduces risk, accelerates adoption, and makes AI behavior more predictable and explainable.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/10.1 policy template library.png"
              alt="Workflow & Policy Template Library pattern illustration"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="pattern-section pattern-section--demo">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Demo</p>
            <p className="pattern-body">
              This template library presents three pre-approved workflow templates for administrators to deploy: a medium-risk &quot;Tiered Support Escalation&quot; with human review for low-confidence cases, a high-risk &quot;Marketing Draft with Legal Review&quot; requiring legal approval before sending, and a low-risk &quot;Safe Data Summary&quot; with read-only access. Each card displays the risk level, key governance tags (like PII Redaction and Human Review), and a brief description. Click any template card to open a detailed modal showing the step-by-step workflow visualization on the left and governing policies on the right. Notice how human-in-the-loop checkpoints are highlighted with warning icons in the workflow. This demonstrates how templates bundle both operational logic and governance rules into reusable, auditable patterns.
            </p>
          </div>
          <div className="pattern-demo" aria-label="Workflow and Policy Template Library interactive demo">
            <WorkflowPolicyTemplateLibraryDemo />
          </div>
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a shared template library, AI workflows and policies often emerge in fragmented and opaque ways:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Inconsistent guardrails and experiences</span> – Each team designs its own flows, thresholds, and approvals. Some agents silently take high-impact actions while others over-escalate, leading to unpredictable experiences across regions, products, or customer segments.
              </li>
              <li>
                <span className="pattern-body--bold">Hidden automation and unclear responsibility</span> – End-users cannot tell which steps are automated, which policies apply, or when humans are involved. This erodes trust, especially when AI makes surprising changes or fails silently.
              </li>
              <li>
                <span className="pattern-body--bold">Governance that does not scale</span> – Compliance, security, and legal teams must review one-off workflows repeatedly. Changes to regulations or internal policies are hard to propagate across dozens of agents and products.
              </li>
              <li>
                <span className="pattern-body--bold">Difficult troubleshooting and auditing</span> – When an incident occurs, it is hard to answer simple questions: &quot;Which workflow ran?&quot;, &quot;Which version of the policy was used?&quot;, &quot;Who approved this configuration?&quot;
              </li>
            </ul>
            <p className="pattern-body">
              A Workflow & Policy Template Library addresses these issues by providing controlled, inspectable starting points that encode both operational flows and governance rules in one place.
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
                  A product supports <span className="pattern-body--bold">multiple AI workflows or agents</span> across teams, markets, or customer segments, and needs consistent behavior and guardrails.
                </li>
                <li>
                  Workflows <span className="pattern-body--bold">interact with sensitive data or high-impact actions</span>, such as financial changes, security incidents, HR decisions, or data export and deletion.
                </li>
                <li>
                  An organization must <span className="pattern-body--bold">demonstrate compliance</span> with regulations or internal AI governance (e.g., human-in-the-loop requirements, data residency rules, retention policies).
                </li>
                <li>
                  Non-specialist teams (support, sales, operations) need to <span className="pattern-body--bold">configure AI behavior safely</span> without deep ML, security, or legal expertise.
                </li>
                <li>
                  Leadership wants to <span className="pattern-body--bold">standardize best practices</span> (for example, a &quot;golden path&quot; for AI-backed support, outreach, or incident response) and reuse them across business units.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The product only includes a <span className="pattern-body--bold">single, low-risk AI feature</span> (for example, inline copy suggestions) where policies and behavior are simple and already well-documented.</li>
                <li>There is <span className="pattern-body--bold">no need for per-tenant or per-team customization</span> of workflows or policies, and a single global configuration suffices.</li>
                <li>AI actions are strictly <span className="pattern-body--bold">read-only, reversible, and low-stakes</span> (for example, non-sensitive recommendations), and the existing UI already communicates scope and limits clearly.</li>
                <li>The organization is in an early experiment phase with <span className="pattern-body--bold">one-off prototypes</span> that are not yet subject to formal governance, and a full library would add more process than value.</li>
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
                The pattern spans two main surfaces: a <span className="pattern-body--bold">configuration surface</span> for admins, builders, and governance stakeholders, where templates are created, approved, organized, and applied; and a <span className="pattern-body--bold">runtime surface</span> for end-users, where AI behavior is guided by those templates.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Entry Points
              </h3>
              <p className="pattern-card__intro">
                Dedicated sections in admin or settings navigation.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;AI Workflows & Policies&quot;, &quot;Automation Library&quot;, or &quot;Governance&quot; section in admin navigation</li>
                <li>Dedicated &quot;Template Gallery&quot; within an AI Studio, Agent Builder, or Automation Designer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary Entry Points</h3>
              <p className="pattern-card__intro">
                Template selection during workflow creation.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Start from template&quot; step in any &quot;Create workflow/agent&quot; wizard</li>
                <li>&quot;Recommended templates&quot; sidebar in a chat or playbook builder when configuring an AI assistant</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry Points</h3>
              <p className="pattern-card__intro">
                Links from error views and governance dashboards.
              </p>
              <ul className="pattern-card__list">
                <li>Call-to-actions in error or incident views (e.g., &quot;Standardize this response flow as a template&quot;)</li>
                <li>Inline links from policy pages, audit logs, or governance dashboards (e.g., &quot;View workflows using this policy template&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Runtime Entry Points</h3>
              <p className="pattern-card__intro">
                End-user surfaces showing active workflows.
              </p>
              <ul className="pattern-card__list">
                <li>Chat headers and banners indicating which workflow is in use (e.g., &quot;Standard Support Workflow (HITL Enabled)&quot;)</li>
                <li>Inline messages before high-impact actions (e.g., &quot;This step follows the Compliant Data Export template&quot;)</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Template</h3>
            <p className="pattern-card__intro">
              The primary object is a Template, representing a reusable combination of workflow logic and policy bindings.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Name</p>
                <ul className="pattern-card__list">
                  <li>Concise and action-oriented (e.g., &quot;Tiered Support Escalation (HITL EU)&quot;)</li>
                  <li>&quot;Marketing Email Drafting with Legal Review&quot;</li>
                  <li>&quot;Sensitive Data Export (GDPR-aligned)&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description</p>
                <ul className="pattern-card__list">
                  <li>The goal of the workflow (e.g., &quot;Handle tier-1 support questions with AI; escalate ambiguous or high-risk issues to humans&quot;)</li>
                  <li>Who it is for (role or team)</li>
                  <li>Which types of data or actions are involved</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Workflow Definition</p>
                <ul className="pattern-card__list">
                  <li>Steps, branching logic, and triggers</li>
                  <li>Involved agents and human-in-the-loop checkpoints</li>
                  <li>Integrations: systems touched (CRM, ticketing, billing)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Policy Bindings</p>
                <ul className="pattern-card__list">
                  <li>Linked policy templates (data access, retention, PII handling, content safety)</li>
                  <li>Risk classification and guardrail configuration</li>
                  <li>Regulatory variants (e.g., EU vs US data handling)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Controls & Metadata */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Controls</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Preview</span> – See template details before applying</li>
                <li><span className="pattern-body--bold">Simulate</span> – Test behavior in sandbox mode</li>
                <li><span className="pattern-body--bold">Clone</span> – Create a copy for customization</li>
                <li><span className="pattern-body--bold">Customize</span> – Adjust parameters within allowed bounds</li>
                <li><span className="pattern-body--bold">Set as default</span> – Make the template the default for a use case</li>
                <li><span className="pattern-body--bold">Assign to group</span> – Apply to specific teams or segments</li>
                <li><span className="pattern-body--bold">Retire / Rollback</span> – Deprecate or revert to previous version</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Optional Metadata</h3>
              <ul className="pattern-card__list">
                <li>Version number, changelog, and who approved it</li>
                <li>Status: Draft, In Review, Approved, Deprecated</li>
                <li>Tags: industry, function (support, sales, finance), complexity, risk level</li>
                <li>Usage metrics: number of agents using the template, volume of runs, escalation rates</li>
                <li>Compatibility notes (environments, models, integrations supported)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of a template spans from discovery through deployment and ongoing iteration.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Discovery & Selection</h3>
              <ul className="pattern-card__list">
                <li>Admins or builders open the Template Library via navigation or a &quot;Start from template&quot; entry point.</li>
                <li>The library offers filters for use case, role, industry, risk level, and region.</li>
                <li>Template cards show a concise summary, risk badge, and status (e.g., &quot;Verified&quot;, &quot;Recommended&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Inspection & Fit Assessment</h3>
              <ul className="pattern-card__list">
                <li>Selecting a template opens a detailed view with workflow visualization.</li>
                <li>Shows linked policies, guardrails, data access scope, and connected systems.</li>
                <li>Known risks, limitations, and example conversations or runs are displayed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Instantiation (Clone & Map)</h3>
              <ul className="pattern-card__list">
                <li>The system clones the template into a new workflow instance bound to a specific environment or tenant.</li>
                <li>Required connections (CRM, ticketing, email domain) are mapped.</li>
                <li>Optional parameters are initialized with safe defaults from the template.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Customization & Simulation</h3>
              <ul className="pattern-card__list">
                <li>Teams adjust the cloned workflow within controlled bounds (thresholds, routing rules, copy).</li>
                <li>Additional human checkpoints can be added where local practice requires them.</li>
                <li>Integrated simulation mode lets teams run test conversations to validate behavior.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Review & Approval</h3>
              <ul className="pattern-card__list">
                <li>For higher-risk templates, changes flow through structured approval processes.</li>
                <li>Role-based reviewers (Legal, Security, Compliance) are assigned automatically based on risk level.</li>
                <li>Reviewers see a concise diff from the base template and last approved version.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Deployment & Runtime Disclosure</h3>
              <ul className="pattern-card__list">
                <li>The approved workflow instance is attached to AI agents or product surfaces.</li>
                <li>End-users see labels or banners indicating the active workflow and its key properties.</li>
                <li>Controls to pause automation, request human intervention, or provide feedback.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Monitoring, Feedback & Iteration</h3>
              <ul className="pattern-card__list">
                <li>Library dashboards aggregate performance and trust-related metrics (escalation rates, override frequency, error patterns).</li>
                <li>Feedback from end-users and operators informs template adjustments.</li>
                <li>Successful patterns are promoted as &quot;Recommended&quot;; problematic workflows are tightened or deprecated.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Versioning, Deprecation & Migration</h3>
              <ul className="pattern-card__list">
                <li>When policies change or improvements are made, a new template version is created with a clear changelog.</li>
                <li>Existing workflow instances can be upgraded in-place or scheduled for migration.</li>
                <li>End-users may see subtle UI nudges indicating improved workflows.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & Structuring Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Content & structuring guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Effective templates require clear naming, accessible descriptions, and transparent risk communication.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <FileText size={16} className="pattern-icon--neutral" />
                Naming & Descriptions
              </h3>
              <ul className="pattern-card__list">
                <li>Use <span className="pattern-body--bold">action + scope + governance signal</span> in names (e.g., &quot;Customer Support – Tiered AI Escalation (HITL)&quot;)</li>
                <li>Keep descriptions <span className="pattern-body--bold">plain, outcome-focused, and non-technical</span></li>
                <li>Emphasize what business problem the template solves and what level of autonomy the AI has</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Shield size={16} className="pattern-icon--neutral" />
                Policy & Risk Communication
              </h3>
              <ul className="pattern-card__list">
                <li>Include readable summaries of key policies (e.g., &quot;Personal data never leaves region X&quot;)</li>
                <li>Display <span className="pattern-body--bold">risk levels</span> with both visual markers and text labels (Low / Medium / High)</li>
                <li>Clearly indicate <span className="pattern-body--bold">HITL presence</span> and <span className="pattern-body--bold">approval requirements</span> as first-class metadata</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Users size={16} className="pattern-icon--neutral" />
                Trust-Building Details
              </h3>
              <ul className="pattern-card__list">
                <li>Highlight who authored and who approved each template</li>
                <li>Show when it was last reviewed and where it is used</li>
                <li>Provide short &quot;Why this is safe&quot; or &quot;How this protects customers&quot; blurbs</li>
                <li>Capture <span className="pattern-body--bold">known limitations</span> and out-of-scope cases to prevent over-trust</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interaction & States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & states</p>
              <p className="pattern-body pattern-body--narrow">
                The template library supports multiple interaction modes and states for different user needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Browsing & Discovery States</h3>
              <p className="pattern-body--bold pattern-body--mb-sm">Empty State</p>
              <ul className="pattern-card__list">
                <li>When no templates exist, provide one or two canonical starter templates</li>
                <li>Include a short explanation of how templates relate to governance and reuse</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Catalog View</p>
              <ul className="pattern-card__list">
                <li>Grid or list view with template cards: name, summary, risk badge, status, active instances</li>
                <li>Filters for function, region, risk, and approval status</li>
                <li>Sorting by &quot;Recommended&quot;, recent activity, or popularity</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Template Detail View</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Overview section</span> – Description, intended roles, risk level, status, and approvals</li>
                <li><span className="pattern-body--bold">Workflow visualization</span> – Diagram of steps, decisions, and where agents vs humans act</li>
                <li><span className="pattern-body--bold">Policies & guardrails</span> – Linked policy templates with one-line explanations</li>
                <li><span className="pattern-body--bold">Metrics & feedback</span> – Key stats and recent feedback from operators</li>
                <li><span className="pattern-body--bold">Actions</span> – &quot;Clone & Customize&quot;, &quot;Simulate&quot;, &quot;View versions&quot;, &quot;View audit log&quot;</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Apply / Clone Flow</h3>
              <p className="pattern-card__intro">Use a guided stepper:</p>
              <ul className="pattern-card__list">
                <li>1. Confirm template and environment</li>
                <li>2. Map required systems and resources (connectors, queues, teams)</li>
                <li>3. Adjust allowed parameters (thresholds, wording)</li>
                <li>4. Configure who receives escalations and notifications</li>
                <li>5. Run a quick simulation and summarize key behavior and risks</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '16px' }}>Before final activation, show a confirmation summary:</p>
              <ul className="pattern-card__list">
                <li>&quot;This workflow can: [list key powers]&quot;</li>
                <li>&quot;Human review required for: [cases]&quot;</li>
                <li>&quot;Bound by: [policy names]&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Runtime Disclosure & Controls</h3>
              <p className="pattern-card__intro">For end-users interacting via chat interfaces:</p>
              <ul className="pattern-card__list">
                <li>Show a <span className="pattern-body--bold">persistent indicator</span> of the active workflow (e.g., &quot;AI Flow: Verified Support Template – view details&quot;)</li>
                <li>Provide <span className="pattern-body--bold">inline explanations</span> before impactful steps</li>
                <li>Enable <span className="pattern-body--bold">user agency</span> with buttons like &quot;Request human now&quot;, &quot;Pause automated actions&quot;, &quot;Report workflow issue&quot;</li>
                <li>For supervisors, provide &quot;View workflow steps&quot; or &quot;Override decision&quot; controls</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-md">
            <h3 className="pattern-card__title">Error & Edge Cases</h3>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Missing or Deprecated Template</p>
                <ul className="pattern-card__list">
                  <li>Fallback to a safe default (e.g., human-only handling)</li>
                  <li>Show a banner to admins: &quot;Template retired – workflow paused until reassigned&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Policy Conflicts</p>
                <ul className="pattern-card__list">
                  <li>Automatically pause high-risk steps when workflows violate newly applied policies</li>
                  <li>Notify admins with a clear explanation and suggestions</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Simulation Failures</p>
                <ul className="pattern-card__list">
                  <li>When a template cannot be simulated (e.g., missing integration), block production activation</li>
                  <li>Guide the admin to complete required configuration</li>
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
                The pattern can be adapted for different organizational contexts and governance needs.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <GitBranch size={16} className="pattern-icon--neutral" />
                Workflow-Focused Library
              </h3>
              <p className="pattern-card__intro">
                Templates primarily encode step-by-step flows. Policies are implied or set globally. Suitable for lower-risk or internal-only scenarios.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Layers size={16} className="pattern-icon--neutral" />
                Policy Overlay Library
              </h3>
              <p className="pattern-card__intro">
                Policies exist as independent templates (e.g., &quot;EU PII Rules&quot;, &quot;Internal-only Content Guardrails&quot;) that can be applied across workflows. Encourages consistent governance while allowing diverse processes.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <FolderOpen size={16} className="pattern-icon--neutral" />
                Industry Packs
              </h3>
              <p className="pattern-card__intro">
                Grouped templates tailored for regulated or specialized domains (healthcare, finance, education), preconfigured with relevant guardrails and escalation patterns.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Settings size={16} className="pattern-icon--neutral" />
                Multi-Tenant vs Single-Tenant
              </h3>
              <p className="pattern-card__intro">
                Multi-tenant: global templates provided by the platform, per-tenant clones for customization. Single-tenant: more freedom for in-house teams with internal &quot;global&quot; vs &quot;local&quot; layers.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of template libraries can unintentionally undermine trust and governance.
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
                  <h3 className="antipattern-title">Opaque, Undisclosed Workflows</h3>
                  <p className="antipattern-subtitle">Templates controlling significant decisions without any indication to end-users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When templates control significant decisions without any indication to end-users that a standard workflow is in effect, or what level of autonomy it has, trust erodes rapidly.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always disclose which workflow is active and what level of autonomy it has.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Template Sprawl Without Curation</h3>
                  <p className="antipattern-subtitle">Dozens of overlapping templates with no clear recommendation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Having dozens of overlapping templates (e.g., five &quot;Support Escalation&quot; variants) with no clear recommendation leads to confusion and inconsistent practices.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Curate templates actively; mark recommended options and deprecate redundant ones.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unversioned and Mutable Templates</h3>
                  <p className="antipattern-subtitle">Templates updated in-place without versioning or approvals.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Templates updated in-place without versioning or approvals make it impossible to audit past behavior or roll back regression-causing changes.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Maintain version history with changelogs and require approvals for changes to production templates.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Legalese-Heavy Descriptions</h3>
                  <p className="antipattern-subtitle">Policy text copied verbatim from legal documents.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Policy text copied verbatim from legal documents without a concise, operational summary discourages admins and operators from understanding the real constraints.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide plain-language summaries alongside full policy text.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unsafe Default Workflows</h3>
                  <p className="antipattern-subtitle">Out-of-the-box templates allowing high-impact actions without default human review.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Out-of-the-box templates that allow high-impact actions (refunds, data deletion, security configuration changes) without default human review or clear notification create significant risk.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Default to conservative settings with human review required for high-impact actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Simulation or Dry-Run Path</h3>
                  <p className="antipattern-subtitle">Allowing direct activation in production without a guarded way to test.</p>
                </div>
              </div>
              <p className="antipattern-description">
                For high-stakes workflows, allowing direct activation in production without a guarded way to test behavior first increases the risk of costly mistakes.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Require simulation or sandbox testing before production activation for high-risk templates.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility & inclusivity considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Template libraries should be accessible to all users and teams.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Navigation & Interaction</h3>
              <ul className="pattern-card__list">
                <li>Ensure the Template Library is fully operable via <span className="pattern-body--bold">keyboard navigation</span> and screen readers with clear focus states</li>
                <li>Use <span className="pattern-body--bold">semantic structure</span> (proper headings, landmarks) so screen reader users can navigate between sections</li>
                <li>Avoid relying on color alone to signal risk levels or status; pair <span className="pattern-body--bold">text labels</span> and icons with color cues</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Content & Localization</h3>
              <ul className="pattern-card__list">
                <li>Write <span className="pattern-body--bold">plain language descriptions</span> understandable beyond AI specialists or lawyers</li>
                <li>Support <span className="pattern-body--bold">localization</span> for template labels, descriptions, and policy explanations, especially in global products</li>
                <li>Provide alternative text and textual descriptions for any <span className="pattern-body--bold">workflow diagrams</span> or visual representations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Signals */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & signals of success</p>
              <p className="pattern-body pattern-body--narrow">
                Key metrics indicating that the pattern is working effectively.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption</h3>
              <ul className="pattern-card__list">
                <li>Percentage of AI workflows created from templates vs built from scratch</li>
                <li>Number of teams or tenants using recommended templates</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Safety Outcomes</h3>
              <ul className="pattern-card__list">
                <li>Reduction in incidents linked to misconfigured workflows or missing guardrails</li>
                <li>Decrease in policy violations, security alerts, or data mis-handling events for template-based workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Efficiency & Scale</h3>
              <ul className="pattern-card__list">
                <li>Time-to-deploy for a new AI workflow before vs after template adoption</li>
                <li>Mean time to update workflows following a new regulation or policy change</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User & Operator Confidence</h3>
              <ul className="pattern-card__list">
                <li>Frequency of end-user overrides or escalations per workflow; trends over time</li>
                <li>Qualitative feedback from operators, supervisors, and compliance teams on clarity and predictability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance Health</h3>
              <ul className="pattern-card__list">
                <li>Percentage of templates with recent reviews and approvals</li>
                <li>Coverage of key business processes by approved templates vs ad-hoc flows</li>
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
                Implementation details vary by stack, but several recurring patterns support robust template library behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data & Permission Model</h3>
              <ul className="pattern-card__list">
                <li>Represent templates as <span className="pattern-body--bold">first-class entities</span> with IDs, names, versions, and status</li>
                <li>Maintain relationships to workflows, policies, and agents</li>
                <li>Maintain a <span className="pattern-body--bold">separate policy layer</span> (data, security, content, region) that templates can reference</li>
                <li>Enforce <span className="pattern-body--bold">role-based permissions</span> for creating, editing, approving, and applying templates</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Human-in-the-Loop (HITL) Integration</h3>
              <ul className="pattern-card__list">
                <li>Provide a <span className="pattern-body--bold">configurable HITL component</span> that can be dropped into templates</li>
                <li>Define conditions for review (low model confidence, certain risk categories, high-value transactions)</li>
                <li>Assign reviewers or queues, specify SLAs and fallbacks</li>
                <li>Log HITL decisions as part of the workflow&apos;s audit trail</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Simulation & Sandboxing</h3>
              <ul className="pattern-card__list">
                <li>Support <span className="pattern-body--bold">dry-run execution</span> of workflows using synthetic or sanitized data</li>
                <li>Show step-by-step logs, including policy checks and decisions</li>
                <li>Highlight any missing configuration or ambiguous behavior</li>
                <li>Allow <span className="pattern-body--bold">side-by-side comparison</span> of template versions in simulation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Environment Support</h3>
              <ul className="pattern-card__list">
                <li>Separate configuration and secrets between environments (dev, staging, production)</li>
                <li>Allow templates to be <span className="pattern-body--bold">promoted</span> between environments with approval gates</li>
                <li>Reflect environment context in the UI so admins understand where each template is active</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-md">
            <h3 className="pattern-card__title">Observability & Auditability</h3>
            <ul className="pattern-card__list">
              <li>Store structured logs that capture which workflow template and version ran, key parameters and decisions, policy checks and outcomes</li>
              <li>Provide <span className="pattern-body--bold">searchable audit views</span> that can be filtered by template, version, user segment, or time window</li>
            </ul>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How workflow and policy template libraries apply across different contexts and industries.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Regional Adaptation in Support Applications</h3>
              <p className="pattern-card__intro">
                A global B2B support platform ships a &quot;Global Support Workflow (HITL)&quot; template that routes simple FAQs to an AI answerer agent, escalates sensitive tickets to humans, and limits AI access to a curated knowledge base.
              </p>
              <ul className="pattern-card__list">
                <li>Regional teams clone this template and adjust language, working hours, and local legal requirements</li>
                <li>Region-specific policy overlays (e.g., EU data residency) are applied</li>
                <li>Customers see &quot;AI Flow: Standard Support Workflow (EU)&quot; and can request a human at any time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Incident Response in Security Tools</h3>
              <p className="pattern-card__intro">
                A security operations platform offers an &quot;Incident Management – AI Triage & Escalation&quot; template where an AI agent triages alerts, groups related events, and drafts incident summaries.
              </p>
              <ul className="pattern-card__list">
                <li>High-severity or low-confidence cases automatically request human review</li>
                <li>Policies restrict the agent from directly closing incidents or altering critical configurations</li>
                <li>Analysts see badges indicating cases were triaged under the &quot;Verified Incident Management&quot; workflow</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Sales Optimization in CRM Systems</h3>
              <p className="pattern-card__intro">
                A CRM vendor provides a &quot;Sales Outreach – AI Draft & AB Test&quot; template where an AI agent drafts outreach emails based on account data and product usage.
              </p>
              <ul className="pattern-card__list">
                <li>A policy ensures AI-generated content is always reviewed by a sales rep before sending</li>
                <li>Sensitive fields (pricing, discounts) are not modified by AI</li>
                <li>Reps see &quot;Workflow Source: Optimized Outreach Template – Feedback Loop Active&quot; in the UI</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Export in Compliance-Heavy Applications</h3>
              <p className="pattern-card__intro">
                A compliance platform offers a &quot;Data Export Requests – Compliant Flow&quot; template where AI helps classify requests, locate relevant data, and draft responses.
              </p>
              <ul className="pattern-card__list">
                <li>Policies enforce identity verification and apply region-specific rules (GDPR, CCPA, etc.)</li>
                <li>Human approval is required before any data leaves the system</li>
                <li>End-users see &quot;Process: Compliant Export Workflow – Track Status&quot; with clear progress indication</li>
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
                This pattern connects with several other AI trust patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Fleet-Level AI Runbooks & Playbooks</h3>
              <p className="pattern-card__intro">
                Codified procedures for recurring AI-assisted operations that templates can implement.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Guardrail & Policy Management</h3>
              <p className="pattern-card__intro">
                Centralized definition of AI safety, data, and content policies that templates reference.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Inline Scope & Capability Disclosure</h3>
              <p className="pattern-card__intro">
                Chat-level UI patterns that explain what an AI agent can do, under which workflow, and with what guardrails.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">HITL Review Interfaces</h3>
              <p className="pattern-card__intro">
                Specialized views for humans to approve, reject, or modify AI actions embedded inside template-driven flows.
              </p>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Template Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Templates include clear names, descriptions, workflow definitions, and policy bindings.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Risk levels and HITL requirements are visible as first-class metadata.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Discovery & Browsing</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Library offers filters for use case, role, industry, risk level, and region.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Recommended templates are clearly marked and prioritized.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Customization & Deployment</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Guided flows help users clone, customize, and deploy templates safely.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Simulation mode is available for testing before production activation.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Versioning</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Approval workflows are enforced for higher-risk templates.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Version history and changelogs are maintained for all templates.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Runtime Disclosure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>End-users see clear indicators of which workflow is active and its key properties.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Controls for pausing automation and requesting human intervention are available.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Library is fully navigable via keyboard and screen readers.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Risk levels use both visual and text indicators, not color alone.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
