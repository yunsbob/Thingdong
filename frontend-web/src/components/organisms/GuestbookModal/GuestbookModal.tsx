import React from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as GS from '@/pages/FriendRoom/FriendRoomPage.styles';
import { IMAGES } from '@/constants/images';

type HandlePrevFunction = () => void;

interface GuestbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestbooks: any;
  currentIndex: number;
  handlePrev: HandlePrevFunction;
  handleNext: HandlePrevFunction;
  handleDeleteGuestbook: (guestBookId: number) => void;
}

const GuestbookModal = ({
  isOpen,
  onClose,
  guestbooks,
  currentIndex,
  handlePrev,
  handleNext,
  handleDeleteGuestbook,
}: GuestbookModalProps) => {
  return (
    <GS.GuestbookModal isOpen={isOpen} onClose={onClose} height="auto">
      <GS.GuestbookButtonWrapper>
        <GS.ButtonWrapper
          onClick={handlePrev}
          opacity={currentIndex > 0 ? 1 : 0}
        >
          <Image src={IMAGES.FRIEND.SEARCH.BACK_WHITE_ICON} width={1} />
          <Text size="body3" color="white" fontWeight="regular">
            이전
          </Text>{' '}
        </GS.ButtonWrapper>
        <GS.ButtonWrapper
          onClick={handleNext}
          opacity={currentIndex < guestbooks.data.length - 1 ? 1 : 0}
        >
          <Text size="body3" color="white" fontWeight="regular">
            다음
          </Text>{' '}
          <Image
            src={IMAGES.FRIEND.SEARCH.BACK_WHITE_ICON}
            width={1}
            style={{ transform: 'rotate(180deg)' }}
          ></Image>
        </GS.ButtonWrapper>
      </GS.GuestbookButtonWrapper>
      <Image src={IMAGES.ROOM.GUESTBOOK} width={21} />
      <GS.WriteArea>
        <GS.ContentArea>
          {guestbooks.data?.length ? (
            <Text size="body2" fontWeight="bold" $lineHeight="1.5">
              {guestbooks.data[currentIndex].content}
            </Text>
          ) : (
            <Text
              size="body2"
              fontWeight="bold"
              $lineHeight="1.5"
              color="grey2"
            >
              작성된 방명록이 없습니다.
            </Text>
          )}
        </GS.ContentArea>
        <GS.WriterArea>
          {guestbooks.data?.length ? (
            <>
              <Text size="body4" fontWeight="regular" color="grey1">
                {guestbooks.data[currentIndex].writeDay}
                {'  '}
                {guestbooks.data[currentIndex].writerName}
              </Text>
              <GS.GuestbookDelBtn
                size="extraSmall"
                option="danger"
                onClick={() => {
                  handleDeleteGuestbook(
                    guestbooks.data[currentIndex].guestBookId
                  );
                }}
              >
                삭제
              </GS.GuestbookDelBtn>
            </>
          ) : (
            <></>
          )}
        </GS.WriterArea>
      </GS.WriteArea>
    </GS.GuestbookModal>
  );
};

export default GuestbookModal;
