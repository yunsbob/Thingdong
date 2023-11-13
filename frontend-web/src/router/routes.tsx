import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { CHILDREN_PATH, PATH } from '@/constants/path';
import MainPage from '@/pages/Main/MainPage';
import HomePage from '@/pages/Home/HomePage';
import FriendPage from '@/pages/Friend/FriendPage';
import ThingsPage from '@/pages/Things/ThinsPage';
import InventoryPage from '@/pages/Inventory/InventoryPage';
import ThingStoryPage from '@/pages/ThingStory/ThingStoryPage';
import FriendSearchPage from '@/pages/Friend/Search/FriendSearchPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import SplashPage from '@/pages/Splash/SplashPage';
import LoginPage from '@/pages/Login/LoginPage';
import FriendRoomPage from '@/pages/FriendRoom/FriendRoomPage';
import Redirect from '@/pages/Things/NoPAT/Redirect';
const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.HOME,
        element: <HomePage />,
      },
      {
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.FRIEND,
        element: <FriendPage />,
        children: [
          {
            path: CHILDREN_PATH.FRIEND_SEARCH,
            element: <FriendSearchPage />,
          },
        ],
      },
      {
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.THINGS,
        element: <ThingsPage />,
      },
      {
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.INVENTORY,
        element: <InventoryPage />,
      },
    ],
  },
  { path: CHILDREN_PATH.THINGSTORY, element: <ThingStoryPage /> },
  { path: PATH.SIGNUP, element: <SignUpPage /> },
  { path: PATH.SPLASH, element: <SplashPage /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.FRIENDROOM, element: <FriendRoomPage /> }, //TODO: 여기 friendId값 넘길거임...(외부에서)
  { path: PATH.REDIRECT, element: <Redirect /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
