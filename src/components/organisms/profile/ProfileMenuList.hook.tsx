import settingIcon from '@/images/icons/setting-2.svg?url';
import userIcon from '@/images/icons/user.svg?url';
import menuIcon from '@/images/icons/menu.svg?url';
import infoCircleIcon from '@/images/icons/info-circle.svg?url';
import flashIcon from '@/images/icons/flash.svg?url';
import likeIcon from '@/images/icons/like.svg?url';
import logoutIcon from '@/images/icons/logout.svg?url';
import { signOut } from 'next-auth/react';

const useProfileMenuList = () => {
  const profileMenus = [
    {
      title: 'Settings',
      menus: [
        {
          id: 11,
          icon: settingIcon,
          text: 'App Setting',
          href: '',
        },
      ],
    },
    {
      title: 'Account',
      menus: [{ id: 21, icon: userIcon, text: 'Change account', href: '' }],
    },
    {
      title: 'Uptodo',
      menus: [
        { id: 31, icon: menuIcon, text: 'About US', href: '' },
        { id: 32, icon: infoCircleIcon, text: 'FAQ', href: '' },
        { id: 33, icon: flashIcon, text: 'Help & Feedback', href: '' },
        { id: 34, icon: likeIcon, text: 'Support US', href: '' },
        {
          id: 35,
          icon: logoutIcon,
          text: 'Log out',
          onClick: () => signOut({ callbackUrl: '/' }),
        },
      ],
    },
  ];
  return { profileMenus };
};

export default useProfileMenuList;
