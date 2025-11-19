import type { ReactNode } from "react";
import Typography from "../../../../ui/Typography";

interface FormSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({
  title,
  children,
  className = "",
}: FormSectionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Typography as="h3" variant="title-md" className="text-gray-200">
        {title}
      </Typography>
      {children}
    </div>
  );
}
