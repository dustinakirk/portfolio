import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function ScalingProject() {
  return (
    <ProjectLayout
      title="Design Team Scaling Framework"
      subtitle="Organizational design methodology for scaling design teams through different growth phases."
      projectId="scaling"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Over the last few years I've spoken to many design team managers, watched countless videos, 
            read up on design organizations, and gathered statistics around scaling design teams. 
            And I've used this research to develop a roadmap for scaling Tealium's design team. 
            While this approach is targeted toward Enterprise SaaS organization, the approach would be 
            quite similar across different company types.
          </p>
        </div>

        {/* How Many Designers Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">How Many Designers</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              At a basic level, it is important to understand just how many designers should be in a company. 
              As Tealium is an Enterprise SaaS company with approximately 500 employees, I set out to gather 
              some statistics on similar sized companies. Fortunately this was a fairly straight-forward task 
              using LinkedIn. I was able to go to a company's page and search for people with relevant titles. 
              I would then count up the people and add in any job postings they had for their design team. 
              Through this ad-hoc approach, I dug into 17 companies which varied in size from 80 employees 
              to over 1000.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              A very apparent trend appeared which indicated that for Enterprise SaaS companies, design teams 
              generally followed a 2% rule, with a slightly higher percentage for small companies. 
              While not easily quantifiable, it is clear that by looking at the company's products, 
              those with better looking UIs often had a designer ratio of 3%. Companies with an employee 
              count greater than 1000 became difficult to gather accurate data on, so I stopped there.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              I think the interesting part, at least in the case of Tealium, is that it was clear there was 
              an imbalance in hiring. While it isn't exactly clear why Tealium was so imbalanced, 
              the staffing most likely went to Sales or Support, both areas which should see improvements 
              through better product design and usability.
            </p>
          </div>
        </div>

        {/* Team Size Chart */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/scaling/team_size.svg" 
            alt="Chart showing 2% rule for design team size in Enterprise SaaS companies with size comparisons"
          />
        </div>

        {/* Design Roles Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Design Roles</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              There are a lot of ways to build out design teams, but I tried to distill some of the 
              differences between how companies staffed their teams. Using this research I put together 
              a roster that would be most appropriate for Tealium.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              One notable trend was whether a company used "Product Designer" or "UX Designer" 
              The use of these titles primarily determined by how large the company was and what coast 
              the company was on. Larger organizations used the "UX Designer" title, possibly because 
              it has been around longer. Smaller companies, especially those on the west coast used 
              the title "Product Designer" for essentially the same purpose.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              The Product Designer role is usually seen as encompassing both UX and UI design. 
              UI Designer is not a common title any more, and instead has morphed into a Visual Designer 
              title over time. And the Visual Designer title has come to encompass a larger set of design 
              elements than just those related to UI. The role now plays a part in determining product 
              branding, product creating product content, and owning the look and feel across all 
              customer touch-points.
            </p>
          </div>
        </div>

        {/* Roles Chart */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/scaling/roles.svg" 
            alt="Design team roles comparison showing Product Designer vs UX Designer titles and Visual Designer responsibilities"
          />
        </div>

        {/* Design Team Phases Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Design Team Phases</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              The composition of design teams and their needs obviously change as a company grows and 
              I wanted to develop a strategy around when those changes would occur and how best to 
              organize the team as it scales up. To research this, I again looked at companies of 
              various sizes, assessed their job titles, and distilled the results into the following chart.
            </p>
          </div>
        </div>

        {/* Org Phases Chart */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/scaling/org_phases.png" 
            alt="Design team organizational phases from startup (2 designers) to enterprise (30+ designers) with role evolution"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-4">
          <p className="text-black/80 dark:text-white/80">
            Small startups vary a lot in their approach, but often are quick to hire two designers. 
            One Sr./Lead Product Designer as well as a Jr. Designer. These designers wear multiple hats 
            completing everything from prototyping to conducting usability tests. As there is typically 
            just one product, this setup can work until a second product is added, or the company grows 
            to over 50 employees.
          </p>
          
          <p className="text-black/80 dark:text-white/80">
            When a company has around 200 employees, we can expect there to be about 5 designers. 
            At this stage we might find about 4 developer teams working on different areas of the product. 
            Companies vary in strategy, but often assign a designer to each developer team that is 
            front-end facing. The 5th designer is utilized in a variety of ways, but today's trend is 
            to begin dedicating an individual to the design system. This has many benefits, but primarily 
            in increasing the efficiency of development through common components, and maintaining a 
            unified look and feel as the products grow in size, all while keeping designers coordinated 
            and working in unison.
          </p>
          
          <p className="text-black/80 dark:text-white/80">
            Doubling in size, at around 500 employees, we can expect to find 10 designers. 
            At this point the design team is now composed of a mix of individuals dedicated to strategic 
            positions (visual design, design system, research) and now a mix of both Sr. and Jr. level 
            product designers. This mix allows Jr. product designers to build up familiarity with the 
            product and be ready to fill Sr. level vacancies as they become available.
          </p>
          
          <p className="text-black/80 dark:text-white/80">
            Once at 20 designers (~1000 employees), we typically see the design organizations with a 
            couple of managers. As most organizations try to stay as flat as possible, this may be just 
            one additional manager. For the purposes of Tealium's roadmap, I've grouped the product 
            designers under a Director of Product Design, while the strategic roles report to a VP position.
          </p>
          
          <p className="text-black/80 dark:text-white/80">
            And finally, scaling up the design team with 10 more designers gets us to an org chart with 
            divisions for User Research, Design Strategy, and Product Design. Product Design is covering 
            all feature related initiatives, Design strategy is looking across the platform as a whole 
            as a resource for both designers and developers. And User Research serves cross-functional 
            with the product team on discovery projects as well as supporting product designers through 
            design validation.
          </p>
        </div>

        {/* Supporting Dev Teams Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Supporting Dev Teams</h2>
          
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-black/80 dark:text-white/80">
              We've looked at the correlation between company size and the design team size, but that is 
              a pretty rough approximation for what goes on at a more detailed level. As a software company 
              grows, it is growing its product feature set and typically offering additional products or 
              services. All of this inherently means that the development teams are growing and the growth 
              of the design team is a factor of the dev teams' velocity. That said, I've found that 
              companies with less than 1000 employees typically have one Product Owner and one Sr. Product 
              Designer for each front-end facing scrum team.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              Scrum teams cover much of the work, as a product suite grows, there are ancillary projects 
              to account for as well. This ecosystem includes customer touch-points such as Support Portals, 
              Documentation Portals, Community Forums, etc. Lastly, there is always overhead to account for. 
              To keep overhead to a minimum, it is important to stave off filling positions in Design 
              Strategy until their efficiency gains can be quickly realized.
            </p>
            
            <p className="text-black/80 dark:text-white/80">
              As an example of efficiency gains, a User Researcher would take on all tasks related to 
              scheduling, designing tests, and analyzing test results. Shared across multiple product 
              designers, freeing up their time from these tasks allows them to focus on feature design 
              for a total efficiency gain of hiring another product designer. The payoff comes in that 
              the specialized role includes having experience and expertise that bring additional knowledge, 
              professionalism, and consistency to the craft.
            </p>
          </div>
        </div>

        {/* Staffing Chart */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/scaling/staffing.svg" 
            alt="Staffing strategy for supporting development teams with one Product Designer per front-end scrum team"
          />
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ScalingProject;