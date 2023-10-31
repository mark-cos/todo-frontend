import { NavIcon } from '@/components/atoms';
import { AddTaskDialog, Header } from '@/components/organisms';
import Nav from '@/components/organisms/nav/Nav';
import React, { ReactNode } from 'react';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  return <AddTaskDialog />;
};

export default TasksPageTempl;
