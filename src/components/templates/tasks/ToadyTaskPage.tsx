'use client';

import TaskList from '@/components/organisms/taskList/TaskList';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import React from 'react';

const ToadyTaskPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <TaskSearchInput />
      </div>
      <div className="mt-4">
        <TaskList />
      </div>
    </div>
  );
};

export default ToadyTaskPage;
