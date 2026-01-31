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
    const isEven = index % 2 === 0;

    return (
      <div
        ref={ref}
        className="relative h-screen flex items-center justify-center snap-start snap-always px-6 overflow-hidden"
        data-index={index}
      >
        {/* Camada de Fundo */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Textura Granular */}
          <div className="absolute inset-0 bg-grain opacity-[0.03]" />

          {/* Glow Dinâmico */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.3,
              scale: isActive ? 1.2 : 1,
            }}
            transition={{ duration: 1.5 }}
            className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full ${
              isEven ? "-left-64" : "-right-64"
            }`}
          />
        </div>

        {/* Conteúdo */}
        <motion.div
          className="relative z-10 text-center max-w-2xl"
          initial={{ opacity: 0.3, y: 20 }}
          animate={{
            opacity: isActive ? 1 : 0.3,
            y: isActive ? 0 : 20,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
            {title}
          </h3>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto whitespace-pre-line leading-relaxed">
            {description}
          </p>

          {images && images.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} - Imagem ${i + 1}`}
                  className="max-w-sm rounded-xl shadow-2xl border border-white/10"
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
