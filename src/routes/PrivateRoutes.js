import React from "react";
import Layout from "../layout/Layout";
import {
  AddSupervisor,
  Dashboard,
  KYC,
  Login,
  OrderTracking,
  Trackrentals,
  UserDetails,
  DownloadKyc
} from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/kyc" element={<KYC />} />
        <Route path="/add-supervisor" element={<AddSupervisor />} />
        <Route path="/track-rentals" element={<Trackrentals />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/track" element={<OrderTracking />} />
        <Route path="/download-kyc" element={<DownloadKyc />} />
      </Routes>
    </Layout>
  );
};

export default PrivateRoutes;
