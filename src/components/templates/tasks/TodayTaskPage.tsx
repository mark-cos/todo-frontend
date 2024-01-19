'use client';
import TaskList from '@/components/organisms/taskList/TaskList';
import React from 'react';
import useTodayTaskPage from './TodayTaskPage.hook';
import TaskListSkeleton from '@/components/organisms/taskList/TaskList.skeleton';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import TaskFilter from '@/components/organisms/taskFilter/TaskFilter';
import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';

const TodayTaskPage = () => {
  const { tasks, isLoading, isTodayNone } = useTodayTaskPage();

  return (
    <>
      <div className="flex-none">
        <TaskSearchInput />
      </div>
      <div className="mt-4">
        <TaskFilter />
        {isLoading || !tasks ? (
          <TaskListSkeleton />
        ) : isTodayNone && tasks.length === 0 ? (
          <TodayTaskNone />
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </>
  );
};
export default TodayTaskPage;
