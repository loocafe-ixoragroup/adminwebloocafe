import React from "react";
import Layout from "../layout/Layout";
import {
  AddSupervisor,
  Dashboard,
  KYC,
  OrderTracking,
  Trackrentals,
  UserDetails,
  DownloadKyc,
  Supervisors_List,
} from "../pages";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { getKycData } from "../apis/Api";
import Supervisor from "../subpages/AddnewSupervisor/Supervisor";
import List from "../subpages/ListofSupervisors/List";

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/kyc" element={<KYC />} />
        <Route path="/add-supervisor" element={<Supervisor />} />
        <Route path="/list-all-supervisor" element={<List />} />
        <Route path="/track-rentals" element={<Trackrentals />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/track" element={<OrderTracking />} />
        <Route path="/download-kyc/:loocafeId" element={<DownloadKyc />} />
        <Route path="/list-supervisors" element={<Supervisors_List />} />
      </Routes>
    </Layout>
  );
};

export default PrivateRoutes;
