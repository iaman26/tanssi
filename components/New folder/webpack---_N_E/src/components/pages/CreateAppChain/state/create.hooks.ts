import {
  Step,
  TemplateOption,
} from '@/components/pages/CreateAppChain/state/create.interfaces';
import { useIsMounted } from '@/hooks/useIsMounted';
import { ChainData, type SpecRaw } from '@/server/router/file/file.interfaces';
import { useAddress } from '@/state/user';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import {
  CustomFile,
  activeStepAtom,
  chainDataAtom,
  chainDataStorageAtom,
  customFileAtom,
  genesisStateAtom,
  genesisWasmAtom,
  hasOwnParaIdAtom,
  hasOwnParaIdStorageAtom,
  isCustomAtom,
  paraIdAtom,
  paraIdStorageAtom,
  practiceCreateAppchainAtom,
  protectedKeyStorageAtom,
  reservedParaIdAtom,
  selectedTemplateAtom,
  specRawAtom,
  specRawStorageAtom,
} from './create.atoms';
import { STEPS } from './create.constants';

export interface CreateAppChainCustomState {
  isCustom: boolean;
  file: CustomFile | undefined;
  setFile: (file: CustomFile | undefined) => void;
}

export function useCreateAppChainCustom(): CreateAppChainCustomState {
  const isCustom = useAtomValue(isCustomAtom);
  const [file, setFile] = useAtom(customFileAtom);

  return {
    isCustom,
    file,
    setFile,
  };
}

export interface CreateAppChainState {
  activeStep: number;
  setActiveStep: (page: number) => void;
  getStepIndex: (step: Step) => number;
  getStepComponent: () => JSX.Element | undefined;
  nextStep: VoidFunction;
  prevStep: VoidFunction;
  onCreateAppchain: VoidFunction;
}

export function useCreateAppChainSteps(): CreateAppChainState {
  const address = useAddress();
  const router = useRouter();
  const isMounted = useIsMounted();
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);

  const getStepIndex = useCallback((step: Step): number => {
    return STEPS.findIndex((s) => s.name === step);
  }, []);

  const getStepComponent = useCallback((): JSX.Element | undefined => {
    if (isMounted) {
      return STEPS[activeStep].component;
    }
  }, [isMounted, activeStep]);

  const nextStep = useCallback((): void => {
    const lastStep = STEPS.length - 1;

    setActiveStep((current) => (current < lastStep ? current + 1 : current));
  }, [setActiveStep]);

  const prevStep = useCallback((): void => {
    activeStep > 0 ? setActiveStep((current) => current - 1) : router.push('/');
  }, [activeStep, router, setActiveStep]);

  const onCreateAppchain = useCallback((): void => {
    setActiveStep(address ? activeStep : getStepIndex(Step.Template));
  }, [activeStep, address, getStepIndex, setActiveStep]);

  return {
    activeStep,
    setActiveStep,
    nextStep,
    prevStep,
    getStepIndex,
    getStepComponent,
    onCreateAppchain,
  };
}

export interface UsedChainDataState {
  selectedTemplate: TemplateOption | undefined;
  setSelectedTemplate: (selected: TemplateOption) => void;
  chainData: ChainData | undefined;
  setChainData: (chainData: ChainData) => void;
}

export function useUserChainDataState(): UsedChainDataState {
  const [chainData, setChainData] = useAtom(chainDataAtom);
  const [selectedTemplate, setSelectedTemplate] = useAtom(selectedTemplateAtom);

  return {
    selectedTemplate,
    setSelectedTemplate,
    chainData,
    setChainData,
  };
}

export interface ChainFiles {
  specRaw: SpecRaw | undefined;
  setSpecRaw: (specRaw: SpecRaw) => void;
  genesisState: string | undefined;
  setGenesisState: (genesis: string) => void;
  genesisWasm: string | undefined;
  setGenesisWasm: (wasm: string) => void;
  haveFiles: boolean;
}

