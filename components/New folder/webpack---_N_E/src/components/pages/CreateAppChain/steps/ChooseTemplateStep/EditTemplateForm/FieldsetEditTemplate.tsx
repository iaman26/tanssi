import { FieldsetEditTemplateAdvanced } from '@/components/pages/CreateAppChain/steps/ChooseTemplateStep/EditTemplateForm/FieldsetEditTemplateAdvanced';
import { Box, Fieldset, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  legend: string;
  disabled?: boolean;
  description?: string;
}

export function FieldsetEditTemplate({
  legend,
  description,
  disabled,
  children,
}: Props) {
  return (
    <Box bg={'dark.8'} p={{ base: 15, sm: 30 }} style={{ borderRadius: 20 }}>
      <Fieldset
        disabled={disabled}
        legend={legend}
        pos={'relative'}
        styles={{
          legend: {
            marginBottom: 0,
            fontSize: 24,
            fontWeight: 700,
            color: 'white',
          },
        }}
      >
        <Text mb={'lg'} fs={'italic'} size={'sm'} c={'gray.6'}>
          {description}
        </Text>
        {children}
      </Fieldset>
    </Box>
  );
}

FieldsetEditTemplate.Advanced = FieldsetEditTemplateAdvanced;
