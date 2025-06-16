import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AudioLines, Gamepad2, Volleyball, Code, Sparkles, ChevronDown } from 'lucide-react';

const skills = [
  {
    name: 'Web Development',
    id: 'web',
    icon: <Code size={48} />,
    summary: 'Web Development summary goes here.',
    link: "/webdev",
  },
  {
    name: 'Music Production',
    id: 'music',
    icon: <AudioLines size={48} />,
    summary: 'Music Production summary goes here.',
    link: "/music",
  },
  {
    name: 'Gaming & Streaming',
    id: 'gaming',
    icon: <Gamepad2 size={48} />,
    summary: 'Gaming and streaming summary goes here.',
    link: "/gaming",
  },
  {
    name: 'Yarn Mixes',
    id: 'yarn',
    icon: <Volleyball size={48} />,
    summary: 'Yarn Mixes summary goes here.',
    link: "/yarn",
  },
  {
    name: 'Others',
    id: 'others',
    icon: <Sparkles size={48} />,
    summary: 'Other skills and interests summary goes here.',
    link: "/others",
  },
];

export default function HomePage() {  
  const introRef = useRef(null);
  const { scrollY } = useScroll();
  const introScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const introOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const iconOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const boardHeight = 420;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} style={{ marginTop: '-16rem' }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center space-y-4 z-0 bg-home">
        <div className="w-11/12 max-w-xl">
          <motion.div
            ref={introRef}
            style={{ scale: introScale, opacity: introOpacity }}
          >
            <motion.h1
              className="text-4xl font-bold pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: 0.6 }}
            >
              Hello! I'm Joshua Kitong
            </motion.h1>

            <motion.h2
              className="text-3xl font-semibold pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-blue-500">
                <Typewriter
                  words={['Web Developer', 'Music Producer', 'Video Editor', 'Content Creator', 'and more...']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h2>

            <motion.p
              className="max-w-xl text-gray-300 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              As a modern jack of all trades, I blend technical knowledge in web development, strategic thinking from competitive gaming,
              and creative talent in multimedia production — delivering versatile solutions across digital mediums.
            </motion.p>
            <motion.p
              className="max-w-xl text-gray-300 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              This portfolio highlights my diverse technical and creative skills.
            </motion.p>
            <motion.p
              className="max-w-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              Scroll down and click on a title to learn more.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {skills.map((skill, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });

        const rotateX = useTransform(scrollYProgress, [0, 0.33], [90, 0]);
        const scale = useTransform(scrollYProgress, [0, 0.33], [1.1, 1]);
        const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
        const blur = useTransform(scrollYProgress, [0, 0.33], ['blur(4px)', 'blur(0px)']);

        return (
          <div
            key={skill.id}
            className="sticky top-1/2 -translate-y-1/2 flex justify-center z-10"
            style={{ zIndex: 100 + index, marginTop: index == 0 ? '16rem' : '0rem' }}
          >
            <motion.div
              ref={ref}
              style={{ rotateX, scale, opacity, filter: blur }}
              className={"relative bg-[#222] h-[" + boardHeight + "px] border border-white/10 p-6 rounded-2xl w-11/12 max-w-xl text-center flex flex-col justify-between overflow-hidden"}
            >
              <div>
                <div className="flex items-center justify-center">{skill.icon}</div>
                <Link to={skill.link} className="text-sm text-blue-400 hover:text-blue-300 underline">
                  <h2 className="text-2xl font-bold mb-2 tracking-wide text-blue-500">{skill.name}</h2>
                </Link>
                <p className="text-gray-300">{skill.summary}</p>
              </div>
            </motion.div>
          </div>
        );
      })}
      {/* add a spacer at the end to give space for last board*/}
      <div style={{ height: boardHeight / 2 + "px" }}></div>
      
      {(
        <motion.div
          style={{ opacity: iconOpacity, left: 'calc(50% - 18px)' }}
          className="absolute bottom-6 transform -translate-x-1/2 z-50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <ChevronDown size={36} className="text-white/70" />
        </motion.div>
      )}
    </motion.div>
  );
}