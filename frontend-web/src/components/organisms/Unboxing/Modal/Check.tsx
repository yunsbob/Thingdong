import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';
import { modalContentAtom } from '@/states/modalStates';
import { useAtom } from 'jotai';
import { useState } from 'react';

const Check = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [, setModalContent] = useAtom(modalContentAtom);

  const handleConfirm = () => {
    setModalContent('opening');
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setValue(newNickname);
  };

  const isFilled = value !== '';
  return (
    <>
        <Image
          src={require(`@/assets/images/inventory/typing.png`).default}
          $unit={'px'}
          height={220}
        />
        <Text size="body1" fontWeight="bold" $marginBottom='20px'>
          텍스트를 입력해서
          <br />
          나만의 오브제를 만들어 보세요
        </Text>
        <Input
          placeholder="12글자 이내로 작성해주세요"
          $inputSize='small'
          option='grey'
          onChange={e => {
            handleNicknameChange(e);
          }}
        />
        <Button option={isFilled ? 'activated' : 'deactivated'} size="medium" $margin='20px 0 0 0' onClick={handleConfirm}>
          확인
        </Button>
    </>
  );
};

export default Check;
