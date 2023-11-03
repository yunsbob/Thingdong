import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from './ThingStoryItem.styles';
import React from 'react';
import { useGetThingStory } from '@/apis/Inventory/Queries/useGetThingStory';

export interface ThingStoryItem {
  changeThing: number;
  isPlus: 'Y' | 'N';
  thingContent: string;
  thingDay: string;
}

const ThingStoryItem = () => {
  const thingStory = useGetThingStory();
  
  return (
    <S.ThingContainer>
      {thingStory.map((item: ThingStoryItem, index: number) => (
        <React.Fragment key={index}>
        <S.ThingWrapper >
          <S.ThingLeftWrapper>
            {item.isPlus === "Y" ? (
              <Image
                src={require('@/assets/images/thingStory/thing-plus.png').default}
                $unit={'px'}
                width={50}
                height={50}
              />
            ) : (
              <Image
                src={require('@/assets/images/thingStory/thing-minus.png').default}
                $unit={'px'}
                width={50}
                height={50}
              />
            )}
            <S.TextWrapper>
              <Text size="body3" fontWeight="bold">
                {item.thingContent}
              </Text>
              <Text size="small2" fontWeight="bold" color="grey2" $marginTop='3px'>
                {item.thingDay}
              </Text>
            </S.TextWrapper>
          </S.ThingLeftWrapper>
          {item.isPlus === "Y" ? (
            <Text size="body3" fontWeight="bold">
              + {item.changeThing}띵
            </Text>
          ) : (
            <Text size="body3" fontWeight="bold">
              - {item.changeThing}띵
            </Text>
          )}
        </S.ThingWrapper>
        <S.Hr/>
        </React.Fragment>
      ))}
    </S.ThingContainer>
  );
};

export default ThingStoryItem;
