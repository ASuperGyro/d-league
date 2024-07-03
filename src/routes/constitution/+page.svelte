<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneOneTwo, oneTwo, oneThree, oneFour;
    let two, twoOne, twoTwo, twoThree, twoThreeOne, twoFour, twoFourOne, twoFourTwo;
    let three, threeOne, threeTwo, threeTwoOne, threeThree;
    let four, fourOne, fourOneOne, fourTwo, fourTwoOne;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour;
    let six, sixOne, sixTwo;
    let seven, sevenOne, sevenOneOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">The D League Bylaws</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: League Overview</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 League Type</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>1.1.1 Scoring</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneTwo)}>1.1.2 Fees</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Platform</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Tanking</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>1.4 Important Dates</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Roster</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Starting Requirements</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Taxi Squad</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Injured Reserve</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(twoThreeOne)}>2.3.1 COVID</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoFour)}>2.4 Free Agency/Waivers</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(twoFourOne)}>2.4.1 In-Season</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(twoFourTwo)}>2.4.2 Off-Season</h5>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Trades</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Trading Period</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 Trade Parameters</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(threeTwoOne)}>3.2.1 Trading Draft Picks</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Trade Reviews</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Championship Bracket</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(fourOneOne)}>4.1.1 Payouts</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Consolation Bracket</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(fourTwoOne)}>4.2.1 Consolation Award</h5>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Draft</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Draft Clock</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Draft Results</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>5.4 Supplemental Picks</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Miscellaneous</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Rivalry Week</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Pro Bowl Game</h4>
        

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: League Administration</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 Rule Changes</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(sevenOneOne)}>7.1.1 Rule Implementation</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Orphaned Teams</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Empire League Clause</h4>
    
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 League Overview</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 League Type</h3>
    
    <p>This league is a Dynasty format league. This means that when players are drafted to your team, they remain on your team until action is taken by the owner of the team. This action includes trades and roster cuts. 

        You can hold a player from draft to retirement in theory with no penalty. There is a rookie draft held each year to account for the incoming class of players. Undrafted players would join Free Agency.</p>
          
        <h4 bind:this={oneOneOne}>1.1.1 Scoring</h4>
            <ul>
                <li>Passing TD = 5</li>
                <li>INT = -2</li>
                <li>Rushing TD = 6</li>
                <li>Receiving TD = 6</li>
                <li>RB PPR = 0.5</li>
                <li>WR PPR = 1</li>
                <li>TE PPR = 1.25</li>
                <li>RB 1st Down Bonus = 0.5</li>
            </ul>
            <p> Full scoring settings can be found in the Sleeper app.</p>
        
        <h4 bind:this={oneOneTwo}>1.1.2 Fees</h4>
        <p>League dues are set at {dues}$. This will increase by $5 each year until reaching $35, at which point it will either remain or we will reassess.</p>
        <p>50% of next year’s buy-in should be paid as a deposit before the start of the current season. If a team is orphaned this deposit will go towards discounting the buy-in for the incoming owner.</p>
        <p>No owner will pay more than 100% of their dues for a given year. </p>
        <p>Funds will be held by the commissioner in a Venmo/PayPal account until payouts are dispersed at the end of the season.</p>
    
    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Platform</h3>
    <p> This league is hosted on Sleeper. This is to allow flexibility with scoring and record keeping, as well as to have a built-in forum for discussion and voting. Sleeper is also compatible with many API's. There is a mobile and desktop version, although the user experience is better on mobile.</p>

    <h3 bind:this={oneThree}>1.3 Tanking</h3>
    <p>All owners must set their most competitive lineup each week of the season. This means you should field your best possible lineup each week. Exceptions will be made if this is impossible due to injuries, bye weeks,  suspensions, or a combination of such factors. It is not allowed to start players who are inactive unless a team is truly unable to field a full lineup.
    In rare cases, certain lineup decisions may be deemed blatant tanking. In this case, an owner can bring up the issue and the commissioner will decide if it warrants a roster change. The owner will then have to set a lineup that is acceptable to the commissioner and the league. If the owner being challenged would like to, they can make their case to the league as to why it is not tanking and it will be put to a vote minus the two teams and the commissioner.</p>
    <p>Trading away players for future draft picks is not considered tanking, as long as the trade presents both sides with fair value.</p>
    <p>Tanking as a roster decision versus a lineup decision is a valid strategy, as draft position for non-playoff teams is decided not just by team record but by Max Points For. </p>
    
    <h3 bind:this={oneFour}>1.4 Important Dates</h3>
        <ul>
            <li>In-season: The day before the first NFL game of the season, until the week after the Super Bowl.</li>
            <li>Lock-out: Week after Super Bowl until April 1st, rosters are locked.</li>
            <li>Off-season: April 1st, until the Wednesday before the first NFL game of the season.</li>
            <li>Free Agency Period: April 1st </li>
            <li>Off-season FAAB Reset: April 1st </li>
            <li>Rosters Unlock: April 1st</li>
            <li>Rookie Dynasty Draft: One week after the NFL Draft, subject to the availability of league members.</li>
            <li>In-Season FAAB Resets: Day before the first NFL game of the season.</li>
            <li>Trade Deadline: Start of the first NFL game of week 12. Trades can resume at the conclusion of the championship up until the end of the league season.</li>
            <li>Start of Playoffs: Week 15</li>
            <li>League Championship: Week 17</li>
            <li>Rosters Lock: The week after the Super Bowl.</li>
        </ul>
