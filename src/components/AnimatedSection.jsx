import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function AnimatedSection({ section, wMultiplier }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-175px 0px -75px 0px" });
  const controls = useAnimation();

  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);
  const wasInView = useRef(false);

  useEffect(() => {
    const updateScrollDir = () => {
      const currentY = window.scrollY;
      const dir = currentY > lastScrollY.current ? "down" : "up";
      setScrollDir(dir);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  useEffect(() => {
    if (inView && !wasInView.current) {
      controls.set({ y: scrollDir === "down" ? 75 : -75, opacity: 0 });
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
      wasInView.current = true;
    } else if (!inView && wasInView.current) {
      controls.start({
        opacity: -1,
        y: scrollDir === "down" ? -75 : 75,
        transition: { duration: 0.4, ease: "easeIn" },
      });
      wasInView.current = false;
    }
  }, [inView, scrollDir, controls]);

  const controlsBg = useAnimation();

  useEffect(() => {
    if (inView && wMultiplier > 3) {
      controlsBg.start({
        opacity: 1,
        scale: window.innerWidth < 640 ? [0.65, 0.7, 0.65] : [0.85, 0.9, 0.85],
        transition: {
          opacity: { duration: 5, delay: 0.5 },
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      });
    } else {
      controlsBg.start({
        opacity: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
  }, [inView]);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
  const updateSize = () => {
    if (ref.current) {
    const { offsetHeight, offsetWidth } = ref.current;
    setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  };
  updateSize();

  window.addEventListener("resize", updateSize);
  return () => window.removeEventListener("resize", updateSize);
  }, [section]);

  return (
    <>
      <div className={`relative w-11/12 max-w-${wMultiplier}xl mx-auto mb-8`}>
        <motion.div
          style={{
            height: `calc(${dimensions.height}px*0.9)`,
            width: `${dimensions.width}px`,
            top: `calc(${dimensions.height}px*0.05)`
          }}
          className="absolute rounded-[1rem] bg-gradient-to-r from-blue-500 via-black to-blue-500 blur-3xl z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={controlsBg}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: scrollDir === "down" ? -75 : 75 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-[#222] border border-white/10 rounded-2xl p-4 lg:p-8  z-10"
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
    </div>
    </>
  );
}