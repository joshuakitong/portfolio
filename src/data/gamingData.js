import Kits2gLinks from '../components/shared/links/Kits2gLinks';
import StreamingTech from '../components/shared/tech/StreamingTech';
import GamingDigitalNation from '../components/shared/project/GamingDigitalNation';
import GamingFeatEdits from '../components/shared/project/GamingFeatEdits';
import GamingFeatClips from '../components/shared/project/GamingFeatClips';
import GamingTrailer from '../components/shared/project/GamingTrailer';
import GamingFeatStreamAssets from '../components/shared/project/GamingFeatStreamAssets';

export const sections = [
  {
    id: "competitive-gaming",
    title: "Competitive Gaming",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Gaming Background</h2>
        <p className="mb-6">
          I’ve always loved playing games growing up — from board and card games to physical sports. But it’s in video games and esports where I’ve found the most excitement and 
           honed the strongest skill. It’s also where my <strong>problem-solving</strong> and <strong>critical thinking</strong> were developed the most.<br/><br/>

          As a kid, I played a variety of RPGs, simulation, and puzzle games. During my elementary years, I started getting into PvP games, though back then it was 
           all just for fun. It wasn’t until early college that I realized how good I actually was — local indie esports teams started reaching out, and I began competing in 
           small tournaments for various MOBA and FPS/shooter games. Still, I didn’t take it too seriously at the time and mostly played for enjoyment.<br/><br/>

          That changed during the 2021 altcoin season, when NFT games were booming — I decided to resign from my developer job to fully pursue my creative careers and 
           become a <strong>professional Axie Infinity player</strong>, competing in high-ranking ladders and various tournaments.

        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Competitive Experience</h2>
        <div>
          I’ve always had a competitive drive when it comes to gaming. Even though I wasn’t technically a pro in most of the games I played, I consistently ranked 
           high — often reaching leaderboards on most of the games I played.<br/><br/>
          <p>
          I began seriously considering a professional gaming career during my first weeks of playing Axie Infinity. Even with just an average team composition, I managed 
           to break into the Top 5000, which motivated me to invest in stronger assets and fully commit to the game. From that point on, I consistently placed within 
           the <strong>Top 500</strong> each season for about a year and joined tournaments whenever I could. During this time, I also formed a small team of scholars, 
           whom I <strong>coached</strong> and <strong>managed</strong> alongside other groups.
          </p>
          <div className="w-full flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/gaming/Highest-Rank.jpeg`}
              alt="Highest Rank"
              className="w-[24rem] h-auto rounded mt-6"
            />
          </div>
          <p className="text-sm text-gray-400 text-center mt-2 mb-4">
            My Highest Recorded Leaderboard Rank.
          </p>
          <GamingDigitalNation />
        </div>
      </>
    )
  },
  {
    id: "twitch-streaming",
    title: "Twitch Streaming",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">From Competitive Gamer to Content Creator</h2>
        <p className="mb-6">
          As the hype around NFT games began to fade, so did my competitive drive. Around the same time, Fortnite — a game I used to love — introduced a new mode called Zero Build. 
           One of the main reasons I stopped playing previously was the building mechanics, so when this mode was released, I knew I’d enjoy jumping back in.<br/><br/>
          
          This marked the beginning of my transition from competitive gamer to <strong>content creator</strong>. I then became a <strong>Twitch streamer</strong> by 2022, primarily 
           playing Fortnite and other shooter games. My focus shifted from competing to entertaining, having fun, and building genuine connections with my 
           audience and fellow streamers.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Streaming Journey</h2>
        <p className="mb-6">
          I knew from the start that becoming a Fortnite Twitch streamer for a Filipino audience would be a challenge — the game wasn’t as popular locally as 
           titles like Valorant or League of Legends. But I pursued it anyway, driven by my love for the game’s <strong>creative gameplay</strong>. Eventually, I managed 
           to <strong>grow a healthy community</strong> and even <strong>influenced</strong> fellow gamers who hadn’t played it before to give it a try.<br/><br/>

          I built everything independently — from <strong>setting up OBS Studio</strong> and <strong>customizing stream assets</strong> to <strong>implementing bots </strong>
           and <strong>editing my own highlight reels</strong>. Over time, I grew a following of thousands, consistently streamed to hundreds of viewers per session, and hosted 
           dozens of marathon streams, community events, and giveaways.<br/><br/>
           
          Even after shifting from competitive gaming to content creation, I maintained top-tier performance — reaching the <strong>highest rank every season</strong> and becoming widely recognized in the Filipino 
           Fortnite community as the “<strong>Best Fortnite Player in the Philippines</strong>”.<br/><br/>
           
          Throughout this journey, I experienced significant personal growth and strengthened essential skills such as <strong>problem solving</strong>
           , <strong>critical thinking</strong>, <strong>adaptability</strong>, <strong>creativity</strong>, and <strong>communication</strong> — all of which continue to serve me across different disciplines today.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured TikTok Edits</h2>
        <GamingFeatEdits />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Random Funny Twitch Clips</h2>
        <GamingFeatClips />
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Twitch Trailer</h2>
        <GamingTrailer />
        <p className="text-sm text-gray-400 text-center mb-4">
          My Twitch Trailer (Created in 2023).
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Stream Assets</h2>
        <GamingFeatStreamAssets />
        <p className="text-sm text-gray-400 text-center mt-2 mb-4">
            Some of the Stream Assets I Created (emotes, posters, scenes, alerts).
          </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <StreamingTech />
      </>
    )
  },
  {
    id: "more",
    title: "More",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Gaming Coach</h2>
        <p className="mb-6">
          Over the years, I’ve naturally taken on the role of <strong>In-Game Leader</strong> in competitive MOBA and FPS/shooter games while playing with friends and viewers. 
           I’ve also had the opportunity to <strong>coach</strong> and <strong>mentor</strong> aspiring gamers — especially during my time as an Axie Infinity scholarship 
           manager, where I helped others improve their gameplay and strategy.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Kits2g Pages and Socials</h2>
        <p>
          Feel free to follow and connect with me on social media:
        </p>
        <Kits2gLinks />
      </>
    )
  }
];