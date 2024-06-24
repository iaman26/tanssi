import { OffsiteLink } from '@/components/OffsiteLink';
import { List, Stack, Text } from '@mantine/core';

export function TermsContent() {
  return (
    <Stack w={'95%'}>
      <Text>
        {
          "By connecting a wallet and accessing the Ecosystem Dapp (“Ecosystem Dapp”), you (“User”) hereby accept Moondance Labs LTD's (“Moondance Labs”) "
        }
        <OffsiteLink
          label={'Terms of Service'}
          url={'https://www.tanssi.network/terms-of-use'}
          withIcon={false}
          size={'md'}
        />
        {' and hereby represent and warrant to Moondance Labs that:'}
      </Text>
      <Text>
        {
          'User understands and agrees that your access and use of the Ecosystem Dapp is at your own risk. The Ecosystem Dapp is provided to User on an “as is” and “as available” basis without any warranties of any kind, and Moondance Labs expressly disclaims all warranties, including, but not limited to, the warranties of title, merchantability, non-infringement of third parties rights, fitness for a particular purpose, availability and security. Moondance Labs does not warrant that the Ecosystem Dapp will operate error-free or that the Ecosystem Dapp is free of computer viruses or similar contamination or destructive features. Moondance Labs reserves the right to change the format and features of the Ecosystem Dapp at any time.'
        }
      </Text>
      <Text fw={'bold'}>
        {'User is Eligible to access and use the Ecosystem Dapp'}
      </Text>
      <List type={'ordered'} c={'gray.5'} spacing={'xs'} withPadding>
        <List.Item>
          {
            'User is not trying to access the Ecosystem Dapp, Safe Dapp, the Tanssi Network, the Dancebox Test Network from, nor is User a citizen or resident of, any jurisdiction the laws of which prohibit or conflict with the holding, sale, or trading of DANCE tokens.'
          }
        </List.Item>
        <List.Item>
          {
            'User is not trying to access the Ecosystem Dapp, Safe Dapp the Dancebox Test Network from the United States and its Territories, Canada, Democratic People’s Republic of Korea, Cuba, Syria, Iran, People’s Republic of China or the following regions of Ukraine: Crimea, Donetsk, and Luhansk.'
          }
        </List.Item>
        <List.Item>
          {
            'User is not a “Prohibited Person”, meaning that it is not (i) a citizen or resident of a geographic area in which use of the Moondance Network or the DANCE tokens is prohibited by applicable law, decree, regulation, treaty, or administrative act, (ii) a citizen or resident of, or located in, a geographic area that is subject to U.S. or other applicable comprehensive country sanctions or embargoes, or (iii) an individual, or an individual employed by or associated with an entity, identified on the U.S. Department of Commerce’s Denied Persons, Unverified, or Entity List, the U.S. Department of Treasury’s Specially Designated Nationals or Blocked Persons or Foreign Sanctions Evaders Lists, or the U.S. Department of State’s Debarred Parties List or the sanctions lists adopted by the United Nations and the European Union to such extent such sanctions are extended by the UK Government to its Overseas Territories, as such lists may be amended from time to time; or (iv) a person who acts, directly or indirectly, for a senior foreign political figure, any member of a senior foreign political figure’s immediate family or any close associate of a senior foreign political figure. No person or entity that controls, is controlled by or under common control with, User is a Prohibited Person. No person having any direct or indirect beneficial interest in User is a Prohibited Person.'
          }
        </List.Item>
        <List.Item>
          {
            'User is not a U.S. Person as defined in Regulation S under the Securities Act of 1933, as amended (“U.S. Person”).'
          }
        </List.Item>
        <List.Item>
          {
            'User agrees not to offer or sell the DANCE tokens (or create or maintain any derivative position equivalent thereto) in the U.S. or to or for the account or benefit of a U.S. Person.'
          }
        </List.Item>
      </List>
      <Text>
        {
          'User understands that no regulatory authority has examined or approved the information set out in this Ecosystem Dapp, and the publication, distribution, or dissemination of information under this Ecosystem Dapp to User does not imply that the applicable laws, regulatory requirements, or rules have been complied with.'
        }
      </Text>
    </Stack>
  );
}
