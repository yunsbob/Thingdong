import FriendRoomScene from '@/components/molecules/FriendRoom/FriendRoom';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './FriendRoomPage.styles';
import backButtonWhite from '@/assets/images/friend/search/back-white.png';
import Button from '@/components/atoms/Button/Button';

const FriendRoomPage = () => {
  const location = useLocation();
  const { userId, nickname } = location.state || {};
  const navigate = useNavigate();

  return (
    <>
      <S.FriendRoomHeader>
        <S.BackButton
          src={backButtonWhite}
          onClick={() => navigate(-1)}
        ></S.BackButton>
        <S.FriendRoomName>{nickname}네 방</S.FriendRoomName>
      </S.FriendRoomHeader>
      {/* TODO: 각 띵구 userId로 방 상태 DB로부터 불러와야함 */}
      {/* 임시 방명록용 버튼 띄우기 */}
      <S.TempGuestbookBtnWrapper>
        <Button>방명록 작성</Button>
      </S.TempGuestbookBtnWrapper>
      <FriendRoomScene />
    </>
  );
};

export default FriendRoomPage;
