import { Login, loginSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useRouter } from 'next/navigation';
import ROUTE from '@/libs/route';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { login } from '@/services/user';
import { rqKey } from '@/libs/react-query';

const useLoginForm = () => {
  const { t } = useClientTranslation('account');
  const router = useRouter();
  const [isValidForm, setIsValidForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: (loginInfo: Login) => login(loginInfo),
    onSuccess: ({ data: user }) => {
      sessionStorage.setItem('userInfo', JSON.stringify(user));
      router.push(`/${user.language}/${ROUTE.TASKS.path}`);
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const handleSubmitSuccess = async (loginInfo: Login) => {
    mutation.mutate(loginInfo);

    /*  if (data?.status !== 200) {
        toast.error(
          data?.status === 401 ? t('api_error_unauthorized') : t('api_error_default'),
        );
      } */
  };

  // 로그인을 성공 했을 경우 세션의 언어를 기준으로 메인페이지 이동
  /*   useEffect(() => {
    if (isSignIn && session)
      router.push(`/${session?.user.language}/${ROUTE.TASKS.path}`);
  }, [session, isSignIn, router]); */

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
