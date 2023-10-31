import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { CHILDREN_PATH, PATH } from '@/constants/path';
import MainPage from '@/pages/Main/MainPage';
import HomePage from '@/pages/Home/HomePage';
import FriendPage from '@/pages/Friend/FriendPage';
import ThingsPage from '@/pages/Things/ThinsPage';
import InventoryPage from '@/pages/Inventory/InventoryPage';
import LandingPage from '@/pages/Landing/LandingPage';
import ThingStoryPage from '@/pages/ThingStory/ThingStory';

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
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.HOME,
        element: <HomePage />,
      },
      {
        path: CHILDREN_PATH.BOTTOM_NAV_PATH.FRIEND,
        element: <FriendPage />,
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
  { path: PATH.LANDING, element: <LandingPage /> },
  { path: CHILDREN_PATH.THINGSTORY, element: <ThingStoryPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
