import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { getCategories } from '@/services/category';
import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

export const useCategorySelectForm = (
  categoryId: string,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
  isEditMode: boolean,
) => {
  const { t } = useClientTranslation('taskDialog');
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    _id: categoryId,
    color: '',
    icon: '',
    name: '',
  });

  const { data, isLoading } = useQuery({
    queryFn: getCategories,
    queryKey: [rqKey.categories],
  });

  const categories = useMemo(() => data?.data, [data?.data]);
  const handleClickCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  /**
   * 카테고리 선택 유효성 체크 후 form에 value 설정
   * 수정: 다이얼로그에서 이미지를 함께 보여줘야 하므로 카테고리 객체 자체를 설정
   * 추가: 선택한 카테고리 아이디만 객체에 설정
   */
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
