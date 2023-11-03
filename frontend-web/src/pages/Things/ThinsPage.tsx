import { Background } from '@/components/atoms/Background/Background.style';
import NoPATPage from '@/pages/Things/NoPAT/NoPATPage';
import { PATPage } from '@/pages/Things/PAT/PATPage';
import { userState } from '@/states/userStates';
import { useAtom } from 'jotai';
import * as S from '@/pages/Things/ThingsPage.styles';
import Header from '@/components/molecules/Header/Header';

const ThingsPage = () => {
  const [user, setUser] = useAtom(userState);
  return (
    <Background>
      <S.ThingsContainer>
        <Header text="띵즈" />
        {/* TODO: 페이지 개발 완 하고 다시 주석 풀고 아래 코드 지우기 */}
        {/* {user.patoken.length === 0 ? <NoPATPage /> : <PATPage />} */}
        {user.patoken.length !== 0 ? <NoPATPage /> : <PATPage />}
      </S.ThingsContainer>
    </Background>
  );
};

export default ThingsPage;
