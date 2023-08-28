import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import router from './router/router';
import { Toaster, resolveValue } from 'react-hot-toast';

const App = () => {
  return (
    <div className="container mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </AuthProvider>
    </div>
  );
};

export default App;
