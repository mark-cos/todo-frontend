'use client';

import React from 'react';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import { TaskListProps } from './taskList.types';

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="mb-12">
      <div className="mt-4 flex h-full flex-col justify-center gap-y-4">
        {(tasks ?? []).map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
