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
            As a product designer, there are a tremendous number of factors that can be taken into account when forming a new user experience. 
            To streamline the decision making and crystalize the experience around guiding principles, I put together the following four pillars to guide design decisions throughout Tealium's products.
          </p>
          <p className="text-black/80 dark:text-white/80 mt-4">
            While developed particularly for Tealium's benefit, they apply well to all enterprise SaaS products. 
            These products have a user base in which the user is not the purchaser, they typically deal with complex and technical domains, as well as encapsulate the management of huge amounts of data. 
            Whether managing IoT devices, sales pipelines, logistics, people, or events, the following principles will guide product designers in the direction of great experiences for the end users.
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
            <li>Build confidence through success messaging or provide detailed error messages that inform users on what went wrong.</li>
            <li>Provide contextual help and resource links when a user may not be familiar with a concept.</li>
            <li>Display insightful information by distilling multiple pieces of data into easy to consume visuals.</li>
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
            <li>Streamline workflows by: a. Design for the new user first in mind. b. Design optimizations for experienced users. c. Design the workflow based on the data from the user research.</li>
            <li>Maintain consistency but not compromise the clarity in the current context. The current context beats consistency.</li>
          </ol>
        </div>

        {/* Pillar 3: Efficiency */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Pillar 3: Efficiency</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Ensure the user can complete objectives quickly and succinctly.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Streamline common tasks by using wizards by allowing repeated actions to be done in bulk, utilize wizards and templates, and provide contextual navigation shortcuts.</li>
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
            Ensure the user can complete objectives quickly and succinctly.
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