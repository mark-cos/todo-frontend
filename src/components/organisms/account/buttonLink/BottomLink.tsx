'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ROUTE from '@/libs/route';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import Button from '@/components/atoms/button/Button';

const BottomLink = () => {
  const isLoginPage = usePathname().includes('/login');
  const router = useRouter();
  const { t } = useClientTranslation('account');
  return isLoginPage ? (
    <div className="text-center text-xs">
      <span className="text-secondary">{t('dont_account')}</span>{' '}
      <Button onClick={() => router.push(ROUTE.ACCOUNT.REGISTER.path)}>
        {t('button.register')}
      </Button>
    </div>
  ) : (
    <div className="text-center text-xs">
      <span className="text-secondary">{t('already_account')}</span>{' '}
      <Button onClick={() => router.push(ROUTE.ACCOUNT.LOGIN.path)}>
        {t('button.login')}
      </Button>
    </div>
  );
};

export default BottomLink;
