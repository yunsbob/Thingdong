import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TempToast = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 36px;
  position: absolute;
  top: 50%;
  height: 60%;
  width: 100%;
  z-index: 3;
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
  margin-right: 20px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 3rem;
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
