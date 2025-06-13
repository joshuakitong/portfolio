import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="bg-home h-screen">
      <h1 className="text-3xl font-bold p-6">Home</h1>
    </motion.div>
  );
}
