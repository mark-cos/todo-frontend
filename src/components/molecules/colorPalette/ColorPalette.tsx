import ColorCircle from '@/components/atoms/colorCircle/ColorCircle';
import React, { useEffect, useRef, useState } from 'react';
import useColorPalette from './ColorPalette.hook';
import { ColorPaletteProps } from './colorPalette.types';
import { throttle } from '@/utils/common';

const ColorPalette = ({ handleSetColor }: ColorPaletteProps) => {
  const {
    bgColors,
    borderColors,
    colorPaletteRef,
    handleClickColorCircle,
    onDragStart,
    onDragEnd,
    onThrottleDragMove,
  } = useColorPalette(handleSetColor);

  return (
    <div
      className="no-scrollbar flex w-full gap-2 overflow-x-scroll"
      ref={colorPaletteRef}
      onMouseDown={onDragStart}
      onMouseMove={onThrottleDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {bgColors.map((bgColor, index) => (
        <ColorCircle
          key={bgColor}
          bgColor={bgColor}
          borderColor={borderColors[index]}
          onClick={() => handleClickColorCircle(bgColor)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
