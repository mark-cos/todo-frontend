'use client';
import Button from '@/components/atoms/button/Button';
import React, { useState } from 'react';

type InputTestProps = {
  dictionary: {
    button1: string;
    button2: string;
  };
};

const InputTest = ({ dictionary }: InputTestProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('ko');

  const onToggleDarkMode = () => {
    const html = document.querySelector('html');
    const isDarkMode = html?.classList.contains('dark');
    isDarkMode ? html?.classList.remove('dark') : html?.classList.add('dark');
    setIsDarkMode((pre) => !isDarkMode);
  };

  const onToggleLang = () => {
    setLang((pre) => (pre === 'ko' ? 'en' : 'ko'));
  };
  return (
    <div className="flex h-20 w-[550px] items-center border border-black dark:bg-black">
      <div className="basis-1/3">
        <Button variant="text" onClick={onToggleDarkMode}>
          {isDarkMode ? 'light' : 'drak'}
        </Button>
      </div>
      <div className="basis-1/3">
        <Button variant="contained" onClick={onToggleLang} className="text-red-950">
          {dictionary.button1}
        </Button>
      </div>
      <div className="basis-1/3">
        <Button variant="outlined">{dictionary.button2}</Button>
      </div>
    </div>
  );
};

export default InputTest;
