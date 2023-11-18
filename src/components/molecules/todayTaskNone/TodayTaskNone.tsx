import Image from 'next/image';
import React from 'react';
import todayTaskEmpty from '@/images/checklist-rafiki.svg?url';

const TodayTaskNone = () => {
  return (
    <div className="flex-none p-4 text-center">
      <Image src={todayTaskEmpty} width={300} alt="empty task" priority />
      <p className="mb-4 text-xl">What do you want to do today?</p>
      <p>Tap + to add your tasks</p>
    </div>
  );
};

export default TodayTaskNone;
