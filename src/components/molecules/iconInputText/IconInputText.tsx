import InputText from '@/components/atoms/inputText/InputText';
import Image from 'next/image';
import React from 'react';
import { IconInputTextProps } from './IconInputText.types';

const IconInputText = (props: IconInputTextProps) => {
  return (
    <div className="flex items-center">
      <Image src={props.iconSrc} alt={props.alt} className="absolute ml-2" />
      <InputText
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        className="pl-10"
        ref={props.inputRef}
      />
    </div>
  );
};

export default IconInputText;
