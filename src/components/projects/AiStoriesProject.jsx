import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function AiStoriesProject() {
  return (
    <ProjectLayout
      title="AI Powered Expandable Stories"
      subtitle="AI-powered platform generating never-ending fictional stories with interconnected characters and evolving narratives."
      projectId="aistories"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Nuvvel utilizes AI to generate detailed, rich stories for avid readers. You might think 
            of it as a mix between an endless Netflix series and a dedicated Wikipedia for each series. 
            The platform features interconnected characters, each with their own story arcs, and 
            immersive locations where events unfold, connecting everything together.
          </p>
        </div>


        {/* Nuvvel Platform Screenshot */}
        <ProjectImage 
          src="/projects/aistories/nuvvel.png" 
          alt="Nuvvel platform homepage showing AI-generated story collections and user interface"
          className="rounded-lg shadow-lg"
          style={{ height: '700px', width: 'auto' }}
        />

        {/* Core Concept */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Never-Ending Story Platform</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Each series begins with a story arc told over many chapters. Once a chapter is 
              unlocked, it becomes available for everyone to read. Some chapters might already 
              be unlocked by others, while others remain locked. Using credits from a membership 
              plan, you can unlock new content. The AI generates new content on the spot, 
              advancing the series for you and future readers.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              Unlike traditional media, Nuvvel series have no finales. The stories evolve 
              continuously without being cut short due to budget constraints or author burnout. 
              It's a truly evergreen platform where an audience of one is enough. I believe 
              this is the future of digital literature. While there are certainly quirks and 
              artifacts of AI in its current form, it is exciting to see the stories get 
              better and better with each new release.
            </p>
          </div>
        </div>

        {/* Technical Implementation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The system currently utilizes a combination of GPT-4O-mini and Claude-3-5-sonnet. 
              These allow stories to be generated in about 35 seconds, which I anticipate being 
              under 10 seconds by the end of the year without sacrificing quality and functionality.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              When generating a new series, Nuvvel currently will make up to 24 LLM API calls. 
              Adding a chapter to a story requires only 3, and they contain approximately 10k 
              of input tokens and 3k output tokens. The recursive nature of the platform means 
              that stories start with 15 chapters, each containing a secondary story arc. If a 
              secondary arc is chosen, it becomes a new 15-chapter story. At the end of each 
              story, a sequel is automatically created.
            </p>
          </div>
        </div>


        {/* Challenges Overcome */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Challenges Overcome</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Overall I've gotten the system to be really good at creating cohesive stories 
              with chapters that lead well into each other, are engaging and can be expanded 
              upon indefinitely. From here everything else will just require further tweaking 
              and it will only get better as the models improve. I started this project 6 months 
              ago and the stories were nowhere close to as good.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              A key innovation is the logline system that records all story elements to maintain 
              coherence and continuity within and across story arcs and sequels. This ensures 
              that characters remain consistent, plot threads connect properly, and the world 
              building remains coherent even as stories recursively expand.
            </p>
          </div>
        </div>

        {/* Current Limitations */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Limitations & Future Improvements</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              There are a lot of areas for improvement! Having generated hundreds of stories, 
              the individual stories tend to be well-formed overall but have a few aspects 
              that I hope will improve as the models get better over time:
            </p>
            
            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Name repetition:</strong> Across stories, there tends to be repetition 
                in names given a specific theme. Getting a variation in names (Voss and Blackwood 
                are LLM favorites) is challenging.
              </li>
              <li>
                <strong>Word preferences:</strong> Within a story, the favored use of words like 
                'shadows,' 'echoes,' and 'tapestry' are used too frequently.
              </li>
              <li>
                <strong>Output limitations:</strong> Model output limitations currently dictate 
                the length of the chapters and overall story arcs. The prompts have to be broken 
                up and structured to accommodate many of these limitations.
              </li>
              <li>
                <strong>Inherent biases:</strong> Female characters usually having piercing green 
                eyes, and without direction, stories are given a female protagonist unless it is 
                something like a war story.
              </li>
            </ul>
          </div>
        </div>

        {/* User Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-4">User Experience & Business Model</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The platform operates on a membership model where users purchase credits to unlock 
              chapters that haven't been unlocked by anyone else. Once unlocked, chapters become 
              available for all users to read, creating a collaborative library of ever-expanding 
              stories.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              Users browse the platform to find stories they like or get referred by friends 
              through shareable links. Each story genre receives a new story every week, ensuring 
              a constant influx of fresh content. The non-interactive nature means users focus 
              purely on reading, with their only input being feedback to improve story quality.
            </p>
          </div>
        </div>

        {/* Platform Interface Placeholder */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">📖</div>
              <div className="flex-1">
                <div className="font-semibold">Chapter Navigation</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Unlocked chapters available to all • Locked chapters require credits
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🔄</div>
              <div className="flex-1">
                <div className="font-semibold">Recursive Story Arcs</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Secondary arcs branch into new 15-chapter stories
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">♾️</div>
              <div className="flex-1">
                <div className="font-semibold">Never-Ending Narratives</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Stories continue indefinitely with automatic sequel generation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Future Vision</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              <strong>Image Generation:</strong> The text generation is currently fully automated. 
              I have built out the system to incorporate images, although the state of the art for 
              images is not quite where I need it to automate it. I'm currently using Midjourney; 
              however, there isn't an API yet. There are still lots of challenges in getting 
              consistent characters and styles. So for now, character and location images are 
              handled manually. It's just a matter of time though.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              <strong>Translation & Audio:</strong> These two areas will tremendously benefit 
              Nuvvel's users, and I would absolutely love to incorporate them. However, as AI 
              is incorporated into devices natively, it may not be necessary to incorporate them 
              into Nuvvel as a first-party service. My plan is to hold off a bit and see where 
              the trends go on these. The costs will need to come down dramatically to be 
              worthwhile on this amount of text.
            </p>
          </div>
        </div>

        {/* Market Position */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Market Position</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Nuvvel represents a new paradigm in digital literature - a website with shareable 
              stories that keep expanding for constant reading fun. The recursive, never-ending 
              nature of the stories, combined with AI-driven quality and continuous content 
              updates, differentiates the platform from other AI-driven storytelling services.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              The platform is aimed at anyone who enjoys reading fictional literature, offering 
              them an endless supply of content that evolves and expands based on collective 
              user engagement. With improvements in AI models and generation speed, the platform 
              is positioned to become a leading destination for AI-generated fiction.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Visit Nuvvel</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            Experience the future of AI-powered storytelling at nuvvel.com
          </p>
          <a 
            href="https://nuvvel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Explore Nuvvel →
          </a>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default AiStoriesProject;