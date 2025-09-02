import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function LoadOrderProject() {
  return (
    <ProjectLayout
      title="Tealium Load Order Manager"
      subtitle="A behind-the-scenes look into building out the all new feature and workflow."
      projectId="loadorder"
    >
      <div className="space-y-12">
        {/* The Problem State */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Problem State</h2>
          <p className="text-black/80 dark:text-white/80">
            Two staples of Tealium's tag management platform, tags and extensions, are intertwined with co-dependencies and need to execute in a predictable manner. Feedback provided through support and forums indicated that the usability of the current product was poor and resulted in lots of trouble-shooting. In addition, the way the product was designed was holding back the development of features such as filtering and sorting which would also be a big boost to usability.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">The goals of this feature included</h3>
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
            As the Sr. Product designer who oversaw the TiQ product for a number of years, I was very familiar with the product and the usability issues and technical challenges involved. It was this familiarity which led me to think about the usability of the product as a whole, explore potential enhancements, and realize that the way managing tag and extension ordering were handled was going to limit the future of the product as a whole.
          </p>
          <p className="text-black/80 dark:text-white/80">
            I put together a proposal for addressing the issue which included comments from our customer forums as well as specific enhancements which would not be able to be realized until the issue was solved. This proposal was successful in convincing the company to move forward with addressing the issue.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Over the course of the project, I completed the initial investigation, project proposal, user research, mockups and designs, as well as final user acceptance testing. Throughout the project I worked with a project manager to define requirements and worked closely with the development team to implement the changes.
          </p>
        </div>

        {/* The Process */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">The Process</h2>
          <p className="text-black/80 dark:text-white/80">
            Once management decided to pursue the project, the first efforts focused in reaching out and talking directly to customers. I reached out to our customer success team and identified 4 customers who were heavy users of this feature and scheduled calls. The calls resulted in a clearer view of their particular use cases and challenges with the current UI.
          </p>
          <p className="text-black/80 dark:text-white/80">
            With initial feedback in hand, it was evident that customers struggled to tell what the execution order of tags and extensions were, had low confidence in their setup, and spent a great deal of time troubleshooting issues. These insights became the foundation for which UX decisions were based.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The next step involved looking at the product UX architecture and workflows involved. It was clear the use of a new UI pattern would be highly beneficial, so I then developed an interactive prototype in HTML, CSS, and Javascript to test out the concept. Feeling confident, mockups and initial specifications were then detailed out in Zeplin as development began.
          </p>
          <p className="text-black/80 dark:text-white/80">
            A few factors around the implemented changes made the release a challenge. The challenge primarily hinged on the fact that some users were re-ordering tags and extensions for organizational purposes which they were unintentionally changing the execution order. With the updated workflow, the two were separated, and users would see a different ordering within the product to reflect the true execution order. With the concern for how users would react to the change, it was decided to release the feature as an beta experiment which could be turned on/off.
          </p>
          <p className="text-black/80 dark:text-white/80">
            After the experiment was released, it took about 6 months to have enough feedback to take the feature fully available. Prior to doing so, the Product Manager and I spoke with several internal support employees and customers about the new workflow and we found a few small changes that would improve workflow efficiency. Those, along with the features such as filtering and sorting that were impossible with the old workflow were then prioritized for development as part of the GA release.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The new workflow is now in place and satisfies all of the initial goals that were set out.
          </p>
        </div>

        {/* A New UX Workflow */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">A New UX Workflow</h2>
          <p className="text-black/80 dark:text-white/80">
            In approaching the UX Architecture, it was clear that users needed a single view which combined the ordering of tags and extensions. Due to the dependencies, simply improving the ordering tool set but keeping them separate didn't accomplish the goal of clarity.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Separating out the ordering functionality from the organization management achieved the goal of clarity by allowing users to filter, sort, and search through items without conflating the presentation order with the order that the items would execute.
          </p>
          <p className="text-black/80 dark:text-white/80">
            With a combined view of tags and extensions, often in which case there may be hundreds of each in the list, the challenge was then to apply techniques that would make viewing and reordering large numbers of items easy. At a high level these included grouping items, utilizing bulk actions, the ability to find items, and the ability to move items to locations out of view.
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
            Three separate methods were implemented for the user to reorder items.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Drag & Drop</h3>
          <p className="text-black/80 dark:text-white/80">
            When moving an item within view, drag and drop is fast, easy, and familiar as it was the only means of reordering previously.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Move to Top/Bottom</h3>
          <p className="text-black/80 dark:text-white/80">
            In a lot of cases, particularly situations where you are moving a group of similar items, it is desired to move the group to the first or last positions in the list. In these cases, utilizing the menu option is the most efficient means of accomplishing the task.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Order Number Input</h3>
          <p className="text-black/80 dark:text-white/80">
            For situations where a nuanced approach is desired, for example when troubleshooting a specific item, it is beneficial to be able to enter the exact position an item should be placed relative to another item in the list.
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
            One other key aspect of the new combined view is the navigation used to scroll to each grouping of tags or extensions. The grouping represents buckets at various points of execution within the process that a browser processes website code and makes network calls. To convey this processing, the navigation displays the buckets which tags and extensions may be assigned, but also shows additional key steps in the process which provide context and insight into the broader picture.
          </p>
          <p className="text-black/80 dark:text-white/80">
            In total, these design decisions lead to a Load Order Manager tool that made users more confident in themselves and understanding of execution ordering, made troubleshooting easier, and overall felt easier to use.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default LoadOrderProject;