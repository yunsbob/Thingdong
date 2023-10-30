import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';
import styled from 'styled-components';

const UnboxingContainer = styled.div`
  width: 100%;
  
`;

const Unboxing = () => {
  return (
    <UnboxingContainer>
      <Image
        src={require('@/assets/images/inventory/unboxing_enter.png').default}
        $unit={'%'}
        width={100}
      />
      <UnboxingItem/>
    </UnboxingContainer>
  );
};

export default Unboxing;
