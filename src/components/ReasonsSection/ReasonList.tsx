import React from 'react';
import { reasonsData } from '@/data/reasons';
import { ReasonItem } from './ReasonItem';

type ReasonListProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  refs: React.RefObject<HTMLDivElement>[];
};

export const ReasonList = ({
  activeIndex,
  setActiveIndex,
  refs,
}: ReasonListProps) => {
  return (
    <div className="flex flex-col md:gap-96">
      {reasonsData.map((reason, index) => (
        <ReasonItem
          ref={refs[index]}
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          {...reason}
        />
      ))}
    </div>
  );
};
