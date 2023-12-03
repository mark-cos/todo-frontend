import { UserJoin, loginSchema, userJoinSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from './registerForm.api';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

const useRegisterForm = () => {
  const { t } = useClientTranslation('account');
  const { register, handleSubmit } = useForm<UserJoin>({
    resolver: yupResolver(userJoinSchema),
  });

  const handleSubmitSuccess = (userJoinInfo: UserJoin) => {
    console.log(userJoinInfo);
    login(userJoinInfo);
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
