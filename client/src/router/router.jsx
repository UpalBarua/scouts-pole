import { createBrowserRouter } from 'react-router-dom';
import RouteGuard from '../components/route-guard';
import RootLayout from '../layouts/root-layout';

// pages
import ErrorPage from '../components/ErrorPage/ErrorPage';
import HistoryPage from '../pages/HistoryPage';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPolePage from '../pages/new-pole';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    element: (
      <RouteGuard>
        <RootLayout />
      </RouteGuard>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path:'/history',
        element:<HistoryPage/>
      },
      {
        path: '/new-pole',
        element:<NewPolePage/>,
      },
     
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export default router;
