'use client';
import { Button } from '@/components/atoms';
import React, { useState } from 'react';

const InputTest = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onToggleDarkMode = () => {
    const html = document.querySelector('html');
    const isDarkMode = html?.classList.contains('dark');
    isDarkMode ? html?.classList.remove('dark') : html?.classList.add('dark');
    setIsDarkMode((pre) => !isDarkMode);
  };
  return (
    <div className="flex h-20 w-[550px] items-center border border-black dark:bg-black">
      <div className="basis-1/3">
        <Button onClick={onToggleDarkMode}>{isDarkMode ? 'light' : 'drak'}</Button>
      </div>
      <div className="basis-1/3">
        <Button variant="contained">버튼</Button>
      </div>
      <div className="basis-1/3">
        <Button variant="outlined">버튼</Button>
      </div>
    </div>
  );
};

export default InputTest;
