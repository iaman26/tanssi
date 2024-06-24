import { Combobox, Text } from '@mantine/core';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { SudoAddressDropdownOption } from './SudoAddressDropdownOption';
import classes from './SudoEvmAddressEditTemplate.module.css';

interface Props {
  accounts: InjectedAccountWithMeta[];
  onClick: () => void;
}

export function SudoAddressDropdownOptions({ accounts, onClick }: Props) {
  return (
    <>
      {accounts?.map(({ address, meta }) => (
        <Combobox.Option
          key={address}
          value={address}
          my={4}
          px={5}
          className={classes.option}
          style={{ borderRadius: 5 }}
        >
          <SudoAddressDropdownOption
            key={address}
            address={address}
            meta={meta}
          />
        </Combobox.Option>
      ))}
      <Combobox.Option
        className={classes.option}
        value={''}
        pl={35}
        py={'xs'}
        style={{ borderRadius: 5 }}
        onClick={onClick}
      >
        <Text size="sm">{'Custom Address'}</Text>
      </Combobox.Option>
    </>
  );
}
