import { InputText } from '@/components/atoms';
import React from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';
import { useDispatch, useSelector } from '@/libs/redux';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { ADD_TASK_FORM_STEP } from './AddTaskDialog';

const TaskAddForm = () => {
  const dispatch = useDispatch();

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };

  return (
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
              onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.CALENDAR)}
            >
              <TimerIcon />
            </button>
          </div>
          <div className="flex-none">
            <button
              type="button"
              onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.CATEGORY)}
            >
              <TagIcon />
            </button>
          </div>
          <div className="flex-none">
            <button
              type="button"
              onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.PRIORITY)}
            >
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
  );
};

export default TaskAddForm;
