import { Content } from '@/components/atoms/button/button.types';
import { Option } from '@/components/atoms/select/select.types';
import { Locale } from '@/libs/i18n';
import { updateAppSetting } from '@/services/account';
import { AppSetting, User } from '@/types/user/user.typs';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const themes: Content[] = [
  {
    lable: 'light',
  },
  {
    lable: 'dark',
  },
  {
    lable: 'blue',
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
const useProfileAppSettingTempl = (user: User) => {
  const router = useRouter();

  const handleBackPage = () => {
    router.back();
  };

  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((theme) => theme.lable === user.theme) || themes[0],
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((language) => language.lable === user.language) || languages[0],
  );
  const [selectedFont, setSelectedFont] = useState(
    fonts.find((font) => font.value === user.font)?.value || fonts[0].value,
  );

  const handleChangeFont = (font: string) => {
    setSelectedFont(font);
  };

  const mutation = useMutation({
    mutationFn: (appSetting: AppSetting) => updateAppSetting(appSetting),
    // TODO: 데이터를 다시 받아 그리는 부분 추가 필요
    onSuccess: () => {},
  });

  const handleUpdateSetting = () => {
    const setting: AppSetting = {
      theme: selectedTheme.lable as 'light' | 'dark',
      language: selectedLanguage.lable as Locale,
      font: selectedFont,
    };

    mutation.mutateAsync(setting);
  };

  return {
    handleBackPage,
    themes,
    selectedTheme,
    setSelectedTheme,
    handleChangeFont,
    fonts,
    selectedFont,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    handleUpdateSetting,
  };
};

export default useProfileAppSettingTempl;
