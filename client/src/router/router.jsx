import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import RouteGuard from '../components/route-guard';
import ProtectAdmin from '../Protected-Routes/ProtectAdmin';

// pages
import HistoryPage from '../pages/history';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPolePage from '../pages/new-pole';
import ErrorPage from '../pages/error';

const router = createBrowserRouter([
  {
    path: '/',
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
        path: '/new-pole',
        element: (
          <ProtectAdmin>
            <NewPolePage />
          </ProtectAdmin>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
