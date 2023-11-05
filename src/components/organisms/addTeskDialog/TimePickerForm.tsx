import { Button } from '@/components/atoms';
import { useDispatch } from '@/libs/redux';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { ADD_TASK_FORM_STEP } from '@/types/task/task.type';
import React from 'react';

const TimePickerForm = () => {
  const dispatch = useDispatch();

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };

  return (
    <div className="flex flex-col">
      <div className="flex-auto">Timer</div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.CALENDAR)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.INIT)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimePickerForm;
