import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import router from './router/router';

const App = () => {
  return (
    <div className="container mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
