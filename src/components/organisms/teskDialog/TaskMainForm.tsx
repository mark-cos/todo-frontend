import React from 'react';
import TimerIcon from '@/images/icons/timer.svg';
import TagIcon from '@/images/icons/tag.svg';
import FlagIcon from '@/images/icons/flag.svg';
import SendIcon from '@/images/icons/send.svg';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import InputText from '@/components/atoms/inputText/InputText';
import { useTaskMainForm } from './TaskMainForm.hook';
import { TaskMainFormProps } from './taskDialog.types';

const TaskMainForm = ({
  title,
  description,
  handleSetFormValue,
  handleSetTaskFormStep,
}: TaskMainFormProps) => {
  const { t, titleRef, descriptionRef, handleOnClickTaskStep } = useTaskMainForm(
    title,
    description,
    handleSetFormValue,
    handleSetTaskFormStep,
  );

  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <InputText
          placeholder={t('task_main.input.title.placeholder')}
          className="mb-2"
          name="title"
          ref={titleRef}
          onBlur={(e) => handleSetFormValue('title', e.currentTarget.value)}
        />

        <InputText
          placeholder={t('task_main.input.description.placeholder')}
          className="mb-2"
          name="description"
          ref={descriptionRef}
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
    </div>
  );
};

export default TaskMainForm;
