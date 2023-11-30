import backButtonIcon from '@/images/icons/back-button.svg?url';
import Image from 'next/image';
import { headers } from 'next/headers';
import Link from 'next/link';
import { BottomLink } from '@/components/organisms/account/buttonLink';

export type AccountLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function AccountLayout({ children, params }: AccountLayoutProps) {
  const referer = headers().get('referer');
  const currentPage = (referer?.match(/\/([^\/]+)\/?$/g) || [])[0] || '';
  console.log(referer, '[' + currentPage + ']', '/login' === currentPage);

  return (
    <div className="container-100svh flex flex-col justify-between px-5 py-4">
      <div className="flex-auto">
        <div className="flex-auto cursor-pointer">
          <Link href={'/'}>
            <Image src={backButtonIcon} alt="backButtonIcon" />
          </Link>
        </div>

        <div className="mb-16 mt-11 flex-grow text-2xl font-bold">
          {currentPage === '/login' ? 'Login' : 'Register'}
        </div>

        <div className="flex-auto">{children}</div>
      </div>

      <div className="flex-none">
        <BottomLink currentPage={currentPage} />
      </div>
    </div>
  );
}
