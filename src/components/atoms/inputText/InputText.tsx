import React from 'react';

type InputTextProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputText = ({ name, inputRef, ...porps }: InputTextProps) => {
  return (
    <input
      ref={inputRef}
      name={name}
      {...porps}
      className={`w-full border border-secondary bg-transparent p-2 outline-0 hover:border-[#979797] focus:border-[#979797] ${porps.className}`}
    ></input>
  );
};

export default InputText;
