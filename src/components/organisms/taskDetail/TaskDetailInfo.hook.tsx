import ROUTE from '@/libs/route';
import { deleteTask } from '@/services/task';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useTaskDetailInfo = () => {
  const router = useRouter();
  const taskId = usePathname();

  const mutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
  });

  // task 삭제 후 메인 페이지로 이동
  const handleTaskDelete = async () => {
    setIsShowCloseModal(true);
    const isDelete = await mutation.mutateAsync(taskId);
    if (isDelete) {
      router.push(ROUTE.MAIN.path);
    }
  };

  const handleOpenTaskEditDialog = () => {};

  // 닫기 모달
  const [isShowCloseModal, setIsShowCloseModal] = useState(false);
  const handleCloseModal = () => {
    setIsShowCloseModal(false);
  };

  return {
    handleTaskDelete,
    handleOpenTaskEditDialog,
    isShowCloseModal,
    setIsShowCloseModal,
    handleCloseModal,
  };
};

export default useTaskDetailInfo;
