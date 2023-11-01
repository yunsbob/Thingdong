import { Text } from '@/components/atoms/Text/Text.styles';
import { styled } from 'styled-components';

const FriendListContainer = styled.div<{ $paddidngBottom?: number }>`
  height: calc(100% - 7rem); // subtract sun height
  padding-bottom: ${({ $paddidngBottom }) => `${$paddidngBottom}em` ?? '5rem'};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { FriendListContainer };
