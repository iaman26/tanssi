import { SocialLoginModalWrapper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/SocialLoginModalWrapper';
import { useContactModalActiveTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { ContactModalTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { Tabs } from '@mantine/core';

import { Done } from './Done';
import { Field } from './Field';
import { Info } from './Info';
import { Occupation } from './Occupation';

const panels = [
  {
    value: ContactModalTab.Info,
    content: <Info />,
    goBack: false,
  },
  {
    value: ContactModalTab.Occupation,
    content: <Occupation />,
    goBack: true,
  },
  {
    value: ContactModalTab.Field,
    content: <Field />,
    goBack: true,
  },
  {
    value: ContactModalTab.Done,
    content: <Done />,
    goBack: false,
  },
];

export function ContactModal() {
  const { activeTab, setActiveTab } = useContactModalActiveTab();

  return (
    <Tabs value={activeTab} keepMounted={false}>
      {panels.map((panel, index) => (
        <Tabs.Panel key={panel.value} value={panel.value}>
          <SocialLoginModalWrapper
            goBack={
              panel.goBack && activeTab !== ContactModalTab.Info
                ? () => setActiveTab(panels[index - 1].value)
                : undefined
            }
          >
            {panel.content}
          </SocialLoginModalWrapper>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
