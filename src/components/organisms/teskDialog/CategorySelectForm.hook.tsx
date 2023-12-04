import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React, { useState } from 'react';

export const useCategorySelectForm = (
  category: Category,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);

  const handleSelectedCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSaveCategory = () => {
    handleSetFormValue('category', selectedCategory);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  return { handleSelectedCategory, selectedCategory, handleSaveCategory };
};
