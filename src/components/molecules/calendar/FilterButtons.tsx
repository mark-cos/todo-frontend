import ToggleButton from '@/components/atoms/button/ToggleButton';
import { calendarStore } from '@/libs/zustand';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const FilterButtons = () => {
  const { selectedDate, setSelectedDate } = calendarStore((state) => state);
  const [isToday, setIsToday] = useState(true);
  const toDay = new Date();

  const handleTodayToggle = () => {
    setSelectedDate(format(toDay, 'yyyy-MM-dd'));
  };

  useEffect(() => {
    setIsToday(format(toDay, 'yyyy-MM-dd') === selectedDate);
    setSelectedDate(format(toDay, 'yyyy-MM-dd'));
  }, [selectedDate]);

  return (
    <div className="mt-4 flex gap-14 rounded border border-none bg-dark px-3 py-5">
      <div className="basis-1/2">
        <ToggleButton
          isSelected={isToday}
          onSelected={handleTodayToggle}
          classname="w-full"
        >
          Today
        </ToggleButton>
      </div>
      <div className="basis-1/2">
        <ToggleButton
          isSelected={false}
          onSelected={() => {}}
          onUnSelected={() => {}}
          classname="w-full"
        >
          Completed
        </ToggleButton>
      </div>
    </div>
  );
};

export default FilterButtons;
