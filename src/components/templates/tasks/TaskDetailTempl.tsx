import React from 'react';
import { Task } from '@/types/task/task.type';

import TaskDetailInfo from '@/components/organisms/taskDetail/TaskDetailInfo';
import TaskDetailHeader from '@/components/molecules/taskDetail/TaskDetailHeader';

type TaskDetailTemplProps = {
  task: Task;
};

// 할일 상세 페이지 탬플릿
const TaskDetailTempl = ({ task }: TaskDetailTemplProps) => {
  return (
    <div className="">
      <TaskDetailHeader />
      <TaskDetailInfo task={task} />
    </div>
  );
};

export default TaskDetailTempl;
