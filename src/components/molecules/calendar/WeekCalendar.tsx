import { add, format } from 'date-fns';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type WeekCalendarProps = {
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
};

const WeekCalendar = ({ selectedDay, setSelectedDay }: WeekCalendarProps) => {
  const weekArray = new Array(7).fill(1);
  const isWeekend = (day: number) => day === 0 || day === 6;

  return (
    <div className="flex">
      {weekArray.map((_date, index) => {
        const day = add(selectedDay, { days: -3 + index });
        return (
          <div key={index} className="flex-auto text-center">
            <button
              className={twMerge(
                'mx-auto w-fit rounded-md bg-black/25 px-2 py-2 text-xs',
                selectedDay.getTime() === day.getTime() && 'bg-primary',
              )}
              onClick={() => setSelectedDay(day)}
            >
              <p className={`mb-2 ${isWeekend(index) && 'text-red-500'}`}>
                {format(day, 'EEE').toLocaleUpperCase()}
              </p>
              <p className="">{format(day, 'd')}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
