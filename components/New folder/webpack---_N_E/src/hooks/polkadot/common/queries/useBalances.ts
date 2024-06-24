import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { BaseChainConfig, ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';
import { useAddress } from '@/state/user';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import {
  FrameSystemAccountInfo,
  PalletBalancesBalanceLock,
} from '@polkadot/types/lookup';
import Big from 'big.js';
import { useMemo } from 'react';
import { useIsRegisteredInRelay } from './useIsRegisteredInRelay';
import { useIsRegisteredInTanssi } from './useIsRegisteredInTanssi';

interface SystemAccountTransform {
  total: bigint;
  free: bigint;
}

interface LocksTransform {
  lockedStaking: bigint;
  lockedDemocracy: bigint;
}

export interface Balances extends SystemAccountTransform, LocksTransform {}

function transformSystemAccount(
  value: FrameSystemAccountInfo,
): SystemAccountTransform {
  const free = value.data.free.toBigInt();
  const reserved = value.data.reserved.toBigInt();
  const frozen = value.data.frozen.toBigInt();

  return {
    total: free + reserved,
    free: free - frozen,
  };
}

function transformLocks(value: PalletBalancesBalanceLock[]): LocksTransform {
  const locks = {
    lockedStaking: 0n,
    lockedDemocracy: 0n,
  };

  value.forEach((lock) => {
    if (lock.id.eq('stkngdel')) locks.lockedStaking = lock.amount.toBigInt();
    if (lock.id.eq('democrac')) locks.lockedDemocracy += lock.amount.toBigInt();
    if (lock.id.eq('pyconvot')) locks.lockedDemocracy += lock.amount.toBigInt();
  });

  return locks;
}

export function useBalances(
  address: string | undefined,
  ws: string | undefined,
): Balances | undefined {
  const api = useApi(ws);

  const accountInfo = useApiCall(
    api?.query.system.account,
    [address],
    transformSystemAccount,
  );
  const locks = useApiCall(
    api?.query.balances.locks,
    [address],
    transformLocks,
  );

  return useMemo(() => {
    if (!accountInfo || !locks) {
      return undefined;
    }

    return { ...accountInfo, ...locks };
  }, [accountInfo, locks]);
}

export function useFreeBalance(
  address: string | undefined,
  config: BaseChainConfig | undefined,
): AssetAmount | undefined {
  const balances = useBalances(address, config?.ws);

  return useMemo(() => {
    if (!balances || !config) {
      return undefined;
    }

    return config.getAssetAmount(balances.free);
  }, [balances, config]);
}

export function useTanssiFreeBalance(
  config: ChainConfig | undefined,
): AssetAmount | undefined {
  const address = useAddress();

  return useFreeBalance(address, config);
}

export function useProxiedFreeBalance(
  config: ChainConfig | undefined,
): AssetAmount | undefined {
  const address = useConnectedAddressOrProxied();

  return useFreeBalance(address, config);
}

export function useRelayFreeBalance(): AssetAmount | undefined {
  const address = useAddress();
  const config = useChainConfig();

  return useFreeBalance(address, config.relay);
}

export interface HasEnoughBalances {
  hasEnoughTanssiBalance?: boolean;
  hasEnoughRelayBalance?: boolean;
  hasEnoughBalance?: boolean;
  minTanssiBalance?: Big;
  minRelayBalance?: Big;
}

export function useHasEnoughBalances(): HasEnoughBalances {
  const config = useChainConfig();
  const balance = useTanssiFreeBalance(config);
  const relayBalance = useRelayFreeBalance();
  const isRegisteredInTanssi = useIsRegisteredInTanssi(config);
  const isRegisteredInRelay = useIsRegisteredInRelay(config.relay);
  const { hasOwnParaId, paraId } = useCreateAppChainInfo();

  const minTanssiBalance = isRegisteredInTanssi
    ? Big(0)
    : config.fees.register.toBigDecimal();
  const minRelayBalance = isRegisteredInRelay
    ? Big(0)
    : config.relay.fees.register
        .toBigDecimal()
        .plus(
          hasOwnParaId || paraId
            ? 0
            : config.relay.fees.reserveParaId.toBigDecimal(),
        );

  const haveEnoughTanssiBalance =
    balance && balance.toBigDecimal().gte(minTanssiBalance);
  const haveEnoughRelayBalance =
    relayBalance && relayBalance.toBigDecimal().gte(minRelayBalance);
  const haveEnoughBalance = haveEnoughTanssiBalance && haveEnoughRelayBalance;

  return {
    hasEnoughTanssiBalance: haveEnoughTanssiBalance,
    hasEnoughRelayBalance: haveEnoughRelayBalance,
    hasEnoughBalance: haveEnoughBalance,
    minTanssiBalance,
    minRelayBalance,
  };
}
