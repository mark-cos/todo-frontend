import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { getCategories } from '@/services/category';
import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const useCategorySelectForm = (
  category: Category,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);

  const { data } = useQuery({
    queryFn: getCategories,
    queryKey: [rqKey.categories],
  });

  const categories = data?.data;

  const handleSelectedCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSaveCategory = () => {
    if (!selectedCategory._id) {
      toast.error(t('category_select.required'));
      return;
    }
    handleSetFormValue('category', selectedCategory);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  const handleCreateCategory = () => {
    handleSetTaskFormStep(TASK_FORM_STEP.CREATE_CATEGORY);
  };

  return {
    t,
    categories,
    handleSelectedCategory,
    selectedCategory,
    handleSaveCategory,
    handleCreateCategory,
  };
};
