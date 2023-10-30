'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState } from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';

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

          <div className="mt-4 flex items-center justify-between">
            <div className="flex justify-between gap-x-5">
              <div className="flex-none">
                <button type="button">
                  <TimerIcon />
                </button>
              </div>
              <div className="flex-none">
                <button type="button">
                  <TagIcon />
                </button>
              </div>
              <div className="flex-none">
                <button type="button">
                  <FlagIcon />
                </button>
              </div>
            </div>
            <div className="flex-none">
              <button type="button">
                <SendIcon className="color-primary" />
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DialogTest;
