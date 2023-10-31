import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import styled from 'styled-components';

const FriendSearchContainer = styled.div`
  /* background-color: ${({ theme }) => theme.color.lightYellow}; */
`;

const FriendSearchInputContainer = styled.div`
  position: relative;
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
  right: 1.8rem;
  transform: translate(0%, -50%);
`;

export {
  FriendSearchContainer,
  FriendSearchInputContainer,
  FriendSearchInput,
  FriendSearchButton,
};
