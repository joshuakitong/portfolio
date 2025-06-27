import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
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
        <p>
          I’ve always had a competitive drive when it comes to gaming. Even though I wasn’t technically a pro in most of the games I played, I consistently ranked 
           high — often reaching leaderboards on most of the games I played.<br/><br/>
          
          I began seriously considering a professional gaming career during my first weeks of playing Axie Infinity. Even with just an average team composition, I managed 
           to break into the Top 5000, which motivated me to invest in stronger assets and fully commit to the game. From that point on, I consistently placed within 
           the <strong>Top 500</strong> each season for about a year and joined tournaments whenever I could. During this time, I also formed a small team of scholars, 
           whom I <strong>coached</strong> and <strong>managed</strong> alongside other groups.<br/><br/>
          
          (*work in progress: highest recorded rank screenshot goes here)<br/><br/>

          In addition, I had the opportunity to merge my passion for both music and gaming by collaborating with one of the top Axie players and coaches of all
           time, <a href="https://www.youtube.com/@ElijahMT8" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400"><strong>Elijah MT8</strong> </a>
           (a.k.a. <a href="https://open.spotify.com/artist/6mvvyrOrdUglR4tX4Vl3lb" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400"><strong>Elijah Flows</strong></a>
           ). I produced and edited the music video for Digital Nation as part of this collaboration:<br/><br/>
           
          (*work in progress: Digital Nation YouTube video goes here)
        </p>
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
        <p className="mb-6">
          (*work in progress: featured tiktok edits goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Twitch Clips</h2>
        <p className="mb-6">
          (*work in progress: featured twitch clips goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Twitch Trailer</h2>
        <p className="mb-6">
          (*work in progress: twitch trailer goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Stream Assets</h2>
        <p className="mb-6">
          (*work in progress: stream assets goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with as a streamer:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>Streaming & Broadcast Software</strong>: OBS Studio, Streamlabs Desktop<br/>
            <strong>Chat Bots & Stream Automation</strong>: MixItUp, NightBot, StreamElements, Streamlabs, WizeBot<br/>
          </div>
          <div className="space-y-6">
            <strong>Platform & Community Tools</strong>: Twitch Creator Dashboard, Discord, X (Twitter), TikTok<br/>
            <strong>Content Creation & Editing</strong>: Adobe Premiere Pro, Adobe Photoshop<br/>
          </div>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-1">
          <div className="space-y-6 flex justify-center">
            <a href="https://www.twitch.tv/kits2g" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition">
              <strong>Twitch</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.tiktok.com/@kits2g_ttv" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-[#EE1D52] text-white rounded-md hover:bg-[#c91946] transition">
              <strong>TikTok</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://discord.gg/J9td3cpeC9" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <strong>Discord</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://twitter.com/kits2g_ttv" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition">
              <strong>X (Twitter)</strong>
            </a>
          </div>
        </div>
      </>
    )
  }
];

export default function GamingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  
  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} style={{ paddingBottom: '1rem' }} className="bg-texture min-h-screen">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Gaming Content</h1>
        <p className="text-gray-400 mt-2 mx-2">Learn how my love for gaming evolved into competitive play and content creation.</p>
      </div>

      {sections.map((section) => (
        <AnimatedSection key={section.id} section={section} />
      ))}
    </motion.div>
  );
}

function AnimatedSection({ section }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-[#222] border border-white/10 rounded-2xl p-8 w-11/12 max-w-6xl mx-auto mb-8"
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-blue-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {section.title}
      </motion.h2>
      <motion.div
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {section.content}
      </motion.div>
    </motion.div>
  );
}
