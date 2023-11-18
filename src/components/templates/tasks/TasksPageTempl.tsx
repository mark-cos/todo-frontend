import { TaskDialog } from '@/components/organisms';
import React, { ReactNode } from 'react';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  return <TaskDialog />;
};

export default TasksPageTempl;
