import styled from 'styled-components';
import { RoomName } from '@/pages/Home/Home.styles';
import { Image } from '@/components/atoms/Image/Image';

export const FriendRoomName = styled(RoomName)`
  margin: 0;
  width: 100%;
  background-color: #00000000;
  color: white;
  border: 1px solid white;
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

export const TempGuestbookBtnWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  transform: translateX(-50%);
  left: 50%;
  width: 65%;
`;

export const BackButton = styled(Image)`
  position: absolute;
  top: 4%;
  left: -20%;
  transform: scale(60%);
`;
