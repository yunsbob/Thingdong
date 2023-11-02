import { Background } from '@/components/atoms/Background/Background.style';
import BottomNavBar from '@/components/molecules/BottomNavBar/BottomNavBar';
import { Spinner } from '@/components/molecules/Spinner/Spinner';
import theme from '@/styles/theme';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default MainPage;
