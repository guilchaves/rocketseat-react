import UserSquareIcon from "../../../assets/icons/user-square.svg?react";
import CalendarBlankIcon from "../../../assets/icons/calendar-blank.svg?react";

import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "../Icon";

const textInputVariants = cva(
  `
    border-b border-solid border-gray-400
    focus-within:border-yellow hover:border-yellow
    text-gray-200 
    flex flex-row items-center
    p-3 gap-2 border rounded-lg 
  `,
  {
    variants: {
      size: {
        md: "h-14 w-[320px]",
        auto: "h-14 w-fit",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

interface TextInputProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof textInputVariants> {
  type?: "text" | "date";
}

export default function TextInput({
  size,
  disabled,
  className,
  type = "text",
  ...props
}: TextInputProps) {
  const defaultIcon = type === "date" ? CalendarBlankIcon : UserSquareIcon;

  return (
    <div className={cx(textInputVariants({ size, disabled }), className)}>
      <Icon svg={defaultIcon} className="fill-yellow" />
      <input
        type={type}
        lang="pt-BR"
        {...props}
        className="outline-none bg-transparent flex-1 placeholder:text-gray-400"
      />
    </div>
  );
}
