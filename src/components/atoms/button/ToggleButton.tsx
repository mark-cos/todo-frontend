import React, { ReactNode, useEffect, useState } from 'react';
import Button from './Button';

type ToggleButtonProps = {
  children: ReactNode;
  onSelected?: () => void;
  onUnSelected?: () => void;
  isSelected?: boolean;
  classname?: string;
};

const ToggleButton = ({
  children,
  isSelected = true,
  onSelected,
  onUnSelected,
  classname = '',
}: ToggleButtonProps) => {
  const [_isSelected, setIsSelected] = useState(isSelected);
  const handleToggleBtn = () => {
    setIsSelected((pre) => !pre);
    _isSelected ? onSelected && onSelected() : onUnSelected && onUnSelected();
  };

  useEffect(() => {
    console.log('🚀 _ file: ToggleButton.tsx:18 _ _isSelected:', _isSelected);
  });

  return (
    <Button
      variant={_isSelected ? 'contained' : 'outlined'}
      className={`${!_isSelected ? 'border-white/30' : ''} ${classname}`}
      onClick={handleToggleBtn}
    >
      {children}
    </Button>
  );
};

export default ToggleButton;
