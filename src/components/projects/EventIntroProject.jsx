import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function EventIntroProject() {
  return (
    <ProjectLayout
      title="EventIntro: AI Matchmaking for Networking Events"
      subtitle="A web app I built that tells people at an event who they should meet and why, writes the introduction, and sorts everyone into breakout groups."
      projectId="eventintro"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            EventIntro is a web app I built from scratch to help groups of people, anything
            from a company offsite to an industry association, actually meet the right
            people. Most networking is random and a little awkward. EventIntro looks at
            what each person wants and what they can offer, then tells them who to talk to
            and gives them a reason to start the conversation.
          </p>
          <p className="text-black/80 dark:text-white/80">
            I did all of it: product strategy, UX, architecture, the full-stack build, and
            the business model. I used Claude Code heavily throughout, which is a big part
            of how it went from idea to launch in a few weeks.
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
          <h2 className="text-2xl font-bold mb-4">What's Wrong with Networking Events</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              If you've been to a networking event, you've probably seen most of these:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>It's random.</strong> People wander around hoping to bump into
                someone useful, with no idea who to look for.
              </li>
              <li>
                <strong>Conversations stay shallow.</strong> A few minutes of small talk
                rarely turns into a follow-up.
              </li>
              <li>
                <strong>Organizers do it by hand.</strong> Someone spends hours sorting
                people into breakout groups, mostly by gut feel.
              </li>
              <li>
                <strong>Nothing sticks.</strong> Most connections end at the goodbye
                handshake.
              </li>
              <li>
                <strong>Introverts lose out.</strong> If walking up to strangers isn't your
                thing, you miss most of the value.
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              Event platforms are good at registration and schedules. They'll tell you
              who's attending. They won't tell you who you should talk to, or why that
              person would want to talk to you.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-2xl font-bold mb-4">How EventIntro Works</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              EventIntro uses AI to figure out what each member is looking for and what
              they can offer. It writes personalized introductions with a conversation
              starter, and it builds breakout groups. None of that machinery is visible to
              the people using it. They just see who to meet.
            </p>

            <p className="text-black/80 dark:text-white/80">
              There are two kinds of users. <strong>Facilitators</strong> set up cohorts
              and events. <strong>Attendees</strong> sign in with OAuth, answer five quick
              questions, and get their recommendations right away.
            </p>
          </div>
        </div>

        {/* AI-Powered Matching */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Matching on What People Need</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Most matching looks for things people have in common: "You both work in
              marketing!" EventIntro matches on what's <strong>complementary</strong>: "You
              want advice on scaling a startup, and they've scaled three."
            </p>

            <p className="text-black/80 dark:text-white/80">
              It works in both directions. What is this person <em>looking for</em>? What
              does the other person <em>offer</em>? And is it a good match for{" "}
              <em>both of them</em>, not just one?
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Under the hood:</strong> an LLM reads each survey and pulls out what
              the person is looking for, what they offer, and what they're interested in.
              Those get turned into 384-dimensional embeddings with the all-MiniLM-L6-v2
              model, which captures meaning rather than exact keywords. So "Looking for a
              technical co-founder" and "Seeking a CTO for my startup" land close together.
            </p>

            <p className="text-black/80 dark:text-white/80">
              Then it looks for people whose offers match what you're looking for and whose
              needs match what you offer. For each match, an LLM writes a short
              introduction explaining why you two should talk, an opening question, and a
              few topics you might have in common.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Stack</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              EventIntro is a handful of services working together:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Backend:</strong> Flask + Gunicorn with Eventlet workers to handle
                concurrent WebSockets
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL with pgvector for similarity search on
                the embeddings
              </li>
              <li>
                <strong>Caching & Queuing:</strong> Redis cluster for sessions, caching, and
                message queuing
              </li>
              <li>
                <strong>Background Processing:</strong> Celery for async AI jobs, and Celery
                Beat for scheduled ones like notifications and reminders
              </li>
              <li>
                <strong>Real-Time:</strong> Flask-SocketIO for messages, live notifications,
                and group assignments
              </li>
              <li>
                <strong>AI/ML:</strong> Sentence Transformers for embeddings, FAISS for
                fast similarity search, scikit-learn for clustering
              </li>
              <li>
                <strong>LLMs:</strong> Google Gemini as the primary model, with OpenAI,
                Anthropic Claude, and Groq as fallbacks
              </li>
              <li>
                <strong>Authentication:</strong> OAuth sign-in with LinkedIn, Google, and
                Eventbrite
              </li>
              <li>
                <strong>Infrastructure:</strong> Docker containers on Azure App Service,
                with Azure Blob Storage for assets
              </li>
            </ul>
          </div>
        </div>

        {/* UX Design Philosophy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">How I Approached the UX</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              A few principles I kept coming back to:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Keep the AI in the background.</strong> There's a lot going on in
                the matching, but nobody needs to see it. People see a good introduction and
                a balanced group, and that's what they care about.
              </li>
              <li>
                <strong>Ask for as little as possible.</strong> Five questions, one click to
                join an event. Every extra step loses people.
              </li>
              <li>
                <strong>Make the introduction, then get out of the way.</strong> The app
                gets two people talking. What happens after that is up to them.
              </li>
              <li>
                <strong>Let people control what they share.</strong> The app shows enough
                to get someone interested and never exposes personal details without
                consent.
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              Navigation changes with your role. Attendees get a simple view. Facilitators
              get the dashboard, cohort management, and event setup tools.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
          <h3 className="text-xl font-bold mb-6">Main Features</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🎯</div>
              <div className="flex-1">
                <div className="font-semibold">Top Picks with Introductions</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Ranked matches, each with a reason to meet and a conversation starter
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">💬</div>
              <div className="flex-1">
                <div className="font-semibold">Messaging</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  1:1 and group chat over WebSockets, with history saved
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">👥</div>
              <div className="flex-1">
                <div className="font-semibold">Breakout Groups</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Groups balanced for diversity, each with suggested discussion topics
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">📧</div>
              <div className="flex-1">
                <div className="font-semibold">Email</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Welcome emails, match notifications, event reminders, and post-event follow-ups
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🔐</div>
              <div className="flex-1">
                <div className="font-semibold">Sign-In and Privacy</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  One-click sign-in with LinkedIn or Google, plus detailed privacy settings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Building It with Claude Code</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              I built EventIntro with Claude Code from start to finish. I used it to write
              features, track down bugs, and refactor, and it let me move much faster than I
              could have alone while keeping the code in good shape.
            </p>

            <p className="text-black/80 dark:text-white/80">
              It helped most with:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                The LLM fallback chain and retry logic
              </li>
              <li>
                The WebSocket setup for real-time messaging
              </li>
              <li>
                Database migrations for the multi-tenant data model
              </li>
              <li>
                Celery tasks for background AI processing
              </li>
              <li>
                Responsive front-end components with dark mode
              </li>
            </ul>

            <p className="text-black/80 dark:text-white/80">
              Not long ago, a product like this would have needed a small team. This time
              it was just me.
            </p>
          </div>
        </div>

        {/* Challenges Overcome */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Hard Parts</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              <strong>Getting enough data without a long form.</strong> Good matches need a
              lot of information, and nobody wants to fill out a long survey. I cut it down
              to five questions chosen to get the most out of each answer, and wrote them to
              feel like a conversation instead of an interview.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>People belong to more than one group.</strong> One person can be in
              several cohorts and attend several events, each with its own data. I split the
              data model into a global User and contextual CohortMember and EventAttendee
              records, with permissions set per cohort and per event.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Real-time messaging.</strong> People expect chat to be instant, but
              WebSockets are a pain to run. I used Flask-SocketIO with Eventlet workers, made
              sure things degrade gracefully on bad connections, and cached unread counts in
              Redis so they load immediately.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>LLMs fail sometimes.</strong> APIs time out or send back something
              unexpected. I set up automatic fallbacks across providers, retries with
              exponential backoff, and tracking of success rates for each provider. It's
              more moving parts, but the app keeps working when one provider has a bad day.
            </p>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div>
          <h2 className="text-2xl font-bold mb-4">What Went Into It</h2>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Product & UX Design</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>User research and personas</li>
                  <li>Information architecture and user flows</li>
                  <li>Mobile-responsive design</li>
                  <li>Cutting friction from onboarding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI/ML Integration</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Embeddings and similarity search</li>
                  <li>LLM prompt engineering</li>
                  <li>Multi-model fallbacks</li>
                  <li>Clustering for group formation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Python/Flask backend</li>
                  <li>PostgreSQL with pgvector</li>
                  <li>Real-time WebSockets</li>
                  <li>Background jobs with Celery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">System Architecture</h4>
                <ul className="list-disc pl-6 text-black/80 dark:text-white/80 text-sm">
                  <li>Multi-tenant data modeling</li>
                  <li>Caching and performance</li>
                  <li>Docker containers</li>
                  <li>Deploying on Azure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Try EventIntro</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            See it for yourself at eventintro.com
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
