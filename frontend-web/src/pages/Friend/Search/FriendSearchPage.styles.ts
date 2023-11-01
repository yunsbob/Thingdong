import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import styled from 'styled-components';

const FriendSearchContainer = styled.div`
  height: 100%;
  padding-bottom: 7rem;
`;

const FriendSearchInputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const FriendSearchInput = styled(Input)`
  position: relative;
  padding-right: 4rem;
  height: 56px;
  font-size: ${({ theme }) => theme.fontSize.body3};
`;

const FriendSearchButton = styled(Image)`
  position: absolute;
  top: 50%;
  right: 1.3rem;
  transform: translate(0%, -50%);
`;

export {
  FriendSearchContainer,
  FriendSearchInputContainer,
  FriendSearchInput,
  FriendSearchButton,
};
