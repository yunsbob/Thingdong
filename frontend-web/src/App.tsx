import MainPage from '@/pages/Main/MainPage';
import React, { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      {/* 로그인 안 되어 있다면 로그인 페이지  */}

      {/* 로그인 되어 있다면 메인 페이지  */}
      <MainPage />
    </Suspense>
  );
};

export default App;
