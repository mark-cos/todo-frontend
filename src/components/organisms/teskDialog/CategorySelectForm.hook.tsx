import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React, { useState } from 'react';

export const useCategorySelectForm = (
  category: Category,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);

  const handleSelectedCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSaveCategory = () => {
    handleSetFormValue('category', selectedCategory);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  const handleCreateCategory = () => {
    handleSetTaskFormStep(TASK_FORM_STEP.CREATE_CATEGORY);
  };

  return {
    t,
    handleSelectedCategory,
    selectedCategory,
    handleSaveCategory,
    handleCreateCategory,
  };
};
