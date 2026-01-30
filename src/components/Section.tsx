type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-12 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
