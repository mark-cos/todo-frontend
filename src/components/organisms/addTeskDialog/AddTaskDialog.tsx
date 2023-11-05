'use client';
import { Button, Dialog, InputText } from '@/components/atoms';
import React, { useState, useEffect, useCallback } from 'react';
import TaskAddForm from './TaskAddForm';
import { useDispatch, useSelector } from '@/libs/redux';
import CalendarPickerForm from './CalendarPickerForm';
import TimePickerForm from './TimePickerForm';
import PrioritySelectForm from './PrioritySelectForm';
import CategorySelectForm from './CategorySelectForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { ADD_TASK_FORM_STEP, AddTask, addTaskSchema } from '@/types/task/task.type';

type AddTaskDialogProps = {
  dictionary?: {};
};

const AddTaskDialog = ({ dictionary }: AddTaskDialogProps) => {
  const onSuccess = (data: AddTask) => {
    console.log(data);
  };
  const [isOpen, setIsOpen] = useState(true);
  const { addTaskFormStep, task } = useSelector((state) => state.addTask);

  const {
    reset,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<AddTask>({
    defaultValues: {
      time: 0,
    },
    resolver: yupResolver(addTaskSchema),
  });

  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-[#979797] pb-2',
    };
    switch (addTaskFormStep) {
      case ADD_TASK_FORM_STEP.INIT: {
        title.label = 'Add Task';
        title.className = '';
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

  useEffect(() => {
    if (task.time !== 0) setValue('time', task.time);
    if (task.category) setValue('category', task.category);
  }, [task]);

  const dispatch = useDispatch();
  const setAddTask = (addTask: AddTask) => {
    dispatch(addTaskSlice.actions.setTaskFormData(addTask));
  };

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };

  return (
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title={dialogTitle()}>
        <form onSubmit={handleSubmit(onSuccess)}>
          {addTaskFormStep === ADD_TASK_FORM_STEP.INIT && (
            <TaskAddForm control={control} />
          )}
          {addTaskFormStep === ADD_TASK_FORM_STEP.CALENDAR && (
            <CalendarPickerForm
              control={control}
              task={task}
              setAddTask={setAddTask}
              handleAddTaskFormStep={handleAddTaskFormStep}
            />
          )}
          {addTaskFormStep === ADD_TASK_FORM_STEP.TIME && <TimePickerForm />}
          {addTaskFormStep === ADD_TASK_FORM_STEP.CATEGORY && (
            <CategorySelectForm control={control} />
          )}
          {addTaskFormStep === ADD_TASK_FORM_STEP.PRIORITY && <PrioritySelectForm />}
        </form>
      </Dialog>
    </>
  );
};

export default AddTaskDialog;
