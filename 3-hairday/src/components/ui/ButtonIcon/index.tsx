import { cva, type VariantProps } from "class-variance-authority";
import Icon from "../Icon";

const buttonVariants = cva(
  `
    fill-yellow hover:fill-yellow-dark cursor-pointer
  `,
  {
    variants: {
      disabled: {
        true: "fill-yellow-dark pointer-events-none",
      },
      animate: {
        true: "animate-spin",
      },
    },
    defaultVariants: {
      disabled: false,
      animate: false,
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  disabled?: boolean;
}

export default function Button({
  disabled,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ disabled, className })}
      disabled={disabled}
      {...props}
    >
      <Icon svg={icon} />
    </button>
  );
}
