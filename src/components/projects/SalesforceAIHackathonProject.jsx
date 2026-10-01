import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function SalesforceAIHackathonProject() {
  return (
    <ProjectLayout
      title="Salesforce AI Hackathon"
      subtitle="My generative AI concept for Sales Cloud won 'Most Innovative' out of 90 teams."
      projectId="salesforceaihackathon"
    >
      <div className="space-y-8">
        {/* Video - Salesforce AI Hackathon Demo */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <iframe
            className="w-full aspect-video bg-black"
            src="https://www.youtube.com/embed/lCt5KIcSn44"
            title="Salesforce AI Hackathon Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 text-xl font-medium">
            A hackathon pitch for a Sales Cloud that adapts to the person using it
          </p>
          <p className="text-black/80 dark:text-white/80">
          <b>Spring 2023.</b> ChatGPT had come out a few months earlier and every company was trying to figure out what to do with AI. I was a Lead Product Designer on Sales Cloud, and I kept running into the limits of our UI patterns. The same frameworks that kept everything consistent also made it hard to build anything that adapted to what a user was doing.
          </p>
        </div>

        {/* The Challenge */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
            Salespeople managing hundreds of accounts and thousands of contacts spent a lot of their day clicking. They jumped between screens, memorized long workflows, and lost track of what they were doing along the way. The UI patterns behind all of it hadn't changed much in years.
            </p>

            <p className="text-black/80 dark:text-white/80">
              When an internal AI hackathon was announced, I wanted to use it for more than adding a chatbot. My question was whether the interface itself could adapt to the user, instead of the user adapting to the interface.
            </p>
          </div>
        </div>

        {/* The Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Idea</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              I didn't want to bolt AI onto the existing screens. The concept had four parts:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-black/80 dark:text-white/80">
              <li><strong>Generative UI</strong> that builds a workspace on the fly based on the user's role, what they're working on, and how they like to work</li>
              <li><strong>Next best actions</strong> that bring up what needs attention, without anyone digging through reports</li>
              <li><strong>Dashboards that change through the day:</strong> pipeline review in the morning, follow-ups in the afternoon, and a summary at the end of the day</li>
              <li><strong>Workflows that keep your place,</strong> so you can finish a multi-step task without losing track of where you were</li>
            </ul>
          </div>
        </div>

        {/* The Demo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Demo</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              I built a concept prototype that follows Mary Celler, an account executive, through her day. Here's what she could do:
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Pinned canvases.</strong> Instead of static dashboards, Mary had canvases set up for specific jobs. She could change them by typing what she wanted or with regular UI controls.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Einstein everywhere.</strong> The AI assistant showed up throughout the app, not only in a chat window. It could fill out a form from pasted text, fill in missing fields from context, and suggest related records on its own. Form fields were hidden by default to cut clutter, but you could always open them up and edit.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Email triage.</strong> It read incoming email for sentiment and action items and only showed the ones that needed a response. It could pull contact details out of signatures, draft replies, and suggest opportunity updates based on what the email said.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>One continuous flow.</strong> This was the part I cared about most. Mary could review opportunities, update records, and send emails without leaving the flow she was in or losing her place.
            </p>
          </div>
        </div>

        {/* The Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why It Mattered</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
            Winning <b>"Most Innovative"</b> out of 90 teams felt great. But what I really wanted was to show people that enterprise software doesn't have to be a pile of templates that's painful to use. With GPT-class models, the software can take on more of the work for the user.
            </p>

            <p className="text-black/80 dark:text-white/80">
              Automating tasks is the obvious use for AI. The prototype made the case that it could also change how the interface itself is put together.
            </p>
          </div>
        </div>

        {/* Looking Forward */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Looking Back</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The project was only a concept, but it got a lot of people thinking about what AI could do to software. Things we've always chased, like personalization and efficiency, are much more reachable now. Since then, AI features have been showing up everywhere: agentic backends, proactive suggestions, predictive analytics. Most of it is still early.
            </p>

            <p className="text-black/80 dark:text-white/80">
            I still think the bigger opportunity is redesigning the interface around AI rather than adding AI to the old one. I'd like to see software that figures out what you're doing and adjusts to you, instead of software you have to learn first.
            </p>
          </div>
        </div>

        {/* Key Features Visualization */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🏆</div>
              <div className="flex-1">
                <div className="font-semibold">Most Innovative Award</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Picked out of 90 teams
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🤖</div>
              <div className="flex-1">
                <div className="font-semibold">Generative Email</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Concepts for AI-drafted email and autonomous workflows in Sales Cloud
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">☁️</div>
              <div className="flex-1">
                <div className="font-semibold">Built on Sales Cloud</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Designed around real Sales Cloud workflows and the Einstein assistant
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Results */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
          <h3 className="text-xl font-bold mb-4">At a Glance</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            A concept for an AI-first Sales Cloud, built for an internal hackathon in 2023.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Generative AI
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Sales Cloud
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Email Automation
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              LLM Integration
            </span>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default SalesforceAIHackathonProject;
