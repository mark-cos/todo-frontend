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
    if (_isSelected) {
      onUnSelected && onUnSelected();
    } else {
      onSelected && onSelected();
    }
  };
  useEffect(() => {
    setIsSelected(isSelected);
  }, [isSelected]);

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
