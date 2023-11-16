'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState, useEffect, useCallback } from 'react';
import TaskAddForm from './TaskAddForm';
import { useDispatch, useSelector } from '@/libs/redux';
import CalendarPickerForm from './CalendarPickerForm';
import TimePickerForm from './TimePickerForm';
import PrioritySelectForm from './PrioritySelectForm';
import CategorySelectForm from './CategorySelectForm';
import { useForm, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import {
  TASK_FORM_STEP,
  AddTask,
  Task,
  addTaskSchema,
  taskSchema,
} from '@/types/task/task.type';
import { format } from 'date-fns';

type AddTaskDialogProps = {
  dictionary?: {};
  task?: Task;
};

const defaultAddTask: AddTask = {
  title: '',
  description: '',
  taskDate: format(new Date(), 'yyyy-MM-dd'),
  taskTime: '00:00',
  category: {
    id: 0,
    name: '',
    icon: '',
    color: '',
  },
  priority: 5,
};

const AddTaskDialog = ({ dictionary, task }: AddTaskDialogProps) => {
  const isNewTask = !!task;
  const onSuccess = (data: Task | AddTask) => {
    console.log(data);
  };

  const onSubmitError = (errors: FieldErrors<AddTask>) => {
    for (const [key, value] of Object.entries(errors)) {
      console.log(key, value);
    }
  };

  const [isOpen, setIsOpen] = useState(true);
  const { addTaskFormStep } = useSelector((state) => state.addTask);

  const {
    reset,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
  } = useForm<AddTask>({
    defaultValues: isNewTask ? task : defaultAddTask,
    resolver: yupResolver(isNewTask ? taskSchema : addTaskSchema),
  });

  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-[#979797] pb-2',
    };
    switch (addTaskFormStep) {
      case TASK_FORM_STEP.MAIN: {
        title.label = 'Add Task';
        title.className = '';
        break;
      }
      case TASK_FORM_STEP.TIME: {
        title.label = 'Choose Time';
        break;
      }
      case TASK_FORM_STEP.CATEGORY: {
        title.label = 'Choose Category';
        break;
      }
      case TASK_FORM_STEP.PRIORITY: {
        title.label = 'Task Priority';
        break;
      }
    }
    return title;
  }, [addTaskFormStep]);

  const dispatch = useDispatch();

  const handleSetTaskFormStep = useCallback(
    (addTaskFormStep: TASK_FORM_STEP) => {
      dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
    },
    [dispatch],
  );

  const handleSetFormValue = (name: keyof AddTask, value: any) => {
    setValue(name, value);
  };

  return (
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title={dialogTitle()}>
        <form onSubmit={handleSubmit(onSuccess, onSubmitError)}>
          {addTaskFormStep === TASK_FORM_STEP.MAIN && (
            <TaskAddForm
              title={getValues('title')}
              description={getValues('description')}
              handleSetFormValue={handleSetFormValue}
              handleSetTaskFormStep={handleSetTaskFormStep}
            />
          )}
          {addTaskFormStep === TASK_FORM_STEP.CALENDAR && (
            <CalendarPickerForm
              taskDate={getValues('taskDate')}
              handleSetFormValue={handleSetFormValue}
              handleSetTaskFormStep={handleSetTaskFormStep}
            />
          )}
          {addTaskFormStep === TASK_FORM_STEP.TIME && (
            <TimePickerForm
              taskTime={getValues('taskTime')}
              handleSetFormValue={handleSetFormValue}
              handleSetTaskFormStep={handleSetTaskFormStep}
            />
          )}
          {addTaskFormStep === TASK_FORM_STEP.CATEGORY && (
            <CategorySelectForm
              category={getValues('category')}
              handleSetFormValue={handleSetFormValue}
              handleSetTaskFormStep={handleSetTaskFormStep}
            />
          )}
          {addTaskFormStep === TASK_FORM_STEP.PRIORITY && (
            <PrioritySelectForm
              priority={getValues('priority')}
              handleSetFormValue={handleSetFormValue}
              handleSetTaskFormStep={handleSetTaskFormStep}
            />
          )}
        </form>
      </Dialog>
    </>
  );
};

export default AddTaskDialog;
