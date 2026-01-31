import { motion, AnimatePresence } from 'framer-motion';

type StickyCounterProps = {
  activeIndex: number;
};

export const StickyCounter = ({ activeIndex }: StickyCounterProps) => {
  const formattedIndex = String(activeIndex + 1);

  return (
    <div className="relative text-4xl md:text-6xl font-bold text-neutral-content/80 h-12 md:h-24 w-12 md:w-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute"
        >
          {formattedIndex}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
