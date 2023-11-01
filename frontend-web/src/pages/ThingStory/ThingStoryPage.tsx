import { Image } from '@/components/atoms/Image/Image';
import * as S from './ThingStoryPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Background } from '@/components/atoms/Background/Background.style';
import Header from '@/components/molecules/Header/Header';
import { useNavigate } from 'react-router-dom';
import ThingStoryItem from '@/components/molecules/ThingStoryItem/ThingStoryItem';

const price = 1000;

const ThingStoryPage = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <S.HeaderWrapper>
        <S.BackButtonWrapper onClick={() => navigate(-1)}>
          <Image
            src={require('@/assets/images/friend/search/back.png').default}
            $unit={'px'}
            width={12}
            height={22}
          />
        </S.BackButtonWrapper>
        <Header text="띵스토리"></Header>
      </S.HeaderWrapper>
      <S.ThingWrapper>
        <S.ThingContainer>
          <Image
            src={require('@/assets/images/Thing/thing.png').default}
            $unit={'px'}
            width={37}
            height={37}
          />
          <Text size="subtitle2" fontWeight="bold" $marginLeft="2px">
            {price} 띵
          </Text>
        </S.ThingContainer>
      </S.ThingWrapper>
      <ThingStoryItem />
    </Background>
  );
};

export default ThingStoryPage;
