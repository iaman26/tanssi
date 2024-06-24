import { OffsiteLink } from '@/components/OffsiteLink';
import acurast from '@/images/logo_acurast.svg';
import phala from '@/images/logo_phala.svg';
import { Box, Group, Paper, Text, Title } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';

export interface Tool {
  logo: StaticImageData;
  name: string;
  description: string;
  color: string;
  url: string;
}

const tools: Tool[] = [
  {
    logo: phala,
    name: 'Phala Network',
    description:
      "Use Phala's off-chain computing network to get reliable Ethereum Mainnet Chainlink Oracle token price feed data.",
    color: 'rgba(205, 250, 80, 0.1)',
    url: 'https://docs.tanssi.network/builders/tooling/oracles/phala/',
  },
  {
    logo: acurast,
    name: 'Acurast',
    description:
      "Use Acurast's decentralized serverless cloud to get reliable price feed token asset data.",
    color: `radial-gradient(98.76% 865.83% at 98.76% 100%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 39, 202, 0.3) 100%), linear-gradient(0deg, #0E121C, #0E121C)`,
    url: 'https://docs.tanssi.network/builders/tooling/oracles/acurast/',
  },
];

export function Tooling() {
  return (
    <Box>
      <Title order={2} size={24} c={'white'} mb={'md'}>
        {'Tooling'}
      </Title>
      <Text>
        {
          'The following is a list of tools that have been integrated on the Tanssi Demo Appchain, all services can be leveraged on your own Appchain.'
        }
      </Text>
      {tools.map((tool) => (
        <Paper key={tool.name} mt={'xs'} p={'xl'} bg={tool.color}>
          <Group>
            <Image src={tool.logo} alt={tool.name} width={53} />
            <Box w={100}>
              {tool.name.split(' ').map((word) => (
                <Text fz={'lg'} key={word}>
                  {word}
                </Text>
              ))}
            </Box>
            <Box ml={'lg'} maw={'65%'}>
              <Text fz={'lg'}>{tool.description}</Text>
            </Box>
            <OffsiteLink
              style={{ alignSelf: 'flex-end' }}
              label={'Continue →'}
              url={tool.url}
              c={'white'}
              fw={'bold'}
              fz={'md'}
              ml={'auto'}
              withIcon={false}
            />
          </Group>
        </Paper>
      ))}
    </Box>
  );
}
