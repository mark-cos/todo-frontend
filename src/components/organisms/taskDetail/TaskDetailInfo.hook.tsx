import { rqKey } from '@/libs/react-query';
import ROUTE from '@/libs/route';
import { taskStore } from '@/libs/zustand';
import { deleteTask, putTask } from '@/services/task';
import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import { getLastPathname } from '@/utils/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useTaskDetailInfo = (_task: Task) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const taskId = getLastPathname(usePathname());

  const mutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
      router.push(ROUTE.MAIN.path);
    },
  });

  // task 삭제 후 메인 페이지로 이동
  const handleTaskDelete = async () => {
    setIsShowCloseModal(true);
    const isDelete = await mutation.mutateAsync(taskId);
  };
  const {
    setTaskFormStep,
    setTask,
    setIsEditMode,
    setIsShowModal,
    isShowModal,
    task: editTask,
  } = taskStore((state) => state);

  // task가 변경되면(처음 혹은 새로고침 버튼) store에 설정
  useEffect(() => {
    setTask(_task);
    setIsEditMode(true);
    return () => {
      setIsEditMode(false);
    };
  }, [_task]);

  // 각 항목 버튼 클릭 시 해당 수정 다이얼로그 표시
  const handleOpenTaskEditDialog = (taskStep: TASK_FORM_STEP) => {
    setTaskFormStep(taskStep);
    setIsShowModal(true);
  };

  // 닫기 모달
  const [isShowCloseModal, setIsShowCloseModal] = useState(false);
  const handleCloseModal = () => {
    setIsShowCloseModal(false);
  };

  const editMutaion = useMutation({
    mutationFn: (task: { taskId: string; task: AddTask }) =>
      putTask(task.taskId, task.task),
    onSuccess: () => {
      toast.success('task has been modified.');
      queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
    },
  });

  const handleSubmitTaskEdit = () => {
    const task: AddTask = {
      title: editTask.title,
      description: editTask.description,
      priority: editTask.priority,
      taskDate: editTask.taskDate,
      taskTime: editTask.taskTime,
      category: {
        _id: editTask.category._id,
      },
      isCompleted: editTask.isCompleted,
    };
    editMutaion.mutate({ taskId, task });
  };

  return {
    handleTaskDelete,
    handleOpenTaskEditDialog,
    isShowCloseModal,
    setIsShowCloseModal,
    handleCloseModal,
    isShowModal,
    editTask,
    handleSubmitTaskEdit,
  };
};

export default useTaskDetailInfo;
