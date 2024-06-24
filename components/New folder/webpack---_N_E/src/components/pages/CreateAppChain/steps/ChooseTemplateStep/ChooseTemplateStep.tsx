import { MainTitle } from '@/components/MainTitle';
import { TEMPLATES } from '@/components/pages/CreateAppChain/state/create.constants';
import {
  useCreateAppChainCustom,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { TemplateOption } from '@/components/pages/CreateAppChain/state/create.interfaces';
import { EditTemplateForm } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm';
import { UploadTemplate } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/UploadTemplate';
import { StepWrapper } from '@/components/pages/CreateAppChain/steps/StepWrapper';
import { useIsRegisteredInRelay } from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Tabs, Text, Title } from '@mantine/core';
import classes from './ChooseTemplateStep.module.css';

export function ChooseTemplateStep() {
  const config = useChainConfig();
  const isRegisteredInRelay = useIsRegisteredInRelay(config.relay);
  const { isCustom } = useCreateAppChainCustom();
  const { selectedTemplate, setSelectedTemplate } = useUserChainDataState();
  const { sm, isLoading } = useMediaQuery();

  if (isLoading) return null;

  return (
    <StepWrapper>
      <Box ta={'left'} w={'100%'}>
        <MainTitle>{'Template Configuration'}</MainTitle>

        <Text size={'xl'}>
          {'Select and configure the type of Appchain you want.'}
        </Text>
      </Box>

      <Tabs
        mt={'xl'}
        p={0}
        w={'100%'}
        color={'dark.7'}
        variant={'pills'}
        orientation={sm ? 'vertical' : 'horizontal'}
        value={selectedTemplate}
        onChange={(tab) => tab && setSelectedTemplate(tab as TemplateOption)}
        keepMounted={false}
        styles={{
          tabLabel: { whiteSpace: 'normal', width: '100%' },
          list: { gap: 20 },
          panel: { position: 'relative' },
        }}
      >
        <Tabs.List mr={{ base: 0, sm: 30 }} mb={{ base: 30, md: 0 }}>
          {TEMPLATES.map(({ name, description, color, logo }) => (
            <Tabs.Tab
              key={name}
              c={'white'}
              w={sm ? 285 : '100%'}
              p={'sm'}
              pl={'md'}
              className={classes.tab}
              value={name}
              disabled={!isCustom && isRegisteredInRelay}
              style={{
                backgroundColor: color,
                flexGrow: sm ? 0 : 1,
                backgroundImage: `url(/images/${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '85%',
              }}
              data-testid={`template-tab-${name}`}
            >
              <Title order={3} size={36}>
                {name === TemplateOption.Evm ? 'EVM' : name}
              </Title>
              <Text size={'lg'} fw={300}>
                {description}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panel value={TemplateOption.Evm}>
          <EditTemplateForm selectedTemplate={TemplateOption.Evm} />
        </Tabs.Panel>

        <Tabs.Panel value={TemplateOption.Substrate}>
          <EditTemplateForm selectedTemplate={TemplateOption.Substrate} />
        </Tabs.Panel>

        <Tabs.Panel value={'Custom'}>
          <UploadTemplate />
        </Tabs.Panel>
      </Tabs>
    </StepWrapper>
  );
}
