import IconInputText from '@/components/molecules/iconInputText/IconInputText';
import searchIcon from '@/images/icons/search-normal.svg?url';
import React from 'react';

const ToadyTaskPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <IconInputText
          iconSrc={searchIcon}
          alt="searchIcon"
          placeholder="Search for your task..."
        />
      </div>
    </div>
  );
};

export default ToadyTaskPage;
