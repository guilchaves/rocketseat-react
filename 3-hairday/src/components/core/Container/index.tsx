interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({children}: ContainerProps) {
  return (
    <div className="flex flex-row gap-3 p-3 w-full h-scren">
      {children}
    </div>
  );
}
