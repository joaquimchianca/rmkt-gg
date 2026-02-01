import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { Reason } from "@/data/reasons";

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
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        data-index={index}
      >
        {/* Camada de Fundo */}
        <div className="absolute inset-0 pointer-events-none select-none"></div>
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0.3,
            scale: isActive ? 1.2 : 1,
          }}
          transition={{ duration: 1.5 }}
          className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/15 blur-[120px] rounded-full ${
            isEven ? "-left-64" : "-right-64"
          } md:-left-64 md:right-auto`}
        />

        {/* Conteúdo */}
        <div className="relative z-10 text-center max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
            {title}
          </h3>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto whitespace-pre-line leading-relaxed">
            {description}
          </p>

          {images && images.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
              {images.map((src, i) => (
                <div key={i} className="relative group">
                  <img
                    src={src}
                    alt={`${title} - Imagem ${i + 1}`}
                    className="h-[700px] w-auto rounded-xl shadow-2xl border border-white/10 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

ReasonItem.displayName = "ReasonItem";
