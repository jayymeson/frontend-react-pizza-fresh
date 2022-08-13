import { Route, Routes, Navigate } from "react-router-dom";
import { RoutPath } from "../src/types/routes";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import { Dispatch, SetStateAction, useState } from "react";
import Settings from "./pages/Settings";
import { useAuth } from "./contexts/auth";

const Router = () => {
  const { logged } = useAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path={RoutPath.HOME} element={<Home />} />
          <Route path={RoutPath.SETTINGS} element={<Settings />} />
        </>
      ) : (
        <Route path={RoutPath.LOGIN} element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} />} />
    </Routes>
  );
};

export default Router;
