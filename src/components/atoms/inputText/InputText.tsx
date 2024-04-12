import React, { ForwardedRef, forwardRef } from 'react';
import { InputTextProps } from './inputText.types';
import { twMerge } from 'tailwind-merge';

const InputText = React.forwardRef(
  (
    { name, value, placeholder, type = 'text', ...props }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
        className={twMerge(
          `w-full rounded border border-dark bg-transparent p-2 outline-0 hover:border-secondary focus:border-secondary`,
          props.className || '',
        )}
      />
    );
  },
);
InputText.displayName = 'InputText';
export default InputText;
