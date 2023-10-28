import MainPage from '@/pages/Main/MainPage';
import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';

const App = () => (
  <>
    <Text size="heading1" fontWeight="regular">
      띵동 heading1 & regular
    </Text>
    <Text size="heading2" fontWeight="bold">
      띵동 heading2 & bold
    </Text>
    <Text size="heading2">
      띵동 heading3
    </Text>

    {/* 로그인 안 되어 있다면 로그인 페이지  */}

    {/* 로그인 되어 있다면 메인 페이지  */}
    <MainPage />
  </>
);

export default App;
