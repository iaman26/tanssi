import { OffsiteLink } from '@/components/OffsiteLink';
import { Grid, Image, Text, UnstyledButton } from '@mantine/core';
import { modals } from '@mantine/modals';
import NextImage from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { ExtensionInfo } from '../../ConnectWalletModal.constants';
import classes from './ExtensionButton.module.css';

export interface Props {
  extension: ExtensionInfo;
  isSelected: boolean;
  isInstalled: boolean;
  onClick: (key: string) => void;
}

export function ExtensionButton({
  extension,
  isSelected,
  isInstalled,
  onClick,
}: Props) {
  const openModal = () =>
    modals.openConfirmModal({
      title: `${extension.name} is not installed`,
      children: (
        <Text mb={'xl'}>
          {`${extension.name} is either not installed or unavailable. Please ensure the extension is installed and refresh the page. Find the extension `}
          <OffsiteLink url={extension.url} label={'here'} withConfirm={false} />
        </Text>
      ),
      labels: {
        confirm: 'Open extension page',
        cancel: 'Close',
      },
      onConfirm: () =>
        window.open(extension.url, '_blank', 'noopener,noreferrer'),
    });

  return (
    <UnstyledButton
      className={classes.button}
      style={{ '--button-color': extension.color }}
      data-selected={isSelected}
      onClick={() => {
        if (isInstalled) {
          onClick(extension.key);
        } else {
          openModal();
        }
      }}
      data-testid={extension.key}
      data-installed={isInstalled}
    >
      <Grid align={'center'}>
        <Grid.Col span={2}>
          <Image
            component={NextImage}
            alt={extension.name}
            src={extension.logo}
            fit={'scale-down'}
            data-disabled={!isInstalled}
            style={{ with: 30, height: 30 }}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Text fw={500}>{extension.name}</Text>
        </Grid.Col>
        <Grid.Col span={2} ta={'center'}>
          <FaArrowRight size={10} />
        </Grid.Col>
      </Grid>
    </UnstyledButton>
  );
}
