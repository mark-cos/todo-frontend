import { NavIcon } from '@/components/atoms';
import React from 'react';
import homeIcon from '@/images/icons/home.svg?url';
import calendarIcon from '@/images/icons/calendar.svg?url';
import focusIcon from '@/images/icons/clock.svg?url';
import profileIcon from '@/images/icons/user.svg?url';
import addIcon from '@/images/icons/add.svg?url';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="flex justify-between bg-[#363636] px-8 pb-9 pt-5">
      <NavIcon src={homeIcon} alt="homeIcon" label="Index" className="text-red-500" />
      <NavIcon src={calendarIcon} alt="calendarIcon" label="calendar" />
      <div className="relative">
        <button className="absolute left-[-32px] top-[-52px] flex h-[64px] w-[64px] rounded-full bg-primary">
          <Image src={addIcon} alt="addIcon" className="m-auto" />
        </button>
      </div>
      <NavIcon src={focusIcon} alt="focusIcon" label="Focuse" />
      <NavIcon src={profileIcon} alt="profileIcon" label="Profile" />
    </div>
  );
};

export default Nav;
