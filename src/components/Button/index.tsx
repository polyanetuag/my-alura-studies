import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
