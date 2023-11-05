import styled from 'styled-components';
import { RoomName, HeaderWrapper } from '@/pages/Home/Home.styles';
import { Image } from '@/components/atoms/Image/Image';

export const FriendRoomName = styled(RoomName)`
  margin: 0;
  width: 100%;
`;

export const FriendRoomHeader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  width: 65%;
  transform: translateX(-50%);
  left: 50%;
`;

export const BackButton = styled(Image)`
  position: absolute;
  top: 4%;
  left: -20%;
  transform: scale(60%);
`;
