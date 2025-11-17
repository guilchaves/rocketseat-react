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
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function TextInput({
  size,
  disabled,
  className,
  icon,
  ...props
}: TextInputProps) {
  return (
    <div
      className={cx(
        textInputVariants({ size, disabled }),
        className,
      )}
    >
      <Icon svg={icon} className="fill-yellow" />
      <input
        {...props}
        className="outline-none bg-transparent flex-1 placeholder:text-gray-400"
      />
    </div>
  );
}

