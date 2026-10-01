import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function PatentProject() {
  return (
    <ProjectLayout
      title="A Patent For CSS Event Tracking"
      subtitle="How I applied CSS to subvert JavaScript blockers."
      projectId="patent"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            I've spent many years building websites and prototypes with HTML and CSS, and I enjoy pushing their limits, so I got curious about some of the lesser-used CSS capabilities. One of them is the ability to trigger server calls based only on how a user interacts with a website. Pixel tracking was hugely popular in marketing, and more and more users were blocking JavaScript, so I connected the dots and submitted a patent idea through Tealium's patent program. I worked with a fellow engineer to iron out a few technical details, and we saw the process through together.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The process involved fully documenting the idea, getting it reviewed by Tealium's executive team, and working with patent lawyers to see it through. There were only a few revisions along the way, and it took about two years for the patent to be issued and posted on the USPTO website.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Brief Overview</h2>

          <p className="text-black/80 dark:text-white/80">
            The invention uses CSS in a web browser to identify which elements on a website should be tracked, and then uses CSS to make server calls that track actions. Trackable actions include clicks and other events on page elements like links, input fields, divs, spans, and list items.
          </p>

          <p className="text-black/80 dark:text-white/80">
            It covers two ways of using CSS for website tracking. In the first, CSS supplements JavaScript tracking by identifying the elements to track. In the second, actions are tracked with CSS alone, with no scripting needed.
          </p>
        </div>

        {/* Utilizing CSS Selectors For Tracking */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Using CSS Selectors For Tracking</h2>

          <p className="text-black/80 dark:text-white/80">
            Today's web trackers require someone to specify which elements on a page should be tracked. Usually that means entering element IDs in a proprietary interface or writing JavaScript.
          </p>

          <p className="text-black/80 dark:text-white/80">
            CSS already has built-in selectors that designers use to style page elements. Using CSS both to define styles and to specify what to track has several benefits:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>People who already write CSS can also define the elements and actions to track. Those jobs have usually been done by different people, so more people can help implement and maintain tracking.</li>
            <li>Element selectors live in one place, which makes the code easier to maintain. Today, when page elements change, the styles and the trackers may need to be updated separately. With CSS selectors, both get updated in the same place at the same time.</li>
            <li>CSS gives designers flexibility in how and where trackers are defined. Trackers could be written inline on page elements, in a block of definitions on the page, or in an external file. They could even be defined in a proprietary interface that generates a CSS file.</li>
            <li>You can target multiple elements by element type, class name, attribute, or attribute value.</li>
            <li>You can target elements based on screen size with media queries.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>

          <p className="text-black/80 dark:text-white/80">
            Tracking with CSS selectors requires a tracking attribute to be added to the CSS. In the example, it's labeled "tracking marker." The selector identifies the element or elements to track. The tracking marker's value is the tracking ID, which tells apart the different elements being tracked on a page. For example, when a specific button is pushed, the tracking code knows to send extra data like the page name or form ID back to the server.
          </p>

          <p className="text-black/80 dark:text-white/80">
            In the HTML, CSS styles are applied as usual. JavaScript or other code then parses the CSS, finds the elements to track, and attaches JavaScript calls to them at run time.
          </p>
        </div>

        {/* CSS Only Diagram */}
        <ProjectImage 
          src="/projects/patent/css_only.svg" 
          alt="CSS tracking diagram showing how CSS selectors identify elements for tracking with no JavaScript required"
          className="rounded-lg shadow-lg"
        />

        {/* Utilizing CSS Tracking With JavaScript Disabled */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Using CSS Tracking With JavaScript Disabled</h2>

          <p className="text-black/80 dark:text-white/80">
            JavaScript is usually available and often used for tracking, but people disable it for all kinds of reasons, including speed, bandwidth, usability, accessibility, and security.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Web apps load more slowly, especially when they pull in a lot of JavaScript from 3rd parties. Badly written JavaScript can also eat up bandwidth, which slows page loads and costs people data. That's a real concern for people in countries with poor internet access or who rely on a mobile phone to get online.
          </p>

          <p className="text-black/80 dark:text-white/80">
            JavaScript may also be disabled for usability and accessibility reasons. People using screen readers and other accessibility tools often prefer simple, non-interactive websites that are easy to read and navigate.
          </p>

          <p className="text-black/80 dark:text-white/80">
            And JavaScript may be disabled for security reasons. Websites can load malicious JavaScript in the background or use it to collect browser data.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Every modern browser supports CSS, so simple websites that want to reach people who avoid JavaScript can still see how visitors interact with their pages. That helps them understand how the site is used and how to improve it.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>

          <p className="text-black/80 dark:text-white/80">
            Tracking with CSS alone uses the HTML and CSS loaded in the browser, plus a script on a server that parses the URLs requested from it.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The CSS contains style definitions with Tracking URLs that get called when the user interacts with the page in a certain way. This kind of style definition is called a Tracker. The URL in a Tracker is made up of a Domain Name, an Account ID, and a Tracking ID. When the style is applied to an HTML element, the URL gets called whenever the user performs the action in the Tracker's CSS selector (e.g. 'active' when a user clicks the element, or 'hover' when they mouse over it).
          </p>

          <p className="text-black/80 dark:text-white/80">
            Because of how CSS works, multiple Trackers can be applied to the same HTML element, and Trackers can be triggered by nested HTML elements that have Trackers applied to them.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Trackers can be applied to any HTML element that follows standard CSS rules, including divs, spans, list items, form fields, anchor links, etc.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The server in the URL should be set up to break the URL into its parts, identifying the Account ID and Tracking ID. It then logs which Tracker ID was called, for which account, and when. From that log, you can count how many times an account's Tracker ID was called over any time period. The server can also pull more detail from the HTTP referrer data, including the server and page making the request, the user's IP address, browser information, and user agent.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Tracker style definitions can be embedded in the HTML file or kept in a separate CSS file included in the page. That CSS file could also be generated and hosted by an event tracking service.
          </p>
        </div>

        {/* CSS JS Diagram */}
        <ProjectImage 
          src="/projects/patent/css_js.svg" 
          alt="Combined CSS and JavaScript tracking workflow showing server-side parsing and event logging"
          className="rounded-lg shadow-lg"
          style={{ height: '500px' }}
        />
      </div>
    </ProjectLayout>
  );
}

export default PatentProject;