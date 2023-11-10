import { useRef } from 'react';
import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import {
  modalContentAtom,
  modalOpenAtom,
  typingContentAtom,
} from '@/states/unboxingModalStates';
import { useAtom } from 'jotai';
import { IMAGES } from '@/constants/images';

const TextTyping = () => {
  const [typingContent, setTypingContent] = useAtom(typingContentAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const onModalClose = () => {
    setModalOpen(false);
    setModalContent('textTyping');
  };
  const handleConfirm = () => {
    if (typingContent.length === 0) {
      inputRef.current?.focus();
    } else {
      setModalContent('opening');
    }
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setTypingContent(newNickname);
  };

  const isFilled = typingContent !== '';
  return (
    <Modal height={31} onClose={onModalClose} isOpen={modalOpen}>
      <Image src={IMAGES.INVENTORY.TYPING_IMAGE} $unit={'px'} height={220} />
      <Text
        size="body1"
        fontWeight="bold"
        $marginBottom="20px"
        $lineHeight="1.4"
      >
        텍스트를 입력해서
        <br />
        나만의 오브제를 만들어 보세요
      </Text>
      <Input
        ref={inputRef}
        placeholder="ex) 빨간색 장미꽃"
        $inputSize="small"
        option="grey"
        onChange={e => {
          handleNicknameChange(e);
        }}
      />
      <Button
        option={isFilled ? 'activated' : 'deactivated'}
        size="medium"
        $margin="20px 0 0 0"
        onClick={handleConfirm}
      >
        확인
      </Button>
    </Modal>
  );
};

export default TextTyping;
