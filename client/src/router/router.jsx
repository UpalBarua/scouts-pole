import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import RouteGuard from '../components/route-guard';

// pages
import HistoryPage from '../pages/history';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPolePage from '../pages/new-pole';
import ErrorPage from '../pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <RouteGuard>
            <HomePage />
          </RouteGuard>
        ),
      },
      {
        path: '/history',
        element: (
          <RouteGuard>
            <HistoryPage />
          </RouteGuard>
        ),
      },
      {
        path: '/new-pole',
        element: (
          <RouteGuard isAdminRoute>
            <NewPolePage />
          </RouteGuard>
        ),
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
