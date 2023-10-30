import FriendBlock from '@/components/molecules/FriendBlock/FriendBlock';
import * as S from '@/components/organisms/FriendList/FriendList.style';
import { User } from '@/interfaces/User';

const FriendList = () => {
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
    <S.FriendListContainer>
      {mockData.map(user => {
        return (
          <FriendBlock
            key={user.userId}
            nickname={user.nickname}
            userId={user.userId}
          />
        );
      })}
    </S.FriendListContainer>
  );
};

export default FriendList;
