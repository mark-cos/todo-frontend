import { useDispatch, useSelector } from '@/libs/redux';
import {
  AddTask,
  TASK_FORM_STEP,
  Task,
  addTaskSchema,
  taskSchema,
} from '@/types/task/task.type';
import React, { useCallback, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { defaultAddTask } from '.';
import { yupResolver } from '@hookform/resolvers/yup';
import taskSlice from '@/libs/redux/slices/taskSlice';

const useTaskDialog = (task?: Task) => {
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
  const { taskFormStep } = useSelector((state) => state.task);

  const { reset, handleSubmit, setValue, getValues } = useForm<AddTask | Task>({
    defaultValues: isNewTask ? task : defaultAddTask,
    resolver: yupResolver(isNewTask ? taskSchema : addTaskSchema),
  });

  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-[#979797] pb-2',
    };
    switch (taskFormStep) {
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
  }, [taskFormStep]);

  const dispatch = useDispatch();

  const handleSetTaskFormStep = useCallback(
    (taskFormStep: TASK_FORM_STEP) => {
      dispatch(taskSlice.actions.setTaskFormStep(taskFormStep));
    },
    [dispatch],
  );

  const handleSetFormValue = (name: keyof AddTask | keyof Task, value: any) => {
    setValue(name, value);
  };
  return {
    isOpen,
    setIsOpen,
    handleSubmit,
    onSuccess,
    onSubmitError,
    dialogTitle,
    taskFormStep,
    getValues,
    handleSetFormValue,
    handleSetTaskFormStep,
  };
};

export default useTaskDialog;
