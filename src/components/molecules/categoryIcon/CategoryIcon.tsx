import { Category } from '@/types/task/task.type';
import Image from 'next/image';
import React from 'react';
import CancleIcon from '@/images/icons/cancel.svg';
import useCategoryIcon from './CategoryIcon.hook';
import DeleteConfirmDialog from '@/components/organisms/taskDetail/DeleteConfirmDialog';

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
  const {
    isShowCloseModal,
    handleCloseModal,
    handleShowDeleteConfirmDialog,
    handleDeleteCategory,
  } = useCategoryIcon(selectedCategoryId);
  return (
    <>
      <button type="button" onClick={() => handleClickCategory(category)}>
        <div
          className={`relative mx-auto h-16 w-16 basis-1/4 rounded-md ${category.color} 
          ${category._id === selectedCategoryId && 'border-[3px] border-primary'}
          ${isEditMode && ' border-[3px] border-dashed border-primary'}
        `}
        >
          {/* deleteBtn */}
          {isEditMode && (
            <div
              onClick={handleShowDeleteConfirmDialog}
              className="absolute right-[-7px] top-[-7px]"
            >
              <CancleIcon className="cursor-pointer" />
            </div>
          )}

          <div className="flex h-full items-center justify-center p-1.5">
            <div className="flex-none">
              <Image src={category.icon} alt="icon" width={42} height={42} />
            </div>
          </div>
        </div>
        <div className="mt-2 truncate text-sm">{category.name}</div>
      </button>

      <DeleteConfirmDialog
        isShowModal={isShowCloseModal}
        close={handleCloseModal}
        dialogTitle={{
          label: 'Delete Task',
          className: 'text-center border-b-[1px] border-secondary pb-3 mb-6',
        }}
        handleDelete={handleDeleteCategory}
      >
        <div>
          <p className="text-center text-sm font-normal">
            Are You sure you want to delete this category?
            <div className="mt-2 text-lg">{category.name}</div>
          </p>
        </div>
      </DeleteConfirmDialog>
    </>
  );
};

export default CategoryIcon;
