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
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTask } from '@/services/task';
import { rqKey } from '@/libs/react-query';
import { taskStore } from '@/libs/zustand';

export const useTaskDialog = (isNewTask: boolean) => {
  const { t } = useClientTranslation('taskDialog');

  const {
    taskFormStep,
    isShowModal,
    task,
    isEditMode,
    setIsShowModal,
    setTask,
    setTaskFormStep,
  } = taskStore((state) => state);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      // task 리스트 갱신 및 dialog 초기화
      queryClient.invalidateQueries({
        queryKey: [rqKey.tasks],
      });
      reset(defaultAddTask);
      toast.success('task add success !');
      handleCloseModal();
    },
  });

  const handleCloseModal = () => {
    // dispatch(taskSlice.actions.setIsShoModal(false));
    setIsShowModal(false);
  };

  const onSuccess = (data: Task | AddTask) => {
    mutation.mutate(data);
  };

  /**
   * 유효성 검사 함수.
   * 에러필드를 반복문으로 체크하여 첫번째 인덱스의 에러를 표시한다.
   * 카테고리 유효성 체크 실패는 하위 객체로 value.message가 없는 경우로
   * 해당 경우는 동일한 로직으로 한번 더 체크한다.
   */
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

  // 수정 - 의 경우 전받은 task 데이터를 기준으로 초기화
  // 입력 - 기본 빈값으로 초기화
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
        title.label = isEditMode ? 'Edit Task title' : t('task_main.title');
        title.className = isEditMode ? title.className : '';
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
        title.label = isEditMode ? 'Edit Task Priority' : t('task_priority.title');
        break;
      }
    }
    return title;
  }, [taskFormStep, isEditMode]);

  /**
   * 수정 다이얼로그에서 save버튼을 눌렀을 경우 메인이 아닌 다이얼로그를 닫음.
   * 설정한 form 데이터 store에 설정
   */
  const handleSetTaskFormStep = useCallback(
    (_taskFormStep: TASK_FORM_STEP) => {
      if (isEditMode && _taskFormStep === TASK_FORM_STEP.MAIN) {
        setIsShowModal(false);
        setTask(getValues());
        return;
      }
      setTaskFormStep(_taskFormStep);
    },
    //TODO: task 추가했다 확인 필요
    [isEditMode, task],
  );

  const handleSetFormValue = useCallback(
    (name: keyof AddTask | keyof Task, value: any) => {
      setValue(name, value);
    },
    [setValue],
  );
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
    setIsShowModal,
  };
};
