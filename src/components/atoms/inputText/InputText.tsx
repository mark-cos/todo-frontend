import React, { ForwardedRef, forwardRef } from 'react';

type InputTextProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  name: string;
  value?: string;
  type?: string;
};

const InputText = React.forwardRef(
  (
    { name, value, type = 'text', ...porps }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        value={value}
        name={name}
        type={type}
        {...porps}
        className={`w-full border border-secondary bg-transparent p-2 outline-0 hover:border-[#979797] focus:border-[#979797] ${porps.className}`}
      />
    );
  },
);
InputText.displayName = 'InputText';
export default InputText;
