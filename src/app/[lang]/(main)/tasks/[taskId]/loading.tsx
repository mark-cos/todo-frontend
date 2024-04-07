import React from 'react';

const TaskDetailSkeleton = () => {
  const skeletons: string[] = new Array(5).fill('1');

  return (
    <div className="h-full animate-pulse">
      <div className="flex justify-between">
        <div className="flex-none">
          <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-dark bg-dark"></div>
        </div>
        <div className="flex-none ">
          <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-dark bg-dark"></div>
        </div>
      </div>
      {skeletons.map((_skeleton, index) => (
        <div key={`skeleton_${index}`} className="mt-8 flex h-10 w-full justify-between">
          <div className="w-36 flex-none rounded-[4px] border border-dark bg-dark"></div>
          <div className="flex w-10 flex-none rounded-[4px] border border-dark bg-dark"></div>
        </div>
      ))}
    </div>
  );
};

export default TaskDetailSkeleton;
