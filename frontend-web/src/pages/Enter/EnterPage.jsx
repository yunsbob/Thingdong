import React from 'react';
import Spline from '@splinetool/react-spline';
import {
  LandingContainer,
  LandingTextContainer,
  SceneContainer,
  LandingButtonWrapper,
} from '@/pages/Landing/LandingPage.style';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { LandingScene } from '../Landing/LandingPage';

export default function EnterPage() {
  const navigate = useNavigate();
  const navigatePage = path => {
    navigate(path);
  };
  return (
    <>
      <LandingContainer>
        <LandingButtonWrapper>
          <Button
            size="large"
            option="activated"
            onClick={() => navigatePage(PATH.ROOT)}
          >
            벨누르고 입장하기
          </Button>
        </LandingButtonWrapper>
      </LandingContainer>
      <SceneContainer>
        <LandingScene />
        <LandingTextContainer>
          <Text size={'heading1'} fontWeight="heavy" color="blue">
            ThingDong
          </Text>
        </LandingTextContainer>
      </SceneContainer>
    </>
  );
}
