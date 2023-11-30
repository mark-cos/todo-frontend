import backButtonIcon from '@/images/icons/back-button.svg?url';
import Image from 'next/image';
import { headers } from 'next/headers';
import Link from 'next/link';
import { BottomLink } from '@/components/organisms/account/buttonLink';
import { NextPageContext } from 'next';

export type AccountLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function AccountLayout({ children, params }: AccountLayoutProps) {
  const _header = headers();
  const isLoginPage = _header.get('x-pathname')?.includes('/login') || false;

  return (
    <div className="container-100svh flex flex-col justify-between px-5 py-4">
      <div className="flex-auto">
        <div className="flex-auto cursor-pointer">
          <Link href={'/'}>
            <Image src={backButtonIcon} alt="backButtonIcon" />
          </Link>
        </div>

        <div className="mb-16 mt-11 flex-grow text-2xl font-bold">
          {isLoginPage ? 'Login' : 'Register'}
        </div>

        <div className="flex-auto">{children}</div>
      </div>

      <div className="flex-none">
        <BottomLink isLoginPage={isLoginPage} />
      </div>
    </div>
  );
}
