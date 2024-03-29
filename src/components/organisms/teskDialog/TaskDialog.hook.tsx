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
import Button from '@/components/atoms/button/Button';

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
    isCategoryEditMode,
    setIsCategoryEditMode,
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

  // 수정 - 전달받은 task 데이터를 기준으로 초기화
  // 입력 - 기본 빈값으로 초기화
  useEffect(() => {
    if (isEditMode) {
      reset(task);
    } else {
      reset(defaultAddTask);
    }
  }, [task, isEditMode]);

  // 각 폼 타입에 따른 타이틀 설정.
  // 카테고리의 경우 버툰으 추가로 표시되어야 하므로 TitleCompont props를 전달하여 사용한다.
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
        break;
      }
      case TASK_FORM_STEP.CREATE_CATEGORY: {
        title.label = isCategoryEditMode ? 'Category edit' : t('category_create.title');
        break;
      }
      case TASK_FORM_STEP.PRIORITY: {
        title.label = isEditMode ? 'Edit Task Priority' : t('task_priority.title');
        break;
      }
    }
    return title;
  }, [taskFormStep, isEditMode]);

  // 카테고리 타이틀 컴포넌트
  const CategoryTitle = (
    <div className="mb-2 border-b-[1px] border-secondary pb-2 text-center text-lg font-bold leading-normal">
      <div className="relative">
        {isCategoryEditMode ? 'Category edit' : t('category_create.title')}

        <div className="absolute right-0 top-0">
          <Button
            variant="outlined"
            className="h-auto px-1 py-0 text-sm font-light"
            onClick={() => setIsCategoryEditMode(!isCategoryEditMode)}
          >
            {isCategoryEditMode ? 'Cancel' : 'Edit'}
          </Button>
        </div>
      </div>
    </div>
  );

  /**
   * 수정 다이얼로그에서 save버튼을 눌렀을 경우 메인 폼으로 이동이 아닌 다이얼로그를 닫음.
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
    CategoryTitle,
  };
};
