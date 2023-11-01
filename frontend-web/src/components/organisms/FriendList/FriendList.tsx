import FriendBlock from '@/components/molecules/FriendBlock/FriendBlock';
import * as S from '@/components/organisms/FriendList/FriendList.style';
import { User } from '@/interfaces/user';

interface FriendListProps {
  friends: User[];
  $paddidngBottom?: number;
}

const FriendList = ({ friends, $paddidngBottom }: FriendListProps) => {
  return (
    <S.FriendListContainer $paddidngBottom={$paddidngBottom}>
      {friends.map((user: User) => {
        return (
          <FriendBlock
            key={user.userId}
            nickname={user.nickname}
            userId={user.userId}
            thingguStatus={user.thingguStatus ?? 'Y'}
          />
        );
      })}
    </S.FriendListContainer>
  );
};

export default FriendList;
