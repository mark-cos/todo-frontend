import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { getCategories } from '@/services/category';
import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const useCategorySelectForm = (
  categoryId: string,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categoryId);

  const { data } = useQuery({
    queryFn: getCategories,
    queryKey: [rqKey.categories],
  });

  const categories = data?.data;

  const handleSelectedCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  const handleSaveCategory = () => {
    if (!selectedCategoryId) {
      toast.error(t('category_select.required'));
      return;
    }
    handleSetFormValue('category', { _id: selectedCategoryId });
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  const handleCreateCategory = () => {
    handleSetTaskFormStep(TASK_FORM_STEP.CREATE_CATEGORY);
  };

  return {
    t,
    categories,
    handleSelectedCategory,
    selectedCategoryId,
    handleSaveCategory,
    handleCreateCategory,
  };
};
