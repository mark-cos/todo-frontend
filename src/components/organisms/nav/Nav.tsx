import { NavIcon } from '@/components/atoms';
import React from 'react';
import homeIcon from '@/images/icons/home.svg?url';
import calendarIcon from '@/images/icons/calendar.svg?url';
import focusIcon from '@/images/icons/clock.svg?url';
import profileIcon from '@/images/icons/user.svg?url';
import { NavTaskAddButton } from '@/components/molecules';

const Nav = () => {
  return (
    <div className="flex justify-between bg-[#363636] px-8 pb-9 pt-5">
      <NavIcon src={homeIcon} alt="homeIcon" label="Index" className="text-red-500" />
      <NavIcon src={calendarIcon} alt="calendarIcon" label="calendar" />
      <div className="relative">
        <NavTaskAddButton />
      </div>
      <NavIcon src={focusIcon} alt="focusIcon" label="Focuse" />
      <NavIcon src={profileIcon} alt="profileIcon" label="Profile" />
    </div>
  );
};

export default Nav;
