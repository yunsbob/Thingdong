import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import styled from 'styled-components';

const UnboxingItemContainer = styled.div`
  width: 100%;
  height: 162px;
  background-color: white;
`;

const UnboxingItem = () => {
  return (
    <UnboxingItemContainer>
      <Image
        src={require('@/assets/images/inventory/car.png').default}
        $unit={'px'}
        width={130}
      />
    </UnboxingItemContainer>
  );
};

export default UnboxingItem;
