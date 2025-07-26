import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { summaries } from "../data/homeData.js";
import { ChevronDown } from 'lucide-react';

export default function HomePage() {
  const introRef = useRef(null);
  const { scrollY } = useScroll();
  const introScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const introOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const iconOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const blobOpacity = useTransform(scrollY, [0, 800], [-1, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="-mt-[16rem]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center space-y-4 z-0 bg-mix">
        <motion.div
          style={{ opacity: blobOpacity }}
          className="absolute w-[12rem] h-[18rem] sm:w-[28rem] sm:h-[18rem] rounded-[6rem] bg-gradient-to-r from-blue-500 via-black to-blue-500 blur-3xl z-[-1] pointer-events-none"
          initial={{ scale: 1 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
        <div className="w-11/12 max-w-2xl">
          <motion.div
            ref={introRef}
            style={{ scale: introScale, opacity: introOpacity }}
          >
            <motion.h1
              className="text-4xl text-gray-800 dark:text-gray-200 font-bold pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                  words={['Web Developer', 'Music Producer', 'Gaming Content Creator']}
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
              className="max-w-2xl text-gray-800 dark:text-gray-200 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              As a modern <strong>jack of all trades</strong>, I blend <strong>technical knowledge</strong> in web development, <strong>strategic thinking</strong> from competitive gaming,
              and <strong>creative talent</strong> in multimedia production delivering <strong>versatile solutions</strong> across modern web platforms.
            </motion.p>
            <motion.p
              className="max-w-2xl text-gray-700 dark:text-gray-300 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              This portfolio showcases my <strong>diverse technical</strong> and <strong>creative skills</strong>.
            </motion.p>
            <motion.p
              className="max-w-2xl text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              Scroll down and click on a <span className="text-blue-500">title</span> to learn more.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {summaries.map((summary, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });

        const rotateX = useTransform(scrollYProgress, [0, 0.3], [90, 0]);
        const scale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
        const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
        const blur = useTransform(scrollYProgress, [0, 0.3], ['blur(4px)', 'blur(0px)']);

        return (
          <div
            key={summary.id}
            className="sticky top-1/2 -translate-y-1/2 flex justify-center z-10"
            style={{ zIndex: 10 + index, marginTop: index === 0 ? '16rem' : '0rem' }}
          >
            <motion.div
              ref={ref}
              style={{ rotateX, scale, opacity, filter: blur }}
              className="relative bg-[#f2f3f4] dark:bg-[#222] h-[420px] border border-black/10 dark:border-white/10 p-6 rounded-2xl w-11/12 max-w-xl text-center flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-center text-gray-800 dark:text-gray-200">{summary.icon}</div>
                <Link to={summary.link} className="text-sm text-blue-500 hover:text-blue-400 underline">
                  <h2 className="text-2xl font-bold mb-2 tracking-wide text-blue-500 hover:text-blue-400">{summary.name}</h2>
                </Link>
                <p className="text-gray-700 dark:text-gray-300 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ whiteSpace: 'pre-line' }}>{summary.summary}</p>
              </div>
            </motion.div>
          </div>
        );
      })}
      {/* add a spacer at the end to give space for last board*/}
      <div className="h-[100px] lg:h-[400px] md:h-[200px] sm:h-[100px]"></div>

      <motion.div
        style={{ opacity: iconOpacity, left: 'calc(50% - 18px)' }}
        className="absolute bottom-6 transform -translate-x-1/2 z-50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <ChevronDown size={36} className="text-gray-500 dark:text-gray-400" />
      </motion.div>
    </motion.div>
  );
}