import React from 'react';
import { BottomLinkProps } from './data/bottomLink.types';
import Link from 'next/link';

const BottomLink = ({ currentPage }: BottomLinkProps) => {
  return currentPage === '/login' ? (
    <div className="text-center">
      <span>Don’t have an account?</span> <Link href={'/register'}>Register</Link>
    </div>
  ) : (
    <div className="text-center">
      <span>Already have an account?</span> <Link href={'/login'}>Login</Link>
    </div>
  );
};

export default BottomLink;
