import Image from 'next/image';
import React from 'react';
import todayTaskEmpty from '@/images/checklist-rafiki.svg?url';

const TodayTaskNone = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex-none">
        <Image src={todayTaskEmpty} width={220} alt="empty task" priority />
      </div>
      <div className="flex-none pt-2 text-center">
        <p className="mb-4 text-xl">What do you want to do today?</p>
        <p>Tap + to add your tasks</p>
      </div>
    </div>
  );
};

export default TodayTaskNone;
