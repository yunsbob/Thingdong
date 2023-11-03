import { Background } from '@/components/atoms/Background/Background.style';
import ThingsPAT from '@/pages/Things/PAT/ThingsPAT';
import { userState } from '@/states/userStates';
import { useAtom } from 'jotai';

const ThingsPage = () => {
  const [user, setUser] = useAtom(userState);
  console.log(user);
  return (
    <Background>{user.patoken.length === 0 ? <ThingsPAT /> : <></>}</Background>
  );
};

export default ThingsPage;
