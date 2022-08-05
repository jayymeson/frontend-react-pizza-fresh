import { Route, Routes } from "react-router-dom";
import { RoutPath } from "../src/types/routes";
import Home from "../src/pages/Home";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutPath.HOME} element={<Home />} />

      <Route path={RoutPath.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default Router;
