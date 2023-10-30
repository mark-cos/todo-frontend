import React from 'react';

type InputProps = React.HtmlHTMLAttributes<HTMLInputElement>;

const InputText = ({ ...porps }: InputProps) => {
  return (
    <input
      {...porps}
      className={`border-secondary w-full border bg-transparent p-2 outline-0 hover:border-[#979797] ${porps.className}`}
    ></input>
  );
};

export default InputText;
