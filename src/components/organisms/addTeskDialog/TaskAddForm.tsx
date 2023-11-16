import { InputText } from '@/components/atoms';
import React, { useEffect, useRef } from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';
import { TASK_FORM_STEP, AddTask, Task } from '@/types/task/task.type';

type TaskAddFormProps = {
  title: string;
  description: string;
  handleSetFormValue: (name: keyof AddTask, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

const TaskAddForm = ({
  title,
  description,
  handleSetFormValue,
  handleSetTaskFormStep,
}: TaskAddFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.value = title;
    if (descriptionRef.current) descriptionRef.current.value = description;
  }, []);

  const handleOnClickTaskStep = (taskFormStep: TASK_FORM_STEP) => {
    if (titleRef.current) handleSetFormValue('title', titleRef.current?.value);
    if (descriptionRef.current)
      handleSetFormValue('description', descriptionRef.current?.value);
    handleSetTaskFormStep(taskFormStep);
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <InputText
          placeholder="Title"
          className="mb-2"
          name="title"
          inputRef={titleRef}
          onBlur={(e) => handleSetFormValue('title', e.currentTarget.value)}
        />

        <InputText
          placeholder="description"
          className="mb-2"
          name="description"
          inputRef={descriptionRef}
          onBlur={(e) => handleSetFormValue('description', e.currentTarget.value)}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex justify-between gap-x-5">
          <div className="flex-none">
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
