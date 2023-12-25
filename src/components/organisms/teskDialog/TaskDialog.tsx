'use client';
import React from 'react';
import CalendarPickerForm from './CalendarPickerForm';
import TimePickerForm from './TimePickerForm';
import PrioritySelectForm from './PrioritySelectForm';
import CategorySelectForm from './CategorySelectForm';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import { TaskDialogProps } from './taskDialog.types';
import TaskMainForm from './TaskMainForm';
import Dialog from '@/components/atoms/dialog/Dialog';
import { useTaskDialog } from './TaskDialog.hook';
import CategoryCreateForm from './CategoryCreateForm';

const TaskDialog = ({ dictionary, task }: TaskDialogProps) => {
  const {
    handleSubmit,
    onSuccess,
    onSubmitError,
    dialogTitle,
    taskFormStep,
    getValues,
    handleSetFormValue,
    handleSetTaskFormStep,
    isShowModal,
    handleCloseModal,
  } = useTaskDialog(task);

  return (
    <Dialog isShowModal={isShowModal} close={handleCloseModal} title={dialogTitle()}>
      <form onSubmit={handleSubmit(onSuccess, onSubmitError)}>
        {taskFormStep === TASK_FORM_STEP.MAIN && (
          <TaskMainForm
            title={getValues('title')}
            description={getValues('description')}
            handleSetFormValue={handleSetFormValue}
            handleSetTaskFormStep={handleSetTaskFormStep}
          />
        )}
        {taskFormStep === TASK_FORM_STEP.CALENDAR && (
          <CalendarPickerForm
            taskDate={getValues('taskDate')}
            handleSetFormValue={handleSetFormValue}
            handleSetTaskFormStep={handleSetTaskFormStep}
          />
        )}
        {taskFormStep === TASK_FORM_STEP.TIME && (
          <TimePickerForm
            taskTime={getValues('taskTime')}
            handleSetFormValue={handleSetFormValue}
            handleSetTaskFormStep={handleSetTaskFormStep}
          />
        )}
        {taskFormStep === TASK_FORM_STEP.CATEGORY && (
          <CategorySelectForm
            category={getValues('category')}
            handleSetFormValue={handleSetFormValue}
            handleSetTaskFormStep={handleSetTaskFormStep}
          />
        )}
        {taskFormStep === TASK_FORM_STEP.PRIORITY && (
          <PrioritySelectForm
            priority={getValues('priority')}
            handleSetFormValue={handleSetFormValue}
            handleSetTaskFormStep={handleSetTaskFormStep}
          />
        )}
      </form>
      {taskFormStep === TASK_FORM_STEP.CREATE_CATEGORY && (
        <CategoryCreateForm handleSetTaskFormStep={handleSetTaskFormStep} />
      )}
    </Dialog>
  );
};

export default TaskDialog;
