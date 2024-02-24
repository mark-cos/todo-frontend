import { Category } from '@/types/task/task.type';
import Image from 'next/image';
import React from 'react';
import CancleIcon from '@/images/icons/cancle.svg';

type CategoryIconProps = {
  category: Category;
  handleClickCategory: (category: Category) => void;
  selectedCategoryId: string;
  isEditMode: boolean;
};
const CategoryIcon = ({
  category,
  handleClickCategory,
  selectedCategoryId,
  isEditMode,
}: CategoryIconProps) => {
  return (
    <button type="button" onClick={() => handleClickCategory(category)}>
      <div
        className={`relative mx-auto h-16 w-16 basis-1/4 rounded-md ${category.color} 
          ${category._id === selectedCategoryId ? 'border-[3px] border-primary' : ''}
          ${isEditMode ? ' border-[3px] border-dashed border-primary' : ''}
        `}
      >
        {isEditMode && <CancleIcon className="absolute right-[-7px] top-[-7px]" />}

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
