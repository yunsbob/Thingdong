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
import { useEffect, useState } from 'react';
import { useGetUnboxing } from '@/apis/Inventory/Queries/useGetUnboxing';

const Opening = () => {
  const [, setModalContent] = useAtom(modalContentAtom);
  const [modalOpen] = useAtom(modalOpenAtom);
  const typingContent = useAtomValue(typingContentAtom);
  const setUnboxingObject = useSetAtom(unboxingObjectAtom);

  const handleConfirm = () => {
    setModalContent('complete');
  };

  const { data: tt3Data, isPending, isLoading } = useGetUnboxing(typingContent);

  if (!isLoading) {
    setUnboxingObject(tt3Data);
    console.log(tt3Data);
  }

  return (
    <Modal height={31} isOpen={modalOpen}>
      {isLoading ? (
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
            두근두근
            <br />
            선물을 만들고 있어요!!
          </Text>
        </>
      ) : (
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
      )}
    </Modal>
  );
};

export default Opening;
