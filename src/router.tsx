import { Route, Routes } from "react-router-dom";
import { RoutPath } from "../src/types/routes";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import { useState } from "react";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      {logged ? (
        <Route path={RoutPath.HOME} element={<Home setLogged={setLogged} />} />
      ) : (
        <Route
          path={RoutPath.LOGIN}
          element={<Login setLogged={setLogged} />}
        />
      )}
    </Routes>
  );
};

export default Router;
