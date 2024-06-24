import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { Struct, u32 } from '@polkadot/types';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';
import { useApi } from '../../useApi';

interface LatestAuthor {
  blockNumber: number;
}

export function useLatestAuthor(
  paraId: number | undefined,
  config: ChainConfig,
): LatestAuthor | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.authorNoting.latestAuthor,
    [paraId],
    transformLatestAuthor,
  );
}

function transformLatestAuthor(
  latestAuthor: PalletAuthorNotingContainerChainBlockInfo,
) {
  return { blockNumber: latestAuthor?.blockNumber.toNumber() };
}

interface PalletAuthorNotingContainerChainBlockInfo extends Struct {
  readonly blockNumber: u32;
  readonly author: AccountId32;
}
