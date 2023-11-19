import Image from 'next/image';
import React from 'react';
import arrowLeftIcon from '@/images/icons/arrow-left.svg?url';
import Link from 'next/link';

export type ProfileMenuItemProps = {
  iconSrc: string;
  text: string;
  href: string;
};

const ProfileMenuItem = ({ iconSrc, text, href }: ProfileMenuItemProps) => {
  return (
    <Link href={href}>
      {/* FIXME: Log out 다국어 고려 필요 */}
      <div
        className={`mb-6 flex w-full justify-between ${
          text === 'Log out' ? 'text-red-500' : ''
        }`}
      >
        <div className="flex items-center">
          <div className="flex-none">
            <Image src={iconSrc} alt={text} />
          </div>
          <div className="ml-4 flex-none font-extralight">{text}</div>
        </div>
        <div className="flex-none">
          <Image src={arrowLeftIcon} alt={'arrow-left.svg'} />
        </div>
      </div>
    </Link>
  );
};

export default ProfileMenuItem;
