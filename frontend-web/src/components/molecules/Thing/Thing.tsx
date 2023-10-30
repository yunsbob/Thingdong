import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import { ThingContainer } from '@/components/molecules/Thing/Thing.styles';

interface ThingProps extends TextProps {
  price: number;
}

const Thing = ({ price }: ThingProps) => {
  return (
    <ThingContainer>
      <Image
        src={require('@/assets/images/Thing/thing.png').default}
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
