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

function LandingScene() {
  return (
    <Spline scene="https://prod.spline.design/nwYEiHrS9YGtJu34/scene.splinecode" />
  );
}

export default function LandingPage() {
  return (
    <>
      <LandingContainer>
        <LandingButtonWrapper>
          <Button size="large" option="activated">
            LogIn
          </Button>
          <Button size="large" option="flat">
            SignUp
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
