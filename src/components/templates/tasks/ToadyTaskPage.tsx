import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import searchIcon from '@/images/icons/search-normal.svg?url';
import React from 'react';

const ToadyTaskPage = () => {
  // FIXME:TESTCODE
  const task = {
    title: 'Do Math Homework',
    id: 1,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 1,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  };
  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <IconInputText
          iconSrc={searchIcon}
          alt="searchIcon"
          placeholder="Search for your task..."
        />
      </div>
      <div>
        <TaskItem task={task} />
      </div>
    </div>
  );
};

export default ToadyTaskPage;
