import React from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/ui/loading-spinner';
import { useAuth } from '../contexts/auth-context';
import useUser from '../hooks/use-user';

const RouteGuard = ({ children, isAdminRoute }) => {
  const { user, authLoading } = useAuth();
  const { userData } = useUser();

  if (authLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (isAdminRoute && userData?.role !== 'admin') {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default RouteGuard;
