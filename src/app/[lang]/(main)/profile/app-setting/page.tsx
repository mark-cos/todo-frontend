import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import ProfileAppSettingTempl from '@/components/templates/profile/appSetting/ProfileAppSettingTempl';
import { getServerSession } from 'next-auth';
import React from 'react';

const AppSettingPage = async () => {
  const session = await getServerSession(authOptions);
  return <ProfileAppSettingTempl user={session?.user!} />;
};

export default AppSettingPage;
