'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ROUTE from '@/libs/route';
import { Button } from '@/components/atoms';

const BottomLink = () => {
  const isLoginPage = usePathname().includes('/login');
  const router = useRouter();
  return isLoginPage ? (
    <div className="text-center text-xs">
      <span className="text-secondary">Don’t have an account?</span>{' '}
      <Button onClick={() => router.push(ROUTE.ACCOUNT.REGISTER.path)}>Register</Button>
    </div>
  ) : (
    <div className="text-center text-xs">
      <span className="text-secondary">Already have an account?</span>{' '}
      <Button onClick={() => router.push(ROUTE.ACCOUNT.LOGIN.path)}>Login</Button>
    </div>
  );
};

export default BottomLink;
