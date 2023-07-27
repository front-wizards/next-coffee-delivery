import React from "react";
import { Icon } from "../Icon/Icon";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  iconName?: "purpleCart" | "yellowCart" | "plus" | "minus" | "remove";
  styles?: string;
}

export function Button({ iconName, children, styles, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest} className={styles ? styles : 'p-2 border-2 bg-[#FFFF] rounded-lg'}>
      <Icon name={iconName} />
      {children}
    </button>
  );
}
