import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { Spinner } from '@/components/molecules/Spinner/Spinner';
import * as S from '@/pages/Friend/Search/FriendSearchPage.styles';
import searchBtn from '@/assets/images/friend/search/searchBtn.png';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';
import { User } from '@/interfaces/user';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

const FriendSearchPage = () => {
  const [searchName, setSearchName] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    if (!!e.target.value) {
      //TODO: api 호출
    }
  };

  const debounceOnChange = useDebounce(onChangeName, 500);

  return (
    <Background $backgroundColor={theme.color.white}>
      <S.FriendSearchContainer>
        <Header text="띵구 찾기" hasBackButton={true} />
        <S.FriendSearchInputContainer>
          <S.FriendSearchInput
            $inputSize="small"
            option="grey"
            onChange={debounceOnChange}
            value={searchName}
          />
          <S.FriendSearchButton src={searchBtn} width={1.5} height={1.5} />
        </S.FriendSearchInputContainer>
      </S.FriendSearchContainer>
      <div></div>
    </Background>
  );
};

export default FriendSearchPage;
