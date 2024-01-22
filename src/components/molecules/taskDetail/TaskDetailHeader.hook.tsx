import { useRouter } from 'next/navigation';
import React from 'react';

const useTaskDetailHeader = () => {
  const router = useRouter();
  const handleGoBackPage = () => {
    router.back();
  };

  const handleTaskInfoReflash = () => {
    router.refresh();
  };
  return { handleGoBackPage, handleTaskInfoReflash };
};

export default useTaskDetailHeader;
