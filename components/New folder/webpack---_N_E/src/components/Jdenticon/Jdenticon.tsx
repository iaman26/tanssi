import { Box, BoxProps } from '@mantine/core';
import * as jdenticon from 'jdenticon';
import { forwardRef, useMemo } from 'react';
import classes from './Jdenticon.module.css';

export interface Props extends BoxProps {
  address: string;
  size?: number;
}

export const Jdenticon = forwardRef<HTMLDivElement, Props>(
  ({ address, size = 24, ...other }: Props, ref) => {
    const html = useMemo(
      () => ({ __html: jdenticon.toSvg(address.substring(2), size) }),
      [address, size],
    );

    return (
      <Box
        ref={ref}
        className={classes.box}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Adding a self-generated svg image
        dangerouslySetInnerHTML={html}
        w={size}
        h={size}
        bg={'dark'}
        {...other}
      />
    );
  },
);

Jdenticon.displayName = 'Jdenticon';
