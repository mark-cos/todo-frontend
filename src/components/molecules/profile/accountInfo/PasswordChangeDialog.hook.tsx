import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { updatePassword } from '@/services/profile';

import { UserPasswordChange, userPasswordChangeSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const usePasswordChangeDialog = (closeModal: () => void) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userPasswordChangeSchema),
  });

  const { t } = useClientTranslation('dialog');

  const mutation = useMutation({
    mutationFn: (passwordChangeFormData: UserPasswordChange) =>
      updatePassword(passwordChangeFormData),
    onSuccess: () => {
      reset();
      closeModal();
    },
  });

  const handleSubmitSuccess = (passwordChangeFormData: UserPasswordChange) => {
    console.log(
      '🚀 _ file: PasswordChangeDialog.hook.tsx:15 _ handleSubmitSuccess _ data:',
      passwordChangeFormData,
    );
    mutation.mutate(passwordChangeFormData);
  };

  const handleSubmitError = (errors: FieldErrors<UserPasswordChange>) => {
    for (const [key, value] of Object.entries(errors)) {
      toast.error(t(value.message!));
      return false;
    }
  };

  return { handleSubmit, handleSubmitSuccess, handleSubmitError, register };
};

export default usePasswordChangeDialog;
