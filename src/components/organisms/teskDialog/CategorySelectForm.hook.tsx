import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { useSelector } from '@/libs/redux';
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
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    _id: categoryId,
    color: '',
    icon: '',
    name: '',
  });
  const { isEditMode } = useSelector((state) => state.task);

  const { data, isLoading } = useQuery({
    queryFn: getCategories,
    queryKey: [rqKey.categories],
  });

  const categories = data?.data;
  const handleClickCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSaveCategory = () => {
    if (!selectedCategory._id) {
      toast.error(t('category_select.required'));
      return;
    }
    handleSetFormValue(
      'category',
      isEditMode ? { ...selectedCategory } : { _id: selectedCategory._id },
    );
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  const handleCreateCategory = () => {
    handleSetTaskFormStep(TASK_FORM_STEP.CREATE_CATEGORY);
  };

  return {
    t,
    isLoading,
    categories,
    handleClickCategory,
    selectedCategory,
    handleSaveCategory,
    handleCreateCategory,
  };
};
