'use client';
import React, { Suspense } from 'react';
import TodayTaskPage from './TodayTaskPage';
import TaskListSkeleton from '@/components/organisms/taskList/TaskList.skeleton';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import TaskFilter from '@/components/organisms/taskFilter/TaskFilter';

const TasksPageTempl = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <TaskSearchInput />
      </div>
      <div className="mt-4">
        <div className="mt-4">
          <TaskFilter />
        </div>
        <Suspense fallback={<TaskListSkeleton />}>
          <TodayTaskPage />
        </Suspense>
      </div>
    </div>
  );
};

export default TasksPageTempl;
