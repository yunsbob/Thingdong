import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/Things/PAT/PATPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { NoThings } from '@/pages/Things/PAT/NoThings/NoThings';
import { thingStatusToKo } from '@/constants/thingStatusToKo';
import { useEffect, useRef, useState } from 'react';
import Modal from '@/components/molecules/Modal/Modal';

import addIcon from '@/assets/images/friend/add.png';
import onIcon from '@/assets/images/things/on.png';
import offIcon from '@/assets/images/things/off.png';
import { changeModalOpen } from '@/utils/changeModalOpen';
import { PATModal } from '@/pages/Things/PAT/PATModal/PATModal';
import { longClickEventRef } from '@/utils/longClickEvent';
import { useLongPress } from '@/hooks/useLongPress';

interface ThingsList {
  src: string;
  status: 'ON' | 'OFF' | 'OFFLINE';
  isSensor: 'Y' | 'N';
  name: string;
}

const PATPage = () => {
  const [thingsList, setThingsList] = useState<ThingsList[]>([
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
  ]);
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <S.PATPageContainer>
      <PATModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <S.ThingsGetButton
        onClick={() => changeModalOpen(modalOpen, setModalOpen)}
      >
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
                onClick={onClickThingsBlock(things, idx)}
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
    </S.PATPageContainer>
  );
};

export { PATPage };
