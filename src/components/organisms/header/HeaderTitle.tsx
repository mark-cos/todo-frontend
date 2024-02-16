'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderTitle = () => {
  const pathname = usePathname();
  const mainPathName = (pathname.match(/([^\/]+)/g) || [])[1] ?? '';
  return (
    <div className="flex-none text-xl font-normal tracking-tighter">
      {mainPathName.toUpperCase()}
    </div>
  );
};

export default HeaderTitle;
