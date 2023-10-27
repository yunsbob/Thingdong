import { CHILDREN_PATH, PATH } from '@/constants/path';
import { Outlet, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>얘는 고정인데요</div>
      <div>
        <button
          onClick={() => {
            navigate(CHILDREN_PATH.HOME);
          }}
        >
          home
        </button>
        <button
          onClick={() => {
            navigate(CHILDREN_PATH.FRIEND);
          }}
        >
          friend
        </button>
        <button
          onClick={() => {
            navigate(CHILDREN_PATH.THINGS);
          }}
        >
          things
        </button>
        <button
          onClick={() => {
            navigate(CHILDREN_PATH.INVENTORY);
          }}
        >
          inventory
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;
