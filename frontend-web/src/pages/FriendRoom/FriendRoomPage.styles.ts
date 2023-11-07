import styled from 'styled-components';
import { RoomName } from '@/pages/Home/Home.styles';
import { Image } from '@/components/atoms/Image/Image';
import Modal from '@/components/molecules/Modal/Modal';
import Button from '@/components/atoms/Button/Button';

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
  width: 90%;
  height: 56px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
`;

export const TempGuestbookBtnWrapper = styled.div`
  position: absolute;
  bottom: 320px;
  transform: translateX(-50%);
  left: 50%;
  width: 45%;
`;

export const BackButton = styled(Image)`
  top: 4%;
  transform: scale(60%);
  margin-right: 20px;
`;

export const GuestbookModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  height: 78vh;
  background-color: #00000000;
  img {
    align-self: center;
  }
`;

export const WriteArea = styled.div`
  position: relative;
  top: -250px;
  width: 100%;
  text-align: start;
  padding: 3px 0px 3px 3px;
`;

export const ContentArea = styled.div`
  height: 10.5rem;
`;

export const WriterArea = styled.div`
  /* text-align: end; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

interface OpacityProps {
  opacity?: number;
}

export const ButtonWrapper = styled.div<OpacityProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${props => props.opacity};
  pointer-events: ${props => (props.opacity === 0 ? 'none' : 'auto')};
`;

export const GuestbookButtonWrapper = styled.div<OpacityProps>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 96%;
  top: 66%;
  transform: translateX(-50%);
  left: 50%;
  opacity: ${props => props.opacity};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'NanumSquareNeo';
  font-size: ${({ theme }) => theme.fontSize.body2};
  resize: none;
  border: none;
  outline: none;
  line-height: 1.5;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const WriteButtonWrapper = styled.div`
  margin-top: 35%;
`;

export const GuestbookDelBtn = styled(Button)`
  height: 38px;
  width: 25px;
`;
