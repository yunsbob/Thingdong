import { Image } from '@/components/atoms/Image/Image';
import Header from '@/components/molecules/Header/Header';
import Modal from '@/components/molecules/Modal/Modal';
import { ThingsModalProps } from '@/types/things';
import { changeModalOpen } from '@/utils/changeModalOpen';
import * as S from '@/pages/Things/PAT/Modal/LightModal/LightModal.styles';
import { IMAGES } from '@/constants/images';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import { useEffect, useState } from 'react';
import { HslStringColorPicker } from 'react-colorful';
import { useDebounce } from '@/hooks/useDebounce';

const LightModal = ({ modalOpen, setModalOpen }: ThingsModalProps) => {
  const [color, setColor] = useState<string>('hsl(100,0%,100%)');

  const onChangeColor = (newColor: string) => {
    setColor(newColor);
    console.log(newColor);
  };

  // const colorDebounce = useDebounce(onChangeColor, 200);

  return (
    <S.LightModalContainer
      isOpen={modalOpen}
      onClose={() => changeModalOpen(modalOpen, setModalOpen)}
    >
      <S.LightModalHeader>
        <Text size="body2" fontWeight="extraBold">
          스위치봇 스마트 컬러 전구
        </Text>
        <Image
          src={IMAGES.MODAL.CLOSE_ICON}
          width={1.5}
          height={1.5}
          onClick={() => changeModalOpen(modalOpen, setModalOpen)}
        />
      </S.LightModalHeader>
      <S.LightModalContents>
        {/* <div
        style={{
          width: '4rem',
          height: '4rem',
          backgroundColor: color,
        }}
      ></div> */}
        <HslStringColorPicker color={color} onChange={onChangeColor} />
        <S.LightModalPreviewWrapper>
          <Text size="body3" fontWeight="bold">
            선택한 색상 :
          </Text>
          <S.LightModalPreviewBox $backgroundColor={color} />
        </S.LightModalPreviewWrapper>
        <Button
          size="medium"
          onClick={() => changeModalOpen(modalOpen, setModalOpen)}
        >
          확인
        </Button>
      </S.LightModalContents>
    </S.LightModalContainer>
  );
};

export { LightModal };
