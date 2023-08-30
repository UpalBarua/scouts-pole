import React from "react";
import useUser from "../hooks/use-user";
import { Navigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { useAuth } from "../contexts/auth-context";

const RouteGuard = ({ children }) => {
  const { user, userLoading } = useUser();
  const { user: baseUser, isLoading } = useAuth();
  return userLoading || isLoading ? (
    <div className="flex justify-center items-center h-64 text-6xl">
      <CgSpinner className="animate-spin" />
    </div>
  ) : baseUser || user._id ? (
    children
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default RouteGuard;
