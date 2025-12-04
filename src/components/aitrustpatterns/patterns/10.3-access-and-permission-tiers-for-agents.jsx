import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const ACCESS_PERMISSION_TIERS_SEO = {
  title: "Access & Permission Tiers for Agents - AI Trust Pattern",
  description: "A structured way to define, assign, and expose granular permission tiers for AI agents so that agent behavior remains aligned with organizational roles, environments, and risk thresholds.",
  keywords: ["AI permissions", "agent tiers", "AI governance", "permission levels", "AI trust", "agent access control", "AI security", "agentic UX", "enterprise AI", "role-based AI"],
  canonicalPath: "/agentic_ai_patterns/access-permission-tiers"
};

// Interactive demo component - Placeholder
function AccessPermissionTiersDemo() {
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
    },
    demoHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#f9fafb',
    },
    demoTitle: {
      margin: '0 0 8px 0',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#111827',
    },
    demoDescription: {
      margin: 0,
      color: '#6b7280',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    placeholderContent: {
      padding: '48px 24px',
      textAlign: 'center',
      backgroundColor: '#f9fafb',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
    },
    placeholderIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '12px',
      backgroundColor: '#e0e7ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4f46e5',
      fontSize: '24px',
    },
    placeholderText: {
      color: '#6b7280',
      fontSize: '1rem',
      maxWidth: '400px',
      lineHeight: 1.6,
    },
    placeholderLabel: {
      color: '#9ca3af',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Access & Permission Tiers demo">
      <div style={styles.demoHeader}>
        <h2 style={styles.demoTitle}>Example: Agent Permission Tiers</h2>
        <p style={styles.demoDescription}>
          This example would demonstrate an admin interface for managing AI agent permission tiers across environments,
          showing tier assignment, permission matrices, and environment-specific controls.
        </p>
      </div>
      <div style={styles.placeholderContent}>
        <div style={styles.placeholderLabel}>Interactive Demo</div>
        <div style={styles.placeholderIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <p style={styles.placeholderText}>
          An interactive demonstration of agent permission tier management would appear here,
          showing how administrators can view and configure agent access levels across different environments.
        </p>
      </div>
    </div>
  );
}

