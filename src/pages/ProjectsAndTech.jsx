import { motion } from "framer-motion";
import { useEffect } from "react";
import { sections } from "../data/projectsAndTech.js";
import { AnimatedSection } from "../components/AnimatedSection.jsx";

export default function ProjectsAndTech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="bg-mix min-h-screen pb-[1rem]">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Projects and Tech</h1>
        <p className="text-gray-400 mt-2 mx-2">Here’s a list of my featured projects, along with the tech and tools I use.</p>
      </div>

      {sections.map((section) => (
        <AnimatedSection key={section.id} section={section} wMultiplier={6} />
      ))}
    </motion.div>
  );
}