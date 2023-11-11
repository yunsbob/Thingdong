import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ColorCircleProps {
  color: string;
}

export const ItemToast = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 36px;
  position: absolute;
  top: 55%;
  height: 60%;
  width: 100%;
  z-index: 3;
  padding: 20px;
`;

export const EditButton = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowBtn};
  color: ${({ theme }) => theme.color.grey1};
  padding: 18px 15px;
  width: 75px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoomName = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowBtn};
  color: ${({ theme }) => theme.color.grey1};
  padding: 18px 15px;
  border-radius: 50px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  min-height: 3rem;
  height: auto;
  gap: 10px;
  z-index: 1;
`;
export const BackButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  z-index: 1;
`;


export const ArrowKeyWrapper = styled.div`
  position: absolute;
  bottom: 46vh;
  left: 15px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
  z-index: 1;
  & > :nth-child(1),
  & > :nth-child(3) {
    visibility: hidden;
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 46vh;
  right: 15px;
  z-index: 1;
  gap: 10px;
`;

export const ColorCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const ChangeRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 1;
`;

export const ColorCircle = styled(motion.div)<ColorCircleProps>`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
`;