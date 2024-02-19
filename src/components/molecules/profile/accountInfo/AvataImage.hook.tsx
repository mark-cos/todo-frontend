import React, { ForwardedRef, useRef, useState } from 'react';

const useAvataImage = (ref: ForwardedRef<HTMLInputElement>) => {
  const defualtAvatarImg = '/images/profile-img.jpg';
  const imageRef = useRef<HTMLImageElement>(null);
  const [isChangeImage, setIsChangeImage] = useState(false);

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const reader = new FileReader();
    reader.onload = function () {
      if (!imageRef.current) return;
      imageRef.current.src = reader.result as string;
    };
    reader.readAsDataURL(files[0]);
    setIsChangeImage(true);
  };

  const handleClickChangeImage = () => {
    if (typeof ref !== 'function') {
      ref?.current?.click();
    }
  };

  return {
    defualtAvatarImg,
    isChangeImage,
    imageRef,
    handleChangeImage,
    handleClickChangeImage,
  };
};

export default useAvataImage;
