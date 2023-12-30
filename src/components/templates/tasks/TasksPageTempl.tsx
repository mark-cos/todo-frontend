import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';
import React, { ReactNode } from 'react';
import ToadyTaskPage from './ToadyTaskPage';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  return <ToadyTaskPage />;
};

export default TasksPageTempl;
