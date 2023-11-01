import { Button } from '@/components/atoms';
import { useDispatch } from '@/libs/redux';
import React from 'react';
import { ADD_TASK_FORM_STEP } from './AddTaskDialog';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';

export type category = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

const categories: category[] = [
  {
    id: 1,
    name: 'work',
    color: 'bg-red-200',
    icon: '🌈',
  },
  {
    id: 2,
    name: 'java study',
    color: 'bg-amber-950',
    icon: '🔥',
  },
  {
    id: 3,
    name: 'travel',
    color: 'bg-yellow-200',
    icon: '⚡',
  },
  {
    id: 4,
    name: 'work',
    color: 'bg-blue-400',
    icon: '🎶',
  },
];

const CategorySelectForm = () => {
  const dispatch = useDispatch();

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };

  return (
    <div className="flex flex-col">
      <div className="my-5 flex-auto">
        <div className="grid grid-cols-4 items-center justify-center gap-y-4 text-center">
          {categories.map((category, index) => (
            <button key={category.id}>
              <div
                className={`mx-auto h-16 w-16 basis-1/4 rounded-md ${category.color} hover:bg-primary`}
              >
                <div className="flex h-full items-center justify-center p-1.5">
                  <div className="flex-none text-2xl">{category.icon}</div>
                </div>
              </div>
              <div className="mt-2 text-sm">{category.name}</div>
            </button>
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
