import * as S from '@/pages/Friend/FriendPage.style';
import Header from '@/components/molecules/Header/Header';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';

import notification from '@/assets/images/friend/notification.png';
import search from '@/assets/images/friend/search.png';
import FriendList from '@/components/organisms/FriendList/FriendList';
import { User } from '@/interfaces/User';

const FriendPage = () => {
  let mockData: Array<User>;

  mockData = [
    {
      userId: 'hellomin1',
      nickname: '잘생긴 토마토',
    },
    {
      userId: 'hellomin2',
      nickname: '잘생긴감자',
    },
    {
      userId: 'aaaaaaaaaaaa',
      nickname: '잘생긴 고구미',
    },
    {
      userId: 'minmin123',
      nickname: '멋쟁이 토마토',
    },
    {
      userId: 'hellobaemin',
      nickname: '못생긴 감자',
    },
    {
      userId: 'jaehyun',
      nickname: '못생긴 고구마',
    },
    {
      userId: 'chelim',
      nickname: '못생긴 고구마',
    },
    {
      userId: 'minjae',
      nickname: '못생긴 고구마',
    },
    {
      userId: 'junho',
      nickname: '못생긴 고구마',
    },
    {
      userId: 'minseo',
      nickname: '못생긴 고구마',
    },
  ];

  return (
    <S.FriendContainer>
      <Header text="띵구">
        <S.FriendHeaderIcons>
          <Image src={search} width={100} height={100} $unit="%" />
          <Image src={notification} width={100} height={100} $unit="%" />
        </S.FriendHeaderIcons>
      </Header>
      <S.NotificationNumberIcon>
        <Text size="small2" fontWeight="heavy" color="white">
          {mockData.length}
        </Text>
      </S.NotificationNumberIcon>
      <S.Sun />
      <FriendList friends={mockData} />
    </S.FriendContainer>
  );
};

export default FriendPage;
