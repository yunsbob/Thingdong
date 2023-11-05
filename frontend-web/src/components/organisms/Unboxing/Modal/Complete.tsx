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

const Complete = () => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [typingContent, setTypingContent] = useAtom(typingContentAtom);
  const [, setSendingFrind] = useAtom(sendingFriendAtom);

  const handleConfirm = () => {
    setModalContent('sendingList');
    setSendingFrind('멋쟁이 토마토');
  };
  const handleGet = () => {
    setModalOpen(false);
    setModalContent('textTyping');
    setTypingContent('')
  };
  // 조사 맞춤 함수
  const getPostposition = (word: string) => {
    if (!word) return '가';

    const lastChar = word[word.length - 1];
    const uniCode = lastChar.charCodeAt(0);

    if (uniCode < 0xAC00 || uniCode > 0xD7A3) {
      return '가';
    }

    return (uniCode - 0xAC00) % 28 !== 0 ? '이' : '가';
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
          {typingContent}
          {getPostposition(typingContent)} 도착했어요!
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
