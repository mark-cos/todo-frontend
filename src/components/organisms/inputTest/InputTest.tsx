'use client';
import { Button } from '@/components/atoms';
import LocaleSwitcher from '@/components/molecules/buttonTest/LocaleSwitcher';
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
    <div className="flex h-20 w-full items-center border border-black dark:bg-black">
      <div className="flex-1">
        <Button onClick={onToggleDarkMode} className="w-full">
          {isDarkMode ? 'light' : 'drak'}
        </Button>
      </div>
      <div className="flex-1">
        <Button
          variant="contained"
          onClick={onToggleLang}
          className="w-full text-red-950"
        >
          {dictionary.button1}
        </Button>
      </div>
      <div className="flex-1">
        <Button variant="outlined" className="w-full">
          {dictionary.button2}
        </Button>
      </div>
    </div>
  );
};

export default InputTest;
