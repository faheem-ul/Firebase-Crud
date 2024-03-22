import { useContext } from "react";

import { AuthContext } from "../context/Auth.context";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
