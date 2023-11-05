import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/Things/PAT/NoThings/NoThings.style';

const NoThings = () => {
  return (
    <S.GreyDotWrapper>
      <Text size="body1" fontWeight="bold" color="grey2">
        등록된 기기가 없어요
      </Text>
    </S.GreyDotWrapper>
  );
};

export { NoThings };
