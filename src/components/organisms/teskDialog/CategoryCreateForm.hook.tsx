import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { rqKey } from '@/libs/react-query';
import { postCategory } from '@/services/category';
import { CategoryAdd, TASK_FORM_STEP, categoryAddSchema } from '@/types/task/task.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmojiClickData } from 'emoji-picker-react';
import React, { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useCategoryCreateForm = (
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const queryClient = useQueryClient();
  const [categoryPreview, setCategoryPreview] = useState<CategoryAdd>({
    color: '',
    icon: '',
    name: '',
  });

  const handleSetColor = (color: string) => {
    setValue('color', color);
    setCategoryPreview((prev) => ({ ...prev, color }));
  };

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: '',
      color: '',
      icon: '',
    },
    resolver: yupResolver(categoryAddSchema),
  });

  const watchName = watch(['name'])[0];

  useEffect(() => {
    setCategoryPreview((prev) => ({ ...prev, name: watchName }));
  }, [watchName]);

  const handleSubmitError = (e: FieldErrors<CategoryAdd>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(t(value.message!));
      return false;
    }
  };

  const mutation = useMutation({
    mutationFn: postCategory,
    onSuccess: ({ data }) => {
      toast.success(t('category_create.add_category', { categoryName: data.name }));
      handleSetTaskFormStep(TASK_FORM_STEP.CATEGORY);
      queryClient.invalidateQueries({ queryKey: [rqKey.categories] });
    },
  });

  const handleSubmitSuccess = (newCategory: CategoryAdd) => {
    mutation.mutate(newCategory);
  };

  const handleClickEmoji = (emoji: EmojiClickData) => {
    setCategoryPreview((prev) => ({ ...prev, icon: emoji.imageUrl }));
    setValue('icon', emoji.imageUrl);
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
  };
};

export default useCategoryCreateForm;
