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
import { ThingsPageProps } from '@/types/things';


// [{
//   category : DoorSensor | Station | Thermostat | Light | Switch | Blind
//   deviceId : string
//   label : string
//   status : ON | OFF | OFFLINE | OPEN(커튼용) | CLOSED(커튼용)
//   ownerId: string
//   temperature : number (ºC) 
//   humidity: number (%) 
//   hsl : {h: "", s : "", l: ""}
//   img : string // 이미지 경로 나중에 추가
//   }]

  // const [thingsList, setThingsList] = useState<ThingsList[]>([
  //   {
  //     src: 'https://thingdong.com/images/dummythings1.png',
  //     status: 'ON',
  //     isSensor: 'N',
  //     name: 'BESPOKE 제트',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings2.png',
  //     status: 'OFFLINE',
  //     isSensor: 'N',
  //     name: 'Benexmart 3.0',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings3.png',
  //     status: 'ON',
  //     isSensor: 'Y',
  //     name: '문열림센서',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings4.png',
  //     status: 'OFF',
  //     isSensor: 'N',
  //     name: '스테이션',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings3.png',
  //     status: 'ON',
  //     isSensor: 'Y',
  //     name: '온습도센서',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings2.png',
  //     status: 'OFF',
  //     isSensor: 'N',
  //     name: '스마트 컬러 전구',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings1.png',
  //     status: 'ON',
  //     isSensor: 'N',
  //     name: 'BESPOKE 제트',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings4.png',
  //     status: 'ON',
  //     isSensor: 'N',
  //     name: '스테이션',
  //   },
  //   {
  //     src: 'https://thingdong.com/images/dummythings3.png',
  //     status: 'OFFLINE',
  //     isSensor: 'Y',
  //     name: '문열림센서',
  //   },
  // ]);

  const PATPage = () => {
    const response = useGetThings();
    if (response) {
      console.log('data1111', response.data.devices);
    }
    
  const [thingsList, setThingsList] = useState<ThingsPageProps[]>([]);
  const [newThingsModalOpen, setNewThingsModalOpen] = useState(false);

  useEffect(() => {
    // 옵셔널 체이닝을 사용하여 data와 devices에 안전하게 접근
    if (response?.data?.devices) {
      setThingsList(response.data.devices);
    }
  }, [response]);

  const onClickThingsBlock = (things: ThingsPageProps, idx: number) => (e: any) => {
    if (things.status !== 'OFFLINE') {
      let newThings = [...thingsList];
      newThings[idx] = { ...things, status: changeStatus(things.status) };

      setThingsList(newThings);
    }
  };

  const changeStatus = (status: 'ON' | 'OFF' | 'OPEN' | 'CLOSED' | 'OFFLINE' | 'ONLINE') => {
    switch (status) {
      case 'ON':
        return 'OFF';
      case 'OFF':
        return 'ON';
      case 'OPEN':
        return 'CLOSED';
      case 'CLOSED':
        return 'OPEN';
      default:
        return status;
    }
  };
  const getDeviceStatusText = (category: string, status: string, temperature?: number): string => {
    switch (category) {
      case 'SmartPlug':
        return status === 'ON' ? '켜짐' : '꺼짐';
      case 'Switch':
        return status === 'ON' ? '눌림' : '안눌림';
      case 'Hub':
      case 'Thermostat':
        let text = status === 'ONLINE' ? '온라인' : '오프라인';
        if (category === 'Thermostat' && status === 'ONLINE' && temperature) {
          text += ` ${temperature}°C`;
        }
        return text;
      case 'Light':
        return status === 'ON' ? '켜짐' : '꺼짐';
      case 'Blind':
        return status === 'ON' ? '열림' : '닫힘';
      default:
        return status === 'ONLINE' ? '온라인' : '오프라인';
    }
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
                <Image src={things.img} width={3} />
                <Text size="body4" fontWeight="bold">
                  {things.label}
                </Text>
                <Text
                  size="body3"
                  fontWeight="bold"
                  color={things.status === 'ON' ? 'blue' : 'grey2'}
                >
                  {getDeviceStatusText(things.category, things.status, things.temperature)}
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


// SmartPlug "Switch" "Hub" "Thermostat" "Light" "Blind"