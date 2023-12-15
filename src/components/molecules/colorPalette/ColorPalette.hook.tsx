import React from 'react';

const useColorPalette = (handleSetColor: (color: string) => void) => {
  // 리터럴 형태로 색상 클레스명을 조합할 경우 tailwind가 미사용하는 클래스명으로 인식하여 css에 포함되지 않음.
  const borderColors = [
    'border-zinc-200',
    'border-zinc-400',
    'border-zinc-600',
    'border-zinc-800',
    'border-red-200',
    'border-red-400',
    'border-red-600',
    'border-red-800',
    'border-orange-200',
    'border-orange-400',
    'border-orange-600',
    'border-orange-800',
    'border-yellow-200',
    'border-yellow-400',
    'border-yellow-600',
    'border-yellow-800',
    'border-green-200',
    'border-green-400',
    'border-green-600',
    'border-green-800',
    'border-blue-200',
    'border-blue-400',
    'border-blue-600',
    'border-blue-800',
    'border-purple-200',
    'border-purple-400',
    'border-purple-600',
    'border-purple-800',
  ];
  const bgColors = [
    'bg-zinc-200',
    'bg-zinc-400',
    'bg-zinc-600',
    'bg-zinc-800',
    'bg-red-200',
    'bg-red-400',
    'bg-red-600',
    'bg-red-800',
    'bg-orange-200',
    'bg-orange-400',
    'bg-orange-600',
    'bg-orange-800',
    'bg-yellow-200',
    'bg-yellow-400',
    'bg-yellow-600',
    'bg-yellow-800',
    'bg-green-200',
    'bg-green-400',
    'bg-green-600',
    'bg-green-800',
    'bg-blue-200',
    'bg-blue-400',
    'bg-blue-600',
    'bg-blue-800',
    'bg-purple-200',
    'bg-purple-400',
    'bg-purple-600',
    'bg-purple-800',
  ];

  const handleClickColorCircle = (color: string) => {
    handleSetColor(color);
  };
  return {
    bgColors,
    borderColors,
    handleClickColorCircle,
  };
};

export default useColorPalette;
