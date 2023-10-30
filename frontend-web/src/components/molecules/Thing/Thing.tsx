import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import styled from 'styled-components';

interface ThingProps extends TextProps {
  price: string;
}

const ThingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 29px;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

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
