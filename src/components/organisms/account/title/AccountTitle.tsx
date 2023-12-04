'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const AccountTitle = () => {
  const isLoginPage = usePathname().includes('/login');
  return (
    <div className="mb-16 mt-11 flex-grow text-2xl font-bold">
      {isLoginPage ? 'Login' : 'Register'}
    </div>
  );
};

export default AccountTitle;
