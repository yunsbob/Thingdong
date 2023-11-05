import FriendRoomScene from '@/components/molecules/FriendRoom/FriendRoom';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useLocation } from 'react-router-dom';

// interface FriendRoomPageProp {
//   friendId: string;
// }

// { friendId }: FriendRoomPageProp

const FriendRoomPage = () => { 
  const location = useLocation();
  const { userId, nickname } = location.state || {};

  return (
    <>
      <Text>{userId}</Text>
      <Text>{nickname}</Text>
      <FriendRoomScene />
    </>
  );
};

export default FriendRoomPage;
