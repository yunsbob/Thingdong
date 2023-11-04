import { Image } from '@/components/atoms/Image/Image';
import * as S from './ThingStoryPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { useNavigate } from 'react-router-dom';
import ThingStoryItem from '@/components/molecules/ThingStoryItem/ThingStoryItem';
import { useGetUserInfo } from '@/apis/User/Queries/useGetUserInfo';


const ThingStoryPage = () => {
  const userInfo = useGetUserInfo();
  const navigate = useNavigate();
  return (
    <Background>
        <Header text="띵스토리" hasBackButton={true}/>
      <S.ThingWrapper>
        <S.ThingContainer>
          <Image
            src={require('@/assets/images/thingStory/thing.png').default}
            $unit={'px'}
            width={37}
            height={37}
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
