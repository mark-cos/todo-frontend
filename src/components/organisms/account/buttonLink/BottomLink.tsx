'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomLink = () => {
  const isLoginPage = usePathname().includes('/login');
  return isLoginPage ? (
    <div className="text-center text-xs">
      <span className="text-secondary">Don’t have an account?</span>{' '}
      <Link href={'/account/register'}>Register</Link>
    </div>
  ) : (
    <div className="text-center text-xs">
      <span className="text-secondary">Already have an account?</span>{' '}
      <Link href={'/account/login'}>Login</Link>
    </div>
  );
};

export default BottomLink;
