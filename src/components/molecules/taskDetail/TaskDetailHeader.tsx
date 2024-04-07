'use client';
import React from 'react';
import cancelIcon from '@/images/icons/cancel.svg?url';
import repeatIcon from '@/images/icons/repeat.svg?url';
import Image from 'next/image';
import useTaskDetailHeader from './TaskDetailHeader.hook';

const TaskDetailHeader = () => {
  const { handleGoBackPage, handleTaskInfoReflash } = useTaskDetailHeader();
  return (
    <div className="flex justify-between">
      <div className="flex-none">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-dark bg-dark"
          onClick={handleGoBackPage}
        >
          <Image className="h-6 w-6" src={cancelIcon} alt="cancelIcon" />
        </button>
      </div>
      <div className="flex-none">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-dark bg-dark"
          onClick={handleTaskInfoReflash}
        >
          <Image className="h-6 w-6" src={repeatIcon} alt="repeatIcon" />
        </button>
      </div>
    </div>
  );
};

export default TaskDetailHeader;
