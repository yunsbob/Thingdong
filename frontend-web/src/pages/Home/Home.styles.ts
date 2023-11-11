import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TempToast = styled(motion.div)`
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

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const ArrowKeyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
  & > :nth-child(1),
  & > :nth-child(3) {
    visibility: hidden;
  }
`;

export const BottomButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 43vh;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  width: 90%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
