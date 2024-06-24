import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { u32 } from '@polkadot/types';

export function useAppchainBlockExtrinsicCount(
  paraId: number | undefined,
  config: ChainConfig,
): number | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(
    api?.query.system.extrinsicCount,
    [],
    transformSystemExtrinsicCount,
  );
}

function transformSystemExtrinsicCount(
  number: u32 | undefined,
): number | undefined {
  if (!number) return;

  return number.toNumber();
}
