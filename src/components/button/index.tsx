import { type PropsWithChildren } from "react";
import { type BaseButtonProps, button } from "./buttonVariant";

interface ButtonProps extends BaseButtonProps, PropsWithChildren {}

function CommonButton({ children, ...rest }: ButtonProps) {
  return <button className={button(rest)}>{children}</button>;
}

export default CommonButton;
