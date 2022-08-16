import { Route, Routes, Navigate } from "react-router-dom";
// import { RoutPath } from "../src/types/routes";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { useAuth } from "./contexts/auth";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} />} />
    </Routes>
  );
};

export default Router;
