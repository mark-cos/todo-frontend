import React from 'react';

const CategoryIconSkeleton = () => {
  const iconArray: number[] = new Array(4).fill(0);
  return (
    <>
      {iconArray.map((_, index) => (
        <div
          key={index}
          className="mx-auto h-16 w-16 basis-1/4 animate-pulse rounded-md border-[3px] border-solid border-dark bg-black/30"
        >
          <div className="flex h-full items-center justify-center p-1.5">
            <div className="h-[42px] w-[42px] flex-none"></div>
          </div>
          <div className="mt-2 truncate text-sm"></div>
        </div>
      ))}
    </>
  );
};

export default CategoryIconSkeleton;
