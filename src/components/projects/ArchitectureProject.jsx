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
            Tealium has grown over the last 8 years from a single product to a platform with five separate products. Over this time these UI patterns have been reused for various reasons, but primarily speed of development. Over the last few years I have compiled notes on the disadvantages of the current UX architecture and have sought out ways to improve the platform as a whole to improve the overall customer experience. While this effort will take years of product updates to fully realize, in a steady march toward the common goal, each new feature implemented is taking advantage of the new architecture and UI patterns.
          </p>
        </div>

        {/* The Problem State */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Problem State</h2>

          <p className="text-black/80 dark:text-white/80">
            Tealium's products contain a set of components which may be linked together to realize solutions toward large and complex data objectives. Tealium sits as a middleman between enterprise data and all of the third party services they utilize. Be it for marketing, ad campaigns, uptime tracking, a/b testing, analytics, etc., the desired objectives are numerous and require a lot of component configuration. Fortunately Tealium is able to handle the most complex of these scenarios but suffers in the way of convoluted and tedious workflows.
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
            In the summer of 2018, I began compiling and keeping track of all of the product specific enhancements and usability issues reported through various sources. This included the Tealium's online community, product feature requests, customer support tickets, and the integrated product feedback tool. Having compiled this list of usability issues and categorized them into their specific product areas, there were several overarching takeaways. The two primary categories of issues coalesced around customers managing large numbers of items as well as around the workflows in place.
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
            A lot of these issues and requests were the result of legacy design patterns that had been in place since the inception of Tealium's first product Tealium iQ Tag Management. The two problematic UI patterns were accordion lists, and modal dialogs.  Accordion lists tend to be great for a limited number or list items, and when the content displayed for an accordion is small. Within tealium, these lists could have thousands of items in them, as well as large amounts of content. Secondly, the use of modals meant that there was lots of unused screen real estate, content would often not have enough space, and it forced awkward workflows and situations where modals would be presented on top of other modals.
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
            Ultimately as Tealium grew, the continued usage of these UI patterns would only be a further detriment to the company as the largest customers were the ones with the most complex configurations, suffering the most. The presentation of this information and statistics to managers and stakeholders lead to the buy-in for the need to find and implement a better solution going forward.
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
            In researching and looking for potential solutions, there were a lot of constraints that ruled out many of the common UI patterns. From a workflow perspective we already had a tree-like structure and it was necessary to find something that would be much more dynamic allowing the user to easily jump from branch to branch rather than traversing down and back up again. From a content perspective, it needed to accommodate a wide variety of content including simple forms to code editors.
          </p>

          <p className="text-black/80 dark:text-white/80">
            After months of looking and consideration as to different approaches, an initial spark of inspiration was found through using Google Calendar's Settings. In this page, a slide-out pattern was utilized. With a long page of scrolling settings and a navigation panel of the left. To satisfy the desired use cases, a fairly unique pattern was developed utilizing stacking slide outs with each slide-out sized to the content it contains.  Eight separate layouts were developed for the the slide-outs which were standardized into four sizes (small, medium, large, full-screen)
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
            To accommodate many of the workflows, such as looking at items in a list, novel navigational elements were applied so one could page through items in a list without closing and opening slide-outs. Additional navigational UI behaviors were developed to allow users to navigate deeply stacked slide-outs.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Overall, the stacking of slide-outs was a paradigm shift in rethinking workflows within the Tealium platform and the possibilities were astounding.
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
            While the stacking slide-outs have many advantages, the 'killer-application' was its impact on customer workflows and the ability for users to streamline workflows. Even in the simplest of workflows there was typically at least one step saved and as workflows grew more complex, the steps and subsequently the time saved was even more pronounced. In aggregate, for simple workflows, which would include adding singular items or making editing a single configuration, a 30% reduction was achieved. Furthermore, for complex scenarios where one might interact with multiple items or be engaged with troubleshooting an issue, a 50% reduction was achieved.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The reductions were tremendous and as user workflows grew more complex, the greater the benefits of the new stacking slide-outs were. However even with a 50% reduction, there is a third category of workflows that could be called massively complex scenarios. These are solution oriented workflows that customers gain the most benefit from with a software service like Tealium. These scenarios might include setting up a holiday advertising campaign, or integrating a new vendor and configuring a/b testing for their mobile website. In these cases, the steps involved could easily top 50 steps, be split across multiple working sessions, require troubleshooting, or even just double checking configurations before completing the setup. In these scenarios, even a 50% reduction would leave the user with a large number of steps to complete and require its own solution.
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
            For these massively complex scenarios, several new approaches have been developed to create a goal oriented approach to the product. Shortcuts have been added to get users to their desired destinations faster. Suggested actions proactively automate the monitoring and organization of configurations through wizards such as archiving inactive campaigns. And lastly the development of Quick Wizards allow users to simply input the unique information (API keys, campaign title, etc…) and behind the scenes all of the necessary components and connections are made.
          </p>

          <p className="text-black/80 dark:text-white/80">
            With new approaches like Quick Wizards, the most common, and most frustrating aspects of product configuration can turn a 50+ step process into a 10 step wizard, an improvement that tops 80%.
          </p>

          <p className="text-black/80 dark:text-white/80">
            This new UX architecture along with a fundamental change in envisioning customer experiences within the platform represents a new direction for Tealium and a bright future for its customers. It will be a multi-year effort to realize the entirety of these proposals, however the effort is well underway and the payoffs are beginning to be seen as each new feature starts utilizing the stacking slide-out design pattern.
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
            As Principal Product Designer, I spearheaded the initial compilation and product categorization of user feedback. Additionally I completed the design discovery process, developed and owned the design solution and detailed out the stacking slide-out UI pattern. I presented the proposal and received buy-in from product and engineering stakeholders. Feedback and input was gathered from other team members throughout the process. I worked closely with other team members to validate the design solution with each of their respective product areas. On an ongoing basis, I update the design specs and consult with other product designers to ensure the best implementation of the proposed UX architecture.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ArchitectureProject;