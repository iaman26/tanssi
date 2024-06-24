import { IdentityIcon } from '@/components/IndentityIcon';
import { Center } from '@mantine/core';
import { memo } from 'react';

export interface Props {
  paraId: number;
  size?: number;
  bg?: string;
}

export const AppchainIdenticon = memo(function CollatorIdenticon({
  paraId,
  size = 30,
  bg = 'dark.6',
}: Props) {
  return (
    <Center p={4} bg={bg} style={{ borderRadius: '50%' }}>
      <IdentityIcon value={paraId.toString()} size={size} />
    </Center>
  );
});
