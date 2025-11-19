interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col gap-3 p-3 md:flex-row max-w-360 mx-auto">
      {children}
    </div>
  );
}
