'use client';
import React from 'react';
import useAccountTitle from './AccountTitle.hook';

const AccountTitle = () => {
  const { isLoginPage, t } = useAccountTitle();
  return (
    <div className="mb-16 mt-11 flex-grow text-2xl font-bold">
      {isLoginPage ? t('title_login') : t('title_register')}
    </div>
  );
};

export default AccountTitle;
