import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { usePathname } from 'next/navigation';

const useAccountTitle = () => {
  const isLoginPage = usePathname().includes('/login');
  const { t } = useClientTranslation('account');
  return { isLoginPage, t };
};

export default useAccountTitle;
