import React, { ForwardedRef, forwardRef } from 'react';
import { InputTextProps } from './inputText.types';

const InputText = React.forwardRef(
  (
    { name, value, placeholder, type = 'text', ...porps }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        {...porps}
        className={`w-full rounded border border-dark bg-transparent p-2 outline-0 hover:border-secondary focus:border-secondary ${
          porps.className || ''
        }`}
      />
    );
  },
);
InputText.displayName = 'InputText';
export default InputText;
