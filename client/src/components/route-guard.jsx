import React from 'react';
import useUser from '../hooks/use-user';
import { Navigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';

const RouteGuard = ({ children }) => {
  const { user, userLoading } = useUser();

  return userLoading ? (
    <div className="flex justify-center items-center h-64 text-6xl">
      <CgSpinner className="animate-spin" />
    </div>
  ) : user._id ? (
    children
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default RouteGuard;
