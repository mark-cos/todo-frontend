import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import React, { KeyboardEvent, useRef } from 'react';
import searchIcon from '@/images/icons/search-normal.svg?url';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

const TaskSearchInput = () => {
  const { t } = useClientTranslation('task');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSearchTask = () => {
    //TODO: 서버통신 구현 필요
    console.log(searchInputRef.current?.value);
  };
  return (
    <IconInputText
      iconSrc={searchIcon}
      alt="searchIcon"
      placeholder={t('searchInput.placeholder')}
      inputRef={searchInputRef}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter') handleSearchTask();
      }}
    />
  );
};

export default TaskSearchInput;
