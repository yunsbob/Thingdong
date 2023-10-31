import { Image } from '@/components/atoms/Image/Image';
import * as S from './ThingStory.styles';
import { Text } from '@/components/atoms/Text/Text.styles';

const price = 1000;

const ThingStoryPage = () => {
  return (
    <S.ThingContainer>
      <Image
        src={require('@/assets/images/Thing/thing.png').default}
        $unit={'px'}
        width={37}
        height={37}
      />
      <Text size="subtitle2" fontWeight="bold" $marginLeft="2px">
        {price}
      </Text>
    </S.ThingContainer>
  );
};

export default ThingStoryPage;
