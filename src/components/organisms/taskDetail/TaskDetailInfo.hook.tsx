import { rqKey } from '@/libs/react-query';
import { useDispatch, useSelector } from '@/libs/redux';
import taskSlice from '@/libs/redux/slices/taskSlice';
import ROUTE from '@/libs/route';
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

  const { isShowModal, task: editTask } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  // task가 변경되면(처음 혹은 새로고침 버튼) store에 설정
  useEffect(() => {
    dispatch(taskSlice.actions.setTaskFormData(_task));
    dispatch(taskSlice.actions.setIsEditMode(true));
    return () => {
      dispatch(taskSlice.actions.setIsEditMode(false));
    };
  }, [_task]);

  // 각 항목 버튼 클릭 시 해당 수정 다이얼로그 표시
  const handleOpenTaskEditDialog = (taskStep: TASK_FORM_STEP) => {
    dispatch(taskSlice.actions.setTaskFormStep(taskStep));
    dispatch(taskSlice.actions.setIsShoModal(true));
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
