import css from "./Button.module.css";
import clsx from "clsx";

export const Button = ({ variant, children }) => {
  const className = clsx(
    css.btn,
    variant === "primary" ? css.btnPrimary : css.btnSecondary
  );

  return <button className={className}>{children}</button>;
};
