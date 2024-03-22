import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = (props) => {
  const { restricted, user } = props || {};

  return user && !restricted ? (
    <Outlet />
  ) : !user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PublicRoutes;
