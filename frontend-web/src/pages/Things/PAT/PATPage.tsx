import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/Things/PAT/PATPage.styles';

import addIcon from '@/assets/images/friend/add.png';
import { Text } from '@/components/atoms/Text/Text.styles';

import onIcon from '@/assets/images/things/on.png';
import offIcon from '@/assets/images/things/off.png';
import { NoThings } from '@/pages/Things/PAT/NoThings/NoThings';
import { thingStatusToKo } from '@/constants/thingStatusToKo';

interface ThingsList {
  src: string;
  status: 'ON' | 'OFF' | 'OFFLINE';
  isSensor: 'Y' | 'N';
  name: string;
}

const PATPage = () => {
  const thingsList: ThingsList[] = [
    {
      src: 'https://thingdong.com/images/dummythings1.png',
      status: 'ON',
      isSensor: 'N',
      name: 'BESPOKE 제트',
    },
    {
      src: 'https://thingdong.com/images/dummythings2.png',
      status: 'OFFLINE',
      isSensor: 'N',
      name: 'Benexmart 3.0',
    },
    {
      src: 'https://thingdong.com/images/dummythings3.png',
      status: 'ON',
      isSensor: 'Y',
      name: '문열림센서',
    },
    {
      src: 'https://thingdong.com/images/dummythings4.png',
      status: 'OFF',
      isSensor: 'N',
      name: '스테이션',
    },
    {
      src: 'https://thingdong.com/images/dummythings3.png',
      status: 'ON',
      isSensor: 'Y',
      name: '온습도센서',
    },
    {
      src: 'https://thingdong.com/images/dummythings2.png',
      status: 'OFF',
      isSensor: 'N',
      name: '스마트 컬러 전구',
    },
    {
      src: 'https://thingdong.com/images/dummythings1.png',
      status: 'ON',
      isSensor: 'N',
      name: 'BESPOKE 제트',
    },
    {
      src: 'https://thingdong.com/images/dummythings4.png',
      status: 'ON',
      isSensor: 'N',
      name: '스테이션',
    },
    {
      src: 'https://thingdong.com/images/dummythings3.png',
      status: 'OFFLINE',
      isSensor: 'Y',
      name: '문열림센서',
    },
  ];
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <S.ThingsGetButton>
        <Image src={addIcon} width={1} height={1} />
        <Text size="body3" fontWeight="extraBold" color="blue">
          기기 불러오기
        </Text>
      </S.ThingsGetButton>
      {thingsList.length === 0 ? (
        <NoThings />
      ) : (
        <S.ThingsListContainer>
          {thingsList.map((things, idx) => {
            return (
              <S.ThingsContainer
                key={idx}
                $isOffline={things.status === 'OFFLINE'}
              >
                <S.ThingStatusWrapper
                  src={things.status === 'ON' ? onIcon : offIcon}
                  width={2.3}
                />
                <Image src={things.src} width={3} />
                <Text size="body4" fontWeight="bold">
                  {things.name}
                </Text>
                <Text
                  size="body3"
                  fontWeight="bold"
                  color={things.status === 'ON' ? 'blue' : 'grey2'}
                >
                  {things.isSensor === 'Y'
                    ? thingStatusToKo.SENSOR[things.status]
                    : thingStatusToKo[things.status]}
                </Text>
                {things.status === 'OFFLINE' && <S.ThingsWrapper />}
              </S.ThingsContainer>
            );
          })}
        </S.ThingsListContainer>
      )}
    </div>
  );
};

export { PATPage };