<h2 class="sectionHeading" bind:this={two}>Section 2 Roster</h2>
<p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SF (QB/RB/WR/TE)</li>
    </ul>
    
    <h3 bind:this={twoOne}>2.1 Starting Requirements</h3>
        <p>Owners must attempt to start a fully active lineup based on their current roster. Owners are not, however, required to drop players from their roster to field an active lineup. 

        If there is concern about tanking by benching players, then an issue may be raised for review by the commissioner(s). 

        If an issue is raised, then:
        </p>

        <p>Owners should be ready to justify any player starting with a 5-point differential over a bench player of a similar position. This is allowed generally but is subject to scrutiny when under review.

        The review should be impartial to team owners and records. The result of the review can be voted upon by a simple majority if one owner is not satisfied with the result. 
        </p>

    <h3 bind:this={twoTwo}>2.2 Taxi Squad</h3>
        <p>The taxi squad is available to all drafted rookies or undrafted rookies signed prior to week 1 of the NFL regular season. Only rookies can be assigned to your taxi squad. They do not count towards Max Points For.</p>
        <p>There are 3 spots on each team’s taxi squad, one for each round of the rookie draft. Taxi squad players cannot be started until they are called up to your active roster. Once called up to the active roster, a player cannot be moved back down to your taxi squad.</p>
        <p>All players have 1 season of taxi squad eligibility once assigned. After 1 season, they must be dropped or called up to your active roster.</p>
    
    <h3 bind:this={twoThree}>2.3 Injured Reserve</h3>
        <p>Each team has 3 spots for injured/unavailable players. Only players with the following designations can be added to the injured reserve: PUP, IR. SUS and Out do not qualify.</p>
        <p>If a player on your injured reserve has his status changed from one of the above, he must be added back to the active roster, or your roster will be locked indefinitely. This is an automatic function by Sleeper.</p>
    <h4 bind:this={twoThreeOne}>2.3.1 COVID</h4>
        <p> If there is ever an NFL rule changing virus or issue that changes IRL active roster rules, such as during the COVID-19 season, then the rules for what qualifies for IR will change in dynasty as well. This is highly unlikely to happen, but want a provision for it in any case.</p>

    <h3 bind:this={twoFour}>2.4 Free Agency/Waivers</h3>
    <h4 bind:this={twoFourOne}>2.4.1 In-Season</h4>
        <p>The Free Agency period has two phases. One during the off-season and one in-season. All unrostered players will be released to free agency and eligible for waiver additions through the use of FAAB. If a player is not claimed during the waiver period, they enter Free Agency until the following Waiver Period. When in Free Agency players can be claimed on a first come first serve basis.</p>
        <p>FAAB Waivers: Waivers will process using FAAB (Free Agent Acquisition Budget). Owners can use their FAAB to bid on free agents throughout the season before waivers process. An owner does not need to make a bid to make a claim, but bids have higher priority than just a claim. The highest bidder will receive each free agent when Sleeper processes the bids on Wednesday morning. In the event of a tied bid, the team with the highest waiver priority will receive the player. You are able to bid cumulatively above your total amount, but once a bid is awarded your subsequent bids may become invalid if the funds are not available.</p>
        <p>Waiver Priority:  Waiver order is determined by reverse standings. This only comes into effect when there is an equal bid tie for a waiver pick-up. The team with the worse standing will gain priority in such an event.</p>
        <p>FAAB Disbursement: Teams will receive $100 FAAB at the start of every season, according to the league schedule. This budget will not reset until the following off-season begins, according to the league schedule. At each period where there is a budget reset the team will receive $100 FAAB (3rd place $120). Seasonal budgets do not roll over.</p>
    <h4 bind:this={twoFourTwo}>2.4.2 Off-Season</h4>
        <p>The off-season functions much like the regular season. The biggest difference is waivers will run twice weekly and there will be no FA period so every owner has a chance to react to player news during the off-season. The waivers will run the Monday morning after the Rookie Draft, and every subsequent Monday and Wednesday morning until the season starts. Players who are not drafted in the rookie draft will hit waivers.</p>

