import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

// pages
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPolePage from '../pages/new-pole';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/new-pole',
        element: <NewPolePage />,
      },
     
    ],
  },
]);

export default router;
