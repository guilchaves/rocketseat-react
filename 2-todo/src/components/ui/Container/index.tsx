import { cva, type VariantProps } from "class-variance-authority";
import { createElement } from "react";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-126 px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
  React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: containerVariants({ size: "md", className }),
      ...props,
    },
    children
  );
}

export default Container;
