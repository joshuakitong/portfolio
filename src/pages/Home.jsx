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
    summary: 'I graduated with a Bachelor of Science in Information Technology, majoring in Software Development, in 2017.\n\nIn 2018, I worked as a Front-End Web Developer at Qualis Consulting Inc., developing web-based systems for U.S. utility cooperatives using ASP.NET, AngularJS, HTML, and CSS. I also trained in Angular and gained some back-end experience with PL/SQL.\n\nIn 2021, I shifted to pursuing creative projects full-time and paused my developer career. In mid-2025, I decided to return to development and have been catching up on newer technologies — mainly React, Angular, and Flask — through hands-on projects.',
    link: "/webdev",
  },
  {
    name: 'Music Production',
    id: 'music',
    icon: <AudioLines size={48} />,
    summary: 'I started playing guitar at the age of six and stayed active in musicals and talent shows through college. After graduating, I lost my passion for music but rediscovered it during the pandemic (2020). Around that time, my brother and his friends started a record label and collective, BOX84.\n\nSince then, I’ve been involved in the entire production process. I’ve learned to make beats, write and arrange songs, mix and master tracks, edit videos and graphics, release music on various platforms, and manage social media pages — all largely self-taught.\n\nI’ve since produced over a hundred tracks, generating hundreds of thousands of streams across platforms.',
    link: "/music",
  },
  {
    name: 'Gaming & Streaming',
    id: 'gaming',
    icon: <Gamepad2 size={48} />,
    summary: 'I’ve been a gamer for as long as I can remember. I started with board and console games before moving to PC. It was something I loved and always dreamed of turning into a career.\n\nWhen the opportunity came during the altcoin season in 2021 and NFT gaming took off, I didn’t hesitate. I pursued my creative career full-time, became a competitive Axie Infinity player, and managed a few scholars.\n\nA year later, as the NFT hype faded, I shifted to becoming a content creator and started streaming on Twitch, where I built a following of thousands, streamed to hundreds per session, and regularly hosted community events, giveaways, and marathon streams.',
    link: "/gaming",
  },
  {
    name: 'Yarn Mixes',
    id: 'yarn',
    icon: <Volleyball size={48} />,
    summary: 'I’ve always been fascinated by coloring, painting, and mixing colors, though I focused more on developing other talents growing up.\n\nWhen our family business, Crocheted by Carisse, began to boom, I knew my eye for combining colors would come in handy. Since 2022, I’ve been actively creating new color combinations and producing fine cotton yarns for our hundreds of beloved customers worldwide.',
    link: "/yarn",
  },
  {
    name: 'Others',
    id: 'others',
    icon: <Sparkles size={48} />,
    summary: 'I also have work experience beyond what’s mentioned above. I worked as a sound technician for our family sound system business, as a graphic designer for small organizations like GDG Baguio, and as a transcriptionist for Insight Asia. I’ve taught and coached students in both gaming and music, and I have experience trading cryptocurrencies.\n\nYou can learn more about my various interests and hobbies — books I read, shows I watch, and games I play — in this section.',
    link: "/others",
  },
];

export default function HomePage() {
  const introRef = useRef(null);
  const { scrollY } = useScroll();
  const introScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const introOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const iconOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
              className="text-4xl text-gray-200 font-bold pb-3"
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
              className="max-w-xl text-gray-200 pb-6"
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
              This portfolio showcases my diverse technical and creative skills.
            </motion.p>
            <motion.p
              className="max-w-xl text-gray-400"
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
            style={{ zIndex: 100 + index, marginTop: index === 0 ? '16rem' : '0rem' }}
          >
            <motion.div
              ref={ref}
              style={{ rotateX, scale, opacity, filter: blur }}
              className="relative bg-[#222] h-[420px] border border-white/10 p-6 rounded-2xl w-11/12 max-w-xl text-center flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-center text-gray-200">{skill.icon}</div>
                <Link to={skill.link} className="text-sm text-blue-400 hover:text-blue-300 underline">
                  <h2 className="text-2xl font-bold mb-2 tracking-wide text-blue-500">{skill.name}</h2>
                </Link>
                <p className="text-gray-300 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ whiteSpace: 'pre-line' }}>{skill.summary}</p>
              </div>
            </motion.div>
          </div>
        );
      })}
      {/* add a spacer at the end to give space for last board*/}
      <div style={{ height: "420px" }}></div>

      <motion.div
        style={{ opacity: iconOpacity, left: 'calc(50% - 18px)' }}
        className="absolute bottom-6 transform -translate-x-1/2 z-50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <ChevronDown size={36} className="text-gray-400" />
      </motion.div>
    </motion.div>
  );
}