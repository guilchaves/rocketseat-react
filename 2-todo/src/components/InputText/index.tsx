import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "../Text";

export const inputTextVariants = cva(
  `
  border-b border-solid border-gray-200
  bg-transparent outline-none
`,
  {
    variants: {
      size: {
        md: "pb-2 px-2",
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

interface InputTextProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextVariants> {}

function InputText({ size, disabled, className, ...props }: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}

export default InputText;
