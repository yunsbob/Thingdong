import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import {
  modalContentAtom,
  modalOpenAtom,
  sendingFriendAtom,
  typingContentAtom,
  unboxingObjectAtom,
} from '@/states/unboxingModalStates';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import * as S from '@/components/organisms/Unboxing/Modal/Complete.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { IMAGES } from '@/constants/images';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';
import { QueryClient } from '@tanstack/react-query';
import {
  PresentFriend,
  usePresentUnboxing,
} from '@/apis/Inventory/Mutations/usePresentUnboxing';
import { resetUnboxingModal } from '@/utils/resetUnboxingModal';
import { useNavigate } from 'react-router-dom';
import { CHILDREN_PATH, PATH } from '@/constants/path';
import { activeCategoryAtom } from '@/states/inventoryModalStates';

const Check = () => {
  const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [sendingFriend] = useAtom(sendingFriendAtom);
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [, setTypingContent] = useAtom(typingContentAtom);
  const unboxingObject = useAtomValue(unboxingObjectAtom);

  const handleCancel = () => {
    setModalContent(UNBOXING_MODAL_NAME.SENDING_LIST);
  };

  const usePresentUnboxingMutation = usePresentUnboxing();
  const presentUnboxing = async (presentFriend: PresentFriend) => {
    usePresentUnboxingMutation.mutate(presentFriend);
  };

  const setUnboxingObject = useSetAtom(unboxingObjectAtom);
  
  const handleConfirm = () => {
    presentUnboxing({
      userId: sendingFriend.userId,
      userObjectId: unboxingObject.userObjectId,
    });

    setModalOpen(false);
    setModalContent(UNBOXING_MODAL_NAME.TEXT_TYPING);
    setTypingContent('');
    setUnboxingObject({
      glbPath: '',
      pngPath: '',
      gifPath: '',
      userObjectId: 0,
    });

    setTimeout(() => {
      location.reload();
    }, 500);
    
    setActiveCategory('언박띵');
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
          {sendingFriend.nickname}님에게
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
