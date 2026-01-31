import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { Reason } from '@/data/reasons';

type ReasonItemProps = Reason & {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const ReasonItem = forwardRef<HTMLDivElement, ReasonItemProps>(
  ({ index, activeIndex, title, description, images }, ref) => {
    const isActive = index === activeIndex;

    return (
      <div
        ref={ref}
        className="h-screen flex items-center justify-center"
        data-index={index}
      >
        <motion.div
          className="text-center max-w-2xl"
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="mt-4 text-lg whitespace-pre-line">{description}</p>
          {images && images.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} - Imagem ${i + 1}`}
                  className="max-w-sm rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    );
  },
);

ReasonItem.displayName = 'ReasonItem';
