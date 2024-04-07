import TaskList from '@/components/organisms/taskList/TaskList';
import React from 'react';
import useTodayTaskPage from './TodayTaskPage.hook';
import TodayTaskNone from '@/components/molecules/todayTaskNone/TodayTaskNone';

const TodayTaskPage = () => {
  const { tasks, isTodayNone } = useTodayTaskPage();
  console.log('🚀 _ TodayTaskPage _ tasks:', tasks);
  return <>{tasks.length !== 0 ? <TaskList tasks={tasks} /> : <TodayTaskNone />}</>;
};
export default TodayTaskPage;
