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

      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <div className="flex flex-col">
          <div className="flex-grow">
            <InputText placeholder="Title" className="mb-2" />
            <InputText placeholder="Description" />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex justify-between">
              <div className="flex-none">날짜</div>
              <div className="flex-none">카테</div>
              <div className="flex-none">중요도</div>
            </div>
            <div className="flex-none">등록</div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DialogTest;
