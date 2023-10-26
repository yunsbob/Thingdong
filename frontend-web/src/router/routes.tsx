import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { PATH } from '@/constants/path';

const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <App />,
        // errorElement: <NotFoundPage />
        // children: [
        //     {path: 'example', element: <SomePage /> },
        //     {path: 'example2', element: <SomePage2 /> },
        // ],
    }
])

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;