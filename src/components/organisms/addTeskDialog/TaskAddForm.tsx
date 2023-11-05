import { InputText } from '@/components/atoms';
import React, { useRef } from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';
import { useDispatch, useSelector } from '@/libs/redux';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { Control, Controller } from 'react-hook-form';
import { ADD_TASK_FORM_STEP, AddTask } from '@/types/task/task.type';

type TaskAddFormProps = {
  control: Control<AddTask>;
};

const TaskAddForm = ({ control }: TaskAddFormProps) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.addTask.task);

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));

    if (!titleRef.current || !descriptionRef.current) {
      return;
    }
    dispatch(
      addTaskSlice.actions.setTaskFormData({
        ...task,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      }),
    );
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <InputText
              inputRef={titleRef}
              placeholder="Title"
              className="mb-2"
              onChange={onChange}
              name="title"
              defaultValue={task.title}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <InputText
              inputRef={descriptionRef}
              placeholder="Description"
              className="mb-2"
              onChange={onChange}
              name="description"
              defaultValue={value}
            />
          )}
        />
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
          <button type="submit">
            <SendIcon className="color-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskAddForm;
