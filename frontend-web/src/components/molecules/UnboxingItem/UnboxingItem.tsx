import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from './UnboxingItem.styles';
import { UnboxingProps } from '@/types/inventory';

const UnboxingItem = ({ unBoxThingList }: UnboxingProps) => {
  return (
    <S.UnboxingHistoryContainer>
      <Text size={'body1'} fontWeight={'bold'} $marginTop="10px">
        언박띵 내역
      </Text>
      <S.UnboxingItemWrapper>
        {unBoxThingList.map((item, index) => (
          <S.UnboxingItemContainer key={index}>
            <S.UnboxingItemBox>
              <S.TextWrapper>
                <Text size={'small1'} fontWeight={'bold'} color={'grey1'}>
                  {item.objectName}
                </Text>
              </S.TextWrapper>
            </S.UnboxingItemBox>
            <S.ImageWrapper>
              <Image src={item.objectImagePath} $unit={'px'} height={80} />
            </S.ImageWrapper>
            <S.DateBox>
              <Text size={'small2'} fontWeight={'bold'} color={'grey1'}>
                {item.purchaseDay}
              </Text>
            </S.DateBox>
          </S.UnboxingItemContainer>
        ))}
      </S.UnboxingItemWrapper>
    </S.UnboxingHistoryContainer>
  );
};

export default UnboxingItem;
