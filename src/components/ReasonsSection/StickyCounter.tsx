import { motion, AnimatePresence } from 'framer-motion';

type StickyCounterProps = {
  activeIndex: number;
};

export const StickyCounter = ({ activeIndex }: StickyCounterProps) => {
  const formattedIndex = String(activeIndex + 1).padStart(2, '0');

  return (
    <div className="relative text-8xl font-bold text-neutral-content/10 h-24 w-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          {formattedIndex}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
