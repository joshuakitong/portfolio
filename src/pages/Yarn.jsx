import { motion } from 'framer-motion';

export default function YarnPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="p-6">
      <h1 className="text-3xl font-bold">Yarn Mixes</h1>
    </motion.div>
  );
}
