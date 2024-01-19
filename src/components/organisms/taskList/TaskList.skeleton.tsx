import React, { Fragment } from 'react';

const TaskListSkeleton = () => {
  const taskSkeletons: string[] = new Array(3).fill('1');

  return (
    <div className="mb-12">
      <div className="mt-4 flex h-full flex-col justify-center gap-y-4">
        {taskSkeletons.map((_, index) => (
          <Fragment key={`TaskSkeleton_${index}`}>
            <div className="flex h-[94px] animate-pulse items-center gap-x-4 rounded border border-dark bg-dark p-2">
              <div className="group flex-none cursor-pointer">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-600 group-hover:border-white/70"></div>
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <div className="h-6 flex-auto bg-black/25"></div>
                <div className="h-5 flex-auto bg-black/25 text-sm text-[#AFAFAF]"></div>
                <div className="flex h-6 flex-auto gap-x-3 bg-black/25"></div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskListSkeleton;
