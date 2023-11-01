import Button from '@/components/atoms/Button/Button';
import { SlideButtonWrapper, SlideTextWrapper } from './Splash.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import room from '@/assets/images/splash/splash1_room.png';
import write from '@/assets/images/splash/splash2_write.png';

export const Splash1 = () => {
  return (
    <>
      <SlideButtonWrapper>
        <Button $backgroundColor="white" $color="black1">
          나만의 방 꾸미기
        </Button>
      </SlideButtonWrapper>
      <SlideTextWrapper>
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          내가 원하는 가구, 소품을 배치해
          <br />
          나만의 방을 꾸밀 수 있어요
        </Text>
      </SlideTextWrapper>
      <Image src={room} width={22} />
    </>
  );
};

export const Splash2 = () => {
  return (
    <>
      <SlideButtonWrapper>
        <Button $backgroundColor="white" $color="black1">
          띵구 맺기
        </Button>
        <SlideTextWrapper $marginBottom="30px">
          <Text size="body2" $lineHeight="1.5" fontWeight="bold">
            내 친구 띵구네 집을 방문해보세요!
            <br />
            방명록도 남길 수 있습니다 🥰
          </Text>
        </SlideTextWrapper>
      </SlideButtonWrapper>
      <Image src={write} />
    </>
  );
};

export const Splash3 = () => {
  return (
    <>
      <SlideButtonWrapper>
        <Button $backgroundColor="white" $color="black1">
          스마트싱스 가져오기
        </Button>
      </SlideButtonWrapper>
      <SlideTextWrapper>
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          스마트싱스 앱에 등록한 기기를
          <br />
          띵동으로 가져올 수 있어요.
          <br />
          나만의 방에 띵즈를 배치해보세요 !
        </Text>
      </SlideTextWrapper>
    </>
  );
};

export const Splash4 = () => {
  return (
    <>
      <SlideButtonWrapper>
        <Button $backgroundColor="white" $color="black1">
          아이템 확인하기
        </Button>
      </SlideButtonWrapper>
      <SlideTextWrapper>
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          인벤토리를 확인하면 <br />
          내가 가진 아이템을 목록을 확인할 수 있어요
        </Text>
      </SlideTextWrapper>
    </>
  );
};

export const Splash5 = () => {
  return (
    <>
      <SlideButtonWrapper>
        <Button $backgroundColor="white" $color="black1">
          나만의 물건 만들기
        </Button>
      </SlideButtonWrapper>
      <SlideTextWrapper>
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          추억을 담은 나만의 물건을 언박띵하세요! <br />
          띵구에게 선물도 가능하답니다
        </Text>
      </SlideTextWrapper>
    </>
  );
};

// export default { Splash1, Splash2, Splash3 };
