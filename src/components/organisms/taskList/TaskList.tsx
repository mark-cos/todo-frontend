'use client';

import React, { useState } from 'react';
import useTaskList from './TaskList.hook';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import Select from '@/components/atoms/select/Select';
import { TaskListProps } from './taskList.types';

function TaskList({ tasks }: TaskListProps) {
  const {
    getPeriodOptions,
    getIsCompletedOptions,
    selectedPeriod,
    handleChangePeriod,
    selectedIsCompleted,
    handleSelectedCompleted,
  } = useTaskList();
  return (
    <div className="mb-12">
      <div className="mt-4 flex h-full flex-col justify-center gap-y-4">
        {(tasks ?? []).map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
