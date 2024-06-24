import {
  SpecRaw,
  TanssiGenesisState,
} from '@/server/router/file/file.interfaces';
import { ApiPromise } from '@polkadot/api';
import { bnToU8a, stringToHex, stringToU8a } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';
import Big from 'big.js';

// [(rewards * appchains) + (rewards * orchestratorChain)] / (orchestrators + collators)
export function getRewardsPerCollator(
  yearlyRewardsPerChain: Big,
  appchains: number,
  collatorsPerAppchain: number,
  orchestrators: number,
): Big {
  const collators = appchains * collatorsPerAppchain;

  return yearlyRewardsPerChain
    .mul(appchains)
    .add(yearlyRewardsPerChain)
    .div(collators + orchestrators);
}

export function getCollatorApy(
  yearlyRewardsPerCollator: Big,
  totalStake: Big,
  withStake: Big = new Big(0),
): Big {
  const yearlyRewardsForStaking = yearlyRewardsPerCollator.mul(0.8);

  const result = yearlyRewardsForStaking
    .div(totalStake.add(withStake))
    .mul(100);

  return result.lt(0) ? result.neg() : result;
}

export function chainSpecToContainerChainGenesisData(
  paraApi: ApiPromise,
  chainSpec: SpecRaw,
): TanssiGenesisState {
  const storage = chainSpecStorageToOnChainStorage(chainSpec.genesis);
  const extensions = '0x';
  const properties = chainSpecPropertiesToOnChainProperties(
    chainSpec.properties,
  );

  const g = paraApi.createType(
    'TpContainerChainGenesisDataContainerChainGenesisData',
    {
      storage: storage,
      name: stringToHex(chainSpec.name),
      id: stringToHex(chainSpec.id),
      forkId: null,
      extensions: extensions,
      properties: properties,
    },
  );

  return g.toPrimitive() as unknown as TanssiGenesisState;
}

export function chainSpecStorageToOnChainStorage(
  genesis: SpecRaw['genesis'],
): TanssiGenesisState['storage'] {
  return Object.entries(genesis.raw.top).map((keyValue) => {
    const [key, value] = keyValue;

    return {
      key: key,
      value: value,
    };
  });
}

export function chainSpecPropertiesToOnChainProperties(
  properties: SpecRaw['properties'],
): TanssiGenesisState['properties'] {
  return {
    tokenMetadata: {
      tokenSymbol: stringToHex(properties.tokenSymbol),
      ss58Format: properties.ss58Format,
      tokenDecimals: properties.tokenDecimals,
    },
    isEthereum: properties.isEthereum || false,
  };
}

export function appchainTankAddress(paraId: number | undefined): string {
  const seedBytes = stringToU8a('modlpy/serpayment');
  const paraIdBytes = bnToU8a(paraId, { bitLength: 32 });
  const combinedBytes = new Uint8Array([...seedBytes, ...paraIdBytes]);
  const address = blake2AsHex(combinedBytes, 256);

  return address;
}

export function getBlockProductionFreeTime(
  blockProductionCredits: number,
  collatorAssignmentCredits: number,
  blocksPerSession: number,
  blockTime: number,
): number {
  const blockCreditsBig = Big(blockProductionCredits);
  const sessionCreditsBig = Big(collatorAssignmentCredits);
  const blockCreditsSessions = blockCreditsBig.div(blocksPerSession);
  const freeBlocks = blockCreditsSessions.gt(sessionCreditsBig)
    ? sessionCreditsBig.mul(blocksPerSession).toNumber()
    : blockCreditsSessions.mul(blocksPerSession).toNumber();

  return freeBlocks * blockTime * 1000; // time in milliseconds
}

export function getBlockProductionBalanceTime(
  tankBalance: bigint,
  costPerSession: bigint,
  costPerBlock: bigint,
  blocksPerSession: number,
  blockTime: number,
): number {
  const balanceBig = Big(tankBalance.toString());
  const costPerSessionBig = Big(costPerSession.toString());
  const costPerBlockBig = Big(costPerBlock.toString());
  const sessionTotalCost = costPerSessionBig.add(
    costPerBlockBig.mul(blocksPerSession),
  );
  const sessionsCovered = balanceBig.div(sessionTotalCost).round(0);
  const sessionsCoveredCost = sessionsCovered.mul(sessionTotalCost);
  const blocks = balanceBig
    .minus(sessionsCoveredCost)
    .div(costPerBlockBig)
    .round(0);

  return sessionsCovered
    .mul(blocksPerSession)
    .add(blocks)
    .mul(blockTime)
    .mul(1000)
    .toNumber(); // time in milliseconds
}
