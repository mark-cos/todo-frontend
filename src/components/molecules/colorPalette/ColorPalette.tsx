import ColorCircle from '@/components/atoms/colorCircle/ColorCircle';
import React, { useEffect, useRef, useState } from 'react';
import useColorPalette from './ColorPalette.hook';
import { ColorPaletteProps } from './colorPalette.types';

const ColorPalette = ({ handleSetColor }: ColorPaletteProps) => {
  const { bgColors, borderColors, handleClickColorCircle } =
    useColorPalette(handleSetColor);
  const colorPaletteRef = useRef<HTMLDivElement>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.MouseEvent) => {
    if (!colorPaletteRef.current) return;
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + colorPaletteRef.current?.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (isDrag && colorPaletteRef.current) {
      colorPaletteRef.current.scrollLeft = startX - e.pageX;
    }
  };

  const throttle = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
    let isExcute = false;

    return (...args: Parameters<T>) => {
      if (!isExcute) {
        isExcute = true;
        setTimeout(() => {
          // console.log(...args);
          fn(...args);
          isExcute = false;
        }, ms);
      }
    };
  };

  const onThrottleDragMove = throttle(onDragMove, 25);

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
