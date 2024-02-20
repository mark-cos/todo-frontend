import { useRouter } from 'next/navigation';
import React from 'react';

const useProfileSettingTempl = () => {
  const router = useRouter();

  const handleBackPage = () => {
    router.back();
  };

  return { handleBackPage };
};

export default useProfileSettingTempl;
