import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import { ThingContainer } from '@/components/molecules/Thing/Thing.styles';
import { IMAGES } from '@/constants/images';

interface ThingProps extends TextProps {
  price: number;
  onClick?: () => void;
}

const Thing = ({ price, onClick }: ThingProps) => {
  return (
    <ThingContainer onClick={onClick}>
      <Image
        src={IMAGES.THING_STORY.THING_ICON}
        $unit={'px'}
        width={16}
        height={16}
      />
      <Text
        size="small1"
        fontWeight="extraBold"
        color="grey1"
        $marginLeft="2px"
      >
        {price}
      </Text>
    </ThingContainer>
  );
};

export default Thing;
