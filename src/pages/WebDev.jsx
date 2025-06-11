import { motion } from 'framer-motion';

export default function WebDevPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6">
      <h1 className="text-3xl font-bold">Web Dev</h1>
    </motion.div>
  );
}
