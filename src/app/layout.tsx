import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import authOptions from './api/auth/[...nextauth]/authOptions';
import { i18nLangOptions } from '@/libs/i18n';
import { headers } from 'next/headers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const fonts = {
  inter,
  roboto_mono,
};

export type SupportFonts = keyof typeof fonts;

export const metadata: Metadata = {
  title: 'MARK-COS (마크최오손) - 최첨단 Todo(할일) 관리.',
  description:
    '마크최오손 mark-cos 에서 할일 todo를 관리해보세요!. 구글 로그인, 할일 추가, 삭제, 카테고리 등록, 삭제',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL!),
  openGraph: {
    type: 'website',
    title: '마크최오손 : Todo',
    description: '할일(todo)을 작성해보세요.',
    url: process.env.NEXT_PUBLIC_SERVER_URL!,
    locale: 'en_US',
    images: `${process.env.NEXT_PUBLIC_SERVER_URL!}/images/og_image.png`,
  },
  icons: {
    icon: '/images/icon.png',
  },
  applicationName: 'mark-cos',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await getServerSession(authOptions);
  // session.user에서 폰트를 가져와 폰트를 설정한다.
  const font = fonts[session?.user.font as SupportFonts] || inter;
  let firstAcceptLanguage = headers().get('accept-language')?.split(',')[0];
  if (firstAcceptLanguage && firstAcceptLanguage?.length > 2) {
    firstAcceptLanguage = firstAcceptLanguage?.slice(0, 2);
  }
  const lng =
    session?.user.language || firstAcceptLanguage || i18nLangOptions.defaultLocale;

  return (
    <html lang={lng} className="dark">
      <body className={`${font.className} dark:bg-black`}>{children}</body>
    </html>
  );
};
export default RootLayout;
