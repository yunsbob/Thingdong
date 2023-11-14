import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './FriendRoomPage.styles';
import backButtonWhite from '@/assets/images/friend/search/back-white.png';
import { changeModalOpen } from '@/utils/changeModalOpen';
import { useState } from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { IMAGES } from '@/constants/images';
import { useGetGuestbooks } from '@/apis/Guestbook/Queries/useGetGuestbooks';
import Button from '@/components/atoms/Button/Button';
import { useAddGuestbook } from '@/apis/Guestbook/Mutations/useAddGuestbook';
import { useDeleteGuestbook } from '@/apis/Guestbook/Mutations/useDeleteGuestbook';
import { RoomState } from '@/interfaces/room';
import audio_1 from './audio1.glb';
import coffee_machine_1 from './coffee-machine1.glb';
import fan_1 from './fan1.glb';
import bed_2 from './bed2.glb';
import mirror_1 from './mirror1.glb';
import curtain_open_1 from './curtain-open1.glb';
import { MOVE, ROTATE } from '@/constants/transformations';
import { ThingsObject, UserObject } from '@/types/room';
import MyRoom from '@/components/organisms/MyRoom/MyRoom';
import { useGetRoom } from '@/apis/Room/Queries/useGetRoom';

const FriendRoomPage = () => {
  const location = useLocation();
  const { userId, nickname } = location.state || {};

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [writeMode, setWriteMode] = useState(false);

  const guestbooks = useGetGuestbooks(userId);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [content, setContent] = useState<string>('');
  const guestbookContentFilled = content !== '';

  const myNickName = localStorage.getItem('nickName');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < (guestbooks.data?.length ?? 1) - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const addGuestbookMutation = useAddGuestbook();
  const handleWriteButtonClick = () => {
    addGuestbookMutation.mutate({ userId, content });
    setWriteMode(false);
  };

  const deleteGuestbookMutation = useDeleteGuestbook();
  const handleDeleteGuestbook = (guestBookId: number) => {
    deleteGuestbookMutation.mutate(guestBookId);
    setCurrentIndex(0);
  };

  // FriendRoom State
  // TODO: 데이터바인딩
  const { data: friendRoomState } = useGetRoom(userId);
  const [friendThingsList, setFriendThingsList] = useState<ThingsObject[]>(
    friendRoomState && friendRoomState.smartThingsList
      ? friendRoomState.smartThingsList
      : []
  );

  const [selectedRoomColor, setSelectedRoomColor] = useState('white');

  const handleObjectClick = (objectName: string) => {
    // setSelectedObjectName(objectName);
    // console.log()
  };

  return (
    <>
      <S.GuestbookModal
        isOpen={modalOpen}
        onClose={() => changeModalOpen(modalOpen, setModalOpen)}
        height="auto"
      >
        <S.GuestbookButtonWrapper opacity={writeMode ? 0 : 1}>
          <S.ButtonWrapper
            onClick={handlePrev}
            opacity={currentIndex > 0 ? 1 : 0}
          >
            <Image src={IMAGES.FRIEND.SEARCH.BACK_WHITE_ICON} width={1} />
            <Text size="body3" color="white" fontWeight="regular">
              이전
            </Text>{' '}
          </S.ButtonWrapper>
          <S.ButtonWrapper
            onClick={handleNext}
            opacity={currentIndex < guestbooks.data.length - 1 ? 1 : 0}
          >
            <Text size="body3" color="white" fontWeight="regular">
              다음
            </Text>{' '}
            <Image
              src={backButtonWhite}
              width={1}
              style={{ transform: 'rotate(180deg)' }}
            ></Image>
          </S.ButtonWrapper>
        </S.GuestbookButtonWrapper>
        <Image src={IMAGES.ROOM.GUESTBOOK} width={21} />
        {writeMode ? (
          <>
            <S.WriteArea>
              <S.ContentArea>
                <S.Textarea
                  placeholder="방명록을 작성해주세요."
                  onChange={e => {
                    handleContentChange(e);
                  }}
                ></S.Textarea>
              </S.ContentArea>
              <S.WriteButtonWrapper>
                <Button
                  option={guestbookContentFilled ? 'activated' : 'deactivated'}
                  onClick={
                    guestbookContentFilled ? handleWriteButtonClick : () => {}
                  }
                >
                  작성하기
                </Button>
              </S.WriteButtonWrapper>
            </S.WriteArea>
          </>
        ) : guestbooks.data && guestbooks.data.length > 0 ? (
          <S.WriteArea>
            <S.ContentArea>
              <Text size="body2" fontWeight="bold" $lineHeight="1.5">
                {guestbooks.data[currentIndex].content}
              </Text>
            </S.ContentArea>
            <S.WriterArea>
              <Text size="body3" fontWeight="regular" color="grey1">
                {guestbooks.data[currentIndex].writeDay}
                {'  '}
                {guestbooks.data[currentIndex].writerName}
              </Text>
              {myNickName === guestbooks.data[currentIndex].writerName ? (
                <S.GuestbookDelBtn
                  size="extraSmall"
                  option="danger"
                  onClick={() => {
                    handleDeleteGuestbook(
                      guestbooks.data[currentIndex].guestBookId
                    );
                  }}
                >
                  삭제
                </S.GuestbookDelBtn>
              ) : (
                <div style={{ height: '38px' }}></div>
              )}
            </S.WriterArea>
          </S.WriteArea>
        ) : (
          <S.WriteArea>
            <S.ContentArea>
              <Text
                size="body2"
                fontWeight="bold"
                $lineHeight="1.5"
                color="grey1"
              >
                작성된 방명록이 없어요. {nickname}에게 하고 싶은 말을
                남겨주세요!
              </Text>
            </S.ContentArea>
          </S.WriteArea>
        )}
      </S.GuestbookModal>

      <S.FriendRoomHeader>
        <S.BackButton
          src={backButtonWhite}
          onClick={() => {
            if (modalOpen) {
              setModalOpen(false);
              setWriteMode(false);
            } else {
              navigate(-1);
            }
          }}
        ></S.BackButton>
        <S.FriendRoomName>
          {nickname}네 {modalOpen ? '방명록' : '방'}
        </S.FriendRoomName>
        <Image
          src={
            modalOpen
              ? IMAGES.ROOM.GUESTBOOK_WRITE_ICON
              : IMAGES.ROOM.GUESTBOOK_ICON
          }
          width={3.5}
          $margin="0 0 0 14px"
          onClick={() => {
            modalOpen ? setWriteMode(true) : setModalOpen(true);
          }}
        ></Image>
      </S.FriendRoomHeader>
      <MyRoom
        userObject={friendRoomState.userObjectList}
        thingsObject={friendThingsList}
        selectedRoomColor={friendRoomState.roomColorPath}
        onObjectClick={handleObjectClick}
        darkMode={friendRoomState.darkMode}
      />
    </>
  );
};

export default FriendRoomPage;
