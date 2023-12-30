import React from 'react';
import { TaskCategoryIconProps } from './taskCategoryIcon.types';
import Image from 'next/image';

const TaskCategoryIcon = ({ category }: TaskCategoryIconProps) => {
  return (
    <div
      className={`flex h-6 items-center gap-x-1 rounded px-2 py-1 text-sm ${category.color}`}
    >
      <div className="flex-none">
        <Image src={category.icon} width={20} height={20} alt="icon" />
      </div>
      <div className="flex-grow text-white">{category.name}</div>
    </div>
  );
};

export default TaskCategoryIcon;
