import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from './ThingStoryItem.styles';

const ThingStoryItem = () => {
  return (
    <S.ThingContainer>
      {/* <Text
        size="small1"
        fontWeight="extraBold"
        color="grey1"
        $marginLeft="2px"
      >
        불가
      </Text> */}
      <Image
        src={require('@/assets/images/Thing/thing-minus.png').default}
        $unit={'px'}
        width={31}
        height={31}
      />
    </S.ThingContainer>
  );
};

export default ThingStoryItem;
