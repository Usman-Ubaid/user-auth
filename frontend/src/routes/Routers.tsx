import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Routers = () => {
  const routes = [
    { id: 1, path: "/signin", element: <Signin /> },
    { id: 2, path: "/signup", element: <Signup /> },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Routers;
