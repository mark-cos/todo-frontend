import React from 'react';
import Button from '@/components/atoms/button/Button';
import { useCategorySelectForm } from './CategorySelectForm.hook';
import { CategorySelectFormProps } from './taskDialog.types';
import AddIcon from '@/images/icons/add.svg';
import CategoryIcon from '@/components/molecules/categoryIcon/CategoryIcon';
import CategoryIconSkeleton from '@/components/molecules/categoryIcon/CategoryIcon.skeleton';

const CategorySelectForm = ({
  categoryId,
  handleSetFormValue,
  handleSetTaskFormStep,
  isEditMode,
}: CategorySelectFormProps) => {
  const {
    t,
    isLoading,
    categories,
    handleClickCategory,
    selectedCategory,
    handleSaveCategory,
    handleCreateCategory,
    isCategoryEditMode,
    handleToggleCategoryEditMode,
    handleCancel,
  } = useCategorySelectForm(
    categoryId,
    handleSetFormValue,
    handleSetTaskFormStep,
    isEditMode,
  );

  return (
    <div className="flex flex-col">
      <div className="flex-auto">
        {!isLoading && (
          <div className="mt-2 text-right">
            <Button
              variant="contained"
              className="h-auto px-1 py-0 font-normal"
              onClick={handleToggleCategoryEditMode}
            >
              {isCategoryEditMode ? 'Cancel' : 'Edit'}
            </Button>
          </div>
        )}
        <div className="my-5 grid grid-cols-4 items-center justify-center gap-y-4 text-center">
          {isLoading ? (
            <CategoryIconSkeleton />
          ) : (
            <>
              {(categories || []).map((category) => (
                <CategoryIcon
                  key={category._id}
                  handleClickCategory={handleClickCategory}
                  category={category}
                  selectedCategoryId={selectedCategory._id}
                  isEditMode={isCategoryEditMode}
                />
              ))}

              {/* category add button*/}
              {isCategoryEditMode && (
                <button onClick={handleCreateCategory} type="button">
                  <div
                    className={`mx-auto h-16 w-16 basis-1/4 rounded-md border-[3px] border-white/25`}
                  >
                    <div className="flex h-full items-center justify-center p-1.5">
                      <div className="flex-none text-2xl">
                        <AddIcon />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">{t('button.create_new')}</div>
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button variant="text" className="w-full" onClick={handleCancel}>
            {t('button.cancel')}
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveCategory}
            disabled={isCategoryEditMode}
          >
            {t('button.save')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectForm;
