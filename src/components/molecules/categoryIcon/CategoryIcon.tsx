import { Category } from '@/types/task/task.type';
import Image from 'next/image';
import React from 'react';

type CategoryIconProps = {
  category: Category;
  handleSelectedCategory: (categoryId: string) => void;
  selectedCategoryId: string;
};
const CategoryIcon = ({
  category,
  handleSelectedCategory,
  selectedCategoryId,
}: CategoryIconProps) => {
  return (
    <button type="button" onClick={() => handleSelectedCategory(category._id)}>
      <div
        className={`mx-auto h-16 w-16 basis-1/4 rounded-md ${category.color} ${
          category._id === selectedCategoryId ? `border-[3px] border-primary` : ''
        }`}
      >
        <div className="flex h-full items-center justify-center p-1.5">
          <div className="flex-none">
            <Image src={category.icon} alt="icon" width={42} height={42} />
          </div>
        </div>
      </div>
      <div className="mt-2 truncate text-sm">{category.name}</div>
    </button>
  );
};

export default CategoryIcon;
