'use client';

import { useState, useEffect, createRef } from 'react';
import { StickyCounter } from './StickyCounter';
import { ReasonList } from './ReasonList';
import { reasonsData } from '@/data/reasons';
import { useWindowSize } from '@/hooks/useWindowSize';

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
        rootMargin: isDesktop ? '-50% 0px -50% 0px' : '-80% 0px -20% 0px',
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
  }, [refs, isDesktop]);

  if (isDesktop) {
    // Layout para Desktop
    return (
      <div className="relative grid grid-cols-2 gap-8">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <StickyCounter activeIndex={activeIndex} />
        </div>
        <div>
          <ReasonList
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            refs={refs}
          />
        </div>
      </div>
    );
  }

  // Layout para Mobile
  return (
    <div className="relative">
      <div className="fixed top-8 left-4 z-10">
        <StickyCounter activeIndex={activeIndex} />
      </div>
      <div>
        <ReasonList
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          refs={refs}
        />
      </div>
    </div>
  );
};