<h2 class="sectionHeading" bind:this={three}>Section 3 Trades</h2>
    <h3 bind:this={threeOne}>3.1 Trading Period</h3>
        <p>All players and future draft picks (up to 3 years in advance) can be traded at any time in the trading period. FAAB budgets can also be included in trades. Trade talks can be had during the no-trade period, but no trades can be processed during it.</p>
        <p>The trade deadline is the start of Week 12 of the NFL season. Trading may resume after the championship is over, until the end of the fantasy season when rosters lock. Trading may then resume at the start of the offseason. Please reference the league schedule for all relevant dates.</p>
   
    <h3 bind:this={threeTwo}>3.2 Trade Parameters</h3>
        <p>Once a trade is proposed and accepted, it cannot be rescinded. Once approved the involved players are sent to their new rosters immediately. Completed trades can only be revoked because of legitimate owner error and the error must be reported in a timely manner, or if there is egregious evidence of collusion, subject to the discretion of the commissioner.</p>
        <p>Trades are automatically approved once accepted.</p>
        <p>In cases involving players that have already been locked into a lineup for the week, the player’s former team will still receive any points that the player has already scored for the week, and the player’s new team cannot play him in the same week. A player that has NOT played or been locked for the week is allowed to be played by his new team in the same week that he is traded.</p>
        <p>Owners may not impose conditions on trades that are against the competitive integrity of the league.</p>
        <p>E.G. an owner cannot trade away a player with the condition that the player must be dropped, be benched in any given week, or prohibit a traded player from being traded to a particular team in the league.</p>
    <h4 bind:this={threeTwoOne}>3.2.1 Trading Draft Picks</h4>
        <p>The same rules for Player Trades apply to Draft Trades. Future picks may only be traded up to three years in advance, or three plus current draft during the draft itself. If a future pick is traded, then the original owner of the pick being traded must put a 50% down payment of their buy-in for the year of the pick being traded before it is approved. This makes it less likely for a team to trade off all their picks for a super team to win and then abandon the team with no future potential. The 50% down payment will be used to reduce the buy-in of the owner who takes over the abandoned team.</p>
        <p>For example in 2023:</p>
        <p>Team A sends – 2023 1st, 2024 1st, 2025 2nd</p>
        <p>Team B sends – AJ Brown, 2025 3rd</p>
        <p>Team A must pay a 50% deposit for the years 2024 and 2025</p>
        <p>Team B must pay a 50% deposit for the year 2025</p>
        <p>Trade will be put on hold until the deposit is made. Deposits apply to the buy-in for their respective year.</p>

    <h3 bind:this={threeThree}>3.3 Trade Reviews</h3>
        <p>If, at any point, a proposed & accepted trade is deemed to be a result of collusion, the commissioner or any other owner in the league can put the trade on hold and propose a league vote. A majority decision is required to veto the trade. The owners involved in the trade should not be part of the vote but are able to argue the merits of the trade prior to the vote.</p>
        <p>The commissioner may, under rare circumstances, determine that a proposed trade is either anti-competitive or not in the best long-term interest of the league. In this case, a vote is allowed, but the commissioner ultimately has the power to disallow the trade at his discretion. Vetoes are not meant to be used just because you yourself would not make a trade, but because of collusion or competitive integrity.
        E.G. 2nd Year Jamaar Chase for 3rd Round Pick and Mecole Hardman.</p>
        <p>Occasionally, rapidly changing information is not available to both sides of a trade. This can happen if there is breaking news involving the traded assets while the trade is still awaiting acceptance from an owner.
        In this case, it is recommended that both sides of the trade work together to solve the issue. While trading on rapidly changing information before your trade partner can react can be beneficial to your team, it is considered a bush-league move and the trade will most likely be vetoed via league vote.</p>
        
