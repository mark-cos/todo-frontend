'use client';
import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import React, { KeyboardEvent, useRef } from 'react';
import searchIcon from '@/images/icons/search-normal.svg?url';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useDispatch, useSelector } from '@/libs/redux';
import taskSlice from '@/libs/redux/slices/taskSlice';

const TaskSearchInput = () => {
  const { t } = useClientTranslation('task');
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { keyword } = useSelector((state) => state.task.filter);
  const handleSearchTask = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    if (keyword === '' && searchInputRef.current?.value === '') {
      return;
    }
    if (e.key === 'Enter') {
      dispatch(taskSlice.actions.setFilter({ keyword: searchInputRef.current?.value }));
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
