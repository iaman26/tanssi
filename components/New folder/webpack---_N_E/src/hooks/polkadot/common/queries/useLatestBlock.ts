import { ChainConfig } from '@/config';
import { Header } from '@polkadot/types/interfaces';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export function useLatestBlock(config: ChainConfig): number | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.rpc.chain.subscribeNewHeads, [], transform);
}

function transform(head: Header): number {
  return head.number.toBn().toNumber();
}
