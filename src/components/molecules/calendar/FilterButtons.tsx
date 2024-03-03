import RadioButton from '@/components/atoms/button/ToggleButton';
import ToggleButton from '@/components/atoms/button/ToggleButton';
import React from 'react';

const FilterButtons = () => {
  return (
    <div className="mt-4 flex gap-14 rounded border border-none bg-dark px-3 py-5">
      <div className="basis-1/2">
        <ToggleButton onSelected={() => {}} onUnSelected={() => {}} classname="w-full">
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
