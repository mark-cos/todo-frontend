import { useDispatch, useSelector } from '@/libs/redux';
import {
  AddTask,
  TASK_FORM_STEP,
  Task,
  addTaskSchema,
  taskSchema,
} from '@/types/task/task.type';
import React, { useCallback, useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { defaultAddTask } from '@/components/organisms/teskDialog/data';
import { yupResolver } from '@hookform/resolvers/yup';
import taskSlice from '@/libs/redux/slices/taskSlice';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTask } from '@/services/task';
import { rqKey } from '@/libs/react-query';

export const useTaskDialog = (isNewTask: boolean) => {
  const { t } = useClientTranslation('taskDialog');
  const { taskFormStep, isShowModal, task, isEditMode } = useSelector(
    (state) => state.task,
  );
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [rqKey.tasks],
      });
      reset();
      toast.success('task add success !');
      handleCloseModal();
    },
  });

  const handleCloseModal = () => {
    dispatch(taskSlice.actions.setIsShoModal(false));
  };

  const onSuccess = (data: Task | AddTask) => {
    mutation.mutate(data);
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
    defaultValues: defaultAddTask,
    resolver: yupResolver(isNewTask ? addTaskSchema : taskSchema),
  });

  useEffect(() => {
    if (isEditMode) {
      reset(task);
    } else {
      reset(defaultAddTask);
    }
  }, [task, isEditMode]);

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
    (_taskFormStep: TASK_FORM_STEP) => {
      if (isEditMode && _taskFormStep === TASK_FORM_STEP.MAIN) {
        dispatch(taskSlice.actions.setIsShoModal(false));
        dispatch(taskSlice.actions.setTaskFormData(getValues()));
        return;
      }
      dispatch(taskSlice.actions.setTaskFormStep(_taskFormStep));
    },
    [dispatch, isEditMode],
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
    isEditMode,
  };
};
