import React from 'react';

type ColorCircleProps = {
  borderColor: string;
  bgColor: string;
  onClick: React.MouseEventHandler;
};
const ColorCircle = ({ borderColor, bgColor, onClick }: ColorCircleProps) => {
  return (
    <div
      onClick={onClick}
      className={`h-[32px] w-[32px] flex-none cursor-pointer rounded-full border-2 ${borderColor} ${bgColor} hover:border-primary`}
    />
  );
};

export default ColorCircle;
