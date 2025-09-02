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
            With many years of experience creating websites and prototypes with HTML and CSS, and a personal fondness for pushing its limits, I became interested in some of the lesser utilized CSS capabilities. One of these capabilities is the ability to trigger server calls based solely on the user's website interactions. With pixel tracking being incredibly popular in the marketing industry, and with javascript being increasingly blocked by users, I connected the dots and decided to submit a patent idea through Tealium's patent program. In doing so, I worked with a fellow engineer to iron out a few technical details and we completed the process together.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The process involved fully documenting the idea, getting it reviewed by Tealium's executive team, and working with patent lawyers to see it through completion. With minimal revisions along the way, the entire process took approximately two years until fully issued and posted to the USPTO website.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Brief Overview</h2>

          <p className="text-black/80 dark:text-white/80">
            The invention entails using CSS in a web-browser to identify elements on a website to be tracked and then making server calls using CSS to track actions. Trackable actions include clicks and other events on web page elements such as links, input fields, divs, spans, and list-items.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The invention covers two scenarios for using CSS for website tracking. The first is for CSS to be used to supplement JavaScript tracking by identifying elements to be tracked. The second is tracking actions with only CSS with no additional scripting needed.
          </p>
        </div>

        {/* Utilizing CSS Selectors For Tracking */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Utilizing CSS Selectors For Tracking</h2>

          <p className="text-black/80 dark:text-white/80">
            Current web trackers require that a person specify web page elements of a website to be tracked. This is typically implemented by having the user specify element IDs via a proprietary interface or directly using JavaScript.
          </p>

          <p className="text-black/80 dark:text-white/80">
            CSS already has built in selectors which website designers use to define the styles of the website elements. By utilizing the CSS for both defining style attributes and specifying elements to be tracked, the following benefits can be had:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-black/80 dark:text-white/80">
            <li>Enable people already tasked with defining CSS styles to also define elements and actions to be tracked. These tasks have typically been done by different people. Websites implementing tracking will benefit from more people being able to take on the task of implementing and maintaining tracking.</li>
            <li>Consolidate element selectors and improve code maintainability. When website elements change, current implementations may require changes in separate places to both the styles and trackers. By utilizing CSS selectors, updates could be made in the same place and at the same time.</li>
            <li>Gives web designers flexibility in how and where trackers are defined due to the inherent capabilities of CSS. Trackers could be specified inline with webpage elements, within a block of definitions within a page, or externally. They could even be defined through a proprietary interface which generates a CSS file.</li>
            <li>The ability to target multiple elements with an element type, class name, attribute value or attribute.</li>
            <li>The ability to target elements based on screen size using media queries.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>

          <p className="text-black/80 dark:text-white/80">
            Tracking with CSS selectors requires an attribute associated with tracking to be placed within the CSS. In the example provided, this is marked "tracking marker" The selector will identify the element(s) desired to be tracked. The tracking marker has a value, and this is the tracking ID. The tracking ID is used for tracking purposes to distinguish between multiple elements tracked on a page. For example, when a specific button is pushed, the tracking code would know to send additional data such as page name, form id, etc. back to the server.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Within the HTML markup, CSS styles are applied as usual. JavaScript or other code is then used to parse the CSS, identify the elements to be parsed, and attach javascript calls to the specified elements during run-time.
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
          <h2 className="text-2xl font-bold mb-4">Utilizing CSS Tracking With JavaScript Disabled</h2>

          <p className="text-black/80 dark:text-white/80">
            While Javascript is often available and used for tracking, it may be disabled for a variety of reasons including speed, bandwidth, usability, accessibility, and security.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Web applications, especially those utilizing a large amount of JavaScript loaded from 3rd parties load more slowly. Badly written JavaScript can also consume a lot of extra bandwidth which slows down web page load times and consumes people's bandwidth. These are especially a concern to people in countries with poor internet access or who rely upon a mobile-phone to connect to the internet.
          </p>

          <p className="text-black/80 dark:text-white/80">
            JavaScript may also be disabled for usability and accessibility reasons. People using screen-readers and other accessibility tools, prefer simple non-interactive websites that are easy to read and navigate.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Lastly JavaScript may be disabled for security and reasons. Websites may load malicious JavaScript in the background or use JavaScript to collect browser data.
          </p>

          <p className="text-black/80 dark:text-white/80">
            By utilizing CSS, a component of all modern web browsers, simple websites who desire to reach users opposed to JavaScript can now see how their users are interacting with their webpages. This is beneficial for understanding how websites are being used and how best to optimize them.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>

          <p className="text-black/80 dark:text-white/80">
            Tracking actions with CSS alone, is completed using the html and css loaded on the client-side web browser, and a script running on a server that parses urls requested from it.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The CSS contains style definitions utilizing Tracking URLs that are called upon the desired web page interactions. This type of style definition will be referred to as a Tracker. The URL in the Tracker is composed of a Domain Name, an Account ID, and a Tracking ID. By applying a CSS style to an HTML element, the URL will be called when the user performs the action specified by the Tracker's CSS Selector (eg: 'active' = a user clicks the element, or 'hover' when a user hovers their mouse over the element).
          </p>

          <p className="text-black/80 dark:text-white/80">
            Due to the inherent properties of CSS, multiple trackers may be applied to the same HTML element, Trackers may be triggered by nesting HTML elements that have Trackers applied to them.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Trackers can be applied to any HTML element by following it's CSS guidelines including Divisions, Spans, List Items, Form Fields, Anchor Links, etc.
          </p>

          <p className="text-black/80 dark:text-white/80">
            The Server referenced by the URL should be configured to parse the URL into its component pieces. This involves identifying the Account ID and Tracking ID. Once parsed, a log will be kept identifying which Tracker ID was called, which account it was called for and when it was called. From this log, a record of how many times an Account's Tracker ID was called for a given timeframe can be generated. The Server referenced by the URL may also get further details from the HTTP Referral data including the specific server and page making the request, the user's IP address, browser information, and user agent.
          </p>

          <p className="text-black/80 dark:text-white/80">
            Tracker style definitions may be embedded in the HTML file, or be in their own CSS file and included in the web page. This CSS file may also be generated by and hosted through an event tracking service.
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