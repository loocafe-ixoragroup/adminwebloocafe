import React from "react";
import Layout from "../layout/Layout";
import { Dashboard, KYC, Login } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/kyc" element={<KYC />} />
      </Routes>
    </Layout>
  );
};

export default PrivateRoutes;
