import MyRoomScene from '@/components/molecules/MyRoom/MyRoom';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { editModeAtom } from '@/states/roomState';
import { useState } from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { motion } from 'framer-motion';

const TempToast = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 36px;
  position: absolute;
  top: 50%;
  height: 60%;
  width: 100%;
  z-index: 3;
`;

const EditButton = styled.div`
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
const RoomName = styled.div`
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
const HeaderWrapper = styled.div`
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
const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const toastVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
  },
};
const HomePage = () => {
  const nickName = '도도한고구마';
  // const nickName = localStorage.getItem('nickName');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <HeaderWrapper>
        {isEditing ? (
          <>
            <Image
              src={require('@/assets/images/room/back.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleEdit}
            />
            <ImageWrapper>
              <Image
                src={
                  require('@/assets/images/room/edit-background.png').default
                }
                $unit={'px'}
                width={30}
                height={30}
              />
            </ImageWrapper>
          </>
        ) : (
          <>
            <RoomName>{nickName}네 방</RoomName>
            <EditButton onClick={handleEdit}>수정</EditButton>
          </>
        )}
      </HeaderWrapper>
      <MyRoomScene isEditing={isEditing} />
      {isEditing && (
        <TempToast
          variants={toastVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </>
  );
  // <Background $backgroundColor={theme.color.black1}>home</Background>;
};

export default HomePage;
