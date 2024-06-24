import '@polkadot/api-augment/polkadot';

import { RelayChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { Vec, u32 } from '@polkadot/types-codec';
import { useApi } from '../../useApi';

export function useParachains(config?: RelayChainConfig): number[] | undefined {
  const api = useApi(config?.ws);

  return useApiCall(api?.query.paras.parachains, [], transform);
}

function transform(paras: Vec<u32>): number[] | undefined {
  return paras.map((para) => para.toNumber());
}
