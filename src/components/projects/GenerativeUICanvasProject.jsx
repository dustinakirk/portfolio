import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function GenerativeUICanvasProject() {
  return (
    <ProjectLayout
      title="Generative UI Canvas"
      subtitle="Natural Language UI + Agentic Backend + Generative UI - Reimagining B2B software with AI-powered interfaces"
      projectId="generativeuicanvas"
    >
      <div className="space-y-8">
        {/* Video - Agentic Todo List Demo */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <iframe 
            className="w-full aspect-video bg-black"
            src="https://www.youtube.com/embed/vahliR5Kdvo"
            title="Generative UI Canvas Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 text-xl font-medium">
            Natural Language UI + Agentic Backend + Generative UI
          </p>
          <p className="text-black/80 dark:text-white/80">
            I embarked on V1 of an over-engineered to-do list and it works! Talk to the todo list via a chat-panel and the ALL of the UI rendered in the canvas to the right is completely AI generated. Create, update, and delete tasks. Let me show you why this is interesting.
          </p>
        </div>

        {/* Core Concept */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Foundation</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              A to-do list is a simple CRUD database application much like most B2B SaaS applications... think Trello, Salesforce, etc. The concepts explored here are applicable widely across most B2B software as we know it.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              This system allows the user is able to ask for anything related to the database or presentation of the information in the database. The agentic backend interprets the user's requests, completes actions and finally refreshes the presented visualization.
            </p>
          </div>
        </div>

        {/* Natural Language Interface */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Natural Language Interface</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The Natural Language Interface is incredibly powerful as you have likely experienced with your own interactions with ChatGPT, Gemini, Grok, Claude and others. You get to use your own words, and work within your own mental model of how things are in your head. There is no learning curve... and that is powerful. With natural language you can specify complex requests easily such as bulk actions, multiple items individually or categorically, and work as you would with another person.
            </p>
          </div>
        </div>

        {/* Agentic Backend */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Agentic Backend</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The agentic backend works to interpret the user's requests and take action on them. This means developing a plan of action, potentially making multiple queries for information, making updates, or asking clarifying questions of the user if necessary. The agentic backend is able to utilize world-knowledge the model has been trained on, access tools (such as the database tool), or even 3rd party services via MCP.
            </p>
          </div>
        </div>

        {/* Generative UI */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Generative UI</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Lastly the Generative UI is presented in the application's canvas panel. Data and contextual information is passed to a rendering model to generate all of the visual elements to be rendered in the canvas. The rendering engine does not utilize templates, pre-defined, styles or anything. Based on the context provided, which includes information about the type of application it is, application branding, user preferences, application state, etc... the views are rendered on-demand. This allows for hyper-personalized interfaces that are tailored to the whims and needs of individual users. If one wants to see tasks presented as a khanban board with a rainbow and unicorn theme with high data-density... let it be so!
            </p>
          </div>
        </div>

        {/* Key Features Visualization */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">💬</div>
              <div className="flex-1">
                <div className="font-semibold">Natural Language Input</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Communicate with your application as you would with another person
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🤖</div>
              <div className="flex-1">
                <div className="font-semibold">Intelligent Agent Processing</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Backend interprets, plans, and executes complex multi-step operations
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🎨</div>
              <div className="flex-1">
                <div className="font-semibold">Dynamic UI Generation</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Interfaces generated on-demand based on context and preferences
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Future of Software</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              AI is enabling a whole new generation of software that is flexible, hyper-personalized, and with a tiny footprint from what has been the case for the last 30 years. The role of product designers, and front-end engineers will shift. The possibilities are endless and the technology is already here. Costs to serve will come down, context windows will grow, and speeds to serve will increase.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              I will continue to play and think about this space.
            </p>
          </div>
        </div>

        {/* Impact & Applications */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
          <h3 className="text-xl font-bold mb-4">Wide-Ranging Applications</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            This approach to software design can revolutionize how we interact with B2B SaaS applications across industries - from project management tools like Trello to complex CRM systems like Salesforce.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Project Management
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              CRM Systems
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Data Analytics
            </span>
            <span className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium">
              Enterprise Software
            </span>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default GenerativeUICanvasProject;