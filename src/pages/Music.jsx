import { motion } from 'framer-motion';

export default function MusicPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6">
      <h1 className="text-3xl font-bold">Music</h1>
    </motion.div>
  );
}
