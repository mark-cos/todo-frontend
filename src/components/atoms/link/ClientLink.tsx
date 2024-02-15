'use client';
import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { getLng } from '@/utils/common';

type ClientLinkProps = NextLinkProps & {
  children?: React.ReactNode;
};

const ClientLink = (props: ClientLinkProps) => {
  const pathname = usePathname();
  const href = `/${getLng(pathname)}${props.href}`;

  return (
    <NextLink {...props} href={href}>
      {props.children}
    </NextLink>
  );
};

export default ClientLink;
