import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function ColorProject() {
  return (
    <ProjectLayout
      title="Color Systems"
      subtitle="My methodical approach toward establishing a color system."
      projectId="color"
    >
      <div className="space-y-12">
        {/* Dual Color System Images */}
        <div className="relative h-[320px] mx-auto mb-8" style={{ maxWidth: '800px', height: '480px' }}>
          <img 
            src="/projects/color/cag_color_system.png" 
            alt="CAG color system showing comprehensive brand palette with multiple hues and shades"
            className="absolute w-[45%] top-[40px] left-[5%] rounded-lg shadow-xl border border-black/10 dark:border-white/10 bg-white"
          />
          <img 
            src="/projects/color/tealium_color_system.png" 
            alt="Tealium color system inspired by San Diego with vibrant blues, aquas, and yellows"
            className="absolute w-[45%] top-[10px] right-[5%] rounded-lg shadow-xl border border-black/10 dark:border-white/10 bg-white"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            In building out the foundational elements of a design system, one of the key aspects is the color pallet that will be utilized. 
            This color pallet influences everything from the button and link colors, to the graphical elements, banners, and all visual aspects. 
            The color system encapsulates a variety of constraints and restrictions that must be balanced and accounted for. 
            There are accessibility concerns, branding concerns, industry best practices, and possibly light and dark themes. 
            With all of the facets accounted for, it can certainly be a daunting task. 
            Below I'll lay out a strait forward approach that will result in a cohesive and flexible color system able to address the most demanding requirements.
          </p>
        </div>

        {/* Define All The Colors */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define All The Colors</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            First things first, you will quickly find that only defining a few pallets based on the brand colors is going to be inadequate and limiting. 
            For a flushed out color system, you should include:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Gray Scale Pallet</li>
            <li>Status Colors (Red, Orange, Yellow, Green)</li>
            <li>Category Colors that do not include the status colors.</li>
          </ol>
          <p className="text-black/80 dark:text-white/80 mt-4">
            The gray scale pallet will typically cover your most neutral use cases including body text, input labels, descriptions, etc. 
            Status colors are selected to indicate error, warning, and success messaging. 
            The category colors typically include brand colors and include hot, warm, neutral, and cold colors. 
            It is important that the category colors do not tread too closely to the status colors. 
            Lastly, for each of the 12-14 colors, I recommend defining 9 to 11 shades ranging from very light to very dark.
          </p>
        </div>

        {/* Where To Start */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Where To Start</h2>
          <p className="text-black/80 dark:text-white/80">
            Often the easiest place to start is the brand colors as these are often already defined. 
            The brand colors will typically reflect the image of the company through vibrant or muted tones. 
            Using the template shown, place the brand colors in their approximate locations. 
            From this point all selected colors will be selected relative to the brand colors allowing them all to work nicely with each other. 
            If the brand colors include Red, Orange, Yellow, or Green... it often works better to include them in the 9 Category colors and choose 'off-tones' for the status colors. 
            This will ensure the status colors remain distinctive and you retain freedom to utilize the brand colors outside of the context of status messages.
          </p>
        </div>

        {/* Brand Colors Image */}
        <ProjectImage 
          src="/projects/color/brand_colors.png" 
          alt="Brand color template showing placement of corporate brand colors as foundation for color system"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Once the brand colors are selected and in the template, you'll want to select one color for each row that is adjacent to the brand color. 
            In your design tool, it is a good idea to mark these items so you know not to tweak them later on.
          </p>
        </div>

        {/* Color Stripe Image */}
        <ProjectImage 
          src="/projects/color/color_stripe.png" 
          alt="Color stripe showing adjacent colors selected to transition between brand colors"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 mb-4">
            If one of your brand colors is vibrant red, that would be your 'hot' color and you might select a 'warm' color to be adjacent... perhaps a vibrant pink. 
            Like a game of connect the dots, fill in the gaps choosing the colors that will transition between each of the brand colors. 
            As you select colors, include at least one row of off-green (eg: mint), one row of off-orange (eg: mango), and one row of off-red (eg: raspberry). 
            That way if you need a red, you don't need to use the status color. 
            At the end of this step, there should be at least one color defined for each of the category colors. 
            It is up to you as to how many of those rows fall into the warm vs cool colors, but a slight lean toward the cooler colors (teals, blues and purples) will ensure there is enough diversity when it comes to graph and chart sequences.
          </p>
          <p className="text-black/80 dark:text-white/80">
            The next step is to complete the 4 status colors. 
            To select these colors, choose the most saturated or vibrant brand color and begin tweaking the hue to choose a red, orange, yellow, and green. 
            In this case, if the brand color is a red, adjust the hue enough to be distinctive, but maintain the saturation and brightness. 
            The saturation and brightness are primarily tweaked in filling out the remainder of the pallet later on.
          </p>
        </div>

        {/* Defining The Gray Scale */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Defining The Gray Scale</h2>
          <p className="text-black/80 dark:text-white/80">
            Now is a good point to define the full range of grays from almost white to almost black. 
            Note that white and black are not included in the gray scale and are represented in the color system external of the grays.
          </p>
        </div>

        {/* Gray Scale Image */}
        <ProjectImage 
          src="/projects/color/grey_scale.png" 
          alt="Gray scale palette with 9-11 shades ranging from almost white to almost black"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 mb-4">
            There are a few considerations when it comes to selecting the gray scale. 
            The first of which is to determine the number of shades. 
            I would recommend a minimum of 9 shades, but no more than 11. 
            Having created several color systems, I would select 11 shades for any future projects. 
            The second consideration is how to fade the shades at the ends. 
            There are likely to be more use cases for lighter shades of gray than medium grays. 
            Thus the lighter and darker ends of the spectrum will have less of a difference than the shades in the middle. 
            This applies to all of the other colors as well, but defining this for the grays first will make the later steps easier. 
            The next consideration is how light is the lightest gray. 
            It is important to consider the context of your application here as various screens vary in their ability to recreate a color. 
            A very subtle gray may be noticeable on a phone, but blend in with a white background on a TV. 
            Projectors tend to have terrible contrast and lighter shades are completely lost.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Add A Tint</h3>
          <p className="text-black/80 dark:text-white/80">
            One often overlooked aspect in choosing a gray pallet is that you can choose to add some saturation. 
            In nature it is rare to find pure gray and it tends to lead toward a harsh and unfinished look. 
            Choosing a hue with slight saturation will create a more refined look and feel more polished. 
            As the gray gets darker, boost the saturation.
          </p>
        </div>

        {/* Tint Image */}
        <ProjectImage 
          src="/projects/color/tint.png" 
          alt="Gray scale with subtle tint showing how saturation creates a more refined and polished look"
          className="rounded-lg shadow-lg"
        />

        {/* Define The Color Tokens */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define The Color Tokens</h2>
          <p className="text-black/80 dark:text-white/80">
            You now know how many shades of each color will be supported and it is time to assign them tokens. 
            This will help you reference specific colors among your team and with developers.
          </p>
        </div>

        {/* Tokens Image */}
        <ProjectImage 
          src="/projects/color/tokens.png" 
          alt="Color token system with numerical naming convention (50, 100, 150, etc.) for easy reference"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 mb-4">
            To begin, assign the center shade 500 and work toward the ends. 
            As shades may be closer together at the ends, feel free to assign them tokens of 150, 100, 50, 25, and likewise for the dark end of the spectrum (800, 850, 900, 950).
          </p>
          <p className="text-black/80 dark:text-white/80">
            Also for this step, you will want to name each of the category colors. 
            A good reference is to utilize names that might appear in a box of crayons. 
            Getting creative or obscure with color names can make it difficult for people from other countries.
          </p>
        </div>

        {/* Define The Remaining Colors */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define The Remaining Colors</h2>
          <p className="text-black/80 dark:text-white/80">
            With the gray scale defined and tokens assigned, the next step will be to fully define the status colors. 
            Starting from the previously defined color in each row, begin to select colors that fade from light to dark. 
            To minimize the amount of tweaking define every other color in the row first, then go back and fill in the blanks. 
            As an example start at red 500, then select the color for red 300, then red 100. 
            When selecting these colors, reference the hue of the original color in the row, and the brightness of the gray scale color. 
            So the color in position red 300, choose the color using the hue of red 500 and the brightness of gray 300. 
            When defining colors at the light end of the scale, lessen the saturation and when at the dark end of the scale increase the saturation.
          </p>
        </div>

        {/* Color Pass 1 Image */}
        <ProjectImage 
          src="/projects/color/color_pass1.png" 
          alt="First pass of color definition showing every other shade filled in using hue and brightness relationships"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80 mb-4">
            There are many nuances to selecting these colors, but to start, go through each of the colors doing every other one. 
            In the second pass, it is easier to select a color when it already has a color to the left and right.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Utilizing Saturation</h3>
          <p className="text-black/80 dark:text-white/80 mb-4">
            While each color row is primarily defined by its hue and brightness... the saturation is the magic that blends colors across rows. 
            Particularly when matching colors surrounding a brand color, utilize the saturation to ensure an even transition to adjacent colors.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Choosing Yellows...</h3>
          <p className="text-black/80 dark:text-white/80">
            Yellows, especially dark yellows often end up looking really ugly. 
            Rather than simply darkening a vibrant yellow, you can adjust the hue a bit to more appealing color. 
            This often works well in shifting the yellows more toward mustard tones and even into the orange range for the darkest tones. 
            There is a lot of freedom here, but just ensure you don't have a yellow that could be confused for an orange.
          </p>
        </div>

        {/* Yellows Image */}
        <ProjectImage 
          src="/projects/color/yellows.png" 
          alt="Yellow color progression showing hue adjustments toward mustard and orange tones for darker shades"
          className="rounded-lg shadow-lg"
        />

        {/* Accessibility Review */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Accessibility Review</h2>
          <p className="text-black/80 dark:text-white/80">
            As we wrap up the color system this is a good time to do a checkin and see how the system matches up to accessibility guidelines. 
            While I recommend defining a fairly deep color system with up to 11 shades for each color, it is important for you to understand your color system's limits. 
            You'll want to know what areas of your color pallet have poor contrast and how well light and dark texts contrasts with each of the colors. 
            There are many tools you can use and once analyzed, you'll have a good sense on how to apply your color system, or if further adjustment is required to meet your use cases.
          </p>
        </div>

        {/* Define The Rules */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define The Rules</h2>
          <p className="text-black/80 dark:text-white/80">
            One of the starting premises was that the status colors should remain distinctive from the other category colors. 
            A few usage guidelines can go along way in ensuring a cohesive look and feel when applied to a UI. 
            There is a lot of flexibility in how you define these, but I've included several examples below.
          </p>
        </div>

        {/* Rules Image */}
        <ProjectImage 
          src="/projects/color/rules.png" 
          alt="Color system usage rules for text colors, gradients, and dark colors to ensure cohesive application"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold mb-3">Text Colors:</h3>
          <p className="text-black/80 dark:text-white/80 mb-4">
            When text is on white or black, the text color should be chosen from the gray pallet. 
            When text is on a color, the text color should be a light or dark tone of the same color.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Gradients:</h3>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Gradient colors should only be selected from the category colors and within the 200-800 bands. 
            Alternatively, gradient colors must be within 5 color blocks from each other.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Dark Colors:</h3>
          <p className="text-black/80 dark:text-white/80">
            To prevent muddy and indistinguishable colors, when tones within the 750-900 range are used, no other tones from adjacent colors may be used.
          </p>
        </div>

        {/* Wrap-up */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Wrap-up</h2>
          <p className="text-black/80 dark:text-white/80">
            You should now have a color system that works well with your brand colors and because it has all of the colors, it can satisfy all of the needs of your UI and be utilized across both product and marketing. 
            The next step will be to apply the colors to your UI components and possibly define your chart and graph sequence colors.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ColorProject;