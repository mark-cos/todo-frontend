import { Content } from '@/components/atoms/button/button.types';
import { Option } from '@/components/atoms/select/select.types';
import { Locale } from '@/libs/i18n';
import ROUTE from '@/libs/route';
import { updateAppSetting } from '@/services/profile';

import { AppSetting, User } from '@/types/user/user.typs';
import { getClientLngAddPath } from '@/utils/common';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const themes: Content[] = [
  {
    label: 'light',
  },
  {
    label: 'dark',
  },
  {
    label: 'blue',
  },
];

const languages: Content[] = [
  {
    label: 'en',
  },
  {
    label: 'ko',
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
    router.push(getClientLngAddPath(ROUTE.PROFILE.path));
  };

  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((theme) => theme.label === user.theme) || themes[0],
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((language) => language.label === user.language) || languages[0],
  );
  const [selectedFont, setSelectedFont] = useState(
    fonts.find((font) => font.value === user.font)?.value || fonts[0].value,
  );

  const handleChangeTheme = (theme: Content) => {
    setSelectedTheme(theme);
  };

  const handleChangeLanguage = (language: Content) => {
    setSelectedLanguage(language);
  };

  const handleChangeFont = (font: string) => {
    setSelectedFont(font);
  };

  const mutation = useMutation({
    mutationFn: (appSetting: AppSetting) => updateAppSetting(appSetting),
    // TODO: 데이터를 다시 받아 그리는 부분 추가 필요
    onSuccess: () => {
      toast.success('App settings have changed.');
      // router.push(`/${selectedLanguage.label}/${ROUTE.PROFILE.APP_SETTING.path}`);
      location.href = `/${selectedLanguage.label}/${ROUTE.PROFILE.APP_SETTING.path}`;
    },
  });

  const handleUpdateSetting = () => {
    const setting: AppSetting = {
      theme: selectedTheme.label as 'light' | 'dark',
      language: selectedLanguage.label as Locale,
      font: selectedFont,
    };

    mutation.mutateAsync(setting);
  };

  return {
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
  };
};

export default useProfileAppSettingTempl;
