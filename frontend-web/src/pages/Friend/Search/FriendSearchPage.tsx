import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { Spinner } from '@/components/molecules/Spinner/Spinner';
import * as S from '@/pages/Friend/Search/FriendSearchPage.styles';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';
import { User } from '@/interfaces/user';
import { Suspense, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { getUsers } from '@/apis/User/userAPI';
import FriendList from '@/components/organisms/FriendList/FriendList';
import { useGetUsers } from '@/apis/User/Queries/useGetUsers';
import { IMAGES } from '@/constants/images';

const FriendSearchPage = () => {
  const [searchName, setSearchName] = useState('');
  const { data, refetch } = useGetUsers(searchName);

  const onChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [searchName]);

  const debounceOnChange = useDebounce(onChangeName, 200);

  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Background>
        <S.FriendSearchContainer>
          <Header text="띵구 찾기" hasBackButton={true} />
          <S.FriendSearchInputContainer>
            <S.FriendSearchInput
              $inputSize="small"
              onChange={debounceOnChange}
              value={searchName}
            />
            <S.FriendSearchButton
              src={IMAGES.FRIEND.SEARCH.SEARCH_ICON}
              width={1.2}
              height={1.2}
            />
          </S.FriendSearchInputContainer>
          <FriendList friends={data} $paddidngBottom={6} />
        </S.FriendSearchContainer>
      </Background>
    </Suspense>
  );
};

export default FriendSearchPage;
