import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { Null, Option, Vec, u32 } from '@polkadot/types';
import { useApi } from '../../useApi';

export function usePendingVerification(
  paraId: number | undefined,
  config: ChainConfig,
): boolean | undefined {
  const api = useApi(config.ws);
  const version = api?.runtimeVersion.specVersion.toNumber();
  const is700 = version && version >= 700;
  const params = !version ? [undefined] : version >= 700 ? [paraId] : [];

  return useApiCall(
    api?.query.registrar.pendingVerification,
    params,
    is700 ? transform : (res) => transformPre700(paraId, res),
    { shouldUnwrap: false },
  );
}

function transform(res: Option<Null>): boolean {
  return res.isSome;
}

function transformPre700(
  paraId: number | undefined,
  pendingVerification: Vec<u32>,
): boolean {
  return pendingVerification.some((v) => v.toNumber() === paraId);
}
