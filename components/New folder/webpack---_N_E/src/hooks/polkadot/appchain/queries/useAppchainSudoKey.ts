import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';

export function useAppchainSudoKey(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): string | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.sudo.key, [], transform);
}

function transform(sudoKey: AccountId32): string {
  return sudoKey.toString();
}
