import { createElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";


const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      "title-lg": "text-2xl leading-8 font-bold",
      "title-md": "text-base font-bold",
      "title-sm": "text-sm leading-5 font-bold",
      "text-md": "text-base",
      "text-sm": "text-sm leading-5",
    },
  },
  defaultVariants: {
    variant: "text-md",
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  return createElement(
    as,
    {
      className: typographyVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
