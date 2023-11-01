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
import FriendList from '../../FriendList/FriendList';
import { useGetFriends } from '@/apis/Friend/Queries/useGetFriends';

const HeaderWrapper = styled.div`
  display: flex;
`;
const NoFriendTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const SendingList = () => {
  const [, setModalContent] = useAtom(modalContentAtom);
  const { thingguList } = useGetFriends();
  const handleConfirm = () => {
    setModalContent('complete');
  };
  const handleCheck = () => {
    setModalContent('check');
  };

  return (
    <>
      <HeaderWrapper>
        <Image
          src={require('@/assets/images/friend/search/back.png').default}
          $unit={'px'}
          width={12}
          height={22}
          onClick={handleConfirm}
        />
        <Text
          size="body1"
          fontWeight="bold"
          $marginBottom="20px"
          $marginLeft="10px"
          onClick={handleCheck}
        >
          띵구에게 선물하기
        </Text>
      </HeaderWrapper>
      {thingguList.length === 0 ? (
          <NoFriendTextContainer>
            <Text
              size="body2"
              fontWeight="bold"
              color="grey2"
              $margin="0 0 0.5rem"
            >
              띵구가 없어요...
            </Text>
          </NoFriendTextContainer>
        ) : (
          <FriendList friends={thingguList} />
        )}
    </>
  );
};

export default SendingList;
