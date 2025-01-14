import RouterData from "./Routes";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Componant/Authentication/Login";

const App = () => {
  return (
    <>
      <RouterData />
      <ToastContainer />
    </>
  );
};

export default App;
