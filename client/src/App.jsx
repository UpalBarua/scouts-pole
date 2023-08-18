import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { AuthProvider } from './contexts/auth-context';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
};

export default App;
