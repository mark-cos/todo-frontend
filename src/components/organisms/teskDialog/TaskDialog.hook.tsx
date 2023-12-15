import { useDispatch, useSelector } from '@/libs/redux';
import {
  AddTask,
  TASK_FORM_STEP,
  Task,
  addTaskSchema,
  taskSchema,
} from '@/types/task/task.type';
import React, { useCallback } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { defaultAddTask } from '@/components/organisms/teskDialog/data';
import { yupResolver } from '@hookform/resolvers/yup';
import taskSlice from '@/libs/redux/slices/taskSlice';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

export const useTaskDialog = (task?: Task) => {
  const { t } = useClientTranslation('taskDialog');
  const isNewTask = !!task;
  const { taskFormStep, isShowModal } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(taskSlice.actions.setIsShoModal(false));
  };

  const onSuccess = (data: Task | AddTask) => {
    console.log(data);
  };

  const onSubmitError = (errors: FieldErrors<AddTask>) => {
    for (const [key, value] of Object.entries(errors)) {
      console.log(key, value);
    }
  };

  const { reset, handleSubmit, setValue, getValues } = useForm<AddTask | Task>({
    defaultValues: isNewTask ? task : defaultAddTask,
    resolver: yupResolver(isNewTask ? taskSchema : addTaskSchema),
  });

  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-secondary pb-2',
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
      case TASK_FORM_STEP.CREATE_CATEGORY: {
        title.label = t('category_create.title');
        break;
      }
      case TASK_FORM_STEP.PRIORITY: {
        title.label = 'Task Priority';
        break;
      }
    }
    return title;
  }, [taskFormStep]);

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
  };
};
