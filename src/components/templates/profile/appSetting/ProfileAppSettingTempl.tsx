'use client';
import Button from '@/components/atoms/button/Button';
import RadioButton from '@/components/atoms/button/RadioButton';
import React from 'react';
import useProfileAppSettingTempl from './ProfileAppSettingTempl.hook';
import BackIcon from '@/images/icons/back-button.svg';
import Select from '@/components/atoms/select/Select';
import { User } from '@/types/user/user.typs';

type ProfileAppSettingTemplProps = {
  user: User;
};

const ProfileAppSettingTempl = ({ user }: ProfileAppSettingTemplProps) => {
  const {
    handleBackPage,
    themes,
    selectedTheme,
    handleChangeTheme,
    handleChangeFont,
    fonts,
    selectedFont,
    languages,
    selectedLanguage,
    handleChangeLanguage,
    handleUpdateSetting,
  } = useProfileAppSettingTempl(user);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex-none">
        <form onSubmit={() => {}} className="h-full">
          <div className="flex h-full flex-col justify-between">
            <div className="flex-none">
              {/* title */}
              <div className="flex" onClick={handleBackPage}>
                <button type="button">
                  <BackIcon />
                </button>
                <div className="ml-2 text-lg">App Setting</div>
              </div>

              <div className="mt-7">
                <label htmlFor="name">
                  Change app color
                  <RadioButton
                    className="mt-5"
                    contents={themes}
                    selected={selectedTheme}
                    handleChangeButton={handleChangeTheme}
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
                  <RadioButton
                    className="mt-5"
                    contents={languages}
                    selected={selectedLanguage}
                    handleChangeButton={handleChangeLanguage}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-7 flex-none">
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

export default ProfileAppSettingTempl;
