'use client';
import TaskList from '@/components/organisms/taskList/TaskList';
import React from 'react';
import useTodayTaskPage from './TodayTaskPage.hook';
import TaskListSkletion from '@/components/organisms/taskList/TaskList.skletion';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import TaskFilter from '@/components/organisms/taskFilter/TaskFilter';

const TodayTaskPage = () => {
  const { tasks, isLoading } = useTodayTaskPage();
  return (
    <>
      <div className="flex-none">
        <TaskSearchInput />
      </div>
      <div className="mt-4">
        <TaskFilter />
        {isLoading ? <TaskListSkletion /> : <TaskList tasks={tasks} />}
      </div>
    </>
  );
};
export default TodayTaskPage;
