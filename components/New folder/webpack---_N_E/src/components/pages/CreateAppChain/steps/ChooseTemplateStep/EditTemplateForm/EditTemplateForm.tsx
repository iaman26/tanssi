import { AddressInput } from '@/components/AddressInput';
import { IdentityIcon } from '@/components/IndentityIcon';
import { InputLabelRequired } from '@/components/InputLabelRequired';
import { NextStepButton } from '@/components/pages/CreateAppChain/NextStepButton';
import { INITIAL_TEMPLATE_VALUES } from '@/components/pages/CreateAppChain/state/create.constants';
import { useUserChainDataState } from '@/components/pages/CreateAppChain/state/create.hooks';
import { TemplateOption } from '@/components/pages/CreateAppChain/state/create.interfaces';
import { fillForm } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/EditTemplateForm.utils';
import { FieldsetEditTemplate } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/FieldsetEditTemplate';
import { SudoAlertEditTemplate } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/SudoAlertEditTemplate';
import { SudoEvmAddressEditTemplate } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/SudoEvmAddressEditTemplate';
import { FormBalanceTooltip } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/Tooltip/FormBalanceTooltip';
import { FormChainIdTooltip } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/Tooltip/FormChainIdTooltip';
import { ChainKey } from '@/config';
import { env } from '@/env.mjs';
import { useIsRegisteredInRelay } from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ChainData } from '@/server/router/file/file.interfaces';
import {
  evmChainDataSchema,
  substrateChainDataSchema,
} from '@/server/router/file/schemas/chainData.schema';
import {
  Box,
  Button,
  Group,
  NumberInput,
  Stack,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useForm, zodResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddButton } from './AddButton';
import { RemoveActionIcon } from './RemoveActionIcon';

const isLocal = env.NEXT_PUBLIC_DEPLOYMENT === 'local';

interface Props {
  selectedTemplate: TemplateOption.Evm | TemplateOption.Substrate;
}

