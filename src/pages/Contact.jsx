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
          (*work in progress: contact details goes here)
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
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Developer</h2>
        <p className="mb-6">
          (*work in progress: dev pages and socials goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music</h2>
        <p className="mb-6">
          (*work in progress: music pages and socials goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Gaming</h2>
        <p className="mb-6">
          (*work in progress: gaming pages and socials goes here)
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Yarn</h2>
        <p>
          (*work in progress: yarn pages and socials goes here)
        </p>
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
        <p className="text-gray-400 mt-2">Connect with me and explore my work on these platforms.</p>
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
      className="relative bg-[#222] border border-white/10 rounded-2xl p-8 w-11/12 max-w-lg mx-auto mb-8"
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
