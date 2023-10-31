import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { Spinner } from '@/components/molecules/Spinner/Spinner';
import * as S from '@/pages/Friend/Search/FriendSearchPage.styles';
import searchBtn from '@/assets/images/friend/search/searchBtn.png';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';

const FriendSearchPage = () => {
  return (
    <Background $backgroundColor={theme.color.white}>
      <S.FriendSearchContainer>
        <Header text="띵구 찾기" hasBackButton={true} />
        <S.FriendSearchInputContainer>
          <S.FriendSearchInput $inputSize="small" option="grey" />
          <S.FriendSearchButton src={searchBtn} width={1.5} height={1.5} />
        </S.FriendSearchInputContainer>
      </S.FriendSearchContainer>
    </Background>
  );
};

export default FriendSearchPage;
