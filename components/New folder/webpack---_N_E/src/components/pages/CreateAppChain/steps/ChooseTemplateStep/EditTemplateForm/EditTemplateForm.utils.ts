import { INITIAL_TEMPLATE_TEST_VALUES } from '@/components/pages/CreateAppChain/state/create.constants';
import { TemplateOption } from '@/components/pages/CreateAppChain/state/create.interfaces';
import { UseFormReturnType } from '@mantine/form';

export function fillForm(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  form: UseFormReturnType<any, any>,
  isEthereum: boolean,
): void {
  form.setValues(
    INITIAL_TEMPLATE_TEST_VALUES[
      isEthereum ? TemplateOption.Evm : TemplateOption.Substrate
    ],
  );
}
