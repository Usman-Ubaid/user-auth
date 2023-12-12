import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ProtectedRoutes from "../privateRoutes/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  const routes = [
    { id: 1, path: "/signin", element: <Signin /> },
    { id: 2, path: "/signup", element: <Signup /> },
  ];
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Routers;
