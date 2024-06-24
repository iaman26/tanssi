import { OffsiteLink } from '@/components/OffsiteLink';
import { ActionIcon, Group } from '@mantine/core';
import { SOCIALS } from './Socials.constants';

interface Props {
  onClick?: () => void;
}

export function Socials({ onClick }: Props) {
  return (
    <Group gap={'xs'} w={'100%'} justify={'space-between'}>
      {SOCIALS.map(({ label, url, icon }) => (
        <OffsiteLink
          key={label}
          url={url}
          aria-label={label}
          withIcon={false}
          isWrapper
        >
          <ActionIcon
            title={label}
            variant={'filled'}
            radius={'md'}
            size={36}
            color={'dark.6'}
            onClick={onClick}
          >
            {icon}
          </ActionIcon>
        </OffsiteLink>
      ))}
    </Group>
  );
}
