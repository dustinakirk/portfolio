import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const USER_PREFERENCE_CONTEXT_PROFILES_SEO = {
  title: "User Preference & Context Profiles - AI Trust Pattern",
  description: "A persistent, user-controlled 'about me' profile that captures goals, background, working style, and constraints, applied across agents and sessions so every interaction feels tailored, consistent, and respectful of the user's intent and boundaries.",
  keywords: ["AI personalization", "user profiles", "AI preferences", "context profiles", "AI trust", "multi-agent personalization", "user goals", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/user-preference-context-profiles"
};

// Interactive demo component - Placeholder for User Preference & Context Profiles
function UserPreferenceProfilesDemo() {
  return (
    <div className="pattern-example--placeholder" role="region" aria-label="User Preference & Context Profiles demo placeholder">
      <p>Interactive demo coming soon</p>
      <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--gray-400)' }}>
        This space will contain an interactive demonstration of User Preference & Context Profiles.
      </p>
    </div>
  );
}

export default function UserPreferenceContextProfilesPattern() {
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
            <span className="pattern-header__index">8.5</span>
            <div>
              <h1 className="pattern-header__title">User Preference & Context Profiles</h1>
              <p className="pattern-header__subtitle">
                A persistent, user-controlled &quot;about me&quot; profile that captures goals, background, working style, and constraints, applied across agents and sessions.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.5" patternTitle="User Preference & Context Profiles" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              User Preference & Context Profiles define <strong>who the user is</strong>, <strong>what they&apos;re trying to achieve</strong>, and <strong>how they like to work</strong>—separate from how any specific AI agent behaves.
            </p>
            <p className="pattern-body">
              Where 8.2 &quot;Preference & Persona Settings&quot; focuses on <span className="pattern-body--bold">agent personas</span> (&quot;How should this AI act?&quot;), this pattern focuses on the <span className="pattern-body--bold">user-side profile</span> (&quot;Who am I, what do I care about, and how should AI adapt to me?&quot;).
            </p>
            <p className="pattern-body">
              In a multi-agent, chat-based ecosystem, each interaction becomes:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Agent Persona (8.2)</span></li>
              <li><span className="pattern-body--bold">User Preference & Context Profile (8.5)</span></li>
              <li>Task / Conversation Instructions</li>
              <li>Memory / History (8.1)</li>
            </ul>
            <p className="pattern-body">
              When implemented well, User Preference & Context Profiles:
            </p>
            <ul className="pattern-list">
              <li>Prevent repetitive &quot;Let me tell you about myself&quot; prompts.</li>
              <li>Make personalization feel <span className="pattern-body--bold">explicit and controllable</span>, not mysterious.</li>
              <li>Allow a <span className="pattern-body--bold">team of agents</span> to share a common understanding of the user.</li>
              <li>Improve trust by making it clear what is remembered, how, and where it&apos;s applied.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="User Preference & Context Profiles example">
          <UserPreferenceProfilesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without an explicit, user-controlled preference & context profile:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Users repeat the same biography and preferences</span> – &quot;I&apos;m a staff engineer… I know X, but not Y… I prefer concise answers…&quot; across every chat, agent, or session. This is tedious and error-prone.
              </li>
              <li>
                <span className="pattern-body--bold">Personalization feels opaque or creepy</span> – Systems infer preferences from behavior and apply them silently. When the AI &quot;just knows things&quot; about the user, but there&apos;s no clear surface to inspect or edit, trust erodes.
              </li>
              <li>
                <span className="pattern-body--bold">Multi-agent experiences become fragmented</span> – Different agents (e.g., a code assistant vs. a meeting assistant) each ask for the same basics, or behave as if the user is a beginner in one place and an expert in another.
              </li>
              <li>
                <span className="pattern-body--bold">User goals are lost between sessions</span> – The AI optimizes for one-off answers instead of a user&apos;s ongoing goals (&quot;help me become better at X over the next quarter,&quot; &quot;help me manage my time constraints&quot;).
              </li>
            </ul>
            <p className="pattern-body">
              This pattern addresses these issues by creating a <span className="pattern-body--bold">first-class, inspectable profile</span> that agents consult and that users can control, override, or delete.
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
                  The product includes <span className="pattern-body--bold">one or more AI agents</span> that users return to regularly (daily/weekly).
                </li>
                <li>
                  The system supports <span className="pattern-body--bold">multiple roles or skill levels</span> (novices and experts, ICs and leaders).
                </li>
                <li>
                  The product crosses <span className="pattern-body--bold">multiple surfaces or tools</span> (web app, IDE, inbox, analytics, etc.).
                </li>
                <li>
                  Users have <span className="pattern-body--bold">stable, long-lived goals</span> (e.g., &quot;grow my sales pipeline,&quot; &quot;learn product analytics,&quot; &quot;refactor legacy codebase&quot;).
                </li>
                <li>
                  You want to give users a clear way to understand and shape how &quot;personalization&quot; works.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI is <span className="pattern-body--bold">single-use or anonymous</span>, with no login or persistent state.</li>
                <li>Tasks are <span className="pattern-body--bold">highly constrained and role-agnostic</span> (e.g., &quot;paste log, get error explanation&quot;).</li>
                <li>The product already asks for necessary context <span className="pattern-body--bold">inline per task</span> and does not benefit from long-term memory.</li>
                <li>Organizational or regulatory requirements <span className="pattern-body--bold">forbid</span> storing user-level preferences beyond a session.</li>
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
                User Preference & Context Profiles revolve around a durable, user-owned configuration object that can be referenced by any agent in the system.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Global &quot;My AI Profile&quot; Entry Point
              </h3>
              <p className="pattern-card__intro">
                In account or profile settings under &quot;AI & Personalization&quot; or &quot;About Me.&quot;
              </p>
              <ul className="pattern-card__list">
                <li>Often surfaced alongside general preferences (language, notifications)</li>
                <li>Central hub for all AI personalization settings</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">In-Chat Access</h3>
              <p className="pattern-card__intro">
                An &quot;About you&quot; chip or icon in the chat header.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Using your AI profile.&quot; Clicking opens a side panel to inspect or edit.</li>
                <li>Inline banner on first use: &quot;This agent will use your AI Profile (role, goals, preferences). [Review] [Turn off].&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Triggers</h3>
              <p className="pattern-card__intro">
                Proactive prompts based on user behavior.
              </p>
              <ul className="pattern-card__list">
                <li>After repeated self-description: &quot;You&apos;ve described your role and preferences a few times. Save this as part of your AI Profile?&quot;</li>
                <li>When adding a new agent: &quot;Share your existing AI Profile with this new assistant?&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Admin / Settings Entry</h3>
              <p className="pattern-card__intro">
                Deep integration with account management.
              </p>
              <ul className="pattern-card__list">
                <li>Available in personal settings for individual users</li>
                <li>Workspace-aware fields for team context when applicable</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: AI Profile</h3>
            <p className="pattern-card__intro">
              The primary object is the User Preference & Context Profile (often just &quot;AI Profile&quot; in the UI).
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Identity & Role</p>
                <ul className="pattern-card__list">
                  <li>Title, level, domain (&quot;Principal Designer in B2B SaaS&quot;)</li>
                  <li>Optional: multiple role contexts (&quot;As a manager,&quot; &quot;As an IC&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Goals</p>
                <ul className="pattern-card__list">
                  <li>Near-term goals (e.g., &quot;ship redesign by Q2&quot;)</li>
                  <li>Ongoing goals (&quot;improve SQL skills,&quot; &quot;reduce time spent on reports&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Knowledge & Skill Assumptions</p>
                <ul className="pattern-card__list">
                  <li>Self-rated proficiency: &quot;Product analytics: advanced&quot;</li>
                  <li>&quot;Explain new concepts with analogies&quot; or &quot;Skip basics unless I ask&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Working Style & Format</p>
                <ul className="pattern-card__list">
                  <li>Preferred detail level, structure, and pacing</li>
                  <li>Preferred formats (tables, diagrams, code samples, bullet points)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Constraints & Boundaries</p>
                <ul className="pattern-card__list">
                  <li>Time constraints (&quot;Assume I have limited time&quot;)</li>
                  <li>Budget thresholds, geographic or regulatory constraints</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Edit / configure (opens full profile)</li>
                  <li>&quot;Apply my profile to this agent&quot; / &quot;Pause my profile for this conversation&quot;</li>
                  <li>Optional: multiple profiles (Work, Personal, Learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Builder: What to Capture */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Profile builder: What to capture</p>
              <p className="pattern-body pattern-body--narrow">
                A robust, user-centered profile builder should focus on few, high-signal dimensions, avoiding overwhelming questionnaires.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Identity & Role</h3>
              <ul className="pattern-card__list">
                <li>Title, team, domain</li>
                <li>Optional multiple &quot;hats&quot;: &quot;I sometimes use this as a manager&quot; vs. &quot;as an individual contributor&quot;</li>
                <li>Use to calibrate vocabulary and choose relevant examples</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Goals & Outcomes</h3>
              <ul className="pattern-card__list">
                <li>&quot;What should AI help you achieve?&quot;</li>
                <li>Task goals: &quot;Draft better emails,&quot; &quot;Summarize meetings&quot;</li>
                <li>Development goals: &quot;Improve storytelling,&quot; &quot;Learn advanced analytics&quot;</li>
                <li>Prioritize: &quot;Optimize for: speed / quality / learning&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Knowledge & Skill Levels</h3>
              <ul className="pattern-card__list">
                <li>Self-ratings for relevant domains (AI/ML, SQL, product analytics)</li>
                <li>&quot;Explain concepts like I&apos;m new&quot; or &quot;Assume deep expertise but flag gaps&quot;</li>
                <li>Adjust explanation depth and avoid condescending responses</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Working Style & Format</h3>
              <ul className="pattern-card__list">
                <li>Detail level: &quot;Short summaries first&quot; vs. &quot;Deep, step-by-step explanations&quot;</li>
                <li>Preferred structures: bullets, tables, diagrams, code blocks</li>
                <li>&quot;Start by asking clarifying questions&quot; or &quot;Propose a plan before executing&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Constraints & Guardrails</h3>
              <ul className="pattern-card__list">
                <li>Time, budget, and risk preferences</li>
                <li>&quot;I usually have 10–15 minutes&quot;</li>
                <li>&quot;Avoid suggesting third-party tools unless necessary&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Tools, Stacks & Ecosystem</h3>
              <ul className="pattern-card__list">
                <li>Primary tools (Jira, GitHub, Figma, Notion)</li>
                <li>Tech stack (React, Python, Salesforce)</li>
                <li>&quot;Prefer generating Jira tickets over long email threads&quot;</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Accessibility & Communication</h3>
            <ul className="pattern-card__list">
              <li>Language & locale preferences</li>
              <li>Reading preferences: &quot;Short paragraphs,&quot; &quot;Use headings,&quot; &quot;Highlight key actions&quot;</li>
              <li>Neurodiversity / cognitive support (if user opts to share): &quot;Avoid metaphor-heavy explanations,&quot; &quot;Provide clear, numbered steps&quot;</li>
            </ul>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The lifecycle of a User Preference & Context Profile spans from first discovery to ongoing refinement.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Default State</h3>
              <ul className="pattern-card__list">
                <li>New users start with no profile or a minimal skeleton (name, language)</li>
                <li>System behaves sensibly without profile, but prompts to create one after detecting repeated patterns</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Initial Setup / Creation</h3>
              <ul className="pattern-card__list">
                <li>Introduced at a relevant moment (after 3+ chats or first time using multiple agents)</li>
                <li>Light, skippable questions: &quot;What&apos;s your role?&quot; &quot;What are you mainly trying to accomplish?&quot;</li>
                <li>Presets with quick choices: &quot;beginner / intermediate / advanced&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Profile Application</h3>
              <ul className="pattern-card__list">
                <li>When active, profile is automatically merged into each agent&apos;s configuration</li>
                <li>Chat UI shows indicator: &quot;Using your AI Profile: [Role], [Goal], [Style]&quot;</li>
                <li>Agents may selectively use only relevant fields</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Overrides & Ad-Hoc Instructions</h3>
              <ul className="pattern-card__list">
                <li>&quot;Ignore my usual settings; treat me as a beginner on this topic&quot;</li>
                <li>Checkbox or quick action: &quot;Temporarily disable AI Profile for this thread&quot;</li>
                <li>Task instructions take precedence: &quot;task instructions &gt; profile defaults&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Cross-Agent Propagation</h3>
              <ul className="pattern-card__list">
                <li>By default, all agents in the same workspace share the same user profile</li>
                <li>User can opt out for particular agents</li>
                <li>Differences per agent clearly explained: &quot;This agent uses your profile plus additional domain assumptions&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Review, Refinement & Nudges</h3>
              <ul className="pattern-card__list">
                <li>Periodic prompts: &quot;It seems you&apos;re comfortable with advanced topics now. Update your expertise level?&quot;</li>
                <li>&quot;You often ask for more detail—change your default detail level?&quot;</li>
                <li>Edits reflected immediately and visible across agents</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Archival & Deletion</h3>
            <ul className="pattern-card__list">
              <li>Clear specific sections (goals, tools) without deleting the entire profile</li>
              <li>Temporarily pause use of their profile</li>
              <li>Permanently delete their profile, with clear explanation: &quot;Agents will stop personalizing based on your past settings&quot;</li>
            </ul>
          </div>
        </section>

        {/* Integration with AI Ecosystem */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Integration with the AI ecosystem</p>
              <p className="pattern-body pattern-body--narrow">
                How User Preference & Context Profiles compose with other patterns and systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Composition with Personas (8.2)</h3>
              <p className="pattern-card__intro">
                The runtime configuration for any interaction:
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Org guardrails & policies</span> (non-negotiable safety/compliance)</li>
                <li><span className="pattern-body--bold">Agent Persona (8.2)</span> – &quot;How does this agent normally behave?&quot;</li>
                <li><span className="pattern-body--bold">User Preference & Context Profile (8.5)</span> – &quot;Who is this user?&quot;</li>
                <li><span className="pattern-body--bold">Conversation-specific instructions</span> – &quot;For this task, do X&quot;</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem' }}>
                The UI should show both agent persona and user profile are in play, allowing quick inspection.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Interaction with Memory (8.1)</h3>
              <p className="pattern-card__intro">
                Profile ≠ Memory of specific events:
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Profile:</span> stable, user-curated facts (&quot;I&apos;m a designer,&quot; &quot;I like concise answers&quot;)</li>
                <li><span className="pattern-body--bold">Memory:</span> derived/past interactions (&quot;We discussed Feature A yesterday&quot;)</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem' }}>
                Provide distinct surfaces: &quot;My AI Profile&quot; for stable preferences and &quot;Memory & History&quot; for past conversations. Users can change profile facts without editing history, and vice versa.
              </p>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Scope & Inheritance</h3>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Per-User Global Profile</p>
                <ul className="pattern-card__list">
                  <li>Default profile applied across all agents</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Filtered Agent Views</p>
                <ul className="pattern-card__list">
                  <li>Meeting assistant ignores tooling preferences but uses goals and working style</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Workspace-Specific Goals</p>
                <ul className="pattern-card__list">
                  <li>&quot;Within this product team, I&apos;m focused on X&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Control Indicators */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Transparency & control indicators</p>
              <p className="pattern-body pattern-body--narrow">
                How to make profile usage visible and controllable in the UI.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">In-Chat Indicator</h3>
              <ul className="pattern-card__list">
                <li>Chip or text near conversation header: &quot;Personalized using your AI Profile&quot;</li>
                <li>Clicking reveals: which fields were used (Role, Goals, Detail preference) and how they influence the response</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Disclosure on Sensitive Use</h3>
              <ul className="pattern-card__list">
                <li>When a sensitive field impacts behavior, surface that</li>
                <li>&quot;Using your accessibility preferences to simplify this explanation&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Immediate Opt-Out</h3>
              <ul className="pattern-card__list">
                <li>Per-conversation toggle: &quot;Pause personalization from my profile for this thread&quot;</li>
                <li>Global setting: &quot;Disable AI Profile across all agents&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Usage Explanations</h3>
              <ul className="pattern-card__list">
                <li>Clear language on: What is stored, where it is stored</li>
                <li>How it is (not) used for training beyond this product</li>
                <li>How to export or delete it</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Presets & templates</p>
            <p className="pattern-body">
              Templates help users get started quickly without facing a blank page.
            </p>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Role-Based Profile Starters</h3>
                <ul className="pattern-card__list">
                  <li>&quot;Product Manager starting out&quot;</li>
                  <li>&quot;Senior Engineer&quot;</li>
                  <li>&quot;Customer Support Agent&quot;</li>
                  <li>&quot;Student/Intern&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Goal-Based Templates</h3>
                <ul className="pattern-card__list">
                  <li>&quot;Improve my skills&quot;</li>
                  <li>&quot;Automate repetitive tasks&quot;</li>
                  <li>&quot;Make better decisions with data&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Workspace-Aware Templates
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>When joining a workspace, suggest profile fields based on others in similar roles</li>
                  <li>Without exposing their private data</li>
                  <li>All templates: clearly framed as starting points, easily editable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How User Preference & Context Profiles apply across different scenarios.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent &quot;Team of Assistants&quot;</h3>
              <p className="pattern-card__intro">Enterprise AI Suite</p>
              <ul className="pattern-card__list">
                <li>User sets: Role: Principal Product Designer, Goals: &quot;Ship better specs faster&quot;</li>
                <li>Working style: &quot;Start with options; prefer visuals and tables&quot;</li>
                <li>Design assistant, analytics assistant, and meeting assistant all use this profile</li>
                <li>User doesn&apos;t need to repeat who they are to each new agent</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Learning & Upskilling Companion</h3>
              <p className="pattern-card__intro">Educational Platform</p>
              <ul className="pattern-card__list">
                <li>Goal: &quot;Become proficient in SQL within 3 months&quot;</li>
                <li>Skill level: &quot;Beginner&quot;</li>
                <li>Working style: &quot;Use lots of small practice exercises and analogies&quot;</li>
                <li>AI introduces relevant examples, tracks progress, gradually increases difficulty</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility-Aware Experience</h3>
              <p className="pattern-card__intro">Inclusive Design</p>
              <ul className="pattern-card__list">
                <li>Plain language, step-by-step breakdowns</li>
                <li>Short paragraphs and strong headings</li>
                <li>Reduced reliance on color in visual explanations</li>
                <li>When new agent added, user confirms with single click for consistent accessibility</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Work vs. Personal Contexts</h3>
              <p className="pattern-card__intro">Multiple Profile Scenarios</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Work profile:</span> Senior engineer, corporate tools, specific work goals</li>
                <li><span className="pattern-body--bold">Personal profile:</span> Parent planning family trips, personal learning goals</li>
                <li>Agents clearly show which profile is active to avoid cross-contamination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Compliance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & compliance</p>
              <p className="pattern-body pattern-body--narrow">
                Critical considerations for handling user profile data responsibly.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Minimization</h3>
              <ul className="pattern-card__list">
                <li>Only ask for what you need to genuinely improve the experience</li>
                <li>Make sensitive fields optional and clearly marked</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Consent and Control</h3>
              <ul className="pattern-card__list">
                <li>Always let users see which data is stored</li>
                <li>Edit or delete it</li>
                <li>Decide whether each agent can access it</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Access Boundaries</h3>
              <ul className="pattern-card__list">
                <li>Profiles are per-user and not shared across accounts</li>
                <li>In multi-tenant systems, respect tenant boundaries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Separation from Other Data</h3>
              <ul className="pattern-card__list">
                <li>Store profile configuration separately from conversational logs</li>
                <li>Profile data not inadvertently exposed via logs, exports, or APIs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regulatory Alignment</h3>
              <ul className="pattern-card__list">
                <li>Be careful with protected attributes (health, religion, demographics)</li>
                <li>If users share such info for accessibility, treat as highly sensitive</li>
                <li>Provide explicit handling and deletion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations can unintentionally undermine trust in User Preference & Context Profiles.
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
                  <h3 className="antipattern-title">Over-Asking Up Front</h3>
                  <p className="antipattern-subtitle">Long, mandatory questionnaires before value is demonstrated.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Requiring users to fill out extensive profiles before they&apos;ve experienced any value will cause drop-off and distrust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Start with minimal info, introduce profile creation after users see value.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Shadow Profiles</h3>
                  <p className="antipattern-subtitle">Inferring deep profiles behind the scenes without surfacing them.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Applying personalization from hidden sources or building profiles users cannot see or edit erodes trust and feels &quot;creepy.&quot;
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make all personalization sources visible and editable by the user.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Irrevocable Inferences</h3>
                  <p className="antipattern-subtitle">Treating early or mistaken self-assessments as truth forever.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Never revisiting early assumptions like &quot;You said you were a beginner&quot; leads to frustrating, stuck experiences.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Prompt users to revise and update their profile as they grow.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Profile Misuse</h3>
                  <p className="antipattern-subtitle">Using profile info beyond expected uses without consent.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using profile information for targeting, scoring, or decisions unrelated to user-visible personalization breaks trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Be explicit about data use and only use profiles for stated purposes.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Agents Silently Ignoring Profile</h3>
                  <p className="antipattern-subtitle">Claiming to use the profile but responses clearly don&apos;t reflect it.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If the system claims to use the profile but responses clearly don&apos;t reflect it, trust quickly erodes.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure profile settings genuinely influence agent behavior and show when they do.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Confusing Profiles with Access Control</h3>
                  <p className="antipattern-subtitle">Using profile fields as the only basis for permissions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using profile fields (like job title) as the only basis for permissions instead of proper roles and policies creates security and UX issues.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep permissions and access control separate from personalization profiles.</span>
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
                Key considerations for UX, product, and engineering teams.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">UX & Product</h3>
              <ul className="pattern-card__list">
                <li>Start with <span className="pattern-body--bold">small, high-impact fields:</span> Role, goal, detail level, and expertise are often enough</li>
                <li>Introduce the profile <span className="pattern-body--bold">when it helps</span>, not at signup</li>
                <li>Use <span className="pattern-body--bold">examples and previews:</span> Show &quot;Before vs. After&quot; when changing preferences</li>
                <li>Separate &quot;Profile&quot; from &quot;Memory&quot; in the UI: Different entry points, different mental models</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Engineering & System Design</h3>
              <ul className="pattern-card__list">
                <li>Represent the profile as a <span className="pattern-body--bold">structured object</span>, not just raw text (role, goals, expertise, format_preferences)</li>
                <li>Build a <span className="pattern-body--bold">composition layer</span> that merges: org guardrails + agent persona + user profile + task instructions</li>
                <li>Implement <span className="pattern-body--bold">field-level access control:</span> Some agents may only read certain fields</li>
                <li>Log <span className="pattern-body--bold">identifiers, not raw profile content</span> when possible for analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                To assess the effectiveness of User Preference & Context Profiles, teams can track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption</h3>
              <ul className="pattern-card__list">
                <li>% of active users with a completed profile</li>
                <li>Fields filled vs. skipped</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Friction Reduction</h3>
              <ul className="pattern-card__list">
                <li>Reduction in prompts containing repetitive self-description</li>
                <li>Decrease in &quot;explain my role/skill&quot; statements over time</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Survey items like &quot;The AI understands my goals and working style&quot;</li>
                <li>Higher task satisfaction for users with active profiles</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality & Alignment</h3>
              <ul className="pattern-card__list">
                <li>Fewer complaints about tone mismatch or miscalibrated explanations</li>
                <li>Increased success rates for multi-step tasks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance & Safety</h3>
              <ul className="pattern-card__list">
                <li>Incidents involving misused or exposed profile data</li>
                <li>Time-to-remediation for profile deletion and corrections</li>
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
              <p className="pattern-checklist-category__title">Profile Visibility & Access</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear, dedicated surface for users to view and edit their AI Profile?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do agents clearly indicate when they are using the user&apos;s profile, and which parts?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily pause or disable profile-based personalization per conversation or globally?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are profile fields minimal, high-signal, and clearly optional where sensitive?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">System Design</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the composition of org guardrails, agent persona, user profile, and task instructions deterministic?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are profile data and conversation history separated and governed differently?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Data Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users update, export, and delete their profile, with predictable downstream effects?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are analytics and logging designed to respect privacy (using profile IDs rather than full content)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Trust & Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do you have safeguards against hidden or shadow profiling?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the profile genuinely influence agent behavior as promised?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
