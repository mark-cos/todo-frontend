import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { ProfileMenuList, ProfileUserInfo } from '@/components/organisms';
import { getServerSession } from 'next-auth';
import React from 'react';

const ProfilePageTempl = async () => {
  const session = await getServerSession(authOptions);

  const taskStatus = {
    left: 10,
    done: 5,
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8 mt-4 flex-auto">
        {/* FIXME: 백엔드 구현 후 타입 수정 필요. */}
        {/* @ts-ignore  */}
        <ProfileUserInfo user={session?.user!} taskStatus={taskStatus} />
      </div>
      <div className="flex-auto">
        <ProfileMenuList />
      </div>
    </div>
  );
};

export default ProfilePageTempl;
