import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from './ThingStoryItem.styles';

const historyList = [
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 10 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 20 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 110 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 10 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 8 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 10 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 50 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 10 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 15 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 15 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 10 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 50 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 15 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 10 },
  { isPlus: false, name: '아이템 구매', date: '23.10.31', cost: 50 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 15 },
  { isPlus: true, name: '띵구네 방문', date: '23.10.31', cost: 15 },
];

const ThingStoryItem = () => {
  return (
    <S.ThingContainer>
      {historyList.map((item, index) => (
        <>
        <S.ThingWrapper key={index}>
          <S.ThingLeftWrapper>
            {item.isPlus ? (
              <Image
                src={require('@/assets/images/Thing/thing-plus.png').default}
                $unit={'px'}
                width={50}
                height={50}
              />
            ) : (
              <Image
                src={require('@/assets/images/Thing/thing-minus.png').default}
                $unit={'px'}
                width={50}
                height={50}
              />
            )}
            <S.TextWrapper>
              <Text size="body3" fontWeight="bold">
                {item.name}
              </Text>
              <Text size="small2" fontWeight="bold" color="grey2" $marginTop='3px'>
                {item.date}
              </Text>
            </S.TextWrapper>
          </S.ThingLeftWrapper>
          {item.isPlus ? (
            <Text size="body3" fontWeight="bold">
              + {item.cost}띵
            </Text>
          ) : (
            <Text size="body3" fontWeight="bold">
              - {item.cost}띵
            </Text>
          )}
        </S.ThingWrapper>
        <S.Hr/>
        </>
      ))}
    </S.ThingContainer>
  );
};

export default ThingStoryItem;
