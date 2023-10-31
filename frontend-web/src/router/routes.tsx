import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { CHILDREN_PATH, PATH } from '@/constants/path';
import MainPage from '@/pages/Main/MainPage';
import HomePage from '@/pages/Home/HomePage';
import FriendPage from '@/pages/Friend/FriendPage';
import ThingsPage from '@/pages/Things/ThinsPage';
import InventoryPage from '@/pages/Inventory/InventoryPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import SplashPage from '@/pages/Splash/SplashPage';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    // errorElement: <NotFoundPage />
    // children: [
    //     {path: 'example', element: <SomePage /> },
    //     {path: 'example2', element: <SomePage2 /> },
    // ],
    children: [
      { index: true, element: <HomePage /> },
      {
        path: CHILDREN_PATH.HOME,
        element: <HomePage />,
      },
      {
        path: CHILDREN_PATH.FRIEND,
        element: <FriendPage />,
      },
      {
        path: CHILDREN_PATH.THINGS,
        element: <ThingsPage />,
      },
      {
        path: CHILDREN_PATH.INVENTORY,
        element: <InventoryPage />,
      },
    ],
  },
  { path: PATH.SIGNUP, element: <SignUpPage /> },
  { path: PATH.SPLASH, element: <SplashPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
