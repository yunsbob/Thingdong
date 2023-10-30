import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import styled from 'styled-components';

const UnboxingItemContainer = styled.div`
  width: 100%;
  
`;

const UnboxingItem = () => {
  return (
    <UnboxingItemContainer>
      <Image
        src={require('@/assets/images/inventory/unboxing_enter.png').default}
        $unit={'%'}
        width={100}
      />
    </UnboxingItemContainer>
  );
};

export default UnboxingItem;
