import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { CategoryAdd, TASK_FORM_STEP, categoryAddSchema } from '@/types/task/task.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmojiClickData } from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useCategoryCreateForm = (
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [categoryPreview, setCategoryPreview] = useState<CategoryAdd>({
    color: '',
    icon: '',
    name: '',
  });

  const handleSetColor = (color: string) => {
    setValue('color', color);
    setCategoryPreview((prev) => ({ ...prev, color }));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
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

  const handleSaveCategory = () => {
    handleSetTaskFormStep(TASK_FORM_STEP.CATEGORY);
  };

  const handleSubmitError = (e: FieldErrors<CategoryAdd>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(t(value.message!));
      return false;
    }
  };

  const handleSubmitSuccess = (newCategory: CategoryAdd) => {
    console.log(newCategory);
  };

  const handleClickEmoji = (emoji: EmojiClickData, event: MouseEvent) => {
    setCategoryPreview((prev) => ({ ...prev, icon: emoji.imageUrl }));
    setValue('icon', emoji.imageUrl);
  };
  return {
    t,
    nameInputRef,
    handleSaveCategory,
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
