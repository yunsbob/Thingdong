import * as S from '@/pages/Friend/FriendPage.style';
import Header from '@/components/molecules/Header/Header';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';

import notification from '@/assets/images/friend/notification.png';
import search from '@/assets/images/friend/search.png';
import FriendList from '@/components/organisms/FriendList/FriendList';
import { useGetFriends } from '@/apis/Friend/Queries/useGetFriends';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { Background } from '@/components/atoms/Background/Background.style';

const FriendPage = () => {
  console.log(process.env.REACT_APP_SERVER_URL);
  const { thingguAlarmList, thingguList } = useGetFriends();

  const navigate = useNavigate();

  return (
    <Background>
      <S.FriendContainer>
        <Header text="띵구">
          <S.FriendHeaderIcons>
            <Image
              src={search}
              width={100}
              height={100}
              $unit="%"
              onClick={() => navigate(PATH.FRIEND_SEARCH)}
            />
            <Image src={notification} width={100} height={100} $unit="%" />
          </S.FriendHeaderIcons>
        </Header>
        <S.NotificationNumberIcon>
          <Text size="small2" fontWeight="heavy" color="white">
            {thingguAlarmList.length}
          </Text>
        </S.NotificationNumberIcon>
        <S.Sun />
        <FriendList friends={thingguList} />
      </S.FriendContainer>
    </Background>
  );
};

export default FriendPage;