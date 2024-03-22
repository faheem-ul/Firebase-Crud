import { useContext } from "react";

import { AuthContext } from "../context/Auth.context";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
