import { motion } from 'framer-motion';

export default function WebDevPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="p-6">
      <h1 className="text-3xl font-bold">Web Devevelopment</h1>
    </motion.div>
  );
}
