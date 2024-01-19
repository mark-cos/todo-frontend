import { rqKey } from '@/libs/react-query';
import { putTaskIsCompleted } from '@/services/task';
import { Task } from '@/types/task/task.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const useTaskItem = () => {
  const mutation = useMutation({
    mutationFn: (task: Task) => putTaskIsCompleted(task._id, !task.isCompleted),
  });
  const queryClient = useQueryClient();
  const handleClickCompleteBtn = async (task: Task) => {
    await mutation.mutateAsync(task);
    queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
  };
  return { handleClickCompleteBtn };
};

export default useTaskItem;
