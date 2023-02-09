import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
