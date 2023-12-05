import { Category } from '@/types/task/task.type';
import React from 'react';
import { TaskCategoryIconProps } from './taskCategoryIcon.types';

const TaskCategoryIcon = ({ category }: TaskCategoryIconProps) => {
  return (
    <div className={`flex items-center gap-x-1 rounded px-2 py-1 ${category.color}`}>
      <div className="flex-none">{category.icon}</div>
      <div className="flex-grow text-white">{category.name}</div>
    </div>
  );
};

export default TaskCategoryIcon;
