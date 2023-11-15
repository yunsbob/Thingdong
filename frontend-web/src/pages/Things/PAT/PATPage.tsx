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
import EventSource from 'eventsource';

const PATPage = () => {
  const response = useGetThings();
  if (response) {
    console.log('useGetThings-devices', response.data.devices);
  }

  const [thingsList, setThingsList] = useState<ThingsPageProps[]>([]);
  const [newThingsModalOpen, setNewThingsModalOpen] = useState(false);

  useEffect(() => {
    // 옵셔널 체이닝을 사용하여 data와 devices에 안전하게 접근
    if (response?.data?.devices) {
      setThingsList(response.data.devices);
    }
  }, [response]);

  useEffect(() => {
    const eventSourceInitDict = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        installedappid: localStorage.getItem('installedAppId'),
      },
    };

    const eventSource = new EventSource(
      `${process.env.REACT_APP_SERVER_URL}/smart/events`,
      eventSourceInitDict
    );

    eventSource.onopen = () => {
      console.log('SSE 연결 완');
    };

    eventSource.onmessage = async event => {
      const response = await event.data;
      const data = JSON.parse(response);
      console.log('SSE Data', data);
    };

    eventSource.onerror = (e: any) => {
      eventSource.close();

      if (e.error) {
        console.log('SSE 에러');
      }

      if (e.target.readyState === EventSource.CLOSED) {
        console.log('종료');
      }
    };

    // eventSource.addEventListener('message', async function (event) {
    //   const data = JSON.parse(event.data);
    //   console.log('SSE 테스트', data);
    // });

    // eventSource.addEventListener('close', () => eventSource.close());

    return () => eventSource.close();
  });

  const onClickThingsBlock =
    (things: ThingsPageProps, idx: number) => (e: any) => {
      if (things.status !== 'OFFLINE') {
        let newThings = [...thingsList];
        newThings[idx] = { ...things, status: changeStatus(things.status) };

        setThingsList(newThings);
      }
    };

  const changeStatus = (
    status: 'ON' | 'OFF' | 'OPEN' | 'CLOSED' | 'OFFLINE' | 'ONLINE'
  ) => {
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
  const getDeviceStatusText = (
    category: string,
    status: string,
    temperature?: number
  ): string => {
    switch (category) {
      case 'SmartPlug':
        return status === 'ON' ? '켜짐' : '꺼짐';
      case 'Switch':
        return status === 'ON' ? '눌림' : '안눌림';
      case 'Hub':
      case 'Thermostat':
        let text = status === 'ONLINE' ? '온라인' : '오프라인';
        if (category === 'Thermostat' && status === 'ONLINE' && temperature) {
          `${temperature}°C`;
        }
        return text;
      case 'Light':
        return status === 'ON' ? '켜짐' : '꺼짐';
      case 'Blind':
        return status === 'OPEN' ? '열림' : '닫힘';
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
                    things.status === 'ON' ||
                    things.status === 'ONLINE' ||
                    things.status === 'OPEN'
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
                  {getDeviceStatusText(
                    things.category,
                    things.status,
                    things.temperature
                  )}
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
