import React, { Suspense } from 'react';
import MainPage from '@/pages/Main/MainPage';
import { Spinner } from '@/components/molecules/Spinner/Spinner';
import { useState } from 'react';
import LandingPage from '@/pages/Landing/LandingPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));
  return (
    <Suspense fallback={<Spinner></Spinner>}>
      {isLogin ? <MainPage /> : <LandingPage />}
    </Suspense>
  );
};

export default App;
