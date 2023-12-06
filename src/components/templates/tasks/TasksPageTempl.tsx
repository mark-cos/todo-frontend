import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';
import React, { ReactNode } from 'react';
import ToadyTaskPage from './ToadyTaskPage';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  //FIXME: TESTCODE
  const tasks = [''];
  return (
    <>
      {tasks.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <TodayTaskNone />
        </div>
      ) : (
        <ToadyTaskPage />
      )}
    </>
  );
};

export default TasksPageTempl;
