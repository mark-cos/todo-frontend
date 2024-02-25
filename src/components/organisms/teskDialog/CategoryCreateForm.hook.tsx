import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { taskStore } from '@/libs/zustand';
import { postCategory, putCategory } from '@/services/category';
import {
  Category,
  CategoryAdd,
  TASK_FORM_STEP,
  categoryAddSchema,
} from '@/types/task/task.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmojiClickData } from 'emoji-picker-react';
import React, { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useCategoryCreateForm = (
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const defaultCategory = { color: '', icon: '', name: '' };
  const { t } = useClientTranslation('taskDialog');
  const queryClient = useQueryClient();
  const { selectedCategory, isCategoryEditMode } = taskStore((state) => state);
  const [categoryPreview, setCategoryPreview] = useState<CategoryAdd>(defaultCategory);

  const { register, handleSubmit, setValue, watch, reset } = useForm({
    resolver: yupResolver(categoryAddSchema),
  });

  // store에서 선택된 카테고리에 따라 폼, 미리보기를 설정.
  useEffect(() => {
    const category = isCategoryEditMode ? selectedCategory : defaultCategory;
    reset(category);
    setCategoryPreview(category);
  }, [selectedCategory]);

  // 색 선택 시 form와 미리보기 state의 color를 같이 설정한다.
  const handleSetColor = (color: string) => {
    setValue('color', color);
    setCategoryPreview((prev) => ({ ...prev, color }));
  };

  // 카테고리 이름변경 시 미리보기 이름 변경
  const categoryName = watch(['name'])[0];
  useEffect(() => {
    setCategoryPreview((prev) => ({ ...prev, name: categoryName }));
  }, [categoryName]);

  // 이모지 선택 시 form, 미리보기 설정
  const handleClickEmoji = (emoji: EmojiClickData) => {
    setCategoryPreview((prev) => ({ ...prev, icon: emoji.imageUrl }));
    setValue('icon', emoji.imageUrl);
  };

  const handleSubmitError = (e: FieldErrors<CategoryAdd>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(t(value.message!));
      return false;
    }
  };

  const insertMutation = useMutation({
    mutationFn: postCategory,
    onSuccess: ({ data }) => {
      toast.success(t('category_create.add_category', { categoryName: data.name }));
      handleSetTaskFormStep(TASK_FORM_STEP.CATEGORY);
      queryClient.invalidateQueries({ queryKey: [rqKey.categories] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: putCategory,
    onSuccess: ({ data }) => {
      // FIXME:
      toast.success(t('category_create.add_category', { categoryName: data.name }));
      handleSetTaskFormStep(TASK_FORM_STEP.CATEGORY);
      queryClient.invalidateQueries({ queryKey: [rqKey.categories] });
    },
  });

  const handleSubmitSuccess = (category: CategoryAdd | Category) => {
    if (!isCategoryEditMode) insertMutation.mutate(category);
    else
      updateMutation.mutate({
        categoryId: (category as Category)._id,
        category: {
          color: category.color,
          icon: category.icon,
          name: category.name,
        },
      });
  };

  return {
    t,
    handleClickEmoji,
    categoryPreview,
    handleSetColor,
    register,
    handleSubmit,
    handleSubmitSuccess,
    handleSubmitError,
    isCategoryEditMode,
  };
};

export default useCategoryCreateForm;
