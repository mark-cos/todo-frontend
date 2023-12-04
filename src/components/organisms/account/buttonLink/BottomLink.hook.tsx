import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const useBottomLink = () => {
  const isLoginPage = usePathname().includes('/login');
  const router = useRouter();
  const { t } = useClientTranslation('account');
  return { t, isLoginPage, router };
};

export default useBottomLink;
