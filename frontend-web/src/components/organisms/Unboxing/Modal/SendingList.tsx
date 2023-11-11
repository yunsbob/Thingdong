import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { modalContentAtom, modalOpenAtom } from '@/states/unboxingModalStates';
import { useAtom } from 'jotai';
import FriendList from '../../FriendList/FriendList';
import { useGetFriends } from '@/apis/Friend/Queries/useGetFriends';
import { IMAGES } from '@/constants/images';
import * as S from '@/components/organisms/Unboxing/Modal/SendingList.styles';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';

const SendingList = () => {
  const [, setModalContent] = useAtom(modalContentAtom);
  const [modalOpen] = useAtom(modalOpenAtom);

  const { thingguList } = useGetFriends();

  const handleConfirm = () => {
    setModalContent(UNBOXING_MODAL_NAME.COMPLETE);
  };

  const handleCheck = () => {
    setModalContent(UNBOXING_MODAL_NAME.CHECK);
  };

  return (
    <Modal height={31} isOpen={modalOpen} $padding="28px">
      <S.HeaderWrapper>
        <Image
          src={IMAGES.FRIEND.SEARCH.BACK_ICON}
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
      </S.HeaderWrapper>
      {thingguList.length === 0 ? (
        <S.NoFriendTextContainer>
          <Text
            size="body2"
            fontWeight="bold"
            color="grey2"
            $margin="0 0 0.5rem"
          >
            띵구가 없어요...
          </Text>
        </S.NoFriendTextContainer>
      ) : (
        <S.FriendWrapper>
          <FriendList friends={thingguList} $isPresent="true" />
        </S.FriendWrapper>
      )}
    </Modal>
  );
};

export default SendingList;
