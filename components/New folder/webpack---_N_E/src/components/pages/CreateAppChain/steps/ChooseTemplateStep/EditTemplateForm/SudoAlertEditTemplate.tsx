import { Alert } from '@/components/Alert';
import { useExtensions } from '@/state/polkadot-extension';

interface Props {
  sudoAddress: string;
}

export function SudoAlertEditTemplate({ sudoAddress }: Props) {
  const { checkAccountAvailability } = useExtensions();

  if (!sudoAddress || checkAccountAvailability(sudoAddress)) {
    return null;
  }

  return (
    <Alert mt={'xs'} textSize="xs" p={'xs'}>
      {
        "You'll need to import your Sudo or a Proxy account into a Substrate-supported wallet to manage your Appchain."
      }
    </Alert>
  );
}
