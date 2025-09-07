import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function SalesforceAIHackathonProject() {
  return (
    <ProjectLayout
      title="Salesforce AI Hackathon"
      subtitle="Winning 'Most Innovative' among 90 teams with generative AI solutions for Sales Cloud"
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
            Breaking Free from Constraints: Why AI Was the Answer to Enterprise UX
          </p>
          <p className="text-black/80 dark:text-white/80">
            Spring 2023. ChatGPT had just taken the world by storm, and companies everywhere were scrambling to understand how to incorporate AI into their products. As a Lead Product Designer in Sales Cloud, I had been experiencing firsthand the limitations of our constrained user interface patterns. The rigid frameworks that once provided consistency had become a straitjacket, preventing us from delivering the fluid, context-aware experiences our users desperately needed.
          </p>
        </div>

        {/* The Challenge */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Challenge We Faced</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Enterprise software had hit a wall. Our users—sales professionals managing hundreds of accounts, thousands of contacts, and countless opportunities—were drowning in data and drowning in clicks. They needed to navigate between dozens of screens, remember complex workflows, and somehow maintain context while jumping between tasks. The traditional UI paradigms we'd been using for decades simply weren't cutting it anymore.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              When the internal AI hackathon was announced, I saw an opportunity. Not just to experiment with the latest technology, but to fundamentally reimagine how enterprise software could work. What if instead of forcing users to adapt to our rigid structures, we could create interfaces that adapted to them?
            </p>
          </div>
        </div>

        {/* The Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4">A New Vision for Sales Cloud</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              My hackathon submission wasn't just about adding AI features to existing interfaces—it was about reimagining the entire experience from the ground up. I envisioned a Sales Cloud where:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-black/80 dark:text-white/80">
              <li><strong>Generative UI</strong> would create personalized workspaces on the fly, tailored to each user's role, current tasks, and working style</li>
              <li><strong>Intelligent Next Best Actions</strong> would surface exactly what needed attention, when it needed it, without the user having to dig through reports</li>
              <li><strong>Hyper-Personalized Dashboards</strong> would adapt throughout the day, showing morning pipeline reviews, afternoon follow-ups, and end-of-day summaries automatically</li>
              <li><strong>Contextual Workflows</strong> would allow users to complete multi-step processes without losing their place or context</li>
            </ul>
          </div>
        </div>

        {/* The Demo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Bringing the Vision to Life</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              For the hackathon, I created a conceptual prototype featuring Mary Celler, an account executive navigating her daily workflow. The demo showcased how AI could transform every aspect of her experience:
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              <strong>Pinned Canvases:</strong> Instead of static dashboards, Mary had customizable canvases tailored to specific jobs-to-be-done. Each canvas could be modified through natural language or traditional UI controls, giving users flexibility in how they worked.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              <strong>Einstein Integration:</strong> Our AI assistant wasn't just a chatbot—it was woven into every interaction. It could complete forms from pasted text, fill in missing data based on context, and suggest related records without being asked. Form inputs were suppressed by default but always available, reducing visual clutter while maintaining control.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              <strong>Intelligent Email Processing:</strong> The system analyzed emails for sentiment and action items, automatically filtering to show only those requiring attention. It could extract contact information from email signatures, draft contextual replies, and suggest opportunity updates based on email content.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              <strong>Unified Workflows:</strong> Perhaps most importantly, the interface enabled Mary to complete entire workflows—reviewing opportunities, updating records, sending emails—all within a single, coherent flow. No more context switching. No more losing track of where you were.
            </p>
          </div>
        </div>

        {/* The Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why This Mattered</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              This wasn't just about winning a hackathon (though winning "Most Innovative" among 90 teams was certainly validating). It was about proving that enterprise software didn't have to be painful. By combining modern UX design principles with the intelligence capabilities of GPT and other AI models, we could create experiences that actually empowered users rather than constraining them.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              The hackathon prototype demonstrated that AI could do more than just automate tasks—it could fundamentally reshape how we think about user interfaces. Instead of building rigid systems and forcing users to adapt, we could build intelligent systems that adapt to users.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              As product designers, we stand at an inflection point. The tools and technologies that will define the next generation of enterprise software are here. The question isn't whether AI will transform our industry—it's whether we'll lead that transformation or be left behind by it.
            </p>
          </div>
        </div>

        {/* Looking Forward */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Path Forward</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              While this hackathon project was conceptual, many of its ideas have influenced the direction of Sales Cloud and enterprise software more broadly. We're seeing the emergence of AI-powered features across the industry, from intelligent email composition to predictive analytics. But we're still just scratching the surface.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              The future of enterprise software won't be about adding AI features to existing interfaces. It will be about reimagining those interfaces entirely—creating systems that understand context, anticipate needs, and adapt to individual users. It will be about moving from software that users have to learn to software that learns its users.
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
                  Won first place for innovation among 90 competing teams
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🤖</div>
              <div className="flex-1">
                <div className="font-semibold">Generative AI Implementation</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Pioneered generative email and autonomous experiences for Sales Cloud
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">☁️</div>
              <div className="flex-1">
                <div className="font-semibold">Sales Cloud Integration</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Seamlessly integrated AI capabilities into the Sales Cloud ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Results */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
          <h3 className="text-xl font-bold mb-4">Impact & Recognition</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            This hackathon project demonstrated the transformative potential of generative AI in enterprise sales workflows, earning top recognition for innovation.
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