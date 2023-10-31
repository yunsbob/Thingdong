import { Background } from '@/components/atoms/Background/Background.style';
import BottomNavBar from '@/components/molecules/BottomNavBar/BottomNavBar';
import theme from '@/styles/theme';
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
