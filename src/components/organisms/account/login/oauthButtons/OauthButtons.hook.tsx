import useServerTranslation from '@/libs/i18n/useServerTranslation';

const useOauthButtons = async () => {
  const { t } = await useServerTranslation('login');
  return { t };
};

export default useOauthButtons;
