import backButtonIcon from '@/images/icons/back-button.svg?url';
import Image from 'next/image';
import Link from 'next/link';
import { BottomLink } from '@/components/organisms/account/buttonLink';
import { AccountTitle } from '@/components/organisms/account/title';

export type AccountLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function AccountLayout({ children, params }: AccountLayoutProps) {
  return (
    <div className="container-100svh flex flex-col justify-between px-5 py-4">
      <div className="flex-auto">
        <div className="flex-auto cursor-pointer">
          <Link href={'/'}>
            <Image src={backButtonIcon} alt="backButtonIcon" />
          </Link>
        </div>

        <AccountTitle />

        <div className="flex-auto">{children}</div>
      </div>

      <div className="flex-none">
        <BottomLink />
      </div>
    </div>
  );
}
