import React, { ReactNode, Suspense } from 'react';
import TodayTaskPage from './TodayTaskPage';
import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';
import { Task } from '@/types/task/task.type';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const getTodayTask = async (): Promise<Task[]> => {
  const query = new URLSearchParams({ period: 'today', isCompleted: 'all', keyword: '' });
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/task/all?${query.toString()}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((data) => data.json());
};

const TasksPageTempl = async ({ children }: TasksPageTemplProps) => {
  const todayTaskCount = (await getTodayTask()).length;
  return (
    <div className="flex flex-col">
      {todayTaskCount === 0 ? (
        <div className="flex h-full items-center justify-center">
          <TodayTaskNone />
        </div>
      ) : (
        <TodayTaskPage />
      )}
    </div>
  );
};

export default TasksPageTempl;
