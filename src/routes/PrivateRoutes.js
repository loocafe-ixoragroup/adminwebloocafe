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
import UpdateKycForm from "../subpages/UpdateKycForm/UpdateKycForm";
import AddAssignedLoocafe from "../subpages/AddAssignedLoocafe/AddAssignedLoocafe";
import SupervisorDetails from "../subpages/SupervisorDetails/SupervisorDetails";
import UpdateSupervisorDetails from "../subpages/UpdateSupervisorDetails/UpdateSupervisorDetails";

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/track-rentals" element={<Trackrentals />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route exact path="/kyc" element={<KYC />} />

        {/* track routes (loocafe)*/}
        <Route path="/track" element={<OrderTracking />} />
        <Route
          path="/track/download-kyc/:loocafeId"
          element={<DownloadKyc />}
        />
        <Route path="/track/edit-kyc/:loocafeId" element={<UpdateKycForm />} />

        {/* supervisor routes */}
        <Route path="/supervisor" element={<List />} />
        <Route path="/supervisor/add-supervisor" element={<Supervisor />} />
        <Route
          path="/supervisor/supervisor-details/:supervisorId"
          element={<SupervisorDetails />}
        />
        <Route
          path="/supervisor/edit-supervisor/:supervisorId"
          element={<UpdateSupervisorDetails />}
        />
        <Route
          path="/supervisor/assigned-loocafes/:supervisorId"
          element={<Supervisors_List />}
        />
      </Routes>
    </Layout>
  );
};

export default PrivateRoutes;
