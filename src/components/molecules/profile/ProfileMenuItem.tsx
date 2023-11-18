'use client';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import arrowLeftIcon from '@/images/icons/arrow-left.svg?url';

export type ProfileMenuItemProps = {
  iconSrc?: string;
  text?: string;
  onClick?: () => void;
  title?: string;
};

const ProfileMenuItem = ({
  iconSrc = '',
  text = '',
  onClick,
  title,
}: ProfileMenuItemProps) => {
  return (
    <Menu.Item disabled={!!title}>
      <button className="flex w-full justify-between">
        {title ? (
          <div className="mb-4 font-extralight text-[#AFAFAF]">{title}</div>
        ) : (
          <>
            <div className="flex items-center">
              <div className="flex-none">
                <Image src={iconSrc} alt={text} />
              </div>
              <div className="ml-4 flex-none font-extralight">{text}</div>
            </div>
            <div className="flex-none">
              <Image src={arrowLeftIcon} alt={'arrow-left.svg'} />
            </div>
          </>
        )}
      </button>
    </Menu.Item>
  );
};

export default ProfileMenuItem;
