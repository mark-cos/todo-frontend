import React, { ReactNode, Suspense } from 'react';
import TodayTaskPage from './TodayTaskPage';
import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';
import { Task } from '@/types/task/task.type';
import { headers } from 'next/headers';

type TasksPageTemplProps = {
  children?: ReactNode;
};
const TasksPageTempl = async ({ children }: TasksPageTemplProps) => {
  return (
    <div className="flex flex-col">
      <TodayTaskPage />
    </div>
  );
};

export default TasksPageTempl;
