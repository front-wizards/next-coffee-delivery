import React from "react";
import { Icon } from "../Icon/Icon";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  iconName?: "purpleCart" | "purpleMap" | "yellowCart" | "plus" | "minus" | "remove";
  styles?: string;
  onClick?: () => void;
}

export function Button({ iconName, children, styles, onClick, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`${styles} flex justify-between items-center gap-2`}
      onClick={onClick}
    >
      <Icon name={iconName} />
      {children}
    </button>
  );
}
