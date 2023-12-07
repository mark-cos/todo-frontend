import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import React, { KeyboardEvent, useRef } from 'react';
import searchIcon from '@/images/icons/search-normal.svg?url';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

const TaskSearchInput = () => {
  const { t } = useClientTranslation('task');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSearchTask = (e: KeyboardEvent) => {
    //TODO: 서버통신 구현 필요
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') console.log(searchInputRef.current?.value);
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
