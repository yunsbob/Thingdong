import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/components/molecules/FriendBlock/FriendBlock.styles';

import redFace from '@/assets/images/friend/face-red.png';
import greenFace from '@/assets/images/friend/face-green.png';
import blueFace from '@/assets/images/friend/face-blue.png';
import deleteIcon from '@/assets/images/friend/delete.png';
import addIcon from '@/assets/images/friend/add.png';
import confirmIcon from '@/assets/images/friend/alarm/confirm.png';
import cancelIcon from '@/assets/images/friend/alarm/cancel.png';

import { User } from '@/interfaces/user';
import theme from '@/styles/theme';
import { FontWeightType, TextSize } from '@/components/atoms/Text/Text.styles';
import { useDeleteFriend } from '@/apis/Friend/Mutations/useDeleteFriend';
import { useRequestFriend } from '@/apis/Friend/Mutations/useRequestFriend';
import { useAcceptFriend } from '@/apis/Friend/Mutations/useAcceptFriend';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

interface FriendBlockProps extends User {
  $backgroundColor?: string;
  $nickNameFontSize?: TextSize;
  $nickNameFontWeight?: FontWeightType;
  $userIdFontSize?: TextSize;
  $userIdFontWeight?: FontWeightType;
  $isPresent?: string;
  onClick?: () => void;
}

const FriendBlock = ({
  nickname,
  userId,
  thingguStatus,
  $backgroundColor = theme.color.white,
  $nickNameFontSize,
  $nickNameFontWeight,
  $userIdFontSize,
  $userIdFontWeight,
  $isPresent,
  onClick
}: FriendBlockProps) => {
  const imageSrcs = [redFace, greenFace, blueFace];

  const deleteFriendMutation = useDeleteFriend();
  const deleteThinggu = (userId: string) => {
    deleteFriendMutation.mutate(userId);
  };

  const requestFriendMutation = useRequestFriend();
  const requestThinggu = (userId: string) => {
    requestFriendMutation.mutate(userId);
  };

  const acceptFriendMutation = useAcceptFriend();
  const acceptThinggu = (userId: string) => {
    acceptFriendMutation.mutate(userId);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // localStorage.setItem("friendId", userId)
    navigate(PATH.FRIENDROOM, { state: { userId } })
  }

  return (
    <S.FriendBlockContainer $backgroundColor={$backgroundColor} onClick={handleClick}>
      <S.FriendBlockProfile>
        <Image src={imageSrcs[userId.length % 3]} width={3} height={3} />
        <S.FriendBlockText
          size={$nickNameFontSize}
          fontWeight={$nickNameFontWeight}
          $ellipse={$nickNameFontSize === 'body3' ? 'true' : 'false'}
        >
          {nickname}
        </S.FriendBlockText>
        <S.FriendBlockText
          size={$userIdFontSize}
          fontWeight={$userIdFontWeight}
          color="grey1"
        >
          @{userId}
        </S.FriendBlockText>
      </S.FriendBlockProfile>
      {thingguStatus === 'N' ? (
        /* 띵구가 아닌 경우 */
        <Image
          src={addIcon}
          width={1.3}
          height={1.3}
          onClick={() => requestThinggu(userId)}
        />
      ) : thingguStatus === 'Y' ? (
        /* 띵구인 경우*/
        $isPresent === 'false' && (
          <Image
            src={deleteIcon}
            width={1.3}
            height={1.3}
            onClick={() => deleteThinggu(userId)}
          />
        )
      ) : (
        thingguStatus === 'A' && (
          /* 띵구 요청인 경우 */
          <S.FriendAlarmBlockWrapper>
            <Image
              src={confirmIcon}
              width={1.3}
              height={1.3}
              onClick={() => acceptThinggu(userId)}
            />
            <Image
              src={cancelIcon}
              width={1.3}
              height={1.3}
              onClick={() => deleteThinggu(userId)}
            />
          </S.FriendAlarmBlockWrapper>
        )
      )}
    </S.FriendBlockContainer>
  );
};

export default FriendBlock;
