import React from 'react';
import homeIcon from '@/images/icons/home.svg?url';
import calendarIcon from '@/images/icons/calendar.svg?url';
import focusIcon from '@/images/icons/clock.svg?url';
import profileIcon from '@/images/icons/user.svg?url';
import ROUTE from '@/libs/route';
import NavIcon from '@/components/atoms/navIcon/NavIcon';
import NavTaskAddButton from '@/components/molecules/layout/navTaskAddButton/NavTaskAddButton';

const Nav = () => {
  return (
    <div className="flex justify-between bg-dark px-8 pb-8 pt-4">
      <NavIcon
        src={homeIcon}
        alt="homeIcon"
        label="Index"
        className="text-red-500"
        href={ROUTE.TASKS.path}
      />
      <NavIcon
        src={calendarIcon}
        alt="calendarIcon"
        label="calendar"
        href={ROUTE.CALENDAR.path}
      />
      <div className="relative">
        <NavTaskAddButton />
      </div>
      <NavIcon src={focusIcon} alt="focusIcon" label="Focus" href={ROUTE.TASKS.path} />
      <NavIcon
        src={profileIcon}
        alt="profileIcon"
        label="Profile"
        href={ROUTE.PROFILE.path}
      />
    </div>
  );
};

export default Nav;
