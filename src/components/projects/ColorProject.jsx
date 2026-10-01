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
            When you're building the foundation of a design system, one of the most important pieces is the color palette.
            It affects everything from buttons and links to graphics, banners, and every other visual element.
            A color system has to balance a lot of constraints: accessibility, branding, industry best practices, and maybe light and dark themes.
            Taking all of that into account can feel daunting.
            Below is the straightforward approach I use to get a cohesive, flexible color system that can handle demanding requirements.
          </p>
        </div>

        {/* Define All The Colors */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define All The Colors</h2>
          <p className="text-black/80 dark:text-white/80 mb-4">
            First things first: you'll quickly find that defining a few palettes around the brand colors isn't enough.
            For a fleshed-out color system, you should include:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Gray Scale Palette</li>
            <li>Status Colors (Red, Orange, Yellow, Green)</li>
            <li>Category Colors (not including the status colors)</li>
          </ol>
          <p className="text-black/80 dark:text-white/80 mt-4">
            The gray scale palette covers your most neutral uses, like body text, input labels, and descriptions.
            Status colors are for error, warning, and success messages.
            Category colors usually include the brand colors and span hot, warm, neutral, and cold.
            It's important that the category colors don't get too close to the status colors.
            Finally, for each of the 12-14 colors, I recommend 9 to 11 shades from very light to very dark.
          </p>
        </div>

        {/* Where To Start */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Where To Start</h2>
          <p className="text-black/80 dark:text-white/80">
            The easiest place to start is usually the brand colors, since they're often already defined.
            They tend to reflect the company's image, whether vibrant or muted.
            Using the template below, put the brand colors in their approximate spots.
            Every other color gets picked relative to the brand colors, which is what makes them all work together.
            If the brand colors include red, orange, yellow, or green... it often works better to put them in the 9 category colors and pick 'off-tones' for the status colors.
            That keeps the status colors distinct and leaves you free to use the brand colors outside of status messages.
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
            Once the brand colors are in the template, you'll want to pick one color for each row adjacent to a brand color.
            It's a good idea to mark these in your design tool so you know not to tweak them later.
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
            If one of your brand colors is a vibrant red, that would be your 'hot' color, and you might pick a 'warm' color next to it... perhaps a vibrant pink.
            Like a game of connect the dots, fill in the gaps with colors that transition between each of the brand colors.
            As you go, include at least one row of off-green (e.g. mint), one row of off-orange (e.g. mango), and one row of off-red (e.g. raspberry).
            That way if you need a red, you don't have to use the status color.
            By the end of this step, there should be at least one color defined for each of the category colors.
            It's up to you how many of those rows are warm vs. cool, but leaning slightly toward the cooler colors (teals, blues, and purples) gives you enough variety for graph and chart sequences.
          </p>
          <p className="text-black/80 dark:text-white/80">
            Next, fill in the 4 status colors.
            Start from the most saturated or vibrant brand color and shift the hue to get a red, orange, yellow, and green.
            If the brand color is a red, shift the hue enough to be distinct but keep the saturation and brightness.
            You'll mostly adjust saturation and brightness later, when you fill out the rest of the palette.
          </p>
        </div>

        {/* Defining The Gray Scale */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Defining The Gray Scale</h2>
          <p className="text-black/80 dark:text-white/80">
            Now is a good point to define the full range of grays from almost white to almost black. 
            Note that white and black aren't part of the gray scale. They live in the color system separately from the grays.
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
            There are a few things to think about when picking the gray scale.
            The first is the number of shades.
            I'd recommend at least 9 shades, but no more than 11.
            After building several color systems, I'd go with 11 on any future project.
            The second is how to space the shades at the ends.
            You'll likely have more uses for light grays than medium grays.
            So the shades at the light and dark ends should be closer together than the ones in the middle.
            This applies to all the other colors too, but working it out on the grays first makes the later steps easier.
            The third is how light the lightest gray should be.
            Think about where your app will be seen here, because screens vary a lot in how well they reproduce color.
            A very subtle gray may show up on a phone but blend into a white background on a TV.
            Projectors tend to have terrible contrast, and lighter shades get completely lost.
          </p>

          <h3 className="text-xl font-semibold mb-3">Add A Tint</h3>
          <p className="text-black/80 dark:text-white/80">
            One thing people often overlook when choosing grays is that you can add some saturation.
            Pure gray is rare in nature, and it tends to look harsh and unfinished.
            A hue with slight saturation looks more refined and polished.
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
            Now that you know how many shades each color will have, it's time to assign them tokens.
            Tokens make it easy to refer to specific colors with your team and with developers.
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
            This is also the time to name each of the category colors.
            A good rule of thumb is to use names you'd find in a box of crayons.
            Creative or obscure color names can be hard for people from other countries.
          </p>
        </div>

        {/* Define The Remaining Colors */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define The Remaining Colors</h2>
          <p className="text-black/80 dark:text-white/80">
            With the gray scale defined and tokens assigned, the next step is to fully define the status colors.
            Starting from the color you already picked in each row, choose colors that fade from light to dark.
            To cut down on tweaking, define every other color in the row first, then go back and fill in the blanks.
            For example, start at red 500, then pick red 300, then red 100.
            For each one, use the hue of the original color in the row and the brightness of the matching gray.
            So for red 300, use the hue of red 500 and the brightness of gray 300.
            Lower the saturation toward the light end of the scale and raise it toward the dark end.
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
            There are a lot of nuances to picking these colors, but to start, go through each row doing every other one.
            On the second pass, it's easier to pick a color when there's already one on either side.
          </p>

          <h3 className="text-xl font-semibold mb-3">Using Saturation</h3>
          <p className="text-black/80 dark:text-white/80 mb-4">
            Each color row is mostly defined by its hue and brightness... but saturation is the magic that blends colors across rows.
            Especially around a brand color, use saturation to get an even transition to the neighboring colors.
          </p>

          <h3 className="text-xl font-semibold mb-3">Choosing Yellows...</h3>
          <p className="text-black/80 dark:text-white/80">
            Yellows, especially dark yellows, often end up looking really ugly.
            Rather than just darkening a vibrant yellow, you can shift the hue a bit toward a more appealing color.
            It often works well to push the yellows toward mustard tones, and even into the orange range for the darkest ones.
            There's a lot of freedom here, just make sure you don't end up with a yellow that could be mistaken for an orange.
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
            As you wrap up, it's a good time to check how the system holds up against accessibility guidelines.
            I recommend a fairly deep color system with up to 11 shades per color, but it's important to understand its limits.
            You'll want to know which parts of your palette have poor contrast, and how well light and dark text contrasts with each color.
            There are plenty of tools for this, and once you've run the numbers, you'll have a good sense of how to apply your color system, or whether it needs more adjusting for your use cases.
          </p>
        </div>

        {/* Define The Rules */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Define The Rules</h2>
          <p className="text-black/80 dark:text-white/80">
            One of the starting points was that the status colors should stay distinct from the category colors.
            A few usage guidelines can go a long way toward a cohesive look and feel once the colors are applied to a UI.
            There's a lot of flexibility in how you define these, but here are a few examples.
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
            You should now have a color system that works well with your brand colors. Because it's complete, it can cover everything your UI needs and work across both product and marketing.
            The next step is to apply the colors to your UI components and maybe define your chart and graph color sequences.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ColorProject;