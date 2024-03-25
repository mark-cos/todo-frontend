'use client';
import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ClientLinkProps = NextLinkProps & {
  children?: React.ReactNode;
};

const ClientLink = (props: ClientLinkProps) => {
  const pathname = usePathname();
  let lng = (pathname.match(/([^\/]+)/g) || [])[0];
  return (
    <NextLink {...props} href={`/${lng}${props.href.toString()}`}>
      {props.children}
    </NextLink>
  );
};

export default ClientLink;
