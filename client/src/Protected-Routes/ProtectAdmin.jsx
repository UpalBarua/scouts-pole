import React from "react";
import { useAuth } from "../contexts/auth-context";
import useUser from "../Hooks/use-user";
import { CgSpinner } from "react-icons/cg";
import { Navigate } from "react-router-dom";
const ProtectAdmin = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { user: admin, userLoading } = useUser();

  // console.log(admin, user, userLoading, isLoading);

  if (isLoading || userLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-6xl">
        <CgSpinner className="animate-spin" />
      </div>
    );
  }
  if (user && admin?.role === "admin") {
    return children;
  } else {
    return <Navigate to={"/auth"} replace></Navigate>;
  }
};

export default ProtectAdmin;
