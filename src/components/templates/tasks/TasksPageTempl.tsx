'use client';
import React, { Suspense } from 'react';
import TodayTaskPage from './TodayTaskPage';
import TaskListSkeleton from '@/components/organisms/taskList/TaskList.skeleton';

const TasksPageTempl = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<TaskListSkeleton />}>
        <TodayTaskPage />
      </Suspense>
    </div>
  );
};

export default TasksPageTempl;
