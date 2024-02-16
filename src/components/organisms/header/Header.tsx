import Image from 'next/image';
import React from 'react';
import SortIcon from '@/images/icons/sort.svg';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { headers } from 'next/headers';
import HeaderTitle from './HeaderTitle';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-base flex items-center justify-between">
      <div className="flex-none">
        <SortIcon />
      </div>
      <HeaderTitle />
      <div className="flex-none">
        <Image
          className="h-[42px] rounded-full border border-transparent p-1"
          src={session?.user?.image || '/images/icons/user.svg'}
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
