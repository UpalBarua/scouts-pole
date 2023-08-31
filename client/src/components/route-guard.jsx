import React from 'react';
import useUser from '../hooks/use-user';
import { Navigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
import { useAuth } from '../contexts/auth-context';

const RouteGuard = ({ children, isAdminRoute }) => {
  const { user, authLoading } = useAuth();
  const { userData } = useUser();

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-6xl">
        <CgSpinner className="animate-spin" />
      </div>
    );
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
