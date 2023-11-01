import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import {
  modalContentAtom,
  modalOpenAtom,
  sendingFriendAtom,
  typingContentAtom,
} from '@/states/modalStates';
import { useAtom } from 'jotai';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import * as S from '@/components/organisms/Unboxing/Modal/Complete.styles';
import Modal from '@/components/molecules/Modal/Modal';

const Complete = () => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [typingContent] = useAtom(typingContentAtom);
  const [, setSendingFrind] = useAtom(sendingFriendAtom);

  const handleConfirm = () => {
    setModalContent('sendingList');
    setSendingFrind('멋쟁이 토마토');
  };
  const handleGet = () => {
    setModalOpen(false);
    setModalContent('textTyping');
  };
  return (
    <Modal height={31} isOpen={modalOpen}>
      <S.ModalWrapper>
        <S.ObjectBox>
          <S.DateBox>
            <Text size={'small1'} fontWeight={'bold'} color={'grey1'}>
              23.10.14
            </Text>
          </S.DateBox>
          <Image
            src={require(`@/assets/images/inventory/car.png`).default}
            $unit={'px'}
            height={180}
          />
        </S.ObjectBox>
        <Text
          size="body1"
          fontWeight="bold"
          $marginBottom="20px"
          $lineHeight="1.4"
        >
          축하합니다!
          <br />
          {typingContent}이 도착했어요!
        </Text>
        <ButtonWrapper>
          <Button option={'ghost'} size={'medium'} onClick={handleConfirm}>
            선물하기
          </Button>
          <Button option={'activated'} size={'medium'} onClick={handleGet}>
            가지기
          </Button>
        </ButtonWrapper>
      </S.ModalWrapper>
    </Modal>
  );
};

export default Complete;
