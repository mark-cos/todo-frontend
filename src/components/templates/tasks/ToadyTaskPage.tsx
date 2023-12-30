'use client';

import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';
import TaskList from '@/components/organisms/taskList/TaskList';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import React from 'react';
import useToadyTaskPage from './ToadyTaskPage.hook';

const ToadyTaskPage = () => {
  const { tasks } = useToadyTaskPage();

  return (
    <div className="flex flex-col">
      {tasks.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <TodayTaskNone />
        </div>
      ) : (
        <>
          <div className="flex-none">
            <TaskSearchInput />
          </div>
          <div className="mt-4">
            <TaskList />
          </div>
        </>
      )}
    </div>
  );
};

export default ToadyTaskPage;
