'use client';
import { Button, Dialog } from '@/components/atoms';
import React, { useState } from 'react';

const DialogText = () => {
  let [isOpen, setIsOpen] = useState(true);
  const handleToggleDialog = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <Button onClick={handleToggleDialog}>다이얼로그 오픈</Button>

      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DialogText;
