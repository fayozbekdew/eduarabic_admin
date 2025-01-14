import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const login = JSON.parse(localStorage.getItem("login")!)
    ? JSON.parse(localStorage.getItem("login")!)
    : false;
  return login !== false ? (
    <Outlet />
  ) : (
    <Navigate to={`/login`} />
  );
};

export default PrivateRoute;
