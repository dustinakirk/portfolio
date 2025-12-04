import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const CONTEXT_REPOSITORY_SEO = {
  title: "Context Repository & Profile Store - AI Trust Pattern",
  description: "A centralized, user-managed store for long-lived context—such as roles, goals, preferences, constraints, and examples—that AI agents can safely and consistently reuse across sessions, agents, and tools.",
  keywords: ["AI context", "profile store", "AI memory", "AI personalization", "AI trust", "context management", "agentic UX", "AI preferences", "long-term context"],
  canonicalPath: "/agentic_ai_patterns/context-repository-and-profile-store"
};

// Placeholder demo component
function ContextRepositoryDemo() {
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      backgroundColor: '#fafafa',
    },
    placeholderIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      backgroundColor: '#e0e7ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
    },
    placeholderText: {
      fontSize: '1rem',
      color: '#6b7280',
      textAlign: 'center',
      maxWidth: '400px',
    },
    placeholderSubtext: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      marginTop: '8px',
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Context Repository demo">
      <div style={styles.demoHeader}>
        <h2 style={styles.demoTitle}>Example: Context Repository & Profile Store</h2>
        <p style={styles.demoDescription}>
          This example demonstrates a centralized context management interface where users can define, organize, and control long-lived context that AI agents reference across sessions.
        </p>
      </div>
      <div style={styles.placeholderContent}>
        <div style={styles.placeholderIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <p style={styles.placeholderText}>
          Interactive demo coming soon
        </p>
        <p style={styles.placeholderSubtext}>
          This space will feature an interactive context repository with editable profile sections, goal management, and preference controls.
        </p>
      </div>
    </div>
  );
}

