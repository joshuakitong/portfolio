import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function YarnPage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="bg-texture h-screen">
      <h1 className="text-3xl font-bold p-6">Yarn Mixes</h1>
    </motion.div>
  );
}
