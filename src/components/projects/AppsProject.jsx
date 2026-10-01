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
            Growing up in the Black Hills of South Dakota, I designed and built websites for local tourism businesses.
            I was really into computers, so I went on to a dual major in Computer Science and Psychology at
            Rensselaer in upstate New York, followed by a master's in Human-Computer Interaction. I've worked as a
            UX / Product Designer ever since, but I've kept up with development through side projects over the years.
          </p>
          <p className="text-black/80 dark:text-white/80">
            In 2009 I started designing and building mobile apps, mostly for fun, but also as a possible source of income.
            The income never amounted to much, and I don't have time to keep working on them these days,
            but the apps were a blast to make and a few are still available for download.
          </p>
        </div>

        {/* Stacks */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Stacks</h2>
          <p className="text-black/80 dark:text-white/80">
            Stacks, a flashcard app, was my first. The design was very much of its time, with a skeuomorphic shelf and lights.
            The app sold packs of flashcards on topics ranging from jokes and trivia to SAT vocabulary.
            To create the content, I mostly hired people through elance.com, and also tried sites like Amazon Mechanical Turk,
            with very poor results. When I built this app, In-App Purchase was a brand new API and wasn't public yet.
            It was a real challenge to work through the iOS documentation and piece together the code to make the right calls to Apple's servers.
            In the end it worked, and the app launched alongside iOS 3.
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
            Sticking with simple app ideas that would be easy to make, I created Mini Golf Scorecards.
            There were only a few scorecard apps at the time, but a flood of competition soon followed.
            A few highlights were some clever shortcuts, like double-tapping an empty score to set it to par.
            The Plus and Minus buttons made entering scores easy without opening a keypad.
            And if you played the same course twice, it carried over everything relevant to your next game,
            like the course name, hole count, and par for each hole.
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
            One of the apps I put the most effort into was for keeping score in disc golf.
            Taking what I'd learned from Mini Golf Scorecards, I built a proper database back end and an
            architecture that could capture a huge amount of detail about each round. Over many releases,
            I worked in feedback from players, and the app was even used on the professional disc golf circuit.
            It could record the GPS location of each tee and pin, as well as each throw, which made detailed distance
            stats possible. Players could log the disc they used, the flight pattern, and more.
            And after the game, it generated nice visual scorecards you could share.
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
            I played travel bingo on car trips growing up, and I wanted to make an app version.
            It was a simple app to build. I created over 150 tiles and grouped them into collections
            you could buy with in-app purchase, including city, neighborhood, highway, country, and more.
            Nothing about it was especially hard, but it was the first app I made that worked on both iPhone and iPad.
            Funny enough, Travel Bingo For Kids has made the most money of any app I've built.
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
            After a family holiday trip where we played a lot of Bananagrams, I really wanted to keep playing on my phone.
            Unfortunately Bananagrams wasn't available as an app, so I decided to make my own:
            a one-player version called Ducky Letters.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/duckyletters.png" 
          alt="Screenshot of Ducky Letters word game app inspired by Bananagrams with drag-and-drop tile gameplay"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            This was one of the hardest apps I've built, since I used a lot of newer iOS features, including SpriteKit,
            and needed tiles to drag and drop around the board. It was a challenge, but it worked really well.
            Beyond the new APIs, the hardest part I remember was checking whether all the connected tiles formed real words,
            and if not, marking the specific tiles that were invalid. To do that, I built a recursive algorithm that
            checked each string of letters, including substrings, against the tournament Scrabble word list.
            After some optimizing, it was fast enough to run every time a tile dropped on the board.
          </p>
        </div>

        {/* Ducky Doubles */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Ducky Doubles</h2>
          <p className="text-black/80 dark:text-white/80">
            I loved playing 2048, so I decided to make my own version.
            I built it and submitted it to the App Store within 4 weeks. My twist on 2048 was
            a wildcard tile with a duck on it. Whatever tile you swiped the duck into doubled in value.
            As your score went up, fewer ducks appeared, so it kept getting harder.
            I'm especially proud of the micro-interactions and effects in this one.
            The tiles feel lively as you swipe them around, the score animates, and confetti pops
            every time you level up, which makes it a joy to play.
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
            My most ambitious app is Peak Active. I got really close to launching it, but then
            my first child was born and I couldn't put in the time to finish.
            I was frustrated by fitness apps that made you hit start at the beginning of an activity and stop at the end.
            I wanted the app to figure out the activity from the data that was already there.
          </p>
        </div>

        <ProjectImage 
          src="/projects/apps/peakactive.png" 
          alt="Screenshot of Peak Active fitness tracking app showing automatic activity detection and motivational statistics"
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Peak Active does just that. In real time, it looks at the activity coming from your iPhone or Apple Watch
            and works out whether you're active and what you're doing. It logs the activity, and you can
            add notes or not, but you never have to remember to open the app. It also has lots of
            motivational touches, like tracking stats and throwing celebrations at the right moments, that make it
            freakishly addictive.
          </p>
          <p className="text-black/80 dark:text-white/80">
            There were plenty of challenges, like combining data from multiple sources and building the calendar view,
            but the biggest was matching activity to the right data.
            That gets messy whenever the clock changes, like with Daylight Saving Time or when you fly to a new time zone.
            Unfortunately I never solved it, and the problem is still out there.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default AppsProject;