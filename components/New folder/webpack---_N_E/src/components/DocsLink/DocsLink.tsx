import { OffsiteLink } from '@/components/OffsiteLink';
import { AnchorProps, Box, Title } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import classes from './DocsLink.module.css';

export interface Props extends AnchorProps {
  title: string | ReactNode;
  url: string;
  icon: StaticImageData;
  bg?: string;
}

export function DocsLink({ title, url, icon, bg, ...others }: Props) {
  return (
    <OffsiteLink
      url={url}
      withIcon={false}
      isWrapper
      className={classes.box}
      td={'none'}
      pos={'relative'}
      h={144}
      miw={200}
      py={'lg'}
      px={'xl'}
      {...others}
      style={{
        ...others.style,
        backgroundImage: bg
          ? `url(${bg})`
          : 'linear-gradient(40.1deg, #2a3f89 20.36%, #357ab3 94.74%)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <Title
        className={classes.title}
        order={3}
        size={20}
        lh={1.3}
        c={'white'}
        h={'100%'}
      >
        {title}
      </Title>
      {!bg && (
        <Box className={classes.icon_wrapper}>
          <Image
            alt={title?.toString() || 'Link background image'}
            src={icon}
          />
        </Box>
      )}
      <Box className={classes.arrow_wrapper}>
        <IconArrowNarrowRight size={40} stroke={1.5} color={'white'} />
      </Box>
    </OffsiteLink>
  );
}
