import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import RouteGuard from '../components/route-guard';
import ProtectAdmin from '../Protected-Routes/ProtectAdmin';

// pages
import HistoryPage from '../pages/HistoryPage';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPolePage from '../pages/new-pole';

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
