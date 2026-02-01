

import { useState, useEffect, createRef } from 'react';
import { StickyCounter } from './StickyCounter';
import { ReasonList } from './ReasonList';
import { reasonsData } from '@/data/reasons';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Section } from '../Section';
import { Container } from '../Container';

const DESKTOP_BREAKPOINT = 768; // Tailwind's md breakpoint

export const ReasonsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

  const refs = reasonsData.map(
    () => createRef<HTMLDivElement | null>(),
  ) as React.RefObject<HTMLDivElement>[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0',
              10,
            );
            setActiveIndex(index);
          }
        });
      },
      {
        // Ajustado para disparar quando o item cruza a linha central da tela
        rootMargin: '-10% 0px -75% 0px',
        threshold: 0,
      },
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return (
    <Section className="bg-black relative">
      {isDesktop ? (
        // Layout para Desktop
        <Container>
          <h2 className='text-center py-8 text-6xl'>Entenda por que você não pode ficar de fora da nossa conversa</h2>
          <div className="relative grid grid-cols-4 gap-8">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <StickyCounter activeIndex={activeIndex} />
            </div>
            <div className='col-span-3'>
              <ReasonList
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                refs={refs}
              />
            </div>
          </div>
        </Container>
      ) : (
        // Layout para Mobile - Agora usando sticky e snap scroll
        <div className="relative">
          <h2 className='text-center my-8 text-2xl'>Entenda por que você não pode ficar de fora da nossa conversa</h2>
          {/* Contador Sticky no mobile: aparece apenas dentro desta seção */}
          <div className="sticky top-6 left-6 z-20 h-0">
            <div className="p-2 inline-block">
              <StickyCounter activeIndex={activeIndex} />
            </div>
          </div>
          <ReasonList
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            refs={refs}
          />
        </div>
      )}
    </Section>

  );
};