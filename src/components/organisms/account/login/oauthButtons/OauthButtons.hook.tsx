import useServerTranslation from '@/libs/i18n/useServerTranslation';

const useOauthButtons = async () => {
  const { t } = await useServerTranslation('account');
  return { t };
};

export default useOauthButtons;
