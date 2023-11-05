import Image from 'next/image';
import React from 'react';
import SortIcon from '@/images/icons/sort.svg';

const Header = () => {
  const title = 'Index';
  return (
    <div className="p-base flex items-center justify-between">
      <div className="flex-none">
        <SortIcon />
      </div>
      <div className="flex-none text-xl font-normal tracking-tighter">{title}</div>
      <div className="flex-none">
        <Image
          className="h-[42px] rounded-full"
          src={'/images/profile-img.jpg'}
          alt="profile-image"
          width={42}
          height={42}
          priority={false}
        />
      </div>
    </div>
  );
};

export default Header;
