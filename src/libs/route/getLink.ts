import { headers } from 'next/headers';

const getLink = (path: string) => {
  const pathname = headers().get('x-pathname') ?? '';
  const lng = (pathname.match(/([^\/]+)/g) || [])[0] ?? 'en';
  return `/${lng}${path}`;
};

export default getLink;
