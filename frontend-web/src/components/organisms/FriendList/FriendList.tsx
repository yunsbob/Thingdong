import { FontWeightType, TextSize } from '@/components/atoms/Text/Text.styles';
import FriendBlock from '@/components/molecules/FriendBlock/FriendBlock';
import * as S from '@/components/organisms/FriendList/FriendList.style';
import { User } from '@/interfaces/user';
import theme from '@/styles/theme';

interface FriendListProps {
  friends: User[];
  /**
   * 단위 %
   */
  $height?: number;
  $paddidngBottom?: number;
  $backgroundColor?: string;
  $nickNameFontSize?: TextSize;
  $nickNameFontWeight?: FontWeightType;
  $userIdFontSize?: TextSize;
  $userIdFontWeight?: FontWeightType;
  $isPresent?: string;
}

const FriendList = ({
  friends,
  $paddidngBottom,
  $height = 100,
  $backgroundColor = theme.color.white,
  $nickNameFontSize = 'body2',
  $nickNameFontWeight = 'regular',
  $userIdFontSize = 'small1',
  $userIdFontWeight = 'bold',
  $isPresent = 'false'
}: FriendListProps) => {
  return (
    <S.FriendListContainer $paddidngBottom={$paddidngBottom} $height={$height}>
      {friends.map((user: User) => {
        return (
          <FriendBlock
            key={user.userId}
            nickname={user.nickname}
            userId={user.userId}
            $backgroundColor={$backgroundColor}
            thingguStatus={user.thingguStatus}
            $nickNameFontSize={$nickNameFontSize}
            $nickNameFontWeight={$nickNameFontWeight}
            $userIdFontSize={$userIdFontSize}
            $userIdFontWeight={$userIdFontWeight}
            $isPresent={$isPresent}
          />
        );
      })}
    </S.FriendListContainer>
  );
};

export default FriendList;
