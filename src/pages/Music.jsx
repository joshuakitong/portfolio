import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
  {
    id: "music-production",
    title: "Music Production",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Musical Background</h2>
        <p className="mb-6">
          I started playing guitar at the age of six, with minimal formal lessons — most of what I learned was self-taught. Over time, I picked up other instruments too, 
          including lead guitar, bass, drums, and keyboards. Throughout my school years, I stayed active in music, joining battle of the bands and performing through college.<br/><br/>

          After graduating, however, I lost touch with music. It wasn’t until the pandemic that I rediscovered my passion — around the time my brother and his friends 
          started a record label and collective called BOX84. I joined the team and have been deeply involved ever since — as a music producer, manager, and co-owner.<br/><br/>

          Since then, I’ve taught myself to <strong>make beats</strong>, <strong>write and arrange songs</strong>, <strong>mix and master tracks</strong>
           , <strong>edit videos and graphics</strong> , <strong>release music on streaming platforms</strong>, <strong>manage artists and social media pages</strong>. 
           I’ve produced over a hundred tracks, generating hundreds of thousands of streams across platforms. I primarily use <strong>FL Studio</strong>
           , <strong>Adobe Premiere Pro</strong>, and <strong>Photoshop</strong>. You can learn more about the specific tools I use in each area of production in the sections below.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music Production Services</h2>
        <p>
          Here's a list of the music production services I Offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 mb-6">
          <div className="space-y-6">
            <strong>Beat Making</strong><br/>
            <strong>Mixing and Mastering</strong> <span className="text-sm">(Beats & Vocals)</span><br/>
            <strong>Recording</strong> <span className="text-sm">(Vocals & Instruments)</span>
          </div>
          <div className="space-y-6">
            <strong>Song Writting and Arranging</strong><br/>
            <strong>Video Editing</strong> <span className="text-sm">(Music Videos & Visualizers)</span><br/>
            <strong>Graphic Design</strong> <span className="text-sm">(Covers Arts & Social Media Assets)</span><br/>
          </div>
          <div className="space-y-6">
            <strong>Song Publishing and Distribution</strong><br/>
            <strong>Social Media Management</strong>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Songs</h2>
        <p className="mb-6">
          (*work in progress: featured songs goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Sample Beats</h2>
        <p className="mb-6">
          (*work in progress: sample beats goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music Prod – Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with in music production <i>(specific tools per area are detailed in the sections below)</i>:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs/Recording Tools</strong>: FL Studio, Ableton Live, Adobe Audition<br/>
            <strong>Plugins</strong>: Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, Spectrasonics, Nexus, stock DAW plugins
          </div>
          <div className="space-y-6">
            <strong>Sample Libraries</strong>: Splice, Cymatics, LANDR, Loopmasters<br/>
            <strong>AI Tools</strong>: eMastered, Splice AI, ChatGPT
          </div>
        </div>
      </>
    )
  },
  {
    id: "video-editing",
    title: "Video Editing",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Video Editing Background</h2>
        <p className="mb-6">
          (*work in progress: video editing background goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Music Videos</h2>
        <p className="mb-6">
          (*work in progress: featured music videos goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Lyric Videos</h2>
        <p className="mb-6">
          (*work in progress: featured lyric videos goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Visualizers</h2>
        <p className="mb-6">
          (*work in progress: featured visualizers goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Video Editing – Tech & Tools</h2>
        <p>
          (*work in progress: video editing tech and tools goes here)
        </p>
      </>
    )
  },
  {
    id: "sound-engineering",
    title: "Sound Engineering",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Sound Engineering Background</h2>
        <p className="mb-6">
          (*work in progress: sound engineering background goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Before & After Mix & Master Samples</h2>
        <p className="mb-6">
          (*work in progress: before and after mix and master samples goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Sound Engineering – Tech & Tools</h2>
        <p>
          (*work in progress: sound engineering tech and tools goes here)
        </p>
      </>
    )
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Graphic Design Background</h2>
        <p className="mb-6">
          (*work in progress: graphic design background goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Cover Art</h2>
        <p className="mb-6">
          (*work in progress: featured cover art goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Graphic Design – Tech & Tools</h2>
        <p>
          (*work in progress: graphic design tech and tools goes here)
        </p>
      </>
    )
  },
  {
    id: "more",
    title: "More",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music Publishing</h2>
        <p className="mb-6">
          (*work in progress: music publishing goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Social Media Management</h2>
        <p className="mb-6">
          (*work in progress: social media management goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">BOX84 Pages and Socials</h2>
        <p>
          (*work in progress: pages and socials goes here)
        </p>
      </>
    )
  }
];

export default function MusicPage() {
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
        <h1 className="text-4xl font-bold text-blue-500">Music Production</h1>
        <p className="text-gray-400 mt-2">Explore my passion for music and my music production background.</p>
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
      <motion.p
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {section.content}
      </motion.p>
    </motion.div>
  );
}
