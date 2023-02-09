import React, { useState } from "react";
import Maintain from "../subpages/MaintainDetails/Maintain";
import Rental from "../subpages/RentalDetails/Rental";
import Tenant from "../subpages/TenantDetails/Tenant";
import Unit from "../subpages/UnitDetails/Unit";

const KYC = () => {
  const [page, setPage] = useState(0);
  const [values, setValues] = useState({});
  const components = [
    <Tenant setPage={setPage} values={values} setValues={setValues} />,
    <Maintain setPage={setPage} values={values} setValues={setValues} />,
    <Rental setPage={setPage} values={values} setValues={setValues} />,
    <Unit setPage={setPage} values={values} setValues={setValues} />,
  ];
  return <>{components[page]}</>;
};

export default KYC;
