/*   STEP 1   */
export const leagueID = "1050258497713135616"; // your league ID
export const leagueName = "The D League"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The future is now. We have blown past the desire for a simple magazine and have turned our attention to a website to house the D League expereince.</p>
  <p>This will act as a sort of hub for the D League that contains different information all in one place. You can use it as a companion app to Sleeper, and you will still need to use Sleeper for setting rosters, but this will contain records, matchups, player activity, news, etc etc. A lot of it is pulled from Sleepers API so it should be accurate. It should also be able to house the magazines in one place once I figure that out. Maybe.</p>
  <p>This website is going to be a work in progress. Coding is not my forte so if anyone wants to get down and dirty this is running in GitHub. Svelte is what most of the coding is based on, with some Javascript and HTML. If stuff breaks with the coding, good luck to me troubleshooting. I'm more likely to just restart the whole thing.</p>
  <p>Below you'll see a featured blog post that gives a rundown of the website capabilities. If there are any players you want to spotlight because of an interesting situation change or you think they'll boom or bust, let me know. Same thing with rookies, if there is someone you want to highlight for one reason or another, undervalued or overrated, whatever it is, let me know or just do it yourself and pass it along to me.</p>
  <p>Thank me later,</p>
  <p>Michael</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
   "managerID": "857729315629076480",
    "name": "Michael Bradley",
    "location": "Oviedo-ish",
    "bio": "Considered by many great people to be one of the greatest commissioners of all time, but only because they don't know what goes on behind the scenes. Got a big orange cat, my sweet boy. I be traveling a lot. Got called Tom Cruise by Mr. McFeely. 4.0 Pickleball player probably. Sprechen ein bisschen. If y'all tryna eat some sushi hmu. Advocating for the next owners meeting to be at Mean Girls The Musical on March 28th, 2025. UCF/Griffith. Sleeper Username: mbradley97",
    "photo": "/managers/michael.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "pit",
    "mode": "Rebuild",
    "rival": {

      name: "Alex",
      link: 6,
      image: "/managers/alex.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "BDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
     "managerID": "859864521651630080",
    "name": "Dalton",
    "location": "Daytona",
    "bio": "You can't spell Dalton without the letter L.",
    "photo": "/managers/dalton.jpg",
    "fantasyStart": 2010,
    "favoriteTeam": "no",
    "mode": "Rebuild",
    "rival": {
      name: "Nate",
      link: 3,
      image: "/managers/nate.jpg"
    },
    "favoritePlayer": 4381,
    "valuePosition": "TE",
    "rookieOrVets": "LDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "863853614194642944",
    "name": "Brandon McKinzie",
    "location": "Orlando",
    "bio": "I'm an ICU nurse originally from Gainesville, FL who moved to Orlando a few years ago to be closer/live with my girlfriend. I'm a diehard packers fan and currently in grad school. If you need someone to shove an IV in you, I know a guy. Sleeper Username: Bmmckinzie",
    "photo": "/managers/brandon.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "gb",
    "mode": "Win Now",
    "rival": {
      name: "Adam",
      link: 8,
      image: "/managers/adam.jpg"
    },
    "favoritePlayer": 2133,
    "valuePosition": "WR",
    "rookieOrVets": "BDC",
    "philosophy": "Draft good players and score lots of points.",
    "tradingScale": 8,
    "preferredContact": "Text",
    },
    {
     "managerID": "918098232314716160",
    "name": "Nate Spear",
    "location": "Longwood",
    "bio": "Oh I didn't realize the last question was about my location.",
    "photo": "/managers/nate.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "buf",
    "mode": "Win Now",
    "rival": {
      name: "Dalton",
      link: 1,
      image: "/managers/dalton.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "LDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "926901215844298752",
    "name": "Brad Landers",
    "location": "Girlfriend's House",
    "bio": "Will throw down with anyone on a pickle ball court anywhere at any time.",
    "photo": "/managers/brad.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "bal",
    "mode": "Rebuild",
    "rival": {
      name: "Michael L",
      link: 5,
      image: "/managers/michaell.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "BDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "936914093427081216",
    "name": "Michael Logan",
    "location": "Winter Springs",
    "bio": "Goes by Mikey.",
    "photo": "/managers/michaell.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "ne",
    "mode": "Dynasty",
    "rival": {
      name: "Brad",
      link: 4,
      image: "/managers/brad.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "BDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "937064445342244864",
    "name": "Alex Finster",
    "location": "Downtown Orlando",
    "bio": "Floyd’s Headliners embody our motto of expert cuts and amplified experience. Their price difference reflects their number of years in the industry, craft mastery, and demand of their time. Alex has been a barber for over 4 years and loves to meet people. Every client in his chair can count on a laugh. While cutting might be his forte, he especially loves doing beard trims. Also statistically lucky.",
    "photo": "/managers/alex.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "ind",
    "mode": "Win Now",
    "rival": {
      name: "Michael B",
      link: 0,
      image: "/managers/michael.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "BDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
   {
     "managerID": "937104695728992256",
    "name": "David",
    "location": "Central Florida",
    "bio": "Golf.",
    "photo": "/managers/david.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "phi",
    "mode": "Rebuild",
    "rival": {
      name: "Pavan",
      link: 9,
      image: "/managers/pavan.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "LDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "937174854284029952",
    "name": "Adam",
    "location": "Not Florida",
    "bio": "Known for one thing and one thing only.",
    "photo": "/managers/adam.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "den",
    "mode": "Win Now",
    "rival": {
      name: "Brandon",
      link: 2,
      image: "/managers/brandon.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "LDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
    {
     "managerID": "937780960488263680",
    "name": "Pavan",
    "location": "Central Florida",
    "bio": "Slept through the draft.",
    "photo": "/managers/pavan.jpg",
    "fantasyStart": 2007,
    "favoriteTeam": "pit",
    "mode": "Win Now",
    "rival": {
      name: "David",
      link: 7,
      image: "/managers/david.jpg"
    },
    "favoritePlayer": 536,
    "valuePosition": "WR",
    "rookieOrVets": "LDC",
    "philosophy": "Rebuild for next year, every year.",
    "tradingScale": 9,
    "preferredContact": "Text",
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
