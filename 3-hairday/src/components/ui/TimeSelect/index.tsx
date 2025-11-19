import { cva, cx } from "class-variance-authority";
import Typography from "../Typography";

const timeSelectVariants = cva(
  `
    flex items-center justify-center
    cursor-pointer
    bg-gray-600 hover:bg-gray-500
    border border-gray-500  rounded-lg
    text-gray-200 
  `,
  {
    variants: {
      size: {
        md: "w-20 h-10",
      },
      disabled: {
        true: "pointer-events-none bg-transparent text-gray-500 border-gray-500",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

interface TimeSelectProps
  extends Omit<React.ComponentProps<"select">, "disabled"> {
  time: string;
  disabled?: boolean;
  isSelected?: boolean;
}

export default function TimeSelect({
  disabled,
  className,
  time,
  isSelected,
  ...props
}: TimeSelectProps) {

  return (
    <div
      className={cx(
        timeSelectVariants({ disabled, className }),
        `${isSelected ? "border-yellow" : ""}`,
      )}
    >
      <Typography
        variant="text-md"
        {...props}
        className={`w-full p-2 bg-transparent outline-none text-center ${isSelected ? "text-yellow" : ""}`}
      >
        {time}
      </Typography>
    </div>
  );
}
