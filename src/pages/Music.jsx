import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
  {
    id: "music-production",
    title: "Music Production",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I started playing guitar at the age of six, with minimal formal lessons — most of what I learned was self-taught. Over time, I picked up other instruments too, 
          including lead guitar, bass, drums, and keyboards. Throughout my school years, I stayed active in music, joining battle of the bands and talent shows.<br/><br/>

          After graduating, however, I lost touch with music. It wasn’t until the pandemic in 2020 that I rediscovered my passion — around the time my brother and his friends 
          started a record label and collective called BOX84. I joined the team and have been deeply involved as a music producer and manager ever since.<br/><br/>

          Since then, I’ve taught myself to <strong>make beats</strong>, <strong>write and arrange songs</strong>, <strong>mix and master tracks</strong>
           , <strong>edit videos and graphics</strong> , <strong>release music on streaming platforms</strong>, <strong>manage artists and social media pages</strong>. 
           To date, I’ve produced over a hundred tracks, generating hundreds of thousands of streams across platforms. I primarily use <strong>FL Studio</strong>
           , <strong>Adobe Premiere Pro</strong>, and <strong>Photoshop</strong>—and you can find more about the tools I use for each part of the process in the sections below.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music Production Services</h2>
        <p>
          Here's a list of the music production services I offer:
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
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with in music production:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs/Recording Tools</strong>: FL Studio, Ableton Live, Adobe Audition, Audacity<br/>
            <strong>VSTs</strong>: Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, Spectrasonics, Nexus, stock DAW VSTs and plugins
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
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          My first experience with video editing was using Windows Movie Maker when I was younger, creating montages of family outings and skateboard clips my friends and I filmed. 
           Later in college, I learned how to use <strong>Adobe Premiere Pro</strong> and <strong>Sony Vegas Pro</strong>, editing school projects and gameplay videos.<br/><br/>

          While video editing wasn't a passion on the same level as gaming or music, I discovered I had a natural knack for it. Over time, I honed my skills—especially as a 
           video editor for our record label, where I <strong>created music videos</strong>, <strong>lyric videos</strong>, and <strong>visualizers</strong>.
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
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps I have experience with in video editing:<br/>
        </p>
        <strong>Editing Software</strong>: Adobe Premiere Pro, Sony Vegas Pro, Adobe After Effects, CapCut, Canva<br/>
      </>
    )
  },
  {
    id: "sound-engineering",
    title: "Sound Engineering",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I was first introduced to this field at a young age, watching my dad and cousin record vocals for jingles and song covers using Cool Edit Pro (now Adobe Audition). 
           Later on, I got hands-on experience working as a sound technician for our family’s sound system business during summer campaign seasons.<br/><br/>
           
          It wasn’t something I focused on deeply at the time, but I eventually revisited and developed the skill as a sound engineer for BOX84—where I taught myself everything 
           from <strong>recording</strong> to <strong>mixing</strong> and <strong>mastering</strong>, primarily using <strong>FL Studio</strong> and <strong>eMastered</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Before & After Mix & Master Samples</h2>
        <p className="mb-6">
          (*work in progress: before and after mix and master samples goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps and tools I have experience with in sound engineering:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>DAWs</strong>: FL Studio, Ableton Live, Reaper<br/>
            <strong>AI Tools & Web Apps</strong>: eMastered, ChatGPT, Loudness Penalty, Youlean
          </div>
          <div className="space-y-6">
            <strong>VSTs</strong>: Youlean, Soundtoys, iZotope, Tokyo Dawn Records, MeldaProduction, stock DAW VSTs and plugins
          </div>
        </div>
      </>
    )
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          I used to color and paint a lot as a kid, and that creative interest later translated into digital art when we were introduced to <strong>Photoshop</strong> in 
           high school. I then continued learning more advanced techniques in college.<br/><br/>
          
          Although graphic design wasn’t my primary focus, I enjoyed it and knew it would be a useful skill down the line. I eventually got back into it as a graphic designer 
          for our record label, where I <strong>created cover art</strong>, <strong>logos</strong>, and <strong>social media assets</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Cover Art</h2>
        <p className="mb-6">
          (*work in progress: featured cover art goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the apps I have experience with in graphic design:<br/>
        </p>
        <strong>Design Software</strong>: Adobe Photoshop, Canva<br/>
      </>
    )
  },
  {
    id: "more",
    title: "More",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Publishing and Management</h2>
        <p className="mb-6">
          When the record label first started, releases were only uploaded to YouTube and not distributed to major streaming platforms like Spotify or Apple Music. I took the 
           initiative to research how to formally release music and eventually signed us up with Ditto Music, which I found to be the most suitable distributor for independent 
           artists and labels.<br/><br/>
          
          We initially paid for their services, but about a year later, our work caught the attention of the <strong>Ditto Music</strong> team. They offered us a <strong>partnership</strong>, 
           which we’ve maintained ever since. I now serve as their primary <strong>point of contact</strong> for releases under our indie record label.<br/><br/>

          I’ve also taken the initiative to manage the label’s artists, oversee production needs, and run our social media pages. In the process, I’ve learned the basics of digital 
           marketing and familiarized myself with tools and platforms like <strong>Meta Business Suite</strong>, <strong>YouTube Studio</strong>, <strong>Spotify for Artists</strong>, 
           and the <strong>Ditto Music Dashboard</strong>.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">BOX84 Pages and Socials</h2>
        <p>
          Feel free to check out and follow us on our social media pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
          <div className="space-y-6 flex justify-center">
            <a href="https://www.youtube.com/@BOX84" target="_blank" className="block w-fit px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              <strong>YouTube Channel</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://open.spotify.com/playlist/2AAIvXFYyNZo12DHMJqMi5" target="_blank" className="block w-fit px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              <strong>Spotify Playlist</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.facebook.com/box84official" target="_blank" className="block w-fit px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <strong>Facebook Page</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.instagram.com/box84official/" target="_blank" className="block w-fit px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
              <strong>Instagram</strong>
            </a>
          </div>
        </div>
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
