import React from 'react';

type InputTextProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  name: string;
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputText = ({ name, value, inputRef, ...porps }: InputTextProps) => {
  return (
    <input
      ref={inputRef}
      value={value}
      name={name}
      {...porps}
      className={`w-full border border-secondary bg-transparent p-2 outline-0 hover:border-[#979797] focus:border-[#979797] ${porps.className}`}
    ></input>
  );
};

export default InputText;
