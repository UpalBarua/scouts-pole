import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

// pages
import History from '../pages/History';
import HomePage from '../pages/home';
import AuthPage from '../pages/auth';
import HistoryPage from '../pages/history';
import NewPolePage from '../pages/new-pole';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/new-pole',
        element: <NewPolePage />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
]);

export default router;