<h2 class="sectionHeading" bind:this={four}>Section 4 Post-Season</h2>
    <p> The post-season in this league will consist of two separate brackets, the Championship Bracket and the Consolation Bracket. As a 10 Team League the Championship Bracket will have 6 teams in it and the Consolation Bracket will have 4 teams in it. The post-season starts Week 15.</p>
    <h3 bind:this={fourOne}>4.1 Championship Bracket</h3>
        <p>Playoffs will begin in week 15.</p>
        <p>The top 6 teams in the league by W-L record qualify for the playoffs, and are seeded by record. Total points scored on the season will be the tiebreaker when multiple teams have the same W-L record. Finishing placement impacts draft order.</p>
        <p>The top 2 seeds will get a first-round bye in Week 15. The championship will take place in Week 17.</p>
        <p>The lower seed that is eliminated in the first round gets the higher(better) draft pick. Teams eliminated in the second round must set competitive lineups for placing 3rd and 4th.</p>
    <h4 bind:this={fourOneOne}>4.1.1 Payouts</h4>
        <ul>
        <li>1st place: {dues * 7.5}$</li>
        <li>2nd place: {dues * 1.5}$</li>
        <li>3rd place: +$20 FAAB for off-season and next season</li>
        <li>Most PF: {dues}$</li>
        </ul>
        <p> Payouts are 7.5x buy-in for 1st place, 1.5x buy-in for 2nd place, FAAB bonus for 3rd, and returning of your buy-in for most points scored during the regular season. The Most PF bonus can be awarded to any team finish.</p>
    
    <h3 bind:this={fourTwo}>4.2 Consolation Bracket</h3>
        <p>The non-playoff teams will enter a consolation bracket Week 15, and are seeded by record, and then Points For.</p>
        <p>The Consolation Bracket games will not affect the draft order of the non-playoff teams.</p>
    <h4 bind:this={fourTwoOne}>4.2.1 Consolation Reward</h4>
        <p> The winner of the Consolation Bracket will receive the 2.11 pick in the following Rookie Draft. This will be awarded by the draft being paused and the player being added directly to the winner's team.</p>

<h2 class="sectionHeading" bind:this={five}>Section 5 Draft</h2>
    <h3 bind:this={fiveOne}>5.1 Draft Order</h3>
        <p>The draft order for the non-playoff teams is determined by reverse order in Max Points For throughout the regular season, with the lowest scoring team receiving the #1 pick in each round. Playoff teams will have their draft order decided by the order of their final finishing places. Please refer to Playoff section.</p>
        <p>Example: the league champion will receive the #10 pick of each round, the runner-up will receive the #9 pick, and so on.</p>
   
    <h3 bind:this={fiveTwo}>5.2 Draft Clock</h3>
        <p>Each owner will have 10 minutes to make a draft pick selection when it is their turn. This is to allow for trading of picks or players during the draft, and will allow owners to both propose and field trade offers. Alternatively, a slow draft can be used if agreed upon by owners.</p>
   
    <h3 bind:this={fiveThree}>5.3 Draft Results</h3>
        <p>The drafted players will be placed into each owner’s roster. In the event that a team exceeds the maximum roster size because of this, the owner must reduce their rosters to the mandated size before the start of the regular season. If at any point the roster is over the limit of players, Sleeper will automatically lock player movements. Owners should utilize the Taxi Squad for rookie additions to maximize flexibility.</p>
   
    <h3 bind:this={fiveFour}>5.4 Supplemental Picks</h3>
        <p> A supplemental pick may be added for any number of reasons if agreed upon by the league. The current standard picks are the 2.11 and 2.12 which are awarded for the Consolation Bracket and for the Prop Bet Competition respectively.</p>
        <p> The Prop Bet Competition is two series of prop bets taken from owners prior to the start of the season and by the start of Week 8. If there is a tie at the end of the prop bet results, then a side bet for the Super Bowl specifically will be made.</p>
        <p> At-will supplemental picks have included the winner of the in-person draft minigolf getting the 3.11, or effectively first dibs on the waiver rookies.</p>

