import TaskList from '@/components/organisms/taskList/TaskList';
import React from 'react';
import useTodayTaskPage from './TodayTaskPage.hook';
import TaskSearchInput from '@/components/organisms/taskSearchInput/TaskSearchInput';
import TaskFilter from '@/components/organisms/taskFilter/TaskFilter';
import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';

const TodayTaskPage = () => {
  const { tasks, isTodayNone } = useTodayTaskPage();

  return (
    <>
      <div className="flex-none">
        <TaskSearchInput />
      </div>
      <div className="mt-4">
        <TaskFilter />
        {tasks ? <TaskList tasks={tasks} /> : <TodayTaskNone />}
      </div>
    </>
  );
};
export default TodayTaskPage;
