// HeaderButtons.tsx
import React from 'react';
import { Image } from '@/components/atoms/Image/Image';
import * as S from './HeaderButtons.styles';
import { IMAGES } from '@/constants/images';
import { RoomName } from '@/pages/Home/Home.styles';

interface HeaderButtonsProps {
  isEditing: boolean;
  handleEdit: () => void;
  setModalOpen: (isOpen: boolean) => void;
  nickName: string;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ isEditing, handleEdit, setModalOpen, nickName }) => {
  return (
    <S.HeaderButtonWrapper style={{ zIndex: 1 }}>
      {isEditing ? (
        <>
          <Image
            src={IMAGES.ROOM.BACK_ICON}
            $unit={'px'}
            width={40}
            height={40}
            onClick={handleEdit}
          />
          <Image
            src={IMAGES.ROOM.EDIT_BACKGROUND_ICON}
            $unit={'px'}
            width={40}
            height={40}
          />
        </>
      ) : (
        <>
          <RoomName>{nickName}네 방</RoomName>
          <Image
            src={IMAGES.ROOM.EDIT_ICON}
            width={3.4}
            onClick={handleEdit}
          />
          <Image
            src={IMAGES.ROOM.GUESTBOOK_ICON}
            width={3.4}
            onClick={() => setModalOpen(true)}
          />
        </>
      )}
    </S.HeaderButtonWrapper>
  );
};

export default HeaderButtons;
