import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/Things/PAT/PATPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { NoThings } from '@/pages/Things/PAT/NoThings/NoThings';
import { thingStatusToKo } from '@/constants/thingStatusToKo';
import { useEffect, useRef, useState } from 'react';
import Modal from '@/components/molecules/Modal/Modal';

import { changeModalOpen } from '@/utils/changeModalOpen';
import { NewThingsModal } from '@/pages/Things/PAT/Modal/NewThingsModal/NewThingsModal';
import { useLongPress } from '@/hooks/useLongPress';
import { LightModal } from '@/pages/Things/PAT/Modal/LightModal/LightModal';
import { IMAGES } from '@/constants/images';
import { useGetThings } from '@/apis/Things/Queries/useGetThings';
import { thingsInstance } from '@/apis/instance';

interface ThingsList {
  src: string;
  status: 'ON' | 'OFF' | 'OFFLINE';
  isSensor: 'Y' | 'N';
  name: string;
}

const PATPage = () => {
  const data = useGetThings();
  if (data) {
    console.log('data1111', data);
  }
  

  

  // const [wholeData, setWholeData] = useState({
  //   locationId: '447d8a8b-d16b-48ac-a19a-232436a44f72',
  //   errorMessage: '',
  //   devices: [
  //     {
  //       deviceId: '44f8383c-8038-42c3-a684-2800a55b1a48',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'SmartPlug',
  //       label: 'Aqara Smart Plug 1',
  //       switchStatus: 'on',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: '9f9ffda3-982f-47a4-808f-b34a26a66414',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Thermostat',
  //       label: 'Aqara Temperature and Humidity Sensor T1',
  //       switchStatus: '',
  //       humidityStatus: 44,
  //       temperatureStatus: 26,
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: '80449d40-5f15-4a47-9dba-e1e6b7976d2c',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Charger',
  //       label: 'SmartThings Station',
  //       switchStatus: '',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: '0994236d-f8d4-4472-aba6-fe0335bf9b55',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Hub',
  //       label: 'SmartThings Station',
  //       switchStatus: '',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: 'a9f78294-fc9f-4245-80bd-fe2eea0fcac4',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Switch',
  //       label: 'test',
  //       switchStatus: 'off',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: 'edccc0e5-238c-4030-9071-0360542cba26',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Switch',
  //       label: '봇 31',
  //       switchStatus: 'off',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: '',
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: '6e0eac14-6f36-4f7b-8d12-ea17b0673782',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Blind',
  //       label: '전동커튼 E2',
  //       switchStatus: '',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: 'closed',
  //       levelStatus: 0,
  //       hueStatus: '',
  //       saturationStatus: '',
  //     },
  //     {
  //       deviceId: 'f46e189b-d634-4a99-b37e-c2c4a6bc3af1',
  //       ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
  //       category: 'Light',
  //       label: '컬러 전구 EE',
  //       switchStatus: 'off',
  //       humidityStatus: '',
  //       temperatureStatus: '',
  //       blindStatus: '',
  //       levelStatus: 30,
  //       hueStatus: 9.722222222222221,
  //       saturationStatus: 100,
  //     },
  //   ],
  // });

  const [thingsList, setThingsList] = useState<ThingsList[]>([
    {
      // deviceId: '44f8383c-8038-42c3-a684-2800a55b1a48',
      // ownerId: 'ac267370-1351-16e0-afbd-275fed04e953',
      // category: 'SmartPlug',
      // label: 'Aqara Smart Plug 1',
      // switchStatus: 'on',
      // humidityStatus: '',
      // temperatureStatus: '',
      // blindStatus: '',
      // levelStatus: '',
      // hueStatus: '',
      // saturationStatus: '',
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
  ]);

  const [newThingsModalOpen, setNewThingsModalOpen] = useState(false);

  const onClickThingsBlock = (things: ThingsList, idx: number) => (e: any) => {
    if (things.status !== 'OFFLINE') {
      let newThings = [...thingsList];
      newThings[idx] = { ...things, status: changeStatus(things.status) };

      setThingsList(newThings);
    }
  };

  const changeStatus = (status: 'ON' | 'OFF') => {
    return status === 'ON' ? 'OFF' : 'ON';
  };

  const [lightModalOpen, setLightModalOpen] = useState(false);
  const thingsBlockLongPress = useLongPress(() => {
    changeModalOpen(lightModalOpen, setLightModalOpen);
  }, 800);

  return (
    <S.PATPageContainer>
      <LightModal modalOpen={lightModalOpen} setModalOpen={setLightModalOpen} />
      <NewThingsModal
        modalOpen={newThingsModalOpen}
        setModalOpen={setNewThingsModalOpen}
      />
      <S.ThingsGetButton
        onClick={() =>
          changeModalOpen(newThingsModalOpen, setNewThingsModalOpen)
        }
      >
        <Image src={IMAGES.FRIEND.ADD_ICON} width={1} height={1} />
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
                onClick={onClickThingsBlock(things, idx)}
                {...thingsBlockLongPress}
              >
                <S.ThingStatusWrapper
                  src={
                    things.status === 'ON'
                      ? IMAGES.THIGNS.ON_ICON
                      : IMAGES.THIGNS.OFF_ICON
                  }
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
    </S.PATPageContainer>
  );
};

export { PATPage };
