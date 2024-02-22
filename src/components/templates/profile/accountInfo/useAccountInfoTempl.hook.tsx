import { updateImage } from '@/services/account';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

const useAccountInfoTempl = () => {
  const { data: session } = useSession();
  const [isShowModal, setIsShowModal] = useState(false);
  const closeModal = () => setIsShowModal(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleBackPage = () => {
    router.back();
  };

  const mutation = useMutation({
    mutationFn: (formdata: FormData) => updateImage(formdata),
    onSuccess: ({ data }) => {
      console.log(data);
    },
  });
  const handleSubmitImage = (e: React.FormEvent) => {
    e.preventDefault();
    const accountFormData = new FormData();
    const name = nameInputRef.current?.value;
    if (name) {
      accountFormData.append('name', name);
    }
    const imageFile = imageInputRef.current?.files?.[0];
    if (imageFile) {
      accountFormData.append('file', imageFile);
    }

    if (name || imageFile) mutation.mutateAsync(accountFormData);
  };
  return {
    handleSubmitImage,
    session,
    nameInputRef,
    imageInputRef,
    setIsShowModal,
    isShowModal,
    closeModal,
    handleBackPage,
  };
};

export default useAccountInfoTempl;
