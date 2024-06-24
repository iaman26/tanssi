import { OffsiteLink } from '@/components/OffsiteLink';
import { NextStepButton } from '@/components/pages/CreateAppChain/NextStepButton';
import { useCreateAppChainCustom } from '@/components/pages/CreateAppChain/state/create.hooks';
import icon from '@/images/icons/json-dark-icon.svg';
import { Alert, Box, Group, Input, Pill, Stack, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { IconUpload, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
import classes from './UploadTemplate.module.css';

const MB = 2 * 1024 ** 2;

export function UploadTemplate() {
  const { file, setFile } = useCreateAppChainCustom();
  const [error, setError] = useState<string>();

  return (
    <Stack h={522}>
      <Alert title={'Warning'}>
        {`Please keep in mind that uploading a customized runtime is still in Beta. Certain parameters in the runtime you upload need to be configured to match Tanssi specifications which you can find in the `}
        <OffsiteLink
          url={
            'https://docs.tanssi.network/builders/deploy-manage/dapp/deploy/#custom'
          }
          label={'Tanssi Documentation page'}
          withIcon={false}
        />
        {'.'}
      </Alert>
      <Box className={classes.dropBox}>
        <Dropzone
          onDrop={([file]) => {
            setError(undefined);
            file
              .text()
              .then((text) => setFile({ filename: file.name, content: text }));
          }}
          onReject={([file]) => {
            setFile(undefined);
            setError(
              `Invalid file ${file.file.name}. ${file.errors[0].message}.`,
            );
          }}
          maxSize={MB}
          maxFiles={1}
          accept={['application/json']}
          className={classes.body}
          bg={'dark.7'}
        >
          <Group
            justify={'center'}
            align={'center'}
            gap={'lg'}
            className={classes.inner}
          >
            <Dropzone.Accept>
              <IconUpload className={classes.uploadIcon} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX className={classes.rejectIcon} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Image src={icon} alt={'json-icon'} width={50} height={50} />
            </Dropzone.Idle>

            <div>
              <Text size={'xl'} c={'bright'} inline>
                {'Drag here or click to select'}
              </Text>
              <Text size={'sm'} c={'bright'} inline mt={7}>
                {'Attach json raw spec file, it should not exceed 2MB'}
              </Text>
            </div>
          </Group>
        </Dropzone>
        {file && (
          <Pill
            mt={'md'}
            size={'xl'}
            onRemove={() => setFile(undefined)}
            withRemoveButton
          >
            {file.filename}
          </Pill>
        )}
        {error && (
          <Input.Error mt={'xs'} size={'md'}>
            {error}
          </Input.Error>
        )}
      </Box>

      <Group justify={'end'}>
        <NextStepButton disabled={!file} />
      </Group>
    </Stack>
  );
}
