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
          (*work in progress: gaming background goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Competitive Gaming</h2>
        <p className="mb-6">
          (*work in progress: competitive gaming goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">From Competitive Gamer to Content Creator</h2>
        <p>
          (*work in progress: content creator goes here)
        </p>
      </>
    )
  },
  {
    id: "twitch-streaming",
    title: "Twitch Streaming",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Twitch Milestones & Achievements</h2>
        <p className="mb-6">
          (*work in progress: twitch milestones and achievements goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Streaming – Tech & Tools</h2>
        <p>
          (*work in progress: streaming tech and tools goes here)
        </p>
      </>
    )
  },
  {
    id: "clips-and-highlights",
    title: "Clips & Highlights",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured TikTok Edits</h2>
        <p className="mb-6">
          (*work in progress: featured tiktok edits goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Featured Twitch Clips</h2>
        <p className="mb-6">
          (*work in progress: featured twitch clips goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Twitch Trailer</h2>
        <p>
          (*work in progress: twitch trailer goes here)
        </p>
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
          (*work in progress: gaming coach goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Stream Assets</h2>
        <p className="mb-6">
          (*work in progress: stream assets goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Kits2g Pages and Socials</h2>
        <p>
          (*work in progress: pages and socials goes here)
        </p>
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
        <p className="text-gray-400 mt-2">Learn how my love for gaming evolved into a content creation career.</p>
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
