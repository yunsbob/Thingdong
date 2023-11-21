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
import { useCommandThingsStatus } from '@/apis/Things/Mutations/useCommandThingsStatus';
import { extractHSL } from '@/utils/extractHSL';

const LightModal = ({
  modalOpen,
  setModalOpen,
  deviceId,
}: ThingsModalProps) => {
  const [color, setColor] = useState<string>('hsl(100,0%,100%)');

  const onChangeColor = (newColor: string) => {
    setColor(newColor);
    console.log(newColor);
  };
  const commandThingsStatusMutation = useCommandThingsStatus();

  const changeLightColor = (newColor: string, deviceId: string) => {
    console.log('버튼을누르면~', newColor);
    // 버튼을누르면~ hsl(100, 40%, 23%)
    const { mappedHue, saturation, level } = extractHSL(newColor);

    commandThingsStatusMutation.mutate({
      deviceId: '8abaf7fb-9c0e-4b7f-9255-7ce9f4a08000', // 고정값
      data: {
        commands: [
          {
            component: 'main',
            capability: 'colorControl',
            command: 'setColor',
            arguments: [
              {
                hue: mappedHue,
                saturation: saturation,
              },
            ],
          },
        ],
      },
    });
    commandThingsStatusMutation.mutate({
      deviceId: '8abaf7fb-9c0e-4b7f-9255-7ce9f4a08000', // 고정값
      data: {
        commands: [
          {
            component: 'main',
            capability: 'switchLevel',
            command: 'setLevel',
            arguments: [level],
          },
        ],
      },
    });
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
          onClick={() => {
            changeModalOpen(modalOpen, setModalOpen),
              changeLightColor(color, deviceId!);
          }}
        >
          확인
        </Button>
      </S.LightModalContents>
    </S.LightModalContainer>
  );
};

export { LightModal };
