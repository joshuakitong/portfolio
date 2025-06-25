import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
  {
    id: "other-work-experience",
    title: "Other Work Experience",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Summary</h2>
        <p>
          I began gaining informal work experience as early as elementary and high school, primarily as a <strong>Sound Technician </strong> 
           and <strong>Recording Assistant</strong> for our family-owned sound system and studio. I also worked as a <strong>Music Teacher</strong>, giving 
           lessons to kids from school and church. During college, I gained additional experience as a <strong>Graphic Designer</strong> for small 
           organizations, including GDG Baguio, and had some early experience as a <strong>Developer</strong> building a Tuition Fee Tracking System for my elementary school.<br/><br/>
          
          Later on, while pursuing my creative career in music and gaming, I also took on several part-time roles. I worked as 
           a <strong>Transcriptionist</strong> for Insight Asia, a <strong>Music</strong> and <strong>Gaming Mentor</strong> to friends and viewers, 
           a <strong>Yarn Producer </strong> and <strong>Color Maker</strong> for our family business Crocheted by Carisse, and also a <strong>Cryptocurrency Trader</strong>.<br/><br/>

          These roles helped me sharpen key skills such as <strong>creativity</strong>, <strong>organization</strong>, <strong>communication</strong>
           , and <strong>pattern recognition</strong> — all of which continue to support my work across both technical and creative fields.
        </p>
      </>
    )
  },
  {
    id: "hobbies-and-interests",
    title: "Hobbies and Interests",
    content: (
      <>
        <p className="mb-6">
          This part may be trivial, but it offers a glimpse into the things that keep me curious, creative, and mentally active outside of work.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Books</h2>
        <p className="mb-6">
          I enjoy reading non-fiction books, especially on self-improvement, psychology, and philosophy. My reading list mainly includes classics from authors like Stephen Covey, 
           Dale Carnegie, and Robert Greene, as well as modern voices like Ryan Holiday, Austin Kleon, and Mark Manson. I usually spend my free time learning through their insights.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Shows</h2>
        <p className="mb-6">
          I enjoy watching a wide variety of shows — from dramas like Breaking Bad and Game of Thrones, to sitcoms like Curb Your Enthusiasm and The Big Bang Theory; from historical 
           series like Chernobyl and Band of Brothers, to science fiction such as Star Wars and Westworld; from game adaptations like The Last of Us and Arcane, to animated series 
           like Rick and Morty and Adventure Time. Watching shows is something I do whenever I can — it helps keep my mind active, inspired, and creatively engaged.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Games</h2>
        <p className="mb-6">
          Outside of competitive gaming and the FPS titles I stream, I also enjoy playing a variety of games during my free time. I expand my vocabulary with Scrabble, sharpen my 
           geography skills with GeoGuessr, build financial literacy through Cashflow 101, and improve hand-eye coordination with rhythm games like Festival — among many others.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Music</h2>
        <p className="mb-6">
          I usually listen to music in the background while I work to keep myself energized. My taste spans a wide range of genres — from hip-hop and EDM to rock, jazz, indie, and R&B. 
           I enjoy “<i>a little bit of everything all of the time</i>”, and am always open to discovering new sounds, with too many favorite artists to name.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Health and Fitness</h2>
        <p>
          I also make an effort to stay physically active, especially since most of my work involves sitting at a computer. My health and fitness journey began in 2019 when 
           I got into strength training and weightlifting, which I maintained until 2021. Around that time, I also adopted intermittent fasting — a habit I continue to this day. 
           Lately, I’ve been focusing more on cardiovascular health by taking regular walks, occasionally doing HIIT workouts, and fitting in some light lifting when I can.
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
        <h1 className="text-4xl font-bold text-blue-500">Other Experiences and Interests</h1>
        <p className="text-gray-400 mt-2">Know more about me and my other work experiences.</p>
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
      className="relative bg-[#222] border border-white/10 rounded-2xl p-8 w-11/12 max-w-2xl mx-auto mb-8"
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
