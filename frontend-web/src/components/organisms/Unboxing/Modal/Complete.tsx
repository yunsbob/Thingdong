import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { modalContentAtom, modalOpenAtom, typingContentAtom } from '@/states/modalStates';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ObjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 223px;
  height: 220px;
  margin: 10px 0 30px 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.coolGrey};
  position: relative;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const DateBox = styled.div`
  background-color: ${({ theme }) => theme.color.lightYellow};
  width: fit-content;
  padding: 7px 12px;
  border-radius: 21px;
  position: absolute;
  top: 1px;
  left: 22px;
  transform: rotate(-22deg);
`;

const Complete = () => {
  const [, setModalOpen] = useAtom(modalOpenAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [typingContent] = useAtom(typingContentAtom);

  const handleConfirm = () => {
    setModalContent('friendList');
  };
  const handleGet = () => {
    setModalOpen(false);
    //가지기 요청 api 실행코드
  }
  return (
    <ModalWrapper>
      <ObjectBox>
        <DateBox>
          <Text size={'small1'} fontWeight={'bold'} color={'grey1'}>
            23.10.14
          </Text>
        </DateBox>
        <Image
          src={require(`@/assets/images/inventory/car.png`).default}
          $unit={'px'}
          height={180}
        />
      </ObjectBox>
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
    </ModalWrapper>
  );
};

export default Complete;
