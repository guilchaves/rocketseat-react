import { cva, type VariantProps } from "class-variance-authority";
import SpinnerIcon from "../../../assets/icons/spinner.svg?react";
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
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  disabled?: boolean;
  handling?: boolean;
}

export default function Button({
  disabled,
  className,
  icon,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ disabled, className })}
      disabled={disabled}
      {...props}
    >
      <Icon svg={handling ? SpinnerIcon : icon} animate={handling} />
    </button>
  );
}
