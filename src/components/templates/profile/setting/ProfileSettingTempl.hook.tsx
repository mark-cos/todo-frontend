import { Content } from '@/components/atoms/button/button.types';
import { Option } from '@/components/atoms/select/select.types';
import { Locale } from '@/libs/i18n';
import { updateAppSetting } from '@/services/account';
import { AppSetting } from '@/types/user/user.typs';
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
const useProfileSettingTempl = () => {
  // FIXME: sesstion에 넣고 세션에서 가져오게 변경 필요.
  const appSetting: AppSetting = {
    theme: 'light',
    font: 'roboto_mono2',
    language: 'ko',
  };
  const router = useRouter();

  const handleBackPage = () => {
    router.back();
  };

  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((theme) => theme.lable === appSetting.theme) || themes[0],
  );
  const [selectedLng, setSelectedLng] = useState(
    languages.find((language) => language.lable === appSetting.language) || languages[0],
  );
  const [selectedFont, setSelectedFont] = useState(
    fonts.find((font) => font.value === appSetting.font)?.value || fonts[0].value,
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
      language: selectedLng.lable as Locale,
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
    selectedLng,
    setSelectedLng,
    handleUpdateSetting,
  };
};

export default useProfileSettingTempl;
