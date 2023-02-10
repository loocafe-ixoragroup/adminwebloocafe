import React, { useState } from "react";
import { DataProvider } from "../context/KycContext";
import Maintain from "../subpages/MaintainDetails/Maintain";
import Rental from "../subpages/RentalDetails/Rental";
import Tenant from "../subpages/TenantDetails/Tenant";
import Unit from "../subpages/UnitDetails/Unit";

const KYC = () => {
  const [page, setPage] = useState(0);
  // const [values, setValues] = useState({});
  const components = [
    <Tenant setPage={setPage} />,
    <Maintain setPage={setPage} />,
    <Rental setPage={setPage} />,
    <Unit setPage={setPage} />,
  ];
  return <DataProvider>{components[page]}</DataProvider>;
};

export default KYC;
