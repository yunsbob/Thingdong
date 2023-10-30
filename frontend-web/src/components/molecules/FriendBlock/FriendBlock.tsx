import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/components/molecules/FriendBlock/FriendBlock.styles';

import redFace from '@/assets/images/friend/face-red.png';
import greenFace from '@/assets/images/friend/face-green.png';
import blueFace from '@/assets/images/friend/face-blue.png';
import deleteIcon from '@/assets/images/friend/delete.png';
import { getRandomInt } from '@/utils/getRandomInt';
import { User } from '@/interfaces/User';

const FriendBlock = ({ nickname, userId }: User) => {
  const imageSrcs = [redFace, greenFace, blueFace];

  return (
    <S.FriendBlockContainer>
      <S.FriendBlockProfile>
        <Image src={imageSrcs[getRandomInt(0, 3)]} width={3} height={3} />
        <S.FriendBlockText size="body2" fontWeight="regular">
          {nickname}
        </S.FriendBlockText>
        <S.FriendBlockText size="small1" fontWeight="bold" color="grey1">
          @{userId}
        </S.FriendBlockText>
      </S.FriendBlockProfile>
      <Image src={deleteIcon} width={1.3} height={1.3} />
    </S.FriendBlockContainer>
  );
};

export default FriendBlock;
