'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState, useEffect } from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';
import CalendarDialog from './CalendarForm';

type AddTaskDialogProps = {
  dictionary?: {};
};

const AddTaskDialog = ({ dictionary }: AddTaskDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubDialogOpen, setIsSubDialogOpen] = useState(false);
  const handleToggleCalendarDialog = (dialogName: string) => {
    setIsSubDialogOpen((pre) => !pre);
  };

  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Task"
        backdrop={!isSubDialogOpen}
        className={`${isSubDialogOpen ? 'hidden' : ''}`}
      >
        <div className="flex flex-col">
          <div className="flex-grow">
            <InputText placeholder="Title" className="mb-2" />
            <InputText placeholder="Description" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex justify-between gap-x-5">
              <div className="flex-none">
                <button
                  type="button"
                  onClick={() => {
                    handleToggleCalendarDialog('calendar');
                  }}
                >
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

export default AddTaskDialog;
