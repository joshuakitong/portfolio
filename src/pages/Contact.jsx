import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6">
      <h1 className="text-3xl font-bold">Contact</h1>
    </motion.div>
  );
}
