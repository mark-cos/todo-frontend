import React from 'react';
import { TaskItemProps } from './taskItem.types';
import ellipseIcon from '@/images/icons/Ellipse.svg?url';
import FlagIcon from '@/images/icons/flag.svg';
import Image from 'next/image';
import TaskCategoryIcon from '../taskCategoryIcon/TaskCategoryIcon';

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="flex items-center gap-x-4 rounded border border-dark bg-dark p-2">
      <div className="flex-none">
        <Image src={ellipseIcon} alt="ellipse" />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex-none">{task.title}</div>
        <div className="flex-none text-sm text-[#AFAFAF]">Today At {task.taskTime}</div>
        <div className="flex flex-none gap-x-3">
          <TaskCategoryIcon category={task.category} />
          {/* 중요도 */}
          <div className="flex items-center gap-x-2 rounded border border-primary px-2 py-1">
            <FlagIcon className="font-light" />
            <div> {task.priority}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
