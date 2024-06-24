import {
  TemplateFormOption,
  TemplateOption,
} from '@/components/pages/CreateAppChain/state/create.interfaces';
import {
  ChainData,
  EvmChainData,
  type SpecRaw,
  SubstrateChainData,
} from '@/server/router/file/file.interfaces';
import * as Sentry from '@sentry/nextjs';
import { atom } from 'jotai';
import { RESET, atomWithReset, atomWithStorage } from 'jotai/utils';

// Step
export const activeStepAtom = atomWithStorage<number>(
  'create-appchain-active-step',
  0,
);

// Template
export const selectedTemplateAtom = atomWithStorage<TemplateOption>(
  'create-appchain-selected-template',
  TemplateOption.Evm,
);

// Custom
export interface CustomFile {
  filename: string;
  content: string;
}

export const customFileAtom = atomWithStorage<CustomFile | undefined>(
  'create-appchain-custom-file',
  undefined,
);

export const isCustomAtom = atom((get) => {
  const selected = get(selectedTemplateAtom);

  return selected === TemplateOption.Custom;
});

// User chain data
export const chainDataStorageAtom = atomWithStorage<{
  [TemplateOption.Evm]?: EvmChainData;
  [TemplateOption.Substrate]?: SubstrateChainData;
}>('create-appchain-chain-data', {});

export const chainDataAtom = atom(
  (get) => {
    const selectedTemplate = get(selectedTemplateAtom);
    const dataStorage = get(chainDataStorageAtom);

    return selectedTemplate
      ? dataStorage[selectedTemplate as TemplateFormOption]
      : undefined;
  },
  (get, set, data: ChainData) => {
    const selectedTemplate = get(selectedTemplateAtom);
    const prev = get(chainDataStorageAtom);

    if (!selectedTemplate) return;

    set(chainDataStorageAtom, {
      ...prev,
      [selectedTemplate]: data,
    });
  },
);

// Files
export const specRawStorageAtom = atomWithReset<SpecRaw | undefined>(undefined);

export const specRawAtom = atom(
  (get) => {
    const isCustom = get(isCustomAtom);

    if (isCustom) {
      const custom = get(customFileAtom)?.content;

      try {
        return custom ? (JSON.parse(custom) as SpecRaw) : undefined;
      } catch (error) {
        console.error('Error parsing JSON:', error);

        Sentry.captureException(error, {
          extra: { custom },
        });

        return undefined;
      }
    }

    return get(specRawStorageAtom);
  },
  (_, set, specRaw: SpecRaw) => {
    set(specRawStorageAtom, specRaw);
  },
);

export const genesisStateAtom = atomWithReset<string | undefined>(undefined);
export const genesisWasmAtom = atomWithReset<string | undefined>(undefined);

// ParaId
export const hasOwnParaIdStorageAtom = atomWithStorage<boolean>(
  'create-appchain-has-own-para-id',
  false,
);

export const hasOwnParaIdAtom = atom(
  (get) => get(hasOwnParaIdStorageAtom),
  (get, set, hasOwnParaId: boolean) => {
    const reservedParaId = get(reservedParaIdAtom);

    if (!hasOwnParaId && reservedParaId) {
      set(paraIdAtom, reservedParaId);
    }

    set(hasOwnParaIdStorageAtom, hasOwnParaId);
  },
);

export const reservedParaIdAtom = atomWithStorage<number | undefined>(
  'create-appchain-reserved-para-id',
  undefined,
);

export const paraIdStorageAtom = atomWithStorage<number | undefined>(
  'create-appchain-para-id',
  undefined,
);

export const paraIdAtom = atom(
  (get) => {
    return get(paraIdStorageAtom) || undefined;
  },
  async (get, set, paraId: number) => {
    const hasOwnParaId = get(hasOwnParaIdAtom);

    if (!hasOwnParaId) {
      set(reservedParaIdAtom, paraId);
    }

    set(paraIdStorageAtom, paraId);
  },
);

// Demo register
export const protectedKeyStorageAtom = atomWithStorage<string | undefined>(
  'create-appchain-protected-key',
  undefined,
);

export interface PracticeCreateAppchain {
  areFilesGenerated: boolean;
  isRegisteredInRelay: boolean;
  isRegisteredInTanssi: boolean;
}

export const practiceCreateAppchainStorageAtom =
  atomWithStorage<PracticeCreateAppchain>('practice-create-appchain', {
    areFilesGenerated: false,
    isRegisteredInRelay: false,
    isRegisteredInTanssi: false,
  });

export const practiceCreateAppchainAtom = atom(
  (get) => get(practiceCreateAppchainStorageAtom),

  (get, set, data?: Partial<PracticeCreateAppchain>) => {
    const prev = get(practiceCreateAppchainStorageAtom);

    set(
      practiceCreateAppchainStorageAtom,
      data
        ? {
            ...prev,
            ...data,
          }
        : RESET,
    );
  },
);
