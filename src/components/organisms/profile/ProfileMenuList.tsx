import { ProfileMenuItem } from '@/components/molecules';
import React, { Fragment } from 'react';
import settingIcon from '@/images/icons/setting-2.svg?url';
import userIcon from '@/images/icons/user.svg?url';
import keyIcon from '@/images/icons/key.svg?url';
import cameraIcon from '@/images/icons/camera.svg?url';

import menuIcon from '@/images/icons/menu.svg?url';
import infoCircleIcon from '@/images/icons/info-circle.svg?url';
import flashIcon from '@/images/icons/flash.svg?url';
import likeIcon from '@/images/icons/like.svg?url';
import logoutIcon from '@/images/icons/logout.svg?url';
import getLink from '@/libs/route/getLink';

// FIXME: 별도 파일로 빼야함. href ROUTE로 설정
const profileMenus = [
  {
    title: 'Settings',
    menus: [
      {
        id: 1,
        icon: settingIcon,
        text: 'App Setting',
        href: '',
      },
    ],
  },
  {
    title: 'Account',
    menus: [
      { id: 2, icon: userIcon, text: 'Change account name', href: '' },
      { id: 3, icon: keyIcon, text: 'Change account password', href: '' },
      { id: 4, icon: cameraIcon, text: 'Change account Image', href: '' },
    ],
  },
  {
    title: 'Uptodo',
    menus: [
      { id: 5, icon: menuIcon, text: 'About US', href: '' },
      { id: 6, icon: infoCircleIcon, text: 'FAQ', href: '' },
      { id: 7, icon: flashIcon, text: 'Help & Feedback', href: '' },
      { id: 8, icon: likeIcon, text: 'Support US', href: '' },
      { id: 9, icon: logoutIcon, text: 'Log out', href: '' },
    ],
  },
];

const ProfileMenuList = () => {
  return (
    <div className="flex flex-col px-5">
      {profileMenus.map((profileMenu) => (
        <div key={profileMenu.title} className="mb-1">
          <div className="mb-4 font-extralight text-[#AFAFAF]">{profileMenu.title}</div>
          {profileMenu.menus.map((menu) => (
            <ProfileMenuItem
              key={menu.id}
              iconSrc={menu.icon}
              text={menu.text}
              href={getLink(menu.href)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileMenuList;
