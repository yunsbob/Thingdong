import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import {
  modalContentAtom,
  modalOpenAtom,
  sendingFriendAtom,
  typingContentAtom,
} from '@/states/unboxingModalStates';
import { useAtom } from 'jotai';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import * as S from '@/components/organisms/Unboxing/Modal/Complete.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { IMAGES } from '@/constants/images';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';

const Check = () => {
  const [, setModalContent] = useAtom(modalContentAtom);
  const [sendingFrind] = useAtom(sendingFriendAtom);
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [, setTypingContent] = useAtom(typingContentAtom);

  const handleCancel = () => {
    setModalContent(UNBOXING_MODAL_NAME.SENDING_LIST);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    setModalContent(UNBOXING_MODAL_NAME.TEXT_TYPING);
    setTypingContent('');
  };

  return (
    <Modal height={31} isOpen={modalOpen}>
      <S.ModalWrapper>
        <Image
          src={IMAGES.INVENTORY.HOLDING_GIFT_IMAGE}
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
    </Modal>
  );
};

export default Check;
