import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/button/Button';
import useAvataImage from './AvataImage.hook';

type AvataImageProps = {
  url: string;
};

const AvataImage = forwardRef(
  ({ url }: AvataImageProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      defualtAvatarImg,
      isChangeImage,
      imageRef,
      handleChangeImage,
      handleClickChangeImage,
    } = useAvataImage(ref);
    return (
      <div className="relative flex items-center justify-center gap-3 ">
        <div className="relative h-20 w-20 flex-none rounded-full">
          {isChangeImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="profile-image"
              ref={imageRef}
              className="h-full w-full rounded-full"
            />
          ) : (
            <Image
              fill
              className="rounded-full"
              src={url || defualtAvatarImg}
              alt="profile-image"
            />
          )}
        </div>
        <div className="flex-none">
          <input
            type="file"
            className="hidden"
            ref={ref}
            onChange={handleChangeImage}
            accept="image/*"
          />
          <Button
            className="absolute bottom-0 border-2 border-primary px-1"
            onClick={handleClickChangeImage}
          >
            change
          </Button>
        </div>
      </div>
    );
  },
);
AvataImage.displayName = 'AvataImage';
export default AvataImage;
