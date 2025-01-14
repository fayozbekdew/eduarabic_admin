import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import Login from "../Componant/Authentication/Login";

const RouterData = () => {
  const baseUrl = "";
  const login = JSON.parse(localStorage.getItem("login") || "false");

  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        {login && (
          <Route
            path={"/"}
            element={<Navigate to={`/dashboard/default`} />}
          />
        )}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/*" element={<LayoutRoutes />} />
        </Route>
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={Component} key={i} />
        ))}
        <Route path={`/login`} element={<Login />} />
        <Route path="*" element={<Navigate to={`/login`} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterData;
