type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  const containerClasses = `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}
