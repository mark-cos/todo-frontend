'use client';
import Button from '@/components/atoms/button/Button';
import ToggleButton from '@/components/atoms/button/ToggleButton';
import React from 'react';
import useProfileSettingTempl from './ProfileSettingTempl.hook';
import BackIcon from '@/images/icons/back-button.svg';
import Select from '@/components/atoms/select/Select';

const ProfileSettingTempl = () => {
  const {
    handleBackPage,
    themes,
    selectedTheme,
    setSelectedTheme,
    handleChangeFont,
    fonts,
    selectedFont,
    languages,
    selectedLng,
    setSelectedLng,
    handleUpdateSetting,
  } = useProfileSettingTempl();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex-none">
        <form onSubmit={() => {}} className="h-full">
          <div className="flex h-full flex-col justify-between">
            <div className="flex-none">
              {/* title */}
              <div className="flex">
                <button onClick={handleBackPage} type="button">
                  <BackIcon />
                </button>
                <div className="ml-2 text-lg">App Setting</div>
              </div>

              <div className="mt-7">
                <label htmlFor="name">
                  Change app color
                  <ToggleButton
                    className="mt-5"
                    contents={themes}
                    selected={selectedTheme}
                    setSelected={setSelectedTheme}
                  />
                </label>
              </div>

              <div className="mt-7">
                <label htmlFor="name">
                  Change app typography
                  <Select
                    className="mt-5"
                    onChange={handleChangeFont}
                    options={fonts}
                    select={selectedFont}
                    optionClassName="h-14"
                  />
                </label>
              </div>

              <div className="mt-7">
                <label htmlFor="name">
                  Change app language
                  <ToggleButton
                    className="mt-5"
                    contents={languages}
                    selected={selectedLng}
                    setSelected={setSelectedLng}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-none">
        <Button
          variant="contained"
          className="w-full"
          type="button"
          onClick={handleUpdateSetting}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettingTempl;
