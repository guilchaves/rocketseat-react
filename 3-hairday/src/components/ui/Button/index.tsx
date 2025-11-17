import { cva, type VariantProps } from "class-variance-authority";
import Typography from "../Typography";

const buttonVariants = cva(
  `
    flex flex-row justify-center items-center
    px-4 gap-2 rounded-lg uppercase font-bold
    bg-yellow hover:bg-yellow-light text-gray-900
    transition-colors cursor-pointer
  `,
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        md: "h-14 w-[320px]",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  handling?: boolean;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      disabled={disabled || handling}
      {...props}
    >
      <Typography variant="text-md">{children}</Typography>
    </button>
  );
}


