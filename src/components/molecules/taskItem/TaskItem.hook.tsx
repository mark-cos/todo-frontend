import { rqKey } from '@/libs/react-query';
import { putTaskIsCompleted } from '@/services/task';
import { Task } from '@/types/task/task.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import React from 'react';

const useTaskItem = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (task: Task) => putTaskIsCompleted(task._id, !task.isCompleted),
  });
  const queryClient = useQueryClient();
  const handleClickCompleteBtn = async (task: Task) => {
    await mutation.mutateAsync(task);
    queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
  };
  const handleClickTask = (taskId: string) => {
    router.push(`/main/tasks/${taskId}`);
  };
  return { handleClickCompleteBtn, handleClickTask };
};

export default useTaskItem;
