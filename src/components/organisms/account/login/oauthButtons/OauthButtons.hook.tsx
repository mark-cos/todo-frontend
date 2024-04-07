import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import ROUTE from '@/libs/route';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useOauthButtons = () => {
  const { t } = useClientTranslation('account');
  const router = useRouter();
  const { data: session } = useSession();
  const handleGoogleSignIn = async () => {
    try {
      signIn('google', { redirect: false });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (session) router.push(`/${session?.user.language}/${ROUTE.TASKS.path}`);
  }, [session, router]);

  return { t, handleGoogleSignIn };
};

export default useOauthButtons;
