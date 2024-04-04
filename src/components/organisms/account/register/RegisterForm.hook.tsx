import { UserJoin, loginSchema, userJoinSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { register as userRegister } from '@/services/user';

import ROUTE from '@/libs/route';
import { getClientLngAddPath } from '@/utils/common';

const useRegisterForm = () => {
  const { t } = useClientTranslation('account');
  const router = useRouter();
  const { register, handleSubmit } = useForm<UserJoin>({
    resolver: yupResolver(userJoinSchema),
  });

  const mutation = useMutation({
    mutationFn: userRegister,
    onSuccess: () => {
      router.push(getClientLngAddPath(ROUTE.ACCOUNT.LOGIN.path));
    },
  });

  const handleSubmitSuccess = (userJoinInfo: UserJoin) => {
    mutation.mutate({
      email: userJoinInfo.email,
      name: userJoinInfo.name,
      password: userJoinInfo.password,
    });
  };

  const handleSubmitError = (e: FieldErrors<UserJoin>) => {
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

export default useRegisterForm;
