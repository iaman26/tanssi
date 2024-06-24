import { RelayChainConfig } from '@/config';
import { u32 } from '@polkadot/types-codec';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export function useNextFreeParaId(
  config: RelayChainConfig,
): number | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.registrar.nextFreeParaId, [], transform);
}

function transform(id: u32): number {
  return id.toNumber();
}
