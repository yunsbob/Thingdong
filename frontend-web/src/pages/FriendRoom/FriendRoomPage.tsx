import FriendRoomScene from '@/components/molecules/FriendRoom/FriendRoom';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './FriendRoomPage.styles';
import backButtonWhite from '@/assets/images/friend/search/back-white.png';
import Button from '@/components/atoms/Button/Button';
import { changeModalOpen } from '@/utils/changeModalOpen';
import { useState } from 'react';
import { Image } from '@/components/atoms/Image/Image';
import guestbook from '@/assets/images/room/guestbook.png';
import { Text } from '@/components/atoms/Text/Text.styles';

const FriendRoomPage = () => {
  const location = useLocation();
  const { userId, nickname } = location.state || {};
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <S.FriendRoomHeader>
        <S.GuestbookModal
          isOpen={modalOpen}
          onClose={() => changeModalOpen(modalOpen, setModalOpen)}
          height="auto"
          $unit=""
        >
          <Image src={guestbook} width={21} />
          <S.WriteArea>
            <S.ContentArea>
              <Text size="body2" fontWeight="bold" $lineHeight="1.5">
                이 편지는 영국에서 최초로 시작되어 일년에 한 바퀴를 돌면서 받는
                사람에게 행운을 주었습니당
              </Text>
            </S.ContentArea>

            <S.WriterArea>
              <Text size="body3" fontWeight="bold" color="grey1">
                2023.11.04 똑똑한고구마
              </Text>
            </S.WriterArea>
          </S.WriteArea>
          <Button $margin="20px 0">작성하기</Button>
        </S.GuestbookModal>

        <S.BackButton
          src={backButtonWhite}
          onClick={() => navigate(-1)}
        ></S.BackButton>
        <S.FriendRoomName>{nickname}네 방</S.FriendRoomName>
      </S.FriendRoomHeader>
      {/* TODO: 각 띵구 userId로 방 상태 DB로부터 불러와야함 */}
      {/* 임시 방명록용 버튼 띄우기 */}
      <S.TempGuestbookBtnWrapper>
        <Button
          onClick={() => changeModalOpen(modalOpen, setModalOpen)}
          option="ghost"
          size="small"
        >
          방명록 작성하기
        </Button>
      </S.TempGuestbookBtnWrapper>
      <FriendRoomScene />
    </>
  );
};

export default FriendRoomPage;
