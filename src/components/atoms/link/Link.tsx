import React, { Children } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import getLngPath from '@/libs/route/getLink';

type LinkProps = NextLinkProps & {
  children?: React.ReactNode;
};

const Link = (props: LinkProps) => {
  return (
    <NextLink {...props} href={getLngPath(props.href.toString())}>
      {props.children}
    </NextLink>
  );
};

export default Link;