export default function AccessPermissionTiersPattern() {
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
            <span className="pattern-header__index">10.3</span>
            <div>
              <h1 className="pattern-header__title">Access & Permission Tiers for Agents</h1>
              <p className="pattern-header__subtitle">
                A structured way to define, assign, and expose granular permission tiers for AI agents so that agent behavior remains aligned with organizational roles, environments, and risk thresholds.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="10.3" patternTitle="Access & Permission Tiers for Agents" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Access and permission tiers for agents provide a standardized, fleet-wide approach to limiting what AI agents can see and do.
            </p>
            <p className="pattern-body">
              Instead of each agent having bespoke, opaque permissions, this pattern groups capabilities into clearly defined tiers (for example, Viewer, Editor, Executor, Admin, or Supervised Executor) and applies those tiers consistently across agents, environments, and tenants.
            </p>
            <p className="pattern-body">
              This pattern typically appears in:
            </p>
            <ul className="pattern-list">
              <li>Admin or workspace settings as part of &quot;AI Governance,&quot; &quot;Security,&quot; or &quot;Agent Management.&quot;</li>
              <li>Agent configuration flows in builder tools, orchestration studios, or workflow designers.</li>
              <li>In-app conversations where an agent explains what it is allowed to do before performing actions on behalf of an end-user.</li>
            </ul>
            <p className="pattern-body">
              The core idea is to align agent privileges with existing identity and access management (IAM) constructs, apply least-privilege by default, and make the agent&apos;s effective capabilities observable to both administrators and end-users. When implemented well, this pattern reduces security and compliance risk while increasing trust in autonomous or semi-autonomous AI behavior.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Access & Permission Tiers example">
          <AccessPermissionTiersDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a structured permission tiering model, AI agents accumulate ad-hoc, inconsistent access. This creates both risk and confusion for administrators and end-users:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque capabilities</span> – Agents may read or change data without any visible indication of what they are allowed to access or modify, leading to anxiety and hesitation around adoption.
              </li>
              <li>
                <span className="pattern-body--bold">Over-privileged agents</span> – Agents may have broad write or execute permissions (for example, sending messages, updating records, or triggering deployments) that far exceed what is needed, increasing the likelihood of security incidents or compliance violations.
              </li>
              <li>
                <span className="pattern-body--bold">Under-privileged or misaligned behavior</span> – Conversely, agents may lack critical permissions, silently fail, or repeatedly request actions that cannot be executed, resulting in frustration and mistrust.
              </li>
              <li>
                <span className="pattern-body--bold">No fleet-level control</span> – Administrators lack a centralized view of agent capabilities across environments, departments, or tenants, making it hard to enforce policies, respond to audits, or perform risk reviews.
              </li>
              <li>
                <span className="pattern-body--bold">Inconsistent enforcement across environments</span> – Staging, QA, and production may have mismatched configurations, causing unexpected behavior when agents are promoted or deployed.
              </li>
            </ul>
            <p className="pattern-body">
              These issues make it difficult for organizations to trust agentic systems, especially in domains involving sensitive data, financial transactions, or regulated workflows. A permission tier pattern addresses this by standardizing capabilities, tying them to risk-aware tiers, and surfacing them in a consistent, understandable way.
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
                  Agentic features operate on <span className="pattern-body--bold">real customer or business data</span> (for example, CRM, telemetry, billing, HR, healthcare data) rather than synthetic or demo content.
                </li>
                <li>
                  Agents can perform <span className="pattern-body--bold">state-changing actions</span> such as editing records, triggering workflows, provisioning infrastructure, sending communications, processing payments, or approving changes.
                </li>
                <li>
                  The system supports <span className="pattern-body--bold">multiple environments</span> (sandbox, staging, production) where the same agent should behave differently depending on context.
                </li>
                <li>
                  The product operates in <span className="pattern-body--bold">regulated or high-risk domains</span>, such as finance, healthcare, security, or infrastructure management, where access control and auditability are required.
                </li>
                <li>
                  The product has <span className="pattern-body--bold">multi-tenant or enterprise deployments</span> where administrators must enforce organization-wide policies, segment permissions by business unit, and demonstrate control to auditors.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent only provides <span className="pattern-body--bold">read-only, generic assistance</span> over non-sensitive data (for example, documentation Q&A with no user-specific context).</li>
                <li>There is a <span className="pattern-body--bold">single, low-risk agent</span> with no external integrations and no ability to change system state, where a simple on/off toggle or single &quot;can edit data&quot; setting is sufficient.</li>
                <li>The experience is <span className="pattern-body--bold">local-only or purely experimental</span> (for example, a personal playground or prototype) where complex role-based controls create friction without meaningful safety benefits.</li>
                <li>Existing IAM and UI already make the agent&apos;s single capability <span className="pattern-body--bold">obvious and trivial</span> (for example, &quot;Generate draft text in this text area&quot; with no downstream action).</li>
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
                This pattern centers on a fleet-level governance view combined with per-agent detail views and inline conversational disclosures. It connects three layers:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Tier Definitions</h3>
              <p className="pattern-card__intro">
                A global set of permission tiers that describe bundles of capabilities.
              </p>
              <ul className="pattern-card__list">
                <li>What resources can be read or modified</li>
                <li>What actions can be executed</li>
                <li>Risk classification for each tier</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Agent Assignments</h3>
              <p className="pattern-card__intro">
                The mapping from each agent to a tier per environment, tenant, or scope.
              </p>
              <ul className="pattern-card__list">
                <li>Environment-specific tier assignments</li>
                <li>Tenant or workspace scoping</li>
                <li>Override and inheritance rules</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Runtime Enforcement & Disclosure</h3>
              <p className="pattern-card__intro">
                The behavior of agents at run time.
              </p>
              <ul className="pattern-card__list">
                <li>Which actions are allowed</li>
                <li>How escalations are handled</li>
                <li>How permissions are explained in the interface</li>
              </ul>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Admin / Governance
              </h3>
              <p className="pattern-card__intro">
                Central agent management in admin or workspace settings.
              </p>
              <ul className="pattern-card__list">
                <li>An &quot;Agents,&quot; &quot;AI Governance,&quot; or &quot;Access Control&quot; section in admin settings</li>
                <li>Lists all agents across the organization with columns for tier, environment, owner, and risk level</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Agent Configuration / Builder Tools</h3>
              <p className="pattern-card__intro">
                Permission selection during agent creation and configuration.
              </p>
              <ul className="pattern-card__list">
                <li>A step in an agent creation or configuration flow where the creator selects a permission tier</li>
                <li>Permission matrices or scope selectors exposed when connecting data sources and tools</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Runtime & Notifications</h3>
              <p className="pattern-card__intro">
                Inline disclosures during agent interactions.
              </p>
              <ul className="pattern-card__list">
                <li>Inline messages in chat indicating the agent&apos;s current tier and abilities</li>
                <li>Inline links or banners when an agent is blocked from performing an action</li>
                <li>System notifications highlighting tier changes or unusual permission escalations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Core Object: Agent Access Profile</h3>
              <p className="pattern-card__intro">
                The agent&apos;s effective permissions in a given context.
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Label:</span> Short tier name like &quot;Viewer,&quot; &quot;Editor,&quot; &quot;Executor&quot;</li>
                <li><span className="pattern-body--bold">Description:</span> Plain-language explanation of capabilities</li>
                <li><span className="pattern-body--bold">Controls:</span> Tier selector, permission matrix, simulate/clone actions</li>
                <li><span className="pattern-body--bold">Metadata:</span> Environment tags, risk score, owner, review dates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Default Tiers */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Default tier definitions</p>
              <p className="pattern-body pattern-body--narrow">
                The system ships with a small, opinionated set of default tiers based on least privilege.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Viewer</h3>
              <ul className="pattern-card__list">
                <li>Read-only access to approved resources</li>
                <li>No side effects</li>
                <li>Lowest risk tier</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Editor</h3>
              <ul className="pattern-card__list">
                <li>Can modify specific resources within defined limits</li>
                <li>All changes are logged</li>
                <li>Medium risk tier</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Executor</h3>
              <ul className="pattern-card__list">
                <li>Can invoke operational actions (workflows, deployments, notifications)</li>
                <li>Has side effects</li>
                <li>Higher risk tier</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin</h3>
              <ul className="pattern-card__list">
                <li>Can configure other agents</li>
                <li>Can manage data or tools</li>
                <li>Reserved for system operators</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Supervised Executor</h3>
              <ul className="pattern-card__list">
                <li>Can propose and prepare actions</li>
                <li>Requires explicit human approval before execution</li>
                <li>Human-in-the-loop tier</li>
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
                The lifecycle of permission tier management spans from initial defaults through ongoing monitoring and eventual decommissioning.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Defaults & Tier Definitions</h3>
              <ul className="pattern-card__list">
                <li>System ships with default tiers based on least privilege</li>
                <li>Each tier is defined as a bundle of granular capabilities: data scopes, API scopes, tool access, and action types</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Agent Creation & Tier Assignment</h3>
              <ul className="pattern-card__list">
                <li>System prompts the creator to choose a tier with sensible defaults based on agent type</li>
                <li>UI explains trade-offs and may recommend safer options for production</li>
                <li>Tier assignment can differ per environment</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Environment- and Role-Aware Enforcement</h3>
              <ul className="pattern-card__list">
                <li>System resolves effective permissions based on org policies, environment, user role, and agent tier</li>
                <li>Agent receives access tokens corresponding to the intersection of all constraints</li>
                <li>Blocked actions are explained rather than failing silently</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. User-Facing Disclosure & Control</h3>
              <ul className="pattern-card__list">
                <li>End-users see concise summaries of agent abilities in relevant contexts</li>
                <li>High-impact operations include inline clarifications</li>
                <li>End-users may limit the agent further or request higher tiers through approval workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Supervision, Escalation, and Approvals</h3>
              <ul className="pattern-card__list">
                <li>For supervised tiers, agents prepare changes but execution is gated behind human approval</li>
                <li>Proposed actions delivered as actionable items with Approve/Modify/Reject controls</li>
                <li>Approvals are logged with approver identity, time, and justification</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Monitoring, Auditing, and Change Management</h3>
              <ul className="pattern-card__list">
                <li>Every use of a privileged action is logged with agent identity, tier, environment, and result</li>
                <li>Tier changes and policy overrides are tracked with before/after diffs</li>
                <li>Administrators can filter and export logs for compliance</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Simulation, Safety Testing, and Review</h3>
              <ul className="pattern-card__list">
                <li>Administrators can run simulations before applying new tiers</li>
                <li>System highlights high-risk changes (e.g., granting write access in production)</li>
                <li>Scheduled reviews prompt owners to confirm tiers still match intended scope</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Decommissioning and Cleanup</h3>
              <ul className="pattern-card__list">
                <li>When agents are deprecated, tokens and credentials are revoked</li>
                <li>Access profiles are archived for audit purposes</li>
                <li>Associated logs and configuration snapshots remain accessible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for implementing access and permission tiers effectively.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Role-Based Tiers & Capability Scopes</h3>
              <ul className="pattern-card__list">
                <li>Start from <span className="pattern-body--bold">least privilege</span>, granting only capabilities required for the agent&apos;s core tasks</li>
                <li>Model tiers as bundles of lower-level scopes (e.g., &quot;read:analytics,&quot; &quot;write:dashboards&quot;)</li>
                <li>Consider specialized tiers like <span className="pattern-body--bold">Supervised Executor</span> or <span className="pattern-body--bold">Time-bounded access</span></li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Environment-Specific Permissions</h3>
              <ul className="pattern-card__list">
                <li>Treat environments as <span className="pattern-body--bold">first-class dimensions</span> in the permission model</li>
                <li>Default to stronger restrictions in production</li>
                <li>Surface environment differences clearly in the UI</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration with IAM</h3>
              <ul className="pattern-card__list">
                <li>Integrate with existing IAM systems (SSO, OAuth, enterprise IdPs)</li>
                <li>Agent tiers cannot exceed the privileges of the human roles that invoke them</li>
                <li>Effective Permissions = Org Policy ∩ Environment Policy ∩ Human Role ∩ Agent Tier</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">UI Design & Usability</h3>
              <ul className="pattern-card__list">
                <li>Use clear labels and icons to differentiate tiers and risk levels</li>
                <li>Provide tooltips with concrete examples rather than generic language</li>
                <li>Support search, filtering, and bulk actions in tables and matrices</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Auditability, Logs, and Rollback</h3>
              <ul className="pattern-card__list">
                <li>Maintain a <span className="pattern-body--bold">change history</span> for tier assignments, approvals, and overrides</li>
                <li>Offer rollback or &quot;restore previous configuration&quot; capabilities</li>
                <li>Support export of logs for external compliance systems</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Control and Trust-Building</h3>
              <ul className="pattern-card__list">
                <li>Provide a lightweight way for end-users to see what agents are allowed to do</li>
                <li>Offer session-level controls to temporarily disable certain tools or data sources</li>
                <li>Provide clear flows for requesting elevated tiers with approval routing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How access and permission tiers apply across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Handling in Analytics Dashboards</h3>
              <p className="pattern-card__intro">Business Intelligence Platform</p>
              <ul className="pattern-card__list">
                <li>In <span className="pattern-body--bold">production</span>: Agent operates as a <span className="pattern-body--bold">Viewer</span>—reads datasets, flags anomalies, suggests changes with preview diffs</li>
                <li>In <span className="pattern-body--bold">staging</span>: Same agent is an <span className="pattern-body--bold">Executor</span>—can apply changes automatically to test transformations</li>
                <li>Administrators use fleet-level view to confirm no analytics agent has unsupervised write access in production</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security in Collaboration Applications</h3>
              <p className="pattern-card__intro">File-Sharing Platform</p>
              <ul className="pattern-card__list">
                <li>Within internal workspaces: Agent operates as an <span className="pattern-body--bold">Editor</span>—can adjust sharing settings for approved domains</li>
                <li>For external contexts: Agent restricted to <span className="pattern-body--bold">Viewer</span>—can suggest but not change permissions</li>
                <li>Administrators can bulk review all file-related agents to ensure no external sharing in high-risk groups</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Compliance in Healthcare Portals</h3>
              <p className="pattern-card__intro">Healthcare Platform</p>
              <ul className="pattern-card__list">
                <li>Agents interacting with patient records are <span className="pattern-body--bold">Supervised Executors</span></li>
                <li>Any operation writing to patient records requires explicit clinician approval</li>
                <li>Patients see clear indication: &quot;This assistant can view records but cannot change clinical information.&quot;</li>
                <li>Audit trails demonstrate all write operations were approved by licensed clinicians</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Development Workflows in DevOps</h3>
              <p className="pattern-card__intro">IDE & CI/CD Platform</p>
              <ul className="pattern-card__list">
                <li>In personal sandboxes: Assistant is an <span className="pattern-body--bold">Executor</span>—generates code, commits changes, runs tests</li>
                <li>In shared repositories: Downgraded to <span className="pattern-body--bold">Editor</span>—proposes PRs but cannot merge</li>
                <li>Deployment agent is <span className="pattern-body--bold">Supervised Executor</span> in production, requiring on-call approval</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases, risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Common pitfalls that can undermine permission tier implementations.
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
                  <h3 className="antipattern-title">Agent Permissions Exceeding Human Permissions</h3>
                  <p className="antipattern-subtitle">Agent gains broader access than the human initiating actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                An agent gains broader access than the human initiating actions, allowing privilege escalation. This violates the principle that agents should never have more capabilities than their invoking users.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Compute effective permissions as the intersection of human rights, agent tier, and environment policies; never grant more than the human&apos;s own access.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Denials and Confusing Failures</h3>
                  <p className="antipattern-subtitle">Agent repeatedly declines to act without explaining permissions are the cause.</p>
                </div>
              </div>
              <p className="antipattern-description">
                The agent repeatedly declines to act or responds with vague errors without explaining that permissions are the cause. Users become frustrated and lose trust in the system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide explicit, non-sensitive explanations in responses and link to a &quot;Capabilities&quot; or &quot;Permissions&quot; panel for further detail.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Excessive Tiers or Overly Complex Matrices</h3>
                  <p className="antipattern-subtitle">Too many tiers overwhelm administrators.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Administrators become overwhelmed with too many tier options, leading to misconfigurations or overuse of high-power tiers &quot;just to make things work.&quot;
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep tier sets small and stable; use scoped capabilities within tiers rather than multiplying tiers unnecessarily.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unlogged Manual Overrides</h3>
                  <p className="antipattern-subtitle">Emergency overrides granted without audit trails.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Emergency overrides or one-off escalations are granted without audit trails, creating blind spots and compliance risks.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Require justification and logging for all overrides, and ensure that temporary elevations automatically expire.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation & success metrics</p>
              <p className="pattern-body pattern-body--narrow">
                Key indicators that this pattern is functioning effectively.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Compliance</h3>
              <ul className="pattern-card__list">
                <li>Reduction in security or compliance incidents attributed to agent behavior</li>
                <li>Improved audit outcomes with clear role-to-tier-to-behavior mapping</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Clarity</h3>
              <ul className="pattern-card__list">
                <li>High completeness rates for allowed operations</li>
                <li>Clear categorization of blocked operations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Decrease in support tickets about agents &quot;doing unexpected things&quot; or &quot;not allowed to do anything useful&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption</h3>
              <ul className="pattern-card__list">
                <li>Increased adoption and usage of agentic features in high-risk environments</li>
                <li>Administrators confident that permissions are transparent and controllable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related / complementary patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Patterns that work well alongside Access & Permission Tiers.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Action Confirmation & Human-in-the-Loop Gates</h3>
              <p className="pattern-card__intro">
                Patterns that govern how agents ask for confirmation before executing high-impact actions.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Change Previews & Dry Runs</h3>
              <p className="pattern-card__intro">
                Patterns that let agents show proposed changes (diffs, plans, simulations) before committing them.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Audit Trails & Explainable History</h3>
              <p className="pattern-card__intro">
                Patterns that surface readable histories of agent actions, rationale, and approvals.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">Capability Disclosure in Chat</h3>
              <p className="pattern-card__intro">
                Patterns for informing end-users about what an agent can see and do at the moment of interaction.
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
              <p className="pattern-checklist-category__title">Tier Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are permission tiers clearly named and intuitively understandable?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can administrators quickly understand what each tier allows and prohibits?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Least Privilege</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do agents default to the lowest necessary tier for their function?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is tier escalation an explicit, auditable action?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Environment Awareness</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can the same agent have different tiers across sandbox, staging, and production?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the current environment and tier visible during agent interactions?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Failure Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When an agent lacks permission, is the reason clearly communicated?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are users guided to appropriate escalation or approval workflows?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all tier assignments and changes logged with actor and timestamp?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can reviewers trace any agent action back to its permission tier at that time?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Fleet Management</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a centralized view of all agents and their permission tiers?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can administrators perform bulk tier adjustments when policies change?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
