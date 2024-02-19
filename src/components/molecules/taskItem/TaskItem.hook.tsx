import { rqKey } from '@/libs/react-query';
import ROUTE from '@/libs/route';
import { putTaskIsCompleted } from '@/services/task';
import { Task } from '@/types/task/task.type';
import { getClientLngAddPath } from '@/utils/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

const useTaskItem = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (task: Task) => putTaskIsCompleted(task._id, !task.isCompleted),
  });
  const queryClient = useQueryClient();
  const handleClickCompleteBtn = async (event: MouseEvent, task: Task) => {
    event.stopPropagation();
    await mutation.mutateAsync(task);
    queryClient.invalidateQueries({ queryKey: [rqKey.tasks] });
  };
  const handleClickTask = (taskId: string) => {
    router.push(getClientLngAddPath(`${ROUTE.TASKS.path}/${taskId}`));
  };
  return { handleClickCompleteBtn, handleClickTask };
};

export default useTaskItem;
