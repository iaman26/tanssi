import { ChainConfig } from '@/config';
import { calculateBlocksUntilSessionStart } from '@/utils/session';
import type { u32 } from '@polkadot/types';
import { isUndefined } from '@polkadot/util';
import { useMemo } from 'react';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';
import { useLatestBlock } from './useLatestBlock';

export function useCurrentSession(config: ChainConfig): number | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.session.currentIndex, [], transformSession);
}

export function transformSession(session: u32): number {
  return +session.toString().replaceAll(',', '');
}

export function useBlocksUntilSessionStart(
  targetSession: number,
  config: ChainConfig,
): number | undefined {
  const latestBlock = useLatestBlock(config);
  const blocksPerSession = config.blocksPerSession;
  const knownSession = config.runtime?.session ?? 0;
  const knownBlock = config.runtime?.block ?? 0;

  return useMemo(() => {
    if (!latestBlock) {
      return;
    }

    return calculateBlocksUntilSessionStart(
      targetSession,
      latestBlock,
      blocksPerSession,
      knownSession,
      knownBlock,
    );
  }, [latestBlock, targetSession, blocksPerSession, knownSession, knownBlock]);
}

export function useSecondsUntilSessionStart(
  targetSession: number,
  config: ChainConfig,
): number | undefined {
  const blocks = useBlocksUntilSessionStart(targetSession, config);

  return useMemo(() => {
    if (isUndefined(blocks)) {
      return;
    }

    return blocks * config.blockTime;
  }, [blocks, config.blockTime]);
}
