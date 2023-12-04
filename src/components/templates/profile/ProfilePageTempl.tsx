import { ProfileMenuList, ProfileUserInfo } from '@/components/organisms';
import { User } from '@/types/user/user.typs';
import React from 'react';

const ProfilePageTempl = () => {
  // FIXME: API, storage에서  가져오게 변경 필요.
  const user: User = {
    email: 'dev@google.com',
    name: 'Martha Hays',
    avatarUrl: '/images/Mask group.png',
    font: '',
    language: 'en',
    theme: 'dark',
  };

  const taskStatus = {
    left: 10,
    done: 5,
  };

  return (
    <div className="flex flex-col">
      {/* title */}
      <div className="flex-auto text-center text-lg">Profile</div>
      <div className="mb-8 mt-4 flex-auto">
        <ProfileUserInfo user={user} taskStatus={taskStatus} />
      </div>
      <div className="flex-auto">
        <ProfileMenuList />
      </div>
    </div>
  );
};

export default ProfilePageTempl;
