import BottomNavBar from '@/components/molecules/BottomNavBar';
import { CHILDREN_PATH, PATH } from '@/constants/path';
import { Outlet, useNavigate } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default MainPage;
