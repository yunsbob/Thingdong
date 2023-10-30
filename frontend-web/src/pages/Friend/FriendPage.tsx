import * as S from '@/pages/Friend/FriendPage.style';
import Header from '@/components/molecules/Header/Header';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';

import notification from '@/assets/images/friend/notification.png';
import search from '@/assets/images/friend/search.png';
import FriendList from '@/components/organisms/FriendList/FriendList';

const FriendPage = () => {
  return (
    <S.FriendContainer>
      <Header text="띵구">
        <S.FriendHeaderIcons>
          <Image src={notification} width={100} height={100} $unit="%" />
          <Image src={search} width={100} height={100} $unit="%" />
        </S.FriendHeaderIcons>
      </Header>
      <S.Sun />
      <FriendList />
    </S.FriendContainer>
  );
};

export default FriendPage;
