import { Login, loginSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useRouter } from 'next/navigation';
import ROUTE from '@/libs/route';
import { getClientLngAddPath } from '@/utils/common';

const useLoginForm = () => {
  const { t } = useClientTranslation('account');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitSuccess = async (loginInfo: Login) => {
    const resSignIn = await signIn('credentials', { ...loginInfo, redirect: false });
    if (resSignIn?.ok) {
      router.push(getClientLngAddPath(ROUTE.MAIN.path));
    } else {
      toast.error(
        resSignIn?.status === 401 ? t('api_error_unauthorized') : t('api_error_default'),
      );
    }
  };

  const handleSubmitError = (e: FieldErrors<Login>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(t(value.message!));
      return false;
    }
  };

  return {
    t,
    handleSubmit,
    handleSubmitSuccess,
    handleSubmitError,
    register,
  };
};

export default useLoginForm;
