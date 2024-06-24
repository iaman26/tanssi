import { ftmwh, usdcwh, usdtwh } from '@moonbeam-network/xcm-config';
import { Asset } from '@moonbeam-network/xcm-types';
import { dancebox, flashbox, unit } from './config';

export interface XcmAsset {
  asset: Asset;
  decimals: number;
  // https://github.com/moondance-labs/tanssi/blob/2d8fc70d5efb890a5b35e387f4e8cdb95cc48441/test/helpers/assets.ts#L45
  // this defines how much the asset costs with respect to the
  // new asset
  // in this case, asset*2=native
  // that means that we will charge 0.5 of the native balance
  rate: bigint;
  // biome-ignore lint/suspicious/noExplicitAny: we can't provide a type for StagingXcmV3MultiLocation
  location: any;
}

const unitAsset: XcmAsset = {
  asset: unit,
  decimals: 12,
  rate: 2_000_000_000_000_000_000n,
  location: {
    parents: 1,
    interior: 'Here',
  },
};

export const XCM_ASSETS_BY_CHAIN: Record<string, XcmAsset[]> = {
  [flashbox.key]: [
    unitAsset,
    {
      asset: flashbox.asset,
      decimals: flashbox.decimals,
      rate: 2_000_000_000_000_000_000n,
      location: {
        parents: 1,
        interior: {
          X2: [
            {
              Parachain: 1000,
            },
            {
              PalletInstance: 10,
            },
          ],
        },
      },
    },
  ],
  [dancebox.key]: [
    unitAsset,
    {
      asset: dancebox.asset,
      decimals: dancebox.decimals,
      rate: 2_000_000_000_000_000_000n,
      location: {
        parents: 1,
        interior: {
          X2: [
            {
              Parachain: 1000,
            },
            {
              PalletInstance: 10,
            },
          ],
        },
      },
    },
    {
      asset: usdcwh,
      decimals: 6,
      rate: 2_000_000_000_000_000_000n,
      location: {
        parents: 1,
        interior: {
          X3: [
            {
              Parachain: 1000,
            },
            {
              PalletInstance: 48,
            },
            {
              AccountKey20: {
                key: '0xE5dE10C4b744bac6b783fAF8d9B9fDFF14Acc3c9',
              },
            },
          ],
        },
      },
    },
    {
      asset: usdtwh,
      decimals: 18,
      rate: 2_000_000_000_000_000_000n,
      location: {
        parents: 1,
        interior: {
          X3: [
            {
              Parachain: 1000,
            },
            {
              PalletInstance: 48,
            },
            {
              AccountKey20: {
                key: '0x7f5Ca1bcFb38fDF4c0E0646FCbf3FA87740ff65D',
              },
            },
          ],
        },
      },
    },
    {
      asset: ftmwh,
      decimals: 18,
      rate: 2_000_000_000_000_000_000n,
      location: {
        parents: 1,
        interior: {
          X3: [
            {
              Parachain: 1000,
            },
            {
              PalletInstance: 48,
            },
            {
              AccountKey20: {
                key: '0x566c1cebc6A4AFa1C122E039C4BEBe77043148Ee',
              },
            },
          ],
        },
      },
    },
  ],
};
