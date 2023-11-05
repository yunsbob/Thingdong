import FriendRoomScene from '@/components/molecules/FriendRoom/FriendRoom';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useLocation } from 'react-router-dom';

// interface FriendRoomPageProp {
//   friendId: string;
// }

// { friendId }: FriendRoomPageProp

const FriendRoomPage = () => { 
  const location = useLocation();
  const { userId } = location.state || {}; // default to an empty object if state is undefined

  // const nickName = friendId;
  // console.log(nickName);

  return (
    <>
      <Text>{userId}</Text>
      {/* <FriendRoomScene /> */}
    </>
  );
};

export default FriendRoomPage;
