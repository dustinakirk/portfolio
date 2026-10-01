import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function AiStoriesProject() {
  return (
    <ProjectLayout
      title="AI Powered Expandable Stories"
      subtitle="A site where AI writes fiction that never ends, with recurring characters and storylines that branch into new series."
      projectId="aistories"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Nuvvel uses AI to write long, detailed stories for people who love to read. Think
            of it as a cross between a Netflix series that never ends and a Wikipedia for each
            series. Characters have their own story arcs and show up in each other's stories,
            and the places where things happen tie it all together.
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
          <h2 className="text-2xl font-bold mb-4">Stories That Don't End</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Each series starts with a story arc told over many chapters. Once someone
              unlocks a chapter, everyone can read it. Some chapters will already be unlocked
              by other readers and some won't. You use credits from a membership plan to
              unlock new ones, and the AI writes the chapter on the spot, moving the series
              forward for you and everyone after you.
            </p>

            <p className="text-black/80 dark:text-white/80">
              Nuvvel series don't have finales. A story never gets cancelled because the
              budget ran out or the author burned out, and an audience of one is enough to
              keep it going. I think this is where a lot of digital fiction is headed. AI
              writing still has its quirks, but it's exciting to see the stories get better
              with every new model release.
            </p>
          </div>
        </div>

        {/* Technical Implementation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Right now the system uses a mix of GPT-4o mini and Claude 3.5 Sonnet. A story
              takes about 35 seconds to generate, and I expect that to drop under 10 seconds
              by the end of the year without losing quality.
            </p>

            <p className="text-black/80 dark:text-white/80">
              A new series takes up to 24 LLM calls. Adding a chapter only takes 3, using
              roughly 10k input tokens and 3k output tokens. Stories start with 15 chapters,
              and each chapter has a secondary story arc. If a reader picks a secondary arc,
              it becomes its own 15-chapter story. When a story ends, a sequel gets created
              automatically.
            </p>
          </div>
        </div>


        {/* Challenges Overcome */}
        <div>
          <h2 className="text-2xl font-bold mb-4">What's Working</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The system is now really good at writing stories that hang together, with
              chapters that flow into each other, keep you reading, and can be extended
              forever. From here it's mostly tweaking, and it'll keep getting better as the
              models do. When I started six months ago, the stories were nowhere near this
              good.
            </p>

            <p className="text-black/80 dark:text-white/80">
              A big part of that is the logline system. It records every story element so
              continuity holds up within a story arc and across arcs and sequels. Characters
              stay consistent, plot threads connect, and the world still makes sense as
              stories keep branching.
            </p>
          </div>
        </div>

        {/* Current Limitations */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Limitations & Future Improvements</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              There's a lot of room for improvement! I've generated hundreds of stories, and
              while each one tends to be well-formed overall, there are a few things I hope
              will get better as the models improve:
            </p>

            <ul className="list-disc pl-6 text-black/80 dark:text-white/80">
              <li>
                <strong>Name repetition:</strong> Stories with the same theme tend to reuse
                the same names. Getting variety is hard (Voss and Blackwood are LLM
                favorites).
              </li>
              <li>
                <strong>Word preferences:</strong> Words like 'shadows,' 'echoes,' and
                'tapestry' show up way too often.
              </li>
              <li>
                <strong>Output limits:</strong> The models' output limits decide how long
                chapters and story arcs can be. I've had to break the prompts up and
                structure them to work around a lot of these limits.
              </li>
              <li>
                <strong>Built-in biases:</strong> Female characters usually have piercing
                green eyes. And without direction, stories default to a female protagonist,
                unless it's something like a war story.
              </li>
            </ul>
          </div>
        </div>

        {/* User Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-4">User Experience & Business Model</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Nuvvel runs on memberships. Members buy credits to unlock chapters nobody has
              unlocked yet. Once a chapter is unlocked, everyone can read it, so the library
              keeps growing as readers push stories forward.
            </p>

            <p className="text-black/80 dark:text-white/80">
              People find stories by browsing or through links their friends share. Every
              genre gets a new story each week, so there's always something new. It isn't
              interactive fiction. You just read, and the only input you give is feedback on
              story quality.
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
                  Unlocked chapters are open to everyone • Locked chapters take credits
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">🔄</div>
              <div className="flex-1">
                <div className="font-semibold">Branching Story Arcs</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Secondary arcs branch into new 15-chapter stories
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg">
              <div className="text-2xl">♾️</div>
              <div className="flex-1">
                <div className="font-semibold">Stories That Keep Going</div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  A sequel is created automatically when a story ends
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4">What's Next</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              <strong>Image Generation:</strong> Text generation is fully automated. The
              system is built to handle images too, but image models aren't quite good enough
              to automate yet. I'm using Midjourney, which doesn't have an API yet, and
              keeping characters and styles consistent is still hard. So for now I make the
              character and location images by hand. It's just a matter of time though.
            </p>

            <p className="text-black/80 dark:text-white/80">
              <strong>Translation & Audio:</strong> Both would be great for readers, and I'd
              love to add them. But as AI gets built into phones and computers, Nuvvel may
              not need to offer them itself. I'm going to wait and see where things go. Costs
              would also have to drop a lot to make sense for this much text.
            </p>
          </div>
        </div>

        {/* Market Position */}
        <div>
          <h2 className="text-2xl font-bold mb-4">How It's Different</h2>

          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              Nuvvel is a website full of shareable stories that keep growing, so there's
              always more to read. The way stories branch and never end, plus a steady stream
              of new ones, sets it apart from other AI storytelling sites.
            </p>

            <p className="text-black/80 dark:text-white/80">
              It's for anyone who likes reading fiction. The more people read and unlock, the
              more stories there are. As the models get better and faster, I think Nuvvel can
              become a go-to place for AI-written fiction.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Visit Nuvvel</h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            Pick a story and start reading at nuvvel.com
          </p>
          <a
            href="https://nuvvel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Go to Nuvvel →
          </a>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default AiStoriesProject;
