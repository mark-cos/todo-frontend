'use client';
import Button from '@/components/atoms/button/Button';
import ToggleButton from '@/components/atoms/button/ToggleButton';
import { Content } from '@/components/atoms/button/button.types';
import React, { useState } from 'react';
import useProfileSettingTempl from './ProfileSettingTempl.hook';
import BackIcon from '@/images/icons/back-button.svg';
import Select from '@/components/atoms/select/Select';
import { Option } from '@/components/atoms/select/select.types';

const colors: Content[] = [
  {
    lable: 'light',
  },
  {
    lable: 'dark',
  },
  {
    lable: 'black',
  },
];

const languages: Content[] = [
  {
    lable: 'en',
  },
  {
    lable: 'ko',
  },
];

const fonts: Option[] = [
  {
    id: 1,
    value: 'inter',
    text: 'inter',
  },
  {
    id: 2,
    value: 'roboto_mono',
    text: 'roboto_mono',
  },
  {
    id: 3,
    value: 'roboto_mono1',
    text: 'roboto_mono1',
  },
  {
    id: 4,
    value: 'roboto_mono2',
    text: 'roboto_mono2',
  },
];

const ProfileSettingTempl = () => {
  const { handleBackPage } = useProfileSettingTempl();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLng, setSelectedLng] = useState(languages[0]);
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);

  const handleChangeFont = (font: string) => {
    setSelectedFont(font);
  };

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
                    contents={colors}
                    selected={selectedColor}
                    setSelected={setSelectedColor}
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
        <Button variant="contained" className="w-full" type="submit">
          Update
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettingTempl;
