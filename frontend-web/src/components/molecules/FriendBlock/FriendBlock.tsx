import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/components/molecules/FriendBlock/FriendBlock.styles';

import redFace from '@/assets/images/friend/face-red.png';
import greenFace from '@/assets/images/friend/face-green.png';
import blueFace from '@/assets/images/friend/face-blue.png';
import deleteIcon from '@/assets/images/friend/delete.png';
import addIcon from '@/assets/images/friend/add.png';
import confirmIcon from '@/assets/images/friend/alarm/confirm.png';
import cancelIcon from '@/assets/images/friend/alarm/cancel.png';

import { getRandomInt } from '@/utils/getRandomInt';
import { User } from '@/interfaces/user';

const FriendBlock = ({ nickname, userId, thingguStatus }: User) => {
  const imageSrcs = [redFace, greenFace, blueFace];

  return (
    <S.FriendBlockContainer>
      <S.FriendBlockProfile>
        <Image src={imageSrcs[userId.length % 3]} width={3} height={3} />
        <S.FriendBlockText size="body2" fontWeight="regular">
          {nickname}
        </S.FriendBlockText>
        <S.FriendBlockText size="small1" fontWeight="bold" color="grey1">
          @{userId}
        </S.FriendBlockText>
      </S.FriendBlockProfile>
      {thingguStatus === 'N' ? (
        /* 띵구가 아닌 경우 */
        <Image src={addIcon} width={1.3} height={1.3} />
      ) : thingguStatus === 'Y' ? (
        /* 띵구인 경우*/
        <Image src={deleteIcon} width={1.3} height={1.3} />
      ) : (
        thingguStatus === 'A' && (
          /* 띵구 요청인 경우 */
          <S.FriendAlarmBlockWrapper>
            <Image src={confirmIcon} width={1.3} height={1.3} />
            <Image src={cancelIcon} width={1.3} height={1.3} />
          </S.FriendAlarmBlockWrapper>
        )
      )}
    </S.FriendBlockContainer>
  );
};

export default FriendBlock;
