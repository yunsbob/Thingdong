import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { modalContentAtom, modalOpenAtom } from '@/states/unboxingModalStates';
import { useAtom } from 'jotai';
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
const FriendWrapper = styled.div`
  height: 90%;
  overflow-y: auto;
`;
const SendingList = () => {
  const [, setModalContent] = useAtom(modalContentAtom);
  const [modalOpen] = useAtom(modalOpenAtom);

  const { thingguList } = useGetFriends();
  const handleConfirm = () => {
    setModalContent('complete');
  };
  const handleCheck = () => {
    setModalContent('check');
  };

  return (
    <Modal height={31} isOpen={modalOpen} $padding='28px'>
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
        <FriendWrapper>
        <FriendList friends={thingguList} $isPresent='true'/>
        </FriendWrapper>
      )}
    </Modal>
  );
};

export default SendingList;
