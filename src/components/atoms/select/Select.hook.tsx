import React from 'react';
import { Option } from './select.types';

const useSelect = (options: Option[], select: string) => {
  const selectedOption = options.find((option) => option.value === select);
  return { selectedOption };
};

export default useSelect;
