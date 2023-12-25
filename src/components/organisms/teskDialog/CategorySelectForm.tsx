import React from 'react';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import { categories } from './data';
import Button from '@/components/atoms/button/Button';
import { useCategorySelectForm } from './CategorySelectForm.hook';
import { CategorySelectFormProps } from './taskDialog.types';
import AddIcon from '@/images/icons/add.svg';

const CategorySelectForm = ({
  category,
  handleSetFormValue,
  handleSetTaskFormStep,
}: CategorySelectFormProps) => {
  const {
    t,
    handleSelectedCategory,
    selectedCategory,
    handleSaveCategory,
    handleCreateCategory,
  } = useCategorySelectForm(category, handleSetFormValue, handleSetTaskFormStep);

  return (
    <div className="flex flex-col">
      <div className="my-5 flex-auto">
        <div className="grid grid-cols-4 items-center justify-center gap-y-4 text-center">
          {categories.map((category) => (
            <button key={category.id} onClick={() => handleSelectedCategory(category)}>
              <div
                className={`mx-auto h-16 w-16 basis-1/4 rounded-md ${category.color} ${
                  category.id === selectedCategory?.id
                    ? `border-[3px] border-primary`
                    : ''
                }`}
              >
                <div className="flex h-full items-center justify-center p-1.5">
                  <div className="flex-none text-2xl">{category.icon}</div>
                </div>
              </div>
              <div className="mt-2 text-sm">{category.name}</div>
            </button>
          ))}
          {/* category add button*/}
          <button onClick={() => handleCreateCategory()}>
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
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            variant="text"
            className="w-full"
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveCategory}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectForm;
