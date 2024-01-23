import { rqKey } from '@/libs/react-query';
import ROUTE from '@/libs/route';
import { deleteTask } from '@/services/task';
import { getLastPathname } from '@/utils/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useTaskDetailInfo = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const taskId = getLastPathname(usePathname());

  const mutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
  });

  // task 삭제 후 메인 페이지로 이동
  const handleTaskDelete = async () => {
    setIsShowCloseModal(true);
    const isDelete = await mutation.mutateAsync(taskId);

    if (isDelete.data.deletedCount === 1) {
      queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
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