<h2 class="sectionHeading" bind:this={six}>Section 6 Miscellaneous</h2>
    <h3 bind:this={sixOne}>6.1 Rivalry Week</h3>
        <p> Every year in Week 14, the final week of the season before playoffs, the same two teams will play each other. The team played will be a designated Rival and all-time matchups will be recorded.</p>
        <p> This recurring matchup at the end of the year allows time for some last minute seeding movement and an untimely loss can be squarely blamed on the Rival, with an opportunity to get revenge the following year. The schedule will be adjusted manually to try and limit back-to-back matchups in the regular season.</p>
    
    <h3 bind:this={sixTwo}>6.2 Pro Bowl Game</h3>
        <p> Every year in Week 18, the final week of the NFL regular season and week after the fantasy playoffs, each division will put forward two players from each team, based on where they finished in the standings within their division.</p>
    <ul>
        <li>1st Place: QB/RB</li>
        <li>2nd Place: RB/WR</li>
        <li>3rd Place: WR/TE</li>
        <li>4th Place: FLEX/FLEX</li>
        <li>5th Place: FLEX/SF</li>
    </ul>
        <p> The all time record and score will be recorded and the winning division gains bragging rights over the losing division for the following year. There are no real stakes in the game but gives some unique team compositions every year on a week with no typical fantasy relevance. The added degree of figuring out which star players will be rested for the coming playoffs adds another layer to team planning on an individual level.</p> 

<h2 class="sectionHeading" bind:this={seven}>Section 7 League Administration</h2>
    <h3 bind:this={sevenOne}>7.1 Rule Changes</h3>
    <p>Every year in the offseason owners can put forth ideas to be voted upon that impact the league. Major changes can only be made in the offseason, and with approval by the league. If there are points of high contention the commissioner may overrule to keep the peace.
    If decided, there can be an in-person meeting, or can be held leading into the draft. In that instance the people present at the meeting (out of state withstanding) are able to vote on changes.</p>
    <p>The rule changes will be recorded. Ultimately, again, as for many things, the commissioner will have final say as necessary to keep things flowing well, but should not use that unless needed.</p>

    <h4 bind:this={sevenOneOne}>7.1.1 Implementation</h3>
        <p> Rule change timelines should be agreed upon during the proposal of the rule. Major changes should be a year or more in advance, while minor changes can have a shorter window. Once the implementation window is agreed upon and the change approved, the commissioner should implement as soon as possible.</p>
    <h3 bind:this={sevenTwo}>7.2 Orphaned Teams</h3>
        <p>In the event of a team owner leaving the league an attempt to find a replacement owner will be made. The replacement owner will pay 50% of the coming year buy-in, with the rest covered by the previous owner down payment. If a new owner is difficult to find due to the state of the team, additional benefits to entice a new owner may be voted upon. If the previous owner is able to find a new owner, and they work it out that the new owner will pay the full buy-in, then the leaving owner may get their deposit back.</p>
        <p>If a fantasy year starts without an owner:</p>
    	<p>The rookie draft will take the expected ADP at their position</p>
    	<p>The team will be set by the commissioner for max projected points each week</p>
    	<p>Transactions will not be made by the team unless under extenuating circumstances, approved by the commissioner (season ending injuries needing new players to fill in)</p>
    	<p>If the orphaned team wins the league then the prize pool will be added to the next year, less the buy-in for the following year for the orphaned team.</p>

    <h3 bind:this={sevenThree}>7.3 Empire Clause</h3>
        <p>If, after five years of the league being in existence, a team totals three championships then the league is able to vote on a reset. This is to maintain competitive integrity if the league is out of balance due to unseen circumstances. The owner of the empire team will get an additional fourth round pick of the new startup draft to give them an advantage for losing the team they built.</p>
        <p>In the instance of the owners voting an empire has been achieved and the league should reset, all future monies paid for draft picks will be returned to the original owners.</p>

</div>