export function EditTemplateForm({ selectedTemplate }: Props) {
  const config = useChainConfig();
  const { replace } = useRouter();
  const isRegisteredInRelay = useIsRegisteredInRelay(config.relay);
  const { chainData, setChainData } = useUserChainDataState();
  const { base, lg, isLoading } = useMediaQuery();

  const isEthereum = selectedTemplate === TemplateOption.Evm;
  const schema = isEthereum ? evmChainDataSchema : substrateChainDataSchema;
  const initialValues = INITIAL_TEMPLATE_VALUES[selectedTemplate];

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: chainData || initialValues,
    validateInputOnChange: true,
  });

  useEffect(() => {
    setChainData(form.values as ChainData);
  }, [setChainData, form.values]);

  const openRef = useRef<() => void>(null);

  const isFormValid = form.isValid();

  if (isLoading) return null;

  return (
    <>
      {isLocal && (
        <Button
          color={'red'}
          pos={'absolute'}
          right={0}
          top={-50}
          onClick={() => fillForm(form, isEthereum)}
        >
          {'Fill the form'}
        </Button>
      )}
      <form>
        <Stack gap={'xs'}>
          <FieldsetEditTemplate
            legend={'Appchain Details'}
            description={'Specify your Appchain details.'}
            disabled={isRegisteredInRelay}
          >
            <Group>
              <Dropzone
                openRef={openRef}
                onDrop={([file]) => {
                  file.arrayBuffer().then((buf) => {
                    const iconImageBase64 = window.btoa(
                      String.fromCharCode(...new Uint8Array(buf)),
                    );

                    setChainData({
                      ...(form.values as ChainData),
                      iconImage: {
                        type: file.type,
                        content: iconImageBase64,
                      },
                    });
                  });
                }}
                onReject={([fileRejection]) => {
                  const [error] = fileRejection.errors;

                  const errorMessage =
                    error.code === 'file-too-large'
                      ? 'File is larger than 100 KB'
                      : 'Unknown error';

                  showNotification({
                    message: errorMessage,
                    color: 'red',
                  });
                }}
                accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
                maxFiles={1}
                multiple={false}
                maxSize={0.1 * 1024 ** 2} // 100 KB
                display={'none'}
              />

              <UnstyledButton onClick={() => openRef.current?.()}>
                <IdentityIcon
                  value={form.values.name}
                  iconImage={chainData?.iconImage}
                  pos={'absolute'}
                  top={-35}
                  right={0}
                  bg={'dark.6'}
                  withUpload
                  style={{ borderRadius: '20%' }}
                />
              </UnstyledButton>
            </Group>

            <Group
              gap={'xs'}
              align={'start'}
              wrap={'nowrap'}
              style={{ flexDirection: base ? 'column' : 'row' }}
            >
              <TextInput
                w={'100%'}
                label={
                  <InputLabelRequired isValid={form.isValid('name')}>
                    {'Name'}
                  </InputLabelRequired>
                }
                placeholder={'Chain name'}
                {...form.getInputProps('name')}
              />
              {isEthereum && (
                <NumberInput
                  w={'100%'}
                  hideControls
                  allowNegative={false}
                  allowDecimal={false}
                  label={
                    <InputLabelRequired isValid={form.isValid('evmChainId')}>
                      {'Chain ID'}
                    </InputLabelRequired>
                  }
                  placeholder={'13765'}
                  rightSection={<FormChainIdTooltip />}
                  {...form.getInputProps('evmChainId')}
                />
              )}
            </Group>
            {config.key !== ChainKey.Flashbox && (
              <Group
                gap={'xs'}
                align={'start'}
                wrap={'nowrap'}
                style={{ flexDirection: base ? 'column' : 'row' }}
                my={'xs'}
              >
                <TextInput
                  w={'100%'}
                  label={'URL'}
                  placeholder={'https://example.com'}
                  {...form.getInputProps('url')}
                />
                <TextInput
                  w={'100%'}
                  label={
                    <Image
                      src={'/images/logo_x.svg'}
                      height={15}
                      width={15}
                      alt={'X logo'}
                    />
                  }
                  placeholder={'Enter your appchain X account'}
                  {...form.getInputProps('x')}
                />
              </Group>
            )}
          </FieldsetEditTemplate>

          <FieldsetEditTemplate
            legend={'Gas Token'}
            description={
              'Set up your token details for your chain and dynamics.'
            }
            disabled={isRegisteredInRelay}
          >
            <Group
              gap={'xs'}
              align={'start'}
              wrap={'nowrap'}
              style={{ flexDirection: base ? 'column' : 'row' }}
            >
              <NumberInput
                w={'100%'}
                hideControls
                label={
                  <InputLabelRequired isValid={form.isValid('tokenDecimals')}>
                    {'Token Decimals'}
                  </InputLabelRequired>
                }
                placeholder={'12'}
                {...form.getInputProps('tokenDecimals')}
                disabled={isEthereum}
              />
              <TextInput
                w={'100%'}
                label={
                  <InputLabelRequired isValid={form.isValid('tokenSymbol')}>
                    {'Token Symbol'}
                  </InputLabelRequired>
                }
                placeholder={'DOT'}
                {...form.getInputProps('tokenSymbol')}
              />
              {!isEthereum && (
                <NumberInput
                  w={'100%'}
                  withAsterisk
                  hideControls
                  label={'ss58Format'}
                  placeholder={'42'}
                  {...form.getInputProps('ss58Format')}
                />
              )}
            </Group>

            <FieldsetEditTemplate.Advanced
              description={'Configure EIP-1559 dynamics'}
            >
              <Group align={'start'} grow>
                <NumberInput
                  hideControls
                  allowNegative={false}
                  allowDecimal={false}
                  label={
                    <InputLabelRequired isValid={form.isValid('baseFeePerGas')}>
                      {'Min base fee (Gwei)'}
                    </InputLabelRequired>
                  }
                  placeholder={'1'}
                  {...form.getInputProps('baseFeePerGas')}
                />
                <NumberInput
                  hideControls
                  allowNegative={false}
                  label={
                    <InputLabelRequired isValid={form.isValid('elasticity')}>
                      {'Max base fee change (%)'}
                    </InputLabelRequired>
                  }
                  placeholder={'12.5'}
                  {...form.getInputProps('elasticity')}
                />
              </Group>
            </FieldsetEditTemplate.Advanced>
          </FieldsetEditTemplate>

          <FieldsetEditTemplate
            disabled={isRegisteredInRelay}
            legend={'Accounts'}
            description={
              'The SUDO address gives admin rights to manage your Appchain, it is used for conducting upgrades and changing the state of the chain at the protocol level.'
            }
          >
            <Group
              gap={'xs'}
              wrap={'nowrap'}
              align={'start'}
              mr={{ base: 0, xs: form.values.balances.length > 0 ? 36 : 0 }}
              style={{ flexDirection: lg ? 'row' : 'column' }}
            >
              {isEthereum ? (
                <SudoEvmAddressEditTemplate
                  form={form}
                  value={form.values.sudoAddress}
                  w={{ base: '100%', lg: '70%' }}
                  isEthereum={isEthereum}
                />
              ) : (
                <AddressInput
                  w={{ base: '100%', lg: '70%' }}
                  label={
                    <InputLabelRequired isValid={form.isValid('sudoAddress')}>
                      {'Sudo'}
                    </InputLabelRequired>
                  }
                  placeholder={'Enter your sudo address'}
                  isEthereum={isEthereum}
                  {...form.getInputProps('sudoAddress')}
                />
              )}
              <NumberInput
                w={'100%'}
                hideControls
                placeholder={'Your balance'}
                label={
                  <InputLabelRequired isValid={form.isValid('sudoBalance')}>
                    {'Balance'}
                  </InputLabelRequired>
                }
                rightSection={<FormBalanceTooltip />}
                style={{ flex: 1 }}
                {...form.getInputProps('sudoBalance')}
              />
            </Group>

            <SudoAlertEditTemplate sudoAddress={form.values.sudoAddress} />

            <FieldsetEditTemplate.Advanced
              description={
                'Distribute and allocate balances to address of your gas token'
              }
            >
              {form.values.balances.map(({ id }, index) => (
                <Group
                  key={id}
                  align={'center'}
                  wrap={'nowrap'}
                  preventGrowOverflow={false}
                  grow
                  gap={'xs'}
                  my={{ base: 'xs', lg: 0 }}
                >
                  <Group
                    gap={'xs'}
                    wrap={'nowrap'}
                    style={{ flexDirection: lg ? 'row' : 'column' }}
                  >
                    <AddressInput
                      isEthereum={isEthereum}
                      w={{ base: '100%', lg: '70%' }}
                      style={{ flexShrink: 'none' }}
                      label={index === 0 || !lg ? 'Address' : ''}
                      data-testid={`account-address-${index}`}
                      {...form.getInputProps(`balances.${index}.address`)}
                    />
                    <NumberInput
                      hideControls
                      w={'100%'}
                      placeholder={'100000000000'}
                      label={index === 0 || !lg ? 'Balance' : ''}
                      rightSection={<FormBalanceTooltip />}
                      data-testid={`account-balance-${index}`}
                      style={{ flex: 1 }}
                      {...form.getInputProps(`balances.${index}.balance`)}
                    />
                  </Group>
                  <RemoveActionIcon
                    maw={10}
                    mt={index === 0 && lg ? 30 : 4}
                    onClick={() => form.removeListItem('balances', index)}
                    data-testid={`account-remove-${index}`}
                  />
                </Group>
              ))}

              <Box>
                <AddButton
                  onClick={() =>
                    form.insertListItem('balances', {
                      id: uuidv4(),
                      address: '',
                      balance: '',
                    })
                  }
                >
                  {'Add address'}
                </AddButton>
              </Box>
            </FieldsetEditTemplate.Advanced>
          </FieldsetEditTemplate>

          {'precompiles' in form.values && (
            <FieldsetEditTemplate
              disabled={isRegisteredInRelay}
              legend={'Genesis Smart Contracts'}
              description={
                'Set up your contracts at genesis, the following contracts are added by default.'
              }
            >
              <Stack gap={'md'}>
                {form.values.precompiles.map((account, index) => (
                  <Group
                    key={account.id}
                    gap={'xs'}
                    align={'center'}
                    wrap={'nowrap'}
                  >
                    <Stack w={'95%'} gap={'xs'}>
                      <AddressInput
                        isEthereum
                        label={'Contract Address'}
                        style={{ flexShrink: 'none' }}
                        {...form.getInputProps(`precompiles.${index}.address`)}
                      />
                      <TextInput
                        maw={'100%'}
                        placeholder={'0'}
                        label={'Bytecode'}
                        {...form.getInputProps(`precompiles.${index}.bytecode`)}
                      />
                    </Stack>
                    <RemoveActionIcon
                      maw={10}
                      mt={20}
                      onClick={() => {
                        form.removeListItem('precompiles', index);
                      }}
                    />
                  </Group>
                ))}

                <Box>
                  <AddButton
                    mt={form.values.precompiles.length === 0 ? 'xs' : 0}
                    onClick={() => {
                      form.insertListItem('precompiles', {
                        id: uuidv4(),
                        address: '',
                        bytecode: '',
                      });
                    }}
                  >
                    {'Add contract'}
                  </AddButton>
                </Box>
              </Stack>
            </FieldsetEditTemplate>
          )}

          <Group justify={'space-between'} align={'start'}>
            <Button
              variant={'light'}
              leftSection={<IconArrowLeft size={15} />}
              onClick={() => replace('/create')}
            >
              {'Back'}
            </Button>

            <NextStepButton
              tooltipLabel={'Please fill all required fields'}
              isTooltipDisabled={isFormValid}
              disabled={!isFormValid}
              miw={124}
            />
          </Group>
        </Stack>
      </form>
    </>
  );
}
