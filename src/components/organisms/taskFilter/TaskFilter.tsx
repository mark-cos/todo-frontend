import Select from '@/components/atoms/select/Select';
import React from 'react';
import useTaskFilter from './TaskFilter.hook';

const TaskFilter = () => {
  const {
    getIsCompletedOptions,
    getPeriodOptions,
    handleChangePeriod,
    handleSelectedIsCompleted,
    isCompleted,
    period,
  } = useTaskFilter();
  return (
    <>
      <div className="flex justify-between">
        <Select
          options={getPeriodOptions()}
          select={period}
          onChange={handleChangePeriod}
          className="w-28"
        />
        <Select
          options={getIsCompletedOptions()}
          select={isCompleted}
          onChange={handleSelectedIsCompleted}
          className="w-28"
        />
      </div>
    </>
  );
};

export default TaskFilter;
