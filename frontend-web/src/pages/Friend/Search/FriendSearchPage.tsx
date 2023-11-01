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
import { getUsers } from '@/apis/User/userAPI';
import FriendList from '@/components/organisms/FriendList/FriendList';

const FriendSearchPage = () => {
  const [searchName, setSearchName] = useState('');
  const [users, setUsers] = useState([]);

  const onChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    setUsers(await getUsers(e.target.value));
    console.log(users);
  };

  const debounceOnChange = useDebounce(onChangeName, 200);

  return (
    <Background>
      <S.FriendSearchContainer>
        <Header text="띵구 찾기" hasBackButton={true} />
        <S.FriendSearchInputContainer>
          <S.FriendSearchInput
            $inputSize="small"
            onChange={debounceOnChange}
            value={searchName}
          />
          <S.FriendSearchButton src={searchBtn} width={1.2} height={1.2} />
        </S.FriendSearchInputContainer>
        <FriendList friends={users} $paddidngBottom={6} />
      </S.FriendSearchContainer>
    </Background>
  );
};

export default FriendSearchPage;
