import React, { Children } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import { getServerLngAddPath } from '@/libs/route/getLink';

type LinkProps = NextLinkProps & {
  children?: React.ReactNode;
};

const Link = (props: LinkProps) => {
  return (
    <NextLink {...props} href={getServerLngAddPath(props.href.toString())}>
      {props.children}
    </NextLink>
  );
};

export default Link;
