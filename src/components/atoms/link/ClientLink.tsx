'use client';
import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { getClientLngAddPath } from '@/utils/common';

type ClientLinkProps = NextLinkProps & {
  children?: React.ReactNode;
};

const ClientLink = (props: ClientLinkProps) => {
  return (
    <NextLink {...props} href={getClientLngAddPath(props.href.toString())}>
      {props.children}
    </NextLink>
  );
};

export default ClientLink;
