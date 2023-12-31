'use client';

import React, { useState } from 'react';
import useTaskList from './TaskList.hook';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import Select from '@/components/atoms/select/Select';

function TaskList() {
  const {
    getPeriodOptions,
    getIsCompletedOptions,
    tasks,
    selectedPeriod,
    handleChangePeriod,
    selectedFilter,
    handleChangeFilter,
  } = useTaskList();
  return (
    <div className="mb-12">
      <div className="flex justify-between">
        <Select
          options={getPeriodOptions()}
          select={selectedPeriod}
          onChange={handleChangePeriod}
          className="w-28"
        />
        <Select
          options={getIsCompletedOptions()}
          select={selectedFilter}
          onChange={handleChangeFilter}
          className="w-28"
        />
      </div>

      <div className="mt-4 flex h-full flex-col justify-center gap-y-4">
        {(tasks ?? []).map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
