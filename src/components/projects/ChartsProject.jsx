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
            Tealium's design system has grown over the years, but one area (among many) that was never fleshed out was charts and graphs. As with any part of a design system, the hard part is building and documenting all the low-level components you need to cover everything people want to make. Systems like Ant and Material cover a lot of the standard UI components, so I took it on as a personal project to build a chart and graph system that other people could use too.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The first version of Chart System Pro is now up on <a href="https://gumroad.com/l/sXIAq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Gumroad</a> for anyone to download. It covers grid-based charts and graphs, including line charts, bar graphs, area charts, candlesticks, and more. It comes with customizable color sequences for every chart type, a library of sample charts you can duplicate and edit, and chart components like annotations, trendlines, plot pins, and reference bands. It's become a tool I rely on. It's really easy to make the chart you want and still keep the consistency you'd expect from a good design system.
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
            One of the first steps in any design system is planning the structure and taking inventory of the components you'll need. Here I used the Atomic Design approach popularized by Brad Frost. I mapped out atoms, which are as basic as a line or a rectangle. They aren't very useful on their own, but they combine into molecules, which are the common pieces you see in a chart or graph. Most use cases needed those molecules with slight variations, so I cataloged the variations as templates that could be copied and pasted onto a chart.
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
            To figure out which components I'd need, I collected a big library of charts and graphs from news articles, research papers, financial reports, etc. I went through the collection and noted every unique variation of things like legends, annotations, and tick marks. Then I built the atoms and molecules needed to recreate them. From there I could make a template for each variation that could be copied into a chart or swapped with Figma's component switcher.
          </p>
        </div>

        {/* Building The System */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Building The System</h2>
          <p className="text-black/80 dark:text-white/80">
            Once the research and planning were done, building the system was fairly straightforward. I started with the grid components to set a baseline size for the charts. I picked a 600 x 300 pixel grid because it was close to a lot of the charts I'd collected, and sized every other element off of it.
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
            With the grid templates in place, I built out the plot points. I made templates for the common cases: simple ones, scientific ones that tend to come in multiples of 5, and date-based ones like 7 days in a week, 30 or 31 days in a month, and 12 months in a year.
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
            Last, I built the basic chart components. They work for grid-based charts and will also work for chart types I want to support later, like pie, donut, and spider charts. The annotations were the most fun to work out, because the component structure is really flexible and can be customized in some pretty wild ways.
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
            This really deserves its own write-up, but one part of color systems people often overlook is how well they support charts and graphs. A chart system needs 12 color sequences, and those take a full palette of hot, warm, neutral, cool, cold, and status colors. To make the sequences, I created a color system just for Chart System Pro. You can customize the colors, but they give you everything you need out of the box and a reference point if you do change them.
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
            For the sequences, I followed best practices from IBM and others. The most obvious one is keeping contrast high between neighboring plot sequences.
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
            There are three kinds of sequences. Categorical sequences are for data where the points have no direct relationship, like car brands. Sequential sequences show an order, like dates. Divergent sequences show an order that runs in two opposite directions, like temperature. The 12 sequences come in 16, 8, and 4 color versions, all defined and organized in Figma's style picker, for over 336 color sequence styles.
          </p>
        </div>

        {/* Figma Limitations */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Figma Limitations</h2>
          <p className="text-black/80 dark:text-white/80">
            Figma is incredibly powerful, but I came out of this project with a long wish list. A big limitation (at the time) was that you couldn't swap components or resize elements inside a component. For example, with a plot group, I'd want to add or remove however many values the graph needs. To work around it, I created a lot of values and hid the ones that weren't needed.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Stacked bar and stacked area charts were another problem. Editing them is extremely tedious because the plot sequences don't know about each other. So for now, I left those chart types out.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Other things on the wish list: better tools for managing styles, custom anchor points, tabbing through vector points, turning off borders on specific sides of a shape, and frames that fill the available space.
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