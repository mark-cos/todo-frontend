'use client';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const variantClass = () => {
    let className = '';
    switch (variant) {
      case 'text': {
        className = 'text-black dark:text-white';
        break;
      }
      case 'contained': {
        className = 'box-border bg-primary disabled:bg-primary/70 text-white';
        break;
      }
      case 'outlined': {
        className =
          'box-border border border-primary text-black  dark:text-white disabled:bg-transparent/5';
        break;
      }
    }
    return className;
  };

  return (
    <button
      {...props}
      className={twMerge(
        `h-12 rounded-[4px] px-4 py-1 ${props.disabled && 'bg cursor-not-allowed'} ${variantClass()} `,
        `${props.className}`,
      )}
      type={props.type ? props.type : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
