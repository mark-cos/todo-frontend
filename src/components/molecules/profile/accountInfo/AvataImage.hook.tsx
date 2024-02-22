import React, { ForwardedRef, useRef, useState } from 'react';

const useAvataImage = (ref: ForwardedRef<HTMLInputElement>) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isupdateImage, setIsupdateImage] = useState(false);

  const handleupdateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const reader = new FileReader();
    reader.onload = function () {
      if (!imageRef.current) return;
      imageRef.current.src = reader.result as string;
    };
    reader.readAsDataURL(files[0]);
    setIsupdateImage(true);
  };

  const handleClickupdateImage = () => {
    if (typeof ref !== 'function') {
      ref?.current?.click();
    }
  };

  return {
    isupdateImage,
    imageRef,
    handleupdateImage,
    handleClickupdateImage,
  };
};

export default useAvataImage;
