import React from "react";
import ProjectLayout from "../ProjectLayout";

function PillarsProject() {
  return (
    <ProjectLayout
      title="Design Principles"
      subtitle="Guiding principles for enterprise SaaS product design teams."
      projectId="pillars"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            As a product designer, there's an enormous number of things you could weigh when shaping a new experience.
            To make those decisions easier and keep them grounded in a few clear principles, I put together these four pillars to guide design across Tealium's products.
          </p>
          <p className="text-black/80 dark:text-white/80 mt-4">
            I wrote them for Tealium, but they apply well to any enterprise SaaS product.
            In these products, the user usually isn't the buyer, the subject matter tends to be complex and technical, and there's a huge amount of data to manage.
            Whether it's IoT devices, sales pipelines, logistics, people, or events, these principles will point product designers toward a great experience for the people using the product.
          </p>
        </div>

        {/* Pillar 1: Clarity */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Pillar 1: Clarity</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Ensure the user is able to understand what they are looking at, know what is going on, and how things are related.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Provide orientation information so the user knows where they are and what they are looking at.</li>
            <li>Show relationships, and dependencies between items.</li>
            <li>Build confidence with success messages, and write detailed error messages that tell users what went wrong.</li>
            <li>Provide contextual help and resource links when a user may not be familiar with a concept.</li>
            <li>Turn multiple pieces of data into easy-to-read visuals that show what matters.</li>
          </ol>
        </div>

        {/* Pillar 2: Usability */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Pillar 2: Usability</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Ensure users are able to complete their objectives without getting lost and confused about what to do next.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Make information actionable from any context. (states, configurations, errors, warnings, etc...)</li>
            <li>Maintain goal oriented workflows.</li>
            <li>Streamline workflows: design for new users first, add shortcuts for experienced users, and base the workflow on what user research shows.</li>
            <li>Stay consistent, but not at the expense of clarity in the current context. Context beats consistency.</li>
          </ol>
        </div>

        {/* Pillar 3: Efficiency */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Pillar 3: Efficiency</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Ensure the user can complete objectives quickly and succinctly.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Streamline common tasks with bulk actions, wizards and templates, and contextual navigation shortcuts.</li>
            <li>Provide meaningful default values.</li>
            <li>Don't ask users to enter information twice.</li>
            <li>Pre-focus cursor in input fields.</li>
            <li>Enable keyboard shortcuts.</li>
            <li>Ensure extreme conditions are considered (1000s of items in list).</li>
          </ol>
        </div>

        {/* Pillar 4: Accessibility */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Pillar 4: Accessibility</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Ensure everyone can use the product, whatever their abilities, device, or language.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Don't rely on color alone to indicate state or status.</li>
            <li>Minimize use of low-contrast colors and very small font sizes.</li>
            <li>Provide tooltips on any text that may get cut off.</li>
            <li>Enable keyboard usage and ensure the optimal tab order.</li>
            <li>Ensure translated text fits the provided area (German +50%).</li>
            <li>Check contrast on projectors and TVs.</li>
          </ol>
        </div>

      </div>
    </ProjectLayout>
  );
}

export default PillarsProject;