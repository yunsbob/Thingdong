import React from 'react';
import MainPage from '@/pages/Main/MainPage';
import LandingPage from '@/pages/Landing/LandingPage';
import { useState } from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return <>{isLogin ? <MainPage /> : <LandingPage />}</>;
};

export default App;
