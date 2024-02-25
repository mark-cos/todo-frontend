import { deleteCategory } from '@/services/category';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

const useCategoryIcon = (selectedCategoryId: string) => {
  // 닫기 모달
  const [isShowCloseModal, setIsShowCloseModal] = useState(false);
  const handleCloseModal = () => {
    setIsShowCloseModal(false);
  };
  const handleShowDeleteConfirmDialog = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsShowCloseModal(true);
  };
  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      handleCloseModal();
    },
  });
  const handleDeleteCategory = () => {
    mutation.mutate(selectedCategoryId);
  };

  return {
    isShowCloseModal,
    setIsShowCloseModal,
    handleCloseModal,
    handleShowDeleteConfirmDialog,
    handleDeleteCategory,
  };
};

export default useCategoryIcon;
