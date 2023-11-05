import MyRoomScene from '@/components/molecules/MyRoom/MyRoom';
import * as S from './Home.styles';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Image } from '@/components/atoms/Image/Image';

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
      <S.HeaderWrapper>
        {isEditing ? (
          <>
            <Image
              src={require('@/assets/images/room/back.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleEdit}
            />
            <S.ImageWrapper>
              <Image
                src={
                  require('@/assets/images/room/edit-background.png').default
                }
                $unit={'px'}
                width={30}
                height={30}
              />
            </S.ImageWrapper>
          </>
        ) : (
          <>
            <S.RoomName>{nickName}네 방</S.RoomName>
            <S.EditButton onClick={handleEdit}>수정</S.EditButton>
          </>
        )}
      </S.HeaderWrapper>
      <MyRoomScene isEditing={isEditing} />
      {isEditing && (
        <S.TempToast
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