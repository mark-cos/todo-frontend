'use client';
import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import React, { KeyboardEvent, useRef } from 'react';
import searchIcon from '@/images/icons/search-normal.svg?url';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { taskStore } from '@/libs/zustand';

const TaskSearchInput = () => {
  const { t } = useClientTranslation('task');

  const {
    filter: { keyword },
    setFilter,
  } = taskStore();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchTask = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    if (keyword === '' && searchInputRef.current?.value === '') {
      return;
    }
    if (e.key === 'Enter') {
      setFilter({ keyword: searchInputRef.current?.value });
    }
  };
  return (
    <IconInputText
      iconSrc={searchIcon}
      alt="searchIcon"
      placeholder={t('searchInput.placeholder')}
      inputRef={searchInputRef}
      onKeyDown={handleSearchTask}
    />
  );
};

export default TaskSearchInput;
