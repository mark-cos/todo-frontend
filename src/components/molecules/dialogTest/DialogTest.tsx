'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState } from 'react';

const DialogTest = () => {
  let [isOpen, setIsOpen] = useState(true);
  const handleToggleDialog = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <Button onClick={handleToggleDialog}>다이얼로그 오픈</Button>
    </>
  );
};

export default DialogTest;
