import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18nLangOptions } from './libs/i18n';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = request.cookies;

  //pathname 시작에 locale path 존재유무 체크(ex. /en/xxx, /ko/xxx)
  const pathnameIsMissingLocale = i18nLangOptions.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // 현재 lng값 설정.
  // locale path가 없는 경우 쿠키 lng값 확인
  const cookieLng = cookieStore.get('lng')?.value;
  const lng = pathnameIsMissingLocale
    ? cookieLng
      ? cookieLng
      : i18nLangOptions.defaultLocale
    : (pathname.match(/([^\/]+)/g) || [])[0] || i18nLangOptions.defaultLocale;

  // 서버컴포넌트에서 patname을 사용하기 위해 헤더에 추가
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  // 비인증 접근 가능 URL리스트
  const nonAuthUrlList = [
    `/${lng}`,
    `/${lng}/account/login`,
    `/${lng}/account/register`,

    '/',
    '/account/login',
    '/account/register',
  ];

  const session = await getToken({
    req: request,
    raw: true,
  });
  // 로그인이 안된 경우 로그인 페이지로 이동
  if (!session) {
    if (!nonAuthUrlList.some((nonAuthUrl) => pathname === nonAuthUrl)) {
      return NextResponse.redirect(new URL(`/${lng}/account/login`, request.url));
    }
  }

  // localePath가 없는 경우 추가 후 redirect, 아닌 경우 next
  let response;
  if (pathnameIsMissingLocale) {
    response = NextResponse.redirect(
      new URL(`/${lng}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
      {
        headers: requestHeaders,
      },
    );
  } else {
    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  response.cookies.set('lng', lng);
  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
