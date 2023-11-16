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
import { EventSourcePolyfill } from 'event-source-polyfill';
import { QueryClient } from '@tanstack/react-query';
import { useUpdateThingsStatus } from '@/apis/Things/Mutations/useUpdateThingsStatus';
import { useCommandThingsStatus } from '@/apis/Things/Mutations/useCommandThingsStatus';

const PATPage = () => {
  let { data: response, isLoading } = useGetThings();

  const [thingsList, setThingsList] = useState<ThingsPageProps[]>([]);
  const [newThingsModalOpen, setNewThingsModalOpen] = useState(false);
  const updateThingsStatusMutation = useUpdateThingsStatus();
  const commandThingsStatusMutation = useCommandThingsStatus();
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    if (response) {
      console.log('useGetThings-devices', response.data.devices);
      setThingsList(response.data.devices);
    }
    // 옵셔널 체이닝을 사용하여 data와 devices에 안전하게 접근
    // if (response?.data?.devices) {
    //   setThingsList(response.data.devices);
    // }
  }, [response, isLoading]);

  const queryClient = new QueryClient();

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/smart/events`;

    const eventSource = new EventSourcePolyfill(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        installedappid: localStorage.getItem('installedAppId')!,
      },
    });

    // const eventSource = new EventSourcePolyfill(
    //   `${process.env.REACT_APP_SERVER_URL}/smart/events`,
    //   {eventSourceInitDict}
    // );

    eventSource.onopen = () => {
      console.log('SSE 연결 완');
    };

    eventSource.onmessage = async event => {
      queryClient.invalidateQueries({ queryKey: ['things'] });
      console.log('SSE 메시지 수신');
      // const response = await event.data;
      // const data = JSON.parse(response);
      // console.log('SSE Data', data);
    };

    eventSource.onerror = (e: any) => {
      eventSource.close();
      console.log('에러 메시지', e.error.message);

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

  // const onClickThingsBlock =
  //   (things: ThingsPageProps, idx: number) => (e: any) => {
  //     if (things.status !== 'OFFLINE') {
  //       let newThings = [...thingsList];
  //       newThings[idx] = { ...things, status: changeStatus(things.status) };

  //       setThingsList(newThings);
  //     }
  //   };

  const onClickThingsBlock =
    (things: ThingsPageProps, idx: number) => (e: any) => {
      if (things.status !== 'OFFLINE') {
        let newStatus, smartThingsStatus;
        switch (things.category) {
          case 'SmartPlug':
          case 'Switch':
          case 'Light':
            newStatus = things.status === 'ON' ? 'off' : 'on';
            smartThingsStatus = things.status === 'ON';
            setSelectedDeviceId(things.deviceId);
            break;
          case 'Blind':
            newStatus = things.status === 'OPEN' ? 'close' : 'open';
            smartThingsStatus = things.status === 'OPEN';
            break;
          default:
            newStatus = things.status; // 다른 카테고리의 경우 상태를 변경하지 않음
            smartThingsStatus = false; // 기본값
        }

        const thingStatus = {
          deviceId: things.deviceId,
          smartThingsStatus: smartThingsStatus,
        };

        updateThingsStatusMutation.mutate(thingStatus);

        commandThingsStatusMutation.mutate({
          deviceId: things.deviceId,
          data: {
            commands: [
              {
                component: 'main',
                capability:
                  things.category === 'Blind' ? 'windowShade' : 'switch',
                command: newStatus,
                arguments: [],
              },
            ],
          },
        });
        let newThings = [...thingsList];
        newThings[idx] = { ...things, status: changeStatus(things.status) };
        setThingsList(newThings);
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
      <LightModal
        modalOpen={lightModalOpen}
        setModalOpen={setLightModalOpen}
        deviceId={selectedDeviceId}
      />
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
