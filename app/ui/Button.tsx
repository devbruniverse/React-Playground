import type { PropsWithChildren } from "react";

interface ButtonProps {
  type?: 'button' | 'submit';
  onClick: () => void;
}

const baseStyle = 'rounded-sm px-2 bg-blue-400 text-white h-9 min-w-16';

function Button({
  type = 'button',
  onClick,
  children
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={baseStyle}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps };