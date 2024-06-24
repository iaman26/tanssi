import { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import { u32 } from '@polkadot/types-codec';

export function useCollatorAssignmentCredits(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): number | undefined {
  const api = useApi(config?.ws);

  return useApiCall(
    api?.query.servicesPayment.collatorAssignmentCredits,
    [paraId],
    transform,
  );
}

function transform(credits: u32): number {
  return credits.toNumber();
}
