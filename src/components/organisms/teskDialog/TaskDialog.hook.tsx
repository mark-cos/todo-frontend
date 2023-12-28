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
import { toast } from 'react-toastify';

export const useTaskDialog = (task?: Task) => {
  const { t } = useClientTranslation('taskDialog');
  const isNewTask = !!!task;
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
      if (!value.message) {
        for (const [key, value1] of Object.entries(value)) {
          toast.error(t(value1.message!));
          return false;
        }
      } else {
        toast.error(t(value.message!));
      }
      return false;
    }
  };

  const { reset, handleSubmit, setValue, getValues } = useForm<AddTask | Task>({
    defaultValues: isNewTask ? defaultAddTask : task,
    resolver: yupResolver(isNewTask ? addTaskSchema : taskSchema),
  });

  const dialogTitle = useCallback(() => {
    let title = {
      label: '',
      className: 'text-center border-b-[1px] border-secondary pb-2',
    };
    switch (taskFormStep) {
      case TASK_FORM_STEP.MAIN: {
        title.label = t('task_main.title');
        title.className = '';
        break;
      }
      case TASK_FORM_STEP.TIME: {
        title.label = t('task_time.title');
        break;
      }
      case TASK_FORM_STEP.CATEGORY: {
        title.label = t('category_select.title');
        break;
      }
      case TASK_FORM_STEP.CREATE_CATEGORY: {
        title.label = t('category_create.title');
        break;
      }
      case TASK_FORM_STEP.PRIORITY: {
        title.label = t('task_priority.title');
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
    setValue(name, value, { shouldValidate: false });
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
