import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import History from '../pages/History';
import HomePage from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path:'/',
        element: <HomePage />,
      },
      {
        path:"/history",
        element:<History/>
      }
    ],
  },
]);

export default router;
