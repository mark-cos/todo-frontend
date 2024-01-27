import React from 'react';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import InputText from '@/components/atoms/inputText/InputText';
import { useTaskMainForm } from './TaskMainForm.hook';
import { TaskMainFormProps } from './taskDialog.types';
import Button from '@/components/atoms/button/Button';
import TaskMainFormAddBtns from './TaskMainFormAddBtns';

const TaskMainForm = ({
  title,
  description,
  handleSetFormValue,
  handleSetTaskFormStep,
}: TaskMainFormProps) => {
  const {
    t,
    titleRef,
    descriptionRef,
    handleOnClickTaskStep,
    isEditMode,
    handleCloseDialog,
  } = useTaskMainForm(title, description, handleSetFormValue, handleSetTaskFormStep);

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

      {isEditMode ? (
        <div className="flex">
          <div className="basis-1/2">
            <Button variant="text" className="w-full" onClick={handleCloseDialog}>
              {t('button.cancel')}
            </Button>
          </div>
          <div className="basis-1/2">
            <Button
              className="w-full rounded-md"
              variant="contained"
              type="button"
              onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
            >
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <TaskMainFormAddBtns handleOnClickTaskStep={handleOnClickTaskStep} />
      )}
    </div>
  );
};

export default TaskMainForm;
