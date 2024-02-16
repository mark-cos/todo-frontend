import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import ArrowLeftIcon from '@/images/icons/arrow-left.svg';
import { getClientLngAddPath } from '@/utils/common';

export type ProfileClientMenuItemProps = {
  iconSrc: string;
  text: string;
  onClick?: () => void;
  href?: string;
};

const ProfileClientMenuItem = ({
  iconSrc,
  text,
  href,
  onClick,
}: ProfileClientMenuItemProps) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
    if (href) router.push(getClientLngAddPath(href));
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
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
          <ArrowLeftIcon alt={'arrow-left.svg'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileClientMenuItem;
