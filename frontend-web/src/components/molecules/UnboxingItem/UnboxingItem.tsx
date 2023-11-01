import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from './UnboxingItem.styles';

const UnboxingItem = () => {
  const unboxingItems = [
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'chair.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
    { name: '빨간색 람보르기니 차', date: '23.10.24', imagePath: 'car.png' },
  ];
  return (
    <S.UnboxingHistoryContainer>
      <Text size={'body1'} fontWeight={'bold'} $marginTop='10px'>
        언박띵 내역
      </Text>
      <S.UnboxingItemWrapper>
        {unboxingItems.map((item, index) => (
          <S.UnboxingItemContainer key={index}>
            <S.UnboxingItemBox>
              <S.TextWrapper>
                <Text size={'small1'} fontWeight={'bold'} color={'grey1'}>
                  {item.name}
                </Text>
              </S.TextWrapper>
            </S.UnboxingItemBox>
            <S.ImageWrapper>
              <Image
                src={
                  require('@/assets/images/inventory/' + item.imagePath).default
                }
                $unit={'px'}
                // width={130}
                height={90}
              />
            </S.ImageWrapper>
            <S.DateBox>
              <Text size={'small2'} fontWeight={'bold'} color={'grey1'}>
                {item.date}
              </Text>
            </S.DateBox>
          </S.UnboxingItemContainer>
        ))}
      </S.UnboxingItemWrapper>
    </S.UnboxingHistoryContainer>
  );
};

export default UnboxingItem;
