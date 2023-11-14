import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import {
  modalContentAtom,
  modalOpenAtom,
  typingContentAtom,
  unboxingObjectAtom,
} from '@/states/unboxingModalStates';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ImageWrapper } from './Opening.styles';
import { IMAGES } from '@/constants/images';
import { useCallback, useEffect, useState } from 'react';
import { useGetUnboxing } from '@/apis/Inventory/Queries/useGetUnboxing';
import toast, { Toaster } from 'react-hot-toast';
import { UNBOXING_MESSAGES } from '@/constants/messages';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';
import { useQueryClient } from '@tanstack/react-query';
import { resetUnboxingModal } from '@/utils/resetUnboxingModal';

/* Complete 3D Generate Modal */
const Complete3DGenerate = () => {
  const setModalContent = useSetAtom(modalContentAtom);

  const handleConfirm = () => {
    setModalContent(UNBOXING_MODAL_NAME.COMPLETE);
  };

  return (
    <>
      <ImageWrapper>
        <Image
          src={IMAGES.INVENTORY.GIFT_IMAGE}
          $unit={'px'}
          height={250}
          onClick={handleConfirm}
        />
      </ImageWrapper>
      <Text
        size="body1"
        fontWeight="bold"
        $marginBottom="25px"
        $lineHeight="1.4"
      >
        꺅 완성되었어요!
        <br />
        선물상자를 흔들어서
        <br />
        어떤 오브제가
        <br />
        도착했는지 확인해 볼까요?
      </Text>
      <Text size="body3" fontWeight="bold" color="grey2">
        기기를 신나게 흔들어주세요~!
      </Text>
    </>
  );
};

const Making3DObject = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={IMAGES.INVENTORY.GIFT_IMAGE} $unit={'px'} height={250} />
      </ImageWrapper>
      <Text
        size="body1"
        fontWeight="bold"
        $marginBottom="25px"
        $lineHeight="1.4"
      >
        두근두근
        <br />
        선물을 만들고 있어요!!
      </Text>
    </>
  );
};

/* Opening Modal */
const Opening = () => {
  const setModalContent = useSetAtom(modalContentAtom);
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [typingContent, setTypingContent] = useAtom(typingContentAtom);
  const setUnboxingObject = useSetAtom(unboxingObjectAtom);

  const {
    data: tt3Data,
    isLoading,
    isError,
    isSuccess,
  } = useGetUnboxing(typingContent);

  const closeModal = () => {
    resetUnboxingModal();
  };

  const canRender = () => {
    return isSuccess && tt3Data && !isLoading;
  };

  useEffect(() => {
    if (canRender()) {
      setUnboxingObject(tt3Data);
      console.log('렌더링 가능', tt3Data);
      toast.success(UNBOXING_MESSAGES.TOAST.SUCCESS);
    }
  }, [tt3Data, isSuccess, isLoading]);

  useEffect(() => {
    if (isError) {
      toast.error(UNBOXING_MESSAGES.TOAST.ERROR);

      setTimeout(() => {
        closeModal();
      }, 1000);
    }
  }, [isError]);

  const queryClient = useQueryClient();
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    }
  }, [isSuccess]);

  return (
    <Modal height={31} isOpen={modalOpen}>
      <Toaster />
      {canRender() ? <Complete3DGenerate /> : <Making3DObject />}
    </Modal>
  );
};

export default Opening;
