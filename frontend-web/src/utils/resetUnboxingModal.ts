import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';
import {
  modalContentAtom,
  modalOpenAtom,
  typingContentAtom,
  unboxingObjectAtom,
} from '@/states/unboxingModalStates';
import { useSetAtom } from 'jotai';

const resetUnboxingModal = () => {
  const setModalContent = useSetAtom(modalContentAtom);
  const setModalOpen = useSetAtom(modalOpenAtom);
  const setTypingContent = useSetAtom(typingContentAtom);
  const setUnboxingObject = useSetAtom(unboxingObjectAtom);

  const reset = () => {
    setModalOpen(false);
    setModalContent(UNBOXING_MODAL_NAME.TEXT_TYPING);
    setTypingContent('');
    setUnboxingObject({
      glbPath: '',
      pngPath: '',
      gifPath: '',
      userObjectId: 0,
    });
  };

  return reset;
};

export { resetUnboxingModal };