export function useCreateAppChainFiles(): ChainFiles {
  const [specRaw, setSpecRaw] = useAtom(specRawAtom);
  const [genesisWasm, setGenesisWasm] = useAtom(genesisWasmAtom);
  const [genesisState, setGenesisState] = useAtom(genesisStateAtom);

  const haveFiles = !!specRaw && !!genesisWasm && !!genesisState;

  return {
    specRaw,
    setSpecRaw,
    genesisWasm,
    setGenesisWasm,
    genesisState,
    setGenesisState,
    haveFiles,
  };
}

interface ChainInfo {
  reservedParaId: number | undefined;
  hasOwnParaId: boolean;
  setHasOwnParaId: (hasOwnParaId: boolean) => void;
  paraId: number | undefined;
  setParaId: (paraId: number) => void;
}

export function useCreateAppChainInfo(): ChainInfo {
  const [paraId, setParaId] = useAtom(paraIdAtom);
  const reservedParaId = useAtomValue(reservedParaIdAtom);
  const [hasOwnParaId, setHasOwnParaId] = useAtom(hasOwnParaIdAtom);

  return {
    reservedParaId,
    hasOwnParaId,
    setHasOwnParaId,
    paraId,
    setParaId,
  };
}

export const useCreateNewAppchain = (): VoidFunction => {
  const setSelectedTemplate = useSetAtom(selectedTemplateAtom);
  const setChainData = useSetAtom(chainDataStorageAtom);
  const setCustomFile = useSetAtom(customFileAtom);
  const setSpecRaw = useSetAtom(specRawStorageAtom);
  const setGenesisState = useSetAtom(genesisStateAtom);
  const setGenesisWasm = useSetAtom(genesisWasmAtom);
  const setReservedParaId = useSetAtom(reservedParaIdAtom);
  const setParaId = useSetAtom(paraIdStorageAtom);
  const setHasOwnParaId = useSetAtom(hasOwnParaIdStorageAtom);
  const { setActiveStep, getStepIndex: getStep } = useCreateAppChainSteps();

  const createNewAppchain = useCallback(() => {
    setChainData(RESET);
    setCustomFile(RESET);
    setSelectedTemplate(RESET);
    setReservedParaId(RESET);
    setSpecRaw(RESET);
    setGenesisState(RESET);
    setGenesisWasm(RESET);
    setParaId(RESET);
    setHasOwnParaId(RESET);
    setActiveStep(getStep(Step.Template));
  }, [
    getStep,
    setActiveStep,
    setChainData,
    setCustomFile,
    setGenesisState,
    setGenesisWasm,
    setParaId,
    setReservedParaId,
    setSelectedTemplate,
    setSpecRaw,
    setHasOwnParaId,
  ]);

  return createNewAppchain;
};

export interface CreateAppchainProtected {
  protectedKey: string | undefined;
  hasProtectedKey: boolean;
  isLoading: boolean;
}
export function useCreateAppchainProtectedKey(): CreateAppchainProtected {
  const searchParams = useSearchParams();
  const [protectedKey, setProtectedKey] = useAtom(protectedKeyStorageAtom);
  const isMounted = useIsMounted();

  useEffect(() => {
    const key = searchParams.get('protectedKey');

    if (key && key !== protectedKey) {
      setProtectedKey(key);
    }
  }, [searchParams, protectedKey, setProtectedKey]);

  return {
    protectedKey,
    hasProtectedKey: !!protectedKey,
    isLoading: !isMounted,
  };
}

export function usePracticeCreateAppchain() {
  const isMounted = useIsMounted();
  const { isRegisteredInRelay, isRegisteredInTanssi, areFilesGenerated } =
    useAtomValue(practiceCreateAppchainAtom);
  const setPracticeCreateAppchain = useSetAtom(practiceCreateAppchainAtom);

  return {
    isLoading: !isMounted,
    areFilesGenerated,
    isRegisteredInRelay,
    isRegisteredInTanssi,
    setPracticeCreateAppchain,
  };
}
