import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import RouteGuard from '../components/route-guard';

// pages
import HistoryPage from '../pages/history';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import NewPollPage from '../pages/new-poll';
import ErrorPage from '../pages/error';
import EditPollPage from '../pages/edit-poll';

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
        path: '/new-poll',
        element: (
          <RouteGuard isAdminRoute>
            <NewPollPage />
          </RouteGuard>
        ),
      },
      {
        path: '/edit-poll/:pollId',
        element: (
          <RouteGuard isAdminRoute>
            <EditPollPage />
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
