import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';
import UserPreferenceContextProfilesDemo from '../demos/UserPreferenceContextProfilesDemo';

// SEO metadata for this pattern page
export const USER_PREFERENCE_CONTEXT_PROFILES_SEO = {
  title: "User Preference & Personal Context Profiles - AI Trust Pattern",
  description: "A persistent, user-controlled 'about me' profile that captures goals, background, working style, and constraints, applied across agents and sessions so every interaction feels tailored while respecting boundaries.",
  keywords: ["AI personalization", "user profiles", "AI preferences", "context profiles", "AI trust", "multi-agent personalization", "user goals", "agentic UX", "AI customization", "working style preferences"],
  canonicalPath: "/agentic_ai_patterns/user-preference-context-profiles"
};


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
              <h1 className="pattern-header__title">User Preference & Personal Context Profiles</h1>
              <p className="pattern-header__subtitle">
                A persistent, user-controlled &quot;about me&quot; profile that captures a person&apos;s goals, background, working style, and constraints, and applies them across agents and sessions so every interaction feels tailored while respecting boundaries.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="8.5" patternTitle="User Preference & Personal Context Profiles" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              User Preference & Personal Context Profiles define how an AI system understands and collaborates with an individual across time, tasks, and agents.
            </p>
            <p className="pattern-body">
              Instead of treating each session as a blank slate, the system maintains a structured, human-readable profile that represents:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Who this person is</span> – role, expertise, tools</li>
              <li><span className="pattern-body--bold">What this person is trying to accomplish</span> – goals, time horizon</li>
              <li><span className="pattern-body--bold">How this person prefers to work</span> – formats, level of detail, autonomy level</li>
              <li><span className="pattern-body--bold">Where boundaries exist</span> – topics, data, autopilot comfort</li>
            </ul>
            <p className="pattern-body">
              In B2B and B2C web applications, this pattern typically appears as:
            </p>
            <ul className="pattern-list">
              <li>A dedicated <span className="pattern-body--bold">&quot;My AI Profile&quot;</span> or <span className="pattern-body--bold">&quot;Personalization&quot;</span> area in account settings</li>
              <li>Inline references and chips in AI chat or agent workspaces (e.g., &quot;Using: Work Profile · Prefers visuals&quot;)</li>
              <li>Subtle but consistent behavior adjustments across agents (writing style, pacing, assumptions, risk posture)</li>
            </ul>
            <p className="pattern-body">
              By centralizing context in a user-controlled profile, the system avoids repeated intake questions, reduces friction, and makes AI outputs feel more relevant, while maintaining transparency and consent around data use.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="User Preference Context Profiles example">
          <UserPreferenceContextProfilesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a persistent, user-controlled context profile, AI systems often:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Require repeated restatement.</span> Users must restate role, goals, and preferences in every new chat or agent interaction.
              </li>
              <li>
                <span className="pattern-body--bold">Make brittle assumptions.</span> The system makes incorrect assumptions based on a single conversation, leading to inappropriate tone, depth, or recommendations.
              </li>
              <li>
                <span className="pattern-body--bold">Personalize silently.</span> There is no clear indication of what information is stored, how it is used, or how it can be corrected or deleted.
              </li>
            </ul>
            <p className="pattern-body">
              This results in:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Friction</span> – repeated setup questions, long prompts, and inconsistent onboarding per agent.</li>
              <li><span className="pattern-body--bold">Mistrust</span> – uncertainty about what the system &quot;remembers,&quot; and whether sensitive details are being stored without consent.</li>
              <li><span className="pattern-body--bold">Low leverage</span> – missed opportunities to reuse high-signal user context across tools and workflows.</li>
            </ul>
            <p className="pattern-body">
              A structured preference and context profile pattern addresses these issues by making personalization <span className="pattern-body--bold">visible, interpretable, and controllable</span>.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>AI agents are used <span className="pattern-body--bold">regularly over time</span>, and benefit from remembering stable characteristics (role, tools, working style).</li>
                <li>The product offers <span className="pattern-body--bold">multiple agents or AI surfaces</span> (e.g., analytics copilot, writing assistant, meeting summarizer) that all operate on behalf of the same person.</li>
                <li>The domain involves <span className="pattern-body--bold">complex tasks or specialized roles</span> (e.g., design, engineering, finance, health, legal) where assumptions about expertise and risk tolerance materially affect output.</li>
                <li>The system needs to <span className="pattern-body--bold">respect strict constraints or boundaries</span>, such as accessibility needs, data sensitivity, or topics that should be avoided.</li>
                <li>Regulatory, compliance, or enterprise stakeholders require <span className="pattern-body--bold">clear explanations</span> of what is personalized, why, and how it is governed.</li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI is used <span className="pattern-body--bold">rarely</span> or for single, one-off tasks where lasting personalization has minimal benefit (e.g., simple FAQ bot for a small marketing site).</li>
                <li>The product scope is narrow and <span className="pattern-body--bold">personalization is already fully captured</span> by basic account fields (e.g., language and region only).</li>
                <li>The system deals exclusively with <span className="pattern-body--bold">non-personal or non-sensitive</span> information where inferred preferences are trivial.</li>
                <li>The AI&apos;s value is primarily transactional (e.g., ticket routing) and does not require <span className="pattern-body--bold">ongoing collaboration</span> or tailored communication style.</li>
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
                This pattern revolves around a central object: the <span className="pattern-body--bold">User Context Profile</span>. The profile is a structured, human-readable representation of how the AI should relate to an individual across agents and sessions.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary Entry Point
              </h3>
              <ul className="pattern-card__list">
                <li>Account or workspace settings: &quot;AI & Personalization&quot;, &quot;My AI Profile&quot;, or &quot;Preferences&quot;.</li>
                <li>Often located under &quot;Profile&quot;, &quot;Account&quot;, or &quot;AI Settings&quot; in the main navigation.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary Entry Point</h3>
              <ul className="pattern-card__list">
                <li>From within AI chat or agent tooling: Inline link or chip: &quot;Using your AI Profile&quot;, &quot;Edit profile&quot;.</li>
                <li>Settings icon in the chat header or agent panel.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Entry Point</h3>
              <ul className="pattern-card__list">
                <li>Toast or inline banner when personalization is first applied or updated: &quot;Responses are now tailored using the Work Profile. Review or edit profile.&quot;</li>
                <li>Onboarding wizards that invite the user to set up a profile after repeated usage: &quot;Save these preferences so all agents can work this way.&quot;</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: User Context Profile</h3>
            <p className="pattern-card__intro">
              Represents &quot;this person and how they like to work.&quot;
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>A short, recognizable profile name, e.g.:</li>
                  <li>&quot;Work – Principal Designer&quot;</li>
                  <li>&quot;Personal – Travel & Family&quot;</li>
                  <li>&quot;Learning – SQL Beginner&quot;</li>
                  <li>Communicates <span className="pattern-body--bold">context + role</span>, not just &quot;Profile 1 / Profile 2&quot;.</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>A human-readable summary that the AI effectively treats as a meta-prompt, e.g.:</li>
                  <li>&quot;Principal IC product designer with strong technical background. Prefers concise bullet summaries first, then optional depth. Uses Figma, Jira, and Notion.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Edit / Manage: change fields such as role, goals, tools, preferred style.</li>
                  <li>Activate / Switch: set active profile (Work vs Personal vs Learning).</li>
                  <li>Apply scope: choose whether profile applies globally across all agents, to specific agents only, or to the current conversation.</li>
                  <li>Delete / Reset: remove the profile or reset to system defaults.</li>
                  <li>Export / View history (where appropriate): see what changed and when.</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Scope tags: &quot;Applies to: Analytics Copilot, Writing Assistant&quot;.</li>
                  <li>Status: &quot;Active&quot;, &quot;Inactive&quot;, &quot;Draft&quot;.</li>
                  <li>Sensitivity flags: &quot;Contains health-related preferences&quot;, &quot;Contains HR-sensitive topics&quot;.</li>
                  <li>Source: &quot;Provided by user&quot;, &quot;Inferred from activity (pending confirmation)&quot;.</li>
                  <li>Last reviewed: date last confirmed or edited.</li>
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
                A well-implemented profile pattern follows a predictable lifecycle from initial system behavior through ongoing usage and maintenance.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior (No Profile Yet)</h3>
              <ul className="pattern-card__list">
                <li>AI agents operate with <span className="pattern-body--bold">generic assumptions</span>: neutral tone, default reading level, standard explanation length.</li>
                <li>The system may ask lightweight questions in early interactions: &quot;What is the primary role?&quot; &quot;What tools are used most often?&quot;</li>
                <li>Early questions should feel <span className="pattern-body--bold">optional</span> and low-friction, not like a mandatory long form.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Profile Creation</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Explicit:</span> Dedicated setup flow with structured form capturing identity & role, goals, skill assumptions, working style, constraints & boundaries, tools & ecosystem, accessibility & communication needs.</li>
                <li><span className="pattern-body--bold">Semi-Automatic with Confirmation:</span> System proposes a draft profile based on interaction patterns and asks for review.</li>
                <li>Nothing should be stored as profile truth without a clear review and confirmation step.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Application Across Agents & Sessions</h3>
              <ul className="pattern-card__list">
                <li>Once a profile is active, new agents inherit the profile <span className="pattern-body--bold">by default</span> within the same workspace.</li>
                <li>Responses indicate personalization unobtrusively, e.g., a small note: &quot;Tailored using: Work Profile · Prefers concise bullets.&quot;</li>
                <li>The system should allow per-agent overrides and per-conversation overrides.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Profile Switching & Multiple Contexts</h3>
              <ul className="pattern-card__list">
                <li>The product supports <span className="pattern-body--bold">multiple profiles</span> for different contexts: Work vs Personal, different roles (&quot;PM hat&quot; vs &quot;Founder hat&quot;), different learning tracks.</li>
                <li>Current active profile is always visible and clear (e.g., label in chat header).</li>
                <li>Switching profiles is quick and explains impact.</li>
                <li>Agents immediately update behavior on profile switch.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Ongoing Maintenance & Skill Evolution</h3>
              <ul className="pattern-card__list">
                <li>Agents observe outcomes and feedback (e.g., content frequently marked &quot;too advanced&quot;).</li>
                <li>The system periodically prompts for <span className="pattern-body--bold">profile refresh</span>, rather than silently overwriting.</li>
                <li>Profiles support easy editing of goals and skill levels.</li>
                <li>Graceful handling of outdated or contradictory data.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Data Use Transparency & Control</h3>
              <ul className="pattern-card__list">
                <li>The product explains what kind of data is in the profile, where it came from, and how it is used.</li>
                <li>Every profile field clearly states how it influences AI behavior and whether it is required or optional.</li>
                <li>Clear actions available: &quot;Ignore profile for this answer&quot;, &quot;Pause personalization for this session&quot;, &quot;Delete my AI Profile data&quot;.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Deletion, Reset, and Offboarding</h3>
            <ul className="pattern-card__list">
              <li>Deleting a profile removes profile data and disconnects it from future inference.</li>
              <li>Clarifies what remains (e.g., underlying product data) and what is removed.</li>
              <li>Enterprise and compliance requirements may include retention periods, auditable logs of profile changes, and role-based access control.</li>
            </ul>
          </div>
        </section>

        {/* States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States</p>
              <p className="pattern-body pattern-body--narrow">
                Key states to design for:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">No Profile</h3>
              <ul className="pattern-card__list">
                <li>Generic responses; light prompt to set up an AI Profile after several interactions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Profile Draft</h3>
              <ul className="pattern-card__list">
                <li>System-suggested or partially completed profile awaiting confirmation.</li>
                <li>Clear affordance to accept, edit, or discard.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Active Profile</h3>
              <ul className="pattern-card__list">
                <li>Profile applied to all or some agents.</li>
                <li>Indicators in UI (chip, label, or badge).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multiple Profiles Available</h3>
              <ul className="pattern-card__list">
                <li>Short list of named profiles with labels and a concise description.</li>
                <li>Clear active state and quick switching affordances.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Profile Paused / Ignored</h3>
              <ul className="pattern-card__list">
                <li>Temporary override where personalization is turned off for a session or specific response.</li>
                <li>Visible reminder that the system is in &quot;generic&quot; mode.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Profile Deleted or Reset</h3>
              <ul className="pattern-card__list">
                <li>Confirmation messaging about what changes and what remains.</li>
                <li>Reversion to non-personalized defaults.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & Copy Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Content & copy guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Guidelines for naming, explaining, and communicating profile functionality.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Name the Concept Clearly</h3>
              <ul className="pattern-card__list">
                <li>Prefer terms like &quot;AI Profile&quot;, &quot;AI Preferences&quot;, or &quot;Personalization Profile&quot;.</li>
                <li>Avoid vague labels such as &quot;Settings (Advanced)&quot; for critical personalization controls.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explain Usage in Plain Language</h3>
              <ul className="pattern-card__list">
                <li>Each field should have an example: &quot;Role: e.g., &apos;Principal Product Designer working on enterprise SaaS&apos;.&quot;</li>
                <li>Clarify impact: &quot;Used to adjust tone and level of detail in explanations.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Highlight User Control</h3>
              <ul className="pattern-card__list">
                <li>Emphasize that profile contents are editable.</li>
                <li>Personalization can be paused.</li>
                <li>Data can be deleted or reset.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Overpromising</h3>
              <ul className="pattern-card__list">
                <li>Do not imply perfect understanding or long-term memory beyond what the system actually supports.</li>
                <li>Use phrases like &quot;helps tailor responses&quot; rather than &quot;the AI knows everything about the user.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Be Specific About Sensitive Dimensions</h3>
              <ul className="pattern-card__list">
                <li>If sensitive or regulated attributes are collected (health, finances, protected characteristics), clearly indicate why this is needed, how it is protected, and whether it is optional.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Profile Fields and Dimensions */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Profile fields & dimensions</p>
              <p className="pattern-body pattern-body--narrow">
                High-signal fields commonly included in user context profiles:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Identity & Role</h3>
              <ul className="pattern-card__list">
                <li>Job title, seniority, team, domain expertise.</li>
                <li>Industry or vertical, where relevant.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Goals</h3>
              <ul className="pattern-card__list">
                <li>Time-bounded goals (e.g., &quot;Ship better specs faster over the next quarter&quot;).</li>
                <li>Long-term ambitions (e.g., &quot;Grow into a product leadership role&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Skill Assumptions</h3>
              <ul className="pattern-card__list">
                <li>Self-rated levels (e.g., beginner, intermediate, expert) across:</li>
                <li>Technical skills (SQL, Python, system design).</li>
                <li>Non-technical skills (copywriting, storytelling, finance literacy).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Working Style Preferences</h3>
              <ul className="pattern-card__list">
                <li>Preferred answer form: options vs single recommendation, summary-first vs deep dive.</li>
                <li>Preferred media: visuals, diagrams, tables, or prose.</li>
                <li>Desired format: bullets, briefs, outlines, or fully fleshed documents.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Constraints & Boundaries</h3>
              <ul className="pattern-card__list">
                <li>Topics to avoid or handle cautiously (e.g., HR, legal, health, personal finance).</li>
                <li>Autopilot comfort level: Suggest-only vs permitted autonomous actions.</li>
                <li>Approval thresholds (e.g., &quot;Never send external emails without review&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tools & Ecosystem</h3>
              <ul className="pattern-card__list">
                <li>Primary tools and platforms (Figma, Sketch, Jira, Linear, Salesforce, HubSpot, Notion).</li>
                <li>Default environments, repositories, or projects.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility & Communication Needs</h3>
              <ul className="pattern-card__list">
                <li>Language and localization.</li>
                <li>Reading level or complexity preference.</li>
                <li>Pacing and chunking (short paragraphs, step-by-step instructions).</li>
                <li>Formatting needs (e.g., captioned visuals, high contrast UI preference if relevant).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application in Responses */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Application in responses</p>
              <p className="pattern-body pattern-body--narrow">
                Best practice behaviors for how profiles influence AI responses:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Shape, Don&apos;t Hard-Lock</h3>
              <ul className="pattern-card__list">
                <li>Use profile data to <span className="pattern-body--bold">shape</span>, not hard-lock, responses.</li>
                <li>Provide subtle, optional affordances: &quot;Show more detail&quot;, &quot;Show visuals instead&quot;, &quot;Simplify explanation&quot;.</li>
                <li>Logically justify behavior based on profile: for a beginner skill level, default to more explanation, but allow &quot;Skip basics&quot; when the user signals comfort.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Controls and Overrides</h3>
              <ul className="pattern-card__list">
                <li>Inline toggles next to responses: &quot;Ignore profile for this answer&quot;, &quot;Apply Work profile here&quot;.</li>
                <li>Quick settings for tone (&quot;more formal / more casual&quot;), length (&quot;shorter / longer&quot;), and complexity (&quot;simpler / deeper&quot;) that feed back into the profile where appropriate, with confirmation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & governance</p>
              <p className="pattern-body pattern-body--narrow">
                Key principles for handling user profile data responsibly:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Minimization</h3>
              <ul className="pattern-card__list">
                <li>Collect only what is necessary for personalization and clearly explain why.</li>
                <li>Avoid storing highly sensitive attributes unless essential to the product&apos;s purpose and handled under appropriate safeguards.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Consent & Control</h3>
              <ul className="pattern-card__list">
                <li>Make profile creation and personalization opt-in or clearly distinguishable from default operation.</li>
                <li>Provide easy ways to review, edit, pause, or delete profile data.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Transparency</h3>
              <ul className="pattern-card__list">
                <li>Clarify what is stored as profile data vs what is transient conversation context.</li>
                <li>Explain how profile data interacts with model memory or back-end systems.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scope & Separation</h3>
              <ul className="pattern-card__list">
                <li>Separate personal vs work profiles and individual profiles vs organizational policies or defaults.</li>
                <li>Ensure enterprise admins cannot silently override individual profile settings in ways that break trust.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Auditability</h3>
              <ul className="pattern-card__list">
                <li>For enterprise environments: Log profile changes with timestamp and actor.</li>
                <li>Provide export mechanisms where required for compliance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How User Preference & Personal Context Profiles apply across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent AI Workspace for a Principal Product Designer</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <ul className="pattern-card__list">
                <li>A principal product designer configures a <span className="pattern-body--bold">Work profile</span>:</li>
                <li>Role: &quot;Principal Product Designer, enterprise SaaS&quot;.</li>
                <li>Goals: &quot;Ship better specs faster&quot;, &quot;Improve collaboration with engineering&quot;.</li>
                <li>Working style: &quot;Start with options, then give a single recommended approach&quot;; &quot;Prefer diagrams and UI examples&quot;.</li>
                <li>Tools: Figma, Jira, Notion.</li>
              </ul>
              <p className="pattern-card__label">Effects</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The design assistant presents wireframes and component options first, then a recommended solution.</li>
                <li>The analytics copilot explains dashboards using product and UX terminology.</li>
                <li>The meeting assistant summarizes design critiques with clear action items.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Learning and Upskilling Companion</h3>
              <p className="pattern-card__intro">Education / Dev Tools</p>
              <ul className="pattern-card__list">
                <li>A learner creates a <span className="pattern-body--bold">Learning profile</span>:</li>
                <li>Goal: &quot;Learn SQL in 3 months to intermediate level.&quot;</li>
                <li>Skill: &quot;Beginner.&quot;</li>
                <li>Working style: &quot;Practice-heavy, short explanations, more examples than theory.&quot;</li>
              </ul>
              <p className="pattern-card__label">Effects</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The learning coach proposes structured weekly goals and practice exercises.</li>
                <li>The analytics copilot defaults to explaining generated SQL queries step-by-step.</li>
                <li>Every few weeks, the system asks if the learner&apos;s skill level has changed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility-Aware Experience</h3>
              <p className="pattern-card__intro">Productivity Suite</p>
              <ul className="pattern-card__list">
                <li>A user configures <span className="pattern-body--bold">Accessibility & Communication preferences</span>:</li>
                <li>Plain, non-technical language.</li>
                <li>Step-by-step breakdowns.</li>
                <li>Short paragraphs with clear headings.</li>
              </ul>
              <p className="pattern-card__label">Effects</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The writing assistant drafts content with shorter sentences and sections by default.</li>
                <li>The task planning agent presents plans as numbered lists with minimal embedded clauses.</li>
                <li>Complex topics offer &quot;Show advanced detail&quot; as optional expansion.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Work vs Personal Contexts</h3>
              <p className="pattern-card__intro">Consumer + Enterprise Blend</p>
              <ul className="pattern-card__list">
                <li>An individual uses a single account with two profiles:</li>
                <li><span className="pattern-body--bold">Work – Enterprise SaaS PM:</span> Domain: product management for B2B SaaS. Tone: moderately formal. Tools: Jira, Confluence, Salesforce.</li>
                <li><span className="pattern-body--bold">Personal – Travel & Family Planning:</span> Focus: family trips, budgeting. Tone: casual and playful.</li>
              </ul>
              <p className="pattern-card__label">Effects</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>In the main workspace, AI-generated specs assume workplace context.</li>
                <li>In a &quot;Personal&quot; space, travel itineraries are phrased informally.</li>
                <li>Context separation prevents leakage between work and personal tasks.</li>
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
                Common mistakes that undermine trust in user preference profiles.
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
                  <h3 className="antipattern-title">Silent Personalization</h3>
                  <p className="antipattern-subtitle">Applying profile-driven behavior without visible indicators or accessible explanations.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When personalization is applied silently, users cannot understand why the AI behaves a certain way and cannot correct misaligned assumptions.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Show clear indicators when personalization is being applied and explain which profile settings are influencing the response.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Collection</h3>
                  <p className="antipattern-subtitle">Asking for many detailed fields that are not clearly necessary or visibly used.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Excessive data collection creates suspicion and friction. Users question why the system needs so much information and whether it will be used appropriately.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Collect only what is necessary and clearly explain how each field will be used to improve the experience.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Uneditable or Opaque Profiles</h3>
                  <p className="antipattern-subtitle">Making it hard to see or change what the system &quot;believes&quot; about the user.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When users cannot inspect or edit their profile, they lose trust and feel that the system is making decisions about them without their input.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide clear access to view, edit, and delete all stored profile information.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Profile Lock-In</h3>
                  <p className="antipattern-subtitle">Ignoring signals that preferences have changed and never prompting for updates.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When the system ignores feedback (e.g., frequent &quot;too advanced&quot; ratings) and never prompts for profile updates, the experience becomes increasingly misaligned.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Periodically prompt users to review and update their profile based on observed feedback patterns.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Mixed Contexts</h3>
                  <p className="antipattern-subtitle">Applying work-specific preferences in personal contexts or vice versa.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Context leakage can reveal sensitive information or create inappropriate outputs when work and personal profiles are not properly separated.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Clearly separate contexts and ensure each profile only applies to its intended scope.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">One-Size-Fits-All Templates</h3>
                  <p className="antipattern-subtitle">Offering generic &quot;AI personality&quot; settings but ignoring domain-specific needs.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Generic settings that ignore tooling, autonomy levels, or accessibility requirements fail to address the specific needs of different users and domains.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Provide domain-specific profile fields that address real workflow and accessibility needs.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Diagnostics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & diagnostics</p>
              <p className="pattern-body pattern-body--narrow">
                Indicators of success for this pattern:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Engagement & Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Higher satisfaction scores for AI interactions after profile onboarding.</li>
                <li>Increased repeat usage of AI surfaces where personalization is active.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Friction Reduction</h3>
              <ul className="pattern-card__list">
                <li>Decrease in repeated user statements like &quot;As a [role]…&quot; or &quot;I prefer concise summaries&quot;.</li>
                <li>Reduction in time-to-value in new conversations or with new agents.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Correction & Override Patterns</h3>
              <ul className="pattern-card__list">
                <li>Declining frequency of corrections such as &quot;explain more simply&quot; or &quot;too much detail&quot;, indicating better alignment with preferences.</li>
                <li>Healthy use of toggles and overrides, showing that controls are discoverable and trusted.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Control</h3>
              <ul className="pattern-card__list">
                <li>Positive qualitative feedback about transparency and control over AI behavior.</li>
                <li>Low incidence of complaints regarding &quot;creepy&quot; or unexplained personalization.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-md">
            <h3 className="pattern-card__title">Diagnostic Questions</h3>
            <ul className="pattern-card__list">
              <li>Is the profile findable and understandable by non-technical users?</li>
              <li>Is it clear what is stored, what is inferred, and what is temporary conversation context?</li>
              <li>Are personalization indicators present but not overwhelming?</li>
              <li>Does personalization meaningfully change outputs in ways aligned with user goals and roles?</li>
              <li>Can users confidently correct or delete profile information at any time?</li>
            </ul>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for implementing robust user context profiles:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured Profile Schema</h3>
              <ul className="pattern-card__list">
                <li>Define a schema for identity, goals, skills, working style, constraints, tools, and accessibility.</li>
                <li>Version schema and handle migrations gracefully as new fields are added.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Clear Separation of Layers</h3>
              <ul className="pattern-card__list">
                <li>UI and UX layer: profile editing, visualization, and controls.</li>
                <li>Application and orchestration layer: mapping profile fields to prompt construction, agent configuration, and tool selection.</li>
                <li>Storage and governance layer: secure, compliant data handling with clear access rules.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Prompt and Configuration Integration</h3>
              <ul className="pattern-card__list">
                <li>Convert profiles into reusable prompt fragments or settings per agent.</li>
                <li>E.g., tone, complexity, autonomy mode are computed once from the profile, then injected into orchestration.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scaling to Multiple Agents</h3>
              <ul className="pattern-card__list">
                <li>Implement a profile service or API that all agents and AI surfaces can query.</li>
                <li>Support per-agent overrides and conditions while keeping a single source of truth.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Privacy-by-Design</h3>
              <ul className="pattern-card__list">
                <li>Integrate privacy and security review into profile schema expansion and new use cases.</li>
                <li>Avoid coupling profile data directly into long-term model training without clear governance and consent.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Profile Model</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Define a structured profile model with clear fields for identity, goals, skills, working style, constraints, and tools.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Implement a <span className="pattern-body--bold">My AI Profile</span> surface with clear entry points in settings and in-chat.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Runtime Display</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Surface the <span className="pattern-body--bold">active profile</span> prominently with inline indicators showing personalization is active.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Provide clear controls for overrides, pausing, and switching profiles.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Cross-Agent Application</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Ensure profile preferences propagate across all agents and AI surfaces consistently.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Support per-agent and per-conversation overrides while maintaining a single source of truth.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Privacy & Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Make all profile data visible, editable, and deletable by the user.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Clearly separate what is stored in the profile vs what is transient conversation context.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
            </div>
          </div>
          <ul className="pattern-list">
            <li><span className="pattern-body--bold">8.1 Memory Inspector & Editor</span> – Exposes and controls what the AI remembers about the user, complementing the profile with inspectable memory records.</li>
            <li><span className="pattern-body--bold">8.2 Agent Persona Profiles & Settings</span> – Defines how the AI agent itself behaves, separate from user preferences about how they want to be treated.</li>
            <li><span className="pattern-body--bold">8.3 Privacy & Data Usage Controls</span> – Governs how AI data is collected, stored, and used, ensuring user context profiles are handled responsibly.</li>
            <li><span className="pattern-body--bold">8.4 Agent Context Repository & Workspace Profiles</span> – Centralized workspace context that complements personal profiles with shared organizational knowledge.</li>
          </ul>
        </section>
      </main>
    </motion.div>
  );
}