export default function ContextRepositoryPattern() {
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
            <span className="pattern-header__index">8.4</span>
            <div>
              <h1 className="pattern-header__title">Context Repository & Profile Store</h1>
              <p className="pattern-header__subtitle">
                A centralized, user-managed store for long-lived context—such as roles, goals, preferences, constraints, and examples—that AI agents can safely and consistently reuse across sessions, agents, and tools.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.4" patternTitle="Context Repository & Profile Store" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              A Context Repository & Profile Store is a dedicated, structured space where long-term context for AI interactions is defined, maintained, and governed. Instead of burying critical details in scattered chat transcripts or opaque model memory, this pattern creates an explicit "source of truth" that agents can draw from to personalize behavior over time.
            </p>
            <p className="pattern-body">
              In typical B2B and B2C web applications, the repository appears as a profile-like surface: sections for role and background, goals and OKRs, preferences and style, constraints and policies, and artifacts such as templates or brand guidelines. AI agents reference this information when responding, planning, or executing tasks, and clearly indicate when it is in use.
            </p>
            <p className="pattern-body">
              This separation of persistent context from transient conversation history improves trust and reliability. Users gain clarity about <span className="pattern-body--bold">what</span> the system knows, <span className="pattern-body--bold">where</span> it came from, and <span className="pattern-body--bold">how</span> it is applied. Teams gain consistency across agents and collaborators. Product teams gain a governed, extensible layer that can evolve independently of any one model or UI.
            </p>
            <p className="pattern-body">
              A design example embedded into a product page could show:
            </p>
            <ul className="pattern-list">
              <li>An <span className="pattern-body--bold">"AI Context" button</span> in the global header that opens a side panel</li>
              <li>Tabs for <span className="pattern-body--bold">Profile</span> (e.g., "Head of Product · B2B SaaS · 40-person team"), <span className="pattern-body--bold">Goals & OKRs</span>, <span className="pattern-body--bold">Preferences</span>, <span className="pattern-body--bold">Constraints</span>, and <span className="pattern-body--bold">Artifacts</span></li>
              <li>Small chips like <span className="pattern-body--bold">"Uses: Goals · Preferences"</span> under AI responses, with hover actions to reveal and edit referenced items</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Context repository example">
          <ContextRepositoryDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a dedicated context repository, AI systems typically rely on transient chat history, ad hoc user settings, or opaque internal memory mechanisms. This leads to several trust- and productivity-killing issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Repeated re-briefing</span> – Users repeatedly restate role, goals, preferences, and constraints across sessions, agents, and devices, creating frustration and wasted effort.
              </li>
              <li>
                <span className="pattern-body--bold">Opaque and uncontrollable memory</span> – Systems infer long-term "facts" from conversations in ways that are invisible and hard to correct, making the assistant feel unpredictable or invasive.
              </li>
              <li>
                <span className="pattern-body--bold">Fragmented personalization</span> – Each agent or feature stores its own local settings or "memory," resulting in inconsistent behavior and conflicting interpretations of the same user or organization.
              </li>
              <li>
                <span className="pattern-body--bold">Staleness and drift</span> – Old goals, deprecated policies, or changed preferences continue to influence responses because there is no clear mechanism to update or retire them.
              </li>
              <li>
                <span className="pattern-body--bold">Team misalignment</span> – In multi-user workspaces, key shared context (brand guidelines, voice, compliance rules) is not consistently applied across agents or across users.
              </li>
            </ul>
            <p className="pattern-body">
              A Context Repository & Profile Store addresses these problems by making long-lived context explicit, structured, and user-managed, while integrating it seamlessly into conversations and agent workflows.
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
                  <span className="pattern-body--bold">AI agents need to support ongoing, multi-session work</span> – long-running projects, campaigns, product development, or recurring reporting cycles.
                </li>
                <li>
                  <span className="pattern-body--bold">Multiple agents, tools, or workflows need access to the same context</span> – research agent, writing agent, analytics agent all referencing the same user profile.
                </li>
                <li>
                  <span className="pattern-body--bold">The domain involves significant personalization</span> – role, preferences, goals, constraints that would otherwise require repeated explanation.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-tenant or multi-user environments</span> – shared context (brand, policies, vocabulary, objectives) must be consistently enforced across a workspace.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulatory, legal, or reputational risk requires explicit control</span> – auditability over what AI systems "know" about individuals or organizations.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The experience is <span className="pattern-body--bold">single-shot or low-stakes</span> – anonymous marketing-site chatbots or simple FAQ support.</li>
                <li>The product has <span className="pattern-body--bold">minimal personalization needs</span> – a small number of simple settings (language, theme) already cover required customization.</li>
                <li>The system primarily operates on <span className="pattern-body--bold">fully structured system-of-record data</span> (e.g., CRM or ERP) where long-term context is already modeled.</li>
                <li>The AI interaction surface is <span className="pattern-body--bold">highly transient</span> – single lightweight tool embedded in a larger workflow where long-term continuity is not expected.</li>
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
                The Context Repository & Profile Store typically lives as a distinct surface that agents, tools, and conversations can reference. It behaves like a hybrid of a profile page, knowledge base, and control center for AI memory.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Global Navigation
              </h3>
              <p className="pattern-card__intro">
                "Context," "AI Profile," or "AI Memory" section in the main navigation.
              </p>
              <ul className="pattern-card__list">
                <li>Treated as a first-class area similar to "Profile," "Team," or "Billing"</li>
                <li>Account menu or workspace settings entry point</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent-Side Entry</h3>
              <p className="pattern-card__intro">
                A "Context" tab or button within the agent sidebar or chat panel.
              </p>
              <ul className="pattern-card__list">
                <li>Inline link in AI settings modal: "Manage long-term context"</li>
                <li>Direct access from agent configuration surfaces</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry from Chat</h3>
              <p className="pattern-card__intro">
                Inline links near system messages referencing context.
              </p>
              <ul className="pattern-card__list">
                <li>"Drawing from saved goals" → "View / Edit in Context"</li>
                <li>One-click actions: "Save this as a preference," "Promote to workspace context"</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Search and Command Palette</h3>
              <p className="pattern-card__intro">
                Quick access via search or keyboard shortcuts.
              </p>
              <ul className="pattern-card__list">
                <li>Searching for "context," "goals," or "preferences" jumps directly to relevant sections</li>
                <li>Command palette integration for power users</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Context Item</h3>
            <p className="pattern-card__intro">
              The primary object in this pattern is a context item: a structured piece of persistent information that agents can read and apply.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>"Role," "Brand voice," "Q3 growth objective," "PII policy"</li>
                  <li>Short, human-readable titles for quick scanning</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Category / Section</p>
                <ul className="pattern-card__list">
                  <li><em>Personal Profile</em> (role, team, skills, seniority)</li>
                  <li><em>Goals & Objectives</em> (OKRs, milestones, time-bound targets)</li>
                  <li><em>Preferences & Styles</em> (tone, formatting, verbosity)</li>
                  <li><em>Constraints & Policies</em> (budgets, compliance, red lines)</li>
                  <li><em>Artifacts & Examples</em> (templates, example outputs, docs)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Scope</p>
                <ul className="pattern-card__list">
                  <li><strong>Personal</strong> – applies only to the individual user</li>
                  <li><strong>Project</strong> – applies within a specific project</li>
                  <li><strong>Workspace/Team</strong> – shared across team members</li>
                  <li><strong>Organization</strong> – enterprise-wide policies</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><strong>Edit</strong> – modify the content or definition</li>
                  <li><strong>Disable for AI</strong> – temporarily exclude from agent use</li>
                  <li><strong>Change scope</strong> – promote or demote visibility</li>
                  <li><strong>View history</strong> – see previous versions</li>
                  <li><strong>Delete</strong> or <strong>Clone to…</strong></li>
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
                The lifecycle of a context repository spans from initial setup through ongoing maintenance and eventual cleanup.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Empty or Lightweight State</h3>
              <ul className="pattern-card__list">
                <li>New accounts start with minimal default profile (e.g., role from signup form)</li>
                <li>Empty-state message explains what the repository is and how it influences AI behavior</li>
                <li>Emphasis on user control and scope</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Onboarding and Import</h3>
              <ul className="pattern-card__list">
                <li>Guided setup flow prompts for high-value items: role, key goals, preferred output formats</li>
                <li>Optional imports from existing data (HR system, design system, planning tools)</li>
                <li>Opt-in choices with clear labels for AI-used items</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Ongoing Creation and Editing</h3>
              <ul className="pattern-card__list">
                <li>Add or refine context items using structured forms</li>
                <li>Inline validations help keep items specific and testable</li>
                <li>Version history allows rolling back to prior definitions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. In-Chat Capture and Promotion</h3>
              <ul className="pattern-card__list">
                <li>System detects candidate facts, goals, preferences during conversations</li>
                <li>Non-intrusive actions: "Save as preference" or "Add to Constraints"</li>
                <li>Promotion always requires explicit confirmation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Context Retrieval and Application</h3>
              <ul className="pattern-card__list">
                <li>Agent fetches relevant context based on scope, agent type, and task</li>
                <li>Simple indicators: chips, icons, or "Using: [Brand voice] · [Q3 OKR]"</li>
                <li>Link or affordance to inspect or edit context without leaving flow</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Feedback and Correction</h3>
              <ul className="pattern-card__list">
                <li>Mark underlying context as outdated, incorrect, or not applicable</li>
                <li>Repository records signal and suggests edits or disables item</li>
                <li>Short feedback loop from response to context adjustment</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Review, Expiration, and Maintenance</h3>
              <ul className="pattern-card__list">
                <li>Time-bound items tagged with period or expiry dates</li>
                <li>Periodic prompts: "Last quarter's goals expired; update or archive?"</li>
                <li>Maintenance tools: filters, bulk actions, recommendations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Deletion and Export</h3>
              <ul className="pattern-card__list">
                <li>Each context item can be deleted or disabled with clear explanation</li>
                <li>Workspace-level controls for bulk export and deletion</li>
                <li>Compliance and data residency support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Details & Best Practices */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation details & best practices</p>
              <p className="pattern-body pattern-body--narrow">
                Key considerations for building an effective context repository that users will actually adopt and maintain.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Dedicated Repository Interface</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Profile-like structure:</span> Organize into intuitive sections ("Profile," "Goals," "Preferences," "Policies," "Artifacts")</li>
                <li><span className="pattern-body--bold">Clear distinction from chat history:</span> Label as <em>persistent, structured context</em> vs temporary conversation</li>
                <li><span className="pattern-body--bold">Consistent access patterns:</span> Accessible from global navigation, settings, and within AI surfaces</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured and Flexible Editing Tools</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Hybrid input controls:</span> Structured inputs where precision matters, free-form text for complex concepts</li>
                <li><span className="pattern-body--bold">Versioning and history:</span> Track changes for high-impact items with accessible history view</li>
                <li><span className="pattern-body--bold">Collaboration controls:</span> Define who can create, edit, approve, or delete context items</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Usage Transparency and In-Chat Integration</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Per-item usage metadata:</span> "Last used by: Reporting Agent · Yesterday"</li>
                <li><span className="pattern-body--bold">Context chips and inline explanations:</span> Attach indicators to AI responses with hover/click details</li>
                <li><span className="pattern-body--bold">Onboarding and education:</span> Tooltips, empty states, and sample items to explain value</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">UX & Accessibility</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Clarity over cleverness:</span> Plain language labels ("Goals," "Preferences") over abstract terminology</li>
                <li><span className="pattern-body--bold">Responsive and accessible design:</span> Keyboard navigation, screen readers, high-contrast modes</li>
                <li><span className="pattern-body--bold">Error prevention:</span> Warn when storing data types that shouldn't live in AI context</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & governance considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Critical considerations for enterprise deployments and regulated environments.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Scoping and Access Control</h3>
              <ul className="pattern-card__list">
                <li>Align scopes (personal, project, workspace, org) with existing role-based access controls</li>
                <li>Ensure only authorized roles can modify organization-level context</li>
                <li>Personal context not unintentionally shared</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Classification</h3>
              <ul className="pattern-card__list">
                <li>Items carry classification labels: "Public," "Internal," "Confidential," "Restricted"</li>
                <li>Labels control agent availability and conditions</li>
                <li>Prevent sensitive data leakage across scopes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Default Behaviors</h3>
              <ul className="pattern-card__list">
                <li>Default to minimal, privacy-preserving context collection</li>
                <li>Explicit opt-in for persistent memory features</li>
                <li>"AI context disabled" as a clear, reachable state</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Retention and Deletion</h3>
              <ul className="pattern-card__list">
                <li>Respect global data retention policies</li>
                <li>Clear controls to delete, export, or transfer context items</li>
                <li>Avoid coupling deletion of context with conversation history unless necessary</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Auditability and Logging</h3>
              <ul className="pattern-card__list">
                <li>Maintain logs when AI agents access specific classes of context</li>
                <li>Summarized audit trails for admins in regulated environments</li>
                <li>Support compliance and incident investigation requirements</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Approval Workflows</h3>
              <ul className="pattern-card__list">
                <li>Consider approval workflows for sensitive items</li>
                <li>Legal policies, regulated data usage rules require sign-off</li>
                <li>Multi-step review for org-wide context changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How Context Repository & Profile Store applies across different professional contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Long-Term Planning Support</h3>
              <p className="pattern-card__intro">Individual Contributor</p>
              <p className="pattern-card__label">Repository contents</p>
              <ul className="pattern-card__list">
                <li>Role, seniority, current responsibilities</li>
                <li>Quarterly OKRs and metrics</li>
                <li>Team size and scope of ownership</li>
              </ul>
              <p className="pattern-card__label">Agent behavior</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Automatically pulls context when designing career plans</li>
                <li>Explains which items are being referenced</li>
                <li>Updates plan when goals are adjusted in-place</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Team Alignment on Brand and Content</h3>
              <p className="pattern-card__intro">Marketing Team</p>
              <p className="pattern-card__label">Repository contents</p>
              <ul className="pattern-card__list">
                <li>Shared "Brand Voice" and "Target Audiences"</li>
                <li>"Approved Messaging Pillars"</li>
                <li>Workspace-level definitions</li>
              </ul>
              <p className="pattern-card__label">Agent behavior</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>All content agents reference these shared items</li>
                <li>Updates happen once, flow to all agents automatically</li>
                <li>Reduces inconsistent outputs and review cycles</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Session Personalization for Reporting</h3>
              <p className="pattern-card__intro">Data Analyst</p>
              <p className="pattern-card__label">Repository contents</p>
              <ul className="pattern-card__list">
                <li>Preferred "Executive report template" artifact</li>
                <li>Preferences: "default time horizon: last 90 days"</li>
                <li>"Prioritize conversion metrics," "include one-slide summary"</li>
              </ul>
              <p className="pattern-card__label">Agent behavior</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Applies saved template and preferences by default</li>
                <li>Allows per-request overrides</li>
                <li>Consistent structure across reporting cycles</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Policy-Aware Customer Support Tools</h3>
              <p className="pattern-card__intro">Support Organization</p>
              <p className="pattern-card__label">Repository contents</p>
              <ul className="pattern-card__list">
                <li>"Never share internal ticket IDs with customers"</li>
                <li>"Mask emails and phone numbers in public replies"</li>
                <li>"Escalation thresholds by severity"</li>
              </ul>
              <p className="pattern-card__label">Agent behavior</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>References policies when drafting responses, summaries, macros</li>
                <li>Policy updates take effect immediately for subsequent agent actions</li>
                <li>Consistent enforcement across support agents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Success Signals */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & success signals</p>
              <p className="pattern-body pattern-body--narrow">
                Key indicators to evaluate the effectiveness of a Context Repository & Profile Store in production.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Reduction in Repeated Context Statements</h3>
              <ul className="pattern-card__list">
                <li>Frequency with which users restate role, goals, preferences over time</li>
                <li>Comparison of context re-briefing before and after repository adoption</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Repository Engagement</h3>
              <ul className="pattern-card__list">
                <li>Number of active context items per user or workspace</li>
                <li>Edit frequency (healthy maintenance vs abandonment)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Context Utilization</h3>
              <ul className="pattern-card__list">
                <li>Percentage of AI interactions where at least one context item is referenced</li>
                <li>Segmented by category (profile, goals, preferences, etc.)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Correction and Override Events</h3>
              <ul className="pattern-card__list">
                <li>Rate at which users disable, correct, or downgrade context items</li>
                <li>Indicates drift or misinterpretation requiring adjustment</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Satisfaction and Trust</h3>
              <ul className="pattern-card__list">
                <li>Survey responses on perceived personalization and control</li>
                <li>Qualitative feedback on consistency of AI behavior</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Efficiency Improvements</h3>
              <ul className="pattern-card__list">
                <li>Time-to-completion for recurring tasks (reports, drafts)</li>
                <li>Number of iterations before and after repository adoption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Failure modes & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Common pitfalls that undermine the effectiveness of context repositories.
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
                  <h3 className="antipattern-title">Hidden or Auto-Learned Context</h3>
                  <p className="antipattern-subtitle">System silently infers and stores long-term "facts."</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing the system to silently infer and store long-term facts without surfacing them in the repository or offering correction paths creates unpredictable behavior and erodes trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always surface inferred context with explicit confirmation before storing.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overloaded or Noisy Repository</h3>
                  <p className="antipattern-subtitle">Repository becomes a dumping ground for semi-relevant snippets.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Treating the repository as a catch-all dumping ground for semi-relevant snippets degrades retrieval quality and user understanding, making the repository less useful over time.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide guidance on what belongs in the repository and regular cleanup prompts.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ambiguous Scoping</h3>
                  <p className="antipattern-subtitle">Boundaries between personal, project, workspace, and org context are unclear.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Blurring the boundaries between personal, project, workspace, and org-level context causes unintended sharing or surprising cross-team effects that damage trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Clear scope labels on every item and explicit confirmation when changing scope.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Stale Goals and Policies</h3>
                  <p className="antipattern-subtitle">Outdated information continues to influence AI responses.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Failing to set review cadences or expiry for time-bound items leads to plans or outputs based on outdated information, reducing the relevance and accuracy of AI responses.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Tag time-bound items with expiry dates and prompt for review when periods end.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Encouraging Storage of Sensitive Secrets</h3>
                  <p className="antipattern-subtitle">Repository accepts passwords, tokens, or highly sensitive PII.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing passwords, tokens, or highly sensitive PII into the repository instead of directing such data to appropriate secure systems creates security vulnerabilities.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Detect and block sensitive data types, redirecting to secure credential managers.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Non-Explainable Application of Context</h3>
                  <p className="antipattern-subtitle">Repository items used behind the scenes with no UI indication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using repository items behind the scenes without any indication in the UI undermines user ability to debug or trust agent behavior, making personalization feel opaque.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show which context items are being applied with inline indicators and links.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Patterns that complement or extend Context Repository & Profile Store.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">8.1 Memory Inspector & History Controls</h3>
              <p className="pattern-body">
                Focuses on inspecting and managing what agents have retained from conversations and prior activity. Often linked directly from context usage indicators.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">8.2 Persona Settings & AI Behavior Profiles</h3>
              <p className="pattern-body">
                Governs how agents behave (tone, decision style, level of autonomy). Persona settings frequently consume context items defined in the repository.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">8.3 Privacy Controls & Data Scoping</h3>
              <p className="pattern-body">
                Provides global switches and per-scope settings for what data AI systems can access or retain, including repository items.
              </p>
            </div>

            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title">2.4 Teach Me Interfaces</h3>
              <p className="pattern-body">
                Turns user corrections into persistent, inspectable rules. Often feeds into the Context Repository as a source of learned preferences and policies.
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
              <p className="pattern-checklist-category__title">Repository Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the repository organized into clear, intuitive sections (Profile, Goals, Preferences, etc.)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clearly distinguished from chat history and transient memory?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Scoping and Access</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the scope (personal, project, workspace, org) clearly indicated for every item?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are scope changes explicit and require confirmation?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Transparency and Attribution</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When AI uses context, is it clearly indicated in the response?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily navigate from usage indicators to edit the underlying context?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Lifecycle and Maintenance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are time-bound items tagged with expiry dates?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system prompt for review when goals or policies are likely outdated?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily disable, edit, or delete any context item?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear option to disable AI context entirely?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Privacy and Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system prevent storage of sensitive secrets (passwords, tokens)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there audit logging for when agents access context items?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
