import { Button } from '@/components/atoms';
import { useDispatch } from '@/libs/redux';
import React from 'react';
import { ADD_TASK_FORM_STEP } from './AddTaskDialog';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import FlagIcon from '@/images/icons/flag.svg';

const CategorySelectForm = () => {
  const dispatch = useDispatch();

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };
  return (
    <div className="flex flex-col">
      <div className="my-5 flex-auto">
        <div className="grid grid-cols-4 items-center justify-center gap-y-4 text-center">
          {[...Array(10)].map((_n, index) => (
            <div
              key={`priority${index}`}
              role="button"
              className="mx-auto h-16 w-16 basis-1/4 cursor-pointer flex-col rounded-md bg-[#272727] px-2 py-1 hover:bg-primary"
            >
              <FlagIcon className="m-auto" index={0} />
              <div className="flex-none">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.INIT)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.INIT)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectForm;
