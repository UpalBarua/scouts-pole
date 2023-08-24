import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

// pages
import HomePage from '../pages/home';
import AuthPage from '../pages/auth';
import HistoryPage from '../pages/history';
import NewPolePage from '../pages/new-pole';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import HomePage from '../pages/home';
import SignUp from '../Registration/SignUp/SignUp';
import SignIn from '../Registration/SignIn/SignIn';
import NewPole from '../pages/NewPole/NewPole';

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
        path: '/new-pole',
        element: <NewPole />,
      },
    ],
  },
]);

export default router;
