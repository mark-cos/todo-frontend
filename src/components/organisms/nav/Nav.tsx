import { NavIcon } from '@/components/atoms';
import React from 'react';
import homeIcon from '@/images/icons/home.svg?url';
import calendarIcon from '@/images/icons/calendar.svg?url';
import focusIcon from '@/images/icons/clock.svg?url';
import profileIcon from '@/images/icons/user.svg?url';
import { NavTaskAddButton } from '@/components/molecules';
import getLink from '@/libs/route/getLink';
import ROUTE from '@/libs/route';

const Nav = () => {
  return (
    <div className="flex justify-between bg-dark px-8 pb-9 pt-5">
      <NavIcon
        src={homeIcon}
        alt="homeIcon"
        label="Index"
        className="text-red-500"
        href={getLink(ROUTE.MAIN.path)}
      />
      <NavIcon
        src={calendarIcon}
        alt="calendarIcon"
        label="calendar"
        href={getLink(ROUTE.MAIN.path)}
      />
      <div className="relative">
        <NavTaskAddButton />
      </div>
      <NavIcon
        src={focusIcon}
        alt="focusIcon"
        label="Focus"
        href={getLink(ROUTE.MAIN.path)}
      />
      <NavIcon
        src={profileIcon}
        alt="profileIcon"
        label="Profile"
        href={getLink(ROUTE.MAIN.PROFILE.path)}
      />
    </div>
  );
};

export default Nav;
