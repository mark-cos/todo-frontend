import React from 'react';
import { BottomLinkProps } from './data/bottomLink.types';
import Link from 'next/link';

const BottomLink = ({ isLoginPage }: BottomLinkProps) => {
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
