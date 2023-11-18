'use client';

import { ProfileMenuItem } from '@/components/molecules';
import { Menu } from '@headlessui/react';

import React, { Fragment } from 'react';
import settingIcon from '@/images/icons/setting-2.svg?url';

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
];

const ProfileMenuList = () => {
  return (
    <Menu as="div" className="px-8">
      <Menu.Items
        static
        className="rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <ProfileMenuItem title="Settings" />
        <ProfileMenuItem iconSrc={settingIcon} text="App Setting" onClick={() => {}} />
      </Menu.Items>
    </Menu>
  );
};

export default ProfileMenuList;
