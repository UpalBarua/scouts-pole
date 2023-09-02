import { Toaster } from 'react-hot-toast';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import router from './router/router';

const App = () => {
  return (
    <AuthProvider>
      <PhotoProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </PhotoProvider>
    </AuthProvider>
  );
};

export default App;
