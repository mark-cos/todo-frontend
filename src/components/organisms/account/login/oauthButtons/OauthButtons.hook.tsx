import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { signIn } from 'next-auth/react';

const useOauthButtons = () => {
  const { t } = useClientTranslation('account');
  return { t, signIn };
};

export default useOauthButtons;
