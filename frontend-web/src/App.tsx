import MainPage from '@/pages/Main/MainPage';
import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';

const App = () => (
  <>
    {/* 로그인 안 되어 있다면 로그인 페이지  */}

    {/* 로그인 되어 있다면 메인 페이지  */}
    <MainPage />
  </>
);

export default App;
