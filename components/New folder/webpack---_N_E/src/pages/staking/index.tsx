import { Staking } from '@/components/pages/Staking';
import { dancebox, danceboxForkConfig, isLocal, isTest, local } from '@/config';

export default function StakingPage() {
  const config = isTest ? danceboxForkConfig : isLocal ? local : dancebox;

  return <Staking config={config} />;
}
