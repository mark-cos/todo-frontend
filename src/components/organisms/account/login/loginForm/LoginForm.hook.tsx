import { Login, loginSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from '.';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

const useLoginForm = () => {
  const { t } = useClientTranslation('login');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitSuccess = (loginInfo: Login) => {
    console.log(loginInfo);
    login(loginInfo);
  };

  const handleSubmitError = (e: FieldErrors<Login>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(t(value.message));
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
