import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const SENTIMENT_AWARE_RESPONSE_STYLES_SEO = {
  title: "Sentiment-Aware Response Styles - AI Trust Pattern",
  description: "Adaptive response style that adjusts tone, length, and structure based on inferred user sentiment to reduce frustration, increase clarity, and strengthen trust in agentic AI interactions.",
  keywords: ["AI sentiment", "adaptive responses", "AI tone", "AI trust", "empathetic AI", "frustration detection", "AI UX", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/sentiment-aware-response-styles"
};

// Placeholder demo component
function SentimentAwareResponseStylesDemo() {
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
      padding: '48px 24px',
      textAlign: 'center',
    },
    placeholderText: {
      color: '#6b7280',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    placeholderTitle: {
      color: '#374151',
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Sentiment-Aware Response Styles demo">
      <p style={styles.placeholderTitle}>Interactive Demo</p>
      <p style={styles.placeholderText}>
        An interactive demonstration of sentiment-aware response styles will be added here,
        showing how an AI agent adapts its tone, length, and structure based on detected user sentiment.
      </p>
    </div>
  );
}

export default function SentimentAwareResponseStylesPattern() {
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
            <span className="pattern-header__index">9.3</span>
            <div>
              <h1 className="pattern-header__title">Sentiment-Aware Response Styles</h1>
              <p className="pattern-header__subtitle">
                Adaptive response style that adjusts tone, length, and structure based on inferred user sentiment to reduce frustration, increase clarity, and strengthen trust in agentic AI interactions.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="9.3" patternTitle="Sentiment-Aware Response Styles" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Sentiment-aware response styles enable an AI agent to subtly adapt to the emotional context of a conversation—especially frustration, confusion, urgency, or satisfaction—without becoming intrusive or performatively &quot;emotional.&quot;
            </p>
            <p className="pattern-body">
              In practice, this pattern appears anywhere a user interacts with an AI assistant via natural language: support bots, workflow copilots, analytics assistants, creative tools, and learning platforms. The core idea is that the agent senses emotionally charged cues in the user&apos;s language and then adjusts:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Tone</span> (more empathetic, neutral, or direct)</li>
              <li><span className="pattern-body--bold">Format</span> (short vs. expanded, stepwise vs. summary)</li>
              <li><span className="pattern-body--bold">Action bias</span> (faster &quot;do it for me&quot; vs. slower &quot;teach me&quot;)</li>
              <li><span className="pattern-body--bold">Escalation behavior</span> (offering human help, alternate channels, or a reset path)</li>
            </ul>
            <p className="pattern-body">
              This pattern aims to avoid the &quot;frustration spiral&quot; where a user feels misunderstood, repeats themselves, and loses trust in the AI—and by extension, in the product that embeds it.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Sentiment-aware response styles example">
          <SentimentAwareResponseStylesDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without sentiment-aware response styles, AI agents treat every message as emotionally flat. This leads to several recurring issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Escalating frustration loops</span> – The agent responds with the same neutral, verbose style even when the user signals irritation (&quot;This is ridiculous,&quot; &quot;Why is this so hard?&quot;), which can feel dismissive or robotic.
              </li>
              <li>
                <span className="pattern-body--bold">Mismatched cognitive load</span> – Confused users receive terse responses that skip necessary context, while expert users under time pressure get over-explained answers.
              </li>
              <li>
                <span className="pattern-body--bold">Perceived lack of empathy or intelligence</span> – When the agent misses emotional cues, users often infer that the AI is &quot;dumb&quot;, &quot;tone-deaf&quot;, or &quot;not listening&quot;, even if the content is technically correct.
              </li>
              <li>
                <span className="pattern-body--bold">Higher support costs and churn risk</span> – Frustrated users are more likely to abandon self-service flows, open tickets, or escalate to a human, increasing operational load and eroding product trust.
              </li>
            </ul>
            <p className="pattern-body">
              A sentiment-aware response style provides a way to recognize emotional friction early, adapt in real time, and prevent small irritations from snowballing into distrust.
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
                  <span className="pattern-body--bold">High-stakes or time-sensitive tasks</span> – Incident management, production deployments, billing issues, account access, legal/financial decisions, or healthcare workflows where frustration and stress are common.
                </li>
                <li>
                  <span className="pattern-body--bold">Complex multi-step workflows</span> – Onboarding flows, configuration wizards, data integrations, or analytics explorations where confusion and backtracking are likely.
                </li>
                <li>
                  <span className="pattern-body--bold">Customer-facing support and success experiences</span> – Help centers, in-product chatbots, guided troubleshooting, or &quot;Ask an expert&quot; copilots that sit between users and human support teams.
                </li>
                <li>
                  <span className="pattern-body--bold">Learning and upskilling scenarios</span> – Training platforms, code tutors, or product education experiences where confusion and repeated questions are expected.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Very low-stakes, single-shot tasks</span> – Simple calculators, one-off generators, or utilities where emotional variance is minimal and failure is cheap.</li>
                <li><span className="pattern-body--bold">Highly constrained flows with clear, deterministic UI</span> – Rigid forms or structured workflows where error states are explicit and conversational interaction is minimal.</li>
                <li><span className="pattern-body--bold">Offline, batch, or non-interactive processing</span> – Background jobs or APIs where no conversational surface exists and response style has negligible impact.</li>
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
                At a high level, this pattern consists of a sentiment detection layer, response style policy, adaptive output controls, and a feedback and refinement loop.
              </p>
            </div>
          </div>

          {/* Core Components */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Sentiment Detection Layer
              </h3>
              <p className="pattern-card__intro">
                Classifies incoming user messages according to basic emotional states.
              </p>
              <ul className="pattern-card__list">
                <li>States: neutral, confused, frustrated, urgent, satisfied</li>
                <li>Signals: keywords, punctuation, formatting, conversation patterns</li>
                <li>Privacy-conscious processing (on-device or secure environment)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Response Style Policy</h3>
              <p className="pattern-card__intro">
                Maps sentiment states to tone, length, structure, and action bias.
              </p>
              <ul className="pattern-card__list">
                <li>Respects global user preferences and product constraints</li>
                <li>Considers task type, risk level, user role, SLA commitments</li>
                <li>User overrides applied as hard constraints</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adaptive Output Controls</h3>
              <p className="pattern-card__intro">
                Adjusts generated responses and optionally exposes user controls.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;More detail&quot; / &quot;Less detail&quot; controls</li>
                <li>&quot;Change tone&quot; options (formal ↔ friendly)</li>
                <li>&quot;Talk to a human&quot; or escalation options</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Feedback and Refinement Loop</h3>
              <p className="pattern-card__intro">
                Collects signals to improve detection and policies over time.
              </p>
              <ul className="pattern-card__list">
                <li>Thumbs up/down on helpfulness or tone</li>
                <li>Re-asks and escalation tracking</li>
                <li>Aggregated metrics for threshold tuning</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Sentiment-Adapted Response Block</h3>
            <p className="pattern-card__intro">
              The primary object is a sentiment-adapted response block in the agent&apos;s reply, tuned to the detected emotional context.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Adaptation by Sentiment</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Frustration</span> → concise, action-first: &quot;Here is the fix in one step…&quot;</li>
                  <li><span className="pattern-body--bold">Confusion</span> → slower, structured: &quot;Here is what happened, then what to do…&quot;</li>
                  <li><span className="pattern-body--bold">Urgency</span> → prioritized, minimal options: &quot;Fastest path now is…&quot;</li>
                  <li><span className="pattern-body--bold">Positive</span> → normal density, optionally shorter</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Label</p>
                <ul className="pattern-card__list">
                  <li>Indicates that the response has been adapted, when appropriate</li>
                  <li>Example: &quot;Simplified based on recent messages&quot; with a settings icon</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>&quot;Show more detail&quot; / &quot;Show less detail&quot;</li>
                  <li>&quot;Change tone&quot; (formal ↔ friendly)</li>
                  <li>Feedback controls (thumbs up/down)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Sentiment state (not always shown explicitly)</li>
                  <li>Escalation status (&quot;Pending human review&quot;)</li>
                  <li>Confidence indicators for low-confidence classifications</li>
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
                The lifecycle spans from initial baseline behavior through sentiment detection, policy evaluation, response generation, and ongoing learning.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Baseline Behavior</h3>
              <ul className="pattern-card__list">
                <li>Agent uses a default response style (e.g., neutral, moderately concise)</li>
                <li>Applies user-level tone preferences if configured</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Sentiment Detection on Each Turn</h3>
              <ul className="pattern-card__list">
                <li>Each incoming message passes through a lightweight sentiment classifier</li>
                <li>Signals include keywords, punctuation, and conversation patterns</li>
                <li>Detection is privacy-conscious (on-device or secure environment)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. State Aggregation Across Turns</h3>
              <ul className="pattern-card__list">
                <li>Recent turns aggregated into a conversation sentiment state</li>
                <li>Sliding window (e.g., last 3–5 turns) to avoid overreacting to single expressions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Policy Evaluation & Style Selection</h3>
              <ul className="pattern-card__list">
                <li>Sentiment state and context parameters feed into response style policy</li>
                <li>Frustrated + high impact → short, action-oriented, escalate options</li>
                <li>Confused + learning context → slower, stepwise explanation with recap</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Response Generation & Formatting</h3>
              <ul className="pattern-card__list">
                <li>Agent prompted with selected style parameters</li>
                <li>Tone guidance and structure hints applied</li>
                <li>Output formatted with headings, bullets, or code blocks as appropriate</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Optional Transparency & Labeling</h3>
              <ul className="pattern-card__list">
                <li>Significant adaptations may indicate the adjustment</li>
                <li>Settings icon or link to sentiment/tone preferences</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. User Feedback & Overrides</h3>
              <ul className="pattern-card__list">
                <li>Feedback controls captured with context (sentiment state, chosen policy, task category)</li>
                <li>Negative feedback can immediately adjust style in following message</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Longer-term Learning & Tuning</h3>
              <ul className="pattern-card__list">
                <li>Aggregated, anonymized metrics inform threshold tuning</li>
                <li>Policy optimization to reduce escalation rates</li>
                <li>Detection bias checks across segments and languages</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Fallbacks & Error Handling</h3>
              <ul className="pattern-card__list">
                <li>Low confidence → default to stable, neutral responses</li>
                <li>Do not guess at sensitive states without robust safeguards</li>
                <li>Graceful degradation if sentiment service unavailable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & tone guidelines</p>
            <p className="pattern-body">
              Effective sentiment-aware responses balance acknowledgment with action, avoiding over-emoting while remaining solution-oriented.
            </p>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">General Principles</h3>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Acknowledge, then act</span> – Brief, sincere acknowledgment followed immediately by a clear next step</li>
                  <li><span className="pattern-body--bold">Avoid over-emoting or role-play</span> – Professional, calm, focused on assistance rather than emotional theatrics</li>
                  <li><span className="pattern-body--bold">Stay solution-oriented</span> – Under negative sentiment, shift toward shorter explanations and explicit actions</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Frustration-Oriented Style</h3>
                <p className="pattern-card__intro">For messages like &quot;Why is this so hard?&quot;</p>
                <ul className="pattern-card__list">
                  <li>Acknowledge the difficulty</li>
                  <li>Provide a single, high-impact action first</li>
                  <li>Offer quick access to a human or alternative channel</li>
                  <li>Avoid blaming the user or the system</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Confusion-Oriented Style</h3>
                <p className="pattern-card__intro">For messages like &quot;I don&apos;t get this&quot;</p>
                <ul className="pattern-card__list">
                  <li>Recap the goal and current step</li>
                  <li>Use plain language and avoid jargon</li>
                  <li>Present information in short paragraphs or bullet points</li>
                  <li>Offer optional deep dives</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Urgency-Oriented Style</h3>
                <p className="pattern-card__intro">For incidents and outages</p>
                <ul className="pattern-card__list">
                  <li>Lead with the fastest safe option</li>
                  <li>Minimize optional content; move context to the bottom or behind expandable sections</li>
                  <li>Make escalation options prominent and predictable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Controls & Preferences */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Controls & preferences</p>
              <p className="pattern-body pattern-body--narrow">
                Users and administrators can configure sentiment-aware behavior through global settings, inline controls, and enterprise policies.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Global Settings</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Tone preference</span> – Formal vs. neutral vs. friendly; direct vs. elaborative</li>
                <li><span className="pattern-body--bold">Detail level</span> – Concise, detailed, or adaptive by default</li>
                <li><span className="pattern-body--bold">Sentiment detection toggle</span> – Enable or disable adaptation with clear explanation of data handling</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Controls</h3>
              <ul className="pattern-card__list">
                <li>&quot;Show more detail&quot; / &quot;Show less detail&quot;</li>
                <li>&quot;Explain that again differently&quot;</li>
                <li>&quot;Slow down: step-by-step mode&quot;</li>
                <li>&quot;Escalate to a human agent&quot;</li>
                <li>Thumbs up/down with quick tags (&quot;Too long&quot;, &quot;Not clear&quot;, &quot;Tone felt off&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Enterprise & Admin Controls (B2B)</h3>
              <ul className="pattern-card__list">
                <li>Organization-level defaults for tone and verbosity</li>
                <li>Ability to limit sentiment features in regulated contexts</li>
                <li>Controls for logging and retention boundaries around sentiment data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data, Privacy & Ethics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data, privacy & ethics</p>
              <p className="pattern-body pattern-body--narrow">
                Sentiment-aware systems must handle user data responsibly, minimizing collection while maintaining transparency about how adaptation works.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Minimize Data & Avoid Profiling</h3>
              <ul className="pattern-card__list">
                <li>Only process conversation text needed for current session inference</li>
                <li>Prefer ephemeral, on-the-fly detection</li>
                <li>Avoid building long-lived &quot;emotional profiles&quot; of individual users</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Explainability & Transparency</h3>
              <ul className="pattern-card__list">
                <li>Provide clear copy in privacy and product settings describing adaptation</li>
                <li>Explain what is done with this information</li>
                <li>Show how to turn it off</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Bias & Fairness Considerations</h3>
              <ul className="pattern-card__list">
                <li>Train and evaluate detection on diverse language samples</li>
                <li>Include dialects, cultural expressions, non-native language patterns</li>
                <li>Periodically audit misclassification rates across segments</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Sensitive Inferences</h3>
              <ul className="pattern-card__list">
                <li>Do not infer or store sensitive attributes (mental health, political views)</li>
                <li>For signs of severe distress, follow clearly defined escalation policies</li>
                <li>Align with legal and ethical guidance rather than ad hoc responses</li>
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
                Certain implementations of sentiment-aware response styles can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Fake Empathy Without Substance</h3>
                  <p className="antipattern-subtitle">Repeated apologies without changing the response substance.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Repeated apologies or &quot;emotional&quot; statements without changing the substance of the response feel hollow and can increase frustration rather than reducing it.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Pair brief acknowledgment with concrete action or changed response structure.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Tone Swings That Feel Unstable</h3>
                  <p className="antipattern-subtitle">Abrupt shifts from casual to formal or empathetic to neutral.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Abrupt shifts from very casual to excessively formal or from overly empathetic to completely neutral within a single conversation can feel jarring and unpredictable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make gradual adjustments and maintain consistent baseline personality.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Explicit Preferences</h3>
                  <p className="antipattern-subtitle">Continuing verbose explanations when user set &quot;Always concise.&quot;</p>
                </div>
              </div>
              <p className="antipattern-description">
                Continuing to provide long, detailed explanations when the user has explicitly set &quot;Always concise&quot; undermines trust in the system&apos;s responsiveness to user preferences.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always honor explicit user preferences as hard constraints.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Invasive Personalization</h3>
                  <p className="antipattern-subtitle">Surfacing statements like &quot;This user is often angry&quot; in UI.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Surfacing statements that imply individual emotional histories are stored over time, or showing sentiment labels in exposed UI, can feel invasive and creepy.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep sentiment ephemeral and focus on session-level adaptation without revealing classification.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Sentiment Detection for Manipulation</h3>
                  <p className="antipattern-subtitle">Adjusting messages primarily to drive sales or upsell.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Using sentiment detection to adjust messages primarily to drive sales or upsell conversions rather than to support the user&apos;s goals and well-being is manipulative and erodes trust.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use sentiment adaptation only to improve user experience and task completion, not for commercial manipulation.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Adaptation Fatigue</h3>
                  <p className="antipattern-subtitle">Constant acknowledgement of emotion every turn.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Constant acknowledgement of emotion (&quot;It seems frustrating…&quot; repeated every turn) can feel patronizing and slow down the conversation.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Rate-limit explicit sentiment references and rely more on structural changes (shorter responses) than emotional commentary.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Edge Cases & Failure Modes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Understanding common failure modes helps teams design more robust sentiment-aware systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Misclassified Frustration as Neutrality</h3>
              <ul className="pattern-card__list">
                <li>Agent remains overly verbose and calm, leading to further irritation</li>
                <li><span className="pattern-body--bold">Mitigation:</span> Treat repeated re-asks or rapid interactions as implicit signals to shorten and act</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">False Positive Frustration Detection</h3>
              <ul className="pattern-card__list">
                <li>Slang or humor (&quot;This is insane haha&quot;) may be misread as anger</li>
                <li><span className="pattern-body--bold">Mitigation:</span> Require multiple signals or sustained patterns before strongly changing tone</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Mixed Sentiment in Multi-User Contexts</h3>
              <ul className="pattern-card__list">
                <li>Shared channels may include multiple participants with different sentiment</li>
                <li><span className="pattern-body--bold">Mitigation:</span> Avoid strongly personalized language; stick to neutral professional tone</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Regulated or Legal Contexts</h3>
              <ul className="pattern-card__list">
                <li>Overly casual or empathetic tone may be inappropriate in compliance workflows</li>
                <li><span className="pattern-body--bold">Mitigation:</span> Lock tone to formal and factual in such contexts</li>
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
                How sentiment-aware response styles apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow Troubleshooting (B2B IT / DevOps)</h3>
              <p className="pattern-card__intro">Observability copilot</p>
              <p className="pattern-card__label">Context</p>
              <ul className="pattern-card__list">
                <li>Engineer debugging a failing CI/CD pipeline</li>
                <li>After two failed attempts and &quot;Why is this deployment so painful?&quot;</li>
              </ul>
              <p className="pattern-card__label">Adaptation</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Brief acknowledgement, single recommended fix with one-click action, link to escalate with logs attached</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Learning Platform (B2C or Internal Training)</h3>
              <p className="pattern-card__intro">SQL learning environment</p>
              <p className="pattern-card__label">Context</p>
              <ul className="pattern-card__list">
                <li>Learner practicing SQL queries</li>
                <li>&quot;I don&apos;t understand what JOIN does at all&quot;</li>
              </ul>
              <p className="pattern-card__label">Adaptation</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Switches to teaching mode with step-by-step breakdown, simple analogy, visual schema, and quick check questions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Service Bot (B2C Web or Mobile)</h3>
              <p className="pattern-card__intro">Streaming service portal</p>
              <p className="pattern-card__label">Context</p>
              <ul className="pattern-card__list">
                <li>Subscriber faces recurring billing errors</li>
                <li>&quot;This isn&apos;t working AGAIN, I&apos;m done with this.&quot;</li>
              </ul>
              <p className="pattern-card__label">Adaptation</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Brief apology focused on impact, clear one-click options (retry, update card, chat with human), avoids long policy explanations</li>
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
                Architectural considerations and integration points for sentiment-aware response systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Placement in the Pipeline</h3>
              <ul className="pattern-card__list">
                <li>1. User message arrives</li>
                <li>2. Sentiment classification runs (lightweight model)</li>
                <li>3. Conversation state updates (track sentiment, task, error history)</li>
                <li>4. Policy engine selects response style parameters</li>
                <li>5. Core LLM/tooling generates response guided by parameters</li>
                <li>6. UI layer renders adapted response with controls and labels</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Model Choices</h3>
              <ul className="pattern-card__list">
                <li>Small, domain-tuned models can run locally and cheaply for real-time inference</li>
                <li>LLM-based sentiment prompts can work as a fallback but may be slower and more costly</li>
                <li>Hybrid approaches (simple classifier + heuristic rules) often suffice for coarse states</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Integration with Support Systems</h3>
              <ul className="pattern-card__list">
                <li>When frustration persists, automatically prepare a ticket draft with context for human agents</li>
                <li>High levels of negative sentiment can feed product quality dashboards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Design System Integration</h3>
              <ul className="pattern-card__list">
                <li>Define consistent visual treatments (labels, icons, message layout) in the design system</li>
                <li>Ensure sentiment adaptations look coherent across surfaces</li>
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
                Track both conversation-level and system-level metrics to assess the effectiveness of sentiment-aware responses.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Conversation-Level Indicators</h3>
              <ul className="pattern-card__list">
                <li>Frequency of negative sentiment transitions (neutral → frustrated)</li>
                <li>Time and number of turns to resolution under different sentiment states</li>
                <li>Rate of re-asks or &quot;clarify&quot; requests after sentiment-adapted responses</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">System-Level Indicators</h3>
              <ul className="pattern-card__list">
                <li>Reduction in live-support escalations from conversations with sentiment-aware responses</li>
                <li>Impact on CSAT / NPS / conversation rating for flows using sentiment adaptation</li>
                <li>Feedback distribution on tone (&quot;Too formal&quot;, &quot;Too casual&quot;, &quot;Too long&quot;, &quot;Too short&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Quality Checks</h3>
              <ul className="pattern-card__list">
                <li>A/B tests comparing sentiment-aware vs. static tone</li>
                <li>Different thresholds for triggering adaptation</li>
                <li>Qualitative review of transcripts where sentiment adaptation triggered an escalation or complaint</li>
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
                This pattern often appears alongside these other trust patterns.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Safe Failure States</h3>
              <p className="pattern-card__intro">
                Provides the content for what to do; sentiment-aware response styles decide how it is communicated.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Guided Repair Flows</h3>
              <p className="pattern-card__intro">
                Stepwise recovery experiences that can be delivered with sentiment-appropriate tone and pacing.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Escalation & Fallback Routing</h3>
              <p className="pattern-card__intro">
                Sentiment detection informs when to offer or trigger escalation to a human agent.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Preference & Persona Settings</h3>
              <p className="pattern-card__intro">
                Sentiment-aware styles must respect global user preferences for tone and verbosity.
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
              <p className="pattern-checklist-category__title">Sentiment Detection</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is basic sentiment detection implemented (at least neutral / frustrated / confused / urgent)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is detection privacy-conscious and ephemeral rather than building long-lived profiles?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Response Adaptation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there clear mapping from sentiment to tone, length, and structure?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system respect user-level preferences and organization-level policies?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Controls</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are inline controls available for &quot;more/less detail&quot; and tone correction?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users disable sentiment-aware adaptation if they prefer?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Privacy & Transparency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there clear explanation in settings describing how sentiment detection works?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are sensitive attributes (mental health, political views) explicitly not inferred?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Instrumentation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is negative sentiment frequency and escalation rate being tracked?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are there safe fallbacks when detection is uncertain or unavailable?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Ongoing Quality</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there periodic review and tuning of thresholds, policies, and detection biases?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are misclassification rates being audited across user segments and languages?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
