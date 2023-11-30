import { UserJoin, loginSchema, userJoinSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from '.';

const useRegisterForm = () => {
  const { register, handleSubmit } = useForm<UserJoin>({
    resolver: yupResolver(userJoinSchema),
  });

  const handleSubmitSuccess = (userJoinInfo: UserJoin) => {
    console.log(userJoinInfo);
    login(userJoinInfo);
  };

  const handleSubmitError = (e: FieldErrors<UserJoin>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(value.message);
      return;
    }
  };
  return {
    handleSubmit,
    handleSubmitSuccess,
    handleSubmitError,
    register,
  };
};

export default useRegisterForm;
