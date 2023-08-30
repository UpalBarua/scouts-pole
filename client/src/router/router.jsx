import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import RouteGuard from '../components/route-guard';

// pages
import HomePage from '../pages/home';
import AuthPage from '../pages/auth';
import NewPolePage from '../pages/new-pole';
import HistoryPage from '../pages/history';
import ProtectAdmin from '../Protected-Routes/ProtectAdmin';

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
        element:<ProtectAdmin> <NewPolePage /></ProtectAdmin>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export default router;
