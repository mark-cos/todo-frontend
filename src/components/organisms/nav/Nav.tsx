import { NavIcon } from '@/components/atoms';
import React from 'react';
import homeIcon from '@/images/icons/home.svg?url';
import calendarIcon from '@/images/icons/calendar.svg?url';
import focusIcon from '@/images/icons/clock.svg?url';
import profileIcon from '@/images/icons/user.svg?url';
import { NavTaskAddButton } from '@/components/molecules';

// TODO: 정보배열로 빼서 map돌리기
const Nav = () => {
  return (
    <div className="flex justify-between bg-[#363636] px-8 pb-9 pt-5">
      <NavIcon
        src={homeIcon}
        alt="homeIcon"
        label="Index"
        className="text-red-500"
        href="/profile"
      />
      <NavIcon src={calendarIcon} alt="calendarIcon" label="calendar" href="/profile" />
      <div className="relative">
        <NavTaskAddButton />
      </div>
      <NavIcon src={focusIcon} alt="focusIcon" label="Focus" href="/profile" />
      <NavIcon src={profileIcon} alt="profileIcon" label="Profile" href="/main/profile" />
    </div>
  );
};

export default Nav;
