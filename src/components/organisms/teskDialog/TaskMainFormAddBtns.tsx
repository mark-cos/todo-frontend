import { TASK_FORM_STEP } from '@/types/task/task.type';
import React from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';

type TaskMainFormAddBtnsPorps = {
  handleOnClickTaskStep: (taskFormSteop: TASK_FORM_STEP) => void;
};

const TaskMainFormAddBtns = ({ handleOnClickTaskStep }: TaskMainFormAddBtnsPorps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex justify-between gap-x-5">
        <div className="flex-none ">
          <button
            type="button"
            onClick={() => handleOnClickTaskStep(TASK_FORM_STEP.CALENDAR)}
          >
            <TimerIcon />
          </button>
        </div>
        <div className="flex-none">
          <button
            type="button"
            onClick={() => handleOnClickTaskStep(TASK_FORM_STEP.CATEGORY)}
          >
            <TagIcon />
          </button>
        </div>
        <div className="flex-none">
          <button
            type="button"
            onClick={() => handleOnClickTaskStep(TASK_FORM_STEP.PRIORITY)}
          >
            <FlagIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex-none">
        <button type="submit">
          <SendIcon className="color-primary" />
        </button>
      </div>
    </div>
  );
};

export default TaskMainFormAddBtns;
