import { Image } from '@/components/atoms/Image/Image';
import * as S from './ThingStoryPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { useNavigate } from 'react-router-dom';
import ThingStoryItem from '@/components/molecules/ThingStoryItem/ThingStoryItem';
import { useGetUserInfo } from '@/apis/User/Queries/useGetUserInfo';
import { IMAGES } from '@/constants/images';

const ThingStoryPage = () => {
  const userInfo = useGetUserInfo();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear()
    navigate('/')
    
  }
  return (
    <Background>
      <Header text="띵스토리" hasBackButton={true} />
      <S.ThingWrapper>
        <S.ThingContainer>
          <Image
            src={IMAGES.THING_STORY.THING_ICON}
            $unit={'px'}
            width={37}
            height={37}
            onClick={handleLogOut}
          />
          <Text size="subtitle2" fontWeight="bold" $marginLeft="2px">
            {userInfo?.thingAmount} 띵
          </Text>
        </S.ThingContainer>
      </S.ThingWrapper>
      <ThingStoryItem />
    </Background>
  );
};

export default ThingStoryPage;
