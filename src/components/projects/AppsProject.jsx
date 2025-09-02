import React from "react";
import ProjectLayout from "../ProjectLayout";
import ProjectImage from "../ProjectImage";

function AppsProject() {
  return (
    <ProjectLayout
      title="iOS Apps"
      subtitle="A library of apps designed and developed by me."
      projectId="apps"
    >
      <div className="space-y-12">
        {/* Panorama Hero Image */}
        <ProjectImage 
          src="/projects/apps/panorama.png" 
          alt="Panoramic view of various iOS app screenshots"
          className="rounded-lg shadow-lg"
        />

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Growing in the Black Hills of South Dakota, I designed and developed websites for local businesses in the tourism industry. 
            With a strong interest in computers I continued that interest by getting a dual major in Computer Science and Psychology at 
            Rensselaer in upstate New York as well as a master's degree in Human Computer Interaction. I have since worked professionally 
            as UX / Product Designer but have maintained my interest in development through various hobbies over the years.
          </p>
          <p className="text-black/80 dark:text-white/80">
            In 2009 I began designing and developing mobile apps, primarily for fun, but as a potential income source. 
            While the income never amounted to much and I don't have time these days to continue work on them, 
            the apps were great fun to work on and a few continue to be available for download today.
          </p>
        </div>

        {/* Stacks */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Stacks</h2>
          <p className="text-black/80 dark:text-white/80">
            Stacks, a flashcard application was my first application. The design was very much of the time with a skeuomorphic shelf and lights. 
            The application featured packs of flashcards that were available for purchase and covered topics ranging from jokes and trivia to SAT vocabulary. 
            To create the content, I hired people using elance.com for the most part, but also experimented with sites like Amazon Mechanical Turk, 
            but with very poor results. At the time of launching this app, In-App-Purchase was a completely new API and wasn't public yet. 
            It was a formidable challenge to navigate the iOS documentation and piece together the code needed to make the appropriate calls to Apple's servers. 
            In the end it worked and launched alongside iOS 3.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/stacks.png" 
          alt="Screenshot of Stacks flashcard app showing categories and interface"
          className="rounded-lg shadow-lg"
        />

        {/* Mini Golf Scorecards */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Mini Golf Scorecards</h2>
          <p className="text-black/80 dark:text-white/80">
            Along the lines of simple app ideas that would be easy to make, I created Mini Golf Scorecards. 
            While at the time there were few scorecard apps, there soon was a flood of competition. 
            A few highlights of the app included some clever shortcuts such as double-tapping on an empty score entry to set it to par. 
            The Plus and Minus buttons allowed a very straightforward score entry without opening a keypad. 
            Additionally, if you played the same course twice, it would carry over all relevant data for your next game 
            such as the title, hole count, and par for each hole.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/golfscorecards.png" 
          alt="Screenshot of Mini Golf Scorecards app showing scorecard interface with plus/minus buttons and par shortcuts"
          className="rounded-lg shadow-lg"
        />

        {/* Ducky Disc Golf Scorecards */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Ducky Disc Golf Scorecards</h2>
          <p className="text-black/80 dark:text-white/80">
            One of the apps I put the most effort into was an app for keeping track of scores when playing disc golf. 
            With many lessons learned from Mini Golf Scorecards, I built out a proper database back-end along with an 
            architecture to capture a tremendous amount of detail about disc golf play. With many releases over the years, 
            feedback was incorporated from players and the app was even utilized among the professional disc golf circuit. 
            The app could track GPS locations of Tee and Pin locations, as well as each throw which allowed detailed distance 
            stats to be captured. Users could specify the disc they used, the flight pattern and more. 
            Lastly, the app would generate nice visual scorecards that could be shared after the game.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/duckydiscgolf.png" 
          alt="Screenshot of Ducky Disc Golf Scorecards app showing GPS tracking, disc selection and detailed scoring features"
          className="rounded-lg shadow-lg"
        />

        {/* Travel Bingo For Kids */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Travel Bingo For Kids</h2>
          <p className="text-black/80 dark:text-white/80">
            In a throwback to playing travel bingo on car trips growing up, I desired to create an app. 
            This app was very simple in concept to build. I created over 150 tiles and grouped them into collections 
            that could be purchased with in-app-purchase. The collections included city, neighborhood, highway, country, and more. 
            While there wasn't anything particularly challenging about this app, it was the first app I created to work on both iPhone and iPad. 
            Interestingly, Travel Bingo For Kids has provided the most income of all the apps I've made.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/travelbingo.png" 
          alt="Screenshot of Travel Bingo For Kids app showing bingo grid with various travel-related items for iPhone and iPad"
          className="rounded-lg shadow-lg"
        />

        {/* Ducky Letters */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Ducky Letters</h2>
          <p className="text-black/80 dark:text-white/80">
            Coming back from a family holiday trip in which a lot of the game Bananagrams was played, I really wanted to continue to play on my phone. 
            Unfortunately banana grams wasn't available as an app so I decided to make my own. 
            Inspired by Bananagrams, I created a one-player version called Ducky Letters.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/duckyletters.png" 
          alt="Screenshot of Ducky Letters word game app inspired by Bananagrams with drag-and-drop tile gameplay"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            The development of this app was one of the most challenging to date as I utilized many of the modern iOS capabilities 
            including Sprite Kit, and needed to be able to drag and drop tiles around the game board. While a challenge, it worked tremendously well. 
            Beyond the new APIs, I recall the most challenging aspect was to validate that all connected tiles were words or not, 
            and if not, mark the specific tiles that were invalid. To validate the words, I build a recursive algorithm that would 
            check each string of letters, including sub-strings, against the tournament scrabble word list. 
            Through some optimizations I ended up with an extremely efficient design that was fast and could be run every time a tile dropped on the board.
          </p>
        </div>

        {/* Ducky Doubles */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Ducky Doubles</h2>
          <p className="text-black/80 dark:text-white/80">
            Capitalizing on the joy received from playing the game 2048, I decided to create my own variation. 
            This app was built and submitted to the app store within 4 weeks. My particular twist on the 2048 game was 
            the inclusion of a wildcard tile with a duck on it. Whatever tile the duck was swiped into, it would double in value. 
            As the overall score increased, fewer ducks appeared making it ever more challenging. 
            With this app, I'm particularly proud of the micro-interactions and effects that I added. 
            The tiles have a lively feel as you swipe around, the score animates, and with each increase in level, 
            confetti appears making it a joy to play.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/duckydoubles.png" 
          alt="Screenshot of Ducky Doubles number puzzle game, a 2048 variation with wildcard duck tiles and animated effects"
          className="rounded-lg shadow-lg"
        />

        {/* Peak Active */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Peak Active</h2>
          <p className="text-black/80 dark:text-white/80">
            My most ambitious app to date is Peak Active and while I got really close to launching the app, 
            my first child was born and I couldn't spend the time necessary to complete it. 
            Frustrated by the requirement of hitting start at the beginning of an activity and stop at the end, 
            I wanted to be able to simply derive activity from the data available.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/peakactive.png" 
          alt="Screenshot of Peak Active fitness tracking app showing automatic activity detection and motivational statistics"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Peak Active does just that, in real-time it looks at the activity captured whether from the iPhone or Apple Watch 
            and determines if you are active and what kind of activity it is. It reports on the activity and you can choose to 
            annotate it or not, but you never have to remember to interact with the app. Additionally, it provides a myriad of 
            motivational aspects which make the app freakishly addictive through tracking statistics and displaying relevant 
            celebrations when appropriate.
          </p>
          <p className="text-black/80 dark:text-white/80">
            While there were many challenges with the app such as bringing together data from multiple sources, 
            building out the calendar view, etc. The biggest challenge was in assigning activity to the appropriate data. 
            This aspect becomes problematic whenever the time changes such as Daylight Savings Time, or the user flies to a new time-zone. 
            Unfortunately I was unable to resolve this issue, but the challenge still remains.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default AppsProject;