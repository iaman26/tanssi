import { Collator as CollatorRow } from '@/components/pages/Staking/Collators/Collator';
import { ChainConfigProps } from '@/config';
import { Collator } from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Skeleton, Stack } from '@mantine/core';
import { memo } from 'react';

interface Props extends ChainConfigProps {
  collators?: Collator[];
}

export const CollatorsRows = memo(function CollatorsRows({
  collators,
  config,
}: Props) {
  const { md } = useMediaQuery();

  if (!collators)
    return (
      <Stack mt={40} gap={'xs'}>
        {Array.from({ length: 10 }, (_, i) => (
          <Skeleton key={i} miw={md ? 1008 : undefined} h={77} />
        ))}
      </Stack>
    );

  return (
    !!collators.length && (
      <Box style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>
        <Box miw={md ? 1008 : undefined}>
          <Stack mt={5} gap={'xs'}>
            {collators.map((collator, index) => (
              <CollatorRow
                key={collator.address}
                position={index + 1}
                address={collator.address}
                identity={collator.identity}
                isActive={collator.isActive}
                isUpcoming={collator.isUpcoming}
                delegated={collator.delegated}
                self={collator.self}
                total={collator.total}
                delegations={collator.delegations}
                apy={collator.apy}
                config={config}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    )
  );
});
