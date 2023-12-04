'use client';
import React from 'react';
import ROUTE from '@/libs/route';
import Button from '@/components/atoms/button/Button';
import useBottomLink from './BottomLink.hook';

const BottomLink = () => {
  const { t, isLoginPage, router } = useBottomLink();
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
