import { motion } from "framer-motion";
import { useEffect } from "react";
import { sections } from "../data/contactData.js";
import { AnimatedSection } from "../components/AnimatedSection.jsx";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="min-h-screen pb-[1rem]">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Contact</h1>
        <p className="text-gray-400 mt-2 mx-2">Connect with me and explore my work on these platforms.</p>
      </div>

      {sections.map((section) => (
        <AnimatedSection key={section.id} section={section} wMultiplier={''} />
      ))}
    </motion.div>
  );
};
