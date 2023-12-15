import ColorCircle from '@/components/atoms/colorCircle/ColorCircle';
import React from 'react';
import useColorPalette from './ColorPalette.hook';
import { ColorPaletteProps } from './colorPalette.types';

const ColorPalette = ({ handleSetColor }: ColorPaletteProps) => {
  const { bgColors, borderColors, handleClickColorCircle } =
    useColorPalette(handleSetColor);
  return (
    <div className="no-scrollbar flex w-full gap-2 overflow-x-scroll">
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
