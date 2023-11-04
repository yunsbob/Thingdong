import FriendRoomScene from '@/components/molecules/FriendRoom/FriendRoom';
import { Text } from '@/components/atoms/Text/Text.styles';

interface FriendRoomPageProp {
  friendId: string;
}

const FriendRoomPage = ({ friendId }: FriendRoomPageProp) => {
  return (
    <>
      <Text>{friendId}</Text>
      <FriendRoomScene />
    </>
  );
};

export default FriendRoomPage;
