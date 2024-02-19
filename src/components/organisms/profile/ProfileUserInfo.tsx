import Button from '@/components/atoms/button/Button';
import { User } from '@/types/user/user.typs';
import Image from 'next/image';
import React from 'react';

export type TaskStatus = {
  left: number;
  done: number;
};
export type ProfileUserInfoProps = {
  user: User;
  taskStatus: TaskStatus;
};

const ProfileUserInfo = ({ user, taskStatus }: ProfileUserInfoProps) => {
  const defualtAvatarImg = '/images/profile-img.jpg';
  return (
    <div className="flex flex-col text-center">
      <div className={'flex-auto'}>
        <Image
          className="mx-auto rounded-full"
          src={user.image || defualtAvatarImg}
          alt="profile-image"
          width={80}
          height={80}
          priority={false}
        />
      </div>
      <div className={'my-5 flex-auto text-lg'}>{user.name}</div>
      {/* task status */}
      <div className={'flex-auto'}>
        <div className="flex justify-center">
          <div className="basis-52 px-4">
            <Button className="w-full bg-dark py-4">{taskStatus.left} Task left</Button>
          </div>
          <div className="basis-52 px-4">
            <Button className="w-full bg-dark py-4">{taskStatus.done} Task done</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
