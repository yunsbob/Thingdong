import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';
import { modalContentAtom } from '@/states/modalStates';
import { useAtom } from 'jotai';
import { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
`;


const FriendList = () => {
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

  return (
    <>
    <HeaderWrapper>
          <Image
            src={require('@/assets/images/friend/search/back.png').default}
            $unit={'px'}
            width={12}
            height={22}
          />
        <Text size="body1" fontWeight="bold" $marginBottom='20px' $marginLeft='10px'>
          띵구에게 선물하기
        </Text>
        </HeaderWrapper>
    </>
  );
};

export default FriendList;
