import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function LoadOrderProject() {
  return (
    <ProjectLayout
      title="Tealium Load Order Manager"
      subtitle="A behind-the-scenes look at designing an all-new feature and workflow."
      projectId="loadorder"
    >
      <div className="space-y-12">
        {/* The Problem State */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Problem State</h2>
          <p className="text-black/80 dark:text-white/80">
            Tags and extensions, two staples of Tealium's tag management platform, depend on each other and need to run in a predictable order. Feedback from support and the forums said the existing product was hard to use and led to a lot of troubleshooting. On top of that, the way it was built was holding back features like filtering and sorting, which would have been a big usability boost on their own.
          </p>

          <h3 className="text-xl font-semibold mb-3">The goals of this feature were to</h3>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Make the order of execution clear to customers so they feel informed and knowledgeable.</li>
            <li>Make it easier to manage and reorder items in scenarios where there may be hundreds of items.</li>
            <li>Enable organization and navigational enhancements such as sorting, filtering, and searching.</li>
          </ol>
        </div>

        {/* Video - Load Order Challenges */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <video width="600" controls className="rounded-lg shadow-lg">
            <source src="/projects/loadorder/load_order_challenges.mov" type="video/mp4" />
          </video>
        </div>

        {/* My Role */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-black/80 dark:text-white/80">
            I'd been the Sr. Product Designer on TiQ for several years, so I knew the product, its usability issues, and its technical challenges well. That familiarity got me thinking about the product's usability as a whole, exploring possible enhancements, and eventually realizing that the way tag and extension ordering worked was going to hold the whole product back.
          </p>
          <p className="text-black/80 dark:text-white/80">
            I put together a proposal that included comments from our customer forums and specific enhancements that couldn't happen until the ordering problem was solved. The proposal convinced the company to move forward.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Over the course of the project, I did the initial investigation, the proposal, user research, mockups and designs, and final user acceptance testing. Throughout, I worked with a project manager to define requirements and worked closely with the development team to build the changes.
          </p>
        </div>

        {/* The Process */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Process</h2>
          <p className="text-black/80 dark:text-white/80">
            Once management decided to go ahead, the first step was talking directly to customers. I asked our customer success team to help me find 4 customers who used this feature heavily and set up calls with them. The calls gave me a much clearer picture of their use cases and what they struggled with in the current UI.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The feedback made it obvious that customers had trouble telling what order their tags and extensions ran in, weren't confident in their setup, and spent a lot of time troubleshooting. Those insights became the basis for the UX decisions.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Next I looked at the product's UX architecture and the workflows involved. It was clear a new UI pattern would help a lot, so I built an interactive prototype in HTML, CSS, and JavaScript to test the concept. Once I felt confident in it, I detailed the mockups and initial specs in Zeplin as development started.
          </p>
          <p className="text-black/80 dark:text-white/80">
            A few things made the release tricky. The main one was that some users had been reordering tags and extensions to keep them organized, and in doing so were unintentionally changing the execution order. The new workflow separated the two, so users would now see a different order in the product that reflected the true execution order. Since we weren't sure how people would react, we decided to release the feature as a beta experiment that could be turned on and off.
          </p>
          <p className="text-black/80 dark:text-white/80">
            After the experiment went out, it took about 6 months to gather enough feedback to make the feature generally available. Before that, the Product Manager and I talked with several internal support staff and customers about the new workflow and found a few small changes that would make it more efficient. Those changes, along with features like filtering and sorting that weren't possible with the old workflow, were prioritized for the GA release.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The new workflow is now in place and meets all of the goals we started with.
          </p>
        </div>

        {/* A New UX Workflow */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">A New UX Workflow</h2>
          <p className="text-black/80 dark:text-white/80">
            When I looked at the UX architecture, it was clear users needed a single view that combined the ordering of tags and extensions. Because of the dependencies between them, improving the ordering tools while keeping them separate wouldn't have made things any clearer.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Separating ordering from organization is what made it clear. Users could filter, sort, and search through items without mixing up the order things were displayed in with the order they would run.
          </p>
          <p className="text-black/80 dark:text-white/80">
            With tags and extensions in one combined view, often with hundreds of each in the list, the challenge was making it easy to view and reorder a lot of items. At a high level, that meant grouping items, bulk actions, a way to find items, and a way to move items to spots that were out of view.
          </p>
        </div>

        {/* Workflow Images */}
        <div className="relative h-[400px] mx-auto mb-8" style={{ maxWidth: '900px' }}>
          <img 
            src="/projects/loadorder/workflow.svg" 
            alt="Load Order Manager workflow diagram showing combined view of tags and extensions"
            className="absolute w-[55%] top-[60px] left-0 rounded-lg shadow-xl border border-black/10 dark:border-white/10"
          />
          <img 
            src="/projects/loadorder/slideout.png" 
            alt="Slideout interface demonstrating the new UX pattern for managing execution order"
            className="absolute w-[45%] top-0 right-0 rounded-lg shadow-xl border border-black/10 dark:border-white/10"
          />
        </div>

        {/* Reordering Methods */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Users got three different ways to reorder items.
          </p>

          <h3 className="text-xl font-semibold mb-3">Drag & Drop</h3>
          <p className="text-black/80 dark:text-white/80">
            When the item you're moving is on screen, drag and drop is fast, easy, and familiar, since it used to be the only way to reorder.
          </p>

          <h3 className="text-xl font-semibold mb-3">Move to Top/Bottom</h3>
          <p className="text-black/80 dark:text-white/80">
            A lot of the time, especially when you're moving a group of similar items, you want them at the very top or bottom of the list. The menu option is the fastest way to do that.
          </p>

          <h3 className="text-xl font-semibold mb-3">Order Number Input</h3>
          <p className="text-black/80 dark:text-white/80">
            Sometimes you need more precision, like when you're troubleshooting a specific item. For that, you can type in the exact position an item should go relative to the others in the list.
          </p>
        </div>

        {/* Video - Load Order Features */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <video width="600" controls className="rounded-lg shadow-lg">
            <source src="/projects/loadorder/load_order_features.mov" type="video/mp4" />
          </video>
        </div>

        {/* Final Thoughts */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Another important part of the combined view is the navigation for jumping to each group of tags or extensions. The groups are buckets at different points in the process where a browser runs website code and makes network calls. The navigation shows the buckets that tags and extensions can be assigned to, plus a few other key steps in that process, so users can see the bigger picture.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Altogether, these decisions produced a Load Order Manager that gave users more confidence and a better understanding of execution order, made troubleshooting easier, and was simply easier to use.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default LoadOrderProject;