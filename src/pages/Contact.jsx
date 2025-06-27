import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
  {
    id: "contact-details",
    title: "Contact Details",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">How to Reach Me</h2>
        <p className="mb-6">
          Email: joshuakitong@gmail.com<br/>
          Phone: 0905-737-9500
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Resume</h2>
        <p>
          (*work in progress: resume goes here)
        </p>
      </>
    )
  },
  {
    id: "links",
    title: "Pages and Socials",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Web Dev</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-1 mb-6">
          <div className="space-y-6 flex justify-center">
            <a href="https://github.com/joshuakitong" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition">
              <strong>GitHub</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.linkedin.com/in/joshua-christopher-kitong-65805a2a9" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <strong>LinkedIn</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://leetcode.com/u/fgs8LXq4KP" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              <strong>LeetCode</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="/" className="block w-[7.5rem] text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <strong>Portfolio</strong>
            </a>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">BOX84</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-1 mb-6">
          <div className="space-y-6 flex justify-center">
            <a href="https://www.youtube.com/@BOX84" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              <strong>YouTube</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://open.spotify.com/playlist/2AAIvXFYyNZo12DHMJqMi5" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              <strong>Spotify</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.facebook.com/box84official" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <strong>Facebook</strong>
            </a>
          </div>
          <div className="space-y-6 flex justify-center">
            <a href="https://www.instagram.com/box84official/" target="_blank" className="block w-[7.5rem] text-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">
              <strong>Instagram</strong>
            </a>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Kits2g</h2>
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
  },
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
        <h1 className="text-4xl font-bold text-blue-500">Contact</h1>
        <p className="text-gray-400 mt-2 mx-2">Connect with me and explore my work on these platforms.</p>
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
      className="relative bg-[#222] border border-white/10 rounded-2xl p-8 w-11/12 max-w-xl mx-auto mb-8"
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
