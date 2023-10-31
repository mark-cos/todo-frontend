'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState, useEffect, useCallback } from 'react';

import TaskAddForm from './TaskAddForm';
import { useDispatch, useSelector } from '@/libs/redux';
import CalendarPickerForm from './CalendarPickerForm';
import TimePickerForm from './TimePickerForm';
import PrioritySelectForm from './PrioritySelectForm';
import CategorySelectForm from './CategorySelectForm';

type AddTaskDialogProps = {
  dictionary?: {};
};

export enum ADD_TASK_FORM_STEP {
  INIT,
  CALENDAR,
  TIME,
  CATEGORY,
  PRIORITY,
}

// FIXME: INIT이 초기화 안되서..시점 차이로 오류남
const AddTaskDialog = ({ dictionary }: AddTaskDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { addTaskFormStep, task } = useSelector((state) => state.addTask);
  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-[#979797] pb-2',
    };
    switch (addTaskFormStep) {
      case ADD_TASK_FORM_STEP.INIT: {
        title.label = 'Add Task';
        break;
      }
      case ADD_TASK_FORM_STEP.TIME: {
        title.label = 'Choose Time';
        break;
      }
      case ADD_TASK_FORM_STEP.CATEGORY: {
        title.label = 'Choose Category';
        break;
      }
      case ADD_TASK_FORM_STEP.PRIORITY: {
        title.label = 'Task Priority';
        break;
      }
    }
    return title;
  }, [addTaskFormStep]);

  return (
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title={dialogTitle()}>
        {addTaskFormStep === ADD_TASK_FORM_STEP.INIT && <TaskAddForm />}
        {addTaskFormStep === ADD_TASK_FORM_STEP.CALENDAR && <CalendarPickerForm />}
        {addTaskFormStep === ADD_TASK_FORM_STEP.TIME && <TimePickerForm />}
        {addTaskFormStep === ADD_TASK_FORM_STEP.CATEGORY && <CategorySelectForm />}
        {addTaskFormStep === ADD_TASK_FORM_STEP.PRIORITY && <PrioritySelectForm />}
      </Dialog>
    </>
  );
};

export default AddTaskDialog;
