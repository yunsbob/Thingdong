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

export function LandingScene() {
  return (
    <Spline scene="https://prod.spline.design/nwYEiHrS9YGtJu34/scene.splinecode" />
  );
}

export default function LandingPage() {
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
            onClick={() => navigatePage(PATH.LOGIN)}
          >
            Log In
          </Button>
          <Button
            size="large"
            option="flat"
            onClick={() => navigatePage(PATH.SIGNUP)}
          >
            Sign Up
          </Button>
        </LandingButtonWrapper>
        <SceneContainer>
          <LandingScene />
        </SceneContainer>
        <LandingTextContainer>
          <Text size={'heading1'} fontWeight="heavy" color="blue">
            ThingDong
          </Text>
        </LandingTextContainer>
      </LandingContainer>
    </>
  );
}
