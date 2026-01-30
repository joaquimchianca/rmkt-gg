import { useRef, type PropsWithChildren, type ChangeEvent } from "react";

export const FormCollapse = ({ children }: PropsWithChildren) => {
  const collapseRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTimeout(() => {
        collapseRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  };

  return (
    <div className="collapse collapse-arrow bg-transparent" ref={collapseRef}>
      <input type="checkbox" className="peer" onChange={handleCheckboxChange} />
      <div className="collapse-title w-full font-bold py-4 rounded-md text-lg bg-accent text-accent-content text-center hover:scale-[1.02] transition-transform shadow-[0_0_25px_rgba(230,175,46,0.4)]">
        GARANTIR MINHA VAGA
      </div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  );
};