import Header from '@/components/molecules/Header/Header';
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
        <Button size="large">발급하러 가기</Button>
      </S.PATMessageContainer>
    </S.ThingsContents>
  );
};

export default NoPATPage;
