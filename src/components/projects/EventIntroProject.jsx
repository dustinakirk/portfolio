import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function EventIntroProject() {
  return (
    <ProjectLayout
      title="EventIntro: AI-Powered Smart Networking"
      subtitle="Transforming how cohorts of people form meaningful professional connections through AI-powered matching, personalized introductions, and intelligent breakout group formation."
      projectId="eventintro"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            EventIntro is a web application I built from the ground up that transforms how
            cohorts of people—from corporate teams to industry associations—form meaningful
            professional connections. By combining thoughtful product design with AI-powered
            matching algorithms, EventIntro replaces the randomness and awkwardness of
            traditional networking with personalized, purposeful introductions.
          </p>
          <p className="text-black/80 dark:text-white/80">
            In building EventIntro, I developed the product strategy, user
            experience design, technical architecture, full-stack development, and business
            model definition. I leveraged AI development tools like Claude Code throughout
            the build process, demonstrating how modern AI assistants can accelerate
            sophisticated product development from concept to launch in a few weeks.
          </p>
        </div>

        {/* Hero Image */}
        <ProjectImage
          src="/projects/eventintro/eventintro.png"
          alt="EventIntro platform showing AI-powered networking matches and personalized introductions"
          className="rounded-lg shadow-lg"
        />

        {/* The Problem */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Networking Problem</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Professional networking at events suffers from fundamental flaws that leave
              both facilitators and attendees frustrated:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Random Connections:</strong> Attendees wander hoping to stumble
                upon relevant contacts, with no guidance on who to talk to or why.
              </li>
              <li>
                <strong>Shallow Interactions:</strong> Brief exchanges rarely lead to
                meaningful relationships or follow-up conversations.
              </li>
              <li>
                <strong>Facilitator Burden:</strong> Organizers spend hours manually
                grouping attendees for breakout sessions with no systematic approach.
              </li>
              <li>
                <strong>Post-Event Drop-off:</strong> Connections made at events rarely
                persist beyond the goodbye handshake.
              </li>
              <li>
                <strong>Introvert Exclusion:</strong> Those uncomfortable with cold
                approaches miss out on networking opportunities entirely.
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              Existing event platforms focus on registration and scheduling but neglect
              the human connection aspect. They answer "Who is attending?" but not "Who
              should I talk to?" or "Why would they want to talk to me?"
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              EventIntro uses AI to analyze what members are seeking and offering, generates
              personalized introductions with conversation starters, and forms optimized
              breakout groups—all while maintaining a simple, intuitive user experience
              that hides the complexity from end users.
            </p>

            <p className="text-black/80 dark:text-white/80">
              The platform serves two primary user types: <strong>Facilitators</strong> who
              manage cohorts and events, and <strong>Attendees</strong> who join via OAuth,
              complete a quick 5-question survey, and immediately receive personalized
              networking recommendations.
            </p>
          </div>
        </div>

        {/* AI-Powered Matching */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AI-Powered Matching</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Traditional matching looks for similarities: "You both work in marketing!"
              EventIntro's matching is <strong>complementary</strong>: "You're seeking
              mentorship in scaling startups, and they've scaled three companies."
            </p>

            <p className="text-black/80 dark:text-white/80">
              This bidirectional approach asks three questions: What does this person
              <em>seek</em>? What does that person <em>offer</em>? How strong is the
              match in <em>both directions</em>?
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>How it works:</strong> When users complete the survey, their responses
              are analyzed by a large language model to extract what they're seeking,
              offering, and interested in. These concepts are converted into 384-dimensional
              vector embeddings using the all-MiniLM-L6-v2 model that capture semantic
              meaning, not just keywords. "Looking for a technical co-founder" and "Seeking
              a CTO for my startup" are recognized as similar needs.
            </p>

            <p className="text-black/80 dark:text-white/80">
              The system then finds people whose offerings match your seekings AND whose
              seekings match your offerings. For each match, an LLM generates a personalized
              introduction explaining why they should connect, an opening question to break
              the ice, and common topics they might discuss.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              EventIntro is built as a modern web application with several interconnected
              services, designed for scalability and reliability:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Backend:</strong> Flask + Gunicorn with Eventlet workers for
                concurrent WebSocket handling
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL with pgvector extension for vector
                similarity search on embeddings
              </li>
              <li>
                <strong>Caching & Queuing:</strong> Redis cluster for session storage,
                caching, and message queuing
              </li>
              <li>
                <strong>Background Processing:</strong> Celery for async AI operations
                with Celery Beat for scheduled tasks (notifications, reminders)
              </li>
              <li>
                <strong>Real-Time:</strong> Flask-SocketIO for instant message delivery,
                live notifications, and real-time group assignments
              </li>
              <li>
                <strong>AI/ML:</strong> Sentence Transformers for embeddings, FAISS for
                fast similarity search, scikit-learn for clustering algorithms
              </li>
              <li>
                <strong>LLM Integration:</strong> Multi-provider architecture with Google
                Gemini (primary), OpenAI GPT, Anthropic Claude, and Groq as fallbacks
              </li>
              <li>
                <strong>Authentication:</strong> OAuth integration with LinkedIn, Google,
                and Eventbrite
              </li>
              <li>
                <strong>Infrastructure:</strong> Docker containerization, deployed on
                Azure App Service with Azure Blob Storage for assets
              </li>
            </ul>
          </div>
        </div>

        {/* UX Design Philosophy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">UX Design Philosophy</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Every technical decision began with a user question. The core design
              principles that guided the product:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>AI as Enabler, Not Centerpiece:</strong> The AI matching technology
                is sophisticated, but users never see it. They experience personalized
                introductions and balanced groups—the outcome matters, not the mechanism.
              </li>
              <li>
                <strong>Reduce Friction at Every Step:</strong> From quick 5-question
                surveys to one-click event joining, every interaction minimizes effort
                while maximizing value.
              </li>
              <li>
                <strong>Complement Human Connection:</strong> Technology facilitates the
                introduction; humans build the relationship. EventIntro gets people
                talking—what happens next is up to them.
              </li>
              <li>
                <strong>Respect Privacy While Enabling Discovery:</strong> Users control
                what they share. The system reveals only enough to spark genuine
                interest—never exposing sensitive details without consent.
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              The application is organized around context—users always know where they are
              and why. Navigation adapts based on user role, with attendees seeing simplified
              views and facilitators accessing dashboard controls, cohort management, and
              event creation tools.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
          <h3 className="text-xl font-bold mb-6">Key Features</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🎯</div>
              <div className="flex-1">
                <div className="font-semibold">Top Picks with AI Introductions</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Ranked recommendations with personalized explanations and conversation starters
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">💬</div>
              <div className="flex-1">
                <div className="font-semibold">Real-Time Conversations</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  WebSocket-powered 1:1 and group messaging with persistent history
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">👥</div>
              <div className="flex-1">
                <div className="font-semibold">Intelligent Breakout Groups</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  AI-optimized group formation with diversity constraints and auto-generated discussion topics
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">📧</div>
              <div className="flex-1">
                <div className="font-semibold">Automated Email Workflows</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Welcome emails, match notifications, event reminders, and post-event follow-ups
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🔐</div>
              <div className="flex-1">
                <div className="font-semibold">OAuth & Privacy Controls</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  One-click sign-in via LinkedIn/Google with granular privacy settings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AI-Assisted Development</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              EventIntro was built leveraging modern AI development tools throughout the
              entire process. I used Claude Code extensively for implementing complex
              features, debugging issues, and refactoring code. This approach allowed me
              to move faster while maintaining code quality across the full stack.
            </p>

            <p className="text-black/80 dark:text-white/80">
              The AI-assisted workflow was particularly valuable for:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                Implementing the multi-provider LLM fallback architecture with retry logic
              </li>
              <li>
                Building the WebSocket infrastructure for real-time messaging
              </li>
              <li>
                Designing database migrations for the multi-tenant data model
              </li>
              <li>
                Writing Celery tasks for background AI processing
              </li>
              <li>
                Creating responsive frontend components with proper dark mode support
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              This project demonstrates how AI tools can amplify a single developer's
              capabilities, enabling the creation of sophisticated products that would
              traditionally require a larger team.
            </p>
          </div>
        </div>

        {/* Challenges Overcome */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Challenges Overcome</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              <strong>Balancing AI Complexity with Simple UX:</strong> AI matching requires
              substantial data, but users resist lengthy forms. I limited surveys to 5
              strategic questions that extract maximum signal, designed to feel conversational
              rather than interrogative. The best AI is the AI users don't realize they're
              training.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Multi-Tenant Architecture:</strong> Users belong to multiple cohorts
              and attend multiple events, each with its own context and data. I designed
              flexible data models separating User (global) from CohortMember/EventAttendee
              (contextual), with role-based permissions per cohort and event.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Real-Time Without Complexity:</strong> Users expect instant messaging,
              but WebSockets add operational complexity. I implemented Flask-SocketIO with
              Eventlet workers, designed graceful degradation for unreliable connections,
              and cached unread counts in Redis for instant retrieval.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>LLM Reliability:</strong> LLM APIs occasionally fail or return
              unexpected responses. I implemented automatic fallback chains across multiple
              providers, retry logic with exponential backoff, and monitoring to track
              success rates per provider. Building for redundancy adds complexity but
              enables reliability.
            </p>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Skills Demonstrated</h2>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Product & UX Design</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>User research and persona development</li>
                  <li>Information architecture and user flows</li>
                  <li>Mobile-responsive design</li>
                  <li>Friction reduction and onboarding optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI/ML Integration</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Embeddings and similarity search</li>
                  <li>LLM prompt engineering</li>
                  <li>Multi-model fallback architecture</li>
                  <li>Clustering algorithms for group formation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Python/Flask backend architecture</li>
                  <li>PostgreSQL with pgvector</li>
                  <li>Real-time WebSocket implementation</li>
                  <li>Background job processing with Celery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">System Architecture</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Multi-tenant data modeling</li>
                  <li>Caching and performance optimization</li>
                  <li>Docker containerization</li>
                  <li>Cloud deployment on Azure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Experience EventIntro</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            See how AI-powered networking transforms professional connections
          </p>
          <a
            href="https://eventintro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Visit EventIntro →
          </a>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default EventIntroProject;
