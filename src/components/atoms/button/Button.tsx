'use client';
import React, { ReactNode } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
};

const Button = ({ children, variant = 'text', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${props.className ? `${props.className} ` : ''}btn-${variant}`}
      type={props.type ? props.type : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
