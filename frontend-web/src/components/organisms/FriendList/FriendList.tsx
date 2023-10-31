import FriendBlock from '@/components/molecules/FriendBlock/FriendBlock';
import * as S from '@/components/organisms/FriendList/FriendList.style';
import { User } from '@/interfaces/user';

interface FriendListProps {
  friends: User[];
}

const FriendList = ({ friends }: FriendListProps) => {
  return (
    <S.FriendListContainer>
      {friends.map((user: User) => {
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
