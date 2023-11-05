import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/Things/PAT/Modal/PATModal/PATModal.styles';
import { changeModalOpen } from '@/utils/changeModalOpen';
import { useState } from 'react';
import { ThingsModalProps } from '@/types/things';
import { IMAGES } from '@/constants/images';

const PATModal = ({ modalOpen, setModalOpen }: ThingsModalProps) => {
  return (
    <S.NewThingsModal
      isOpen={modalOpen}
      onClose={() => changeModalOpen(modalOpen, setModalOpen)}
      width="20"
      height="auto"
    >
      <Image
        src={IMAGES.MODAL.CLOSE_ICON}
        width={1.5}
        height={1.5}
        onClick={() => changeModalOpen(modalOpen, setModalOpen)}
      />

      <S.NewThingsModalHeader>
        <S.NewThingsModalHeaderNew
          color="danger"
          size="body4"
          fontWeight="bold"
        >
          New!
        </S.NewThingsModalHeaderNew>
        <Text size="body2" fontWeight="extraBold">
          새로 불러온 스마트싱스 기기
        </Text>
      </S.NewThingsModalHeader>
      <S.NewThings>
        <Text size="body2" fontWeight="regular" $marginBottom="1.3rem">
          쿠첸 트리플 전기밥솥
        </Text>
        <Text size="body2" fontWeight="regular" $marginBottom="1.3rem">
          홀리 티메이커 전기티포트
        </Text>
        <Text size="body2" fontWeight="regular" $marginBottom="1.3rem">
          삼성전자 초미세청정기
        </Text>
        <Button
          size="small"
          onClick={() => changeModalOpen(modalOpen, setModalOpen)}
        >
          확인
        </Button>
      </S.NewThings>
    </S.NewThingsModal>
  );
};

export { PATModal };
