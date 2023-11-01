import Button from '@/components/atoms/Button/Button';
import {
  SlideButtonWrapper,
  SlideTextWrapper,
  SlideImageWrapper,
} from './Splash.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import room from '@/assets/images/splash/splash1_room.png';
import write from '@/assets/images/splash/splash2_write.png';
import things from '@/assets/images/splash/splash3_things.png';
import inventory from '@/assets/images/splash/splash4_inventory.png';
import unboxing1 from '@/assets/images/splash/splash5_unboxing_1.png';
import unboxing2 from '@/assets/images/splash/splash5_unboxing_2.png';

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
      <SlideTextWrapper $marginBottom="35px">
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          스마트싱스 앱에 등록한 기기를
          <br />
          띵동으로 가져올 수 있어요.
          <br />
          나만의 방에 띵즈를 배치해보세요 !
        </Text>
      </SlideTextWrapper>
      <SlideImageWrapper>
        <Image src={things} width={22} />
      </SlideImageWrapper>
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
      <SlideTextWrapper $marginBottom="30px">
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          인벤토리를 확인하면 <br />
          내가 가진 아이템들을 확인할 수 있어요
        </Text>
      </SlideTextWrapper>
      <SlideImageWrapper>
        <Image src={inventory} width={22} />
      </SlideImageWrapper>
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
      <SlideTextWrapper $marginBottom="16px">
        <Text size="body2" $lineHeight="1.5" fontWeight="bold">
          추억을 담은 나만의 물건을 언박띵하세요! <br />
          띵구에게 선물도 가능하답니다
        </Text>
      </SlideTextWrapper>
      <Image src={unboxing1} width={22} $margin="0 0 26px auto" />
      <Image src={unboxing2} width={22} />
    </>
  );
};

