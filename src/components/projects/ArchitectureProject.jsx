import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function ArchitectureProject() {
  return (
    <ProjectLayout
      title="UX Architecture"
      subtitle="A modern approach to complex and scalable UIs."
      projectId="architecture"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Over the last 8 years, Tealium has grown from a single product into a platform with five. Along the way, the same UI patterns got reused over and over, mostly because it was fast. For the last few years I've kept notes on where the UX architecture falls short and looked for ways to improve the platform as a whole. It'll take years of product updates to get all the way there, but every new feature now uses the new architecture and UI patterns.
          </p>
        </div>

        {/* The Problem State */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Problem State</h2>

          <p className="text-black/80 dark:text-white/80">
            Tealium's products are made up of components that customers link together to solve large, complicated data problems. Tealium sits in the middle, between a company's data and all the third-party services it uses. Marketing, ad campaigns, uptime tracking, A/B testing, analytics... there are a lot of goals, and each one takes a lot of configuration. Tealium can handle even the most complex of these setups, but the workflows to get there were convoluted and tedious.
          </p>
        </div>

        {/* Dependencies Diagram */}
        <ProjectImage 
          src="/projects/architecture/dependencies.png" 
          alt="Diagram showing complex component dependencies and interconnections in Tealium's platform"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            In the summer of 2018, I started tracking every product enhancement request and usability issue I could find. That included Tealium's online community, feature requests, support tickets, and the in-product feedback tool. Once I'd sorted everything by product area, a few big themes stood out. Most of the issues came down to two things: managing large numbers of items, and the workflows themselves.
          </p>
        </div>

        {/* Research Repository */}
        <div className="relative">
          <ProjectImage 
            src="/projects/architecture/reseach_repository.png" 
            alt="Research repository compilation of usability issues categorized by product areas and customer feedback"
            className="rounded-lg shadow-lg"
            style={{ marginRight: '-30%' }}
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Many of these problems traced back to design patterns that had been around since Tealium's first product, Tealium iQ Tag Management. The two worst offenders were accordion lists and modal dialogs. Accordions work well for a short list where each item holds a small amount of content. At Tealium, these lists could have thousands of items, each with a lot of content. Modals had their own problems. They left lots of screen space unused, often didn't have room for the content, and forced awkward workflows where one modal opened on top of another.
          </p>
        </div>

        {/* Legacy Patterns */}
        <ProjectImage 
          src="/projects/architecture/legacy_patterns.png" 
          alt="Legacy UI patterns showing problematic accordion lists and modal dialogs with limited screen space"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            As Tealium grew, these patterns were only going to hurt more, because the biggest customers had the most complex setups and suffered the most. When I presented the findings and numbers to managers and stakeholders, they agreed we needed a better solution.
          </p>
        </div>

        {/* Legacy UI */}
        <div style={{ marginTop: '0%' }}>
          <ProjectImage 
            src="/projects/architecture/legacy_ui.png" 
            alt="Legacy user interface screenshots demonstrating workflow inefficiencies and modal stacking issues"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* A New Approach */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">A New Approach</h2>
          <p className="text-black/80 dark:text-white/80">
            A lot of constraints ruled out the usual UI patterns. On the workflow side, we already had a tree-like structure, and we needed something more dynamic that let people jump from branch to branch instead of drilling down and climbing back up. On the content side, it had to handle everything from simple forms to code editors.
          </p>

          <p className="text-black/80 dark:text-white/80">
            After months of looking at different approaches, the first spark came from Google Calendar's settings page. It used a slide-out with a long scrolling page of settings and a navigation panel on the left. To cover our use cases, I developed a fairly unique pattern of stacking slide-outs, each one sized to fit its content. I designed eight layouts for the slide-outs and standardized them into four sizes (small, medium, large, and full-screen).
          </p>
        </div>

        {/* Slideouts */}
        <div style={{ height: '382px' }}>
          <ProjectImage 
            src="/projects/architecture/slideouts.png" 
            alt="New stacking slide-out UI pattern with four standardized sizes (small, medium, large, full-screen)"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            For workflows like reviewing items in a list, I added navigation that let you page through items without closing and reopening slide-outs. I also designed ways to get around when slide-outs were stacked several levels deep.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Stacking slide-outs completely changed how we thought about workflows in the Tealium platform, and it opened up a lot of possibilities.
          </p>
        </div>

        {/* Slideout GIF */}
        <ProjectImage 
          src="/projects/architecture/slideout.gif" 
          alt="Animated demonstration of stacking slide-out navigation and workflow improvements"
          className="rounded-lg shadow-lg"
        />

        {/* The Results */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Results</h2>

          <p className="text-black/80 dark:text-white/80">
            Stacking slide-outs had a lot of advantages, but the killer app was how much they shortened customer workflows. Even the simplest workflows usually saved at least one step, and the more complex the workflow, the more steps and time it saved. Simple workflows, like adding one item or editing a single configuration, took 30% fewer steps. Complex ones, like working with several items at once or troubleshooting an issue, took 50% fewer.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Those are big reductions, and the benefit grew with the complexity of the workflow. But there's a third category I'd call massively complex. These are the solution-level tasks where customers get the most value from a service like Tealium, like setting up a holiday ad campaign, or adding a new vendor and configuring A/B testing for a mobile site. They can easily run past 50 steps, stretch across several work sessions, and involve troubleshooting or double-checking configurations before the setup is done. Cutting those in half still leaves a lot of steps, so they needed their own solution.
          </p>
        </div>

        {/* Context Switching */}
        <div style={{ marginTop: '0%' }}>
          <ProjectImage 
            src="/projects/architecture/context-switching.png" 
            alt="Context switching analysis showing workflow step reductions from 30% to 50% improvement"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            For these, we came up with a few ways to make the product more goal-oriented. Shortcuts get people where they're going faster. Suggested actions keep an eye on configurations and offer wizards to tidy them up, like archiving inactive campaigns. And Quick Wizards let people enter only the information that's unique to them (API keys, campaign title, etc.) while all the components and connections get set up behind the scenes.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Quick Wizards can turn the most common and most frustrating configuration tasks from a 50+ step process into a 10-step wizard. That's an improvement of more than 80%.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The new UX architecture, and the shift in how we think about customer experience in the platform, is a new direction for Tealium. Building all of it will take years, but the work is well underway, and we're already seeing the payoff as each new feature adopts stacking slide-outs.
          </p>
        </div>

        {/* Goal-Oriented Workflows and Results */}
        <div className="space-y-8">
          <ProjectImage 
            src="/projects/architecture/goal-oriented-workflows.png" 
            alt="Goal-oriented workflow design with shortcuts, suggested actions, and Quick Wizards"
            className="rounded-lg shadow-lg"
          />
          <div style={{ marginTop: '10%' }}>
            <ProjectImage 
              src="/projects/architecture/results.png" 
              alt="Results showing 80% improvement in complex scenarios through Quick Wizards and new UX architecture"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* My Role */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-black/80 dark:text-white/80">
            As Principal Product Designer, I led the work of gathering user feedback and sorting it by product. I ran design discovery, came up with and owned the design solution, and detailed the stacking slide-out pattern. I presented the proposal and got buy-in from product and engineering. Along the way I gathered input from the rest of the team and worked closely with each designer to make sure the solution held up in their product area. I still keep the specs up to date and work with the other product designers on how best to apply the new architecture.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ArchitectureProject;