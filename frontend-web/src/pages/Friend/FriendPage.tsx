import * as S from '@/pages/Friend/FriendPage.style';
import Header from '@/components/molecules/Header/Header';
import { Image } from '@/components/atoms/Image/Image';
import notification from '@/assets/images/friend/notification.png';
import search from '@/assets/images/friend/search.png';

const FriendPage = () => {
  return (
    <S.FriendContainer>
      <Header text="띵구">
        <S.FriendHeaderIcons>
          <Image src={notification} width={100} height={100} $unit="%" />
          <Image src={search} width={2.5} height={2.5} />
        </S.FriendHeaderIcons>
      </Header>
    </S.FriendContainer>
  );
};

export default FriendPage;
