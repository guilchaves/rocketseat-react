import { cx } from "class-variance-authority";

type MainProps = React.ComponentProps<"main">

function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {children}
    </main>
  );
}

export default Main;
