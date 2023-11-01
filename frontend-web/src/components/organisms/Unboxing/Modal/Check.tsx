import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { modalContentAtom, modalOpenAtom, sendingFriendAtom, typingContentAtom } from '@/states/modalStates';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import * as S from '@/components/organisms/Unboxing/Modal/Complete.styles';

const Check = () => {
  const [, setModalOpen] = useAtom(modalOpenAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [sendingFrind, setSendingFrind] = useAtom(sendingFriendAtom);

  const handleCancel = () => {
    setModalContent('sendingList');
  };
  const handleConfirm = () => {
    setModalOpen(false);
  };
  return (
    <S.ModalWrapper>
        <Image
          src={require(`@/assets/images/inventory/Holding-gift.png`).default}
          $unit={'px'}
          height={250}
        />
      <Text
        size="body1"
        fontWeight="bold"
        $marginBottom="20px"
        $lineHeight="1.4"
      >
        {sendingFrind}님에게
        <br />
        선물하시겠어요?

      </Text>
      <ButtonWrapper>
        <Button option={'ghost'} size={'medium'} onClick={handleCancel}>
          취소
        </Button>
        <Button option={'activated'} size={'medium'} onClick={handleConfirm}>
          확인
        </Button>
      </ButtonWrapper>
    </S.ModalWrapper>
  );
};

export default Check;
