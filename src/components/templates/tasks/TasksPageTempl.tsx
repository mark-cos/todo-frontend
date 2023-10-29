import { NavIcon } from '@/components/atoms';
import { Header } from '@/components/organisms';
import Nav from '@/components/organisms/nav/Nav';
import React, { ReactNode } from 'react';

type TasksPageTemplProps = {
  children: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  return (
    <div className="container-100svh flex-col">
      <div className="flex-none">
        <Header />
      </div>
      <div className="p-base grow">{children}</div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default TasksPageTempl;
