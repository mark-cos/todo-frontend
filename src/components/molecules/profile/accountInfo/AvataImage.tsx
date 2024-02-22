import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/button/Button';
import useAvataImage from './AvataImage.hook';

type AvataImageProps = {
  url: string;
};
/**
 * 프로필 아바티 이미지 수정 컴포넌트
 * 기본은 Next-Image컴포넌트로 프로필 이미지를 보여주며
 * 이미지를 선택하여 변경한 경우 img태그와 input file을 사용하여 미리보기를 보여준다.
 */
const AvataImage = forwardRef(
  ({ url }: AvataImageProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { isupdateImage, imageRef, handleupdateImage, handleClickupdateImage } =
      useAvataImage(ref);
    return (
      <div className="relative flex items-center justify-center gap-3 ">
        <div className="relative h-20 w-20 flex-none rounded-full">
          {isupdateImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="profile-image"
              ref={imageRef}
              className="h-full w-full rounded-full"
            />
          ) : (
            <Image fill className="rounded-full" src={url} alt="profile-image" />
          )}
        </div>
        <div className="flex-none">
          <input
            type="file"
            className="hidden"
            ref={ref}
            onChange={handleupdateImage}
            accept="image/*"
          />
          <Button
            className="absolute bottom-0 border-2 border-primary px-1"
            onClick={handleClickupdateImage}
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
