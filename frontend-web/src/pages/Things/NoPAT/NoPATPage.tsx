import * as S from '@/pages/Things/NoPAT/NoPATPage.styles';

import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import { IMAGES } from '@/constants/images';

const NoPATPage = () => {
  return (
    <S.ThingsContents>
      <S.HandImage
        src={IMAGES.THIGNS.HAND_TOKEN_IMAGE}
        width={12}
        height={10}
      />
      <S.PATMessageContainer>
        <S.BlueDotWrapper>
          <div>
            <Text
              size="body1"
              fontWeight="bold"
              color="blue"
              $lineHeight="30px"
            >
              Personal Access Token
            </Text>
            <Text
              size="body1"
              fontWeight="regular"
              color="blue"
              $lineHeight="30px"
            >
              이 <br /> 등록되어 있지 않습니다.
            </Text>
          </div>
        </S.BlueDotWrapper>
        <Button
          size="large"
          onClick={() => {
            const SAMSUNG_PAT_URL =
              'https://api.smartthings.com/oauth/authorize?client_id=e4467bc0-30c6-4ae0-86fc-b28cb3a88476&scope=r:locations:*%20r:devices:*%20x:devices:*&response_type=code&redirect_uri=https://5e73-121-152-137-242.ngrok-free.app/oauth/callback';
            window.location.href = SAMSUNG_PAT_URL;
          }}
        >
          발급하러 가기
        </Button>
      </S.PATMessageContainer>
    </S.ThingsContents>
  );
};

export default NoPATPage;
