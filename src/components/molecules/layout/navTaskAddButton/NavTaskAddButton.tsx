'use client';
import { useDispatch } from '@/libs/redux';
import taskSlice from '@/libs/redux/slices/taskSlice';
import Image from 'next/image';
import React from 'react';
import addIcon from '@/images/icons/add.svg?url';

const NavTaskAddButton = () => {
  const dispatch = useDispatch();
  const handleClickNewTask = () => {
    dispatch(taskSlice.actions.setIsShoModal(true));
  };
  return (
    <button
      className="absolute left-[-32px] top-[-52px] flex h-[64px] w-[64px] rounded-full bg-primary"
      onClick={handleClickNewTask}
    >
      <Image src={addIcon} alt="addIcon" className="m-auto" />
    </button>
  );
};

export default NavTaskAddButton;
