import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    animate: false,
    size: "md",
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

function Icon({
  svg: SvgComponent,
  animate,
  className,
  size,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({ animate, size, className })}
      {...props}
    />
  );
}
export default Icon;
