import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function ChartsProject() {
  return (
    <ProjectLayout
      title="Chart System Pro"
      subtitle="A look into the process and nuances of creating a charts and graphs design system."
      projectId="charts"
    >
      <div className="space-y-12">
        {/* Hero Images */}
        <div className="relative h-[400px] mx-auto" style={{ maxWidth: '900px' }}>
          <img 
            src="/projects/charts/chart3.png" 
            alt="Sample line chart showing data visualization with clean styling"
            className="absolute w-[44%] top-[5%] left-[-15%] rounded-lg"
          />
          <img 
            src="/projects/charts/chart1.png" 
            alt="Sample bar chart demonstrating the chart system's design consistency"
            className="absolute w-[48%] top-[32%] left-[0%] rounded-lg z-10"
          />
          <img 
            src="/projects/charts/chart2.png" 
            alt="Sample area chart showcasing the enterprise-ready design system components"
            className="absolute w-[46%] top-[0%] right-[20%] rounded-lg"
          />
          <img 
            src="/projects/charts/chart4.png" 
            alt="Sample candlestick chart illustrating the comprehensive chart system coverage"
            className="absolute w-[45%] bottom-[0%] right-[0%] rounded-lg"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            The design system at Tealium has grown over the years, however one area (among many) that was not flushed out were the components needed for charts and graphs. As with all aspects of design systems, the hardest part is creating and documenting all of the low level components necessary to realize the vast array of desired outcomes. While many UI boiler-plate components are encapsulated in systems like Ant and Material design systems, I took it on as a personal project to build out a chart and graph system that could be utilized by others.
          </p>
          <p className="text-black/80 dark:text-white/80">
            I have now published the first version of Chart System Pro which is available on <a href="https://gumroad.com/l/sXIAq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Gumroad</a> for anyone to download. The system encompasses all grid-based charts and graphs including line charts, bar graphs, area charts, candlesticks, and others. Included are color sequences for all chart types which may be customized, a sample library of charts and graphs which may be quickly duplicated and edited as well as chart components including annotations, trendlines, plot pins, and reference bands. It truly became an invaluable tool as it is incredibly easy to generate the desired chart while maintaining the consistency inherent in a good design system.
          </p>
        </div>

        {/* Chart System Pro Overview */}
        <ProjectImage 
          src="/projects/charts/chart_system_pro.png" 
          alt="Chart System Pro overview showing the comprehensive design system structure and components"
          className="rounded-lg shadow-lg"
        />

        {/* System Strategy And Planning */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">System Strategy And Planning</h2>
          <p className="text-black/80 dark:text-white/80">
            Among the first activities in creating any design system is to plan out the design system structure and take inventory of the components that will be necessary to include. In this case, I applied the Atomic Design approach popularized by Brad Frost. Using this approach I mapped out atomic level components which are as basic as a line or rectangle. These atomic level components, while not necessarily useful on their own, are grouped into molecules which form the common component utilized in a chart or graph. For this project, the common use cases involved utilizing the molecules with slight variations. These variations were cataloged as templates which could be easily copied and pasted onto the charts.
          </p>
        </div>

        {/* Atoms and Plot Points */}
        <div className="relative h-[400px] mx-auto" style={{ maxWidth: '900px' }}>
          <img 
            src="/projects/charts/atoms.png" 
            alt="Atomic design components including basic lines and rectangles used as building blocks"
            className="absolute rounded-lg shadow-lg top-[-5%] left-[5%]"
            style={{ maxHeight: '430px', objectFit: 'cover' }}
          />
          <img 
            src="/projects/charts/plot_points.png" 
            alt="Plot point molecules showing common chart components with slight variations"
            className="absolute rounded-lg shadow-lg w-[50%] top-[5%] right-[5%]"
            style={{ maxHeight: '430px', objectFit: 'cover' }}
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            To identify the components that would be necessary, I researched all types of charts and graphs and collected a vast library of charts and graphs published in news articles, research papers, financial reports, etc. I then parsed the catalogue and identified unique variations of elements such as legends, annotations, tic marks, etc. Then knowing the variations, I constructed the atomic and molecular components needed to recreate them. This allowed me to then create templates of each variation which could be easily copy and pasted into a chart, or easily swapped using the component switcher in Figma.
          </p>
        </div>

        {/* Building The System */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Building The System</h2>
          <p className="text-black/80 dark:text-white/80">
            The overall system was fairly straight-forward to construct once the research and planning was complete. I first constructed the grid components to get a base-line for the size of the charts. I chose a 600 x 300 pixel grid as the base and built all other components around that size. The size was chosen as it closely reflected a wide variety of charts and graphs found while taking inventory. All other chart elements were sized off of that grid.
          </p>
        </div>

        {/* Grids */}
        <ProjectImage 
          src="/projects/charts/grids.png" 
          alt="Grid templates based on 600x300 pixel baseline for chart construction"
          className="rounded-lg shadow-lg"
          style={{ maxHeight: '280px', width: 'auto', objectFit: 'contain' }}
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            With grid templates in place, I built out the various plots points. In thinking through the use cases that are common for charts and graphs, I provided templates that covered basic simple use cases, scientific cases which are often multiples of 5, and date based use cases which include 7 days in a week, 30/31 days in a month, and 12 months in a year.
          </p>
        </div>

        {/* Bars */}
        <ProjectImage 
          src="/projects/charts/bars.png" 
          alt="Bar chart templates covering simple, scientific, and date-based use cases"
          className="rounded-lg shadow-lg"
          style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Lastly, I built out all basic chart components which will not only apply to grid-based charts, but also to a wide variety of chart types to be supported in the future such as pie charts, donut charts, spider charts, etc. I had particular fun detailing out the annotations as component structure is incredibly flexible and can be customized in some pretty wild ways.
          </p>
        </div>

        {/* Plot Groups */}
        <ProjectImage 
          src="/projects/charts/plot_groups.png" 
          alt="Chart components including flexible annotations for various chart types"
          className="rounded-lg shadow-lg"
          style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain' }}
        />

        {/* Defining Color Sequences */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Defining Color Sequences</h2>
          <p className="text-black/80 dark:text-white/80">
            Deserving of its own write-up, one often overlooked aspect of color systems is their ability to support charts and graphs. There are 12 color sequences that should be defined for a chart system and they require a full pallet of colors including hot, warm, neutral, cool, cold, and status colors. In order to generate the necessary color sequences, I created a unique color system specific for Chart System Pro. While these colors may be customized, they provide users with the necessary components from the start and can act as a reference for future customizations.
          </p>
        </div>

        {/* Color Sequences */}
        <ProjectImage 
          src="/projects/charts/color_sequences.png" 
          alt="12 color sequences including categorical, sequential, and divergent variations"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            In generating the color sequences, I researched and utilized best practices advocated by IBM and others. Perhaps the most evident best practice utilized is ensuring high contrast levels for adjacent plot sequences.
          </p>
        </div>

        {/* Sequential Multicolor */}
        <div className="relative h-[275px] mx-auto overflow-hidden" style={{ maxWidth: '900px' }}>
          <img 
            src="/projects/charts/sequential_multicolor.png" 
            alt="Sequential multicolor palette with high contrast for adjacent plot sequences"
            className="absolute w-[140%] h-auto rounded-lg shadow-lg"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            At a high level, the types of sequences are as follows. Categorical sequences are utilized for graphs where there is no direct relationship between plot points such as car brands. Sequential color sequences convey a relative order to each plot point such as dates, and divergent color sequences convey a relative order, but between two opposing directions such as temperature. Overall, the 12 sequences include 16, 8, and 4 color variations and they are all defined and organized within Figma's style selector making for over 336 defined color sequence styles.
          </p>
        </div>

        {/* Figma Limitations */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Figma Limitations</h2>
          <p className="text-black/80 dark:text-white/80">
            While Figma is incredibly powerful, a lot of wish-list items came out of this project. One major limitation of Figma (at the time) is the inability to swap components or resize elements inside a component. For instance, when displaying a plot group, it would be great to be able to add or remove however many plot values are necessary for the graph. To work-around this restriction, I created a large number of values which would be made hidden when they are not needed.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Another big limitation is the ability to manipulate stacked bar charts and stacked area charts. The manipulation of these are extremely tedious as there is no object awareness between each plot sequence. So, for now, I chose not to include these chart types.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Other wish-list items include better tools for managing defined styles, the ability to set a custom anchor point, the ability to tab through vector points, display toggle off borders on specific sides of a shape, and set frames to fill available space.
          </p>
        </div>

        {/* ECG Animation */}
        <div style={{ width: 'fit-content', margin: '40px auto 0px auto' }}>
          <ProjectImage 
            src="/projects/charts/ECG_gif.gif" 
            alt="Animated ECG chart demonstration showing real-time data visualization capabilities"
            className="rounded-lg shadow-lg"
            style={{ maxHeight: '451px' }}
          />
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ChartsProject;